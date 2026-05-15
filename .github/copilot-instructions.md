# Copilot Instructions — mcp-context-cache

This MCP server provides intelligent context caching tools for AI agents working with large codebases.

## PROHIBITED — do not use these tools to read project files

**NEVER call `read_file`, `list_dir`, `file_search`, `semantic_search`, or `grep_search` to read project source files.**
These built-in tools are prohibited when `mcp-context-cache` is available.
Only fall back to them if all MCP tools return an error.

## MANDATORY first step

This project has a `contextcache.json`. **Call `get_context_from_config` before any other tool:**

```json
{ "projectRoot": "<absolute-path-to-this-repo>" }
```

For module-level exploration use `get_directory_context`.
For specific files use `get_project_context` with a `paths` array.

## Project Overview

**mcp-context-cache** is a Model Context Protocol (MCP) server. Agents can use its three tools to load project context efficiently:

- `get_project_context` — Load specific files by path list
- `get_directory_context` — Load all files under a directory
- `get_context_from_config` — Load curated context from `contextcache.json`

## Development Workflow

```bash
pnpm install
pnpm build        # Compile TypeScript → dist/
pnpm dev          # Run with tsx (no build step)
pnpm test         # Vitest test suite
```

## Project Structure

- **src/tools/** — MCP tool handlers (`get-project-context.ts`, etc.)
- **src/config/** — `contextcache.json` parsing
- **src/security/** — Path validation / security guard
- **src/formatter/** — Bundle builder and formatter
- **src/cache/** — LRU cache
- **src/logger/** — Structured logger
- **tests/** — Vitest test suite
- **docs/** — `AGENT_INSTRUCTIONS.md`, `CONTEXTCACHE_SPEC.md`

## Code Patterns

- Use **Zod** for schema validation (see `types.ts`)
- Use **SecurityGuard** for all file path validation
- Use **LRU cache** for performance-critical file reads
- Add tests alongside every feature change

## Security

- Always validate paths through `SecurityGuard` before reading files
- Never expose files outside `allowedPaths` from `contextcache.json`
- Log security-relevant operations through the logger
