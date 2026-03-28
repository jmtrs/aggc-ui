# Release Workflow — @aggc/ui

## Cuándo crear un changeset

Siempre que el cambio afecte a consumidores del paquete publicado.
No hace falta changeset para: cambios solo en `.claude/`, `.storybook/`, `tests/`, `src/stories/`, docs internas.

## Tipos de bump y cuándo usarlos

### `patch` → 0.5.0 a 0.5.1
Correcciones que no cambian la API pública. El consumidor no necesita cambiar nada.

| Ejemplo | ¿Por qué patch? |
|---------|----------------|
| Corregir `aria-disabled` que no se aplicaba | Bug fix, no cambia props |
| Ajuste visual en un token de color | No cambia API |
| Añadir `@storybook/addon-mcp` al dev setup | No afecta el bundle publicado |
| Fix en el tipo TypeScript de una prop ya existente | Corrección, no ruptura |

### `minor` → 0.5.0 a 0.6.0
Funcionalidad nueva que no rompe nada existente. El consumidor puede adoptarla o ignorarla.

| Ejemplo | ¿Por qué minor? |
|---------|----------------|
| Nuevo componente `UiToggle` | Nueva exportación, nada roto |
| Nuevo `variant="ghost"` en `UiButton` | Nueva opción, el default no cambia |
| Nueva prop `loadingLabel` opcional | Prop opcional con default, retrocompatible |
| Nuevo export en `@aggc/ui/styles` | Adición, nada eliminado |

### `major` → 0.5.0 a 1.0.0
Rompe código existente de los consumidores. Deben actualizar su código.

| Ejemplo | ¿Por qué major? |
|---------|----------------|
| Renombrar `UiButton` a `Button` | El import del consumidor se rompe |
| Eliminar `variant="outline"` | El consumidor que lo usaba se rompe |
| Cambiar `size` de `"sm"\|"md"` a `"small"\|"medium"` | Todos los valores existentes se rompen |
| Cambiar estructura del token `text.primary` | Rompe temas customizados |

---

## Flujo completo paso a paso

### 1. En tu rama de trabajo

```bash
npx changeset
# → selecciona @aggc/ui
# → elige patch / minor / major
# → escribe una línea desde la perspectiva del consumidor
#    ✓ "Add ghost variant to UiButton for low-emphasis actions"
#    ✗ "Refactor button styles to use shared recipe"
```

Esto crea un archivo en `.changeset/nombre-aleatorio.md`. Commitéalo junto con el código:

```bash
git add .changeset/
git commit -m "chore: add changeset for <lo que cambia>"
```

### 2. Merge a main

Cuando el PR llega a `main`, el workflow `release.yml` detecta el archivo en `.changeset/` y abre automáticamente un PR llamado **"Version Packages"** que:
- Actualiza `package.json` (versión)
- Actualiza `CHANGELOG.md`
- Elimina el archivo `.changeset/`

### 3. Merge del PR "Version Packages"

Al mergear ese PR, `release.yml` ejecuta `npm run build` y publica a npm automáticamente.

---

## Reglas

- Nunca editar `package.json` version ni `CHANGELOG.md` a mano
- Nunca `npm publish` directamente
- Si hay varios changesets acumulados antes de mergear "Version Packages", se combinan en una sola versión (gana el bump más alto: major > minor > patch)
- Un changeset por PR suele ser suficiente; si un PR toca varias áreas independientes puede tener más de uno
