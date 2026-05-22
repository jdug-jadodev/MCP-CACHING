export type DenialReason =
  | 'BLACKLIST'
  | 'BINARY_EXTENSION'
  | 'DENIED_PATH'
  | 'NOT_ALLOWED_PATH'
  | 'DENIED_FILE'
  | 'EXTENSION_NOT_ALLOWED'
  | 'SIZE_EXCEEDED'
  | 'EXCLUDED_BY_PATTERN';

export interface SecurityCheckResult {
  isAllowed: boolean;
  reason?: DenialReason;
  message?: string;
}
