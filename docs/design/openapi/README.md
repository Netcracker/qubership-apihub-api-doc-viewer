# OpenAPI operation viewer — design

Technical design of `OpenApiOperationViewer` / `OpenApiOperationDiffsViewer` and their
next-data-model stack (`OpenApiTreeBuilder` / `OpenApiTreeWithDiffsBuilder`). Status: **planned**
— nothing here is implemented yet. This folder is the source of truth for the implementation;
skills (`next-data-model-authoring`, `api-doc-viewer-authoring`, `api-doc-viewer-testing`) are
updated from it once the implementation lands.

The viewer reuses what already exists: the JSON Schema viewers render every schema (parameters,
headers, bodies), the JSO viewers render extensions, and the shared rows (`TitleRow`,
`MarkdownTextRow`, `AdditionalInfoRow`, `Selector`, …) render everything else. The new code is an
**OpenAPI layer** that picks one operation out of a document, reshapes it into a viewer-oriented
tree, and lays the rows out.

## Terms

| Term | Meaning |
| --- | --- |
| Operation | One `path` + `method` pair of `paths` (an Operation Object). |
| Operation keys | `{ path, method }` — how the host selects the operation. |
| Section | A second-level block: **Security**, **Extensions**, **Request**, **Responses**. |
| Subsection | A third-level block: **Path Parameters**, **Query Parameters**, **Headers**, **Cookies**, **Body** (request), **Headers**, **Body** (response). |
| Alternative | One Security Requirement Object of the effective `security` list; alternatives are joined by **OR**. |
| Card | One security scheme of the selected alternative; cards of one alternative are joined by **AND**. |
| Dialect | OAS 3.0 or OAS 3.1 behaviour, chosen from the document's `openapi` field. |
| Synthesized schema | A JSON Schema object built by the data layer from parameters or response headers (one property per parameter / header). |

## Reading order

| # | Document | Read when |
| --- | --- | --- |
| 1 | [features/operation-viewer.md](features/operation-viewer.md) | Always — public API, the full row stack top to bottom, selection state. |
| 2 | [entities/](entities/) | Implementing one area: [operation](entities/operation.md), [security](entities/security.md), [parameters](entities/parameters.md), [request body](entities/request-body.md), [responses](entities/responses.md). |
| 3 | [features/oas-versions.md](features/oas-versions.md) | Anything that may differ between OAS 3.0 and OAS 3.1. |
| 4 | [features/diffs.md](features/diffs.md) | With-diffs data layer and viewer: where each diff comes from, how it is aggregated and painted. |
| 5 | [features/response-code-selector.md](features/response-code-selector.md) | The multicolor response-code selector and the `Selector` tone extension. |
| 6 | [architecture/](architecture/) | Class and component diagrams (data model and viewer, plain and with diffs). |
| 7 | [display-coverage.md](display-coverage.md) | Planned display baseline; triage of what is shown, omitted, or planned. |
| 8 | [notes/2026-10-design-analysis.md](notes/2026-10-design-analysis.md) | Evidence: how `api-unifier` and `apiDiff` actually shape OpenAPI documents (measured on the fixtures). |

## Decisions

| Id | Decision | Why |
| --- | --- | --- |
| D1 | Follow the AsyncAPI pipeline: spec transformer → operation-oriented spec → json-crawl → tree → viewer. | Same shape as the closest existing stack; reviewers and agents already know it. |
| D2 | `OpenApiTreeWithDiffsBuilder` **extends** `OpenApiTreeBuilder`; `OpenApiSpecWithDiffsTransformer` extends `OpenApiSpecTransformer`. | Default non-JSO layout (`next-data-model-authoring`). |
| D3 | Parameters and response headers are **synthesized into JSON Schema objects in next-data-model** (one property per parameter / header) and rendered by the JSON Schema viewers. | The viewer must not compute diffs; a story helper already proves the approach (`parameters-schema-synthesis.ts`) and is replaced by the data-layer class. |
| D4 | Version differences go through one **dialect strategy** (`OpenApi30Dialect`, `OpenApi31Dialect`); everything else is shared. | Most differences are absorbed by `api-unifier` and the JSON Schema stack; the rest is small and must stay in one place. See [features/oas-versions.md](features/oas-versions.md). |
| D5 | One set of OpenAPI container components serves plain and with-diffs rendering (AsyncAPI pattern); containers never compute diffs — they read `OpenApiRowDiffs` accessors and visibility managers. | The OpenAPI layer mostly composes rows and nested viewers; duplicating ~12 containers adds no value. Diff and visibility logic still lives in next-data-model. |
| D6 | Row visibility lives in next-data-model `node-visibility-data/` from day one. | AsyncAPI still keeps it in the viewer and lists the move as `planned`; do not repeat that. |
| D7 | Every row instance that can carry its own diff gets its **own** `NodeDiffsSeverityPlacemennt`. | Shared placements collapse badges (JSON Schema validation-rows lesson). |
| D8 | Section headers follow [section header colorizing](../shared/features/section-header-colorizing.md) with **full coverage and uniform direction**. | AsyncAPI `kind-parameters` / `kind-extensions` read only the first child diff; a mixed add/remove set is painted wrongly there. |
| D9 | `AddressRow` moves to `shared-components/` and takes a badge descriptor; AsyncAPI passes its action badge, OpenAPI its HTTP method badge. | One partial-replace implementation for both stacks. |
| D10 | `Selector` gains an optional per-option **tone**; the default tone keeps today's grey look. | The response-code selector is the same control with colors ([features/response-code-selector.md](features/response-code-selector.md)). |
| D11 | Security schemes are resolved from `components.securitySchemes` of the **same** document the viewer receives. | Security requirements reference schemes by name, not by `$ref`; nothing else carries the scheme definition. |

## Open questions

Each question has a recommended default; implementation may proceed with it until the product
owner decides otherwise.

| Id | Question | Recommended default |
| --- | --- | --- |
| Q1 | Folder and identifier spelling: `openapi` (spec's own name, used here) or `open-api` (mirrors `async-api`)? | `openapi` for folders, `OpenApi` for identifiers. |
| Q2 | Response media-type selector: its own row above the response description (as requested) or a subheader of the response **Body** title (as in the request)? | Own row, as requested; the response **Body** title has no selector. |
| Q3 | A Media Type Object has no `description`. The row under the media-type selector shows `response.description`, which does not change with the selected media type. Accept? | Yes. |
| Q4 | Body schemas: wrap the root under a synthetic property (AsyncAPI payload parity, title `Type`) or render the raw root? | Wrap, title `Type`, root nesting indicator suppressed — identical to AsyncAPI payload. |
| Q5 | Request header parameters `Accept`, `Content-Type`, `Authorization` and the response header `Content-Type` are ignored by the specification. Hide them? | Show them unchanged (no silent filtering); revisit if users complain. |
| Q6 | Show the security alternatives selector when there is only one alternative? | No — render the cards directly; show the selector from two alternatives (union of both sides in diffs). |
| Q7 | Label and content of an anonymous alternative (`{}`)? | Option title `No authentication`; content is one muted text row `Authentication is not required.` |
| Q8 | "Card" look: a framed box per scheme needs a frame slot in `SideBySideLayout` (each row draws its own two halves). v1 look? | v1: an indented row group with an `h4` title, like AsyncAPI server blocks. A framed card is a follow-up. |
| Q9 | HTTP method badge colors. | Table in [entities/operation.md](entities/operation.md#address-row). |
| Q10 | Title when `summary` is absent. | `operationId`, else `METHOD path`. |
| Q11 | Out of v1 scope: `requestBody.required`, operation `deprecated`, `servers`, parameter `style` / `explode` / `allowReserved` / `example(s)`, media type `examples` / `encoding`, `callbacks`, `links`. | Not displayed in v1 (`planned` / `intentional-gap` in [display-coverage.md](display-coverage.md)). |
| Q12 | Media type of a `content`-described parameter: `customAnnotations` row (works with diffs) or the plain-only `topLevelPropsMediaTypes` badge? | `customAnnotations` row `Media type`, in both modes. |
| Q13 | Initially selected response code. | First `2XX` code in canonical order, else the first code. |
| Q14 | Diffs viewer `operationKeys.path`: the merged-document key (the **after** path of a renamed path)? | Yes — the merged key; documented in [features/operation-viewer.md](features/operation-viewer.md#public-api). |
| Q15 | Effective security when an operation starts / stops overriding the document-level `security` (synthetic alternative diffs). v1 or follow-up? | v1 — the algorithm is small ([entities/security.md](entities/security.md#with-diffs)). |

## Implementation plan

Test-first, per [../README.md](../README.md#workflow). Each step lists its exit criterion.

| Step | Work | Skill | Exit criterion |
| --- | --- | --- | --- |
| 1 | Fixtures and catalogues: `packages/samples/openapi/` (plain, OAS 3.0 + 3.1) and `packages/samples/openapi-diffs/` (pairs). A first set exists. | testing | Catalogues list every case; cases cover every row of [display-coverage.md](display-coverage.md). |
| 2 | Plain stories `OpenAPI Operation Suite/*`, screenshot ITs, `waitForOpenApiOperationViewer`. | testing | Stories build; ITs fail only because the viewer is missing. |
| 3 | next-data-model plain: model types, dialects, `OpenApiSpecTransformer`, schema synthesizer, crawl rules, `OpenApiTreeBuilder`, visibility managers, unit tests. | ndm-authoring | Unit tests green: lookup, effective security, synthesis, dialect, response-code order. |
| 4 | Shared UI: `Selector` tone, shared `AddressRow`, `ExternalDocsRow`, shared extensions section. | viewer-authoring | AsyncAPI and JSON Schema screenshot ITs unchanged. |
| 5 | Plain viewer `OpenApiOperationViewer`. | viewer-authoring | Plain ITs green; snapshots reviewed. |
| 6 | Diff stories `OpenAPI Operation Diffs Suite/*` and ITs. | testing | Stories build. |
| 7 | next-data-model with diffs: with-diffs transformer, with-diffs synthesizer, five aggregator families, severities, `OpenApiRowDiffs`, unit tests. | ndm-authoring | Unit tests green for every row of the diff-source table in [features/diffs.md](features/diffs.md). |
| 8 | Diffs viewer `OpenApiOperationDiffsViewer`. | viewer-authoring | Diff ITs green; DOM width check for near-white row backgrounds (testing skill, pixel-diff blind spot). |
| 9 | Refresh [display-coverage.md](display-coverage.md) and diagrams to `implemented`; update skills and `AGENTS.md`; add an `api-doc-viewer-using` section. | review-session | Docs match code. |

## Related documents

- AsyncAPI stack (closest reference): [../async-api/display-coverage.md](../async-api/display-coverage.md), [../async-api/architecture/](../async-api/architecture/)
- JSON Schema stack (renders every schema): [../json-schema/display-coverage.md](../json-schema/display-coverage.md)
- Shared contracts: [../shared/](../shared/)
- Fixture catalogues: [../../../packages/samples/openapi/README.md](../../../packages/samples/openapi/README.md), [../../../packages/samples/openapi-diffs/README.md](../../../packages/samples/openapi-diffs/README.md)
