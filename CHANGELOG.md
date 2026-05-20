## [1.1.0] - 2026-05-19

### Summary

This release adds debugging and export features for the LRU cache and server tools.

### Changes (from `cambios-registro.md`)

```
# 📊 Registro de Cambios con Estadísticas
**Iniciado:** 19/5/2026, 7:26:42 p. m.
**Proyecto:** C:\Users\Usuario\Documents\mcp-context-cache
**Formato:** Archivos nuevos, modificados y eliminados
**Estado:** Monitoreando cambios no commiteados

## 🕐 19/05/2026, 19:26:43

### 📊 Resumen
- **Total archivos:** 6
- **📝 Nuevos:** 3
- **✏️ Modificados:** 3
- **🗑️ Eliminados:** 0
- **Líneas añadidas:** +192
- **Líneas eliminadas:** -6
- **Balance neto:** +186 líneas

### 📝 Detalle por archivo

| Estado | Archivo | Añadidas | Eliminadas | Neto |
|--------|---------|----------|------------|------|
| 🆕 | `src/tools/cache-paths.ts` | nuevo | -0 | 0 |
| 🆕 | `src/tools/clear-cache.ts` | nuevo | -0 | 0 |
| 🆕 | `src/tools/inspect-cache.ts` | nuevo | -0 | 0 |
| ✏️ | `src/server.ts` | +119 | -6 | +113 |
| ✏️ | `src/cache/lru-cache.ts` | +72 | -0 | +72 |
| ✏️ | `src/types.ts` | +1 | -0 | +1 |

### Notas
- Añadido `LRUCache.getAllEntries()` y herramienta `dump_cache`.
- Añadido endpoint HTTP opcional `MCP_CACHE_HTTP_PORT` para debugging local.

```

---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on "Keep a Changelog" and this project adheres to Semantic Versioning.

## [Unreleased]

