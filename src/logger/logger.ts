// src/logger/logger.ts
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import type { LogLevel } from '../types.js';

const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

const DEFAULT_LOG_PATH = path.join(os.homedir(), '.mcp-context-cache', 'logs', 'server.log');

export class Logger {
  private readonly level: LogLevel;
  private logFile: fs.WriteStream | undefined;
  readonly logPath: string;

  constructor(level: LogLevel = 'info', logPath?: string) {
    this.level = level;
    this.logPath = logPath ?? DEFAULT_LOG_PATH;
    try {
      fs.mkdirSync(path.dirname(this.logPath), { recursive: true });
      this.logFile = fs.createWriteStream(this.logPath, { flags: 'a' });
    } catch {
      // If log file can't be opened, only log to stderr
      this.logFile = undefined;
    }
  }

  error(message: string, meta?: unknown): void {
    this.log('error', message, meta);
  }

  warn(message: string, meta?: unknown): void {
    this.log('warn', message, meta);
  }

  info(message: string, meta?: unknown): void {
    this.log('info', message, meta);
  }

  debug(message: string, meta?: unknown): void {
    this.log('debug', message, meta);
  }

  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVEL_PRIORITY[level] <= LOG_LEVEL_PRIORITY[this.level];
  }

  private log(level: LogLevel, message: string, meta?: unknown): void {
    if (!this.shouldLog(level)) return;
    const metaStr = meta !== undefined ? ' ' + JSON.stringify(meta) : '';
    const line = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}${metaStr}\n`;
    // ALWAYS write to stderr, NEVER stdout (stdout is reserved for MCP stdio transport)
    process.stderr.write(line);
    this.logFile?.write(line);
  }

  close(): void {
    this.logFile?.end();
  }
}
