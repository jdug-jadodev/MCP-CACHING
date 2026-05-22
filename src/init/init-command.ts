
import * as fs from 'node:fs';
import * as path from 'node:path';
import type { ProjectConfig } from '../types.js';

const EXAMPLE_CONFIG: ProjectConfig = {
  modules: [
    {
      name: 'my-module',
      path: 'src/my-module',
      includeInstructions: true,
      excludePatterns: ['*.test.ts', '*.spec.ts', '__mocks__/**'],
    },
  ],
  globalInstructions: '.github/copilot-instructions.md',
  maxTotalSizeKb: 2048,
  cache: { maxEntries: 5000, maxEntrySizeKb: 1024 },
  security: {
    allowedPaths: ['./'],
    deniedPaths: ['./node_modules', './secrets', './.terraform'],
    deniedFiles: ['.env', 'credentials.json', '*.pem'],
    maxFileSizeKb: 500,
    allowedExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.yaml', '.yml'],
  },
};

const VSCODE_MCP_SNIPPET = `{
  "servers": {
    "mcp-context-cache": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@tu-org/mcp-context-cache"]
    }
  }
}`;

const COPILOT_INSTRUCTIONS_SNIPPET = `## Context Cache MCP Tools

This project uses the \`mcp-context-cache\` MCP server. Available tools:

- **\`get_project_context\`**: Load specific files into context. Use when you need particular files.
  - \`paths\`: array of file paths to load
  - \`projectRoot\`: (optional) project root directory
  - \`configPath\`: (optional) path to contextcache.json

- **\`get_directory_context\`**: Load all files from a directory recursively.
  - \`rootPath\`: directory to scan
  - \`configPath\`: (optional) path to contextcache.json
  - \`excludePatterns\`: (optional) additional patterns to exclude

- **\`get_context_from_config\`**: Load full project context based on contextcache.json.
  - \`projectRoot\`: directory containing contextcache.json
  - \`configPath\`: (optional) explicit path to contextcache.json

When you see \`BUNDLE_TRUNCATED\`, use \`get_project_context\` with the listed omitted file paths to
fetch the remaining files.`;

const JETBRAINS_MCP_SNIPPET = `{
  "servers": [
    {
      "name": "mcp-context-cache",
      "command": "npx",
      "args": ["-y", "@tu-org/mcp-context-cache"],
      "transport": "stdio"
    }
  ]
}`;

export async function runInitCommand(): Promise<void> {
  const configPath = path.join(process.cwd(), 'contextcache.json');

  if (fs.existsSync(configPath)) {
    process.stdout.write(
      `⚠  contextcache.json already exists at: ${configPath}\n` +
        `   Delete it first if you want to regenerate.\n`,
    );
    process.exit(1);
  }

  fs.writeFileSync(configPath, JSON.stringify(EXAMPLE_CONFIG, null, 2) + '\n', 'utf8');

  process.stdout.write(
    [
      ``,
      `✅ Created contextcache.json at: ${configPath}`,
      ``,
      `Edit the file to configure your modules, security rules, and cache settings.`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  VS Code — .vscode/mcp.json`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      VSCODE_MCP_SNIPPET,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  GitHub Copilot — .github/copilot-instructions.md`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      COPILOT_INSTRUCTIONS_SNIPPET,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `  JetBrains — mcp.json`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      JETBRAINS_MCP_SNIPPET,
      ``,
    ].join('\n'),
  );
}
