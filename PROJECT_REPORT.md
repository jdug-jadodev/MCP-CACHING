# Informe del proyecto: mcp-context-cache

**Resumen**

**Arquitectura principal**

**Impacto en consumo de tokens y ventana de contexto**
- Objetivo principal del cache en este proyecto: mejorar latencia y uso de recursos del servidor (I/O y CPU) al evitar volver a leer y formatear archivos idénticos repetidamente.
- Efecto directo sobre tokens/ventana de contexto (LLM): en la implementación actual el servicio devuelve los bloques formateados (`BUNDLE_START`...`BUNDLE_END`) dentro del contenido del `BundleResult`. Eso significa que si el cliente/agent incluye ese contenido en una llamada al modelo, los tokens consumidos siguen representando el tamaño del bloque. Por tanto, el cache por sí sólo no reduce automáticamente los tokens enviados al modelo en cada petición.
- Cómo puede ayudar indirectamente a reducir tokens y optimizar la ventana de contexto:
  - Evitar re-procesado: al detectar que un archivo no ha cambiado (fingerprint igual) el servidor puede evitar rehacer trabajo costoso y responder más rápido al agente.
  - Estrategias adicionales (recomendadas) para reducir tokens:
    - Enviar sólo fingerprints o metadatos cuando el agente ya tenga el bloque previamente (p. ej. `fingerprint: abc123`), y dejar que el cliente decida si necesita el bloque completo.
    - Mantener un protocolo de sincronización incremental (solo diffs o archivos nuevos/modificados) para evitar re-enviar archivos idénticos en llamadas repetidas.
    - Separar instrucciones globales/modulares y entregarlas una única vez; luego enviar sólo referencias o fingerprints en requests posteriores.
    - Comprimir o truncar bloques grandes según la política de `maxTotalSizeKb` y enviar solo lo necesario para el prompt.

**Cómo saber que un archivo está cacheado (comprobación práctica)**
- Logs: el sistema ahora registra eventos de cache. Buscar en logs las líneas:

  - Ejemplo de `info` cuando se sirve desde cache:

    [ISO_TIMESTAMP] [INFO] Cache hit {"file":"ruta/relativa/al/archivo"}

  - Ejemplo al almacenar en cache:

    [ISO_TIMESTAMP] [INFO] Cached file {"file":"C:\\absolute\\path\\to\\file"}

  - Ejemplo al expulsar (LRU):

    [ISO_TIMESTAMP] [INFO] Evicted from cache {"file":"C:\\absolute\\path\\to\\evicted"}

  - Ejemplo al omitir por tamaño:

    [ISO_TIMESTAMP] [WARN] Skipped caching file (too large) {"file":"C:\\absolute\\path\\to\\bigfile"}

- Ver logs en tiempo real (PowerShell):

```powershell
Get-Content $env:USERPROFILE\\.mcp-context-cache\\logs\\server.log -Wait
```

- Alternativa: agregar una herramienta/endpoint de inspección de cache que liste claves y metadatos (fingerprint, size, lastUsed). Esto facilita comprobar estado sin leer logs.

**Recomendación final**
- Si el objetivo principal es reducir tokens y mejorar el uso de la ventana de contexto del modelo, conviene añadir una capa de protocolo entre el servidor y el agente que use fingerprints/referencias y sincronización incremental. La caché actual ya proporciona la base para esa optimización porque permite saber rápidamente cuándo un fichero no ha cambiado.

**Cómo funciona la caché**

**Seguridad y límites**
 
 **Diagrama**
 - Aquí se añadirá un diagrama que ilustra el flujo de trabajo del sistema.

```mermaid
flowchart LR
  subgraph AgentSide [Agente / Cliente]
    A[Agent] -->|request paths| B[MCP Client]
  end

  subgraph MCPServer [mcp-context-cache]
    B -->|MCP tool call| C[Server]
    C --> D[LRU Cache]
    D -- hit --> C
    D -- miss --> E[Filesystem]
    E --> F[Formatter]
    F --> C
    C -->|bundle result| B
    C --> G[Logger]
    G --> H[server.log]
  end

  subgraph LLM [Modelo / Ventana de Contexto]
    B -->|include full blocks| L1[LLM_many_tokens]
    B -->|fingerprints only (opt)| L2[LLM_few_tokens]
  end

  classDef server fill:#f9f,stroke:#333,stroke-width:1px;
  class C server;
```

**Explicación del diagrama**
- El `Agent` solicita rutas al `mcp-context-cache` a través del cliente MCP.
- El `Server` comprueba la `LRU Cache` por `fingerprint`:
  - Si hay `hit`, retorna inmediatamente el bloque formateado.
  - Si hay `miss`, lee del filesystem, formatea y almacena en cache.
- El `Logger` registra eventos (hit/set/evict/skip) en `server.log`.
- Para el modelo (LLM): enviar bloques completos consume muchos tokens; enviar solo `fingerprints` o referencias reduce tokens y aprovecha la caché para evitar re-envíos.

**Ahorro de tokens (resumen)**
- Sin protocolos adicionales: la caché acelera la respuesta del servidor pero NO reduce automáticamente los tokens enviados al LLM — el cliente sigue enviando los bloques completos si así lo implementa.
- Con protocolo de fingerprints/referencias: el cliente puede pedir solo fingerprints y solo solicitar bloques completos cuando el LLM los necesite — esto reduce drásticamente tokens enviados y mejora la ventana de contexto efectiva.

 
- El `LRUCache` tiene un `maxEntrySizeKb` por entrada (por defecto 4096KB) y `maxEntries` (por defecto 10000), ambos configurables al crear el servidor o vía `contextcache.json` cuando esté implementado.
- Mensajes relevantes añadidos:
  - `Cache hit` (`info`) cuando un fichero es servido desde cache.
  - `Cached file` (`info`) al almacenar una entrada.
  - `Evicted from cache` (`info`) al expulsar una entrada LRU.
  - `Skipped caching file (too large)` (`warn`) cuando un bloque excede el máximo por entrada.
- Ubicación del fichero de log (Windows): `%USERPROFILE%\.mcp-context-cache\logs\server.log`.

**Cómo ejecutar (desarrollo)**
1. Instalar dependencias:
```bash
pnpm install
```
2. Compilar:
```bash
pnpm build
```
3. Ejecutar:
```bash
node ./dist/index.js
```
4. Ver logs en PowerShell:
```powershell
Get-Content $env:USERPROFILE\.mcp-context-cache\logs\server.log -Wait
```

**Pruebas**
- Hay tests en `tests/`. Ejecutar `pnpm test` para correr la suite.

**Cómo ajustar límites de caché y seguridad**
- Temporalmente: modificar los valores por defecto en `src/server.ts` (constructor de `ContextCacheServer`) o pasarlos al crear la instancia.
- Permanente/por proyecto: usar `contextcache.json` (la herramienta `get_context_from_config` ya lee configuración si existe). Ver `src/config/config-loader.ts`.

**Notas de desarrollo / próximos pasos recomendados**
- Exponer los límites de cache y el nivel de logs mediante variables de entorno o argumentos CLI.
- Añadir métricas de uso (nº hits, misses, tamaño total en cache) y endpoint para inspección.
- Persistencia opcional: respaldar cache en disco para reinicios.

Archivo creado: `PROJECT_REPORT.md` en la raíz del proyecto.
