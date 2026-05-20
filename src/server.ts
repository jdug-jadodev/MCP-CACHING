// src/server.ts
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import http from 'node:http';
import { LRUCache } from './cache/lru-cache.js';
import { Logger } from './logger/logger.js';
import type { LRUCacheOptions } from './types.js';
import { getProjectContext, getProjectContextMcpResponse } from './tools/get-project-context.js';
import { getDirectoryContext, getDirectoryContextMcpResponse } from './tools/get-directory-context.js';
import { getContextFromConfig, getContextFromConfigMcpResponse } from './tools/get-context-from-config.js';
import { inspectCache, inspectCacheMcpResponse } from './tools/inspect-cache.js';
import { clearCache, clearCacheMcpResponse } from './tools/clear-cache.js';
import { cachePaths, cachePathsMcpResponse } from './tools/cache-paths.js';

export class ContextCacheServer {
  private readonly server: McpServer;
  private readonly cache: LRUCache;
  private readonly logger: Logger;
  private readonly autoEvictInterval?: NodeJS.Timeout;
  private httpServer?: http.Server;

  constructor(config?: Partial<LRUCacheOptions>) {
    this.server = new McpServer({ name: 'mcp-context-cache', version: '1.0.0' });
    this.cache = new LRUCache({ maxEntries: 5000, maxEntrySizeKb: 1024, ...config });
    this.logger = new Logger();
    this.registerTools();
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
  }

  private registerTools(): void {
    this.server.tool(
      'get_project_context',
      {
        paths: z.array(z.string()).describe('List of absolute or relative file paths to include'),
        projectRoot: z
          .string()
          .optional()
          .describe('Project root for resolving relative paths (default: cwd)'),
        configPath: z
          .string()
          .optional()
          .describe('Path to contextcache.json for security configuration'),
      },
      { title: 'Returns formatted context for a list of files. Use this to load specific files into AI agent context with caching.' },
      async (args: any, _extra: any): Promise<unknown> => {
        try {
          const result = await getProjectContext(args, this.cache, this.logger);
          return getProjectContextMcpResponse(result);
        } catch (err) {
          this.logger.error('get_project_context failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

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

    this.server.tool(
      'get_directory_context',
      {
        rootPath: z.string().describe('Root directory path to recursively include'),
        configPath: z
          .string()
          .optional()
          .describe('Path to contextcache.json (optional)'),
        excludePatterns: z
          .array(z.string())
          .optional()
          .describe('Additional glob patterns to exclude'),
      },
      { title: 'Recursively packages all files in a directory and returns them as formatted context for AI agents.' },
      async (args: any, _extra: any): Promise<unknown> => {
        try {
          const result = await getDirectoryContext(args, this.cache, this.logger);
          return getDirectoryContextMcpResponse(result);
        } catch (err) {
          this.logger.error('get_directory_context failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

    this.server.tool(
      'get_context_from_config',
      {
        projectRoot: z
          .string()
          .describe('Directory where contextcache.json is located'),
        configPath: z
          .string()
          .optional()
          .describe('Explicit path to contextcache.json (optional)'),
      },
      { title: 'Reads contextcache.json and returns full project context with module instructions and caching.' },
      async (args: any, _extra: any): Promise<unknown> => {
        try {
          const result = await getContextFromConfig(args, this.cache, this.logger);
          return getContextFromConfigMcpResponse(result);
        } catch (err) {
          this.logger.error('get_context_from_config failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );

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
  }

  async start(): Promise<void> {
    const transport = new StdioServerTransport();

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

    process.on('SIGTERM', () => {
      void this.stop();
    });
    process.on('SIGINT', () => {
      void this.stop();
    });
    process.on('uncaughtException', (err) => {
      this.logger.error('Uncaught exception', err);
      void this.stop();
    });

    this.logger.info('Starting mcp-context-cache server');
    this.logger.info('Log file', { path: this.logger.logPath });
    await this.server.connect(transport);
  }

  async stop(): Promise<void> {
    this.logger.info('Stopping mcp-context-cache server');
    await this.server.close();
    this.logger.close();
    process.exit(0);
  }
}
