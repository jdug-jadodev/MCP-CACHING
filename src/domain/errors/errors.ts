export class ApplicationError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500,
    public details?: Record<string, unknown>,
  ) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ConfigLoadError extends ApplicationError {
  constructor(message: string, details?: Record<string, unknown>) {
    super('CONFIG_LOAD_ERROR', message, 400, details);
  }
}

export class SecurityCheckError extends ApplicationError {
  constructor(message: string, details?: Record<string, unknown>) {
    super('SECURITY_CHECK_ERROR', message, 403, details);
  }
}

export class FileReadError extends ApplicationError {
  constructor(message: string, filePath: string) {
    super('FILE_READ_ERROR', message, 500, { filePath });
  }
}

export class FingerprintError extends ApplicationError {
  constructor(message: string, filePath: string) {
    super('FINGERPRINT_ERROR', message, 500, { filePath });
  }
}

export class BundleFormattingError extends ApplicationError {
  constructor(message: string) {
    super('BUNDLE_FORMAT_ERROR', message, 500);
  }
}

export class FileDiscoveryError extends ApplicationError {
  constructor(message: string, pattern?: string) {
    super('FILE_DISCOVERY_ERROR', message, 500, { pattern });
  }
}

export class CacheError extends ApplicationError {
  constructor(message: string) {
    super('CACHE_ERROR', message, 500);
  }
}

export class ValidationError extends ApplicationError {
  constructor(message: string, details?: Record<string, unknown>) {
    super('VALIDATION_ERROR', message, 400, details);
  }
}
