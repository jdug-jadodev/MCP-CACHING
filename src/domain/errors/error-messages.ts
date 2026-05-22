export const ERROR_MESSAGES = {
  
  CONFIG_FILE_NOT_FOUND: 'Configuration file not found',
  CONFIG_INVALID_JSON: 'Invalid JSON in configuration file',
  CONFIG_INVALID_STRUCTURE: 'Invalid configuration structure',
  CONFIG_INVALID_MODULES: 'Invalid modules configuration',
  CONFIG_INVALID_SECURITY: 'Invalid security configuration',
  CONFIG_MISSING_REQUIRED_FIELD: 'Missing required field in configuration',

  
  SECURITY_FILE_DENIED_BLACKLIST: 'File denied by blacklist',
  SECURITY_FILE_BINARY_EXTENSION: 'Binary files are not allowed',
  SECURITY_FILE_DENIED_PATH: 'File path is denied',
  SECURITY_FILE_NOT_ALLOWED_PATH: 'File path is not in allowed paths',
  SECURITY_FILE_DENIED_NAME: 'Filename is denied',
  SECURITY_FILE_EXTENSION_NOT_ALLOWED: 'File extension is not allowed',
  SECURITY_FILE_SIZE_EXCEEDED: 'File size exceeds maximum allowed',
  SECURITY_FILE_EXCLUDED_BY_PATTERN: 'File excluded by pattern',

  
  FILE_NOT_FOUND: 'File not found',
  FILE_READ_ERROR: 'Error reading file',
  FILE_EMPTY: 'File is empty',

  
  FINGERPRINT_COMPUTATION_ERROR: 'Error computing file fingerprint',

  
  BUNDLE_FORMAT_ERROR: 'Error formatting bundle',

  
  FILE_DISCOVERY_ERROR: 'Error discovering files',
  INVALID_GLOB_PATTERN: 'Invalid glob pattern',

  
  CACHE_ERROR: 'Cache operation error',

  
  LOGGER_ERROR: 'Logger initialization error',

  
  UNEXPECTED_ERROR: 'An unexpected error occurred',
  INVALID_ARGUMENT: 'Invalid argument provided',
} as const;
