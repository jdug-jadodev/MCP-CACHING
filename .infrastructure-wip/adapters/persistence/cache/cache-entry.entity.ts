/**
 * Cache Entry Entity - Infrastructure representation of a cache entry
 */

export interface CacheEntryEntity {
  fingerprint: string;
  block: string;
  timestamp?: number;
}
