// src/tools/clear-cache.ts
import type { LRUCache } from '../cache/lru-cache.js';

export interface ClearCacheArgs {
  paths?: string[]; // absolute or relative paths to delete
  clearAll?: boolean; // if true, clear entire cache
}

export function clearCache(args: ClearCacheArgs, cache: LRUCache): { deleted: number; clearedAll: boolean } {
  if (args.clearAll) {
    cache.clear();
    return { deleted: -1, clearedAll: true };
  }

  if (args.paths && args.paths.length > 0) {
    const deleted = cache.deleteMany(args.paths.map((p) => p));
    return { deleted, clearedAll: false };
  }

  return { deleted: 0, clearedAll: false };
}

export function clearCacheMcpResponse(result: { deleted: number; clearedAll: boolean }): { content: Array<{ type: 'text'; text: string }> } {
  if (result.clearedAll) {
    return { content: [{ type: 'text', text: 'cache_cleared: all entries removed' }] };
  }
  return { content: [{ type: 'text', text: `deleted_entries: ${result.deleted}` }] };
}
