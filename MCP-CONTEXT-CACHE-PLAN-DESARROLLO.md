# Plan de Desarrollo — `mcp-context-cache`
> Servidor MCP de Caché de Contexto para Agentes de IA  
> Versión del plan: 1.0 | Basado en: `CACHING-MCP.md`

---

## Índice

1. [Prerequisitos](#1-prerequisitos)
2. [Estructura del Repositorio](#2-estructura-del-repositorio)
3. [Fase 1 — Configuración del Proyecto](#fase-1--configuración-del-proyecto)
4. [Fase 2 — Tipos e Interfaces Base](#fase-2--tipos-e-interfaces-base)
5. [Fase 3 — Sistema de Seguridad](#fase-3--sistema-de-seguridad)
6. [Fase 4 — Caché LRU en Memoria](#fase-4--caché-lru-en-memoria)
7. [Fase 5 — Herramienta `get_project_context`](#fase-5--herramienta-get_project_context)
8. [Fase 6 — Herramienta `get_directory_context`](#fase-6--herramienta-get_directory_context)
9. [Fase 7 — Herramienta `get_context_from_config`](#fase-7--herramienta-get_context_from_config)
10. [Fase 8 — Servidor MCP Principal](#fase-8--servidor-mcp-principal)
11. [Fase 9 — Comando `--init`](#fase-9--comando---init)
12. [Fase 10 — Logging](#fase-10--logging)
13. [Fase 11 — Pruebas](#fase-11--pruebas)
14. [Fase 12 — Empaquetado y Publicación](#fase-12--empaquetado-y-publicación)
15. [Contratos de Datos Clave](#contratos-de-datos-clave)
16. [Criterios de Aceptación por Fase](#criterios-de-aceptación-por-fase)

---

## 1. Prerequisitos

Antes de comenzar, verificar que el entorno cumple lo siguiente:

| Requisito | Versión mínima | Verificación |
|-----------|---------------|--------------|
| Node.js | 18.x | `node --version` |
| pnpm | 11.x | `pnpm --version` |
| TypeScript | 5.x | instalado como devDependency |
| Git | cualquiera | `git --version` |
| Cuenta GitHub | con permisos de escritura al repo | — |

---

## 2. Estructura del Repositorio

Crear esta estructura exacta antes de codificar:

```
mcp-context-cache/
├── src/
│   ├── index.ts                  # Punto de entrada (bin)
│   ├── server.ts                 # ContextCacheServer (clase principal MCP)
│   ├── cache/
│   │   └── lru-cache.ts          # Implementación LRU en memoria
│   ├── security/
│   │   └── security-guard.ts     # Pipeline de reglas de seguridad
│   ├── tools/
│   │   ├── get-project-context.ts
│   │   ├── get-directory-context.ts
│   │   └── get-context-from-config.ts
│   ├── formatter/
│   │   └── bundle-formatter.ts   # Formato BUNDLE_START/END + truncado
│   ├── config/
│   │   └── config-loader.ts      # Lectura y validación de contextcache.json
│   ├── logger/
│   │   └── logger.ts             # Sistema de log configurable
│   └── init/
│       └── init-command.ts       # Lógica del comando --init
├── tests/
│   ├── security.test.ts
│   ├── lru-cache.test.ts
│   ├── bundle-formatter.test.ts
│   ├── get-project-context.test.ts
│   ├── get-directory-context.test.ts
│   └── get-context-from-config.test.ts
├── docs/
│   ├── README.md
│   ├── AGENT_INSTRUCTIONS.md
│   └── CONTEXTCACHE_SPEC.md
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── .github/
    └── workflows/
        └── publish.yml
```

---

## Fase 1 — Configuración del Proyecto

**Objetivo:** Repositorio listo para desarrollar, con todas las herramientas configuradas.

### Paso 1.1 — Inicializar repositorio y paquete

```bash
mkdir mcp-context-cache && cd mcp-context-cache
git init
pnpm init
```

### Paso 1.2 — Instalar dependencias de producción

```bash
pnpm add @modelcontextprotocol/sdk glob fast-glob
```

| Paquete | Uso |
|---------|-----|
| `@modelcontextprotocol/sdk` | Servidor MCP base con transporte stdio |
| `glob` / `fast-glob` | Recorrido de directorios con patrones |

### Paso 1.3 — Instalar dependencias de desarrollo

```bash
pnpm add -D typescript @types/node tsx vitest \
  eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin \
  prettier eslint-config-prettier
```

### Paso 1.4 — Configurar `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}
```

### Paso 1.5 — Configurar `package.json`

```json
{
  "name": "@tu-org/mcp-context-cache",
  "version": "1.0.0",
  "description": "MCP server for AI agent context caching",
  "type": "module",
  "bin": {
    "mcp-context-cache": "dist/index.js"
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsx src/index.ts",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint": "eslint src/**/*.ts",
    "prepublish": "pnpm build"
  },
  "files": ["dist", "README.md"],
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### Paso 1.6 — Crear `.eslintrc.json` y `.prettierrc`

`.eslintrc.json`:
```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "warn"
  }
}
```

`.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

**✅ Criterio de aceptación:** `pnpm build` compila sin errores. `pnpm test` no falla (aún sin tests).

---

## Fase 2 — Tipos e Interfaces Base

**Archivo:** `src/types.ts`  
**Objetivo:** Centralizar todos los tipos TypeScript antes de implementar módulos.

```typescript
// src/types.ts

export interface CacheEntry {
  fingerprint: string;   // SHA-256 del archivo
  block: string;         // Bloque formateado BUNDLE_START...BUNDLE_END
}

export interface LRUCacheOptions {
  maxEntries: number;        // default: 5000
  maxEntrySizeKb: number;    // default: 1024
}

export interface SecurityConfig {
  allowedPaths: string[];    // default: ["./"]
  deniedPaths: string[];
  deniedFiles: string[];     // soporta wildcards simples (*)
  maxFileSizeKb: number;     // default: 500
  allowedExtensions: string[]; // ["*"] = todas las extensiones de texto
}

export interface ModuleConfig {
  name: string;
  path: string;
  includeInstructions?: boolean;   // default: false
  excludePatterns?: string[];
}

export interface CacheConfig {
  maxEntries?: number;
  maxEntrySizeKb?: number;
}

export interface ProjectConfig {
  modules?: ModuleConfig[];
  globalInstructions?: string;
  maxTotalSizeKb?: number;         // default: 2048
  cache?: CacheConfig;
  security?: Partial<SecurityConfig>;
}

export interface BundleResult {
  content: string;
  filesIncluded: number;
  filesOmitted: number;
  truncated: boolean;
  omittedFiles: string[];
}

export type DenialReason =
  | 'HARDCODED_BLACKLIST'
  | 'BINARY_EXTENSION'
  | 'DENIED_PATH'
  | 'NOT_IN_ALLOWED_PATH'
  | 'DENIED_FILE_PATTERN'
  | 'EXTENSION_NOT_ALLOWED'
  | 'FILE_TOO_LARGE'
  | 'MODULE_EXCLUDE_PATTERN';

export interface SecurityCheckResult {
  allowed: boolean;
  reason?: DenialReason;
}

export type LogLevel = 'error' | 'warn' | 'info' | 'debug';
```

**✅ Criterio de aceptación:** Todos los módulos posteriores importan desde `types.ts` sin redefinir estructuras.

---

## Fase 3 — Sistema de Seguridad

**Archivo:** `src/security/security-guard.ts`  
**Objetivo:** Pipeline de validación que evalúa cada archivo en orden estricto.

### Paso 3.1 — Lista negra interna hardcodeada

Esta lista es **inmutable** y no puede ser desactivada por configuración:

```typescript
// src/security/security-guard.ts
const HARDCODED_BLACKLIST = [
  '.env', '.env.*', 'credentials.json', '*.pem', 'id_rsa',
  'id_ed25519', '*.key', 'private.key', 'secret*', 'secrets.json',
  'token*', 'service-account.json', '.npmrc', '.pypirc',
];

const BINARY_EXTENSIONS = new Set([
  '.exe', '.dll', '.so', '.dylib', '.bin', '.dat',
  '.zip', '.tar', '.gz', '.png', '.jpg', '.jpeg',
  '.gif', '.ico', '.pdf', '.mp3', '.mp4',
  '.woff', '.woff2', '.ttf', '.eot',
]);
```

### Paso 3.2 — Función principal de validación

Implementar `checkFile(absolutePath: string, config: SecurityConfig, excludePatterns?: string[]): SecurityCheckResult`

El orden de evaluación es estricto y determinista:

```
1. ¿Nombre del archivo coincide con HARDCODED_BLACKLIST?     → DENY: HARDCODED_BLACKLIST
2. ¿Extensión está en BINARY_EXTENSIONS?                     → DENY: BINARY_EXTENSION
3. ¿Ruta coincide con security.deniedPaths?                  → DENY: DENIED_PATH
4. ¿Ruta está dentro de security.allowedPaths?               → DENY si NO está: NOT_IN_ALLOWED_PATH
5. ¿Nombre coincide con security.deniedFiles?                → DENY: DENIED_FILE_PATTERN
6. ¿Extensión está en security.allowedExtensions?            → DENY si NO está: EXTENSION_NOT_ALLOWED
7. ¿Tamaño > security.maxFileSizeKb?                         → DENY: FILE_TOO_LARGE
8. ¿Coincide con excludePatterns del módulo?                 → DENY: MODULE_EXCLUDE_PATTERN
ALLOW ✅
```

### Paso 3.3 — Wildcard matching

Implementar función `matchesPattern(filename: string, pattern: string): boolean` que soporte `*` como comodín simple:

```typescript
function matchesPattern(filename: string, pattern: string): boolean {
  const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp('^' + escaped.replace(/\*/g, '.*') + '$');
  return regex.test(filename);
}
```

**✅ Criterio de aceptación:** Tests de seguridad cubren los 8 pasos del pipeline. Archivos `.env` y `*.pem` nunca pasan aunque `deniedFiles` esté vacío.

---

## Fase 4 — Caché LRU en Memoria

**Archivo:** `src/cache/lru-cache.ts`  
**Objetivo:** Map con política LRU, límite de entradas y límite por tamaño de entrada.

### Paso 4.1 — Estructura interna

Usar `Map` nativo de JavaScript (mantiene orden de inserción) como base del LRU:

```typescript
export class LRUCache {
  private readonly map: Map<string, CacheEntry>;
  private readonly maxEntries: number;
  private readonly maxEntrySizeBytes: number;

  constructor(options: LRUCacheOptions) {
    this.map = new Map();
    this.maxEntries = options.maxEntries;
    this.maxEntrySizeBytes = options.maxEntrySizeKb * 1024;
  }
  
  get(key: string): CacheEntry | undefined { ... }
  set(key: string, value: CacheEntry): void { ... }
  delete(key: string): void { ... }
  clear(): void { ... }
  get size(): number { ... }
}
```

### Paso 4.2 — Algoritmo LRU con Map

```typescript
get(key: string): CacheEntry | undefined {
  const entry = this.map.get(key);
  if (!entry) return undefined;
  // Mover al final para marcar como "más recientemente usado"
  this.map.delete(key);
  this.map.set(key, entry);
  return entry;
}

set(key: string, value: CacheEntry): void {
  // No cachear entradas que superen maxEntrySizeBytes
  if (Buffer.byteLength(value.block, 'utf8') > this.maxEntrySizeBytes) return;
  
  if (this.map.has(key)) this.map.delete(key);
  else if (this.map.size >= this.maxEntries) {
    // Eliminar la entrada menos usada (primera del Map)
    this.map.delete(this.map.keys().next().value);
  }
  this.map.set(key, value);
}
```

**✅ Criterio de aceptación:** Al superar `maxEntries`, la entrada más antigua se elimina. Archivos grandes (> `maxEntrySizeKb`) no se insertan en caché.

---

## Fase 5 — Herramienta `get_project_context`

**Archivo:** `src/tools/get-project-context.ts`  
**Objetivo:** Recibir lista explícita de rutas, validar, cachear y devolver bloque formateado.

### Paso 5.1 — Parámetros de entrada (schema MCP)

```typescript
{
  paths: string[];           // Lista de rutas absolutas o relativas
  projectRoot?: string;      // Raíz del proyecto para resolver rutas relativas (default: cwd)
  configPath?: string;       // Ruta a contextcache.json para cargar config de seguridad
}
```

### Paso 5.2 — Flujo de implementación

```
1. Resolver rutas relativas con path.resolve(projectRoot, filePath)
2. Cargar SecurityConfig desde configPath (si se provee) o usar defaults
3. Para cada ruta:
   a. checkFile() → si DENY, loggear y omitir
   b. Calcular SHA-256 con crypto.createHash('sha256')
   c. Comparar con caché: si hash coincide → reutilizar bloque
   d. Si no → leer archivo, generar bloque, guardar en caché
4. Ordenar bloques alfabéticamente por ruta relativa
5. Aplicar truncado inteligente si supera maxTotalSizeKb
6. Retornar BundleResult
```

### Paso 5.3 — Generación del bloque por archivo

```typescript
function formatFileBlock(relativePath: string, fingerprint: string, content: string): string {
  return [
    `BUNDLE_START: ${fingerprint}`,
    relativePath,
    content,
    `BUNDLE_END: ${relativePath}`,
    '',
  ].join('\n');
}
```

**✅ Criterio de aceptación:** Dos llamadas idénticas producen exactamente el mismo string. La segunda llamada no lee del disco si ningún archivo cambió.

---

## Fase 6 — Herramienta `get_directory_context`

**Archivo:** `src/tools/get-directory-context.ts`  
**Objetivo:** Recorrer recursivamente un directorio, filtrar archivos y devolver bloque formateado.

### Paso 6.1 — Parámetros de entrada (schema MCP)

```typescript
{
  rootPath: string;          // Carpeta raíz para recorrer
  configPath?: string;       // Ruta a contextcache.json (opcional)
  excludePatterns?: string[]; // Patrones glob adicionales a excluir
}
```

### Paso 6.2 — Flujo de implementación

```
1. Usar fast-glob para listar todos los archivos bajo rootPath
2. Cargar SecurityConfig (desde configPath o defaults)
3. Para cada archivo encontrado:
   a. checkFile() → si DENY, loggear y omitir
   b. Mismo flujo de hash y caché que get_project_context
4. Ordenar bloques alfabéticamente
5. Aplicar truncado inteligente
6. Retornar BundleResult
```

### Paso 6.3 — Configuración de fast-glob

```typescript
const files = await fg('**/*', {
  cwd: rootPath,
  absolute: true,
  onlyFiles: true,
  followSymbolicLinks: false,
  dot: true,  // incluir archivos ocultos para que el SecurityGuard los filtre
  ignore: ['**/node_modules/**', '**/.git/**'],
});
```

**✅ Criterio de aceptación:** La adición de un nuevo archivo al directorio invalida el prefijo completo (orden alfabético cambia). Directorios `node_modules` y `.git` nunca se incluyen.

---

## Fase 7 — Herramienta `get_context_from_config`

**Archivo:** `src/tools/get-context-from-config.ts`  
**Objetivo:** Leer `contextcache.json`, procesar módulos definidos, incluir instrucciones.

### Paso 7.1 — Parámetros de entrada (schema MCP)

```typescript
{
  projectRoot: string;       // Directorio donde buscar contextcache.json
  configPath?: string;       // Ruta explícita al contextcache.json (opcional)
}
```

### Paso 7.2 — Flujo de implementación

```
1. Leer y parsear contextcache.json (usar config-loader.ts)
2. Validar estructura del JSON (campos requeridos, tipos)
3. Si existe globalInstructions:
   a. Leer el archivo de instrucciones globales
   b. Preponer al bloque final con encabezado especial
4. Para cada módulo en modules[]:
   a. Construir la ruta absoluta: path.resolve(projectRoot, module.path)
   b. Si includeInstructions: true → buscar INSTRUCTIONS.md o copilot-instructions.md
      en la carpeta del módulo, incluirlo ANTES del código del módulo
   c. Listar archivos del módulo con fast-glob
   d. Aplicar module.excludePatterns
   e. Aplicar pipeline de seguridad (checkFile)
   f. Hash y caché para cada archivo
5. Ordenar bloques alfabéticamente DENTRO de cada módulo
6. Concatenar: instrucciones_globales + [módulo_1 + módulo_2 + ...]
7. Aplicar truncado inteligente global
8. Retornar BundleResult
```

### Paso 7.3 — Búsqueda de archivos de instrucciones

```typescript
const INSTRUCTION_FILES = ['INSTRUCTIONS.md', 'copilot-instructions.md'];

async function findInstructionFile(modulePath: string): Promise<string | null> {
  for (const filename of INSTRUCTION_FILES) {
    const candidate = path.join(modulePath, filename);
    if (await fs.exists(candidate)) return candidate;
  }
  return null;
}
```

**✅ Criterio de aceptación:** Las instrucciones globales aparecen siempre al inicio del bloque. Las instrucciones de módulo aparecen antes del código de ese módulo. Módulos sin `includeInstructions` no incluyen archivos `.md`.

---

## Fase 8 — Servidor MCP Principal

**Archivo:** `src/server.ts`  
**Objetivo:** Clase `ContextCacheServer` que registra las 3 herramientas y gestiona el ciclo de vida.

### Paso 8.1 — Estructura de la clase

```typescript
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

export class ContextCacheServer {
  private readonly server: McpServer;
  private readonly cache: LRUCache;
  private readonly logger: Logger;

  constructor(config?: Partial<LRUCacheOptions>) {
    this.server = new McpServer({ name: 'mcp-context-cache', version: '1.0.0' });
    this.cache = new LRUCache({ maxEntries: 5000, maxEntrySizeKb: 1024, ...config });
    this.logger = new Logger();
    this.registerTools();
  }

  private registerTools(): void { ... }
  async start(): Promise<void> { ... }
  async stop(): Promise<void> { ... }
}
```

### Paso 8.2 — Registro de herramientas

Cada herramienta se registra con su schema Zod y su handler:

```typescript
private registerTools(): void {
  this.server.tool(
    'get_project_context',
    'Returns formatted context for a list of files',
    { paths: z.array(z.string()), projectRoot: z.string().optional(), configPath: z.string().optional() },
    async (args) => getProjectContext(args, this.cache, this.logger),
  );

  this.server.tool(
    'get_directory_context',
    'Recursively packages all files in a directory',
    { rootPath: z.string(), configPath: z.string().optional(), excludePatterns: z.array(z.string()).optional() },
    async (args) => getDirectoryContext(args, this.cache, this.logger),
  );

  this.server.tool(
    'get_context_from_config',
    'Reads contextcache.json and returns full project context',
    { projectRoot: z.string(), configPath: z.string().optional() },
    async (args) => getContextFromConfig(args, this.cache, this.logger),
  );
}
```

### Paso 8.3 — Manejo de señales y cierre limpio

```typescript
async start(): Promise<void> {
  const transport = new StdioServerTransport();
  
  process.on('SIGTERM', () => this.stop());
  process.on('SIGINT', () => this.stop());
  process.on('uncaughtException', (err) => {
    this.logger.error('Uncaught exception', err);
    this.stop();
  });

  await this.server.connect(transport);
}

async stop(): Promise<void> {
  await this.server.close();
  process.exit(0);
}
```

**✅ Criterio de aceptación:** El servidor arranca y responde a una llamada MCP básica vía stdio. Se cierra limpiamente ante SIGTERM.

---

## Fase 9 — Comando `--init`

**Archivo:** `src/init/init-command.ts`  
**Objetivo:** Generar `contextcache.json` de ejemplo y mostrar instrucciones de configuración del IDE.

### Paso 9.1 — `contextcache.json` de ejemplo generado

```typescript
const EXAMPLE_CONFIG: ProjectConfig = {
  modules: [
    {
      name: "my-module",
      path: "src/my-module",
      includeInstructions: true,
      excludePatterns: ["*.test.ts", "*.spec.ts", "__mocks__/**"],
    },
  ],
  globalInstructions: ".github/copilot-instructions.md",
  maxTotalSizeKb: 2048,
  cache: { maxEntries: 5000, maxEntrySizeKb: 1024 },
  security: {
    allowedPaths: ["./"],
    deniedPaths: ["./node_modules", "./secrets", "./.terraform"],
    deniedFiles: [".env", "credentials.json", "*.pem"],
    maxFileSizeKb: 500,
    allowedExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".yaml", ".yml"],
  },
};
```

### Paso 9.2 — Instrucciones mostradas en consola

El comando debe imprimir en `stdout`:

1. Confirmación de creación de `contextcache.json`
2. Snippet para `.vscode/mcp.json`
3. Snippet para `.github/copilot-instructions.md`
4. Snippet para JetBrains `mcp.json`

### Paso 9.3 — Punto de entrada `src/index.ts`

```typescript
#!/usr/bin/env node
import { ContextCacheServer } from './server.js';
import { runInitCommand } from './init/init-command.js';

const args = process.argv.slice(2);

if (args.includes('--init')) {
  await runInitCommand();
} else {
  const server = new ContextCacheServer();
  await server.start();
}
```

**✅ Criterio de aceptación:** `pnpm dlx mcp-context-cache --init` genera `contextcache.json` en el directorio actual y muestra todas las instrucciones de configuración.

---

## Fase 10 — Logging

**Archivo:** `src/logger/logger.ts`  
**Objetivo:** Sistema de log configurable con niveles, sin contaminar stdout (que usa stdio MCP).

### Regla crítica

El transporte MCP usa **stdout**. Todo el logging **debe escribirse a stderr** o a un archivo. Nunca a stdout.

```typescript
export class Logger {
  private readonly level: LogLevel;
  private readonly logFile?: fs.WriteStream;

  constructor(level: LogLevel = 'info', logPath?: string) {
    this.level = level;
    if (logPath) {
      fs.mkdirSync(path.dirname(logPath), { recursive: true });
      this.logFile = fs.createWriteStream(logPath, { flags: 'a' });
    }
  }

  error(message: string, meta?: unknown): void { this.log('error', message, meta); }
  warn(message: string, meta?: unknown): void  { this.log('warn',  message, meta); }
  info(message: string, meta?: unknown): void  { this.log('info',  message, meta); }
  debug(message: string, meta?: unknown): void { this.log('debug', message, meta); }

  private log(level: LogLevel, message: string, meta?: unknown): void {
    if (!this.shouldLog(level)) return;
    const line = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}${meta ? ' ' + JSON.stringify(meta) : ''}\n`;
    process.stderr.write(line);         // ← SIEMPRE stderr, nunca stdout
    this.logFile?.write(line);
  }
}
```

Ruta de log por defecto: `~/.mcp-context-cache/logs/server.log`

**✅ Criterio de aceptación:** Ningún mensaje de log aparece en stdout. Los archivos omitidos por seguridad se loggean con su `DenialReason`.

---

## Fase 11 — Pruebas

**Framework:** Vitest  
**Objetivo:** Cobertura de los escenarios críticos antes de publicar.

### 11.1 — `tests/security.test.ts`

```typescript
describe('SecurityGuard', () => {
  it('debe bloquear .env aunque no esté en deniedFiles');
  it('debe bloquear archivos .pem por lista negra interna');
  it('debe bloquear extensiones binarias (.exe, .png, .zip)');
  it('debe bloquear rutas en deniedPaths');
  it('debe bloquear rutas fuera de allowedPaths');
  it('debe bloquear archivos que coincidan con deniedFiles wildcard');
  it('debe bloquear extensiones no en allowedExtensions');
  it('debe bloquear archivos mayores a maxFileSizeKb');
  it('debe bloquear archivos que coincidan con excludePatterns del módulo');
  it('debe PERMITIR un archivo .ts válido dentro de allowedPaths');
});
```

### 11.2 — `tests/lru-cache.test.ts`

```typescript
describe('LRUCache', () => {
  it('retorna undefined para claves no existentes');
  it('almacena y recupera entradas correctamente');
  it('elimina la entrada menos usada al superar maxEntries');
  it('no almacena entradas que superen maxEntrySizeKb');
  it('mueve entradas al final al ser accedidas (LRU order)');
});
```

### 11.3 — `tests/bundle-formatter.test.ts`

```typescript
describe('BundleFormatter', () => {
  it('produce orden alfabético estricto por ruta relativa');
  it('el bloque es idéntico entre llamadas sin cambios en archivos');
  it('aplica truncado al superar maxTotalSizeKb');
  it('el mensaje BUNDLE_TRUNCATED lista archivos omitidos');
  it('cada archivo está envuelto en BUNDLE_START/BUNDLE_END con su fingerprint');
});
```

### 11.4 — `tests/get-project-context.test.ts`

```typescript
describe('getProjectContext', () => {
  it('devuelve bloque vacío para lista vacía de rutas');
  it('reutiliza caché si el archivo no cambió');
  it('invalida caché si el archivo fue modificado');
  it('omite archivos que no pasan la validación de seguridad');
  it('resuelve rutas relativas contra projectRoot');
});
```

### 11.5 — `tests/get-directory-context.test.ts`

```typescript
describe('getDirectoryContext', () => {
  it('recorre recursivamente todos los archivos del directorio');
  it('excluye node_modules y .git automáticamente');
  it('aplica excludePatterns correctamente');
  it('ordena los archivos alfabéticamente');
});
```

### 11.6 — `tests/get-context-from-config.test.ts`

```typescript
describe('getContextFromConfig', () => {
  it('lanza error si contextcache.json no existe');
  it('incluye instrucciones globales al inicio del bloque');
  it('incluye instrucciones del módulo antes del código si includeInstructions: true');
  it('NO incluye instrucciones si includeInstructions: false');
  it('respeta excludePatterns por módulo');
  it('aplica truncado inteligente al superar maxTotalSizeKb');
});
```

**Comando para ejecutar:** `pnpm test`

**✅ Criterio de aceptación:** Todos los tests pasan. Cobertura mínima: 80% en `security-guard.ts` y `bundle-formatter.ts`.

---

## Fase 12 — Empaquetado y Publicación

**Objetivo:** Publicar el paquete en GitHub Packages como `@tu-org/mcp-context-cache`.

### Paso 12.1 — Shebang en el binario

El archivo `dist/index.js` debe comenzar con:

```
#!/usr/bin/env node
```

Agregar en `tsconfig.json` o mediante script post-build:

```bash
# package.json scripts
"postbuild": "echo '#!/usr/bin/env node' | cat - dist/index.js > temp && mv temp dist/index.js && chmod +x dist/index.js"
```

### Paso 12.2 — Configurar autenticación con GitHub Packages

Crear `.npmrc` en el repositorio (no en el home del usuario):

```
@tu-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

### Paso 12.3 — GitHub Actions para publicación automática

Crear `.github/workflows/publish.yml`:

```yaml
name: Publish to GitHub Packages
on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://npm.pkg.github.com'
      - run: npm install -g pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm test
      - run: pnpm build
      - run: pnpm publish --no-git-checks
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Paso 12.4 — Publicar manualmente (primera vez)

```bash
pnpm build
pnpm test          # todos deben pasar
git tag v1.0.0
git push origin v1.0.0
# GitHub Actions publica automáticamente
```

### Paso 12.5 — Documentación

Crear los siguientes archivos en `docs/`:

**`docs/README.md`** — Instalación, configuración, uso básico, ejemplos de `contextcache.json`.

**`docs/AGENT_INSTRUCTIONS.md`** — Instrucciones para GitHub Copilot, Cline, Cody, y otros agentes:
- Cuándo usar cada herramienta MCP
- Cómo configurar `.vscode/mcp.json`
- Cómo configurar `.github/copilot-instructions.md`
- Cómo manejar `BUNDLE_TRUNCATED`

**`docs/CONTEXTCACHE_SPEC.md`** — Especificación completa de todos los campos de `contextcache.json` con tipos, defaults y ejemplos.

**✅ Criterio de aceptación:** `pnpm dlx @tu-org/mcp-context-cache --init` funciona desde cualquier proyecto. El paquete aparece en GitHub Packages.

---

## Contratos de Datos Clave

### Formato de bloque de archivo

```
BUNDLE_START: <sha256-fingerprint-hex>
<ruta/relativa/al/archivo.ts>
<contenido del archivo íntegro>
BUNDLE_END: <ruta/relativa/al/archivo.ts>
```

### Mensaje de truncado

```
BUNDLE_TRUNCATED: Límite de tamaño excedido.
Tamaño configurado: 2048 KB
Tamaño real del contexto completo: XXXX KB
Archivos incluidos: N de M
Archivos omitidos (orden alfabético): ruta/a.ts, ruta/b.ts, ...

Para obtener los archivos omitidos, usa get_project_context con las rutas específicas.
```

### Respuesta MCP de cada herramienta

```typescript
{
  content: [
    {
      type: 'text',
      text: '<bundle completo como string>'
    }
  ]
}
```

---

## Criterios de Aceptación por Fase

| Fase | Criterio de aceptación |
|------|----------------------|
| 1 — Config | `pnpm build` sin errores, `pnpm lint` sin warnings |
| 2 — Tipos | Todos los módulos compilan sin `any` implícitos |
| 3 — Seguridad | Archivos `.env` y `.pem` nunca pasan; 8 reglas en orden correcto |
| 4 — Caché LRU | Evicción LRU correcta; archivos grandes no se cachean |
| 5 — `get_project_context` | Dos llamadas idénticas producen el mismo string sin leer disco |
| 6 — `get_directory_context` | `node_modules` nunca aparece; orden alfabético garantizado |
| 7 — `get_context_from_config` | Instrucciones globales primero; instrucciones de módulo antes de su código |
| 8 — Servidor MCP | Arranca, responde a llamadas MCP, cierre limpio ante SIGTERM |
| 9 — `--init` | Genera `contextcache.json` y muestra snippets de configuración del IDE |
| 10 — Logging | Ningún log en stdout; omisiones loggean el `DenialReason` |
| 11 — Pruebas | Todos los tests pasan; cobertura ≥ 80% en módulos críticos |
| 12 — Publicación | Paquete instalable desde GitHub Packages; `--init` funciona en proyectos externos |

---

*Este plan está diseñado para ser ejecutado en orden secuencial. Cada fase depende de la anterior. Un desarrollador o agente de IA puede usar este documento como fuente única de verdad durante toda la implementación.*