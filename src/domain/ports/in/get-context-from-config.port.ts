import { BundleResult } from "../../../types.js";


export interface GetContextFromConfigPort {
  execute(projectRoot: string): Promise<BundleResult>;
}
