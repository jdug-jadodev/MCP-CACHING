/**
 * Security Error Messages
 */

export const SECURITY_ERROR_MESSAGES = {
  BLACKLIST_MATCH: 'File matches blacklist pattern',
  BINARY_EXTENSION: 'Binary file extensions are not allowed',
  DENIED_PATH: 'File path is in denied paths list',
  NOT_ALLOWED_PATH: 'File path is not in allowed paths',
  DENIED_FILENAME: 'Filename matches denied pattern',
  EXTENSION_NOT_ALLOWED: 'File extension is not in allowed extensions list',
  FILE_SIZE_EXCEEDED: 'File size exceeds maximum allowed size',
  EXCLUDED_BY_PATTERN: 'File is excluded by configured exclude pattern',
} as const;
