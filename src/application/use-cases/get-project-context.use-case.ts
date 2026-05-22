import { BundleResult, SecurityConfig } from "../../types.js";
import { BundleFormatterPort } from "../../domain/ports/out/bundle-formatter.port.js";
import { CachePort } from "../../domain/ports/out/cache.port.js";
import { FileRepositoryPort } from "../../domain/ports/out/file-repository.port.js";
import { FingerprintServicePort } from "../../domain/ports/out/fingerprint-service.port.js";
import { LoggerPort } from "../../domain/ports/out/logger.port.js";
import { SecurityValidatorPort } from "../../domain/ports/out/security-validator.port.js";

export class GetProjectContextUseCase {
  constructor(
    private fileRepository: FileRepositoryPort,
    private cache: CachePort,
    private securityValidator: SecurityValidatorPort,
    private fingerprintService: FingerprintServicePort,
    private bundleFormatter: BundleFormatterPort,
    private logger: LoggerPort,
  ) {}

  async execute(
    paths: string[],
    securityConfig: SecurityConfig,
    maxTotalSizeKb: number,
  ): Promise<BundleResult> {
    this.logger.debug('GetProjectContextUseCase.execute started', { paths });

    try {
      
      const fileMetadataList = await this.fileRepository.getFilesByPaths(paths);

      
      const secureFiles = fileMetadataList.filter((metadata) => {
        const securityCheck = this.securityValidator.validate(metadata, securityConfig);
        if (!securityCheck.allowed) {
          this.logger.warn(`File denied by security: ${metadata.absolutePath}`, {
            reason: securityCheck.reason,
          });
        }
        return securityCheck.allowed;
      });

      
      const filesWithContent = await Promise.all(
        secureFiles.map(async (metadata) => {
          const fingerprint = await this.fingerprintService.computeFingerprint(
            metadata.absolutePath,
          );

          
          if (this.cache.has(fingerprint)) {
            this.logger.debug(`Cache hit for file: ${metadata.relativePath}`);
            return { metadata, content: '' }; 
          }

          
          const content = await this.fileRepository.readFile(metadata.absolutePath);
          return { metadata, content };
        }),
      );

      
      const formattedBundle = await this.bundleFormatter.formatFiles(
        filesWithContent,
        maxTotalSizeKb,
      );

      this.logger.info('GetProjectContextUseCase.execute completed successfully');

      return {
        content: formattedBundle.content,
        truncated: formattedBundle.isTruncated,
        omittedFiles: formattedBundle.omittedFiles || [],
        filesIncluded: fileMetadataList.length - (formattedBundle.omittedFiles?.length || 0),
        filesOmitted: formattedBundle.omittedFiles?.length || 0,
      };
    } catch (error) {
      this.logger.error('GetProjectContextUseCase.execute failed', { error });
      throw error;
    }
  }
}
