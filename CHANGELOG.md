# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-05-14

### Added
- Initial release of mcp-context-cache
- Three MCP tools for context loading:
  - `get_project_context` - Load specific files into context
  - `get_directory_context` - Recursively load files from directories
  - `get_context_from_config` - Load curated context from `contextcache.json`
- LRU in-memory caching with SHA-256 fingerprinting
- 8-step security validation pipeline with hardcoded blacklist
- Smart truncation with reporting of omitted files
- Alphabetical ordering for deterministic output
- `--init` command for generating project configuration
- Comprehensive test suite (43 tests, 100% passing)
- Full documentation including Agent Instructions and API specification
- GitHub Actions workflow for automated publishing

### Technical Details
- Built with TypeScript, Zod for validation, fast-glob for file discovery
- Supports CommonJS and ES modules
- Strict type checking enabled
- ESLint and Prettier integration
- Vitest for testing
- Works with Node.js 18+

### Security Features
- Hardcoded blacklist for sensitive files (`.env`, `*.pem`, credentials, etc.)
- Path validation pipeline
- Binary file extension filtering
- File size limits
- Configurable security rules per project

### Caching
- LRU cache with configurable entry limits
- Per-file size limits for cache entries
- Automatic eviction of least-recently-used entries
- Cache key based on absolute file path
- Fingerprint verification using SHA-256
