// src/tools/get-context-from-config.ts
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';
import fg from 'fast-glob';
import type { BundleResult, ModuleConfig } from '../types.js';
import { LRUCache } from '../cache/lru-cache.js';
import { Logger } from '../logger/logger.js';
import { checkFile, mergeSecurityConfig } from '../security/security-guard.js';
import { formatFileBlock, formatBundleResult, type FormattedBlock } from '../formatter/bundle-formatter.js';
import { loadConfig, resolveSecurityConfig, resolveMaxTotalSizeKb } from '../config/config-loader.js';

export interface GetContextFromConfigArgs {
  projectRoot: string;
  configPath?: string;
}

const INSTRUCTION_FILES = ['INSTRUCTIONS.md', 'copilot-instructions.md'];

async function findInstructionFile(modulePath: string): Promise<string | null> {
  for (const filename of INSTRUCTION_FILES) {
    const candidate = path.join(modulePath, filename);
    try {
      await fs.promises.access(candidate, fs.constants.R_OK);
      return candidate;
    } catch {
      // File doesn't exist or isn't readable, try next
    }
  }
  return null;
}

async function processFileToBlock(
  absolutePath: string,
  relativePath: string,
  cache: LRUCache,
  logger: Logger,
): Promise<FormattedBlock | null> {
  let fileContent: string;
  try {
    fileContent = fs.readFileSync(absolutePath, 'utf8');
  } catch (err) {
    logger.warn('Failed to read file', { file: absolutePath, error: String(err) });
    return null;
  }

  const fingerprint = crypto.createHash('sha256').update(fileContent).digest('hex');
  const cached = cache.get(absolutePath);

  if (cached && cached.fingerprint === fingerprint) {
    logger.debug('Cache hit', { file: relativePath });
    return { relativePath, formattedBlock: cached.block };
  }

  const formattedBlock = formatFileBlock(relativePath, fingerprint, fileContent);
  cache.set(absolutePath, { fingerprint, block: formattedBlock });
  return { relativePath, formattedBlock };
}

export async function getContextFromConfig(
  args: GetContextFromConfigArgs,
  cache: LRUCache,
  logger: Logger,
): Promise<BundleResult> {
  const projectRoot = path.resolve(args.projectRoot);
  const config = loadConfig(projectRoot, args.configPath);
  const securityConfig = resolveSecurityConfig(config);
  const maxTotalSizeKb = resolveMaxTotalSizeKb(config);

  const allBlocks: FormattedBlock[] = [];
  let totalOmitted = 0;

  // Process global instructions first
  if (config.globalInstructions) {
    const instructionsPath = path.resolve(projectRoot, config.globalInstructions);
    try {
      const content = fs.readFileSync(instructionsPath, 'utf8');
      const relativePath = path.relative(projectRoot, instructionsPath).replace(/\\/g, '/');
      const fingerprint = crypto.createHash('sha256').update(content).digest('hex');
      const block = formatFileBlock(relativePath, fingerprint, content);
      // Prepend global instructions with special header
      const headerBlock = `=== GLOBAL INSTRUCTIONS ===\n${block}=== END GLOBAL INSTRUCTIONS ===\n\n`;
      allBlocks.push({ relativePath: '00_global_instructions', formattedBlock: headerBlock });
    } catch (err) {
      logger.warn('Failed to read global instructions file', {
        file: instructionsPath,
        error: String(err),
      });
    }
  }

  // Process each module
  for (const module of config.modules ?? []) {
    const modulePath = path.resolve(projectRoot, module.path);
    const moduleBlocks: FormattedBlock[] = [];

    // Include module instructions if requested
    if (module.includeInstructions) {
      const instructionFile = await findInstructionFile(modulePath);
      if (instructionFile) {
        const relativePath = path
          .relative(projectRoot, instructionFile)
          .replace(/\\/g, '/');
        const block = await processFileToBlock(instructionFile, relativePath, cache, logger);
        if (block) {
          // Prepend with module instructions header
          const headerBlock = `=== MODULE INSTRUCTIONS: ${module.name} ===\n${block.formattedBlock}=== END MODULE INSTRUCTIONS: ${module.name} ===\n\n`;
          moduleBlocks.push({ relativePath: `00_instructions_${module.name}`, formattedBlock: headerBlock });
        }
      }
    }

    // List files in the module directory
    let files: string[];
    try {
      files = await fg('**/*', {
        cwd: modulePath,
        absolute: true,
        onlyFiles: true,
        followSymbolicLinks: false,
        dot: true,
        ignore: ['**/node_modules/**', '**/.git/**'],
      });
    } catch (err) {
      logger.warn('Failed to list module directory', { module: module.name, error: String(err) });
      continue;
    }

    for (const absolutePath of files) {
      const relativePath = path.relative(projectRoot, absolutePath).replace(/\\/g, '/');

      const secCheck = checkFile(absolutePath, securityConfig, module.excludePatterns);
      if (!secCheck.allowed) {
        logger.debug('File denied by security guard', {
          file: relativePath,
          reason: secCheck.reason,
          module: module.name,
        });
        totalOmitted++;
        continue;
      }

      const block = await processFileToBlock(absolutePath, relativePath, cache, logger);
      if (block) {
        moduleBlocks.push(block);
      } else {
        totalOmitted++;
      }
    }

    // Sort module blocks alphabetically (instruction blocks have 00_ prefix to appear first)
    moduleBlocks.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
    allBlocks.push(...moduleBlocks);
  }

  const result = formatBundleResult(allBlocks, maxTotalSizeKb);
  result.filesOmitted += totalOmitted;

  return result;
}

export function getContextFromConfigMcpResponse(result: BundleResult): {
  content: Array<{ type: 'text'; text: string }>;
} {
  return {
    content: [{ type: 'text', text: result.content }],
  };
}
