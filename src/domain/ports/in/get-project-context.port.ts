import { BundleResult } from "../../../types.js";

export interface GetProjectContextPort {
  execute(paths: string[]): Promise<BundleResult>;
}
