export interface BundleResult {
  content: string;
  isTruncated: boolean;
  omittedFiles?: string[];
  cacheHits?: number;
  cacheMisses?: number;
}
