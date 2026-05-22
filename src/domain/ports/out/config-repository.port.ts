import { ProjectContext } from "../../entities/project-context.entity.js";

export interface ConfigRepositoryPort {
  loadConfig(projectRoot: string): Promise<ProjectContext>;
}
