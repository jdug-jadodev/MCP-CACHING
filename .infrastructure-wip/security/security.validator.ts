/**
 * Security Validator Adapter - Implementation of SecurityValidatorPort
 */

import * as path from 'path';
import { SecurityValidatorPort } from '../../../../application/ports/out/security-validator.port.js';
import { FileMetadata } from '../../../../domain/models/file-metadata.model.js';
import { SecurityCheckResult, DenialReason } from '../../../../domain/models/security-check-result.model.js';
import { SecurityConfig } from '../../../../domain/entities/security-config.entity.js';
import { SECURITY_ERROR_MESSAGES } from './security-error-messages.js';
import { matchesBlacklist, isBinaryExtension } from './security-check.rules.js';

export class SecurityValidatorAdapter implements SecurityValidatorPort {
  validate(fileMetadata: FileMetadata, securityConfig: SecurityConfig): SecurityCheckResult {
    // Step 1: Check hardcoded blacklist
    if (matchesBlacklist(fileMetadata.absolutePath)) {
      return this.denyAccess('BLACKLIST', SECURITY_ERROR_MESSAGES.BLACKLIST_MATCH);
    }

    // Step 2: Check for binary extensions
    if (isBinaryExtension(fileMetadata.extension)) {
      return this.denyAccess('BINARY_EXTENSION', SECURITY_ERROR_MESSAGES.BINARY_EXTENSION);
    }

    // Step 3: Check denied paths
    if (this.isInDeniedPaths(fileMetadata.absolutePath, securityConfig.deniedPaths)) {
      return this.denyAccess('DENIED_PATH', SECURITY_ERROR_MESSAGES.DENIED_PATH);
    }

    // Step 4: Check allowed paths (if configured)
    if (
      securityConfig.allowedPaths &&
      securityConfig.allowedPaths.length > 0 &&
      !this.isInAllowedPaths(fileMetadata.absolutePath, securityConfig.allowedPaths)
    ) {
      return this.denyAccess('NOT_ALLOWED_PATH', SECURITY_ERROR_MESSAGES.NOT_ALLOWED_PATH);
    }

    // Step 5: Check denied filenames
    const fileName = path.basename(fileMetadata.absolutePath);
    if (this.isInDeniedFiles(fileName, securityConfig.deniedFiles)) {
      return this.denyAccess('DENIED_FILE', SECURITY_ERROR_MESSAGES.DENIED_FILENAME);
    }

    // Step 6: Check allowed extensions (if configured)
    if (
      securityConfig.allowedExtensions &&
      securityConfig.allowedExtensions.length > 0 &&
      !this.isExtensionAllowed(fileMetadata.extension, securityConfig.allowedExtensions)
    ) {
      return this.denyAccess(
        'EXTENSION_NOT_ALLOWED',
        SECURITY_ERROR_MESSAGES.EXTENSION_NOT_ALLOWED,
      );
    }

    // Step 7: Check file size
    if (
      securityConfig.maxFileSizeKb &&
      fileMetadata.size / 1024 > securityConfig.maxFileSizeKb
    ) {
      return this.denyAccess('SIZE_EXCEEDED', SECURITY_ERROR_MESSAGES.FILE_SIZE_EXCEEDED);
    }

    // Step 8: All checks passed
    return { isAllowed: true };
  }

  private isInDeniedPaths(filePath: string, deniedPaths?: string[]): boolean {
    if (!deniedPaths || deniedPaths.length === 0) {
      return false;
    }

    const normalizedFilePath = path.normalize(filePath);
    return deniedPaths.some((deniedPath) => {
      const normalizedDeniedPath = path.normalize(deniedPath);
      return normalizedFilePath.includes(normalizedDeniedPath);
    });
  }

  private isInAllowedPaths(filePath: string, allowedPaths: string[]): boolean {
    const normalizedFilePath = path.normalize(filePath);
    return allowedPaths.some((allowedPath) => {
      const normalizedAllowedPath = path.normalize(allowedPath);
      return normalizedFilePath.startsWith(normalizedAllowedPath);
    });
  }

  private isInDeniedFiles(fileName: string, deniedFiles?: string[]): boolean {
    if (!deniedFiles || deniedFiles.length === 0) {
      return false;
    }

    return deniedFiles.some((deniedFile) => {
      // Support glob-like patterns
      if (deniedFile.includes('*')) {
        const regex = new RegExp(deniedFile.replace(/\*/g, '.*'));
        return regex.test(fileName);
      }
      return fileName === deniedFile;
    });
  }

  private isExtensionAllowed(extension: string, allowedExtensions: string[]): boolean {
    const normalizedExtension = extension.toLowerCase();
    return allowedExtensions.some((allowed) => allowed.toLowerCase() === normalizedExtension);
  }

  private denyAccess(reason: DenialReason, message: string): SecurityCheckResult {
    return {
      isAllowed: false,
      reason,
      message,
    };
  }
}
