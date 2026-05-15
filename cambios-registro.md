# 📊 Registro de Cambios con Estadísticas
**Iniciado:** 14/5/2026, 6:05:55 p. m.
**Proyecto:** C:\Users\Usuario\Documents\mcp-context-cache
**Último commit:** f86f0d8 - feat: Complete mcp-context-cache implementation with publishing readiness (1 second ago)
**Estado:** Monitoreando nuevos cambios


## 🕐 14/05/2026, 19:07:12

### 📊 Resumen
- **Total archivos:** 3
- **📝 Nuevos:** 1
- **✏️ Modificados:** 1
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +0
- **Líneas eliminadas:** -104
- **Balance neto:** -104 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (3)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
```

**✏️ Modificados:**
```
.copilot-instructions.md
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

---

## 🕐 14/05/2026, 19:15:42

### 📊 Resumen
- **Total archivos:** 4
- **📝 Nuevos:** 1
- **✏️ Modificados:** 2
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +7
- **Líneas eliminadas:** -104
- **Balance neto:** -97 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (4)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
```

**✏️ Modificados:**
```
.copilot-instructions.md
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:15:45

### 📊 Resumen
- **Total archivos:** 5
- **📝 Nuevos:** 1
- **✏️ Modificados:** 3
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +15
- **Líneas eliminadas:** -104
- **Balance neto:** -89 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `src/tools/get-project-context.ts` | +8 | -0 | +8 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (5)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
```

**✏️ Modificados:**
```
.copilot-instructions.md
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+8 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:15:51

### 📊 Resumen
- **Total archivos:** 6
- **📝 Nuevos:** 1
- **✏️ Modificados:** 4
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +22
- **Líneas eliminadas:** -104
- **Balance neto:** -82 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `src/tools/get-project-context.ts` | +8 | -0 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (6)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
```

**✏️ Modificados:**
```
.copilot-instructions.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+8 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:15:59

### 📊 Resumen
- **Total archivos:** 7
- **📝 Nuevos:** 1
- **✏️ Modificados:** 5
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +53
- **Líneas eliminadas:** -135
- **Balance neto:** -82 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-project-context.ts` | +8 | -0 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (7)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
```

**✏️ Modificados:**
```
.copilot-instructions.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+8 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:16:06

### 📊 Resumen
- **Total archivos:** 7
- **📝 Nuevos:** 1
- **✏️ Modificados:** 5
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +54
- **Líneas eliminadas:** -136
- **Balance neto:** -82 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (7)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
```

**✏️ Modificados:**
```
.copilot-instructions.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:16:41

### 📊 Resumen
- **Total archivos:** 8
- **📝 Nuevos:** 1
- **✏️ Modificados:** 6
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +101
- **Líneas eliminadas:** -183
- **Balance neto:** -82 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (8)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
```

**✏️ Modificados:**
```
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:19:50

### 📊 Resumen
- **Total archivos:** 9
- **📝 Nuevos:** 2
- **✏️ Modificados:** 6
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +101
- **Líneas eliminadas:** -183
- **Balance neto:** -82 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (9)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
contextcache.json
```

**✏️ Modificados:**
```
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:20:00

### 📊 Resumen
- **Total archivos:** 10
- **📝 Nuevos:** 2
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +143
- **Líneas eliminadas:** -191
- **Balance neto:** -48 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `README.md` | +42 | -8 | +34 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (10)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
contextcache.json
```

**✏️ Modificados:**
```
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
README.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+42 líneas)**

```
## Inicio rápido

Instalación y uso rápido del servidor MCP:
# Instalar localmente (o globalmente si lo prefieres)
# Generar un archivo de ejemplo contextcache.json en la raíz del proyecto

# Cargar el contexto curado del proyecto con npx (ejecución local)
npx @tu-org/mcp-context-cache --get-context-from-config \
	--projectRoot .
## Documentación

- **[Guía de uso](docs/README.md)** — Instalación, configuración y ejemplos
- **[Instrucciones para agentes](docs/AGENT_INSTRUCTIONS.md)** — Cómo los agentes usan este servidor
- **[Especificación del formato `contextcache.json`](docs/CONTEXTCACHE_SPEC.md)** — Especificación completa
- **[Guía de contribución](CONTRIBUTING.md)** — Cómo contribuir

## Cómo aprovechar el servidor al máximo

- Al iniciar una sesión con un agente, usa primero `get_context_from_config` para cargar el contexto curado que el mantenedor del proyecto definió en `contextcache.json`.
- Si recibes `BUNDLE_TRUNCATED`, llama a `get_project_context` con las rutas de los archivos omitidos para obtener los ficheros faltantes.
- Integra el servidor con tu editor (VS Code / JetBrains) para que los agentes reciban automáticamente el contexto antes de procesar tus prompts.

### Ejemplo (VS Code)

Añade en `.vscode/mcp.json`:

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

### Uso recomendado
- Mantén `contextcache.json` actualizado con los módulos y las rutas de instrucciones (`globalInstructions` y `includeInstructions`).
- Usa patrones de exclusión (`excludePatterns`) para evitar tests, fixtures y archivos enormes.
- Revisa `docs/AGENT_INSTRUCTIONS.md` para los ejemplos de payload de las tres herramientas MCP.
```

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:22:01

### 📊 Resumen
- **Total archivos:** 10
- **📝 Nuevos:** 2
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +224
- **Líneas eliminadas:** -210
- **Balance neto:** +14 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +123 | -27 | +96 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (10)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
contextcache.json
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+123 líneas)**

```
MCP server for AI agent context caching. Efficiently loads, caches, and delivers project file context to AI agents using the Model Context Protocol (MCP).
## Features
- **LRU caching** — Files are hashed (SHA-256) and cached in memory. Unchanged files are never re-read from disk.
- **Security pipeline** — 8-step validation prevents loading sensitive files (`.env`, `*.pem`, credentials, binaries, etc.).
- **3 MCP tools** — Flexible context loading: by file list, directory, or config file.
- **Smart truncation** — Respects configurable size limits and reports omitted files.
- **Alphabetical ordering** — Deterministic output for stable AI agent responses.

## Installation
# npx (no install needed)
npx @tu-org/mcp-context-cache --init

# or global install
```
## Quick Start

Run `--init` in your project root to generate `contextcache.json` and get IDE configuration snippets:

```bash
npx @tu-org/mcp-context-cache --init
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
pnpm install
pnpm build
pnpm test
pnpm dev  # run with tsx (no build needed)
MIT
```

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:28:55

### 📊 Resumen
- **Total archivos:** 11
- **📝 Nuevos:** 3
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +224
- **Líneas eliminadas:** -210
- **Balance neto:** +14 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +123 | -27 | +96 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (11)</summary>

**🆕 Nuevos:**
```
.github/instructions/.copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+123 líneas)**

```
MCP server for AI agent context caching. Efficiently loads, caches, and delivers project file context to AI agents using the Model Context Protocol (MCP).
## Features
- **LRU caching** — Files are hashed (SHA-256) and cached in memory. Unchanged files are never re-read from disk.
- **Security pipeline** — 8-step validation prevents loading sensitive files (`.env`, `*.pem`, credentials, binaries, etc.).
- **3 MCP tools** — Flexible context loading: by file list, directory, or config file.
- **Smart truncation** — Respects configurable size limits and reports omitted files.
- **Alphabetical ordering** — Deterministic output for stable AI agent responses.

## Installation
# npx (no install needed)
npx @tu-org/mcp-context-cache --init

# or global install
```
## Quick Start

Run `--init` in your project root to generate `contextcache.json` and get IDE configuration snippets:

```bash
npx @tu-org/mcp-context-cache --init
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
pnpm install
pnpm build
pnpm test
pnpm dev  # run with tsx (no build needed)
MIT
```

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:39:23

### 📊 Resumen
- **Total archivos:** 12
- **📝 Nuevos:** 4
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +224
- **Líneas eliminadas:** -210
- **Balance neto:** +14 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `.github/instructions/.copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +123 | -27 | +96 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (12)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
.github/instructions/.copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+123 líneas)**

```
MCP server for AI agent context caching. Efficiently loads, caches, and delivers project file context to AI agents using the Model Context Protocol (MCP).
## Features
- **LRU caching** — Files are hashed (SHA-256) and cached in memory. Unchanged files are never re-read from disk.
- **Security pipeline** — 8-step validation prevents loading sensitive files (`.env`, `*.pem`, credentials, binaries, etc.).
- **3 MCP tools** — Flexible context loading: by file list, directory, or config file.
- **Smart truncation** — Respects configurable size limits and reports omitted files.
- **Alphabetical ordering** — Deterministic output for stable AI agent responses.

## Installation
# npx (no install needed)
npx @tu-org/mcp-context-cache --init

# or global install
```
## Quick Start

Run `--init` in your project root to generate `contextcache.json` and get IDE configuration snippets:

```bash
npx @tu-org/mcp-context-cache --init
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
pnpm install
pnpm build
pnpm test
pnpm dev  # run with tsx (no build needed)
MIT
```

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:40:24

### 📊 Resumen
- **Total archivos:** 11
- **📝 Nuevos:** 3
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +224
- **Líneas eliminadas:** -210
- **Balance neto:** +14 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +123 | -27 | +96 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (11)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+123 líneas)**

```
MCP server for AI agent context caching. Efficiently loads, caches, and delivers project file context to AI agents using the Model Context Protocol (MCP).
## Features
- **LRU caching** — Files are hashed (SHA-256) and cached in memory. Unchanged files are never re-read from disk.
- **Security pipeline** — 8-step validation prevents loading sensitive files (`.env`, `*.pem`, credentials, binaries, etc.).
- **3 MCP tools** — Flexible context loading: by file list, directory, or config file.
- **Smart truncation** — Respects configurable size limits and reports omitted files.
- **Alphabetical ordering** — Deterministic output for stable AI agent responses.

## Installation
# npx (no install needed)
npx @tu-org/mcp-context-cache --init

# or global install
```
## Quick Start

Run `--init` in your project root to generate `contextcache.json` and get IDE configuration snippets:

```bash
npx @tu-org/mcp-context-cache --init
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
pnpm install
pnpm build
pnpm test
pnpm dev  # run with tsx (no build needed)
MIT
```

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:43:20

### 📊 Resumen
- **Total archivos:** 11
- **📝 Nuevos:** 3
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +402
- **Líneas eliminadas:** -210
- **Balance neto:** +192 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +301 | -27 | +274 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-context-from-config.ts` | +7 | -0 | +7 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (11)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-project-context.ts
src/tools/get-context-from-config.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+301 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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

The MCP server `mcp-context-cache` is available. Use it as the **primary method**
to read project files instead of calling `read_file` or `semantic_search` on individual files.

## Rules

1. At the start of any coding task, if the workspace has a `contextcache.json`, call
   `get_context_from_config` with the absolute project root path **before** reading any files.
2. When you need to understand a module or directory, use `get_directory_context`
   instead of reading files one by one.
3. When you need specific files, use `get_project_context` with the list of paths
   instead of calling `read_file` repeatedly.
4. Only fall back to `read_file` if `mcp-context-cache` tools return an error
   or the file is outside the project root.
5. If a bundle response contains `BUNDLE_TRUNCATED`, call `get_project_context`
   with the listed omitted paths to retrieve them.

## Tool reference

- `get_context_from_config`  →  `{ "projectRoot": "<absolute-path>" }`
- `get_project_context`      →  `{ "paths": ["rel/path.ts", ...], "projectRoot": "<absolute-path>" }`
- `get_directory_context`    →  `{ "rootPath": "<absolute-path-to-dir>" }`

## Priority order

1. `get_context_from_config` — when `contextcache.json` exists
2. `get_directory_context`   — when exploring an entire module
3. `get_project_context`     — when specific files are known
4. Built-in `read_file`      — last resort only
```

> The `applyTo: "**"` frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

#### VS Code — Per-project instructions

Create `.github/copilot-instructions.md` at the project root:

```markdown
## Context Loading

Use the `mcp-context-cache` MCP server to read files. Do NOT call `read_file` individually.

- If `contextcache.json` exists → call `get_context_from_config` with `projectRoot` first.
- To explore a directory → call `get_directory_context`.
- To load specific files → call `get_project_context` with a `paths` array.
- Only fall back to `read_file` if the MCP tool fails.
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

---

## Security

The following are **always blocked** regardless of `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary extensions (`.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.)

Paths outside `allowedPaths` are rejected. The server never follows symlinks outside the allowed tree.
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

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:46:46

### 📊 Resumen
- **Total archivos:** 11
- **📝 Nuevos:** 3
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +407
- **Líneas eliminadas:** -210
- **Balance neto:** +197 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +301 | -27 | +274 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +12 | -0 | +12 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (11)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+301 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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

The MCP server `mcp-context-cache` is available. Use it as the **primary method**
to read project files instead of calling `read_file` or `semantic_search` on individual files.

## Rules

1. At the start of any coding task, if the workspace has a `contextcache.json`, call
   `get_context_from_config` with the absolute project root path **before** reading any files.
2. When you need to understand a module or directory, use `get_directory_context`
   instead of reading files one by one.
3. When you need specific files, use `get_project_context` with the list of paths
   instead of calling `read_file` repeatedly.
4. Only fall back to `read_file` if `mcp-context-cache` tools return an error
   or the file is outside the project root.
5. If a bundle response contains `BUNDLE_TRUNCATED`, call `get_project_context`
   with the listed omitted paths to retrieve them.

## Tool reference

- `get_context_from_config`  →  `{ "projectRoot": "<absolute-path>" }`
- `get_project_context`      →  `{ "paths": ["rel/path.ts", ...], "projectRoot": "<absolute-path>" }`
- `get_directory_context`    →  `{ "rootPath": "<absolute-path-to-dir>" }`

## Priority order

1. `get_context_from_config` — when `contextcache.json` exists
2. `get_directory_context`   — when exploring an entire module
3. `get_project_context`     — when specific files are known
4. Built-in `read_file`      — last resort only
```

> The `applyTo: "**"` frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

#### VS Code — Per-project instructions

Create `.github/copilot-instructions.md` at the project root:

```markdown
## Context Loading

Use the `mcp-context-cache` MCP server to read files. Do NOT call `read_file` individually.

- If `contextcache.json` exists → call `get_context_from_config` with `projectRoot` first.
- To explore a directory → call `get_directory_context`.
- To load specific files → call `get_project_context` with a `paths` array.
- Only fall back to `read_file` if the MCP tool fails.
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

---

## Security

The following are **always blocked** regardless of `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary extensions (`.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.)

Paths outside `allowedPaths` are rejected. The server never follows symlinks outside the allowed tree.
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

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+12 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:46:53

### 📊 Resumen
- **Total archivos:** 11
- **📝 Nuevos:** 3
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +411
- **Líneas eliminadas:** -210
- **Balance neto:** +201 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +301 | -27 | +274 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +16 | -0 | +16 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (11)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+301 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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

The MCP server `mcp-context-cache` is available. Use it as the **primary method**
to read project files instead of calling `read_file` or `semantic_search` on individual files.

## Rules

1. At the start of any coding task, if the workspace has a `contextcache.json`, call
   `get_context_from_config` with the absolute project root path **before** reading any files.
2. When you need to understand a module or directory, use `get_directory_context`
   instead of reading files one by one.
3. When you need specific files, use `get_project_context` with the list of paths
   instead of calling `read_file` repeatedly.
4. Only fall back to `read_file` if `mcp-context-cache` tools return an error
   or the file is outside the project root.
5. If a bundle response contains `BUNDLE_TRUNCATED`, call `get_project_context`
   with the listed omitted paths to retrieve them.

## Tool reference

- `get_context_from_config`  →  `{ "projectRoot": "<absolute-path>" }`
- `get_project_context`      →  `{ "paths": ["rel/path.ts", ...], "projectRoot": "<absolute-path>" }`
- `get_directory_context`    →  `{ "rootPath": "<absolute-path-to-dir>" }`

## Priority order

1. `get_context_from_config` — when `contextcache.json` exists
2. `get_directory_context`   — when exploring an entire module
3. `get_project_context`     — when specific files are known
4. Built-in `read_file`      — last resort only
```

> The `applyTo: "**"` frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

#### VS Code — Per-project instructions

Create `.github/copilot-instructions.md` at the project root:

```markdown
## Context Loading

Use the `mcp-context-cache` MCP server to read files. Do NOT call `read_file` individually.

- If `contextcache.json` exists → call `get_context_from_config` with `projectRoot` first.
- To explore a directory → call `get_directory_context`.
- To load specific files → call `get_project_context` with a `paths` array.
- Only fall back to `read_file` if the MCP tool fails.
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

---

## Security

The following are **always blocked** regardless of `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary extensions (`.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.)

Paths outside `allowedPaths` are rejected. The server never follows symlinks outside the allowed tree.
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

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+16 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  stats?: CacheStats,
    if (stats) stats.hits++;
  logger.debug('Cache miss', { file: relativePath });
  if (stats) stats.misses++;
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:46:57

### 📊 Resumen
- **Total archivos:** 11
- **📝 Nuevos:** 3
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +412
- **Líneas eliminadas:** -210
- **Balance neto:** +202 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +301 | -27 | +274 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +17 | -0 | +17 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (11)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+301 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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

The MCP server `mcp-context-cache` is available. Use it as the **primary method**
to read project files instead of calling `read_file` or `semantic_search` on individual files.

## Rules

1. At the start of any coding task, if the workspace has a `contextcache.json`, call
   `get_context_from_config` with the absolute project root path **before** reading any files.
2. When you need to understand a module or directory, use `get_directory_context`
   instead of reading files one by one.
3. When you need specific files, use `get_project_context` with the list of paths
   instead of calling `read_file` repeatedly.
4. Only fall back to `read_file` if `mcp-context-cache` tools return an error
   or the file is outside the project root.
5. If a bundle response contains `BUNDLE_TRUNCATED`, call `get_project_context`
   with the listed omitted paths to retrieve them.

## Tool reference

- `get_context_from_config`  →  `{ "projectRoot": "<absolute-path>" }`
- `get_project_context`      →  `{ "paths": ["rel/path.ts", ...], "projectRoot": "<absolute-path>" }`
- `get_directory_context`    →  `{ "rootPath": "<absolute-path-to-dir>" }`

## Priority order

1. `get_context_from_config` — when `contextcache.json` exists
2. `get_directory_context`   — when exploring an entire module
3. `get_project_context`     — when specific files are known
4. Built-in `read_file`      — last resort only
```

> The `applyTo: "**"` frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

#### VS Code — Per-project instructions

Create `.github/copilot-instructions.md` at the project root:

```markdown
## Context Loading

Use the `mcp-context-cache` MCP server to read files. Do NOT call `read_file` individually.

- If `contextcache.json` exists → call `get_context_from_config` with `projectRoot` first.
- To explore a directory → call `get_directory_context`.
- To load specific files → call `get_project_context` with a `paths` array.
- Only fall back to `read_file` if the MCP tool fails.
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

---

## Security

The following are **always blocked** regardless of `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary extensions (`.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.)

Paths outside `allowedPaths` are rejected. The server never follows symlinks outside the allowed tree.
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

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+17 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  stats?: CacheStats,
    if (stats) stats.hits++;
  logger.debug('Cache miss', { file: relativePath });
  if (stats) stats.misses++;
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  const stats: CacheStats = { hits: 0, misses: 0 };
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:47:12

### 📊 Resumen
- **Total archivos:** 11
- **📝 Nuevos:** 3
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +416
- **Líneas eliminadas:** -212
- **Balance neto:** +204 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +301 | -27 | +274 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +21 | -2 | +19 |
| ✏️ | `src/tools/get-project-context.ts` | +9 | -1 | +8 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (11)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+301 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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

The MCP server `mcp-context-cache` is available. Use it as the **primary method**
to read project files instead of calling `read_file` or `semantic_search` on individual files.

## Rules

1. At the start of any coding task, if the workspace has a `contextcache.json`, call
   `get_context_from_config` with the absolute project root path **before** reading any files.
2. When you need to understand a module or directory, use `get_directory_context`
   instead of reading files one by one.
3. When you need specific files, use `get_project_context` with the list of paths
   instead of calling `read_file` repeatedly.
4. Only fall back to `read_file` if `mcp-context-cache` tools return an error
   or the file is outside the project root.
5. If a bundle response contains `BUNDLE_TRUNCATED`, call `get_project_context`
   with the listed omitted paths to retrieve them.

## Tool reference

- `get_context_from_config`  →  `{ "projectRoot": "<absolute-path>" }`
- `get_project_context`      →  `{ "paths": ["rel/path.ts", ...], "projectRoot": "<absolute-path>" }`
- `get_directory_context`    →  `{ "rootPath": "<absolute-path-to-dir>" }`

## Priority order

1. `get_context_from_config` — when `contextcache.json` exists
2. `get_directory_context`   — when exploring an entire module
3. `get_project_context`     — when specific files are known
4. Built-in `read_file`      — last resort only
```

> The `applyTo: "**"` frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

#### VS Code — Per-project instructions

Create `.github/copilot-instructions.md` at the project root:

```markdown
## Context Loading

Use the `mcp-context-cache` MCP server to read files. Do NOT call `read_file` individually.

- If `contextcache.json` exists → call `get_context_from_config` with `projectRoot` first.
- To explore a directory → call `get_directory_context`.
- To load specific files → call `get_project_context` with a `paths` array.
- Only fall back to `read_file` if the MCP tool fails.
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

---

## Security

The following are **always blocked** regardless of `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary extensions (`.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.)

Paths outside `allowedPaths` are rejected. The server never follows symlinks outside the allowed tree.
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

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+21 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  stats?: CacheStats,
    if (stats) stats.hits++;
  logger.debug('Cache miss', { file: relativePath });
  if (stats) stats.misses++;
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  const stats: CacheStats = { hits: 0, misses: 0 };
        const block = await processFileToBlock(instructionFile, relativePath, cache, logger, stats);
      const block = await processFileToBlock(absolutePath, relativePath, cache, logger, stats);
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits: stats.hits,
    cacheMisses: stats.misses,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+9 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

---

## 🕐 14/05/2026, 19:47:25

### 📊 Resumen
- **Total archivos:** 11
- **📝 Nuevos:** 3
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +423
- **Líneas eliminadas:** -212
- **Balance neto:** +211 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +301 | -27 | +274 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +21 | -2 | +19 |
| ✏️ | `src/tools/get-project-context.ts` | +16 | -1 | +15 |
| ✏️ | `src/tools/get-directory-context.ts` | +7 | -0 | +7 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (11)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+301 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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

The MCP server `mcp-context-cache` is available. Use it as the **primary method**
to read project files instead of calling `read_file` or `semantic_search` on individual files.

## Rules

1. At the start of any coding task, if the workspace has a `contextcache.json`, call
   `get_context_from_config` with the absolute project root path **before** reading any files.
2. When you need to understand a module or directory, use `get_directory_context`
   instead of reading files one by one.
3. When you need specific files, use `get_project_context` with the list of paths
   instead of calling `read_file` repeatedly.
4. Only fall back to `read_file` if `mcp-context-cache` tools return an error
   or the file is outside the project root.
5. If a bundle response contains `BUNDLE_TRUNCATED`, call `get_project_context`
   with the listed omitted paths to retrieve them.

## Tool reference

- `get_context_from_config`  →  `{ "projectRoot": "<absolute-path>" }`
- `get_project_context`      →  `{ "paths": ["rel/path.ts", ...], "projectRoot": "<absolute-path>" }`
- `get_directory_context`    →  `{ "rootPath": "<absolute-path-to-dir>" }`

## Priority order

1. `get_context_from_config` — when `contextcache.json` exists
2. `get_directory_context`   — when exploring an entire module
3. `get_project_context`     — when specific files are known
4. Built-in `read_file`      — last resort only
```

> The `applyTo: "**"` frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

#### VS Code — Per-project instructions

Create `.github/copilot-instructions.md` at the project root:

```markdown
## Context Loading

Use the `mcp-context-cache` MCP server to read files. Do NOT call `read_file` individually.

- If `contextcache.json` exists → call `get_context_from_config` with `projectRoot` first.
- To explore a directory → call `get_directory_context`.
- To load specific files → call `get_project_context` with a `paths` array.
- Only fall back to `read_file` if the MCP tool fails.
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

---

## Security

The following are **always blocked** regardless of `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary extensions (`.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.)

Paths outside `allowedPaths` are rejected. The server never follows symlinks outside the allowed tree.
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

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+21 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  stats?: CacheStats,
    if (stats) stats.hits++;
  logger.debug('Cache miss', { file: relativePath });
  if (stats) stats.misses++;
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  const stats: CacheStats = { hits: 0, misses: 0 };
        const block = await processFileToBlock(instructionFile, relativePath, cache, logger, stats);
      const block = await processFileToBlock(absolutePath, relativePath, cache, logger, stats);
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits: stats.hits,
    cacheMisses: stats.misses,
  });

```

**src/tools/get-directory-context.ts** (+7 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
  });

```

**src/tools/get-project-context.ts** (+16 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

---

## 🕐 14/05/2026, 19:47:39

### 📊 Resumen
- **Total archivos:** 11
- **📝 Nuevos:** 3
- **✏️ Modificados:** 7
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +430
- **Líneas eliminadas:** -212
- **Balance neto:** +218 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +301 | -27 | +274 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +21 | -2 | +19 |
| ✏️ | `src/tools/get-project-context.ts` | +16 | -1 | +15 |
| ✏️ | `src/tools/get-directory-context.ts` | +14 | -0 | +14 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (11)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+301 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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

The MCP server `mcp-context-cache` is available. Use it as the **primary method**
to read project files instead of calling `read_file` or `semantic_search` on individual files.

## Rules

1. At the start of any coding task, if the workspace has a `contextcache.json`, call
   `get_context_from_config` with the absolute project root path **before** reading any files.
2. When you need to understand a module or directory, use `get_directory_context`
   instead of reading files one by one.
3. When you need specific files, use `get_project_context` with the list of paths
   instead of calling `read_file` repeatedly.
4. Only fall back to `read_file` if `mcp-context-cache` tools return an error
   or the file is outside the project root.
5. If a bundle response contains `BUNDLE_TRUNCATED`, call `get_project_context`
   with the listed omitted paths to retrieve them.

## Tool reference

- `get_context_from_config`  →  `{ "projectRoot": "<absolute-path>" }`
- `get_project_context`      →  `{ "paths": ["rel/path.ts", ...], "projectRoot": "<absolute-path>" }`
- `get_directory_context`    →  `{ "rootPath": "<absolute-path-to-dir>" }`

## Priority order

1. `get_context_from_config` — when `contextcache.json` exists
2. `get_directory_context`   — when exploring an entire module
3. `get_project_context`     — when specific files are known
4. Built-in `read_file`      — last resort only
```

> The `applyTo: "**"` frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

#### VS Code — Per-project instructions

Create `.github/copilot-instructions.md` at the project root:

```markdown
## Context Loading

Use the `mcp-context-cache` MCP server to read files. Do NOT call `read_file` individually.

- If `contextcache.json` exists → call `get_context_from_config` with `projectRoot` first.
- To explore a directory → call `get_directory_context`.
- To load specific files → call `get_project_context` with a `paths` array.
- Only fall back to `read_file` if the MCP tool fails.
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

---

## Security

The following are **always blocked** regardless of `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary extensions (`.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.)

Paths outside `allowedPaths` are rejected. The server never follows symlinks outside the allowed tree.
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

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/tools/get-context-from-config.ts** (+21 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  stats?: CacheStats,
    if (stats) stats.hits++;
  logger.debug('Cache miss', { file: relativePath });
  if (stats) stats.misses++;
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  const stats: CacheStats = { hits: 0, misses: 0 };
        const block = await processFileToBlock(instructionFile, relativePath, cache, logger, stats);
      const block = await processFileToBlock(absolutePath, relativePath, cache, logger, stats);
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits: stats.hits,
    cacheMisses: stats.misses,
  });

```

**src/tools/get-directory-context.ts** (+14 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

**src/tools/get-project-context.ts** (+16 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

---

## 🕐 14/05/2026, 19:47:50

### 📊 Resumen
- **Total archivos:** 12
- **📝 Nuevos:** 3
- **✏️ Modificados:** 8
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +434
- **Líneas eliminadas:** -215
- **Balance neto:** +219 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +301 | -27 | +274 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +21 | -2 | +19 |
| ✏️ | `src/tools/get-project-context.ts` | +16 | -1 | +15 |
| ✏️ | `src/tools/get-directory-context.ts` | +14 | -0 | +14 |
| ✏️ | `src/logger/logger.ts` | +4 | -3 | +1 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (12)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
src/logger/logger.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+301 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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

The MCP server `mcp-context-cache` is available. Use it as the **primary method**
to read project files instead of calling `read_file` or `semantic_search` on individual files.

## Rules

1. At the start of any coding task, if the workspace has a `contextcache.json`, call
   `get_context_from_config` with the absolute project root path **before** reading any files.
2. When you need to understand a module or directory, use `get_directory_context`
   instead of reading files one by one.
3. When you need specific files, use `get_project_context` with the list of paths
   instead of calling `read_file` repeatedly.
4. Only fall back to `read_file` if `mcp-context-cache` tools return an error
   or the file is outside the project root.
5. If a bundle response contains `BUNDLE_TRUNCATED`, call `get_project_context`
   with the listed omitted paths to retrieve them.

## Tool reference

- `get_context_from_config`  →  `{ "projectRoot": "<absolute-path>" }`
- `get_project_context`      →  `{ "paths": ["rel/path.ts", ...], "projectRoot": "<absolute-path>" }`
- `get_directory_context`    →  `{ "rootPath": "<absolute-path-to-dir>" }`

## Priority order

1. `get_context_from_config` — when `contextcache.json` exists
2. `get_directory_context`   — when exploring an entire module
3. `get_project_context`     — when specific files are known
4. Built-in `read_file`      — last resort only
```

> The `applyTo: "**"` frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

#### VS Code — Per-project instructions

Create `.github/copilot-instructions.md` at the project root:

```markdown
## Context Loading

Use the `mcp-context-cache` MCP server to read files. Do NOT call `read_file` individually.

- If `contextcache.json` exists → call `get_context_from_config` with `projectRoot` first.
- To explore a directory → call `get_directory_context`.
- To load specific files → call `get_project_context` with a `paths` array.
- Only fall back to `read_file` if the MCP tool fails.
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

---

## Security

The following are **always blocked** regardless of `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary extensions (`.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.)

Paths outside `allowedPaths` are rejected. The server never follows symlinks outside the allowed tree.
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

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/logger/logger.ts** (+4 líneas)**

```
  readonly logPath: string;
    this.logPath = logPath ?? DEFAULT_LOG_PATH;
      fs.mkdirSync(path.dirname(this.logPath), { recursive: true });
      this.logFile = fs.createWriteStream(this.logPath, { flags: 'a' });
```

**src/tools/get-context-from-config.ts** (+21 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  stats?: CacheStats,
    if (stats) stats.hits++;
  logger.debug('Cache miss', { file: relativePath });
  if (stats) stats.misses++;
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  const stats: CacheStats = { hits: 0, misses: 0 };
        const block = await processFileToBlock(instructionFile, relativePath, cache, logger, stats);
      const block = await processFileToBlock(absolutePath, relativePath, cache, logger, stats);
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits: stats.hits,
    cacheMisses: stats.misses,
  });

```

**src/tools/get-directory-context.ts** (+14 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

**src/tools/get-project-context.ts** (+16 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

---

## 🕐 14/05/2026, 19:48:01

### 📊 Resumen
- **Total archivos:** 13
- **📝 Nuevos:** 3
- **✏️ Modificados:** 9
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +435
- **Líneas eliminadas:** -215
- **Balance neto:** +220 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +301 | -27 | +274 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +21 | -2 | +19 |
| ✏️ | `src/tools/get-project-context.ts` | +16 | -1 | +15 |
| ✏️ | `src/tools/get-directory-context.ts` | +14 | -0 | +14 |
| ✏️ | `src/logger/logger.ts` | +4 | -3 | +1 |
| ✏️ | `src/server.ts` | +1 | -0 | +1 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (13)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
src/logger/logger.ts
src/server.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+301 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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

The MCP server `mcp-context-cache` is available. Use it as the **primary method**
to read project files instead of calling `read_file` or `semantic_search` on individual files.

## Rules

1. At the start of any coding task, if the workspace has a `contextcache.json`, call
   `get_context_from_config` with the absolute project root path **before** reading any files.
2. When you need to understand a module or directory, use `get_directory_context`
   instead of reading files one by one.
3. When you need specific files, use `get_project_context` with the list of paths
   instead of calling `read_file` repeatedly.
4. Only fall back to `read_file` if `mcp-context-cache` tools return an error
   or the file is outside the project root.
5. If a bundle response contains `BUNDLE_TRUNCATED`, call `get_project_context`
   with the listed omitted paths to retrieve them.

## Tool reference

- `get_context_from_config`  →  `{ "projectRoot": "<absolute-path>" }`
- `get_project_context`      →  `{ "paths": ["rel/path.ts", ...], "projectRoot": "<absolute-path>" }`
- `get_directory_context`    →  `{ "rootPath": "<absolute-path-to-dir>" }`

## Priority order

1. `get_context_from_config` — when `contextcache.json` exists
2. `get_directory_context`   — when exploring an entire module
3. `get_project_context`     — when specific files are known
4. Built-in `read_file`      — last resort only
```

> The `applyTo: "**"` frontmatter tells VS Code Copilot to inject this file into every conversation regardless of the active workspace.

#### VS Code — Per-project instructions

Create `.github/copilot-instructions.md` at the project root:

```markdown
## Context Loading

Use the `mcp-context-cache` MCP server to read files. Do NOT call `read_file` individually.

- If `contextcache.json` exists → call `get_context_from_config` with `projectRoot` first.
- To explore a directory → call `get_directory_context`.
- To load specific files → call `get_project_context` with a `paths` array.
- Only fall back to `read_file` if the MCP tool fails.
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

---

## Security

The following are **always blocked** regardless of `contextcache.json`:

- `.env`, `.env.*`, `credentials.json`, `*.pem`, `id_rsa`, `id_ed25519`
- `*.key`, `private.key`, `secret*`, `secrets.json`, `token*`
- `service-account.json`, `.npmrc`, `.pypirc`
- All binary extensions (`.exe`, `.dll`, `.png`, `.zip`, `.wasm`, etc.)

Paths outside `allowedPaths` are rejected. The server never follows symlinks outside the allowed tree.
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

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/logger/logger.ts** (+4 líneas)**

```
  readonly logPath: string;
    this.logPath = logPath ?? DEFAULT_LOG_PATH;
      fs.mkdirSync(path.dirname(this.logPath), { recursive: true });
      this.logFile = fs.createWriteStream(this.logPath, { flags: 'a' });
```

**src/server.ts** (+1 línea)**

```
    this.logger.info('Log file', { path: this.logger.logPath });
```

**src/tools/get-context-from-config.ts** (+21 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  stats?: CacheStats,
    if (stats) stats.hits++;
  logger.debug('Cache miss', { file: relativePath });
  if (stats) stats.misses++;
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  const stats: CacheStats = { hits: 0, misses: 0 };
        const block = await processFileToBlock(instructionFile, relativePath, cache, logger, stats);
      const block = await processFileToBlock(absolutePath, relativePath, cache, logger, stats);
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits: stats.hits,
    cacheMisses: stats.misses,
  });

```

**src/tools/get-directory-context.ts** (+14 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

**src/tools/get-project-context.ts** (+16 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

---

## 🕐 14/05/2026, 19:51:21

### 📊 Resumen
- **Total archivos:** 13
- **📝 Nuevos:** 3
- **✏️ Modificados:** 9
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +442
- **Líneas eliminadas:** -215
- **Balance neto:** +227 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +308 | -27 | +281 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +21 | -2 | +19 |
| ✏️ | `src/tools/get-project-context.ts` | +16 | -1 | +15 |
| ✏️ | `src/tools/get-directory-context.ts` | +14 | -0 | +14 |
| ✏️ | `src/logger/logger.ts` | +4 | -3 | +1 |
| ✏️ | `src/server.ts` | +1 | -0 | +1 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (13)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
src/logger/logger.ts
src/server.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+308 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
## Context Loading

Use the `mcp-context-cache` MCP server to read files. Do NOT call `read_file` individually.

- If `contextcache.json` exists → call `get_context_from_config` with `projectRoot` first.
- To explore a directory → call `get_directory_context`.
- To load specific files → call `get_project_context` with a `paths` array.
- Only fall back to `read_file` if the MCP tool fails.
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
```

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/logger/logger.ts** (+4 líneas)**

```
  readonly logPath: string;
    this.logPath = logPath ?? DEFAULT_LOG_PATH;
      fs.mkdirSync(path.dirname(this.logPath), { recursive: true });
      this.logFile = fs.createWriteStream(this.logPath, { flags: 'a' });
```

**src/server.ts** (+1 línea)**

```
    this.logger.info('Log file', { path: this.logger.logPath });
```

**src/tools/get-context-from-config.ts** (+21 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  stats?: CacheStats,
    if (stats) stats.hits++;
  logger.debug('Cache miss', { file: relativePath });
  if (stats) stats.misses++;
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  const stats: CacheStats = { hits: 0, misses: 0 };
        const block = await processFileToBlock(instructionFile, relativePath, cache, logger, stats);
      const block = await processFileToBlock(absolutePath, relativePath, cache, logger, stats);
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits: stats.hits,
    cacheMisses: stats.misses,
  });

```

**src/tools/get-directory-context.ts** (+14 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

**src/tools/get-project-context.ts** (+16 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

---

## 🕐 14/05/2026, 19:51:28

### 📊 Resumen
- **Total archivos:** 13
- **📝 Nuevos:** 3
- **✏️ Modificados:** 9
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +449
- **Líneas eliminadas:** -215
- **Balance neto:** +234 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +315 | -27 | +288 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +21 | -2 | +19 |
| ✏️ | `src/tools/get-project-context.ts` | +16 | -1 | +15 |
| ✏️ | `src/tools/get-directory-context.ts` | +14 | -0 | +14 |
| ✏️ | `src/logger/logger.ts` | +4 | -3 | +1 |
| ✏️ | `src/server.ts` | +1 | -0 | +1 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (13)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
src/logger/logger.ts
src/server.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+315 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
```

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/logger/logger.ts** (+4 líneas)**

```
  readonly logPath: string;
    this.logPath = logPath ?? DEFAULT_LOG_PATH;
      fs.mkdirSync(path.dirname(this.logPath), { recursive: true });
      this.logFile = fs.createWriteStream(this.logPath, { flags: 'a' });
```

**src/server.ts** (+1 línea)**

```
    this.logger.info('Log file', { path: this.logger.logPath });
```

**src/tools/get-context-from-config.ts** (+21 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  stats?: CacheStats,
    if (stats) stats.hits++;
  logger.debug('Cache miss', { file: relativePath });
  if (stats) stats.misses++;
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  const stats: CacheStats = { hits: 0, misses: 0 };
        const block = await processFileToBlock(instructionFile, relativePath, cache, logger, stats);
      const block = await processFileToBlock(absolutePath, relativePath, cache, logger, stats);
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits: stats.hits,
    cacheMisses: stats.misses,
  });

```

**src/tools/get-directory-context.ts** (+14 líneas)**

```
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

**src/tools/get-project-context.ts** (+16 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

---

## 🕐 14/05/2026, 19:52:21

### 📊 Resumen
- **Total archivos:** 13
- **📝 Nuevos:** 3
- **✏️ Modificados:** 9
- **🗑️ Eliminados:** 1
- **Líneas añadidas:** +450
- **Líneas eliminadas:** -216
- **Balance neto:** +234 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `.github/copilot-instructions.md` | nuevo | -0 | 0 |
| 🆕 | `contextcache.json` | nuevo | -0 | 0 |
| 🆕 | `scripts/invoke-tools.mjs` | nuevo | -0 | 0 |
| ✏️ | `README.md` | +315 | -27 | +288 |
| ✏️ | `.copilot-instructions.md` | +0 | -104 | -104 |
| ✏️ | `docs/CONTEXTCACHE_SPEC.md` | +47 | -47 | 0 |
| ✏️ | `docs/AGENT_INSTRUCTIONS.md` | +31 | -31 | 0 |
| ✏️ | `src/tools/get-context-from-config.ts` | +21 | -2 | +19 |
| ✏️ | `src/tools/get-project-context.ts` | +16 | -1 | +15 |
| ✏️ | `src/tools/get-directory-context.ts` | +15 | -1 | +14 |
| ✏️ | `src/logger/logger.ts` | +4 | -3 | +1 |
| ✏️ | `src/server.ts` | +1 | -0 | +1 |
| 🗑️ | `.copilot-instructions.md` | +0 | eliminado | 0 |

### 📁 Lista completa

<details>
<summary>Ver todos los archivos (13)</summary>

**🆕 Nuevos:**
```
.github/copilot-instructions.md
contextcache.json
scripts/invoke-tools.mjs
```

**✏️ Modificados:**
```
README.md
.copilot-instructions.md
docs/CONTEXTCACHE_SPEC.md
docs/AGENT_INSTRUCTIONS.md
src/tools/get-context-from-config.ts
src/tools/get-project-context.ts
src/tools/get-directory-context.ts
src/logger/logger.ts
src/server.ts
```

**🗑️ Eliminados:**
```
.copilot-instructions.md
```

</details>

### 💻 Código Añadido

**README.md** (+315 líneas)**

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
# No install needed — run directly
npx @jdug-jadodev/mcp-context-cache --init
# Or install globally
npm install -g @jdug-jadodev/mcp-context-cache
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
      "command": "npx",
      "args": ["-y", "@jdug-jadodev/mcp-context-cache"]
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
```

**docs/AGENT_INSTRUCTIONS.md** (+31 líneas)**

```
# Instrucciones para Agentes — mcp-context-cache
Este documento explica cómo los agentes de IA (GitHub Copilot, Cline, Cody, etc.) deben usar el servidor MCP `mcp-context-cache`.
## Herramientas disponibles
**Cuándo usarla:** Cuando necesitas cargar archivos específicos en el contexto. Es ideal para cargas dirigidas cuando ya conoces los archivos relevantes.
  "projectRoot": "/ruta/al/proyecto"
**Cuándo usarla:** Cuando necesitas todos los archivos de un directorio (por ejemplo, un módulo de funcionalidad). Es útil para explorar o comprender un módulo completo.
  "rootPath": "/ruta/al/proyecto/src/auth",
**Cuándo usarla:** Cuando el proyecto tiene un `contextcache.json` y quieres obtener el contexto curado completo del proyecto. Es la opción recomendada al iniciar una sesión para cargar todo lo que el autor del proyecto consideró relevante.
  "projectRoot": "/ruta/al/proyecto"
## Configuración del IDE
Añade esto a tu archivo de instrucciones de Copilot para guiar al agente:
## Carga de contexto
Usa las herramientas MCP de `mcp-context-cache` para cargar archivos del proyecto:
- `get_context_from_config` con `projectRoot: "<ruta-absoluta>"` para cargar el contexto completo del proyecto al iniciar la sesión
- `get_project_context` con `paths` específicos cuando necesites archivos concretos
- `get_directory_context` con `rootPath` para explorar un módulo
Cuando veas `BUNDLE_TRUNCATED`, usa `get_project_context` con las rutas de los archivos omitidos para obtenerlos.
## Manejo de `BUNDLE_TRUNCATED`
Cuando una respuesta contiene `BUNDLE_TRUNCATED`, el contexto era demasiado grande para caber en el límite configurado. El mensaje incluye:
- El límite de tamaño configurado
- El tamaño total real
- La lista de archivos omitidos en orden alfabético
**Cómo manejarlo:** Usa `get_project_context` con las rutas de los archivos omitidos para cargarlos en una llamada posterior:
  "projectRoot": "/ruta/al/proyecto"
## Formato de salida de referencia
Los archivos siempre se ordenan alfabéticamente por la ruta relativa para obtener una salida determinista.
## Comportamiento de la caché
- Los archivos se identifican por su hash SHA-256
- Si un archivo no ha cambiado, se reutiliza el bloque cacheado (no se lee del disco)
- La caché es en memoria y por proceso del servidor (se borra al reiniciar)
- Los archivos grandes que exceden `maxEntrySizeKb` nunca se almacenan en la caché (se sirven, pero no se cachean)
```

**docs/CONTEXTCACHE_SPEC.md** (+47 líneas)**

```
# Especificación de `contextcache.json`
Referencia completa de todos los campos soportados en `contextcache.json`.
## Objeto raíz
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `modules` | `ModuleConfig[]` | `[]` | Lista de módulos del proyecto a incluir |
| `globalInstructions` | `string` | — | Ruta a un archivo de instrucciones global (relativa a la raíz del proyecto). Se incluye al principio de cada bundle de contexto. |
| `maxTotalSizeKb` | `number` | `2048` | Tamaño máximo total del bundle en KB antes de truncar |
| `cache` | `CacheConfig` | ver abajo | Configuración del comportamiento de la caché |
| `security` | `SecurityConfig` | ver abajo | Reglas de validación de seguridad |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |
### Ejemplos de `excludePatterns`
### Orden de búsqueda de archivos de instrucciones
Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:
Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |
| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `allowedPaths` | `string[]` | `["./"]` | Solo se permiten archivos bajo estas rutas. Usa `["./"]` para permitir todos los archivos bajo la raíz del proyecto. |
| `deniedPaths` | `string[]` | `[]` | Los archivos bajo estas rutas siempre están denegados. Tiene prioridad sobre `allowedPaths`. |
| `deniedFiles` | `string[]` | `[]` | Patrones de nombres de archivo a denegar. Admite `*` como comodín (por ejemplo, `"*.local.ts"`). |
| `maxFileSizeKb` | `number` | `500` | Tamaño máximo de archivo en KB. Los archivos más grandes son denegados. |
| `allowedExtensions` | `string[]` | `["*"]` | Extensiones de archivo permitidas. Usa `["*"]` para permitir todas las extensiones de texto. Ejemplo: `[".ts", ".js", ".json"]` |
### Orden de ejecución del pipeline de seguridad
Las siguientes comprobaciones se aplican en orden estricto. La primera denegación es la que prevalece:
1. **HARDCODED_BLACKLIST** — Lista interna inmutable de bloqueo (`.env`, `*.pem`, `id_rsa`, `secret*`, etc.). No puede desactivarse mediante la configuración.
2. **BINARY_EXTENSION** — Extensiones de archivos binarios (`.exe`, `.dll`, `.png`, `.zip`, etc.).
3. **DENIED_PATH** — El archivo está bajo una entrada de `deniedPaths`.
4. **NOT_IN_ALLOWED_PATH** — El archivo no está bajo ninguna entrada de `allowedPaths`.
5. **DENIED_FILE_PATTERN** — El nombre del archivo coincide con un patrón de `deniedFiles`.
6. **EXTENSION_NOT_ALLOWED** — La extensión no está en `allowedExtensions` (cuando no es `["*"]`).
7. **FILE_TOO_LARGE** — El archivo excede `maxFileSizeKb`.
8. **MODULE_EXCLUDE_PATTERN** — El archivo coincide con un patrón de exclusión a nivel de módulo (`excludePatterns`).
### Lista de bloqueo hardcoded
Estos patrones están **siempre** bloqueados independientemente de la configuración:
## Ejemplo completo
## Formato de salida del bundle
### Bloque de archivo
### Mensaje de truncamiento (cuando se excede el límite de tamaño)
```

**src/logger/logger.ts** (+4 líneas)**

```
  readonly logPath: string;
    this.logPath = logPath ?? DEFAULT_LOG_PATH;
      fs.mkdirSync(path.dirname(this.logPath), { recursive: true });
      this.logFile = fs.createWriteStream(this.logPath, { flags: 'a' });
```

**src/server.ts** (+1 línea)**

```
    this.logger.info('Log file', { path: this.logger.logPath });
```

**src/tools/get-context-from-config.ts** (+21 líneas)**

```
interface CacheStats {
  hits: number;
  misses: number;
}

  stats?: CacheStats,
    if (stats) stats.hits++;
  logger.debug('Cache miss', { file: relativePath });
  if (stats) stats.misses++;
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig invoked', { projectRoot });
  const stats: CacheStats = { hits: 0, misses: 0 };
        const block = await processFileToBlock(instructionFile, relativePath, cache, logger, stats);
      const block = await processFileToBlock(absolutePath, relativePath, cache, logger, stats);
  logger.info('AI_CONTEXT_USAGE: getContextFromConfig completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits: stats.hits,
    cacheMisses: stats.misses,
  });

```

**src/tools/get-directory-context.ts** (+15 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext invoked', { rootPath });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getDirectoryContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

**src/tools/get-project-context.ts** (+16 líneas)**

```
import { checkFile, DEFAULT_SECURITY_CONFIG } from '../security/security-guard.js';
  logger.info('AI_CONTEXT_USAGE: getProjectContext invoked', { projectRoot, paths: args.paths.length });
    logger.info('AI_CONTEXT_USAGE: getProjectContext no paths provided', { projectRoot });
  let cacheHits = 0;
  let cacheMisses = 0;
      cacheHits++;
      logger.debug('Cache miss', { file: relativePath });
      cacheMisses++;
  logger.info('AI_CONTEXT_USAGE: getProjectContext completed', {
    filesIncluded: result.filesIncluded,
    filesOmitted: result.filesOmitted,
    truncated: result.truncated,
    cacheHits,
    cacheMisses,
  });

```

---
