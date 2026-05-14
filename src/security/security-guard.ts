// src/security/security-guard.ts
import * as fs from 'node:fs';
import * as path from 'node:path';
import type { SecurityCheckResult, SecurityConfig, DenialReason } from '../types.js';

const HARDCODED_BLACKLIST = [
  '.env',
  '.env.*',
  'credentials.json',
  '*.pem',
  'id_rsa',
  'id_ed25519',
  '*.key',
  'private.key',
  'secret*',
  'secrets.json',
  'token*',
  'service-account.json',
  '.npmrc',
  '.pypirc',
];

const BINARY_EXTENSIONS = new Set([
  '.exe',
  '.dll',
  '.so',
  '.dylib',
  '.bin',
  '.dat',
  '.zip',
  '.tar',
  '.gz',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.ico',
  '.pdf',
  '.mp3',
  '.mp4',
  '.woff',
  '.woff2',
  '.ttf',
  '.eot',
]);

export function matchesPattern(filename: string, pattern: string): boolean {
  const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp('^' + escaped.replace(/\*/g, '.*') + '$');
  return regex.test(filename);
}

function isInAllowedPath(absolutePath: string, allowedPaths: string[]): boolean {
  const normalizedFile = path.normalize(absolutePath);
  return allowedPaths.some((allowed) => {
    const normalizedAllowed = path.resolve(allowed);
    return normalizedFile.startsWith(normalizedAllowed);
  });
}

function isInDeniedPath(absolutePath: string, deniedPaths: string[]): boolean {
  const normalizedFile = path.normalize(absolutePath);
  return deniedPaths.some((denied) => {
    const normalizedDenied = path.resolve(denied);
    return normalizedFile.startsWith(normalizedDenied);
  });
}

export function checkFile(
  absolutePath: string,
  config: SecurityConfig,
  excludePatterns?: string[],
): SecurityCheckResult {
  const filename = path.basename(absolutePath);
  const ext = path.extname(absolutePath).toLowerCase();

  // Step 1: Hardcoded blacklist
  for (const pattern of HARDCODED_BLACKLIST) {
    if (matchesPattern(filename, pattern)) {
      return { allowed: false, reason: 'HARDCODED_BLACKLIST' };
    }
  }

  // Step 2: Binary extensions
  if (BINARY_EXTENSIONS.has(ext)) {
    return { allowed: false, reason: 'BINARY_EXTENSION' };
  }

  // Step 3: Denied paths
  if (config.deniedPaths.length > 0 && isInDeniedPath(absolutePath, config.deniedPaths)) {
    return { allowed: false, reason: 'DENIED_PATH' };
  }

  // Step 4: Must be in allowed paths
  if (config.allowedPaths.length > 0 && !isInAllowedPath(absolutePath, config.allowedPaths)) {
    return { allowed: false, reason: 'NOT_IN_ALLOWED_PATH' };
  }

  // Step 5: Denied files patterns
  for (const pattern of config.deniedFiles) {
    if (matchesPattern(filename, pattern)) {
      return { allowed: false, reason: 'DENIED_FILE_PATTERN' };
    }
  }

  // Step 6: Allowed extensions check
  if (!config.allowedExtensions.includes('*')) {
    if (!config.allowedExtensions.includes(ext)) {
      return { allowed: false, reason: 'EXTENSION_NOT_ALLOWED' };
    }
  }

  // Step 7: File size check
  try {
    const stats = fs.statSync(absolutePath);
    const fileSizeKb = stats.size / 1024;
    if (fileSizeKb > config.maxFileSizeKb) {
      return { allowed: false, reason: 'FILE_TOO_LARGE' };
    }
  } catch {
    return { allowed: false, reason: 'FILE_TOO_LARGE' };
  }

  // Step 8: Module exclude patterns
  if (excludePatterns && excludePatterns.length > 0) {
    const relativeName = filename;
    for (const pattern of excludePatterns) {
      if (matchesPattern(relativeName, pattern)) {
        return { allowed: false, reason: 'MODULE_EXCLUDE_PATTERN' };
      }
    }
  }

  return { allowed: true };
}

export const DEFAULT_SECURITY_CONFIG: SecurityConfig = {
  allowedPaths: [], // Empty = no path restriction (when no config provided)
  deniedPaths: [],
  deniedFiles: [],
  maxFileSizeKb: 500,
  allowedExtensions: ['*'],
};

export function mergeSecurityConfig(partial?: Partial<SecurityConfig>): SecurityConfig {
  return {
    ...DEFAULT_SECURITY_CONFIG,
    ...partial,
  };
}

export type { SecurityCheckResult, SecurityConfig, DenialReason };
