/**
 * File Entity - Infrastructure representation of a file
 */

export interface FileEntity {
  absolutePath: string;
  relativePath: string;
  size: number;
  extension: string;
  content?: string;
}
