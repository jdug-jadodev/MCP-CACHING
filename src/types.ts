// src/types.ts

export interface CacheEntry {
  fingerprint: string; // SHA-256 of the file
  block: string; // Formatted BUNDLE_START...BUNDLE_END block
  lastAccess?: number; // epoch ms of last access (optional)
}

export interface LRUCacheOptions {
  maxEntries: number; // default: 5000
  maxEntrySizeKb: number; // default: 1024
}

export interface SecurityConfig {
  allowedPaths: string[]; // default: ["./"]
  deniedPaths: string[];
  deniedFiles: string[]; // supports simple wildcards (*)
  maxFileSizeKb: number; // default: 500
  allowedExtensions: string[]; // ["*"] = all text extensions
}

export interface ModuleConfig {
  name: string;
  path: string;
  includeInstructions?: boolean; // default: false
  excludePatterns?: string[];
}

export interface CacheConfig {
  maxEntries?: number;
  maxEntrySizeKb?: number;
}

export interface ProjectConfig {
  modules?: ModuleConfig[];
  globalInstructions?: string;
  maxTotalSizeKb?: number; // default: 2048
  cache?: CacheConfig;
  security?: Partial<SecurityConfig>;
}

export interface BundleResult {
  content: string;
  filesIncluded: number;
  filesOmitted: number;
  truncated: boolean;
  omittedFiles: string[];
}

export type DenialReason =
  | 'HARDCODED_BLACKLIST'
  | 'BINARY_EXTENSION'
  | 'DENIED_PATH'
  | 'NOT_IN_ALLOWED_PATH'
  | 'DENIED_FILE_PATTERN'
  | 'EXTENSION_NOT_ALLOWED'
  | 'FILE_TOO_LARGE'
  | 'MODULE_EXCLUDE_PATTERN';

export interface SecurityCheckResult {
  allowed: boolean;
  reason?: DenialReason;
}

export type LogLevel = 'error' | 'warn' | 'info' | 'debug';
