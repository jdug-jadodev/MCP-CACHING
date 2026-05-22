export interface FileMetadata {
  absolutePath: string;
  relativePath: string;
  size: number;
  extension: string;
  fingerprint?: string;
}
