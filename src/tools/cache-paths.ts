// src/tools/cache-paths.ts
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';
import type { LRUCache } from '../cache/lru-cache.js';
import type { Logger } from '../logger/logger.js';

export interface CachePathsArgs {
  paths: string[];
  projectRoot?: string;
}

export async function cachePaths(args: CachePathsArgs, cache: LRUCache, logger: Logger): Promise<{ cached: number; skipped: number }> {
  const projectRoot = args.projectRoot ? path.resolve(args.projectRoot) : process.cwd();
  let cached = 0;
  let skipped = 0;

  for (const p of args.paths) {
    const absolutePath = path.resolve(projectRoot, p);
    let fileContent: string;
    try {
      fileContent = fs.readFileSync(absolutePath, 'utf8');
    } catch (err) {
      logger.warn('cachePaths: failed to read file', { file: absolutePath, error: String(err) });
      skipped++;
      continue;
    }

    const fingerprint = crypto.createHash('sha256').update(fileContent).digest('hex');
    const formattedBlock = `BUNDLE_START: ${fingerprint}\n${path.relative(projectRoot, absolutePath).replace(/\\/g, '/')}\n${fileContent}\nBUNDLE_END: ${path.relative(projectRoot, absolutePath).replace(/\\/g, '/')}\n\n`;
    try {
      cache.set(absolutePath, { fingerprint, block: formattedBlock, lastAccess: Date.now() } as any);
      cached++;
    } catch (err) {
      logger.warn('cachePaths: failed to set cache', { file: absolutePath, error: String(err) });
      skipped++;
    }
  }

  return { cached, skipped };
}

export function cachePathsMcpResponse(result: { cached: number; skipped: number }) {
  return { content: [{ type: 'text', text: `cached: ${result.cached}\nskipped: ${result.skipped}` }] };
}
