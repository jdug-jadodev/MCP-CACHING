import * as path from 'path';
import { SecurityConfig, BundleResult } from '../../types.js';
import { BundleFormatterPort } from '../../domain/ports/out/bundle-formatter.port.js';
import { CachePort } from '../../domain/ports/out/cache.port.js';
import { ConfigRepositoryPort } from '../../domain/ports/out/config-repository.port.js';
import { FileRepositoryPort } from '../../domain/ports/out/file-repository.port.js';
import { FingerprintServicePort } from '../../domain/ports/out/fingerprint-service.port.js';
import { LoggerPort } from '../../domain/ports/out/logger.port.js';
import { SecurityValidatorPort } from '../../domain/ports/out/security-validator.port.js';

export class GetContextFromConfigUseCase {
  constructor(
    private fileRepository: FileRepositoryPort,
    private cache: CachePort,
    private configRepository: ConfigRepositoryPort,
    private securityValidator: SecurityValidatorPort,
    private fingerprintService: FingerprintServicePort,
    private bundleFormatter: BundleFormatterPort,
    private logger: LoggerPort,
  ) {}

  async execute(
    projectRoot: string,
    securityConfig: SecurityConfig,
  ): Promise<BundleResult> {
    this.logger.debug('GetContextFromConfigUseCase.execute started', { projectRoot });

    try {
      
      const config = await this.configRepository.loadConfig(projectRoot);

      
      const allFileMetadata: Array<{ absolutePath: string; relativePath: string; size: number; extension: string }> = [];

      for (const module of config.modules) {
        const modulePath = path.join(projectRoot, module.path);
        const moduleFiles = await this.fileRepository.discoverFiles(
          modulePath,
          module.excludePatterns,
        );

        allFileMetadata.push(...moduleFiles);
      }

      
      if (config.globalInstructions) {
        const instructionsPath = path.join(projectRoot, config.globalInstructions);
        try {
          const metadata = await this.fileRepository.getFileMetadata(instructionsPath);
          allFileMetadata.push(metadata);
        } catch (error) {
          this.logger.warn(`Could not load global instructions file: ${instructionsPath}`);
        }
      }

      
      const secureFiles = allFileMetadata.filter((metadata) => {
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
        config.maxTotalSizeKb,
      );

      this.logger.info('GetContextFromConfigUseCase.execute completed successfully');

      return {
        content: formattedBundle.content,
        truncated: formattedBundle.isTruncated,
        omittedFiles: formattedBundle.omittedFiles || [],
        filesIncluded: allFileMetadata.length - (formattedBundle.omittedFiles?.length || 0),
        filesOmitted: formattedBundle.omittedFiles?.length || 0,
      };
    } catch (error) {
      this.logger.error('GetContextFromConfigUseCase.execute failed', { error });
      throw error;
    }
  }
}
