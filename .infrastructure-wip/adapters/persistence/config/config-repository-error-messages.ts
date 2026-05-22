/**
 * Config Repository Error Messages
 */

export const CONFIG_REPOSITORY_ERROR_MESSAGES = {
  FILE_NOT_FOUND: 'Configuration file not found at',
  INVALID_JSON: 'Invalid JSON in configuration file',
  INVALID_STRUCTURE: 'Invalid configuration structure',
  MISSING_MODULES: 'Missing required field: modules',
  MISSING_MAX_SIZE: 'Missing required field: maxTotalSizeKb',
  INVALID_MODULE: 'Invalid module configuration',
} as const;
