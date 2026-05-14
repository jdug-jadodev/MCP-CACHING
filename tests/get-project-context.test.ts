// tests/get-project-context.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import { getProjectContext } from '../src/tools/get-project-context.js';
import { LRUCache } from '../src/cache/lru-cache.js';
import { Logger } from '../src/logger/logger.js';

let tmpDir: string;
let cache: LRUCache;
let logger: Logger;

beforeEach(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mcp-get-project-'));
  cache = new LRUCache({ maxEntries: 100, maxEntrySizeKb: 1024 });
  logger = new Logger('error'); // Suppress logs during tests
});

afterEach(() => {
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

function createFile(name: string, content: string): string {
  const filePath = path.join(tmpDir, name);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  return filePath;
}

describe('getProjectContext', () => {
  it('devuelve bloque vacío para lista vacía de rutas', async () => {
    const result = await getProjectContext({ paths: [], projectRoot: tmpDir }, cache, logger);
    expect(result.content).toBe('');
    expect(result.filesIncluded).toBe(0);
  });

  it('reutiliza caché si el archivo no cambió', async () => {
    const filePath = createFile('main.ts', 'export const x = 1;');

    const result1 = await getProjectContext(
      { paths: [filePath], projectRoot: tmpDir },
      cache,
      logger,
    );
    expect(result1.filesIncluded).toBe(1);

    // Simulate calling again — should hit cache
    const result2 = await getProjectContext(
      { paths: [filePath], projectRoot: tmpDir },
      cache,
      logger,
    );
    expect(result2.content).toBe(result1.content);
  });

  it('invalida caché si el archivo fue modificado', async () => {
    const filePath = createFile('main.ts', 'export const x = 1;');

    const result1 = await getProjectContext(
      { paths: [filePath], projectRoot: tmpDir },
      cache,
      logger,
    );

    // Modify the file
    fs.writeFileSync(filePath, 'export const x = 2;', 'utf8');

    const result2 = await getProjectContext(
      { paths: [filePath], projectRoot: tmpDir },
      cache,
      logger,
    );
    expect(result2.content).not.toBe(result1.content);
    expect(result2.content).toContain('export const x = 2;');
  });

  it('omite archivos que no pasan la validación de seguridad', async () => {
    const envFile = createFile('.env', 'SECRET=abc');
    const tsFile = createFile('app.ts', 'export const app = true;');

    const result = await getProjectContext(
      { paths: [envFile, tsFile], projectRoot: tmpDir },
      cache,
      logger,
    );
    expect(result.filesIncluded).toBe(1);
    expect(result.filesOmitted).toBe(1);
    expect(result.content).not.toContain('SECRET=abc');
    expect(result.content).toContain('app.ts');
  });

  it('resuelve rutas relativas contra projectRoot', async () => {
    createFile('src/util.ts', 'export const util = true;');

    const result = await getProjectContext(
      { paths: ['src/util.ts'], projectRoot: tmpDir },
      cache,
      logger,
    );
    expect(result.filesIncluded).toBe(1);
    expect(result.content).toContain('src/util.ts');
  });

  it('incluye fingerprint SHA-256 en el bloque BUNDLE_START', async () => {
    createFile('index.ts', 'const x = 1;');

    const result = await getProjectContext(
      { paths: ['index.ts'], projectRoot: tmpDir },
      cache,
      logger,
    );
    // SHA-256 is 64 hex characters
    expect(result.content).toMatch(/BUNDLE_START: [0-9a-f]{64}/);
  });
});
