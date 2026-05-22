/**
 * Logger Adapter - Implementation of LoggerPort
 */

import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { LoggerPort, LogLevel } from '../../../../application/ports/out/logger.port.js';
import { LOGGER_ERROR_MESSAGES } from './logger-error-messages.js';

export class LoggerAdapter implements LoggerPort {
  private logDir: string;
  private logFile: string;
  private currentLogLevel: LogLevel = 'info';

  constructor(logLevel: LogLevel = 'info') {
    this.currentLogLevel = logLevel;
    const homeDir = os.homedir();
    this.logDir = path.join(homeDir, '.mcp-context-cache', 'logs');
    this.logFile = path.join(this.logDir, 'server.log');
    this.ensureLogDirectory();
  }

  log(level: LogLevel, message: string, data?: unknown): void {
    if (this.shouldLog(level)) {
      const timestamp = new Date().toISOString();
      const logMessage = this.formatLogMessage(level, message, timestamp, data);

      // Log to console
      this.logToConsole(level, logMessage);

      // Log to file
      this.logToFile(logMessage);
    }
  }

  error(message: string, data?: unknown): void {
    this.log('error', message, data);
  }

  warn(message: string, data?: unknown): void {
    this.log('warn', message, data);
  }

  info(message: string, data?: unknown): void {
    this.log('info', message, data);
  }

  debug(message: string, data?: unknown): void {
    this.log('debug', message, data);
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['error', 'warn', 'info', 'debug'];
    const currentIndex = levels.indexOf(this.currentLogLevel);
    const levelIndex = levels.indexOf(level);
    return levelIndex <= currentIndex;
  }

  private formatLogMessage(level: LogLevel, message: string, timestamp: string, data?: unknown): string {
    const dataString = data ? ` | ${JSON.stringify(data)}` : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${dataString}`;
  }

  private logToConsole(level: LogLevel, message: string): void {
    switch (level) {
      case 'error':
        console.error(message);
        break;
      case 'warn':
        console.warn(message);
        break;
      case 'info':
        console.log(message);
        break;
      case 'debug':
        console.log(message);
        break;
    }
  }

  private logToFile(message: string): void {
    try {
      fs.appendFileSync(this.logFile, message + '\n', 'utf-8');
    } catch (error) {
      console.error(`${LOGGER_ERROR_MESSAGES.LOG_FILE_WRITE_ERROR}: ${(error as Error).message}`);
    }
  }

  private ensureLogDirectory(): void {
    try {
      if (!fs.existsSync(this.logDir)) {
        fs.mkdirSync(this.logDir, { recursive: true });
      }
    } catch (error) {
      console.error(
        `${LOGGER_ERROR_MESSAGES.LOG_DIR_CREATION_ERROR}: ${(error as Error).message}`,
      );
    }
  }
}
