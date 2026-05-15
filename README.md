# mcp-context-cache

MCP server for AI agent context caching. Efficiently loads, caches, and delivers project file context to AI agents using the Model Context Protocol (MCP).

> **Without this server:** AI agents call `read_file` once per file — 30 files = 30 tool calls.  
> **With this server:** one call to `get_context_from_config` returns all files bundled and cached.

## Features

- **LRU caching** — Files are hashed (SHA-256) and cached in memory. Unchanged files are never re-read from disk.
- **Security pipeline** — 8-step validation prevents loading sensitive files (`.env`, `*.pem`, credentials, binaries, etc.).
- **3 MCP tools** — Flexible context loading: by file list, directory, or config file.
- **Smart truncation** — Respects configurable size limits and reports omitted files.
- **Alphabetical ordering** — Deterministic output for stable AI agent responses.

---

## Installation

### Global Installation (Recommended)

```bash
npm install -g mcp-context-cache
```

Or with pnpm:
```bash
pnpm add -g mcp-context-cache
```

Verify installation:
```bash
mcp-context-cache --version
```

### Run without installing

```bash
npx mcp-context-cache --init
```

---

## Setup Guide

### Step 1 — Register the MCP server in your IDE

#### VS Code

**Option A — Global (all workspaces):**  
Edit `%APPDATA%\Code\User\mcp.json` on Windows or `~/.config/Code/User/mcp.json` on macOS/Linux:

```json
{
  "servers": {
    "mcp-context-cache": {
      "type": "stdio",
      "command": "mcp-context-cache"
    }
  }
}
```

**Option B — Per workspace:**  
Create `.vscode/mcp.json` at the project root:

```json
{
  "servers": {
    "mcp-context-cache": {
      "type": "stdio",
      "command": "mcp-context-cache"
    }
  }
}
```

#### JetBrains (IntelliJ, WebStorm, PyCharm, etc.)

Create `.mcp.json` at the project root:

```json
{
  "mcpServers": {
    "mcp-context-cache": {
      "command": "mcp-context-cache"
    }
  }
}
```

> JetBrains AI Assistant picks up `.mcp.json` automatically from the project root since version 2024.3.

---

### Step 2 — Add agent instructions to prefer MCP tools

AI agents have built-in file-reading tools and will use them by default. You must explicitly instruct them to prefer the MCP tools instead.

#### VS Code — Global instructions (applies to ALL workspaces)

Create the file `%APPDATA%\Code\User\prompts\mcp-context-cache.instructions.md` on Windows  
or `~/.config/Code/User/prompts/mcp-context-cache.instructions.md` on macOS/Linux:

```markdown
---
applyTo: "**"
---

# Context Loading — mcp-context-cache

The MCP server `mcp-context-cache` is available globally.

## PROHIBITED tools for reading project files

**NEVER call these built-in tools to read or explore project source files:**

- `read_file`
- `list_dir`
- `file_search`
- `semantic_search`
- `grep_search`

Using any of the above to read project source files when `mcp-context-cache` tools are available is **not allowed**.
They may only be used if all MCP tools fail with an error.

## MANDATORY procedure

**Before making any other tool call at the start of a task:**

1. Check whether the workspace contains a `contextcache.json` file.
2. If it exists → call `get_context_from_config` with `{ "projectRoot": "<absolute-workspace-path>" }` immediately.
3. If it does not exist and you need directory contents → call `get_directory_context`.
4. If you need specific files by path → call `get_project_context` with a `paths` array.
5. Only fall back to `read_file` if ALL three MCP tools return an error.

## Tool reference

- `get_context_from_config`  →  `{ "projectRoot": "<absolute-path>" }`
- `get_project_context`      →  `{ "paths": ["rel/path.ts", ...], "projectRoot": "<absolute-path>" }`
- `get_directory_context`    →  `{ "rootPath": "<absolute-path-to-dir>" }`

## Handling BUNDLE_TRUNCATED

If the response contains `BUNDLE_TRUNCATED`, call `get_project_context` with the listed omitted file paths.
Do NOT switch to `read_file` to recover truncated files.
```

> The `applyTo: "**"` frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

#### VS Code — Per-project instructions

Create `.github/copilot-instructions.md` at the project root:

```markdown
## PROHIBITED — do not use these tools to read project files

**NEVER call `read_file`, `list_dir`, `file_search`, `semantic_search`, or `grep_search` to read project source files.**
Only fall back to them if all MCP tools return an error.

## MANDATORY first step

This project has a `contextcache.json`. Call `get_context_from_config` before any other tool:

```json
{ "projectRoot": "<absolute-path-to-this-repo>" }
```

For module-level exploration use `get_directory_context`.
For specific files use `get_project_context` with a `paths` array.
```

#### JetBrains — Global instructions (GitHub Copilot plugin)

The GitHub Copilot plugin for JetBrains reads `.github/copilot-instructions.md` **per project** — there is no global instructions file equivalent to VS Code. For each project you want covered, add the same `.github/copilot-instructions.md` block shown above.

To avoid repeating yourself, you can create a shared snippet and copy it via your project template or a `cookiecutter`/`degit` setup.

#### JetBrains — Global system prompt (JetBrains AI Assistant)

Go to **Settings → Tools → AI Assistant → System prompt** and add:

```
When working in any project that has a contextcache.json file, call the MCP tool
get_context_from_config with the project root path before reading any individual files.
Prefer get_directory_context over reading files one by one, and get_project_context
over multiple read_file calls.
```

---

### Step 3 — Initialize your project

Run in the project root to generate a `contextcache.json`:

```bash
npx @jdug-jadodev/mcp-context-cache --init
```

Or create `contextcache.json` manually:

```json
{
  "modules": [
    {
      "name": "src",
      "path": "src",
      "includeInstructions": true,
      "excludePatterns": ["**/*.test.ts", "**/*.spec.ts", "**/__mocks__/**"]
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
    "deniedPaths": ["./node_modules", "./dist", "./secrets", "./.git"],
    "deniedFiles": [".env", "credentials.json", "*.pem"],
    "maxFileSizeKb": 500,
    "allowedExtensions": [".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".yaml", ".yml"]
  }
}
```

| Field | Description |
|---|---|
| `modules` | List of directories to bundle |
| `modules[].path` | Path relative to project root |
| `modules[].includeInstructions` | If `true`, prepends content of `globalInstructions` |
| `modules[].excludePatterns` | Glob patterns to skip |
| `globalInstructions` | Path to a Markdown file included at the top of bundles when `includeInstructions: true` |
| `maxTotalSizeKb` | Max total bundle size in KB |
| `cache.maxEntries` | Max number of files in the LRU cache |
| `cache.maxEntrySizeKb` | Max individual file size to cache |
| `security.allowedPaths` | Paths the server is allowed to read from |
| `security.deniedPaths` | Paths always blocked |
| `security.deniedFiles` | Filename patterns always blocked |
| `security.maxFileSizeKb` | Max file size to serve |
| `security.allowedExtensions` | Whitelist of file extensions |

---

## MCP Tools

### `get_context_from_config`

Loads the full project context defined in `contextcache.json`. **Use this first.**

```json
{ "projectRoot": "/absolute/path/to/project" }
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `projectRoot` | string | yes | Directory containing `contextcache.json` |
| `configPath` | string | no | Explicit path to `contextcache.json` |

### `get_directory_context`

Recursively loads all files from a directory.

```json
{ "rootPath": "/absolute/path/to/src/auth", "excludePatterns": ["*.test.ts"] }
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `rootPath` | string | yes | Directory to scan |
| `configPath` | string | no | Path to `contextcache.json` for security config |
| `excludePatterns` | string[] | no | Additional glob patterns to exclude |

### `get_project_context`

Loads a specific list of files.

```json
{ "paths": ["src/auth/login.ts", "src/types.ts"], "projectRoot": "/absolute/path" }
```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `paths` | string[] | yes | File paths to load |
| `projectRoot` | string | no | Root for resolving relative paths |
| `configPath` | string | no | Path to `contextcache.json` |

---

## Output Format

Each file in a bundle is wrapped with BUNDLE markers:

```
BUNDLE_START: <sha256-fingerprint>
path/to/file.ts
<complete file content>
BUNDLE_END: path/to/file.ts
```

Files are always sorted alphabetically for deterministic output.

### Handling `BUNDLE_TRUNCATED`

When the total size exceeds `maxTotalSizeKb`, the response includes:

```
BUNDLE_TRUNCATED: size limit exceeded.
Configured limit: 2048 KB
Total size: 3100 KB
Omitted files:
  src/large-module/file-a.ts
  src/large-module/file-b.ts
```

Call `get_project_context` with the omitted paths to retrieve them in a follow-up call.

---

## Security

The following are **always blocked** regardless of `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary extensions (`.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.)

Paths outside `allowedPaths` are rejected. The server never follows symlinks outside the allowed tree.

---

## Development

```bash
pnpm install
pnpm build        # Compile TypeScript → dist/
pnpm dev          # Run with tsx (no build step)
pnpm test         # Vitest test suite
```

---

## License

MIT
