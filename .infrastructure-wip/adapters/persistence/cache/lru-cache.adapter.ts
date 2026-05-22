/**
 * LRU Cache Adapter - Implementation of CachePort using LRU cache strategy
 */

import { CachePort } from '../../../../application/ports/out/cache.port.js';
import { CacheEntry } from '../../../../domain/models/cache-entry.model.js';

export interface LRUCacheOptions {
  maxEntries?: number;
  maxEntrySizeKb?: number;
}

export class LRUCacheAdapter implements CachePort {
  private cache: Map<string, CacheEntry>;
  private accessOrder: string[] = [];
  private readonly maxEntries: number;
  private readonly maxEntrySizeKb: number;

  constructor(options: LRUCacheOptions = {}) {
    this.maxEntries = options.maxEntries || 5000;
    this.maxEntrySizeKb = options.maxEntrySizeKb || 1024;
    this.cache = new Map();
  }

  get(key: string): CacheEntry | undefined {
    if (!this.cache.has(key)) {
      return undefined;
    }

    // Move to end (most recently used)
    this.accessOrder = this.accessOrder.filter((k) => k !== key);
    this.accessOrder.push(key);

    return this.cache.get(key);
  }

  set(key: string, value: CacheEntry): void {
    // Check size limit
    const entrySizeKb = Buffer.byteLength(value.block) / 1024;
    if (entrySizeKb > this.maxEntrySizeKb) {
      return; // Don't cache if too large
    }

    // Remove if exists to update order
    if (this.cache.has(key)) {
      this.accessOrder = this.accessOrder.filter((k) => k !== key);
    }

    // Check if we need to evict
    while (this.cache.size >= this.maxEntries && this.cache.size > 0) {
      const lruKey = this.accessOrder.shift();
      if (lruKey) {
        this.cache.delete(lruKey);
      }
    }

    // Add new entry
    this.cache.set(key, value);
    this.accessOrder.push(key);
  }

  clear(): void {
    this.cache.clear();
    this.accessOrder = [];
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }
}
