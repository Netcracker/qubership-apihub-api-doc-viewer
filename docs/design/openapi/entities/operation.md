# Operation

The root of the viewer: operation lookup, the header rows (title, address, external docs,
description), and the **Extensions** section. Status: **planned**.

## Lookup (`OpenApiSpecTransformer.resolveOperation`)

| Step | Rule |
| --- | --- |
| 1 | `source` must be an object with a string `openapi` field; the dialect is resolved from it ([../features/oas-versions.md](../features/oas-versions.md#dialect-resolution)). Otherwise: log, return `null`. |
| 2 | Keys: `operationKeys ?? defaults` ([../features/operation-viewer.md](../features/operation-viewer.md#public-api)). `method` is lower-cased before lookup. |
| 3 | `pathItem = source.paths?.[path]`; `operation = pathItem?.[method]`. No match: log `Cannot find operation <METHOD> <path>`, return `null`. |
| 4 | Path-item `$ref` and `components.pathItems` (OAS 3.1) are already resolved by `api-unifier`; path-item `parameters`, `servers`, `summary`, `description` are already merged into the operation (E11). The transformer reads the operation object only. |

The transformer never walks other operations; nothing outside `paths[path][method]`, root
`security`, and `components.securitySchemes` is read.

## Node

Kind `operation` — the tree root, a simple node.

```typescript
// model/openapi/types/node-value.ts
export interface OpenApiTreeNodeValueTypeOperation {
  readonly path: string
  readonly method: OpenApiHttpMethod            // lower case
  readonly specVersion: OpenApiSpecVersion      // 'openapi-3.0' | 'openapi-3.1' (api-unifier)
  readonly title?: string                       // summary
  readonly operationId?: string
  readonly description?: string
  readonly externalDocs?: OpenApiExternalDocs   // { url: string; description?: string }
  readonly deprecated?: boolean                 // tag in the title subheader
}
```

## Title row

| Item | Rule |
| --- | --- |
| Component | `TitleRow`, `variant={TextValueVariant.h1}`, `expandable={false}`, `data-precededby={ROOT}` |
| Text | `title` (operation `summary`) — **no fallback** (Q10) |
| Shown when | `summary` exists (diffs: on either side, or a `title` diff exists) and not `noHeading` |
| Subheader | **deprecated** tag when `deprecated === true` (below) |
| Diff (diffs viewer) | `summary` diff on `title` key → `TitleRow` `diff`; severity `TitleRow`. A whole-operation add / remove paints the row through the node-level diff. A `deprecated` change paints the row as a synthetic yellow replace (JSON Schema meta-flag rule). |

## Operation ID row

Secondary information directly under the title (Q10): a static label followed by the value, on
**one line**.

```text
Upload a photo of a pet                    h1
Operation ID: uploadPetPhoto               operation ID row (small, grey)
[POST] /pets/{petId}/photos                address row
```

| Item | Rule |
| --- | --- |
| Component | `TextRow`, `variant={TextValueVariant.body2}` — small and muted, never a heading. Label and value are rendered by the row's existing `label` + `value` props (same mechanism as the AsyncAPI binding `Version` row), so they share one line. |
| Label | displayed text `Operation ID:`, static. Pass `label="Operation ID"` **without** the colon: `TextValue` renders the label as `` `${label}: ` `` itself, so `"Operation ID:"` would show `Operation ID:: …`. Keep the string in one constant (`OPERATION_ID_ROW_LABEL = 'Operation ID'`) in the container. `labelFontWeight='normal'`, `labelColor` = secondary grey (`#626D82`). |
| Value | `operationId` as is; `textFontWeight='normal'`, `textColor` = secondary grey (`#626D82`, the address-row text color) |
| Shown when | `operationId` exists (diffs: on either side, or an `operationId` diff exists). Independent of the title row: `noHeading` and a missing `summary` hide the title only. |
| `data-precededby` | `MESSAGE_SECTION_HEADER_HIGH_LEVEL` after the title row; `ROOT` when it is the first row. The address row below it uses the new member `OPERATION_ID_ROW`. |
| Diff | `operationId` key → row `diff`; severity: new placement `OperationIdRow`. The row background follows the diff (green / red / yellow). The **label is never highlighted** — on a replace only the value gets the yellow text highlighter (`TextValue` puts diff classes on the value span only). On add / remove the side where `operationId` does not exist renders **no text at all**, label included (`TextValue` returns `null` for an invisible side), so a bare `Operation ID:` never appears. |

## Deprecated tag

| Item | Rule |
| --- | --- |
| Where | title-row subheader, `TagsWithDiffs` with the single tag `deprecated` (`UxBadge` kind `tag-amber`, as JSON Schema) |
| No title row | the tag moves to the address row, after the path (`AddressRow` `trailing` slot) |
| Plain | shown when `deprecated === true` |
| Diffs | shown on a side where `deprecated` is `true` or where it has its own diff; highlighted only by its own diff (JSON Schema "Flag tags" rule); a wholly added / removed operation shows a plain tag |

## Address row

Shared `AddressRow` (moved from `AsyncApiOperationViewer/AddressRow/` to
`shared-components/AddressRow/`, D9).

```typescript
export type AddressRowBadge = {
  text: string            // 'POST', 'SEND', …
  colorClass: string      // tailwind background class
}

export type AddressRowProps = WithPrecededByProps & {
  badge: AddressRowBadge | null
  address: string
  /** Content after the address, per side (OpenAPI: the deprecated tag when there is no title row). */
  trailing?: (layoutSide: LayoutSide) => ReactElement | null
  diff?: ChangedPropertyMetaData
  descendantDiffs?: NodeDescendantDiffs
  diffsSeverities?: NodeDiffsSeverities
}
```

Behaviour is unchanged from AsyncAPI: the badge is hidden on the side where a whole-node add /
remove does not exist; a `replace` of `address` with a common prefix highlights only the differing
suffix (`detectPartialReplaceCase`). AsyncAPI passes `{ text: action.toUpperCase(), colorClass:
ACTION_COLOR_MAP[action] }`; its screenshot ITs must stay unchanged after the move.

| Item | Rule |
| --- | --- |
| Badge text | `method.toUpperCase()` |
| Address text | `path` exactly as in the document (`/pets/{petId}/photos`); server URLs are not prefixed (`servers` is out of v1 scope). |
| Diff | `address` key of the operation node. The with-diffs transformer converts the `paths` **rename** diff (`beforeKey` → `afterKey`) into a `replace` with `beforeValue = beforeKey`, `afterValue = afterKey`, so the existing partial-replace highlighting works ([../features/diffs.md](../features/diffs.md#operation)). Severity `AddressRow`. |

### HTTP method badge config

One exported config map (D13, Q9) in `packages/api-doc-viewer/src/utils/openapi/http-method-badge-config.ts`;
`resolveHttpMethodBadge(method)` reads it and falls back to `DEFAULT` for an unknown method.
Changing a color is a one-line edit of this map; no component holds method colors.

```typescript
export const OPENAPI_HTTP_METHOD_BADGE_CONFIG: Readonly<Record<OpenApiHttpMethod | 'DEFAULT', { colorClass: string }>> = {
  get:     { colorClass: 'bg-green-500' },
  post:    { colorClass: 'bg-sky-500' },
  put:     { colorClass: 'bg-orange-400' },
  patch:   { colorClass: 'bg-teal-500' },
  delete:  { colorClass: 'bg-red-500' },
  head:    { colorClass: 'bg-purple-500' },
  options: { colorClass: 'bg-indigo-500' },
  trace:   { colorClass: 'bg-slate-500' },
  DEFAULT: { colorClass: 'bg-slate-500' },
}
```

Tailwind keeps only class names it finds in source files: the classes must stay literal strings in
this file (never built by concatenation), or they disappear from the CSS bundle. A host-level
override prop is not part of v1; the map is the extension point.

## External docs row

New shared component `shared-components/ExternalDocsRow/ExternalDocsRow.tsx` — generic, usable by
AsyncAPI later (AsyncAPI objects have `externalDocs` too).

| Item | Rule |
| --- | --- |
| Shown when | `externalDocs.url` is a non-empty string (merged value or either diff side) |
| Content | an anchor `<a href={url} target="_blank" rel="noopener noreferrer">` with an external-link icon; text = `description` if present, else `url` |
| Typography | body2, link color; same horizontal padding as `AddressRow` (`X_AXIS_PADDING_ROWS_ASYNC_API`) |
| Layout | `OneSideLayout` / `SideBySideLayout` + `DiffFloatingBadgeWrapper`, like `AddressRow`; the row content div carries `flex w-full` (width contract, `api-doc-viewer-authoring`) |
| Diff | `externalDocs` key: whole add / remove → row background green / red, link hidden on the absent side; `url` or `description` replace → yellow row background and yellow text highlighter on the link text. Side text per [../features/diffs.md](../features/diffs.md#operation). Severity: new placement `ExternalDocsRow`. |

The `description` of External Documentation is CommonMark in the specification; the row renders
it as plain text (it is a link label).

## Description row

| Item | Rule |
| --- | --- |
| Component | `MarkdownTextRow` (OpenAPI descriptions are CommonMark), `variant=body2`, default usage |
| Diff | `description` key; severity `DescriptionRow` (the component default) |

## Extensions section

| Item | Rule |
| --- | --- |
| Source | every `x-*` key of the operation object, copied by the transformer into `data.extensions` (AsyncAPI `copyExtensions`) |
| Node | kind `extensions`, value `{ rawValues }` via the `collectRawValues` crawl transformer |
| Component | shared `ExtensionsSection` (extracted from AsyncAPI `ExtensionsNodeViewer`): `TitleRow` "Extensions" **h2** with `TitleRowUsage.AsyncApiJsoSection`, then `JsoViewer` / `JsoDiffsViewer` over `rawValues`, `initialLevel={1}`. AsyncAPI keeps h3; the heading variant is a prop. |
| Diff | per-key diffs move into `extensions[diffsMetaKey]`; the section header follows the shared colorizing rule ([../features/diffs.md](../features/diffs.md#section-headers)) |

**Trap — path-item extensions.** `api-unifier` copies path-item `x-*` keys into each operation
(unless the operation defines the same key), but **only when the path item also declares
`parameters`, `servers`, `summary`, or `description`** (`pathItemsUnification` returns early
otherwise). Both outcomes are correct input for the viewer; tests must not assume either one
without such a path-item field.

## Related documents

- Row stack: [../features/operation-viewer.md](../features/operation-viewer.md#row-stack)
- Diff sources: [../features/diffs.md](../features/diffs.md#operation)
