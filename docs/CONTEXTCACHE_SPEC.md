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

---

## `ModuleConfig`

| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `name` | `string` | **requerido** | Nombre descriptivo del módulo |
| `path` | `string` | **requerido** | Ruta al directorio del módulo (relativa a la raíz del proyecto) |
| `includeInstructions` | `boolean` | `false` | Si es `true`, busca `INSTRUCTIONS.md` o `copilot-instructions.md` en el directorio del módulo y lo antepone antes de los archivos del módulo |
| `excludePatterns` | `string[]` | `[]` | Patrones glob para excluir archivos de este módulo. Admite el comodín `*`. |

### Ejemplos de `excludePatterns`

```json
["*.test.ts", "*.spec.ts", "__mocks__/**", "fixtures/**"]
```

### Orden de búsqueda de archivos de instrucciones

Cuando `includeInstructions: true`, se buscan los siguientes archivos en orden:

1. `INSTRUCTIONS.md`
2. `copilot-instructions.md`

Se usa el primero que se encuentre. Si no existe ninguno, no se incluyen instrucciones.

---

## `CacheConfig`

| Campo | Tipo | Valor por defecto | Descripción |
|------:|:----:|:-----------------:|:-----------|
| `maxEntries` | `number` | `5000` | Número máximo de archivos a mantener en la caché LRU |
| `maxEntrySizeKb` | `number` | `1024` | Tamaño máximo (en KB) de una única entrada de caché. Los archivos mayores se sirven pero no se almacenan. |

---

## `SecurityConfig`

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

```
.env          .env.*        credentials.json    *.pem
id_rsa        id_ed25519    *.key               private.key
secret*       secrets.json  token*              service-account.json
.npmrc        .pypirc
```

---

## Ejemplo completo

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

## Formato de salida del bundle

### Bloque de archivo

```
BUNDLE_START: <sha256-hex-64-chars>
relative/path/to/file.ts
<complete file content>
BUNDLE_END: relative/path/to/file.ts
```

### Mensaje de truncamiento (cuando se excede el límite de tamaño)

```
BUNDLE_TRUNCATED: Límite de tamaño excedido.
Tamaño configurado: 2048 KB
Tamaño real del contexto completo: 4096 KB
Archivos incluidos: 42 de 78
Archivos omitidos (orden alfabético): src/a.ts, src/b.ts, ...

Para obtener los archivos omitidos, usa get_project_context con las rutas específicas.
```
