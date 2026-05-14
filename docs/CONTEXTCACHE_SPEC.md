# contextcache.json Specification

Complete reference for all fields supported in `contextcache.json`.

## Root Object

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `modules` | `ModuleConfig[]` | `[]` | List of project modules to include |
| `globalInstructions` | `string` | — | Path to a global instructions file (relative to project root). Included at the top of every context bundle. |
| `maxTotalSizeKb` | `number` | `2048` | Maximum total bundle size in KB before truncation |
| `cache` | `CacheConfig` | see below | Cache behavior settings |
| `security` | `SecurityConfig` | see below | Security validation rules |

---

## `ModuleConfig`

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `string` | **required** | Display name for the module |
| `path` | `string` | **required** | Path to the module directory (relative to project root) |
| `includeInstructions` | `boolean` | `false` | If `true`, looks for `INSTRUCTIONS.md` or `copilot-instructions.md` in the module directory and prepends it before the module's code files |
| `excludePatterns` | `string[]` | `[]` | Glob patterns to exclude from this module. Supports `*` wildcard. |

### `excludePatterns` examples

```json
["*.test.ts", "*.spec.ts", "__mocks__/**", "fixtures/**"]
```

### Instruction file search order

When `includeInstructions: true`, the following files are searched in order:

1. `INSTRUCTIONS.md`
2. `copilot-instructions.md`

The first one found is used. If neither exists, no instructions are included.

---

## `CacheConfig`

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `maxEntries` | `number` | `5000` | Maximum number of files to keep in the LRU cache |
| `maxEntrySizeKb` | `number` | `1024` | Maximum size (in KB) of a single cache entry. Files larger than this are served but not cached. |

---

## `SecurityConfig`

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `allowedPaths` | `string[]` | `["./"]` | Only files under these paths are allowed. Use `["./"]` to allow all files under the project root. |
| `deniedPaths` | `string[]` | `[]` | Files under these paths are always denied. Takes priority over `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Filename patterns to deny. Supports `*` wildcard (e.g., `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Maximum file size in KB. Larger files are denied. |
| `allowedExtensions` | `string[]` | `["*"]` | File extensions to allow. Use `["*"]` for all text extensions. Example: `[".ts", ".js", ".json"]` |

### Security pipeline execution order

The following checks are applied in strict order. The first denial wins:

1. **HARDCODED_BLACKLIST** — Internal immutable blocklist (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). Cannot be disabled by config.
2. **BINARY_EXTENSION** — Binary file extensions (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — File is under a `deniedPaths` entry.
4. **NOT_IN_ALLOWED_PATH** — File is not under any `allowedPaths` entry.
5. **DENIED_FILE_PATTERN** — Filename matches a `deniedFiles` pattern.
6. **EXTENSION_NOT_ALLOWED** — Extension not in `allowedExtensions` (when not `["*"]`).
7. **FILE_TOO_LARGE** — File exceeds `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — File matches a module-level `excludePatterns` entry.

### Hardcoded blacklist

These patterns are **always** blocked regardless of configuration:

```
.env          .env.*        credentials.json    *.pem
id_rsa        id_ed25519    *.key               private.key
secret*       secrets.json  token*              service-account.json
.npmrc        .pypirc
```

---

## Complete Example

```json
{
  "modules": [
    {
      "name": "core",
      "path": "src/core",
      "includeInstructions": true,
      "excludePatterns": ["*.test.ts", "*.spec.ts", "__mocks__/**"]
    },
    {
      "name": "api",
      "path": "src/api",
      "includeInstructions": false,
      "excludePatterns": ["*.test.ts"]
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
    "deniedPaths": [
      "./node_modules",
      "./dist",
      "./secrets",
      "./.terraform",
      "./.git"
    ],
    "deniedFiles": [".env", "credentials.json", "*.pem", "*.local.ts"],
    "maxFileSizeKb": 500,
    "allowedExtensions": [
      ".ts", ".tsx", ".js", ".jsx",
      ".json", ".md", ".yaml", ".yml",
      ".css", ".html", ".sh"
    ]
  }
}
```

---

## Bundle Output Format

### File block

```
BUNDLE_START: <sha256-hex-64-chars>
relative/path/to/file.ts
<complete file content>
BUNDLE_END: relative/path/to/file.ts
```

### Truncation message (when size limit exceeded)

```
BUNDLE_TRUNCATED: Límite de tamaño excedido.
Tamaño configurado: 2048 KB
Tamaño real del contexto completo: 4096 KB
Archivos incluidos: 42 de 78
Archivos omitidos (orden alfabético): src/a.ts, src/b.ts, ...

Para obtener los archivos omitidos, usa get_project_context con las rutas específicas.
```
