export interface ModuleConfig {
  name: string;
  path: string;
  includeInstructions?: boolean;
  excludePatterns?: string[];
}

export interface ProjectContext {
  modules: ModuleConfig[];
  globalInstructions?: string;
  maxTotalSizeKb: number;
}
