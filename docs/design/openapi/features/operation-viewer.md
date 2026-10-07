# OpenAPI operation viewer

Public API, the full row stack, and local view state of `OpenApiOperationViewer` and
`OpenApiOperationDiffsViewer`. Status: **planned**. Per-area rules are in [../entities/](../entities/);
diff rules in [diffs.md](diffs.md); version rules in [oas-versions.md](oas-versions.md).

## Public API

Both components live in `packages/api-doc-viewer/src/components/OpenApiOperationViewer/` and are
exported from `packages/api-doc-viewer/src/index.ts`, mirroring `AsyncApiOperationViewer` /
`AsyncApiOperationDiffsViewer`.

```typescript
// next-data-model: src/shared/openapi/types/operation-keys.ts
export type OpenApiOperationKeys = {
  /** Key of `paths`, exactly as in the document, e.g. `/pets/{petId}`. */
  path: string
  /** HTTP method, case-insensitive (`get`, `GET`, …). */
  method: string
}

// api-doc-viewer
export type OpenApiOperationViewerProps = {
  /** Normalized OpenAPI 3.0 / 3.1 document (api-unifier `normalize` + `denormalize`). */
  source: unknown
  operationKeys?: OpenApiOperationKeys
  displayMode?: DisplayMode          // default DEFAULT_DISPLAY_MODE
  devMode?: boolean                  // default false; verbose logger
  noHeading?: boolean                // default false; hides the h1 title row
  expandedDepth?: number             // forwarded to nested JSON Schema viewers; default per nested viewer
}

export type OpenApiOperationDiffsViewerProps = Omit<OpenApiOperationViewerProps, 'source'> & {
  /** Merged `apiDiff` document of two whole OpenAPI documents. */
  mergedSource: unknown
  diffMetaKeys: DiffMetaKeys
  diffTypes?: ReadonlyArray<DiffType>   // accepted, forwarded; filters are not implemented (as AsyncAPI)
  hideUnchangedNodes?: boolean          // forwarded to nested JsonSchemaDiffsViewer; its default when omitted
}
```

| Rule | Detail |
| --- | --- |
| No `referenceNamePropertyKey` | AsyncAPI needs it to resolve message keys; an OpenAPI operation is addressed by its `paths` key and method. |
| `operationKeys` omitted | The transformer picks the first `paths` key and, inside it, the first method in `OPEN_API_HTTP_METHODS` order (`get, put, post, delete, options, head, patch, trace`), and logs an error — same contract as AsyncAPI `operationKeysOrDefaults`. |
| `operationKeys` not found | Logs an error; the viewer renders nothing (`null`). |
| Diffs viewer `path` | The key of the **merged** document: the after path for a mapped or renamed path, the before path for a removed one. `apiDiff` stores a renamed path under its after key (see [../notes/2026-10-design-analysis.md](../notes/2026-10-design-analysis.md), E1). |
| Expected merge | Whole documents, `components` kept (default `apiDiff` mode, or operation mode **without** stripping `components`). Stripping `components` loses every security scheme definition and its diffs (E9). |
| `source === null` / `mergedSource === null` | Render `null` before the error boundary (AsyncAPI pattern). |

### Root component shape

Copy `AsyncApiOperationViewer.tsx` / `AsyncApiOperationDiffsViewer.tsx`:

1. Outer memo component returns `null` for a `null` source, else wraps the inner component in
   `ErrorBoundary` with `ErrorBoundaryFallback componentName="OpenAPI Operation Viewer"`.
2. Inner component (all hooks first, no conditional hooks): `createOpenApiLogger(devMode)`,
   `new OpenApiTreeBuilder({ source, operationKeys, logger })` (with diffs:
   `new OpenApiTreeWithDiffsBuilder({ source: mergedSource, operationKeys, diffsMetaKeys, logger })`)
   in `useMemo`, `tree = builder.build()` in `useMemo`.
3. After hooks: `const root = tree.root; if (!root || !isOpenApiOperationNode(root)) return null`.
4. Providers, outermost first:
   - diffs only: `DiffMetaKeysContext`, `DiffTypesContext`;
   - `OpenApiViewerContext` (`devMode`, `expandedDepth`, `hideUnchangedNodes`);
   - `DisplayModeContext`;
   - `LayoutModeContext` — `DOCUMENT_LAYOUT_MODE` (plain) / `SIDE_BY_SIDE_DIFFS_LAYOUT_MODE` (diffs);
   - `LevelContext` = `0`.
5. Root element: `<div data-testid="openapi-operation-viewer">` (plain) /
   `<div data-testid="openapi-operation-diffs-viewer">` (diffs), then `OperationNodeViewer`.

`OpenApiViewerContext` replaces AsyncAPI's single-purpose `AsyncApiDevModeContext`: one context
object for every value the nested viewers need from the root.

## Row stack

Top to bottom. "Node" is the tree node that owns the row ([../architecture/data-model-plain.md](../architecture/data-model-plain.md)).
Every row is optional unless stated; visibility comes from the next-data-model visibility manager
of the owning node kind. Headings: **h1** title, **h2** sections, **h3** subsections, **h4** card
titles, **h5** OAuth flow titles.

| # | Row | Component | Node | Shown when (plain) | Details |
| ---: | --- | --- | --- | --- | --- |
| 1 | Operation title (h1) + **deprecated** tag | `TitleRow` | `operation` | `summary` exists and not `noHeading` | [operation](../entities/operation.md#title-row) |
| 2 | Operation ID (secondary text) | `TextRow` | `operation` | `operationId` exists | [operation](../entities/operation.md#operation-id-row) |
| 3 | Address: method badge + path (+ **deprecated** tag when row 1 is absent) | shared `AddressRow` | `operation` | always | [operation](../entities/operation.md#address-row) |
| 4 | External docs link | shared `ExternalDocsRow` | `operation` | `externalDocs.url` | [operation](../entities/operation.md#external-docs-row) |
| 5 | Description | `MarkdownTextRow` | `operation` | `description` | [operation](../entities/operation.md#description-row) |
| 6 | **Security** (h2) | `TitleRow` | `security` | ≥1 effective alternative | [security](../entities/security.md) |
| 7 | Alternatives selector | `Selector` row | `security` | ≥1 alternative (always with the section) | [security](../entities/security.md#alternatives-selector) |
| 8 | Framed scheme cards of the selected alternative | `SecuritySchemeCard` × n | `securityScheme` | selected alternative | [security](../entities/security.md#scheme-card) |
| 9 | **Extensions** (h2) + JSO tree | shared extensions section | `extensions` | ≥1 `x-*` key on the operation | [operation](../entities/operation.md#extensions-section) |
| 10 | **Request** (h2) | `TitleRow` | `request` | rows 11–15 have content | [parameters](../entities/parameters.md) |
| 11 | **Path Parameters** (h3) + schema | `TitleRow` + `JsonSchemaViewer` | `parameters` (`path`) | ≥1 path parameter | [parameters](../entities/parameters.md) |
| 12 | **Query Parameters** (h3) + schema | same | `parameters` (`query`) | ≥1 query parameter | same |
| 13 | **Headers** (h3) + schema | same | `parameters` (`header`) | ≥1 header parameter | same |
| 14 | **Cookies** (h3) + schema | same | `parameters` (`cookie`) | ≥1 cookie parameter | same |
| 15 | **Body** (h3) + required `*`; subheader: media-type selector (+ `required` tag in diffs) | `MediaTypeContentHeader` | `requestBody` / `content` | `requestBody` | [request body](../entities/request-body.md) |
| 16 | Request body description | `MarkdownTextRow` | `requestBody` | `description` | [request body](../entities/request-body.md#description-row) |
| 17 | Request body schema | `JsonSchemaViewer` | `mediaType` (selected) | selected media type has `schema` | [request body](../entities/request-body.md#schema) |
| 18 | **Responses** (h2), response-code selector in the subheader | `TitleRow` + toned `Selector` | `responses` | ≥1 response | [responses](../entities/responses.md), [response-code-selector.md](response-code-selector.md) |
| 19 | Response description | `MarkdownTextRow` | `response` | `description` | [responses](../entities/responses.md#description-row) |
| 20 | **Headers** (h3) + schema | `TitleRow` + `JsonSchemaViewer` | `responseHeaders` | ≥1 header | [responses](../entities/responses.md#headers) |
| 21 | **Body** (h3); subheader: media-type selector | `MediaTypeContentHeader` | `response` / `content` | the response has ≥1 media type | [responses](../entities/responses.md#body) |
| 22 | Response body schema | `JsonSchemaViewer` | `mediaType` (selected) | selected media type has `schema` | same |

In the diffs viewer every row is rendered when it has content on **either** side or carries a diff
of its own ([diffs.md](diffs.md#row-visibility)). The JSON Schema viewers become
`JsonSchemaDiffsViewer`, the JSO viewer `JsoDiffsViewer`.

### Layout sketch (plain, detailed mode)

```text
Upload a photo of a pet  [deprecated]                                h1 + deprecated tag (when deprecated)
uploadPetPhoto                                                       operation ID (small, grey)
[POST] /pets/{petId}/photos                                          address row
↗ Photo upload guide                                                 external docs
Uploads a new photo and attaches it to the pet. …                    description (markdown)

Security                                                             h2
[petstore_auth]  [api_key + request_signature]                       alternatives selector (OR), always shown
┌──────────────────────────────────────────────────────────────┐
│ petstore_auth                                   [OAuth 2.0]  │     framed card: h4 title + type badge
│ OAuth 2.0 with authorization code and client credentials …   │     description
│ Required scopes   write:pets  read:pets                      │     additional-info row
│   Authorization code flow                                    │     h5
│   Authorization URL   https://auth.example.com/authorize     │
│   Token URL           https://auth.example.com/token         │
│   …                                                          │
└──────────────────────────────────────────────────────────────┘

Extensions                                                           h2
  x-rate-limit: 100                                                  JSO tree
  x-audience: …

Request                                                              h2
Path Parameters                                                      h3
  petId*   integer<int64>                                            JSON Schema (synthesized)
Query Parameters                                                     h3
  dryRun   boolean   …
Headers                                                              h3
  X-Request-Id*   string<uuid>   …
Cookies                                                              h3
  session   string
Body*                        [image/png] [multipart/form-data]       h3 + required * + media-type selector
Photo binary or a multipart form with metadata.                      body description (markdown)
  Type   object                                                      JSON Schema (wrapped root)
    …

Responses     [201] [303] [400] [404] [5XX] [default]                h2 + toned code selector
Photo stored.                                                        response description
Headers                                                              h3
  Location*   string<uri>   …
Body                         [application/json] [application/xml]    h3 + media-type selector
  Type   object …                                                    JSON Schema (wrapped root)
```

## Spacing (`data-precededby`)

Rows keep the AsyncAPI spacing model: every row sets `data-precededby` from what is rendered above
it; selectors in `shared-styles/preceded-by.css` turn that into vertical gaps. Reuse the existing
members wherever the meaning matches; add only the four below (and their CSS rules, copied from
the closest existing member).

| Situation | `PrecededBy` member |
| --- | --- |
| Title row (first row) | `ROOT` |
| Operation ID row after the title / as the first row | `MESSAGE_SECTION_HEADER_HIGH_LEVEL` / `ROOT` |
| Address row after the operation ID row | **`OPERATION_ID_ROW`** (new) |
| Address row after the title / as the first row | `MESSAGE_SECTION_HEADER_HIGH_LEVEL` / `ROOT` (as AsyncAPI) |
| External docs row | `ADDRESS_ROW` |
| Description after external docs | **`EXTERNAL_DOCS_ROW`** (new) |
| Description after the address row | `ADDRESS_ROW` |
| First section header | `DESCRIPTION_ROW`, else `EXTERNAL_DOCS_ROW`, else `ADDRESS_ROW` |
| Selector row under a section header | `MESSAGE_SECTION_HEADER_HIGH_LEVEL` |
| Row after a standalone selector row | **`SECTION_SELECTOR_ROW`** (new) |
| First row of a scheme card / next card | **`SECURITY_SCHEME_CARD`** (new) for the card title row |
| Nested JSON Schema / JSO viewer under its header | `MESSAGE_SECTION_HEADER_HIGH_LEVEL` |
| Section header after a nested viewer | `JSON_SCHEMA_VIEWER` / `JSO_VIEWER` |

Precompute the `data-precededby` of each section in the parent container (one pass over the
visible sections, as `buildColumnViewerContexts` does for DDL) — a section must not inspect its
previous sibling.

## View state

All selection state is local React state in the container that renders the selector; the tree
model never changes. State is keyed by node id, so a rebuilt tree (new source) starts fresh.

| State | Owner | Initial value | Reset when |
| --- | --- | --- | --- |
| Selected security alternative | `SecurityNodeViewer` | first alternative (index 0 of the merged list) | the `security` node changes |
| Selected request media type | `RequestBodyNodeViewer` | first media type (document order) | the `content` node changes |
| Selected response | `ResponsesNodeViewer` | first `2XX` code in canonical order, else the first code (Q13) | the `responses` node changes |
| Selected media type per response | `ResponsesNodeViewer`, `Map<responseNodeId, mediaTypeNodeId>`, passed down to the response Body header | first media type of that response | the `responses` node changes; switching codes keeps each response's own choice |

In the diffs viewer an option can be invisible on one side (wholly added / removed). The selection
stays on the same node on both sides; the side where the node does not exist renders the
node's rows with its whole-node diff styles (hidden content, grey background) exactly as any other
wholly added / removed node does. Do not auto-switch selection per side.

## Container components

`packages/api-doc-viewer/src/components/OpenApiOperationViewer/`:

| Component | Renders | Notes |
| --- | --- | --- |
| `OpenApiOperationViewer.tsx` / `OpenApiOperationDiffsViewer.tsx` | root | see [Root component shape](#root-component-shape) |
| `OpenApiViewerContext.ts` | context | `devMode`, `expandedDepth`, `hideUnchangedNodes` |
| `OperationNodeViewer.tsx` | rows 1–5, dispatch of sections | precomputes header-row and section `data-precededby`; decides where the deprecated tag goes (title or address row) |
| `SecurityNodeViewer.tsx` | rows 6–8 | owns alternative selection |
| `SecuritySchemeCard/SecuritySchemeCard.tsx` | one framed card | rows in [security](../entities/security.md#scheme-card); precomputes per-side frame positions |
| `SecuritySchemeCard/OAuthFlowRows.tsx` | one OAuth flow | child of the card, inside its frame |
| `RequestNodeViewer.tsx` | row 10, dispatch of rows 11–17 | |
| `ParametersNodeViewer.tsx` | rows 11–14 (one instance per location) and row 20 | same component for request parameters and response headers |
| `RequestBodyNodeViewer.tsx` | rows 15–17 | owns request media-type selection |
| `MediaTypeContentHeader.tsx` | rows 15 and 21 | Body title, optional required marker / tag, media-type selector |
| `ResponsesNodeViewer.tsx` | row 18, then `ResponseNodeViewer` for the selected code | owns code and per-response media-type selection |
| `ResponseNodeViewer.tsx` | rows 19–22 | receives the selected media type from the parent |
| `MediaTypeSchemaViewer.tsx` | rows 17 and 22 | wraps the schema ([request body](../entities/request-body.md#schema)) and picks the plain / diffs JSON Schema viewer |

Shared components (`packages/api-doc-viewer/src/components/shared-components/`): `AddressRow/`
(moved from AsyncAPI, D9, with a `trailing` slot), `ExternalDocsRow/` (new), `ExtensionsSection/`
(extracted from AsyncAPI `ExtensionsNodeViewer`), `Selector/` (tone, D10), `Frame/` types +
`shared-styles/frame.css` and the `framePosition` prop on `TitleRow` / `TextRow` /
`MarkdownTextRow` / `AdditionalInfoRow` (D12).

Viewer utilities (`packages/api-doc-viewer/src/utils/openapi/`, CSS-free so they can be unit
tested):

| File | Content |
| --- | --- |
| `node-type-checkers.ts` | `isOpenApiOperationNode`, `isOpenApiSecurityNode`, …, `getOpenApiChildNodes(node)` (type-guard helpers, no `as`) |
| `http-method-badge-config.ts` | `OPENAPI_HTTP_METHOD_BADGE_CONFIG` + `resolveHttpMethodBadge(method)` (D13) |
| `response-code-tone.ts` | `OpenApiResponseCodeClass` → `SelectorOptionTone` |
| `section-preceded-by.ts` | one-pass `data-precededby` resolver for sections |

With-diffs guards (`isOpenApi*NodeWithDiffs`) go to `shared-utilities/tree-node-guards.ts` next to
the AsyncAPI ones.

## Test ids

| Element | `data-testid` |
| --- | --- |
| Root | `openapi-operation-viewer` / `openapi-operation-diffs-viewer` |
| Sections | `openapi-security-section`, `openapi-extensions-section`, `openapi-request-section`, `openapi-responses-section` |
| Subsections | `openapi-parameters-path`, `-query`, `-header`, `-cookie`; `openapi-request-body`; `openapi-response-headers`; `openapi-response-body` |
| Selector options | `security-alternative-<index>`, `request-media-type-<index>`, `response-code-<code>`, `response-media-type-<index>` |
| Scheme card | `security-scheme-<name>` |

Screenshot ITs click the selector options by these ids to cover non-default selections, then call
`waitForRenderingComplete(page)` (`api-doc-viewer-testing` skill → Flaky rendering). Add
`waitForOpenApiOperationViewer(page)` / `waitForOpenApiOperationDiffsViewer(page)` to
`src/it/service/viewer-waits.ts`: wait for the root test id, then paint settle. Do not wait for a
nested JSON Schema node — an operation can have no schema at all (`oas30/02-minimal-operation`).

## Related documents

- [../README.md](../README.md) — decisions and open questions
- [../display-coverage.md](../display-coverage.md) — planned baseline
- AsyncAPI root viewers (template): `packages/api-doc-viewer/src/components/AsyncApiOperationViewer/`
