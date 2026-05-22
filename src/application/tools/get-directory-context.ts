
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';
import fg from 'fast-glob';
import type { BundleResult } from '../../types.js';
import { LRUCache } from '../../infrastructure/cache/lru-cache.js';
import { Logger } from '../../logger/logger.js';
import { checkFile, DEFAULT_SECURITY_CONFIG, mergeSecurityConfig } from '../../infrastructure/security/security-guard.js';
import { formatFileBlock, formatBundleResult, type FormattedBlock } from '../formatter/bundle-formatter.js';
import { loadConfig, resolveSecurityConfig, resolveMaxTotalSizeKb } from '../../infrastructure/config/config-loader.js';

export interface GetDirectoryContextArgs {
  rootPath: string;
  configPath?: string;
  excludePatterns?: string[];
}

export async function getDirectoryContext(
  args: GetDirectoryContextArgs,
  cache: LRUCache,
  logger: Logger,
): Promise<BundleResult> {
  const rootPath = path.resolve(args.rootPath);

  let securityConfig = DEFAULT_SECURITY_CONFIG;
  let maxTotalSizeKb = 2048;

  if (args.configPath) {
    try {
      const config = loadConfig(rootPath, args.configPath);
      securityConfig = resolveSecurityConfig(config);
      maxTotalSizeKb = resolveMaxTotalSizeKb(config);
    } catch (err) {
      logger.warn('Failed to load config, using defaults', { error: String(err) });
    }
  }

  let files: string[];
  try {
    files = await fg('**/*', {
      cwd: rootPath,
      absolute: true,
      onlyFiles: true,
      followSymbolicLinks: false,
      dot: true,
      ignore: ['**/node_modules/**', '**/.git/**'],
    });
  } catch (err) {
    logger.error('Failed to list directory', { path: rootPath, error: String(err) });
    return { content: '', filesIncluded: 0, filesOmitted: 0, truncated: false, omittedFiles: [] };
  }

  const blocks: FormattedBlock[] = [];
  let omittedCount = 0;

  for (const absolutePath of files) {
    const relativePath = path.relative(rootPath, absolutePath).replace(/\\/g, '/');

    const secCheck = checkFile(absolutePath, securityConfig, args.excludePatterns);
    if (!secCheck.allowed) {
      logger.debug('File denied by security guard', { file: relativePath, reason: secCheck.reason });
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

export function getDirectoryContextMcpResponse(result: BundleResult): {
  content: Array<{ type: 'text'; text: string }>;
} {
  return {
    content: [{ type: 'text', text: result.content }],
  };
}
