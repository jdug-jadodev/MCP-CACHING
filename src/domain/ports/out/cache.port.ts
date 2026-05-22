import { CacheEntry } from "../../../types.js";

export interface CachePort {
  get(key: string): CacheEntry | undefined;
  set(key: string, value: CacheEntry): void;
  clear(): void;
  has(key: string): boolean;
}
