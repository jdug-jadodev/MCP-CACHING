// src/config/config-loader.ts
import * as fs from 'node:fs';
import * as path from 'node:path';
import type { ProjectConfig, SecurityConfig } from '../types.js';
import { DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';

const CONFIG_FILENAME = 'contextcache.json';

export class ConfigLoadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConfigLoadError';
  }
}

export function loadConfig(projectRoot: string, configPath?: string): ProjectConfig {
  const resolvedPath = configPath
    ? path.resolve(configPath)
    : path.join(path.resolve(projectRoot), CONFIG_FILENAME);

  if (!fs.existsSync(resolvedPath)) {
    throw new ConfigLoadError(`Configuration file not found: ${resolvedPath}`);
  }

  let raw: string;
  try {
    raw = fs.readFileSync(resolvedPath, 'utf8');
  } catch (err) {
    throw new ConfigLoadError(
      `Failed to read configuration file: ${resolvedPath}: ${err instanceof Error ? err.message : String(err)}`,
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new ConfigLoadError(
      `Invalid JSON in configuration file: ${resolvedPath}: ${err instanceof Error ? err.message : String(err)}`,
    );
  }

  return validateConfig(parsed, resolvedPath);
}

function validateConfig(parsed: unknown, filePath: string): ProjectConfig {
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new ConfigLoadError(`Configuration must be a JSON object: ${filePath}`);
  }

  const config = parsed as Record<string, unknown>;
  const result: ProjectConfig = {};

  if ('modules' in config) {
    if (!Array.isArray(config.modules)) {
      throw new ConfigLoadError(`"modules" must be an array: ${filePath}`);
    }
    result.modules = config.modules.map((m: unknown, i: number) => {
      if (typeof m !== 'object' || m === null || Array.isArray(m)) {
        throw new ConfigLoadError(`modules[${i}] must be an object: ${filePath}`);
      }
      const mod = m as Record<string, unknown>;
      if (typeof mod.name !== 'string') {
        throw new ConfigLoadError(`modules[${i}].name must be a string: ${filePath}`);
      }
      if (typeof mod.path !== 'string') {
        throw new ConfigLoadError(`modules[${i}].path must be a string: ${filePath}`);
      }
      return {
        name: mod.name,
        path: mod.path,
        includeInstructions:
          typeof mod.includeInstructions === 'boolean' ? mod.includeInstructions : false,
        excludePatterns: Array.isArray(mod.excludePatterns)
          ? (mod.excludePatterns as string[])
          : [],
      };
    });
  }

  if ('globalInstructions' in config) {
    if (typeof config.globalInstructions !== 'string') {
      throw new ConfigLoadError(`"globalInstructions" must be a string: ${filePath}`);
    }
    result.globalInstructions = config.globalInstructions;
  }

  if ('maxTotalSizeKb' in config) {
    if (typeof config.maxTotalSizeKb !== 'number') {
      throw new ConfigLoadError(`"maxTotalSizeKb" must be a number: ${filePath}`);
    }
    result.maxTotalSizeKb = config.maxTotalSizeKb;
  }

  if ('cache' in config && typeof config.cache === 'object' && config.cache !== null) {
    const cacheObj = config.cache as Record<string, unknown>;
    result.cache = {
      maxEntries:
        typeof cacheObj.maxEntries === 'number' ? cacheObj.maxEntries : undefined,
      maxEntrySizeKb:
        typeof cacheObj.maxEntrySizeKb === 'number' ? cacheObj.maxEntrySizeKb : undefined,
    };
  }

  if (
    'security' in config &&
    typeof config.security === 'object' &&
    config.security !== null
  ) {
    const sec = config.security as Record<string, unknown>;
    const security: Partial<SecurityConfig> = {};

    if ('allowedPaths' in sec && Array.isArray(sec.allowedPaths)) {
      security.allowedPaths = sec.allowedPaths as string[];
    }
    if ('deniedPaths' in sec && Array.isArray(sec.deniedPaths)) {
      security.deniedPaths = sec.deniedPaths as string[];
    }
    if ('deniedFiles' in sec && Array.isArray(sec.deniedFiles)) {
      security.deniedFiles = sec.deniedFiles as string[];
    }
    if ('maxFileSizeKb' in sec && typeof sec.maxFileSizeKb === 'number') {
      security.maxFileSizeKb = sec.maxFileSizeKb;
    }
    if ('allowedExtensions' in sec && Array.isArray(sec.allowedExtensions)) {
      security.allowedExtensions = sec.allowedExtensions as string[];
    }

    result.security = security;
  }

  return result;
}

export function resolveSecurityConfig(config: ProjectConfig): SecurityConfig {
  return {
    ...DEFAULT_SECURITY_CONFIG,
    ...config.security,
  };
}

export function resolveMaxTotalSizeKb(config: ProjectConfig): number {
  return config.maxTotalSizeKb ?? 2048;
}
