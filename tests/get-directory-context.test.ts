// tests/get-directory-context.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import { getDirectoryContext } from '../src/tools/get-directory-context.js';
import { LRUCache } from '../src/cache/lru-cache.js';
import { Logger } from '../src/logger/logger.js';

let tmpDir: string;
let cache: LRUCache;
let logger: Logger;

beforeEach(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mcp-get-dir-'));
  cache = new LRUCache({ maxEntries: 100, maxEntrySizeKb: 1024 });
  logger = new Logger('error');
});

afterEach(() => {
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

function createFile(relativeName: string, content = 'content'): string {
  const filePath = path.join(tmpDir, relativeName);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  return filePath;
}

describe('getDirectoryContext', () => {
  it('recorre recursivamente todos los archivos del directorio', async () => {
    createFile('src/a.ts', 'const a = 1;');
    createFile('src/nested/b.ts', 'const b = 2;');
    createFile('README.md', '# README');

    const result = await getDirectoryContext({ rootPath: tmpDir }, cache, logger);
    expect(result.filesIncluded).toBe(3);
    expect(result.content).toContain('src/a.ts');
    expect(result.content).toContain('src/nested/b.ts');
    expect(result.content).toContain('README.md');
  });

  it('excluye node_modules y .git automáticamente', async () => {
    createFile('src/main.ts', 'export default 1;');
    createFile('node_modules/lib/index.js', 'module.exports = {};');
    createFile('.git/config', '[core]');

    const result = await getDirectoryContext({ rootPath: tmpDir }, cache, logger);
    expect(result.content).not.toContain('node_modules');
    expect(result.content).not.toContain('.git/config');
    expect(result.content).toContain('src/main.ts');
  });

  it('aplica excludePatterns correctamente', async () => {
    createFile('src/app.ts', 'export const app = 1;');
    createFile('src/app.test.ts', 'test("x", () => {})');

    const result = await getDirectoryContext(
      { rootPath: tmpDir, excludePatterns: ['*.test.ts'] },
      cache,
      logger,
    );
    expect(result.content).toContain('src/app.ts');
    expect(result.content).not.toContain('src/app.test.ts');
  });

  it('ordena los archivos alfabéticamente', async () => {
    createFile('z/zeta.ts', 'const z = 0;');
    createFile('a/alpha.ts', 'const a = 0;');
    createFile('m/mid.ts', 'const m = 0;');

    const result = await getDirectoryContext({ rootPath: tmpDir }, cache, logger);
    const alphaIdx = result.content.indexOf('a/alpha.ts');
    const midIdx = result.content.indexOf('m/mid.ts');
    const zetaIdx = result.content.indexOf('z/zeta.ts');

    expect(alphaIdx).toBeLessThan(midIdx);
    expect(midIdx).toBeLessThan(zetaIdx);
  });

  it('excluye archivos sensibles como .env', async () => {
    createFile('app.ts', 'export const app = true;');
    createFile('.env', 'SECRET=value');

    const result = await getDirectoryContext({ rootPath: tmpDir }, cache, logger);
    expect(result.content).toContain('app.ts');
    expect(result.content).not.toContain('SECRET=value');
    expect(result.filesOmitted).toBeGreaterThan(0);
  });
});
