import { FileMetadata } from "../../models/file-metadata.model.js";
import { SecurityCheckResult, SecurityConfig } from "../../../types.js";

export interface SecurityValidatorPort {
  validate(
    fileMetadata: FileMetadata,
    securityConfig: SecurityConfig,
  ): SecurityCheckResult;
}
