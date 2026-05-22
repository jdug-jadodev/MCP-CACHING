/**
 * Config Entity - Infrastructure representation of project configuration
 */

export interface ModuleConfigEntity {
  name: string;
  path: string;
  includeInstructions?: boolean;
  excludePatterns?: string[];
}

export interface ConfigEntity {
  modules: ModuleConfigEntity[];
  globalInstructions?: string;
  maxTotalSizeKb: number;
}
