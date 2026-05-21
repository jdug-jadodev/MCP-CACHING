# 📊 Registro de Cambios con Estadísticas
**Iniciado:** 21/5/2026, 3:56:14 p. m.
**Proyecto:** C:\Users\Usuario\Documents\mcp-context-cache
**Último commit:** 89ab099 - chore(release): v1.1.5 (2 seconds ago)
**Estado:** Monitoreando nuevos cambios


## 🕐 21/05/2026, 15:59:14

### 📊 Resumen
- **Total archivos:** 3
- **📝 Nuevos:** 3
- **✏️ Modificados:** 0
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +0
- **Líneas eliminadas:** -0
- **Balance neto:** 0 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (3)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
contextcache.json
scripts/daemon-test.mjs
```

</details>

---

## 🕐 21/05/2026, 16:01:10

### 📊 Resumen
- **Total archivos:** 4
- **📝 Nuevos:** 3
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +58
- **Líneas eliminadas:** -2
- **Balance neto:** +56 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +58 | -2 | +56 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (4)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+58 líneas)**

```
Install and run using pnpm (recommended):

pnpm add -g mcp-context-cache
# Run the init command to generate a configuration file in the current project

# Or run the server once without installing globally
pnpm dlx mcp-context-cache
```

If you prefer to install the package into your project (local dev or CI):

```bash
pnpm add -D mcp-context-cache
# then run with: pnpm dlx mcp-context-cache --init
If you need to run the published CLI but not install it, `pnpm dlx mcp-context-cache` will execute the package directly.

## Configuration (contextcache.json)

The server looks for a `contextcache.json` file in the project root by default. You can also pass an explicit path to tools that accept `configPath`.

Example `contextcache.json`:

```json
{
	"modules": [
		{
			"name": "src",
			"path": "src",
			"includeInstructions": true,
			"excludePatterns": ["**/*.test.ts"]
		}
	],
	"globalInstructions": "Summarize the project and important files for an AI agent.",
	"maxTotalSizeKb": 2048,
	"cache": {
		"maxEntries": 1000,
		"maxEntrySizeKb": 200
	},
	"security": {
		"allowedPaths": ["src"],
		"deniedPaths": ["node_modules"],
		"deniedFiles": ["*.secret"],
		"maxFileSizeKb": 200,
		"allowedExtensions": [".ts", ".js", ".md"]
	}
}
```

Fields reference (brief):

- `modules`: array of module objects with `name` and `path` (required), optional `includeInstructions` (boolean) and `excludePatterns` (glob list).
- `globalInstructions`: top-level instructions sent to agents when formatting context.
- `maxTotalSizeKb`: overall limit for returned project context (kilobytes).
- `cache`: tuning for the internal LRU cache (`maxEntries`, `maxEntrySizeKb`).
- `security`: fine-grained allow/deny lists and file-size/extension limits.

See `src/config/config-loader.ts` for exact validation rules.

```

---

## 🕐 21/05/2026, 16:02:48

### 📊 Resumen
- **Total archivos:** 4
- **📝 Nuevos:** 3
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +113
- **Líneas eliminadas:** -3
- **Balance neto:** +110 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +113 | -3 | +110 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (4)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+113 líneas)**

```
Install and run using pnpm (recommended):

```bash
﻿# mcp-context-cache

🚀 **Servidor MCP para cache de contexto de agentes de IA**

Carga, almacena en caché y entrega de forma eficiente el contexto de archivos de un proyecto a agentes de IA usando el Model Context Protocol (MCP).

## Inicio rápido

Instalación y ejecución con `pnpm` (recomendado):

# Instalar globalmente
pnpm add -g mcp-context-cache
# Generar un archivo de configuración en tu proyecto

# Ejecutar el paquete sin instalarlo (útil para probar)
pnpm dlx mcp-context-cache
```

Instalar como dependencia de desarrollo en un proyecto:

```bash
pnpm add -D mcp-context-cache
# ejecutar: pnpm dlx mcp-context-cache --init
```

## Características

- Caché LRU — Los archivos se hashean (SHA-256) y se almacenan; los archivos sin cambios no se vuelven a leer.
- Canal de seguridad — Validaciones para evitar cargar archivos sensibles.
- Herramientas MCP — Carga de contexto por lista de archivos, directorio o archivo de configuración.
- Truncado inteligente — Respeta límites de tamaño e informa archivos omitidos.
- Orden determinista — Salida ordenada para respuestas estables de los agentes.

## Documentación

- **[README completo](docs/README.md)** — Instalación, configuración y ejemplos
- **[Instrucciones para agentes](docs/AGENT_INSTRUCTIONS.md)** — Cómo los agentes usan este servidor
- **[Especificación API](docs/CONTEXTCACHE_SPEC.md)** — Especificación completa
- **[Guía de contribución](CONTRIBUTING.md)** — Cómo contribuir

## Configuración (contextcache.json)

El servidor busca un archivo `contextcache.json` en la raíz del proyecto por defecto. También puedes pasar una ruta explícita a las herramientas que aceptan `configPath`.

Ejemplo de `contextcache.json`:

```json
{
	"modules": [
		{
			"name": "src",
			"path": "src",
			"includeInstructions": true,
			"excludePatterns": ["**/*.test.ts"]
		}
	],
	"globalInstructions": "Resume el proyecto y los archivos importantes para un agente de IA.",
	"maxTotalSizeKb": 2048,
	"cache": {
		"maxEntries": 1000,
		"maxEntrySizeKb": 200
	},
	"security": {
		"allowedPaths": ["src"],
		"deniedPaths": ["node_modules"],
		"deniedFiles": ["*.secret"],
		"maxFileSizeKb": 200,
		"allowedExtensions": [".ts", ".js", ".md"]
	}
}
```

Descripción breve de los campos:

- `modules`: array de módulos con `name` y `path` (requeridos), opcional `includeInstructions` (boolean) y `excludePatterns` (globs).
- `globalInstructions`: instrucciones generales que se añaden al contexto para los agentes.
- `maxTotalSizeKb`: límite total de contexto devuelto (en KB).
- `cache`: ajustes para la caché LRU (`maxEntries`, `maxEntrySizeKb`).
- `security`: listas de rutas permitidas/denegadas, tamaño máximo de archivo y extensiones permitidas.

Consulta `src/config/config-loader.ts` para las reglas de validación exactas.

## Desarrollo

```bash
pnpm install        # Instalar dependencias
pnpm build          # Compilar TypeScript
pnpm test           # Ejecutar tests
pnpm lint           # Linter
pnpm dev            # Modo desarrollo
## Licencia

MIT — ver [LICENSE](LICENSE)

---

Creado con TypeScript • MCP Protocol • LRU Cache • Zod
}
```

Fields reference (brief):

- `modules`: array of module objects with `name` and `path` (required), optional `includeInstructions` (boolean) and `excludePatterns` (glob list).
- `globalInstructions`: top-level instructions sent to agents when formatting context.
- `maxTotalSizeKb`: overall limit for returned project context (kilobytes).
- `cache`: tuning for the internal LRU cache (`maxEntries`, `maxEntrySizeKb`).
- `security`: fine-grained allow/deny lists and file-size/extension limits.

See `src/config/config-loader.ts` for exact validation rules.

```

---

## 🕐 21/05/2026, 16:03:31

### 📊 Resumen
- **Total archivos:** 4
- **📝 Nuevos:** 3
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +160
- **Líneas eliminadas:** -3
- **Balance neto:** +157 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +160 | -3 | +157 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (4)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+160 líneas)**

```
Install and run using pnpm (recommended):

```bash
﻿# mcp-context-cache

🚀 **Servidor MCP para cache de contexto de agentes de IA**

Carga, almacena en caché y entrega de forma eficiente el contexto de archivos de un proyecto a agentes de IA usando el Model Context Protocol (MCP).

## Inicio rápido

Instalación y ejecución con `pnpm` (recomendado):

# Instalar globalmente
pnpm add -g mcp-context-cache
# Generar un archivo de configuración en tu proyecto

# Ejecutar el paquete sin instalarlo (útil para probar)
pnpm dlx mcp-context-cache
Instalar como dependencia de desarrollo en un proyecto:

```bash
pnpm add -D mcp-context-cache
# ejecutar: pnpm dlx mcp-context-cache --init
```

VS Code — Global instructions (applies to ALL workspaces)
Create the file %APPDATA%\Code\User\prompts\mcp-context-cache.instructions.md on Windows
or ~/.config/Code/User/prompts/mcp-context-cache.instructions.md on macOS/Linux:

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
The applyTo: "**" frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

## Características

- Caché LRU — Los archivos se hashean (SHA-256) y se almacenan; los archivos sin cambios no se vuelven a leer.
- Canal de seguridad — Validaciones para evitar cargar archivos sensibles.
- Herramientas MCP — Carga de contexto por lista de archivos, directorio o archivo de configuración.
- Truncado inteligente — Respeta límites de tamaño e informa archivos omitidos.
- Orden determinista — Salida ordenada para respuestas estables de los agentes.

## Documentación

- **[README completo](docs/README.md)** — Instalación, configuración y ejemplos
- **[Instrucciones para agentes](docs/AGENT_INSTRUCTIONS.md)** — Cómo los agentes usan este servidor
- **[Especificación API](docs/CONTEXTCACHE_SPEC.md)** — Especificación completa
- **[Guía de contribución](CONTRIBUTING.md)** — Cómo contribuir

## Configuración (contextcache.json)

El servidor busca un archivo `contextcache.json` en la raíz del proyecto por defecto. También puedes pasar una ruta explícita a las herramientas que aceptan `configPath`.

Ejemplo de `contextcache.json`:

```json
{
	"modules": [
		{
			"name": "src",
			"path": "src",
			"includeInstructions": true,
			"excludePatterns": ["**/*.test.ts"]
		}
	],
	"globalInstructions": "Resume el proyecto y los archivos importantes para un agente de IA.",
	"maxTotalSizeKb": 2048,
	"cache": {
		"maxEntries": 1000,
		"maxEntrySizeKb": 200
	},
	"security": {
		"allowedPaths": ["src"],
		"deniedPaths": ["node_modules"],
		"deniedFiles": ["*.secret"],
		"maxFileSizeKb": 200,
		"allowedExtensions": [".ts", ".js", ".md"]
	}
}
```

Descripción breve de los campos:

- `modules`: array de módulos con `name` y `path` (requeridos), opcional `includeInstructions` (boolean) y `excludePatterns` (globs).
- `globalInstructions`: instrucciones generales que se añaden al contexto para los agentes.
- `maxTotalSizeKb`: límite total de contexto devuelto (en KB).
- `cache`: ajustes para la caché LRU (`maxEntries`, `maxEntrySizeKb`).
- `security`: listas de rutas permitidas/denegadas, tamaño máximo de archivo y extensiones permitidas.

Consulta `src/config/config-loader.ts` para las reglas de validación exactas.

## Desarrollo

```bash
pnpm install        # Instalar dependencias
pnpm build          # Compilar TypeScript
pnpm test           # Ejecutar tests
pnpm lint           # Linter
pnpm dev            # Modo desarrollo
```

## Licencia

MIT — ver [LICENSE](LICENSE)

---

Creado con TypeScript • MCP Protocol • LRU Cache • Zod
}
```

Fields reference (brief):

- `modules`: array of module objects with `name` and `path` (required), optional `includeInstructions` (boolean) and `excludePatterns` (glob list).
- `globalInstructions`: top-level instructions sent to agents when formatting context.
- `maxTotalSizeKb`: overall limit for returned project context (kilobytes).
- `cache`: tuning for the internal LRU cache (`maxEntries`, `maxEntrySizeKb`).
- `security`: fine-grained allow/deny lists and file-size/extension limits.

See `src/config/config-loader.ts` for exact validation rules.

```

---

## 🕐 21/05/2026, 16:03:56

### 📊 Resumen
- **Total archivos:** 4
- **📝 Nuevos:** 3
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +172
- **Líneas eliminadas:** -3
- **Balance neto:** +169 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +172 | -3 | +169 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (4)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+172 líneas)**

```
Install and run using pnpm (recommended):

```bash
﻿# mcp-context-cache

🚀 **Servidor MCP para cache de contexto de agentes de IA**

Carga, almacena en caché y entrega de forma eficiente el contexto de archivos de un proyecto a agentes de IA usando el Model Context Protocol (MCP).

## Inicio rápido

Instalación y ejecución con `pnpm` (recomendado):

# Instalar globalmente
pnpm add -g mcp-context-cache
# Generar un archivo de configuración en tu proyecto

# Ejecutar el paquete sin instalarlo (útil para probar)
pnpm dlx mcp-context-cache
```

Instalar como dependencia de desarrollo en un proyecto:

```bash
pnpm add -D mcp-context-cache
# ejecutar: pnpm dlx mcp-context-cache --init
```

VS Code — Global instructions (applies to ALL workspaces)
Create the file %APPDATA%\Code\User\prompts\mcp-context-cache.instructions.md on Windows
or ~/.config/Code/User/prompts/mcp-context-cache.instructions.md on macOS/Linux:

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
The applyTo: "**" frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

## PROHIBITED — do not use these tools to read project files

**NEVER call `read_file`, `list_dir`, `file_search`, `semantic_search`, or `grep_search` to read project source files.**
Only fall back to them if all MCP tools return an error.

## MANDATORY first step

This project has a `contextcache.json`. Call `get_context_from_config` before any other tool:

```json
{ "projectRoot": "<absolute-path-to-this-repo>" }

## Características

- Caché LRU — Los archivos se hashean (SHA-256) y se almacenan; los archivos sin cambios no se vuelven a leer.
- Canal de seguridad — Validaciones para evitar cargar archivos sensibles.
- Herramientas MCP — Carga de contexto por lista de archivos, directorio o archivo de configuración.
- Truncado inteligente — Respeta límites de tamaño e informa archivos omitidos.
- Orden determinista — Salida ordenada para respuestas estables de los agentes.

## Documentación

- **[README completo](docs/README.md)** — Instalación, configuración y ejemplos
- **[Instrucciones para agentes](docs/AGENT_INSTRUCTIONS.md)** — Cómo los agentes usan este servidor
- **[Especificación API](docs/CONTEXTCACHE_SPEC.md)** — Especificación completa
- **[Guía de contribución](CONTRIBUTING.md)** — Cómo contribuir

## Configuración (contextcache.json)

El servidor busca un archivo `contextcache.json` en la raíz del proyecto por defecto. También puedes pasar una ruta explícita a las herramientas que aceptan `configPath`.

Ejemplo de `contextcache.json`:

```json
{
	"modules": [
		{
			"name": "src",
			"path": "src",
			"includeInstructions": true,
			"excludePatterns": ["**/*.test.ts"]
		}
	],
	"globalInstructions": "Resume el proyecto y los archivos importantes para un agente de IA.",
	"maxTotalSizeKb": 2048,
	"cache": {
		"maxEntries": 1000,
		"maxEntrySizeKb": 200
	},
	"security": {
		"allowedPaths": ["src"],
		"deniedPaths": ["node_modules"],
		"deniedFiles": ["*.secret"],
		"maxFileSizeKb": 200,
		"allowedExtensions": [".ts", ".js", ".md"]
	}
}
```

Descripción breve de los campos:

- `modules`: array de módulos con `name` y `path` (requeridos), opcional `includeInstructions` (boolean) y `excludePatterns` (globs).
- `globalInstructions`: instrucciones generales que se añaden al contexto para los agentes.
- `maxTotalSizeKb`: límite total de contexto devuelto (en KB).
- `cache`: ajustes para la caché LRU (`maxEntries`, `maxEntrySizeKb`).
- `security`: listas de rutas permitidas/denegadas, tamaño máximo de archivo y extensiones permitidas.

Consulta `src/config/config-loader.ts` para las reglas de validación exactas.

## Desarrollo

```bash
pnpm install        # Instalar dependencias
pnpm build          # Compilar TypeScript
pnpm test           # Ejecutar tests
pnpm lint           # Linter
pnpm dev            # Modo desarrollo
## Licencia

MIT — ver [LICENSE](LICENSE)

---

Creado con TypeScript • MCP Protocol • LRU Cache • Zod
}
```

Fields reference (brief):

- `modules`: array of module objects with `name` and `path` (required), optional `includeInstructions` (boolean) and `excludePatterns` (glob list).
- `globalInstructions`: top-level instructions sent to agents when formatting context.
- `maxTotalSizeKb`: overall limit for returned project context (kilobytes).
- `cache`: tuning for the internal LRU cache (`maxEntries`, `maxEntrySizeKb`).
- `security`: fine-grained allow/deny lists and file-size/extension limits.

See `src/config/config-loader.ts` for exact validation rules.

```

---

## 🕐 21/05/2026, 16:05:26

### 📊 Resumen
- **Total archivos:** 4
- **📝 Nuevos:** 3
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +330
- **Líneas eliminadas:** -28
- **Balance neto:** +302 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +330 | -28 | +302 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (4)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+330 líneas)**

```
﻿﻿# mcp-context-cache
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
pnpm add -g mcp-context-cache
```
Verify installation:
```bash
mcp-context-cache --version
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
			"command": "node",
			"args": [
				"%APPDATA%\\Local\\pnpm\\global\\5\\.pnpm\\mcp-context-cache@1.0.0\\node_modules\\mcp-context-cache\\dist\\index.js"
			]
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
npx @jdug-jadodev/mcp-context-cache --init
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
```

---

## 🕐 21/05/2026, 16:08:16

### 📊 Resumen
- **Total archivos:** 5
- **📝 Nuevos:** 4
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +330
- **Líneas eliminadas:** -28
- **Balance neto:** +302 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `README.es.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +330 | -28 | +302 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (5)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
README.es.md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+330 líneas)**

```
﻿﻿# mcp-context-cache
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
pnpm add -g mcp-context-cache
```
Verify installation:
```bash
mcp-context-cache --version
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
			"command": "node",
			"args": [
				"%APPDATA%\\Local\\pnpm\\global\\5\\.pnpm\\mcp-context-cache@1.0.0\\node_modules\\mcp-context-cache\\dist\\index.js"
			]
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
npx @jdug-jadodev/mcp-context-cache --init
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
```

---

## 🕐 21/05/2026, 16:09:19

### 📊 Resumen
- **Total archivos:** 5
- **📝 Nuevos:** 4
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +330
- **Líneas eliminadas:** -28
- **Balance neto:** +302 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `README..md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +330 | -28 | +302 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (5)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
README..md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+330 líneas)**

```
﻿﻿# mcp-context-cache
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
pnpm add -g mcp-context-cache
```
Verify installation:
```bash
mcp-context-cache --version
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
			"command": "node",
			"args": [
				"%APPDATA%\\Local\\pnpm\\global\\5\\.pnpm\\mcp-context-cache@1.0.0\\node_modules\\mcp-context-cache\\dist\\index.js"
			]
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
npx @jdug-jadodev/mcp-context-cache --init
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
```

---

## 🕐 21/05/2026, 16:09:22

### 📊 Resumen
- **Total archivos:** 6
- **📝 Nuevos:** 4
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +0
- **Líneas eliminadas:** -48
- **Balance neto:** -48 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `README..md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +0 | -48 | -48 |
| 🗑️ | `README.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (6)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
README..md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

**🗑️ Eliminados:**
```
README.md
```

</details>

---

## 🕐 21/05/2026, 16:09:33

### 📊 Resumen
- **Total archivos:** 4
- **📝 Nuevos:** 3
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +44
- **Líneas eliminadas:** -33
- **Balance neto:** +11 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +44 | -33 | +11 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (4)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+44 líneas)**

```
# mcp-context-cache
Proyecto: MCP Context Cache
Descripción
-----------
`mcp-context-cache` es una herramienta ligera que centraliza y sirve el contexto de proyectos (archivos, metadatos y bundles) para agentes de IA y procesos automatizados, mejorando la velocidad y precisión de las respuestas.
Características principales
-------------------------
- Carga y formatea contextos de proyecto desde `contextcache.json`.
- APIs para consultar directorios y archivos específicos del proyecto.
- Soporte para bundles parciales y recuperación de archivos omitidos.
- Tests incluidos para las utilidades principales.
Requisitos
---------
- Node.js 16+ o superior
- pnpm (recomendado) o npm
Instalación
----------
1. Clonar el repositorio:
   git clone <repositorio>
2. Instalar dependencias:
   pnpm install
Comandos útiles
--------------
- Construir el proyecto:
  pnpm build
- Ejecutar tests:
  pnpm test
Estructura del proyecto
-----------------------
- `src/`: código fuente del servidor y herramientas.
- `docs/`: documentación y especificaciones (ver `CONTEXTCACHE_SPEC.md`).
- `tests/`: pruebas unitarias.
Cómo contribuir
---------------
1. Abre un issue describiendo la mejora o bug.
2. Crea una rama nueva para tu trabajo.
3. Envía un pull request con pruebas cuando corresponda.
Licencia
--------
Este proyecto está bajo la licencia indicada en el fichero `LICENSE`.

Más información
---------------
Consulta la documentación en `docs/` y los tests en `tests/` para ejemplos y uso avanzado.
```

---

## 🕐 21/05/2026, 16:10:09

### 📊 Resumen
- **Total archivos:** 6
- **📝 Nuevos:** 4
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +0
- **Líneas eliminadas:** -48
- **Balance neto:** -48 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `README..md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +0 | -48 | -48 |
| 🗑️ | `README.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (6)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
README..md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

**🗑️ Eliminados:**
```
README.md
```

</details>

---

## 🕐 21/05/2026, 16:10:10

### 📊 Resumen
- **Total archivos:** 6
- **📝 Nuevos:** 4
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +0
- **Líneas eliminadas:** -48
- **Balance neto:** -48 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `README.es.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +0 | -48 | -48 |
| 🗑️ | `README.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (6)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
README.es.md
contextcache.json
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

**🗑️ Eliminados:**
```
README.md
```

</details>

---

## 🕐 21/05/2026, 16:10:14

### 📊 Resumen
- **Total archivos:** 5
- **📝 Nuevos:** 3
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +0
- **Líneas eliminadas:** -48
- **Balance neto:** -48 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `README.es.md` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +0 | -48 | -48 |
| 🗑️ | `README.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (5)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
README.es.md
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

**🗑️ Eliminados:**
```
README.md
```

</details>

---

## 🕐 21/05/2026, 16:10:20

### 📊 Resumen
- **Total archivos:** 6
- **📝 Nuevos:** 4
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +0
- **Líneas eliminadas:** -48
- **Balance neto:** -48 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `README.es.md` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| 🆕 | `tu-org-mcp-context-cache-1.0.0.tgz` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +0 | -48 | -48 |
| 🗑️ | `README.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (6)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
README.es.md
scripts/daemon-test.mjs
tu-org-mcp-context-cache-1.0.0.tgz
```

**✏️ Modificados:**
```
README.md
```

**🗑️ Eliminados:**
```
README.md
```

</details>

---

## 🕐 21/05/2026, 16:10:24

### 📊 Resumen
- **Total archivos:** 5
- **📝 Nuevos:** 3
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +0
- **Líneas eliminadas:** -48
- **Balance neto:** -48 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `README.es.md` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +0 | -48 | -48 |
| 🗑️ | `README.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (5)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
README.es.md
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

**🗑️ Eliminados:**
```
README.md
```

</details>

---

## 🕐 21/05/2026, 16:10:39

### 📊 Resumen
- **Total archivos:** 3
- **📝 Nuevos:** 2
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +44
- **Líneas eliminadas:** -33
- **Balance neto:** +11 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +44 | -33 | +11 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (3)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+44 líneas)**

```
# mcp-context-cache
Proyecto: MCP Context Cache
Descripción
-----------
`mcp-context-cache` es una herramienta ligera que centraliza y sirve el contexto de proyectos (archivos, metadatos y bundles) para agentes de IA y procesos automatizados, mejorando la velocidad y precisión de las respuestas.
Características principales
-------------------------
- Carga y formatea contextos de proyecto desde `contextcache.json`.
- APIs para consultar directorios y archivos específicos del proyecto.
- Soporte para bundles parciales y recuperación de archivos omitidos.
- Tests incluidos para las utilidades principales.
Requisitos
---------
- Node.js 16+ o superior
- pnpm (recomendado) o npm
Instalación
----------
1. Clonar el repositorio:
   git clone <repositorio>
2. Instalar dependencias:
   pnpm install
Comandos útiles
--------------
- Construir el proyecto:
  pnpm build
- Ejecutar tests:
  pnpm test
Estructura del proyecto
-----------------------
- `src/`: código fuente del servidor y herramientas.
- `docs/`: documentación y especificaciones (ver `CONTEXTCACHE_SPEC.md`).
- `tests/`: pruebas unitarias.
Cómo contribuir
---------------
1. Abre un issue describiendo la mejora o bug.
2. Crea una rama nueva para tu trabajo.
3. Envía un pull request con pruebas cuando corresponda.
Licencia
--------
Este proyecto está bajo la licencia indicada en el fichero `LICENSE`.

Más información
---------------
Consulta la documentación en `docs/` y los tests en `tests/` para ejemplos y uso avanzado.
```

---

## 🕐 21/05/2026, 16:10:59

### 📊 Resumen
- **Total archivos:** 3
- **📝 Nuevos:** 2
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +329
- **Líneas eliminadas:** -27
- **Balance neto:** +302 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +329 | -27 | +302 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (3)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+329 líneas)**

```
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
pnpm add -g mcp-context-cache
```
Verify installation:
```bash
mcp-context-cache --version
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
			"command": "node",
			"args": [
				"%APPDATA%\\Local\\pnpm\\global\\5\\.pnpm\\mcp-context-cache@1.0.0\\node_modules\\mcp-context-cache\\dist\\index.js"
			]
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
npx @jdug-jadodev/mcp-context-cache --init
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
```

---

## 🕐 21/05/2026, 16:20:39

### 📊 Resumen
- **Total archivos:** 3
- **📝 Nuevos:** 2
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +323
- **Líneas eliminadas:** -28
- **Balance neto:** +295 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `PROJECT_REPORT.md` | nuevo | -0 | 0 |
| 🆕 | `scripts/daemon-test.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +323 | -28 | +295 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (3)</summary>

**🆕 Nuevos:**
```
PROJECT_REPORT.md
scripts/daemon-test.mjs
```

**✏️ Modificados:**
```
README.md
```

</details>

### 💻 Código Añadido

**README.md** (+323 líneas)**

```
# mcp-context-cache
> Caché de contexto para agentes de IA. Carga, almacena y entrega el contexto de archivos del proyecto de forma eficiente usando el **Protocolo de Contexto de Modelos (MCP)**.
---

## ¿Por qué usarlo?

| Sin este servidor | Con este servidor |
|---|---|
| El agente llama a `read_file` una vez por archivo | Una sola llamada devuelve todo el proyecto |
| 30 archivos = **30 tool calls** | 30 archivos = **1 tool call** |

---

## Características

- **Caché LRU** — Los archivos se hashean con SHA-256 y se almacenan en memoria. Los archivos sin cambios nunca se vuelven a leer del disco.
- **Pipeline de seguridad** — 8 pasos de validación bloquean archivos sensibles (`.env`, `*.pem`, credenciales, binarios, etc.).
- **3 herramientas MCP** — Carga de contexto flexible: por lista de archivos, directorio o archivo de configuración.
- **Truncado inteligente** — Respeta límites de tamaño configurables y reporta los archivos omitidos.
- **Orden alfabético** — Salida determinista para respuestas estables del agente de IA.

---

## Instalación

### Instalación global (recomendada)

```bash
npm install -g mcp-context-cache
```
Con pnpm:
pnpm add -g mcp-context-cache
```

Verificar la instalación:

```bash
mcp-context-cache --version
```

### Sin instalar

```bash
npx mcp-context-cache --init
```

---

## Guía de configuración

### Paso 1 — Registra el servidor MCP en tu IDE

#### VS Code

**Opción A — Global (todos los workspaces):**
Edita `~/.config/Code/User/mcp.json` en macOS/Linux o `%APPDATA%\Code\User\mcp.json` en Windows:

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

**Opción B — Por workspace:**
Crea `.vscode/mcp.json` en la raíz del proyecto:

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

Crea `.mcp.json` en la raíz del proyecto:

```json
{
  "mcpServers": {
    "mcp-context-cache": {
      "command": "mcp-context-cache"
    }
  }
}
```

> JetBrains AI Assistant detecta `.mcp.json` automáticamente desde la versión 2024.3.

---

### Paso 2 — Instrucciones al agente para preferir las herramientas MCP

Los agentes de IA usan sus herramientas nativas por defecto. Debes indicarles explícitamente que prefieran las del servidor MCP.

#### VS Code — Instrucciones globales

Crea el archivo `~/.config/Code/User/prompts/mcp-context-cache.instructions.md`:

```markdown
---
applyTo: "**"
---

# Carga de contexto — mcp-context-cache

## HERRAMIENTAS PROHIBIDAS

NUNCA uses estas herramientas para leer archivos del proyecto:

- `read_file`
- `list_dir`
- `file_search`
- `semantic_search`
- `grep_search`

Solo se permite usarlas si TODAS las herramientas MCP fallan con error.

## PROCEDIMIENTO OBLIGATORIO

Antes de cualquier otra llamada al inicio de una tarea:

1. Verifica si el workspace contiene un archivo `contextcache.json`.
2. Si existe → llama a `get_context_from_config` con `{ "projectRoot": "<ruta-absoluta>" }`.
3. Si no existe y necesitas un directorio → llama a `get_directory_context`.
4. Para archivos específicos → llama a `get_project_context` con un array `paths`.
5. Solo usa `read_file` si las tres herramientas MCP devuelven error.

## Referencia de herramientas

- `get_context_from_config`  →  `{ "projectRoot": "<ruta-absoluta>" }`
- `get_project_context`      →  `{ "paths": ["rel/ruta.ts", ...], "projectRoot": "<ruta-absoluta>" }`
- `get_directory_context`    →  `{ "rootPath": "<ruta-absoluta-al-directorio>" }`
```

> El frontmatter `applyTo: "**"` le indica a VS Code Copilot que inyecte este archivo en cada conversación.

#### VS Code — Por proyecto
Crea `.github/copilot-instructions.md` en la raíz del proyecto:

```markdown
## PROHIBIDO — no uses estas herramientas para leer archivos

NUNCA llames a `read_file`, `list_dir`, `file_search`, `semantic_search` o `grep_search`.
Solo recurre a ellas si todas las herramientas MCP devuelven error.

## PRIMER PASO OBLIGATORIO

Este proyecto tiene un `contextcache.json`. Llama a `get_context_from_config` antes de cualquier otra herramienta:

{ "projectRoot": "<ruta-absoluta-a-este-repo>" }
#### JetBrains — Prompt de sistema global (AI Assistant)

Ve a **Settings → Tools → AI Assistant → System prompt** y agrega:
```
Al trabajar en cualquier proyecto que tenga un archivo contextcache.json, llama a la herramienta MCP
get_context_from_config con la ruta raíz del proyecto antes de leer archivos individuales.
Prefiere get_directory_context sobre leer archivos uno por uno, y get_project_context
sobre múltiples llamadas a read_file.
```
---
### Paso 3 — Inicializa tu proyecto
Ejecuta en la raíz del proyecto para generar un `contextcache.json`:
npx @jdug-jadodev/mcp-context-cache --init
```

O créalo manualmente:

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
#### Referencia de campos
| Campo | Descripción |
|---|---|
| `modules` | Lista de directorios a empaquetar |
| `modules[].path` | Ruta relativa a la raíz del proyecto |
| `modules[].includeInstructions` | Si es `true`, antepone el contenido de `globalInstructions` |
| `modules[].excludePatterns` | Patrones glob a omitir |
| `globalInstructions` | Ruta al Markdown incluido al inicio del bundle cuando `includeInstructions: true` |
| `maxTotalSizeKb` | Tamaño máximo total del bundle en KB |
| `cache.maxEntries` | Número máximo de archivos en la caché LRU |
| `cache.maxEntrySizeKb` | Tamaño máximo de archivo individual en caché |
| `security.allowedPaths` | Rutas desde las que el servidor puede leer |
| `security.deniedPaths` | Rutas siempre bloqueadas |
| `security.deniedFiles` | Patrones de nombres de archivo siempre bloqueados |
| `security.maxFileSizeKb` | Tamaño máximo de archivo a servir |
| `security.allowedExtensions` | Lista blanca de extensiones de archivo |
## Herramientas MCP

### `get_context_from_config`

Carga el contexto completo del proyecto definido en `contextcache.json`. **Úsala siempre primero.**

```json
{ "projectRoot": "/ruta/absoluta/al/proyecto" }
```

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `projectRoot` | string | sí | Directorio que contiene `contextcache.json` |
| `configPath` | string | no | Ruta explícita a `contextcache.json` |

---

### `get_directory_context`

Carga recursivamente todos los archivos de un directorio.

```json
{ "rootPath": "/ruta/absoluta/al/directorio", "excludePatterns": ["*.test.ts"] }
```

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `rootPath` | string | sí | Directorio a escanear |
| `configPath` | string | no | Ruta a `contextcache.json` para la configuración de seguridad |
| `excludePatterns` | string[] | no | Patrones glob adicionales a excluir |

---

### `get_project_context`

Carga una lista específica de archivos por ruta.

```json
{ "paths": ["src/auth/login.ts", "src/types.ts"], "projectRoot": "/ruta/absoluta" }
```

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `paths` | string[] | sí | Rutas de archivos a cargar |
| `projectRoot` | string | no | Raíz para resolver rutas relativas |
| `configPath` | string | no | Ruta a `contextcache.json` |

---

## Formato de salida

Cada archivo en el bundle se envuelve con marcadores `BUNDLE`:

```
BUNDLE_START: <sha256-fingerprint>
ruta/al/archivo.ts
<contenido completo del archivo>
BUNDLE_END: ruta/al/archivo.ts
```

Los archivos siempre se ordenan alfabéticamente para una salida determinista.

### Manejo de `BUNDLE_TRUNCATED`

Cuando el tamaño total supera `maxTotalSizeKb`, la respuesta incluye:

```
BUNDLE_TRUNCATED: límite de tamaño excedido.
Límite configurado: 2048 KB
Tamaño total: 3100 KB
Archivos omitidos:
  src/modulo-grande/archivo-a.ts
  src/modulo-grande/archivo-b.ts
```

Llama a `get_project_context` con las rutas omitidas para recuperarlos en una llamada de seguimiento.

---

## Seguridad

Los siguientes archivos están **siempre bloqueados**, independientemente del `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- Todos los binarios: `.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.

Las rutas fuera de `allowedPaths` son rechazadas. El servidor nunca sigue symlinks fuera del árbol permitido.

---

## Desarrollo

```bash
pnpm install
pnpm build   # Compila TypeScript → dist/
pnpm dev     # Ejecuta con tsx (sin paso de build)
pnpm test    # Suite de tests con Vitest
```

---

## Licencia

MIT
```

---
