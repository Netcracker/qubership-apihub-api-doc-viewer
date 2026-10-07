# OpenAPI — display coverage

Planned baseline for the OpenAPI stack (`OpenApiOperationViewer` / `OpenApiOperationDiffsViewer` +
`OpenApiTreeBuilder` / `OpenApiTreeWithDiffsBuilder`). Status: **planned** — every `viewer` tag
below is the target of the first implementation; switch this document to "current behaviour" and
refresh the date when it lands.

Last reviewed against the design: 2026-10-07.

## Sources

Planned locations; keep in sync when the code lands.

| Layer | Location |
| --- | --- |
| Dialects | `packages/next-data-model/src/building-service/openapi/shared/dialects/` |
| Operation → operation-oriented spec | `packages/next-data-model/src/building-service/openapi/shared/openapi-spec-transformer.ts` |
| Merged diffs → operation-oriented spec | `packages/next-data-model/src/building-service/openapi/shared/openapi-spec-with-diffs-transformer.ts` |
| Schema synthesizer | `packages/next-data-model/src/building-service/openapi/shared/object-schema-*synthesizer.ts` |
| Crawl rules | `packages/next-data-model/src/building-service/openapi/json-crawl-entities/` |
| Builders, aggregators, visibility | `packages/next-data-model/src/building-service/openapi/{tree,tree-with-diffs}/` |
| Tree model, accessors | `packages/next-data-model/src/model/openapi/` |
| Shared types | `packages/next-data-model/src/shared/openapi/` |
| Viewers | `packages/api-doc-viewer/src/components/OpenApiOperationViewer/` |
| Fixture catalogues | `packages/samples/openapi/README.md`, `packages/samples/openapi-diffs/README.md` |

## Scope

One OpenAPI 3.0.x / 3.1.x **operation** (`path` + `method`) of a normalized document, or of a merged
`apiDiff` document. Not a path, tag, or document browser.

| Viewer | Props |
| --- | --- |
| `OpenApiOperationViewer` | `source`, `operationKeys`, `displayMode`, `devMode`, `noHeading`, `expandedDepth` |
| `OpenApiOperationDiffsViewer` | `mergedSource` instead of `source`, plus `diffMetaKeys`, `diffTypes`, `hideUnchangedNodes` |

## Pipeline

```text
OpenAPI document | merged diff document
  → OpenApiSpecTransformer | OpenApiSpecWithDiffsTransformer   (operation-oriented spec, dialect)
  → OpenApiTreeBuilder | OpenApiTreeWithDiffsBuilder
  → OpenApiOperationViewer | OpenApiOperationDiffsViewer
  → OperationNodeViewer → Security | Extensions | Request | Responses containers
```

Schemas (parameters, headers, bodies) are rendered by the JSON Schema viewers, extensions by the
JSO viewers. Diagrams: [architecture/](architecture/).

## Classification tags

| Tag | Meaning |
| --- | --- |
| **`viewer`** | Shown (target of the first implementation). |
| **`ndm-reserved`** | Kept on the tree node value but not painted. |
| **`intentional-gap`** | Product decision — absence is **not** a regression. |
| **`planned`** | Accepted follow-up; not part of the first implementation. |

## Displayed (plain)

| Area | UI element | Condition | Design |
| --- | --- | --- | --- |
| Header | Title (h1) | `summary` exists and not `noHeading`; no fallback | [entities/operation.md](entities/operation.md#title-row) |
| Header | **deprecated** tag | `deprecated: true`; in the title subheader, on the address row when there is no title | [entities/operation.md](entities/operation.md#deprecated-tag) |
| Header | Operation ID (secondary text) | `operationId` | [entities/operation.md](entities/operation.md#operation-id-row) |
| Header | Address row: method badge + path | always | [entities/operation.md](entities/operation.md#address-row) |
| Header | External docs link | `externalDocs.url` | [entities/operation.md](entities/operation.md#external-docs-row) |
| Header | Description (markdown) | `description` | [entities/operation.md](entities/operation.md#description-row) |
| Security | Section (h2) | ≥1 effective alternative | [entities/security.md](entities/security.md) |
| Security | Alternatives selector | ≥1 alternative (always with the section) | [entities/security.md](entities/security.md#alternatives-selector) |
| Security | Framed scheme card: title (h4) + type badge, description, `In`, `Name`, `Scheme`, `Bearer format`, `OpenID Connect URL`, `Required scopes` / `Required roles` | per scheme of the selected alternative; detail rows in `detailed` mode | [entities/security.md](entities/security.md#scheme-card) |
| Security | OAuth flow rows: title (h5), `Authorization URL`, `Token URL`, `Refresh URL`, `Available scopes` | oauth2 | [entities/security.md](entities/security.md#oauth-flow-rows-oauthflowrows) |
| Security | `No authentication` alternative | `{}` requirement | [entities/security.md](entities/security.md#anonymous-alternative-content) |
| Extensions | Section (h2) + JSO tree | `x-*` keys on the operation | [entities/operation.md](entities/operation.md#extensions-section) |
| Request | Section (h2) | parameters or body | [entities/parameters.md](entities/parameters.md) |
| Request | Path / Query Parameters, Headers, Cookies (h3) + synthesized schema | parameters of that `in` | [entities/parameters.md](entities/parameters.md#groups) |
| Request | `Media type` custom annotation on a parameter | `content`-described parameter | [entities/parameters.md](entities/parameters.md#property-schema-of-one-entry) |
| Request | Body (h3) + media-type selector | `requestBody` | [entities/request-body.md](entities/request-body.md) |
| Request | Required `*` on the Body title | `requestBody.required: true` | [entities/request-body.md](entities/request-body.md#required-marker) |
| Request | Body description (markdown) | `requestBody.description` | [entities/request-body.md](entities/request-body.md#description-row) |
| Request | Body schema (wrapped root `Type`) | selected media type has `schema` | [entities/request-body.md](entities/request-body.md#schema) |
| Responses | Section (h2) + toned code selector | `responses` | [entities/responses.md](entities/responses.md), [features/response-code-selector.md](features/response-code-selector.md) |
| Responses | Response description (markdown) | `description` | [entities/responses.md](entities/responses.md#description-row) |
| Responses | Headers (h3) + synthesized schema | ≥1 header | [entities/responses.md](entities/responses.md#headers) |
| Responses | Body (h3) + media-type selector in the subheader + schema | the selected response has content | [entities/responses.md](entities/responses.md#body) |

## Displayed (with diffs)

`OpenApiOperationDiffsViewer` renders the same rows in `SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`; a row
shows when it has content on either side or a diff of its own.

| Area | Diff | Severity placement |
| --- | --- | --- |
| Title | `title` (summary), whole operation, `deprecated` change (synthetic replace) | `title-row` |
| Deprecated tag | its own `deprecated` diff | — (tag chrome) |
| Operation ID | `operationId` | `operation-id-row` |
| Request Body title | `required` change: side-exclusive `*`, diff-colored `required` tag, synthetic replace | `title-row` |
| Address | path rename → partial replace | `address-row` |
| External docs | whole add / remove, `url` / `description` replace | `external-docs-row` |
| Descriptions (operation, body, response, scheme) | `description` | `description-row` |
| Section and subsection headers | [section rule](features/diffs.md#section-headers) | `title-row` |
| Security alternatives | add / remove (index-mapped), override switch (synthetic) | selector markers, `selector-row` |
| Scheme card | whole add / remove, field diffs, scope list diffs | `security-scheme-*-row`, `security-required-scopes-row` |
| OAuth flow | URL fields, available scopes | `oauth-flow-*-row` |
| Code / media-type selectors | option add / remove / rename, change markers incl. nested schemas | selector markers, `selector-row` |
| Parameters, headers, bodies | continue in `JsonSchemaDiffsViewer` (rename, required, add / remove from the synthesizer) | JSON Schema placements |
| Extensions | continue in `JsoDiffsViewer` | JSO placements |

## Not displayed

| Item | Tag | Notes |
| --- | --- | --- |
| `servers` (document, path item, operation) | `planned` | The address row shows the path only. |
| Parameter / header `style`, `explode`, `allowEmptyValue`, `allowReserved` | `intentional-gap` | `api-unifier` injects defaults; showing them would add noise to every parameter. |
| Parameter / header / media type `example`, `examples` | `planned` | Schema-level examples are shown by the JSON Schema stack. |
| Media type `encoding` | `planned` | multipart details. |
| Parameter / header / response / media type `x-*` | `planned` | Only operation-level extensions are shown. |
| `tags` | `intentional-gap` | Not part of the operation view. |
| `callbacks`, `links`, `webhooks` | `intentional-gap` | Out of the operation-viewer scope. |
| Security requirement inherited from the document (hint) | `ndm-reserved` | `isInheritedFromDocument` on the `security` node. |
| Schema keywords `const`, `contentMediaType`, `contentEncoding` | — | JSON Schema stack topic; triage against [../json-schema/display-coverage.md](../json-schema/display-coverage.md). |
| Hiding unchanged OpenAPI rows | `planned` | Only nested JSON Schema trees hide unchanged nodes. |
| Diff-type filters on OpenAPI rows | `planned` | `diffTypes` is forwarded; floating badges keep `hidden={false}` (as AsyncAPI). |
| Layout modes other than document / side-by-side | `intentional-gap` | As AsyncAPI. |

## Triage rules

1. Check a fixture against **Displayed** before filing a bug.
2. A missing or wrong row **inside** a parameter group, header list, or body is triaged against the
   JSON Schema coverage; inside extensions, against JSO.
3. Diff semantics are fixed in next-data-model (transformer, synthesizer, aggregators), never in
   containers.
4. A behaviour that differs between OAS 3.0 and 3.1 belongs to a dialect class
   ([features/oas-versions.md](features/oas-versions.md)) or upstream; never branch on the version
   in a container.

## Regression coverage

Planned suites (fixtures exist; stories and ITs are step 2 / 6 of the
[implementation plan](README.md#implementation-plan)):

| Suite | Fixtures |
| --- | --- |
| `OpenAPI Operation Suite/OAS 3.0`, `…/OAS 3.1` | `packages/samples/openapi/` |
| `OpenAPI Operation Diffs Suite/<Category> Samples` | `packages/samples/openapi-diffs/` |

## Related documents

- [README.md](README.md) — decisions, open questions, plan
- [../async-api/display-coverage.md](../async-api/display-coverage.md) — closest stack
- [../json-schema/display-coverage.md](../json-schema/display-coverage.md) — nested schemas
- [../jso/features/diffs.md](../jso/features/diffs.md) — extensions
