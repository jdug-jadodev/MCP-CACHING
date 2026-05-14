// scripts/postbuild.mjs
import { readFileSync, writeFileSync, chmodSync } from 'node:fs';

const filePath = 'dist/index.js';
const content = readFileSync(filePath, 'utf8');

if (!content.startsWith('#!/usr/bin/env node')) {
  writeFileSync(filePath, '#!/usr/bin/env node\n' + content);
}

try {
  chmodSync(filePath, '755');
} catch {
  // chmod not supported on Windows, ignore
}
