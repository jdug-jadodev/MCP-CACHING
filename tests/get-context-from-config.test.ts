// tests/get-context-from-config.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import { getContextFromConfig } from '../src/tools/get-context-from-config.js';
import { LRUCache } from '../src/cache/lru-cache.js';
import { Logger } from '../src/logger/logger.js';
import type { ProjectConfig } from '../src/types.js';

let tmpDir: string;
let cache: LRUCache;
let logger: Logger;

beforeEach(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mcp-get-config-'));
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

function writeConfig(config: ProjectConfig): void {
  fs.writeFileSync(
    path.join(tmpDir, 'contextcache.json'),
    JSON.stringify(config, null, 2),
    'utf8',
  );
}

describe('getContextFromConfig', () => {
  it('lanza error si contextcache.json no existe', async () => {
    await expect(
      getContextFromConfig({ projectRoot: tmpDir }, cache, logger),
    ).rejects.toThrow('not found');
  });

  it('incluye instrucciones globales al inicio del bloque', async () => {
    createFile('.github/copilot-instructions.md', '# Global Instructions\nAlways be helpful.');
    createFile('src/module/app.ts', 'export const app = 1;');

    writeConfig({
      globalInstructions: '.github/copilot-instructions.md',
      modules: [{ name: 'app', path: 'src/module' }],
      security: {
        allowedPaths: [],
        allowedExtensions: ['*'],
        deniedPaths: [],
        deniedFiles: [],
        maxFileSizeKb: 500,
      },
    });

    const result = await getContextFromConfig({ projectRoot: tmpDir }, cache, logger);
    const globalIdx = result.content.indexOf('GLOBAL INSTRUCTIONS');
    const moduleIdx = result.content.indexOf('src/module/app.ts');

    expect(globalIdx).toBeGreaterThanOrEqual(0);
    expect(moduleIdx).toBeGreaterThanOrEqual(0);
    expect(globalIdx).toBeLessThan(moduleIdx);
  });

  it('incluye instrucciones del módulo antes del código si includeInstructions: true', async () => {
    createFile('src/module/INSTRUCTIONS.md', '# Module Instructions\nFollow these rules.');
    createFile('src/module/app.ts', 'export const app = 1;');

    writeConfig({
      modules: [{ name: 'myModule', path: 'src/module', includeInstructions: true }],
      security: {
        allowedPaths: [],
        allowedExtensions: ['*'],
        deniedPaths: [],
        deniedFiles: [],
        maxFileSizeKb: 500,
      },
    });

    const result = await getContextFromConfig({ projectRoot: tmpDir }, cache, logger);
    const instructionsIdx = result.content.indexOf('MODULE INSTRUCTIONS');
    const codeIdx = result.content.indexOf('src/module/app.ts');

    expect(instructionsIdx).toBeGreaterThanOrEqual(0);
    expect(codeIdx).toBeGreaterThanOrEqual(0);
    expect(instructionsIdx).toBeLessThan(codeIdx);
  });

  it('NO incluye instrucciones si includeInstructions: false', async () => {
    createFile('src/module/INSTRUCTIONS.md', '# Instructions\nDo not include me.');
    createFile('src/module/app.ts', 'export const app = 1;');

    writeConfig({
      modules: [{ name: 'myModule', path: 'src/module', includeInstructions: false }],
      security: {
        allowedPaths: [],
        allowedExtensions: ['*'],
        deniedPaths: [],
        deniedFiles: [],
        maxFileSizeKb: 500,
      },
    });

    const result = await getContextFromConfig({ projectRoot: tmpDir }, cache, logger);
    expect(result.content).not.toContain('MODULE INSTRUCTIONS');
  });

  it('respeta excludePatterns por módulo', async () => {
    createFile('src/lib/utils.ts', 'export const util = 1;');
    createFile('src/lib/utils.test.ts', 'test("util", () => {})');

    writeConfig({
      modules: [
        {
          name: 'lib',
          path: 'src/lib',
          excludePatterns: ['*.test.ts'],
        },
      ],
      security: {
        allowedPaths: [],
        allowedExtensions: ['*'],
        deniedPaths: [],
        deniedFiles: [],
        maxFileSizeKb: 500,
      },
    });

    const result = await getContextFromConfig({ projectRoot: tmpDir }, cache, logger);
    expect(result.content).toContain('src/lib/utils.ts');
    expect(result.content).not.toContain('utils.test.ts');
  });

  it('aplica truncado inteligente al superar maxTotalSizeKb', async () => {
    const largeContent = 'x'.repeat(400 * 1024); // 400 KB per file
    createFile('src/mod/a.ts', largeContent);
    createFile('src/mod/b.ts', largeContent);
    createFile('src/mod/c.ts', largeContent);

    writeConfig({
      maxTotalSizeKb: 500,
      modules: [{ name: 'mod', path: 'src/mod' }],
      security: {
        allowedPaths: [],
        allowedExtensions: ['*'],
        deniedPaths: [],
        deniedFiles: [],
        maxFileSizeKb: 600,
      },
    });

    const result = await getContextFromConfig({ projectRoot: tmpDir }, cache, logger);
    expect(result.truncated).toBe(true);
    expect(result.content).toContain('BUNDLE_TRUNCATED');
  });
});
