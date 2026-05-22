
import type { BundleResult } from '../../types.js';

export interface FormattedBlock {
  relativePath: string;
  formattedBlock: string; 
}

export function formatFileBlock(
  relativePath: string,
  fingerprint: string,
  content: string,
): string {
  return [
    `BUNDLE_START: ${fingerprint}`,
    relativePath,
    content,
    `BUNDLE_END: ${relativePath}`,
    '',
  ].join('\n');
}

export function formatBundleResult(
  blocks: FormattedBlock[],
  maxTotalSizeKb: number,
): BundleResult {
  
  const sorted = [...blocks].sort((a, b) => a.relativePath.localeCompare(b.relativePath));

  const maxTotalBytes = maxTotalSizeKb * 1024;
  const includedBlocks: string[] = [];
  const omittedFiles: string[] = [];
  let totalBytes = 0;
  let truncated = false;

  for (const block of sorted) {
    const blockBytes = Buffer.byteLength(block.formattedBlock, 'utf8');

    if (totalBytes + blockBytes > maxTotalBytes) {
      omittedFiles.push(block.relativePath);
      truncated = true;
    } else {
      includedBlocks.push(block.formattedBlock);
      totalBytes += blockBytes;
    }
  }

  let content = includedBlocks.join('');

  if (truncated) {
    const realSizeKb = Math.ceil(
      sorted.reduce(
        (acc, b) => acc + Buffer.byteLength(b.formattedBlock, 'utf8'),
        0,
      ) / 1024,
    );
    const truncatedMessage = [
      `BUNDLE_TRUNCATED: Límite de tamaño excedido.`,
      `Tamaño configurado: ${maxTotalSizeKb} KB`,
      `Tamaño real del contexto completo: ${realSizeKb} KB`,
      `Archivos incluidos: ${includedBlocks.length} de ${sorted.length}`,
      `Archivos omitidos (orden alfabético): ${omittedFiles.join(', ')}`,
      ``,
      `Para obtener los archivos omitidos, usa get_project_context con las rutas específicas.`,
    ].join('\n');
    content = content + truncatedMessage;
  }

  return {
    content,
    filesIncluded: includedBlocks.length,
    filesOmitted: omittedFiles.length,
    truncated,
    omittedFiles,
  };
}
