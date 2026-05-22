/**
 * SHA256 Fingerprint Service - Implementation of FingerprintServicePort
 */

import * as crypto from 'crypto';
import * as fs from 'fs';
import { FingerprintServicePort } from '../../../../application/ports/out/fingerprint-service.port.js';
import { FingerprintError } from '../../../../domain/errors/errors.js';
import { FINGERPRINT_ERROR_MESSAGES } from './fingerprint-error-messages.js';

export class SHA256FingerprintService implements FingerprintServicePort {
  async computeFingerprint(filePath: string): Promise<string> {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      return this.hashContent(content);
    } catch (error) {
      throw new FingerprintError(
        `${FINGERPRINT_ERROR_MESSAGES.COMPUTATION_ERROR}: ${(error as Error).message}`,
        filePath,
      );
    }
  }

  private hashContent(content: string): string {
    return crypto.createHash('sha256').update(content).digest('hex');
  }
}
