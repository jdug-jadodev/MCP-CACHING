import { BundleResult } from "../../../types.js";

export interface GetDirectoryContextPort {
  execute(rootPath: string, excludePatterns?: string[]): Promise<BundleResult>;
}
