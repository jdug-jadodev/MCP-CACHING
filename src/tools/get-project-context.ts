// src/tools/get-project-context.ts
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';
import type { BundleResult } from '../types.js';
import { LRUCache } from '../cache/lru-cache.js';
import { Logger } from '../logger/logger.js';
import { checkFile, DEFAULT_SECURITY_CONFIG, mergeSecurityConfig } from '../security/security-guard.js';
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
    return { content: '', filesIncluded: 0, filesOmitted: 0, truncated: false, omittedFiles: [] };
  }

  const blocks: FormattedBlock[] = [];
  let omittedCount = 0;

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
      blocks.push({ relativePath, formattedBlock: cached.block });
    } else {
      const formattedBlock = formatFileBlock(relativePath, fingerprint, fileContent);
      cache.set(cacheKey, { fingerprint, block: formattedBlock });
      blocks.push({ relativePath, formattedBlock });
    }
  }

  const result = formatBundleResult(blocks, maxTotalSizeKb);
  result.filesOmitted += omittedCount;

  return result;
}

export function getProjectContextMcpResponse(result: BundleResult): {
  content: Array<{ type: 'text'; text: string }>;
} {
  return {
    content: [{ type: 'text', text: result.content }],
  };
}
