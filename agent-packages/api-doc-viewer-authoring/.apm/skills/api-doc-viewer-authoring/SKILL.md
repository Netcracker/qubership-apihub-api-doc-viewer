---
description: Extend api-doc-viewer React viewers — components, layout modes, diff rendering, and Storybook stories.
---

# Authoring api-doc-viewer

api-doc-viewer renders API specifications (JSON Schema, GraphQL, AsyncAPI,
JSO, DDL tables) as human-readable React trees. The view layer lives under
`packages/api-doc-viewer/src/`; tree construction and diff aggregation live
in `packages/next-data-model/` (see the `next-data-model-authoring` skill).

## Component families

| Family | Plain viewer | Diffs viewer | Status |
| --- | --- | --- | --- |
| JSON Schema | `JsonSchemaViewer` | `JsonSchemaDiffViewer` | legacy — do not change without approval |
| GraphQL schema | `GraphSchemaViewer` | — | legacy |
| GraphQL operation | `GraphQLOperationViewer` | `GraphQLOperationDiffViewer` | legacy |
| AsyncAPI operation | `AsyncApiOperationViewer` | `AsyncApiOperationDiffsViewer` | active |
| JSO | `JsoViewer` | `JsoDiffsViewer` | active |
| DDL table | `DdlTableViewer` | `DdlTableDiffsViewer` | active |

Public exports are registered in `src/index.ts`. Keep internal helpers
(style hooks, base renderers) out of the package API.

## Layout and display modes

**Layout mode** (`LayoutMode` in `src/types/LayoutMode.ts`):

- `document` — single-sided rendering, no diff chrome.
- `side-by-side-diffs` — before/after columns with diff markers (default for
  diffs viewers).
- `inline-diffs` — inline diff markers in one column.

**Display mode** (`DisplayMode`):

- `simple` — titles and types only.
- `detailed` — descriptions, deprecation, annotations, and other metadata.

Pass modes through the matching React contexts (`LayoutModeContext`,
`DisplayModeContext`) rather than threading props through every child.

## View / data split

Plain viewers instantiate a tree builder from `next-data-model` and walk
`childrenNodes()` / `nestedNodes()`:

- JSO — `JsoTreeBuilder` → `JsoPropertyNodeViewer`.
- JSO diffs — `JsoTreeWithDiffsBuilder` with `diffMetaKeys` →
  `JsoPropertyNodeViewerWithDiffs`.

Diffs viewers wrap children in `DiffMetaKeysContext`, `DiffTypesContext`, and
force `SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`. Do not re-derive diff metadata in the
view layer — consume precalculated fields from tree nodes
(`nodeDiffs`, `nodeDiffsSeverities`, `nodeDescendantDiffs`, summaries).

Keep plain and diffs pipelines separate: wrappers orchestrate; shared base
renderers (`BaseJsoValue`, layout rows) only draw resolved values and CSS
classes.

## Shared UI building blocks

Reuse existing rows and layout primitives under
`src/components/shared-components/` (`TitleRow`, `TextRow`, `OneSideLayout`,
`SideBySideLayout`, diff badges). Diff styling lives in
`src/components/shared-styles/diffs/`.

New node viewers should follow the established pattern: memoised FC, optional
`ErrorBoundary`, `LevelContext` / `AsyncLevelContextProvider` for nesting
depth, `WithPrecededByProps` for indent connectors.

## React hooks

Never invoke hooks conditionally. Call every hook (`useMemo`, `useState`,
`useCallback`, `useContext`, custom hooks, etc.) on every render, in a fixed
order, before any early `return`.

Common viewer pattern: outer wrapper may return `null` when `source === null`
**before** rendering an inner component; the inner component runs all hooks,
then returns `null` when the tree root is missing or the wrong kind (see
`AsyncApiOperationViewer` / `DdlTableViewer`).

## Type narrowing (type guards)

When you would write a type assertion (`value as SomeType`) or assign
`childrenNodes()` to a wider node array via a type annotation alone, prefer a
**type guard** (`value is SomeType`) instead.

| Avoid | Prefer |
| --- | --- |
| `node.childrenNodes() as DdlApiTreeNode[]` | `getDdlApiChildNodes(node)` |
| `const children: DdlApiTreeNode[] = parent.childrenNodes()` | `getDdlApiChildNodes(parent)` |
| Per-kind `as` at every viewer call site | Reusable guards in `src/utils/<spec>/node-type-checkers.ts` |

`ITreeNode.childrenNodes()` is typed with the **parent** node's value/kind
generics, so child lists need guard-backed helpers before dispatching to
per-kind viewers. Place guards next to other viewer utilities (see
`src/utils/ddlapi/node-type-checkers.ts`: `isColumnNode`, `getColumnChildNodes`,
…). Exceptions: `as const`, import aliases, and reduce accumulators typed via a
generic parameter instead of `as`.

Apply this rule in `packages/api-doc-viewer/` when touching tree walk or node
dispatch code. For builder/transformer narrowing, see `next-data-model-authoring`.

## Storybook and samples

Stories live in `src/stories/` grouped by suite (`jso-suite/`,
`async-api-diffs-suite/`, `ddlapi-suite/`, etc.). Fixture YAML/SQL under
`packages/samples/` is loaded via `import.meta.glob`.

Diff-suite stories typically:

1. Glob `before.yaml` / `after.yaml` pairs from `packages/samples/`.
2. Build viewer args through suite-specific utils (e.g.
   `async-api-diffs-utils.tsx`).
3. Export one Storybook story per sample case; story export names become
   kebab-case story IDs (`metaId--story-name`).

Compatibility-suite stories and tests are **generated** — run
`npm run generate-stories` / `npm run generate-tests` inside
`packages/api-doc-viewer` rather than hand-editing
`src/stories/compatibility-suite/` or `src/it/compatibility-suite/`.

## DDL viewer notes

DDL stories parse SQL through `buildFromDdlInBrowser` (dynamic import with
`?ddlapi-browser-parser`) so libpg-query stays in an async chunk. When
touching DDL crawl or navigation, also apply the `ddlapi-using` skill from
the ddlapi package.

### Stacked rows — do not collapse into one custom row

Many viewers are a **vertical stack** of row components, not one row with
everything inline. Reference patterns:

| Viewer / area | Stack |
| --- | --- |
| `JsonPropNodeBody` | `HeaderRow` → `Annotations` / `Validations` / `Extensions` |
| Legacy JSON Schema | `HeaderRow` → `AdditionalInfoArrayRow` / `AdditionalInfoObjectRow` |
| DDL column (evolving) | `TitleRow` → optional `TextRow` → `AdditionalInfoRow` |

**Clarify before coding** when a task mentions a row “like” an existing viewer
but with layout differences:

1. **Replace** existing JSX, or **append** a new row below code that must stay
   unchanged?
2. Should metadata live in `TitleRow.subheader` (same line as title) or on a
   **separate row below** the header?

**Common misread (session lesson):** assuming “subheader” always means
`TitleRow.subheader` on one line. For DDL additional metadata, the product
intent is often a **second row** (`AdditionalInfoRow`) with label + externally
composed chips — analogous to `AdditionalInfoArrayRow`, not a fork of
`TitleRow`.

**Scope discipline:**

- Do **not** replace `TitleRow` with a bespoke row or refactor sibling node
  viewers unless explicitly requested.
- Do **not** generalize `JsoValue`, remove `DdlApiPropertyValue`, or touch
  unrelated viewers as part of adding one new row — that is “redundant impact”.
- Prefer **additive** changes: keep existing `TitleRow` / `TextRow` blocks;
  append new rows after them.

### `AdditionalInfoRow` and `AdditionalInfoPiece` (DDL)

Location: `packages/api-doc-viewer/src/components/DdlTableViewer/`.

| Component | Role |
| --- | --- |
| `AdditionalInfoRow` | Follow-on row: `label` + `subheader` callback (same API shape as `TitleRow`) |
| `AdditionalInfoPiece` | Block-only value chip (JsoValue `.block` styling); no `text` variant |

**Orchestration:** the **node viewer** (`ColumnNodeViewer`, etc.) owns the
stack and passes domain content into `subheader`; `AdditionalInfoRow` only
provides layout/indent/label styling — it does not import badges or formatters.

**Indent:** mirror `TitleRowContent` (`LevelIndicator` + expander column), but
replace `Expander` / `NestingHorizontalIndicator` with an empty **`w-5`**
spacer. This is not `LevelIndicator lastInvisible` and not removing vertical
lines entirely.

**Label styling:** `#626D82`, `font-size: 12px`, `font-weight: 400`
(`.additional-info-row-label`).

**Integration example** (append after existing header/description rows):

```tsx
<AdditionalInfoRow
  data-precededby={PrecededBy.DDL_COLUMN_ROW}
  label={value.columnType.label}
  subheader={(_layoutSide) => (
    <AdditionalInfoPiece isVisible value={value.columnType.label} />
  )}
/>
```

## Monorepo paths

Source imports use the `@apihub/` alias (maps to `packages/api-doc-viewer/src`).
Cross-package imports reach `@netcracker/qubership-apihub-next-data-model/…`
by subpath — mirror existing import paths when adding builders or types.

JSO diffs design notes and phased actions are in
`packages/api-doc-viewer/jso-diffs-implementation-actions.md` — read before
large diffs-viewer refactors.
