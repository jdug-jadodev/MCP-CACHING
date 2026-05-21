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

```bash
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
```

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

```bash
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
```

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

---

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