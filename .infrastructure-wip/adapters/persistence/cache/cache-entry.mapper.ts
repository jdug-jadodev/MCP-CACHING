/**
 * Cache Entry Mapper - Manual mapping between infrastructure entity and domain model
 */

import { CacheEntryEntity } from './cache-entry.entity.js';
import { CacheEntry } from '../../../../domain/models/cache-entry.model.js';

export class CacheEntryMapper {
  static toDomain(entity: CacheEntryEntity): CacheEntry {
    return {
      fingerprint: entity.fingerprint,
      block: entity.block,
      timestamp: entity.timestamp,
    };
  }

  static toEntity(domain: CacheEntry): CacheEntryEntity {
    return {
      fingerprint: domain.fingerprint,
      block: domain.block,
      timestamp: domain.timestamp,
    };
  }
}
