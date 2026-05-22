/**
 * File Repository Adapter - Implementation of FileRepositoryPort using filesystem
 */

import * as fs from 'fs';
import * as path from 'path';
import fg from 'fast-glob';
import { FileRepositoryPort } from '../../../../application/ports/out/file-repository.port.js';
import { FileMetadata } from '../../../../domain/models/file-metadata.model.js';
import { FileReadError } from '../../../../domain/errors/errors.js';
import { FILE_REPOSITORY_ERROR_MESSAGES } from './file-repository-error-messages.js';
import { FileEntity } from './file.entity.js';
import { FileMapper } from './file.mapper.js';

export class FileRepositoryAdapter implements FileRepositoryPort {
  async readFile(filePath: string): Promise<string> {
    try {
      this.validatePath(filePath);
      return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      if (error instanceof FileReadError) {
        throw error;
      }
      throw new FileReadError(
        `${FILE_REPOSITORY_ERROR_MESSAGES.FILE_READ_ERROR}: ${(error as Error).message}`,
        filePath,
      );
    }
  }

  async getFileMetadata(filePath: string): Promise<FileMetadata> {
    try {
      this.validatePath(filePath);

      if (!fs.existsSync(filePath)) {
        throw new FileReadError(FILE_REPOSITORY_ERROR_MESSAGES.FILE_NOT_FOUND, filePath);
      }

      const stats = fs.statSync(filePath);
      const extension = path.extname(filePath);

      const entity: FileEntity = {
        absolutePath: filePath,
        relativePath: path.relative(process.cwd(), filePath),
        size: stats.size,
        extension,
      };

      return FileMapper.toDomain(entity);
    } catch (error) {
      if (error instanceof FileReadError) {
        throw error;
      }
      throw new FileReadError(
        `Error getting file metadata: ${(error as Error).message}`,
        filePath,
      );
    }
  }

  async discoverFiles(rootPath: string, excludePatterns?: string[]): Promise<FileMetadata[]> {
    try {
      this.validatePath(rootPath);

      if (!fs.existsSync(rootPath)) {
        throw new FileReadError(`Directory not found: ${rootPath}`, rootPath);
      }

      const pattern = path.join(rootPath, '**', '*');
      const ignorePatterns = excludePatterns?.map((p) => `!${path.join(rootPath, p)}`) || [];

      const files = await fg([pattern, ...ignorePatterns], {
        dot: false,
        onlyFiles: true,
      });

      return files.map((filePath: string) => {
        const stats = fs.statSync(filePath);
        const extension = path.extname(filePath);

        const entity: FileEntity = {
          absolutePath: filePath,
          relativePath: path.relative(rootPath, filePath),
          size: stats.size,
          extension,
        };

        return FileMapper.toDomain(entity);
      });
    } catch (error) {
      if (error instanceof FileReadError) {
        throw error;
      }
      throw new FileReadError(
        `Error discovering files: ${(error as Error).message}`,
        rootPath,
      );
    }
  }

  async getFilesByPaths(paths: string[]): Promise<FileMetadata[]> {
    try {
      const fileMetadata: FileMetadata[] = [];

      for (const filePath of paths) {
        try {
          const metadata = await this.getFileMetadata(filePath);
          fileMetadata.push(metadata);
        } catch (error) {
          // Log but continue with other files
          console.warn(`Could not get metadata for ${filePath}: ${(error as Error).message}`);
        }
      }

      return fileMetadata;
    } catch (error) {
      throw new FileReadError(
        `Error getting files by paths: ${(error as Error).message}`,
        paths.join(','),
      );
    }
  }

  private validatePath(filePath: string): void {
    if (!filePath || typeof filePath !== 'string') {
      throw new FileReadError(FILE_REPOSITORY_ERROR_MESSAGES.INVALID_PATH, filePath);
    }

    const resolvedPath = path.resolve(filePath);
    const basePath = path.resolve(process.cwd());

    if (!resolvedPath.startsWith(basePath)) {
      throw new FileReadError(FILE_REPOSITORY_ERROR_MESSAGES.PATH_TRAVERSAL_ATTEMPT, filePath);
    }
  }
}
