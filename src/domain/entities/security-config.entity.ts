export interface SecurityConfig {
  allowedPaths?: string[];
  deniedPaths?: string[];
  deniedFiles?: string[];
  maxFileSizeKb?: number;
  allowedExtensions?: string[];
}
