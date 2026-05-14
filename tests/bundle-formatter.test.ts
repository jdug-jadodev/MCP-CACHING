// tests/bundle-formatter.test.ts
import { describe, it, expect } from 'vitest';
import { formatFileBlock, formatBundleResult, type FormattedBlock } from '../src/formatter/bundle-formatter.js';

function makeBlock(relativePath: string, fingerprint = 'abc123', content = 'file content'): FormattedBlock {
  return {
    relativePath,
    formattedBlock: formatFileBlock(relativePath, fingerprint, content),
  };
}

describe('BundleFormatter', () => {
  it('produce orden alfabético estricto por ruta relativa', () => {
    const blocks: FormattedBlock[] = [
      makeBlock('z/zebra.ts'),
      makeBlock('a/alpha.ts'),
      makeBlock('m/middle.ts'),
    ];

    const result = formatBundleResult(blocks, 2048);
    const alphaIdx = result.content.indexOf('a/alpha.ts');
    const middleIdx = result.content.indexOf('m/middle.ts');
    const zebraIdx = result.content.indexOf('z/zebra.ts');

    expect(alphaIdx).toBeLessThan(middleIdx);
    expect(middleIdx).toBeLessThan(zebraIdx);
  });

  it('el bloque es idéntico entre llamadas sin cambios en archivos', () => {
    const blocks: FormattedBlock[] = [makeBlock('src/main.ts', 'fp1', 'export default 1;')];
    const result1 = formatBundleResult(blocks, 2048);
    const result2 = formatBundleResult(blocks, 2048);
    expect(result1.content).toBe(result2.content);
  });

  it('aplica truncado al superar maxTotalSizeKb', () => {
    const largeContent = 'x'.repeat(500 * 1024); // 500 KB per block
    const blocks: FormattedBlock[] = [
      { relativePath: 'a.ts', formattedBlock: formatFileBlock('a.ts', 'fp1', largeContent) },
      { relativePath: 'b.ts', formattedBlock: formatFileBlock('b.ts', 'fp2', largeContent) },
      { relativePath: 'c.ts', formattedBlock: formatFileBlock('c.ts', 'fp3', largeContent) },
    ];

    const result = formatBundleResult(blocks, 1024); // 1 MB limit
    expect(result.truncated).toBe(true);
    expect(result.filesOmitted).toBeGreaterThan(0);
  });

  it('el mensaje BUNDLE_TRUNCATED lista archivos omitidos', () => {
    const largeContent = 'x'.repeat(600 * 1024); // 600 KB
    const blocks: FormattedBlock[] = [
      { relativePath: 'a.ts', formattedBlock: formatFileBlock('a.ts', 'fp1', largeContent) },
      { relativePath: 'b.ts', formattedBlock: formatFileBlock('b.ts', 'fp2', largeContent) },
    ];

    const result = formatBundleResult(blocks, 700); // 700 KB limit
    expect(result.content).toContain('BUNDLE_TRUNCATED');
    expect(result.content).toContain('b.ts');
    expect(result.omittedFiles).toContain('b.ts');
  });

  it('cada archivo está envuelto en BUNDLE_START/BUNDLE_END con su fingerprint', () => {
    const block = formatFileBlock('src/util.ts', 'deadbeef', 'export const x = 1;');
    expect(block).toContain('BUNDLE_START: deadbeef');
    expect(block).toContain('src/util.ts');
    expect(block).toContain('export const x = 1;');
    expect(block).toContain('BUNDLE_END: src/util.ts');
  });

  it('retorna resultado vacío para lista vacía de bloques', () => {
    const result = formatBundleResult([], 2048);
    expect(result.content).toBe('');
    expect(result.filesIncluded).toBe(0);
    expect(result.filesOmitted).toBe(0);
    expect(result.truncated).toBe(false);
  });
});
