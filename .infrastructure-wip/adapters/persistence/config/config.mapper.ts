/**
 * Config Mapper - Manual mapping between infrastructure entity and domain model
 */

import { ConfigEntity } from './config.entity.js';
import { ProjectContext, ModuleConfig } from '../../../../domain/entities/project-context.entity.js';

export class ConfigMapper {
  static toDomain(entity: ConfigEntity): ProjectContext {
    return {
      modules: entity.modules.map((m: any) => ({
        name: m.name,
        path: m.path,
        includeInstructions: m.includeInstructions,
        excludePatterns: m.excludePatterns,
      })),
      globalInstructions: entity.globalInstructions,
      maxTotalSizeKb: entity.maxTotalSizeKb,
    };
  }

  static toEntity(domain: ProjectContext): ConfigEntity {
    return {
      modules: domain.modules.map((m: ModuleConfig) => ({
        name: m.name,
        path: m.path,
        includeInstructions: m.includeInstructions,
        excludePatterns: m.excludePatterns,
      })),
      globalInstructions: domain.globalInstructions,
      maxTotalSizeKb: domain.maxTotalSizeKb,
    };
  }
}
