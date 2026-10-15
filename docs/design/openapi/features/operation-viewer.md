# OpenAPI operation viewer

Public API, the full row stack, and local view state of `OpenApiOperationViewer` and
`OpenApiOperationDiffsViewer`. Status: **implemented** (first iteration; deviations in [../notes/2026-10-implementation-decisions.md](../notes/2026-10-implementation-decisions.md)). Per-area rules are in [../entities/](../entities/);
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
| 2 | `Operation ID:` label + `operationId` (secondary text, one line) (+ **deprecated** tag when row 1 is absent) | `TextRow` (`label` + `value`) | `operation` | `operationId` exists | [operation](../entities/operation.md#operation-id-row) |
| 3 | Address: method badge + path (+ **deprecated** tag when rows 1 and 2 are absent) | shared `AddressRow` | `operation` | always | [operation](../entities/operation.md#address-row) |
| 4 | Description | `MarkdownTextRow` | `operation` | `description` | [operation](../entities/operation.md#description-row) |
| 5 | External docs link `View external documentation ↗`, description in a `UxTooltip` | shared `ExternalDocsRow` | `operation` | `externalDocs.url` | [operation](../entities/operation.md#external-docs-row) |
| 6 | **Security** (h2) | `TitleRow` | `security` | ≥1 effective alternative | [security](../entities/security.md) |
| 7 | Security toolbar (alternatives) | shared `SecurityToolbar` | `security` | ≥1 alternative (always with the section) | [security](../entities/security.md#security-toolbar) |
| 8 | Framed scheme cards of the selected alternative | `SecuritySchemeCard` × n | `securityScheme` | selected alternative | [security](../entities/security.md#scheme-card) |
| 9 | **Extensions** (h2) + JSO tree | shared extensions section | `extensions` | ≥1 `x-*` key on the operation | [operation](../entities/operation.md#extensions-section) |
| 10 | **Request** (h2) | `TitleRow` | `request` | a parameter group or the Body is present | [parameters](../entities/parameters.md) |
| 11 | **Path Parameters** (h3) + schema | `TitleRow` + `JsonSchemaViewer` | `parameters` (`path`) | ≥1 path parameter | [parameters](../entities/parameters.md) |
| 12 | **Query Parameters** (h3) + schema | same | `parameters` (`query`) | ≥1 query parameter | same |
| 13 | **Headers** (h3) + schema | same | `parameters` (`header`) | ≥1 header parameter | same |
| 14 | **Cookies** (h3) + schema | same | `parameters` (`cookie`) | ≥1 cookie parameter | same |
| 15 | **Body** (h3) + required `*`; subheader: media-type selector (+ `required` tag in diffs) | `MediaTypeContentHeader` | `requestBody` / `content` | Body present: `description` or ≥1 media type with `schema` | [request body](../entities/request-body.md) |
| 16 | Request body description | `MarkdownTextRow` | `requestBody` | `description` | [request body](../entities/request-body.md#description-row) |
| 17 | Request body schema (incl. cloned request-body and media-type `x-*` in its Extensions sub-tree) | `JsonSchemaViewer` | `mediaType` (selected) | an option is selected (options = media types with `schema`) | [request body](../entities/request-body.md#schema) |
| 18 | **Responses** (h2), response-code selector in the subheader | `TitleRow` + toned `Selector` | `responses` | ≥1 response | [responses](../entities/responses.md), [response-code-selector.md](response-code-selector.md) |
| 19 | Response description | `MarkdownTextRow` | `response` | `description` | [responses](../entities/responses.md#description-row) |
| 20 | **Headers** (h3) + schema | `TitleRow` + `JsonSchemaViewer` | `responseHeaders` | ≥1 header | [responses](../entities/responses.md#headers) |
| 21 | **Extensions** (h3) of the selected response + JSO tree | shared `ExtensionsSection` | `extensions` (child of `response`) | ≥1 `x-*` on the Response Object | [responses](../entities/responses.md#response-extensions) |
| 22 | **Body** (h3); subheader: media-type selector | `MediaTypeContentHeader` | `response` / `content` | ≥1 media type with `schema` | [responses](../entities/responses.md#body) |
| 23 | Response body schema (incl. cloned media-type `x-*` in its Extensions sub-tree) | `JsonSchemaViewer` | `mediaType` (selected) | an option is selected | same |
| 24 | **Extensions** (h3) of the Responses Object (code-independent) + JSO tree | shared `ExtensionsSection` | `extensions`, key `responsesExtensions` (child of `operation`, **not** of the complex `responses` node) | ≥1 `x-*` on the Responses Object | [responses](../entities/responses.md#responses-extensions) |

The order of the sections in this table is not hard-coded in containers: it comes from one config
map ([Section order](#section-order)). The row numbers above follow the default config.

In the diffs viewer every row is rendered when it has content on **either** side or carries a diff
of its own ([diffs.md](diffs.md#row-visibility)); per side, a section header and its rows follow the
section's **presence** on that side — a section whose content appears or disappears as a whole is
painted wholly added / removed even when no diff sits on its own object
([diffs.md](diffs.md#section-presence-and-whole-section-changes)). The JSON Schema viewers become
`JsonSchemaDiffsViewer`, the JSO viewer `JsoDiffsViewer`.

### Layout sketch (plain, detailed mode)

```text
Upload a photo of a pet  [deprecated]                                h1 + deprecated tag (when deprecated)
Operation ID: uploadPetPhoto                                         operation ID row: static label + value (small, grey)
[POST] /pets/{petId}/photos                                          address row
Uploads a new photo and attaches it to the pet. …                    description (markdown)
View external documentation ↗                                        external docs link (description in a hover tooltip)

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
Extensions                                                           h3, Response Object x-*
  x-cache: public
Body                         [application/json] [application/xml]    h3 + media-type selector
  Type   object …                                                    JSON Schema (wrapped root)
    Extensions                                                       cloned media-type x-* (JSON Schema sub-tree)
      x-codec: br
Extensions                                                           h3, Responses Object x-* (code-independent)
  x-rate-limited: true
```

## Section order

Every block that the OpenAPI layer renders as a section or subsection is ordered by **one config
map**, so the order can be changed in one place later. Nested JSON Schema / JSO viewers are out of
scope: their internal row order belongs to those stacks.

File: `packages/api-doc-viewer/src/components/OpenApiOperationViewer/config/section-order.ts`
(CSS-free, unit-testable).

```typescript
export const OpenApiSectionIds = {
  // operation level (after the header rows: title, operation ID, address, description, external docs)
  SECURITY: 'security',
  OPERATION_EXTENSIONS: 'operationExtensions',
  REQUEST: 'request',
  RESPONSES: 'responses',
  // inside Request
  PATH_PARAMETERS: 'pathParameters',
  QUERY_PARAMETERS: 'queryParameters',
  HEADER_PARAMETERS: 'headerParameters',
  COOKIE_PARAMETERS: 'cookieParameters',
  REQUEST_BODY: 'requestBody',
  // inside Responses
  SELECTED_RESPONSE: 'selectedResponse',
  RESPONSES_EXTENSIONS: 'responsesExtensions',
  // inside the selected response
  RESPONSE_DESCRIPTION: 'responseDescription',
  RESPONSE_HEADERS: 'responseHeaders',
  RESPONSE_EXTENSIONS: 'responseExtensions',
  RESPONSE_BODY: 'responseBody',
} as const
export type OpenApiSectionId = typeof OpenApiSectionIds[keyof typeof OpenApiSectionIds]

export const OPENAPI_SECTION_ORDER = {
  operation: ['security', 'operationExtensions', 'request', 'responses'],
  request:   ['pathParameters', 'queryParameters', 'headerParameters', 'cookieParameters', 'requestBody'],
  responses: ['selectedResponse', 'responsesExtensions'],
  response:  ['responseDescription', 'responseHeaders', 'responseExtensions', 'responseBody'],
} as const satisfies {
  operation: readonly OpenApiSectionId[]
  request:   readonly OpenApiSectionId[]
  responses: readonly OpenApiSectionId[]
  response:  readonly OpenApiSectionId[]
}
```

| Rule | Detail |
| --- | --- |
| Scope | one list per container level: `OperationNodeViewer` (`operation`), `RequestNodeViewer` (`request`), `ResponsesNodeViewer` (`responses`), `ResponseNodeViewer` (`response`) |
| Containers | iterate their list and render the section whose id they meet, skipping sections that are not visible; no container has a hard-coded sequence of sections |
| Fixed, not configurable | the operation header rows (title, operation ID, address, description, external docs) and the rows **inside** a section (e.g. Body header → description → schema; Security header → selector → cards). The Responses header with its code selector always comes first in the Responses section — it is the section header, not a section of the list. |
| Moving between levels | not supported: a section id stays in its own list (a response section cannot move into `request`) |
| Spacing | separators are planned over the visible sections in the **configured** order (`OpenApiLayoutPlanner.plan`), never from a hard-coded predecessor — changing the order needs no CSS change ([Spacing](#spacing-data-precededby)) |
| Test ids, change markers, diffs | independent of the order |
| Unit test | each list contains exactly its allowed ids, each once (a reordered list is valid, a missing or foreign id fails) |
| Public API | not exposed to hosts in v1; the map is the extension point |

The default order reflects the agreed layout: the response **Extensions** subsection is always
after **Headers** and before **Body**; the code-independent Responses **Extensions** comes after the
selected response.

## Spacing (`data-precededby`)

Full design: [block-separators.md](block-separators.md) (rule, colouring, algorithm, config, cost).

| Rule | Value |
| --- | --- |
| Every OpenAPI row | symmetric padding `--openapi-row-padding` (4px top and bottom), `data-precededby="openapi-row"` |
| Rows of one block | touch: 8px between their contents |
| Between two blocks | a content-less **separator row** of 12px (20px between contents); one band, or two 6px bands when the rows around it are coloured differently (per side) |
| Security cards | content-less opening / closing **frame rows** of 24px with the border in the middle, coloured by the whole-card diff only; no separators next to them |
| Nested JSON Schema / JSO viewers | their own rows; their first row gets `OPENAPI_NESTED_VIEWER_START` (opt-in hooks `firstRowPrecededBy`, `contentPrecededBy`) |

All numbers and rules live in one config, `OpenApiSpacingConfig` (next-data-model
`model/openapi/layout/`); the data layer computes block edges, separators and frame rows; each
container builds its blocks in the configured section order and renders the plan (`OpenApiLayout`).

## View state

All selection state lives in **one** view-state store owned by `OperationNodeViewer`
(`OpenApiViewStateContext`: owner node id -> selected node id); the tree model never changes. Every
level reads it: the layout of a level depends on the selections below it (the selected media type
decides where a Body, and so the Request, ends). The store resets when the operation node changes
(a rebuilt tree starts fresh). Resolvers with the defaults: `src/utils/openapi/view-selection.ts`.

| State | Owner key | Initial value |
| --- | --- | --- |
| Selected security alternative | `security` node id | first alternative (index 0 of the merged list) |
| Selected request media type | `requestBody` node id | first media type (document order) |
| Selected response | `responses` node id | first `2XX` code in canonical order, else the first code (Q13) |
| Selected media type per response | `response` node id | first media type of that response; switching codes keeps each response's own choice |

In the diffs viewer an option can be invisible on one side (wholly added / removed). The selection
stays on the same node on both sides; the side where the node does not exist renders the
node's rows with its whole-node diff styles (hidden content, grey background) exactly as any other
wholly added / removed node does. Do not auto-switch selection per side.

## Container components

`packages/api-doc-viewer/src/components/OpenApiOperationViewer/`:

| Component | Renders | Notes |
| --- | --- | --- |
| `OpenApiOperationViewer.tsx` / `OpenApiOperationDiffsViewer.tsx` | root | see [Root component shape](#root-component-shape) |
| `OpenApiViewerContext.ts` | context | `devMode`, `expandedDepth`, `hideUnchangedNodes`, `spacing` (`OpenApiSpacingConfig`) |
| `OpenApiViewStateContext.ts` | context | the view-state store ([View state](#view-state)) |
| `OpenApiLayout.tsx` | one container level | renders `OpenApiLayoutPlanner.plan(blocks)`: blocks and `SeparatorRow`s; `OpenApiBlock` = a layout block whose payload renders it |
| `OperationNodeViewer.tsx` | rows 1–5, dispatch of sections | owns the view state; builds the header block (rows from `resolveOperationHeaderRows`) and the section blocks in config order; places the deprecated tag (title, operation ID or address row) |
| `SecurityNodeViewer.tsx` | rows 6–8 | `buildSecurityBlock`: title + toolbar block, then the "No authentication" text or the cards |
| `SecuritySchemeCard/SecuritySchemeCard.tsx` | one framed card | rows in [security](../entities/security.md#scheme-card); opening / closing `SecurityFrameRow`, content segments planned like blocks |
| `shared-components/Security/` | `SecurityToolbar`, `SecurityRow`, `SecurityFrameRow` + row contents (props, flow header, scopes toggle, scope rows) | shared with AsyncAPI server security later; flow parts are built inside `SecuritySchemeCard` |
| `RequestNodeViewer.tsx` | row 10, rows 11–17 | `buildRequestBlock` (parameter groups and the Body, in config order); the request body viewer (rows 15–17) is inside this file |
| `ParametersNodeViewer.tsx` | rows 11–14 (one instance per location) and row 20 | `buildParametersBlock`; same component for request parameters and response headers |
| `OpenApiExtensionsNodeViewer.tsx` (shared `ExtensionsSection`) | rows 9, 21, 24 | `buildExtensionsBlock`; heading variant per call site (h2 operation, h3 response / Responses) |
| `MediaTypeContentSection.tsx` | rows 15–17 and 22–23 | Body title, optional required marker / tag, media-type selector, description, wrapped schema |
| `ResponsesNodeViewer.tsx` | row 18, then the selected response's sections, then row 24 (order from `OPENAPI_SECTION_ORDER.responses`) | `buildResponsesBlock`; the code selector writes the view state |
| `response-blocks.tsx` | rows 19–23 | `buildResponseBlocks`: the selected response's sections (`OPENAPI_SECTION_ORDER.response` order) as sibling blocks of the Responses level |
| `OpenApiSchemaViewer.tsx` | rows 17, 23 and the parameter schemas | picks the plain / diffs JSON Schema viewer |

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

With-diffs guards (`isOpenApi*NodeWithDiffs`) go to `shared-utilities/tree-node-guards.ts` next to
the AsyncAPI ones.

## Test ids

| Element | `data-testid` |
| --- | --- |
| Root | `openapi-operation-viewer` / `openapi-operation-diffs-viewer` |
| Sections | `openapi-security-section`, `openapi-extensions-section`, `openapi-request-section`, `openapi-responses-section`, `openapi-response-extensions`, `openapi-responses-extensions` |
| Subsections | `openapi-parameters-path`, `-query`, `-header`, `-cookie`; `openapi-request-body`; `openapi-response-headers`; `openapi-response-body` |
| Selector options | `security-alternative-<index>`, `request-media-type-<index>`, `response-code-<code>`, `response-media-type-<index>` |
| Scheme card | `security-scheme-<name>` |

Screenshot ITs click the selector options by these ids to cover non-default selections, then call
`waitForRenderingComplete(page)` (`api-doc-viewer-testing` skill → Flaky rendering). Add
`waitForOpenApiOperationViewer(page)` / `waitForOpenApiOperationDiffsViewer(page)` to
`src/it/service/viewer-waits.ts`: wait for the root test id, then paint settle. Do not wait for a
nested JSON Schema node — an operation can have no schema at all (`oas30/minimal/*`).

## Related documents

- [../README.md](../README.md) — decisions and open questions
- [../display-coverage.md](../display-coverage.md) — planned baseline
- AsyncAPI root viewers (template): `packages/api-doc-viewer/src/components/AsyncApiOperationViewer/`
