/**
 * Config File Repository Adapter - Implementation of ConfigRepositoryPort
 */

import * as fs from 'fs';
import * as path from 'path';
import { z } from 'zod';
import { ConfigRepositoryPort } from '../../../../application/ports/out/config-repository.port.js';
import { ProjectContext } from '../../../../domain/entities/project-context.entity.js';
import { ConfigLoadError } from '../../../../domain/errors/errors.js';
import { CONFIG_REPOSITORY_ERROR_MESSAGES } from './config-repository-error-messages.js';
import { ConfigEntity } from './config.entity.js';
import { ConfigMapper } from './config.mapper.js';

// Zod schema for validation
const ModuleConfigSchema = z.object({
  name: z.string(),
  path: z.string(),
  includeInstructions: z.boolean().optional(),
  excludePatterns: z.array(z.string()).optional(),
});

const ConfigFileSchema = z.object({
  modules: z.array(ModuleConfigSchema),
  globalInstructions: z.string().optional(),
  maxTotalSizeKb: z.number().positive(),
  cache: z.object({
    maxEntries: z.number().optional(),
    maxEntrySizeKb: z.number().optional(),
  }).optional(),
  security: z.any().optional(),
});

export class ConfigFileRepositoryAdapter implements ConfigRepositoryPort {
  async loadConfig(projectRoot: string): Promise<ProjectContext> {
    try {
      const configPath = path.join(projectRoot, 'contextcache.json');

      if (!fs.existsSync(configPath)) {
        throw new ConfigLoadError(
          `${CONFIG_REPOSITORY_ERROR_MESSAGES.FILE_NOT_FOUND} ${configPath}`,
        );
      }

      const fileContent = fs.readFileSync(configPath, 'utf-8');
      let rawConfig: unknown;

      try {
        rawConfig = JSON.parse(fileContent);
      } catch (error) {
        throw new ConfigLoadError(CONFIG_REPOSITORY_ERROR_MESSAGES.INVALID_JSON, {
          filePath: configPath,
        });
      }

      // Validate with Zod
      let validatedConfig: z.infer<typeof ConfigFileSchema>;
      try {
        validatedConfig = ConfigFileSchema.parse(rawConfig);
      } catch (error) {
        const zodError = error as z.ZodError;
        throw new ConfigLoadError(CONFIG_REPOSITORY_ERROR_MESSAGES.INVALID_STRUCTURE, {
          errors: zodError.errors,
        });
      }

      // Map to entity and then to domain
      const entity: ConfigEntity = {
        modules: validatedConfig.modules,
        globalInstructions: validatedConfig.globalInstructions,
        maxTotalSizeKb: validatedConfig.maxTotalSizeKb,
      };

      return ConfigMapper.toDomain(entity);
    } catch (error) {
      if (error instanceof ConfigLoadError) {
        throw error;
      }
      throw new ConfigLoadError(`Error loading configuration: ${(error as Error).message}`);
    }
  }
}
