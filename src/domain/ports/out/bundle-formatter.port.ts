import { FileMetadata } from "../../models/file-metadata.model.js";

export interface BundleFormatterPort {
  formatFiles(
    files: Array<{ metadata: FileMetadata; content: string }>,
    maxTotalSizeKb: number,
  ): Promise<{ content: string; isTruncated: boolean; omittedFiles?: string[] }>;
}
