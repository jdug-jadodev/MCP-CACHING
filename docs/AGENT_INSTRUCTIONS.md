# Agent Instructions — mcp-context-cache

This document explains how AI agents (GitHub Copilot, Cline, Cody, etc.) should use the `mcp-context-cache` MCP server.

## Available Tools

### `get_project_context`

**When to use:** When you need specific files loaded into context. Best for targeted file loading when you know exactly which files are relevant.

```json
{
  "paths": ["src/auth/login.ts", "src/auth/types.ts", "src/middleware/auth.ts"],
  "projectRoot": "/path/to/project"
}
```

### `get_directory_context`

**When to use:** When you need all files from a directory (e.g., a feature module). Best for exploring or understanding a complete module.

```json
{
  "rootPath": "/path/to/project/src/auth",
  "excludePatterns": ["*.test.ts", "*.spec.ts"]
}
```

### `get_context_from_config`

**When to use:** When the project has a `contextcache.json` and you want the full curated project context. Best at the start of a session to load everything the project owner deemed relevant.

```json
{
  "projectRoot": "/path/to/project"
}
```

## IDE Configuration

### VS Code — `.vscode/mcp.json`

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

### GitHub Copilot — `.github/copilot-instructions.md`

Add this to your Copilot instructions file to guide the agent:

```markdown
## Context Loading

Use the `mcp-context-cache` MCP tools to load project files:

- `get_context_from_config` with `projectRoot: "<absolute-path>"` to load the full project context at session start
- `get_project_context` with specific `paths` when you need targeted files
- `get_directory_context` with `rootPath` to explore a module

When you see `BUNDLE_TRUNCATED`, use `get_project_context` with the listed omitted files to fetch them.
```

### JetBrains — `mcp.json`

```json
{
  "servers": [
    {
      "name": "mcp-context-cache",
      "command": "npx",
      "args": ["-y", "@tu-org/mcp-context-cache"],
      "transport": "stdio"
    }
  ]
}
```

## Handling `BUNDLE_TRUNCATED`

When a response contains `BUNDLE_TRUNCATED`, the context was too large to fit in the configured limit. The message includes:

- The configured size limit
- The actual total size
- The list of omitted files in alphabetical order

**How to handle:** Use `get_project_context` with the omitted file paths to load them in a subsequent call:

```json
{
  "paths": ["path/to/omitted/file1.ts", "path/to/omitted/file2.ts"],
  "projectRoot": "/path/to/project"
}
```

## Output Format Reference

```
BUNDLE_START: <sha256-hex-fingerprint>
relative/path/to/file.ts
<complete file content>
BUNDLE_END: relative/path/to/file.ts

BUNDLE_START: <sha256-hex-fingerprint>
relative/path/to/file2.ts
...
BUNDLE_END: relative/path/to/file2.ts
```

Files are always sorted alphabetically by relative path for deterministic output.

## Caching Behavior

- Files are identified by their SHA-256 hash
- If a file hasn't changed, the cached block is reused (no disk read)
- The cache is in-memory and per-server-process (cleared on restart)
- Large files exceeding `maxEntrySizeKb` are never cached (still served, just not cached)
