import { FileMetadata } from "../../models/file-metadata.model.js";

export interface FileRepositoryPort {
  readFile(filePath: string): Promise<string>;
  getFileMetadata(filePath: string): Promise<FileMetadata>;
  discoverFiles(rootPath: string, excludePatterns?: string[]): Promise<FileMetadata[]>;
  getFilesByPaths(paths: string[]): Promise<FileMetadata[]>;
}
