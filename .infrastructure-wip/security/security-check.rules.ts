/**
 * Security Check Rules - Hardcoded security rules
 */

// Files that should never be included (hardcoded blacklist)
export const HARDCODED_BLACKLIST = [
  /\.env/i,
  /\.env\.local/i,
  /\.env\.production/i,
  /\.env\.development/i,
  /\.pem$/i,
  /\.key$/i,
  /\.p12$/i,
  /\.pfx$/i,
  /private[_-]?key/i,
  /\.aws\/credentials/i,
  /\.ssh\/id_/i,
  /aws_access_key_id/i,
  /aws_secret_access_key/i,
  /password/i,
  /secret/i,
  /token/i,
  /oauth/i,
];

// Binary file extensions that should be excluded
export const BINARY_EXTENSIONS = [
  '.exe',
  '.dll',
  '.so',
  '.dylib',
  '.bin',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.bmp',
  '.ico',
  '.svg',
  '.zip',
  '.tar',
  '.gz',
  '.rar',
  '.7z',
  '.pdf',
  '.doc',
  '.docx',
  '.xls',
  '.xlsx',
  '.ppt',
  '.pptx',
  '.mp3',
  '.mp4',
  '.avi',
  '.mov',
  '.webp',
  '.woff',
  '.woff2',
  '.ttf',
  '.otf',
];

export function matchesBlacklist(filename: string): boolean {
  return HARDCODED_BLACKLIST.some((pattern) => pattern.test(filename));
}

export function isBinaryExtension(extension: string): boolean {
  return BINARY_EXTENSIONS.includes(extension.toLowerCase());
}
