export interface FingerprintServicePort {
  computeFingerprint(content: string): Promise<string>;
}
