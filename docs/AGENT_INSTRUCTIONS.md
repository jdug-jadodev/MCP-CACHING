# Agent Instructions — mcp-context-cache
# Instrucciones para Agentes — mcp-context-cache

Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.

## Herramientas disponibles

### `get_project_context`

**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.

```json
{
  "paths": ["src/auth/login.ts", "src/auth/types.ts", "src/middleware/auth.ts"],
  "projectRoot": "/ruta/al/proyecto"
}
```

### `get_directory_context`

**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.

```json
{
  "rootPath": "/ruta/al/proyecto/src/auth",
  "excludePatterns": ["*.test.ts", "*.spec.ts"]
}
```

### `get_context_from_config`

**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.

```json
{
  "projectRoot": "/ruta/al/proyecto"
}
```

## Configuración del IDE

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

Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:

```markdown
## Carga de contexto

Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:

- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo

Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
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

## Manejo de `BUNDLE_TRUNCATED`

Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:

- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético

**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:

```json
{
  "paths": ["path/to/omitted/file1.ts", "path/to/omitted/file2.ts"],
  "projectRoot": "/ruta/al/proyecto"
}
```

## Formato de salida de referencia

```
BUNDLE_START: <sha256-hex-fingerprint>
relative/path/to/file.ts
<complete file content>
BUNDLE_END: relative/path/to/file.ts
```

Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.

## Comportamiento de la caché

- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
- Files are identified by their SHA-256 hash
- If a file hasn't changed, the cached block is reused (no disk read)
- The cache is in-memory and per-server-process (cleared on restart)
- Large files exceeding `maxEntrySizeKb` are never cached (still served, just not cached)
