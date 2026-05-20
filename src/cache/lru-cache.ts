// src/cache/lru-cache.ts
import type { CacheEntry, LRUCacheOptions } from '../types.js';

export class LRUCache {
  private readonly map: Map<string, CacheEntry>;
  private readonly maxEntries: number;
  private readonly maxEntrySizeBytes: number;
  private totalBytes: number;

  constructor(options: LRUCacheOptions) {
    this.map = new Map();
    this.maxEntries = options.maxEntries;
    this.maxEntrySizeBytes = options.maxEntrySizeKb * 1024;
    this.totalBytes = 0;
  }

  get(key: string): CacheEntry | undefined {
    const entry = this.map.get(key);
    if (!entry) return undefined;
    // Move to end to mark as most recently used
    this.map.delete(key);
    // update lastAccess
    try {
      entry.lastAccess = Date.now();
    } catch {
      /* ignore */
    }
    this.map.set(key, entry);
    return entry;
  }

  set(key: string, value: CacheEntry): void {
    // Don't cache entries exceeding maxEntrySizeBytes
    if (Buffer.byteLength(value.block, 'utf8') > this.maxEntrySizeBytes) return;

    if (this.map.has(key)) {
      // adjust totalBytes for replacement
      const existing = this.map.get(key);
      if (existing) this.totalBytes -= Buffer.byteLength(existing.block, 'utf8');
      this.map.delete(key);
    } else if (this.map.size >= this.maxEntries) {
      // Remove least recently used (first entry in Map)
      const firstKey = this.map.keys().next().value;
      if (firstKey !== undefined) {
        const removed = this.map.get(firstKey);
        if (removed) this.totalBytes -= Buffer.byteLength(removed.block, 'utf8');
        this.map.delete(firstKey);
      }
    }
    this.map.set(key, value);
    this.totalBytes += Buffer.byteLength(value.block, 'utf8');
  }

  /** Evict entries whose lastAccess is older than `seconds` seconds. Returns number evicted. */
  evictOlderThan(seconds: number): number {
    if (!seconds || seconds <= 0) return 0;
    const cutoff = Date.now() - seconds * 1000;
    const keysToDelete: string[] = [];
    for (const [key, entry] of this.map.entries()) {
      const last = entry.lastAccess ?? 0;
      if (last < cutoff) keysToDelete.push(key);
    }
    for (const k of keysToDelete) this.delete(k);
    return keysToDelete.length;
  }

  delete(key: string): void {
    const existing = this.map.get(key);
    if (existing) this.totalBytes -= Buffer.byteLength(existing.block, 'utf8');
    this.map.delete(key);
  }

  clear(): void {
    this.map.clear();
    this.totalBytes = 0;
  }

  get size(): number {
    return this.map.size;
  }

  /**
   * Returns total bytes currently stored in cache (sum of block sizes).
   */
  getTotalBytes(): number {
    return this.totalBytes;
  }

  /**
   * Returns an array of entries with key, fingerprint and sizeBytes.
   */
  entries(): Array<{ key: string; fingerprint: string; sizeBytes: number }> {
    const out: Array<{ key: string; fingerprint: string; sizeBytes: number }> = [];
    for (const [key, entry] of this.map.entries()) {
      out.push({ key, fingerprint: entry.fingerprint, sizeBytes: Buffer.byteLength(entry.block, 'utf8') });
    }
    return out;
  }

  /** Delete multiple keys and return number deleted */
  deleteMany(keys: string[]): number {
    let deleted = 0;
    for (const k of keys) {
      if (this.map.has(k)) {
        this.delete(k);
        deleted++;
      }
    }
    return deleted;
  }

  /**
   * Returns a deep copy array of all entries including the stored block content.
   * Useful for debugging or exporting the full cache contents.
   */
  getAllEntries(): Array<{ key: string; fingerprint: string; block: string; lastAccess?: number }> {
    const out: Array<{ key: string; fingerprint: string; block: string; lastAccess?: number }> = [];
    for (const [key, entry] of this.map.entries()) {
      out.push({ key, fingerprint: entry.fingerprint, block: entry.block, lastAccess: entry.lastAccess });
    }
    return out;
  }
}
