// src/server.ts
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { LRUCache } from './cache/lru-cache.js';
import { Logger } from './logger/logger.js';
import type { LRUCacheOptions } from './types.js';
import { getProjectContext, getProjectContextMcpResponse } from './tools/get-project-context.js';
import { getDirectoryContext, getDirectoryContextMcpResponse } from './tools/get-directory-context.js';
import { getContextFromConfig, getContextFromConfigMcpResponse } from './tools/get-context-from-config.js';

export class ContextCacheServer {
  private readonly server: McpServer;
  private readonly cache: LRUCache;
  private readonly logger: Logger;

  constructor(config?: Partial<LRUCacheOptions>) {
    this.server = new McpServer({ name: 'mcp-context-cache', version: '1.0.0' });
    this.cache = new LRUCache({ maxEntries: 5000, maxEntrySizeKb: 1024, ...config });
    this.logger = new Logger();
    this.registerTools();
  }

  private registerTools(): void {
    this.server.tool(
      'get_project_context',
      'Returns formatted context for a list of files. Use this to load specific files into AI agent context with caching.',
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
      async (args) => {
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
      'get_directory_context',
      'Recursively packages all files in a directory and returns them as formatted context for AI agents.',
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
      async (args) => {
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
      'Reads contextcache.json and returns full project context with module instructions and caching.',
      {
        projectRoot: z
          .string()
          .describe('Directory where contextcache.json is located'),
        configPath: z
          .string()
          .optional()
          .describe('Explicit path to contextcache.json (optional)'),
      },
      async (args) => {
        try {
          const result = await getContextFromConfig(args, this.cache, this.logger);
          return getContextFromConfigMcpResponse(result);
        } catch (err) {
          this.logger.error('get_context_from_config failed', { error: String(err) });
          return { content: [{ type: 'text', text: `Error: ${String(err)}` }] };
        }
      },
    );
  }

  async start(): Promise<void> {
    const transport = new StdioServerTransport();

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
