// tests/lru-cache.test.ts
import { describe, it, expect } from 'vitest';
import { LRUCache } from '../src/cache/lru-cache.js';
import type { CacheEntry } from '../src/types.js';

function makeEntry(fingerprint: string, block: string): CacheEntry {
  return { fingerprint, block };
}

describe('LRUCache', () => {
  it('retorna undefined para claves no existentes', () => {
    const cache = new LRUCache({ maxEntries: 10, maxEntrySizeKb: 1024 });
    expect(cache.get('nonexistent')).toBeUndefined();
  });

  it('almacena y recupera entradas correctamente', () => {
    const cache = new LRUCache({ maxEntries: 10, maxEntrySizeKb: 1024 });
    const entry = makeEntry('abc123', 'BUNDLE_START: abc123\nfile.ts\ncontent\nBUNDLE_END: file.ts\n');
    cache.set('key1', entry);
    const retrieved = cache.get('key1');
    expect(retrieved).toEqual(entry);
  });

  it('elimina la entrada menos usada al superar maxEntries', () => {
    const cache = new LRUCache({ maxEntries: 3, maxEntrySizeKb: 1024 });
    cache.set('a', makeEntry('h1', 'block1'));
    cache.set('b', makeEntry('h2', 'block2'));
    cache.set('c', makeEntry('h3', 'block3'));
    expect(cache.size).toBe(3);

    // Access 'a' to make it recently used
    cache.get('a');

    // Add 'd' — should evict 'b' (least recently used)
    cache.set('d', makeEntry('h4', 'block4'));
    expect(cache.size).toBe(3);
    expect(cache.get('b')).toBeUndefined();
    expect(cache.get('a')).toBeDefined();
    expect(cache.get('c')).toBeDefined();
    expect(cache.get('d')).toBeDefined();
  });

  it('no almacena entradas que superen maxEntrySizeKb', () => {
    const cache = new LRUCache({ maxEntries: 10, maxEntrySizeKb: 1 }); // 1 KB limit
    const largeBlock = 'x'.repeat(2 * 1024); // 2 KB
    cache.set('big', makeEntry('h1', largeBlock));
    expect(cache.get('big')).toBeUndefined();
    expect(cache.size).toBe(0);
  });

  it('mueve entradas al final al ser accedidas (LRU order)', () => {
    const cache = new LRUCache({ maxEntries: 2, maxEntrySizeKb: 1024 });
    cache.set('first', makeEntry('h1', 'block1'));
    cache.set('second', makeEntry('h2', 'block2'));

    // Access 'first' to make it recently used
    cache.get('first');

    // 'second' should be evicted (LRU)
    cache.set('third', makeEntry('h3', 'block3'));
    expect(cache.get('second')).toBeUndefined();
    expect(cache.get('first')).toBeDefined();
    expect(cache.get('third')).toBeDefined();
  });

  it('elimina entradas correctamente con delete', () => {
    const cache = new LRUCache({ maxEntries: 10, maxEntrySizeKb: 1024 });
    cache.set('k1', makeEntry('h1', 'block1'));
    cache.delete('k1');
    expect(cache.get('k1')).toBeUndefined();
    expect(cache.size).toBe(0);
  });

  it('limpia todas las entradas con clear', () => {
    const cache = new LRUCache({ maxEntries: 10, maxEntrySizeKb: 1024 });
    cache.set('k1', makeEntry('h1', 'block1'));
    cache.set('k2', makeEntry('h2', 'block2'));
    cache.clear();
    expect(cache.size).toBe(0);
  });

  it('sobrescribe entradas existentes sin incrementar el tamaño', () => {
    const cache = new LRUCache({ maxEntries: 10, maxEntrySizeKb: 1024 });
    cache.set('k1', makeEntry('h1', 'block1'));
    cache.set('k1', makeEntry('h2', 'block2_updated'));
    expect(cache.size).toBe(1);
    expect(cache.get('k1')?.fingerprint).toBe('h2');
  });
});
