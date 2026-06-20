---
description: Integrate api-doc-viewer React components in portal or application UI — imports, styles, merged documents, and diff configuration.
---

# Using api-doc-viewer

Embed human-readable API specification viewers from
`@netcracker/qubership-apihub-api-doc-viewer` in React applications (e.g.
APIHUB portal). Import only from the **package root** and the published CSS
subpath — internal module paths are not part of the public contract.

```typescript
import {
  JsonSchemaViewer,
  JsonSchemaDiffViewer,
  GraphQLOperationViewer,
  GraphQLOperationDiffViewer,
  AsyncApiOperationViewer,
  AsyncApiOperationDiffsViewer,
  DdlTableViewer,
  DdlTableDiffsViewer,
  DOCUMENT_LAYOUT_MODE,
  SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
  INLINE_DIFFS_LAYOUT_MODE,
  type DisplayMode,
  type LayoutMode,
  type DiffMetaKeys,
  buildOpenApiDiffCause,
} from '@netcracker/qubership-apihub-api-doc-viewer'
import '@netcracker/qubership-apihub-api-doc-viewer/dist/style.css'
```

Styles are **not** bundled into components — the CSS import is required once
per application entry (see `JsonSchemaViewer.tsx` in ui-shared for the
pattern).

## Plain vs diffs viewers

Each spec family has a plain viewer (single document) and a diffs viewer
(comparison mode). Pass the **merged document** produced upstream by
api-processor / api-diff — do not hand-merge before/after specs in UI code.

| API type | Plain | Diffs | Document prop |
| --- | --- | --- | --- |
| JSON Schema | `JsonSchemaViewer` | `JsonSchemaDiffViewer` | `schema` |
| GraphQL operation | `GraphQLOperationViewer` | `GraphQLOperationDiffViewer` | `source` |
| AsyncAPI operation | `AsyncApiOperationViewer` | `AsyncApiOperationDiffsViewer` | `source` / `mergedSource` |
| DDL table | `DdlTableViewer` | `DdlTableDiffsViewer` | `source` |

Shared optional props: `displayMode` (`'simple' | 'detailed'`, default
`'detailed'`), `expandedDepth` (legacy viewers, default `2`).

Diffs viewers add `layoutMode` (legacy GraphQL/JSON Schema) or fixed
side-by-side layout (AsyncAPI diffs viewer), plus severity `filters` where
supported.

## Diff meta keys

Diffs viewers need the same `DiffMetaKeys` the build pipeline stamped on the
merged document:

```typescript
import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY } from '@netcracker/qubership-apihub-api-diff'

const diffMetaKeys: DiffMetaKeys = {
  diffsMetaKey: DIFF_META_KEY,
  aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY,
}
```

- **GraphQL / JSON Schema diffs** — prop name `metaKeys`.
- **AsyncAPI diffs** — prop name `diffMetaKeys`.

Mismatch between merged-document keys and viewer props produces empty diff
highlights with no runtime error.

## AsyncAPI-specific wiring

AsyncAPI viewers require a stable **`referenceNamePropertyKey`** symbol shared
with the normalisation/diff pipeline — use `FIRST_REFERENCE_KEY_PROPERTY` from
`@netcracker/qubership-apihub-api-processor` (same symbol in normalize and
`apiDiff` calls).

Optional **`operationKeys`** narrow which operation/message to render when the
merged document contains several:

```typescript
operationKeys={{ operationKey: asyncOperationId, messageKey: messageId }}
```

Portal pattern (`OperationView.tsx`): pass `mergedDocument` from the version
page, toggle plain vs `AsyncApiOperationDiffsViewer` with `comparisonMode`,
reuse `FIRST_REFERENCE_KEY_PROPERTY` and platform `DIFFS_META_KEYS`.

## GraphQL-specific wiring

Build a GraphAPI schema with `@netcracker/qubership-apihub-graphapi` before
passing to `GraphQLOperationViewer`. Select the operation via
`operationPath` (e.g. `#/queries/getEntity`) or legacy `operationType` +
`operationName` on the diff viewer.

## JSON Schema-specific wiring

`JsonSchemaViewer` accepts `schema` plus optional `source` when definitions
live outside the root schema object. The `overridenKind: 'parameters'` flag is
a legacy workaround for parameter-list layout only.

## Layout modes

Exported constants: `DOCUMENT_LAYOUT_MODE`, `SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,
`INLINE_DIFFS_LAYOUT_MODE`. Legacy diff viewers accept `layoutMode`; new
AsyncAPI diffs viewer always uses side-by-side internally.

## Upstream document preparation

Viewers expect documents already normalised/merged by platform libraries:

- **Plain AsyncAPI** — normalised AsyncAPI object (portal receives this as
  `mergedDocument` even in non-comparison mode).
- **AsyncAPI diffs** — output of `apiDiff(before, after, { metaKey, firstReferenceKeyProperty, unify, … }).merged`.
- **GraphQL / OpenAPI diffs** — merged document from the builder pipeline with
  diff meta properties attached.

Replicate Storybook helpers (`prepareAsyncApiDocument`,
`prepareAsyncApiDiffsDocument` in the library's `stories/preprocess.ts`) only
in tests — production UI receives prepared documents from the backend/build
consumer.

## Helper export

`buildOpenApiDiffCause` formats human-readable diff cause strings for OpenAPI
diff tooltips. Prefer it over ad-hoc diff message formatting when displaying
OpenAPI change annotations.

## Scope note

When editing the library itself under `packages/api-doc-viewer/`, use
`api-doc-viewer-authoring` instead of this skill.
