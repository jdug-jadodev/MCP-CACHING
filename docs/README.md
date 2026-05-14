# mcp-context-cache

MCP server for AI agent context caching. Efficiently loads, caches, and delivers project file context to AI agents using the Model Context Protocol (MCP).

## Features

- **LRU caching** — Files are hashed (SHA-256) and cached in memory. Unchanged files are never re-read from disk.
- **Security pipeline** — 8-step validation prevents loading sensitive files (`.env`, `*.pem`, credentials, binaries, etc.).
- **3 MCP tools** — Flexible context loading: by file list, directory, or config file.
- **Smart truncation** — Respects configurable size limits and reports omitted files.
- **Alphabetical ordering** — Deterministic output for stable AI agent responses.

## Installation

```bash
# npx (no install needed)
npx @tu-org/mcp-context-cache --init

# or global install
npm install -g @tu-org/mcp-context-cache
```

## Quick Start

Run `--init` in your project root to generate `contextcache.json` and get IDE configuration snippets:

```bash
npx @tu-org/mcp-context-cache --init
```

This creates `contextcache.json` and prints configuration snippets for VS Code, GitHub Copilot, and JetBrains.

## Configuration

### `contextcache.json`

```json
{
  "modules": [
    {
      "name": "my-module",
      "path": "src/my-module",
      "includeInstructions": true,
      "excludePatterns": ["*.test.ts", "*.spec.ts", "__mocks__/**"]
    }
  ],
  "globalInstructions": ".github/copilot-instructions.md",
  "maxTotalSizeKb": 2048,
  "cache": {
    "maxEntries": 5000,
    "maxEntrySizeKb": 1024
  },
  "security": {
    "allowedPaths": ["./"],
    "deniedPaths": ["./node_modules", "./secrets", "./.terraform"],
    "deniedFiles": [".env", "credentials.json", "*.pem"],
    "maxFileSizeKb": 500,
    "allowedExtensions": [".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".yaml", ".yml"]
  }
}
```

### VS Code (`.vscode/mcp.json`)

```json
{
  "servers": {
    "mcp-context-cache": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@tu-org/mcp-context-cache"]
    }
  }
}
```

## MCP Tools

### `get_project_context`

Load specific files by path.

**Parameters:**
- `paths` (string[]) — File paths to load (absolute or relative)
- `projectRoot` (string, optional) — Root for resolving relative paths
- `configPath` (string, optional) — Path to `contextcache.json`

### `get_directory_context`

Recursively load all files from a directory.

**Parameters:**
- `rootPath` (string) — Directory to scan
- `configPath` (string, optional) — Path to `contextcache.json`
- `excludePatterns` (string[], optional) — Additional patterns to exclude

### `get_context_from_config`

Load full project context based on `contextcache.json`.

**Parameters:**
- `projectRoot` (string) — Directory containing `contextcache.json`
- `configPath` (string, optional) — Explicit path to `contextcache.json`

## Output Format

Each file is wrapped in BUNDLE markers:

```
BUNDLE_START: <sha256-fingerprint>
path/to/file.ts
<file content>
BUNDLE_END: path/to/file.ts
```

When the size limit is exceeded:

```
BUNDLE_TRUNCATED: Límite de tamaño excedido.
Tamaño configurado: 2048 KB
...
```

## Security

The following files are **always** blocked regardless of configuration:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary file extensions (`.exe`, `.dll`, `.png`, `.zip`, etc.)

## Development

```bash
pnpm install
pnpm build
pnpm test
pnpm dev  # run with tsx (no build needed)
```

## License

MIT
