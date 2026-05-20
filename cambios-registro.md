# 📊 Registro de Cambios con Estadísticas
**Iniciado:** 19/5/2026, 7:31:47 p. m.
**Proyecto:** C:\Users\Usuario\Documents\mcp-context-cache
**Último commit:** 8ceed07 - chore(release): 1.1.0 (2 seconds ago)
**Estado:** Monitoreando nuevos cambios


## 🕐 19/05/2026, 19:31:47

### 📊 Resumen
- **Total archivos:** 8
- **📝 Nuevos:** 3
- **✏️ Modificados:** 4
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +192
- **Líneas eliminadas:** -59
- **Balance neto:** +133 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `src/tools/cache-paths.ts` | nuevo | -0 | 0 |
| 🆕 | `src/tools/clear-cache.ts` | nuevo | -0 | 0 |
| 🆕 | `src/tools/inspect-cache.ts` | nuevo | -0 | 0 |
| ✏️ | `src/server.ts` | +119 | -6 | +113 |
| ✏️ | `src/cache/lru-cache.ts` | +72 | -0 | +72 |
| ✏️ | `CHANGELOG.md` | +0 | -53 | -53 |
| ✏️ | `src/types.ts` | +1 | -0 | +1 |
| 🗑️ | `CHANGELOG.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (8)</summary>

**🆕 Nuevos:**
```
src/tools/cache-paths.ts
src/tools/clear-cache.ts
src/tools/inspect-cache.ts
```

**✏️ Modificados:**
```
src/server.ts
src/cache/lru-cache.ts
CHANGELOG.md
src/types.ts
```

**🗑️ Eliminados:**
```
CHANGELOG.md
```

</details>

### 💻 Código Añadido

**src/cache/lru-cache.ts** (+72 líneas)**

```
  private totalBytes: number;
    this.totalBytes = 0;
    // update lastAccess
    try {
      entry.lastAccess = Date.now();
    } catch {
      /* ignore */
    }
      // adjust totalBytes for replacement
      const existing = this.map.get(key);
      if (existing) this.totalBytes -= Buffer.byteLength(existing.block, 'utf8');
        const removed = this.map.get(firstKey);
        if (removed) this.totalBytes -= Buffer.byteLength(removed.block, 'utf8');
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
    const existing = this.map.get(key);
    if (existing) this.totalBytes -= Buffer.byteLength(existing.block, 'utf8');
    this.totalBytes = 0;

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
```

**src/server.ts** (+119 líneas)**

```
import http from 'node:http';
import { inspectCache, inspectCacheMcpResponse } from './tools/inspect-cache.js';
import { clearCache, clearCacheMcpResponse } from './tools/clear-cache.js';
import { cachePaths, cachePathsMcpResponse } from './tools/cache-paths.js';
  private readonly autoEvictInterval?: NodeJS.Timeout;
  private httpServer?: http.Server;
    // TTL-based auto-eviction (seconds). Default 3600s; can be disabled by setting env to 0.
    const ttlEnv = process.env.MCP_CACHE_TTL_SECONDS;
    const ttlSeconds = ttlEnv ? Number(ttlEnv) : 3600;
    if (ttlSeconds && !Number.isNaN(ttlSeconds) && ttlSeconds > 0) {
      this.autoEvictInterval = setInterval(() => {
        try {
          const evicted = (this.cache as any).evictOlderThan(ttlSeconds);
          if (evicted && evicted > 0) this.logger.info('Auto-evicted cache entries', { evicted });
        } catch (err) {
          this.logger.error('Auto-evict failed', { error: String(err) });
        }
      }, 60_000);
      this.logger.info('Auto-evict enabled', { ttlSeconds });
    }
      { title: 'Returns formatted context for a list of files. Use this to load specific files into AI agent context with caching.' },
      async (args: any, _extra: any): Promise<unknown> => {
    this.server.tool(
      'inspect_cache',
      {},
      { title: 'Returns a list of cache entries with sizes and fingerprints.' },
      async (_args: unknown, _extra: unknown): Promise<unknown> => {
        try {
          const result = inspectCache(this.cache as unknown as import('./cache/lru-cache.js').LRUCache);
          return inspectCacheMcpResponse(result);
        } catch (err) {
          this.logger.error('inspect_cache failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

    this.server.tool(
      'clear_cache',
      {
        paths: z.array(z.string()).optional(),
        clearAll: z.boolean().optional(),
      },
      { title: 'Clears cache entries by path or clears entire cache.' },
      async (args: any, _extra: any): Promise<unknown> => {
        try {
          const result = clearCache(args as any, this.cache as unknown as import('./cache/lru-cache.js').LRUCache);
          return clearCacheMcpResponse(result);
        } catch (err) {
          this.logger.error('clear_cache failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

      { title: 'Recursively packages all files in a directory and returns them as formatted context for AI agents.' },
      async (args: any, _extra: any): Promise<unknown> => {
      { title: 'Reads contextcache.json and returns full project context with module instructions and caching.' },
      async (args: any, _extra: any): Promise<unknown> => {

    this.server.tool(
      'cache_paths',
      {
        paths: z.array(z.string()).describe('List of absolute or relative file paths to include'),
        projectRoot: z.string().optional().describe('Project root for resolving relative paths (default: cwd)'),
      },
      { title: 'Reads and caches a list of file paths (useful for IDEs to force cache on open).' },
      async (args: any, _extra: any): Promise<unknown> => {
        try {
          const result = await cachePaths(args as any, this.cache as unknown as import('./cache/lru-cache.js').LRUCache, this.logger);
          return cachePathsMcpResponse(result as any);
        } catch (err) {
          this.logger.error('cache_paths failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

    this.server.tool(
      'dump_cache',
      {},
      { title: 'Returns full cache entries (key, fingerprint, block, lastAccess) for debugging.' },
      async (_args: unknown, _extra: unknown): Promise<unknown> => {
        try {
          // expose full entries from LRUCache
          const entries = (this.cache as unknown as LRUCache).getAllEntries();
          // Return as JSON text block to keep MCP response simple
          return { content: [{ type: 'text', text: JSON.stringify(entries) }] };
        } catch (err) {
          this.logger.error('dump_cache failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );
    // Optionally start an HTTP endpoint to dump cache contents for local debugging.
    // Enable by setting env MCP_CACHE_HTTP_PORT (e.g. 3001).
    const httpPortEnv = process.env.MCP_CACHE_HTTP_PORT;
    const httpPort = httpPortEnv ? Number(httpPortEnv) : 0;
    if (httpPort && !Number.isNaN(httpPort) && httpPort > 0) {
      this.httpServer = http.createServer((req, res) => {
        if (!req.url) return res.destroy();
        if (req.method === 'GET' && req.url.startsWith('/dump-cache')) {
          try {
            const entries = (this.cache as unknown as LRUCache).getAllEntries();
            const body = JSON.stringify(entries);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(body);
          } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(String(err));
          }
          return;
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
      });
      this.httpServer.listen(httpPort, () => this.logger.info('HTTP dump server listening', { port: httpPort }));
    }

```

**src/types.ts** (+1 línea)**

```
  lastAccess?: number; // epoch ms of last access (optional)
```

---

## 🕐 19/05/2026, 19:32:18

### 📊 Resumen
- **Total archivos:** 9
- **📝 Nuevos:** 4
- **✏️ Modificados:** 4
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +192
- **Líneas eliminadas:** -59
- **Balance neto:** +133 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `mcp-context-cache-1.1.0.tgz` | nuevo | -0 | 0 |
| 🆕 | `src/tools/cache-paths.ts` | nuevo | -0 | 0 |
| 🆕 | `src/tools/clear-cache.ts` | nuevo | -0 | 0 |
| 🆕 | `src/tools/inspect-cache.ts` | nuevo | -0 | 0 |
| ✏️ | `src/server.ts` | +119 | -6 | +113 |
| ✏️ | `src/cache/lru-cache.ts` | +72 | -0 | +72 |
| ✏️ | `CHANGELOG.md` | +0 | -53 | -53 |
| ✏️ | `src/types.ts` | +1 | -0 | +1 |
| 🗑️ | `CHANGELOG.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (9)</summary>

**🆕 Nuevos:**
```
mcp-context-cache-1.1.0.tgz
src/tools/cache-paths.ts
src/tools/clear-cache.ts
src/tools/inspect-cache.ts
```

**✏️ Modificados:**
```
src/server.ts
src/cache/lru-cache.ts
CHANGELOG.md
src/types.ts
```

**🗑️ Eliminados:**
```
CHANGELOG.md
```

</details>

### 💻 Código Añadido

**src/cache/lru-cache.ts** (+72 líneas)**

```
  private totalBytes: number;
    this.totalBytes = 0;
    // update lastAccess
    try {
      entry.lastAccess = Date.now();
    } catch {
      /* ignore */
    }
      // adjust totalBytes for replacement
      const existing = this.map.get(key);
      if (existing) this.totalBytes -= Buffer.byteLength(existing.block, 'utf8');
        const removed = this.map.get(firstKey);
        if (removed) this.totalBytes -= Buffer.byteLength(removed.block, 'utf8');
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
    const existing = this.map.get(key);
    if (existing) this.totalBytes -= Buffer.byteLength(existing.block, 'utf8');
    this.totalBytes = 0;

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
```

**src/server.ts** (+119 líneas)**

```
import http from 'node:http';
import { inspectCache, inspectCacheMcpResponse } from './tools/inspect-cache.js';
import { clearCache, clearCacheMcpResponse } from './tools/clear-cache.js';
import { cachePaths, cachePathsMcpResponse } from './tools/cache-paths.js';
  private readonly autoEvictInterval?: NodeJS.Timeout;
  private httpServer?: http.Server;
    // TTL-based auto-eviction (seconds). Default 3600s; can be disabled by setting env to 0.
    const ttlEnv = process.env.MCP_CACHE_TTL_SECONDS;
    const ttlSeconds = ttlEnv ? Number(ttlEnv) : 3600;
    if (ttlSeconds && !Number.isNaN(ttlSeconds) && ttlSeconds > 0) {
      this.autoEvictInterval = setInterval(() => {
        try {
          const evicted = (this.cache as any).evictOlderThan(ttlSeconds);
          if (evicted && evicted > 0) this.logger.info('Auto-evicted cache entries', { evicted });
        } catch (err) {
          this.logger.error('Auto-evict failed', { error: String(err) });
        }
      }, 60_000);
      this.logger.info('Auto-evict enabled', { ttlSeconds });
    }
      { title: 'Returns formatted context for a list of files. Use this to load specific files into AI agent context with caching.' },
      async (args: any, _extra: any): Promise<unknown> => {
    this.server.tool(
      'inspect_cache',
      {},
      { title: 'Returns a list of cache entries with sizes and fingerprints.' },
      async (_args: unknown, _extra: unknown): Promise<unknown> => {
        try {
          const result = inspectCache(this.cache as unknown as import('./cache/lru-cache.js').LRUCache);
          return inspectCacheMcpResponse(result);
        } catch (err) {
          this.logger.error('inspect_cache failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

    this.server.tool(
      'clear_cache',
      {
        paths: z.array(z.string()).optional(),
        clearAll: z.boolean().optional(),
      },
      { title: 'Clears cache entries by path or clears entire cache.' },
      async (args: any, _extra: any): Promise<unknown> => {
        try {
          const result = clearCache(args as any, this.cache as unknown as import('./cache/lru-cache.js').LRUCache);
          return clearCacheMcpResponse(result);
        } catch (err) {
          this.logger.error('clear_cache failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

      { title: 'Recursively packages all files in a directory and returns them as formatted context for AI agents.' },
      async (args: any, _extra: any): Promise<unknown> => {
      { title: 'Reads contextcache.json and returns full project context with module instructions and caching.' },
      async (args: any, _extra: any): Promise<unknown> => {

    this.server.tool(
      'cache_paths',
      {
        paths: z.array(z.string()).describe('List of absolute or relative file paths to include'),
        projectRoot: z.string().optional().describe('Project root for resolving relative paths (default: cwd)'),
      },
      { title: 'Reads and caches a list of file paths (useful for IDEs to force cache on open).' },
      async (args: any, _extra: any): Promise<unknown> => {
        try {
          const result = await cachePaths(args as any, this.cache as unknown as import('./cache/lru-cache.js').LRUCache, this.logger);
          return cachePathsMcpResponse(result as any);
        } catch (err) {
          this.logger.error('cache_paths failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

    this.server.tool(
      'dump_cache',
      {},
      { title: 'Returns full cache entries (key, fingerprint, block, lastAccess) for debugging.' },
      async (_args: unknown, _extra: unknown): Promise<unknown> => {
        try {
          // expose full entries from LRUCache
          const entries = (this.cache as unknown as LRUCache).getAllEntries();
          // Return as JSON text block to keep MCP response simple
          return { content: [{ type: 'text', text: JSON.stringify(entries) }] };
        } catch (err) {
          this.logger.error('dump_cache failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );
    // Optionally start an HTTP endpoint to dump cache contents for local debugging.
    // Enable by setting env MCP_CACHE_HTTP_PORT (e.g. 3001).
    const httpPortEnv = process.env.MCP_CACHE_HTTP_PORT;
    const httpPort = httpPortEnv ? Number(httpPortEnv) : 0;
    if (httpPort && !Number.isNaN(httpPort) && httpPort > 0) {
      this.httpServer = http.createServer((req, res) => {
        if (!req.url) return res.destroy();
        if (req.method === 'GET' && req.url.startsWith('/dump-cache')) {
          try {
            const entries = (this.cache as unknown as LRUCache).getAllEntries();
            const body = JSON.stringify(entries);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(body);
          } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(String(err));
          }
          return;
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
      });
      this.httpServer.listen(httpPort, () => this.logger.info('HTTP dump server listening', { port: httpPort }));
    }

```

**src/types.ts** (+1 línea)**

```
  lastAccess?: number; // epoch ms of last access (optional)
```

---

## 🕐 19/05/2026, 19:32:49

### 📊 Resumen
- **Total archivos:** 8
- **📝 Nuevos:** 3
- **✏️ Modificados:** 4
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +192
- **Líneas eliminadas:** -59
- **Balance neto:** +133 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `src/tools/cache-paths.ts` | nuevo | -0 | 0 |
| 🆕 | `src/tools/clear-cache.ts` | nuevo | -0 | 0 |
| 🆕 | `src/tools/inspect-cache.ts` | nuevo | -0 | 0 |
| ✏️ | `src/server.ts` | +119 | -6 | +113 |
| ✏️ | `src/cache/lru-cache.ts` | +72 | -0 | +72 |
| ✏️ | `CHANGELOG.md` | +0 | -53 | -53 |
| ✏️ | `src/types.ts` | +1 | -0 | +1 |
| 🗑️ | `CHANGELOG.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (8)</summary>

**🆕 Nuevos:**
```
src/tools/cache-paths.ts
src/tools/clear-cache.ts
src/tools/inspect-cache.ts
```

**✏️ Modificados:**
```
src/server.ts
src/cache/lru-cache.ts
CHANGELOG.md
src/types.ts
```

**🗑️ Eliminados:**
```
CHANGELOG.md
```

</details>

### 💻 Código Añadido

**src/cache/lru-cache.ts** (+72 líneas)**

```
  private totalBytes: number;
    this.totalBytes = 0;
    // update lastAccess
    try {
      entry.lastAccess = Date.now();
    } catch {
      /* ignore */
    }
      // adjust totalBytes for replacement
      const existing = this.map.get(key);
      if (existing) this.totalBytes -= Buffer.byteLength(existing.block, 'utf8');
        const removed = this.map.get(firstKey);
        if (removed) this.totalBytes -= Buffer.byteLength(removed.block, 'utf8');
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
    const existing = this.map.get(key);
    if (existing) this.totalBytes -= Buffer.byteLength(existing.block, 'utf8');
    this.totalBytes = 0;

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
```

**src/server.ts** (+119 líneas)**

```
import http from 'node:http';
import { inspectCache, inspectCacheMcpResponse } from './tools/inspect-cache.js';
import { clearCache, clearCacheMcpResponse } from './tools/clear-cache.js';
import { cachePaths, cachePathsMcpResponse } from './tools/cache-paths.js';
  private readonly autoEvictInterval?: NodeJS.Timeout;
  private httpServer?: http.Server;
    // TTL-based auto-eviction (seconds). Default 3600s; can be disabled by setting env to 0.
    const ttlEnv = process.env.MCP_CACHE_TTL_SECONDS;
    const ttlSeconds = ttlEnv ? Number(ttlEnv) : 3600;
    if (ttlSeconds && !Number.isNaN(ttlSeconds) && ttlSeconds > 0) {
      this.autoEvictInterval = setInterval(() => {
        try {
          const evicted = (this.cache as any).evictOlderThan(ttlSeconds);
          if (evicted && evicted > 0) this.logger.info('Auto-evicted cache entries', { evicted });
        } catch (err) {
          this.logger.error('Auto-evict failed', { error: String(err) });
        }
      }, 60_000);
      this.logger.info('Auto-evict enabled', { ttlSeconds });
    }
      { title: 'Returns formatted context for a list of files. Use this to load specific files into AI agent context with caching.' },
      async (args: any, _extra: any): Promise<unknown> => {
    this.server.tool(
      'inspect_cache',
      {},
      { title: 'Returns a list of cache entries with sizes and fingerprints.' },
      async (_args: unknown, _extra: unknown): Promise<unknown> => {
        try {
          const result = inspectCache(this.cache as unknown as import('./cache/lru-cache.js').LRUCache);
          return inspectCacheMcpResponse(result);
        } catch (err) {
          this.logger.error('inspect_cache failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

    this.server.tool(
      'clear_cache',
      {
        paths: z.array(z.string()).optional(),
        clearAll: z.boolean().optional(),
      },
      { title: 'Clears cache entries by path or clears entire cache.' },
      async (args: any, _extra: any): Promise<unknown> => {
        try {
          const result = clearCache(args as any, this.cache as unknown as import('./cache/lru-cache.js').LRUCache);
          return clearCacheMcpResponse(result);
        } catch (err) {
          this.logger.error('clear_cache failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

      { title: 'Recursively packages all files in a directory and returns them as formatted context for AI agents.' },
      async (args: any, _extra: any): Promise<unknown> => {
      { title: 'Reads contextcache.json and returns full project context with module instructions and caching.' },
      async (args: any, _extra: any): Promise<unknown> => {

    this.server.tool(
      'cache_paths',
      {
        paths: z.array(z.string()).describe('List of absolute or relative file paths to include'),
        projectRoot: z.string().optional().describe('Project root for resolving relative paths (default: cwd)'),
      },
      { title: 'Reads and caches a list of file paths (useful for IDEs to force cache on open).' },
      async (args: any, _extra: any): Promise<unknown> => {
        try {
          const result = await cachePaths(args as any, this.cache as unknown as import('./cache/lru-cache.js').LRUCache, this.logger);
          return cachePathsMcpResponse(result as any);
        } catch (err) {
          this.logger.error('cache_paths failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

    this.server.tool(
      'dump_cache',
      {},
      { title: 'Returns full cache entries (key, fingerprint, block, lastAccess) for debugging.' },
      async (_args: unknown, _extra: unknown): Promise<unknown> => {
        try {
          // expose full entries from LRUCache
          const entries = (this.cache as unknown as LRUCache).getAllEntries();
          // Return as JSON text block to keep MCP response simple
          return { content: [{ type: 'text', text: JSON.stringify(entries) }] };
        } catch (err) {
          this.logger.error('dump_cache failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );
    // Optionally start an HTTP endpoint to dump cache contents for local debugging.
    // Enable by setting env MCP_CACHE_HTTP_PORT (e.g. 3001).
    const httpPortEnv = process.env.MCP_CACHE_HTTP_PORT;
    const httpPort = httpPortEnv ? Number(httpPortEnv) : 0;
    if (httpPort && !Number.isNaN(httpPort) && httpPort > 0) {
      this.httpServer = http.createServer((req, res) => {
        if (!req.url) return res.destroy();
        if (req.method === 'GET' && req.url.startsWith('/dump-cache')) {
          try {
            const entries = (this.cache as unknown as LRUCache).getAllEntries();
            const body = JSON.stringify(entries);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(body);
          } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(String(err));
          }
          return;
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
      });
      this.httpServer.listen(httpPort, () => this.logger.info('HTTP dump server listening', { port: httpPort }));
    }

```

**src/types.ts** (+1 línea)**

```
  lastAccess?: number; // epoch ms of last access (optional)
```

---
