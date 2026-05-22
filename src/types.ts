

export interface CacheEntry {
  fingerprint: string; 
  block: string; 
}

export interface LRUCacheOptions {
  maxEntries: number; 
  maxEntrySizeKb: number; 
}

export interface SecurityConfig {
  allowedPaths: string[]; 
  deniedPaths: string[];
  deniedFiles: string[]; 
  maxFileSizeKb: number; 
  allowedExtensions: string[]; 
}

export interface ModuleConfig {
  name: string;
  path: string;
  includeInstructions?: boolean; 
  excludePatterns?: string[];
}

export interface CacheConfig {
  maxEntries?: number;
  maxEntrySizeKb?: number;
}

export interface ProjectConfig {
  modules?: ModuleConfig[];
  globalInstructions?: string;
  maxTotalSizeKb?: number; 
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
