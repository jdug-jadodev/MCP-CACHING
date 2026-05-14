// tests/security.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import { checkFile } from '../src/security/security-guard.js';
import type { SecurityConfig } from '../src/types.js';

let tmpDir: string;
let baseConfig: SecurityConfig;

beforeEach(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mcp-security-test-'));
  baseConfig = {
    allowedPaths: [tmpDir],
    deniedPaths: [],
    deniedFiles: [],
    maxFileSizeKb: 500,
    allowedExtensions: ['*'],
  };
});

afterEach(() => {
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

function createTmpFile(name: string, content = 'test content'): string {
  const filePath = path.join(tmpDir, name);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
  return filePath;
}

describe('SecurityGuard', () => {
  it('debe bloquear .env aunque no esté en deniedFiles', () => {
    const filePath = createTmpFile('.env');
    const result = checkFile(filePath, baseConfig);
    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('HARDCODED_BLACKLIST');
  });

  it('debe bloquear archivos .pem por lista negra interna', () => {
    const filePath = createTmpFile('cert.pem');
    const result = checkFile(filePath, baseConfig);
    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('HARDCODED_BLACKLIST');
  });

  it('debe bloquear extensiones binarias (.exe, .png, .zip)', () => {
    const exeFile = createTmpFile('program.exe');
    const pngFile = createTmpFile('image.png');
    const zipFile = createTmpFile('archive.zip');

    expect(checkFile(exeFile, baseConfig).reason).toBe('BINARY_EXTENSION');
    expect(checkFile(pngFile, baseConfig).reason).toBe('BINARY_EXTENSION');
    expect(checkFile(zipFile, baseConfig).reason).toBe('BINARY_EXTENSION');
  });

  it('debe bloquear rutas en deniedPaths', () => {
    const secretDir = path.join(tmpDir, 'secrets');
    fs.mkdirSync(secretDir, { recursive: true });
    const filePath = createTmpFile('secrets/config.ts');

    const config: SecurityConfig = {
      ...baseConfig,
      deniedPaths: [secretDir],
    };

    const result = checkFile(filePath, config);
    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('DENIED_PATH');
  });

  it('debe bloquear rutas fuera de allowedPaths', () => {
    const otherDir = fs.mkdtempSync(path.join(os.tmpdir(), 'other-'));
    const filePath = path.join(otherDir, 'file.ts');
    fs.writeFileSync(filePath, 'content');

    const result = checkFile(filePath, baseConfig);
    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('NOT_IN_ALLOWED_PATH');

    fs.rmSync(otherDir, { recursive: true, force: true });
  });

  it('debe bloquear archivos que coincidan con deniedFiles wildcard', () => {
    const filePath = createTmpFile('my.secret.ts');

    const config: SecurityConfig = {
      ...baseConfig,
      deniedFiles: ['*.secret.*'],
    };

    const result = checkFile(filePath, config);
    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('DENIED_FILE_PATTERN');
  });

  it('debe bloquear extensiones no en allowedExtensions', () => {
    const filePath = createTmpFile('data.csv');

    const config: SecurityConfig = {
      ...baseConfig,
      allowedExtensions: ['.ts', '.js'],
    };

    const result = checkFile(filePath, config);
    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('EXTENSION_NOT_ALLOWED');
  });

  it('debe bloquear archivos mayores a maxFileSizeKb', () => {
    const filePath = createTmpFile('big.ts', 'x'.repeat(600 * 1024));

    const config: SecurityConfig = {
      ...baseConfig,
      maxFileSizeKb: 500,
    };

    const result = checkFile(filePath, config);
    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('FILE_TOO_LARGE');
  });

  it('debe bloquear archivos que coincidan con excludePatterns del módulo', () => {
    const filePath = createTmpFile('component.test.ts');
    const result = checkFile(filePath, baseConfig, ['*.test.ts']);
    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('MODULE_EXCLUDE_PATTERN');
  });

  it('debe PERMITIR un archivo .ts válido dentro de allowedPaths', () => {
    const filePath = createTmpFile('component.ts', 'export const x = 1;');
    const result = checkFile(filePath, baseConfig);
    expect(result.allowed).toBe(true);
    expect(result.reason).toBeUndefined();
  });

  it('debe bloquear id_rsa por lista negra interna', () => {
    const filePath = createTmpFile('id_rsa');
    const result = checkFile(filePath, baseConfig);
    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('HARDCODED_BLACKLIST');
  });

  it('debe bloquear archivos que coincidan con secret* por lista negra interna', () => {
    const filePath = createTmpFile('secrets.json');
    const result = checkFile(filePath, baseConfig);
    expect(result.allowed).toBe(false);
    expect(result.reason).toBe('HARDCODED_BLACKLIST');
  });
});
