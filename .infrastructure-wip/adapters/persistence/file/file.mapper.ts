/**
 * File Mapper - Manual mapping between infrastructure entity and domain model
 */

import { FileEntity } from './file.entity.js';
import { FileMetadata } from '../../../../domain/models/file-metadata.model.js';

export class FileMapper {
  static toDomain(entity: FileEntity): FileMetadata {
    return {
      absolutePath: entity.absolutePath,
      relativePath: entity.relativePath,
      size: entity.size,
      extension: entity.extension,
    };
  }

  static toEntity(domain: FileMetadata): FileEntity {
    return {
      absolutePath: domain.absolutePath,
      relativePath: domain.relativePath,
      size: domain.size,
      extension: domain.extension,
    };
  }
}
