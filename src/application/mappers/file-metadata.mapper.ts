import { FileMetadata } from "../../domain/models/file-metadata.model.js";
import { FileMetadataDto } from "../dtos/file-metadata.dto.js";


export class FileMetadataMapper {
  static toDomain(dto: FileMetadataDto): FileMetadata {
    return {
      absolutePath: dto.absolutePath,
      relativePath: dto.relativePath,
      size: dto.size,
      extension: dto.extension,
    };
  }

  static toDto(domain: FileMetadata): FileMetadataDto {
    return {
      absolutePath: domain.absolutePath,
      relativePath: domain.relativePath,
      size: domain.size,
      extension: domain.extension,
    };
  }
}
