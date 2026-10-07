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
  readonly deprecated?: boolean                 // ndm-reserved in v1
}
```

## Title row

| Item | Rule |
| --- | --- |
| Component | `TitleRow`, `variant={TextValueVariant.h1}`, `expandable={false}`, `data-precededby={ROOT}` |
| Text | `title` (operation `summary`); else `operationId`; else `` `${METHOD} ${path}` `` (Q10). The fallback is resolved in next-data-model (`OpenApiOperationTitle.resolveDisplay(value)`), not in JSX. |
| Hidden | `noHeading` |
| Diff (diffs viewer) | `summary` diff on `title` key → `TitleRow` `diff`; severity `TitleRow`. A whole-operation add / remove paints the row through the node-level diff (`buildRowDiffProps` with the default fallback). |

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

HTTP method badge colors (Q9, `utils/openapi/http-method-badge.ts`):

| Method | Class | Method | Class |
| --- | --- | --- | --- |
| `get` | `bg-sky-500` | `delete` | `bg-red-500` |
| `post` | `bg-green-500` | `head` | `bg-purple-500` |
| `put` | `bg-orange-400` | `options` | `bg-indigo-500` |
| `patch` | `bg-teal-500` | `trace` | `bg-slate-500` |

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
