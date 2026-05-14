// src/cache/lru-cache.ts
import type { CacheEntry, LRUCacheOptions } from '../types.js';

export class LRUCache {
  private readonly map: Map<string, CacheEntry>;
  private readonly maxEntries: number;
  private readonly maxEntrySizeBytes: number;

  constructor(options: LRUCacheOptions) {
    this.map = new Map();
    this.maxEntries = options.maxEntries;
    this.maxEntrySizeBytes = options.maxEntrySizeKb * 1024;
  }

  get(key: string): CacheEntry | undefined {
    const entry = this.map.get(key);
    if (!entry) return undefined;
    // Move to end to mark as most recently used
    this.map.delete(key);
    this.map.set(key, entry);
    return entry;
  }

  set(key: string, value: CacheEntry): void {
    // Don't cache entries exceeding maxEntrySizeBytes
    if (Buffer.byteLength(value.block, 'utf8') > this.maxEntrySizeBytes) return;

    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size >= this.maxEntries) {
      // Remove least recently used (first entry in Map)
      const firstKey = this.map.keys().next().value;
      if (firstKey !== undefined) {
        this.map.delete(firstKey);
      }
    }
    this.map.set(key, value);
  }

  delete(key: string): void {
    this.map.delete(key);
  }

  clear(): void {
    this.map.clear();
  }

  get size(): number {
    return this.map.size;
  }
}
