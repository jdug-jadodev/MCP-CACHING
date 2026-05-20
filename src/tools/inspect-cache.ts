// src/tools/inspect-cache.ts
import type { LRUCache } from '../cache/lru-cache.js';

export interface InspectCacheResult {
  entries: Array<{ key: string; fingerprint: string; sizeBytes: number }>;
  totalBytes: number;
  entryCount: number;
}

export function inspectCache(cache: LRUCache): InspectCacheResult {
  const entries = cache.entries();
  return {
    entries,
    totalBytes: cache.getTotalBytes(),
    entryCount: cache.size,
  };
}

export function inspectCacheMcpResponse(result: InspectCacheResult): { content: Array<{ type: 'text'; text: string }> } {
  const lines: string[] = [];
  lines.push(`cache_entries: ${result.entryCount}`);
  lines.push(`total_bytes: ${result.totalBytes}`);
  lines.push('');
  for (const e of result.entries) {
    lines.push(`- key: ${e.key}`);
    lines.push(`  fingerprint: ${e.fingerprint}`);
    lines.push(`  size_bytes: ${e.sizeBytes}`);
    lines.push('');
  }

  return { content: [{ type: 'text', text: lines.join('\n') }] };
}
