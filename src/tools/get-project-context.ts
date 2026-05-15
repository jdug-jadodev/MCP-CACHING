// src/tools/get-project-context.ts
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';
import type { BundleResult } from '../types.js';
import { LRUCache } from '../cache/lru-cache.js';
import { Logger } from '../logger/logger.js';
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
import { formatFileBlock, formatBundleResult, type FormattedBlock } from '../formatter/bundle-formatter.js';
import { loadConfig, resolveSecurityConfig, resolveMaxTotalSizeKb } from '../config/config-loader.js';

export interface GetProjectContextArgs {
  paths: string[];
  projectRoot?: string;
  configPath?: string;
}

export async function getProjectContext(
  args: GetProjectContextArgs,
  cache: LRUCache,
  logger: Logger,
): Promise<BundleResult> {
  const projectRoot = args.projectRoot ? path.resolve(args.projectRoot) : process.cwd();
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });

  let securityConfig = DEFAULT_SECURITY_CONFIG;
  let maxTotalSizeKb = 2048;

  if (args.configPath) {
    try {
      const config = loadConfig(projectRoot, args.configPath);
      securityConfig = resolveSecurityConfig(config);
      maxTotalSizeKb = resolveMaxTotalSizeKb(config);
    } catch (err) {
      logger.warn('Failed to load config, using defaults', { error: String(err) });
    }
  }

  if (args.paths.length === 0) {
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
    return { content: '', filesIncluded: 0, filesOmitted: 0, truncated: false, omittedFiles: [] };
  }

  const blocks: FormattedBlock[] = [];
  let omittedCount = 0;
  let cacheHits = 0;
  let cacheMisses = 0;

  for (const filePath of args.paths) {
    const absolutePath = path.resolve(projectRoot, filePath);
    const relativePath = path.relative(projectRoot, absolutePath).replace(/\\/g, '/');

    const secCheck = checkFile(absolutePath, securityConfig);
    if (!secCheck.allowed) {
      logger.warn('File denied by security guard', { file: relativePath, reason: secCheck.reason });
      omittedCount++;
      continue;
    }

    let fileContent: string;
    try {
      fileContent = fs.readFileSync(absolutePath, 'utf8');
    } catch (err) {
      logger.warn('Failed to read file', { file: absolutePath, error: String(err) });
      omittedCount++;
      continue;
    }

    const fingerprint = crypto.createHash('sha256').update(fileContent).digest('hex');
    const cacheKey = absolutePath;
    const cached = cache.get(cacheKey);

    if (cached && cached.fingerprint === fingerprint) {
      logger.debug('Cache hit', { file: relativePath });
      cacheHits++;
      blocks.push({ relativePath, formattedBlock: cached.block });
    } else {
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
      const formattedBlock = formatFileBlock(relativePath, fingerprint, fileContent);
      cache.set(cacheKey, { fingerprint, block: formattedBlock });
      blocks.push({ relativePath, formattedBlock });
    }
  }

  const result = formatBundleResult(blocks, maxTotalSizeKb);
  result.filesOmitted += omittedCount;

  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

  return result;
}

export function getProjectContextMcpResponse(result: BundleResult): {
  content: Array<{ type: 'text'; text: string }>;
} {
  return {
    content: [{ type: 'text', text: result.content }],
  };
}
