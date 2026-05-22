import { BundleResult } from "../../types.js";
import { BundleResultDto } from "../dtos/bundle-result.dto.js";

export class BundleResultMapper {
  static toDomain(dto: BundleResultDto): BundleResult {
    return {
      content: dto.content,
      truncated: dto.truncated,
      omittedFiles: dto.omittedFiles,
      filesIncluded: 0,
      filesOmitted: 0,
    };
  }

  static toDto(domain: BundleResult): BundleResultDto {
    return {
      content: domain.content,
      truncated: domain.truncated,
      omittedFiles: domain.omittedFiles,
    };
  }
}
