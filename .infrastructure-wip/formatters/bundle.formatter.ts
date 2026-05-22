/**
 * Bundle Formatter Adapter - Implementation of BundleFormatterPort
 */

import { BundleFormatterPort } from '../../../../application/ports/out/bundle-formatter.port.js';
import { FileMetadata } from '../../../../domain/models/file-metadata.model.js';
import { BundleFormattingError } from '../../../../domain/errors/errors.js';
import { BUNDLE_FORMATTER_ERROR_MESSAGES } from './bundle-format-error-messages.js';

interface FileWithContent {
  metadata: FileMetadata;
  content: string;
}

export class BundleFormatterAdapter implements BundleFormatterPort {
  async formatFiles(
    files: FileWithContent[],
    maxTotalSizeKb: number,
  ): Promise<{ content: string; isTruncated: boolean; omittedFiles?: string[] }> {
    try {
      // Sort files by relative path
      const sortedFiles = files.sort((a, b) =>
        a.metadata.relativePath.localeCompare(b.metadata.relativePath),
      );

      const blocks: string[] = [];
      const omittedFiles: string[] = [];
      let totalSizeKb = 0;
      const maxSizeBytes = maxTotalSizeKb * 1024;

      for (const file of sortedFiles) {
        const block = this.createFileBlock(file.metadata, file.content);
        const blockSizeBytes = Buffer.byteLength(block);
        const newTotalSize = totalSizeKb * 1024 + blockSizeBytes;

        if (newTotalSize <= maxSizeBytes) {
          blocks.push(block);
          totalSizeKb = newTotalSize / 1024;
        } else {
          omittedFiles.push(file.metadata.relativePath);
        }
      }

      // Add truncation notice if needed
      let content = blocks.join('\n\n');
      let isTruncated = false;

      if (omittedFiles.length > 0) {
        isTruncated = true;
        const truncationMessage = this.createTruncationMessage(omittedFiles);
        content += '\n\n' + truncationMessage;
      }

      return {
        content,
        isTruncated,
        omittedFiles: isTruncated ? omittedFiles : undefined,
      };
    } catch (error) {
      throw new BundleFormattingError(
        `${BUNDLE_FORMATTER_ERROR_MESSAGES.FORMAT_ERROR}: ${(error as Error).message}`,
      );
    }
  }

  private createFileBlock(metadata: FileMetadata, content: string): string {
    const SHA256 = this.calculateSHA256(content);
    return (
      `BUNDLE_START: ${SHA256}\n` +
      `${metadata.relativePath}\n` +
      `${content}\n` +
      `BUNDLE_END: ${metadata.relativePath}`
    );
  }

  private createTruncationMessage(omittedFiles: string[]): string {
    const fileList = omittedFiles.map((f) => `  - ${f}`).join('\n');
    return (
      `BUNDLE_TRUNCATED\n\nThe following files were omitted due to size limit:\n${fileList}`
    );
  }

  private calculateSHA256(content: string): string {
    // For now, just return a simple hash representation
    // In production, this would use proper crypto
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16).padStart(64, '0');
  }
}
