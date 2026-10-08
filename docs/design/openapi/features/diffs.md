# OpenAPI operation diffs

How `OpenApiOperationDiffsViewer` gets and paints diffs. Status: **planned**. Shared contracts:
[data model with diffs](../../shared/architecture/data-model-with-diffs.md),
[viewer with diffs](../../shared/architecture/viewer-with-diffs.md),
[section header colorizing](../../shared/features/section-header-colorizing.md). Measured diff
locations: [../notes/2026-10-design-analysis.md](../notes/2026-10-design-analysis.md).

## Pipeline

```text
merged apiDiff document (whole documents, components kept)
  → OpenApiSpecWithDiffsTransformer
      1. super.transform(...)                       plain operation-oriented spec
      2. relocate diff records onto the spec        (tables below) under diffsMetaKey
      3. synthesize parameter / header schemas with diffs (OpenApiObjectSchemaWithDiffsSynthesizer)
      4. aggregateDiffsWithRollup(spec, diffsMetaKey, aggregatedDiffsMetaKey)   ← on the TRANSFORMED spec
  → OpenApiTreeWithDiffsBuilder (assignNodeDiffs per node, five aggregator families)
  → OpenApiOperationDiffsViewer → containers read OpenApiRowDiffs accessors
  → nested JsonSchemaDiffsViewer / JsoDiffsViewer continue inside schemas and extensions
```

Step 4 must run on the transformed spec (AsyncAPI comment: "It is IMPORTANT to aggregate diffs on
TRANSFORMED DOCUMENT"), otherwise rollups miss relocated and synthesized records.

## Diff sources

Paths are inside the merged document; `M` = `diffsMetaKey`, `op` = `paths[path][method]`.

### Operation

| UI | Merged-document source | Transformed-spec key |
| --- | --- | --- |
| Whole operation added / removed | `paths[path][M][method]` (`add` / `remove`); else `paths[M][path]` (`add` / `remove` of the whole path item — default `apiDiff`; with `openApiPathItemPerOperationDiffs: true` it is per method instead, E2) | root `M[""]` (node-level) |
| Address (path renamed) | `paths[M][path]` with `action: rename` (`beforeKey` → `afterKey`, E1) | root `M.address` as a **`replace`** with `beforeValue = beforeKey`, `afterValue = afterKey`, same `type` / declaration paths |
| Title | `op[M].summary` | root `M.title` |
| Operation ID row | `op[M].operationId` | root `M.operationId` |
| Deprecated tag (title row, or address row without a title) | `op[M].deprecated` (a missing value is the unifier default `false`; normalize like `required`) | root `M.deprecated` → tag diff + synthetic yellow replace on the title row |
| Description | `op[M].description` | root `M.description` |
| External docs | `op[M].externalDocs` (whole), or `op.externalDocs[M].url` / `op.externalDocs[M].description` | root `M.externalDocs` (whole), or `externalDocs[M].url` / `externalDocs[M].description` |
| Extensions | `op[M]['x-…']` | `data.extensions[M]['x-…']` |

A path rename keeps the operation node itself unchanged (not a whole-node diff); only the address
row is painted. The renamed path parameter inside is a separate diff (parameters table).

### Security

Full table in [../entities/security.md](../entities/security.md#with-diffs).

### Parameters and response headers

Full table in [../entities/parameters.md](../entities/parameters.md#with-diffs). Group nodes get
no field diffs of their own; their header is colored by the section rule over the synthesized
properties.

### Request body and responses

| UI | Merged-document source | Transformed-spec key |
| --- | --- | --- |
| Request body added / removed | `op[M].requestBody` | `data.request[M].requestBody` → `requestBody` node-level |
| Request body description | `op.requestBody[M].description` | `requestBody[M].description` |
| Request body required | `op.requestBody[M].required` | `requestBody[M].required` → side-exclusive `*`, `required` tag, title-row synthetic replace ([request-body.md](../entities/request-body.md#required-marker)) |
| Media type added / removed / renamed | `….content[M][mediaType]` (`rename` keyed by the after key, E6) | `content[M][mediaType]` → `mediaType` node-level |
| Schema inside a media type | `….content[mt].schema` and deeper | untouched (merged schema object is passed on) |
| Response added / removed / renamed (case) | `op.responses[M][code]` (`rename` keyed by the after key, E6) | `responses[M][code]` → `response` node-level |
| Response description | `op.responses[code][M].description` | `response[M].description` |
| Response headers added as a whole | `op.responses[code][M].headers` | synthesizer stamps every header property |
| Response header added / removed | `op.responses[code].headers[M][name]` | synthesizer → `properties[M][name]` |

## Node diff aggregation

Five families per kind, Factory + Strategy, under
`packages/next-data-model/src/building-service/openapi/tree-with-diffs/node-diffs-data/`. Every
kind aggregator extends `KindAny` and calls `super.aggregate()` first.

| Family | `KindAny` | Kind-specific aggregators |
| --- | --- | --- |
| `node-diffs/` | inheritance (below) + text fields `title`, `description` | `KindOperation` (`address`, `operationId`, `externalDocs`, `deprecated` flag + title-row synthetic replace), `KindRequestBody` (`required` normalized to boolean semantics + title-row synthetic replace), `KindSecurity` / `KindResponses` / `KindExtensions` / `KindParameters` / `KindResponseHeaders` / `KindRequest` (section rule in `aggregateByDescendantDiffs`), `KindSecurityScheme` (field diffs, `requiredScopes` list), `KindOAuthFlow` (URL fields, `scopes` list), `KindResponse` (code rename) |
| `node-descendant-diffs/` | child-key → diff from the node's own diff record | `KindSecurity` (index keys), `KindContent` (media-type keys), `KindResponses` (code keys), `KindRequest` (location keys + `requestBody`) |
| `node-diffs-summary/` | node's own diff types | — |
| `node-descendant-diffs-summary/` | local descendants | forward aggregators reading `aggregatedDiffsMetaKey` for kinds whose content another viewer renders: `parameters`, `responseHeaders`, `mediaType`, `extensions`, and their containers `content`, `requestBody`, `request`, `response`, `responses` (selector markers must see changes deep inside schemas) |
| `node-diffs-severities/` | one severity per placement (below) | `KindSecurityScheme`, `KindOAuthFlow` (field rows) |

### Inheritance (`KindAny`)

Copy AsyncAPI `AsyncApiNodeDiffsAggregatorKindAny`:

1. Container first, then parent: a wholly **added / removed** container or parent → the child
   inherits that diff with `inherited: true` and aggregation stops.
2. Otherwise the child takes `container.descendantDiffs[key]` / `parent.descendantDiffs[key]` as its
   node-level diff (an option added to a selector, a scheme added to an alternative, …).
3. A **rename** under the node-level key (media type, response code) is **not** a whole-node change:
   aggregation continues and the node's own field diffs are still collected (JSON Schema
   node-key-rename rule). Consumers that need "whole node changed" use
   `OpenApiRowDiffs.NodeLevel.takeWholeNodeDiff` (node-level diff except `rename`).

### Section headers

Rule: [section header colorizing](../../shared/features/section-header-colorizing.md). Applies to
**Security** (alternatives), **Extensions** (keys), **Request** (groups + body), each parameter
group and response **Headers** (synthesized properties), **Responses** (codes).

Implementation in `aggregateByDescendantDiffs` (mutates `nodeDiffs`; the return value is
discarded):

```text
if nodeDiffs[""] is add/remove (own or inherited)  → keep it (rule a)
children = enumerate the real child keys of the transformed value      // not Object.keys(descendantDiffs)
diffs    = children.map(key => descendant diff record[key])
if every child has a diff AND all are add      → synthetic add   (rule b)
if every child has a diff AND all are remove   → synthetic remove (rule b)
otherwise                                      → no header color
```

The direction check is mandatory: AsyncAPI `kind-parameters.ts` / `kind-extensions.ts` read only the
first diff and would paint a mixed add + remove set (fixture `request/03-mixed-header-changes`).
Removed children are present in merged values (E3), so the child count is the merged count.

The header severity (`TitleRow` placement) is built from the **same** diff object.

### Severity placements

New `NodeDiffsSeverityPlacemennt` members (`model/abstract/tree-with-diffs/tree-node.interface.ts`),
each with a doc comment naming its row:

| Member | Value | Row |
| --- | --- | --- |
| `ExternalDocsRow` | `external-docs-row` | external docs link |
| `OperationIdRow` | `operation-id-row` | operation ID row under the title |
| `SelectorRow` | `selector-row` | the standalone security alternatives selector row (media-type selectors sit in Body title subheaders and use `TitleRow`) |
| `SecuritySchemeLocationRow` | `security-scheme-location-row` | apiKey `In` |
| `SecuritySchemeParameterNameRow` | `security-scheme-parameter-name-row` | apiKey `Name` |
| `SecuritySchemeHttpSchemeRow` | `security-scheme-http-scheme-row` | http `Scheme` |
| `SecuritySchemeBearerFormatRow` | `security-scheme-bearer-format-row` | http `Bearer format` |
| `SecuritySchemeOpenIdConnectUrlRow` | `security-scheme-openid-connect-url-row` | `OpenID Connect URL` |
| `SecurityRequiredScopesRow` | `security-required-scopes-row` | `Required scopes` / `Required roles` |
| `OAuthFlowAuthorizationUrlRow` | `oauth-flow-authorization-url-row` | `Authorization URL` |
| `OAuthFlowTokenUrlRow` | `oauth-flow-token-url-row` | `Token URL` |
| `OAuthFlowRefreshUrlRow` | `oauth-flow-refresh-url-row` | `Refresh URL` |
| `OAuthFlowScopesRow` | `oauth-flow-scopes-row` | `Available scopes` |

Reused: `TitleRow` (every title / section header), `AddressRow`, `DescriptionRow` (operation,
request body, response, scheme descriptions — one per node, so no collision). A whole-node add /
remove fills **every** placement of the node (AsyncAPI `KindAny` severities pattern); a field diff
fills only its own placement.

## Row diff accessors

`packages/next-data-model/src/model/openapi/tree-with-diffs/row-diffs.ts`, namespace
`OpenApiRowDiffs` (mirrors `JsonSchemaRowDiffs` / `DdlApiRowDiffs`). Containers call these; they
never read `node.diffs[...]` directly.

| Accessor | Returns |
| --- | --- |
| `NodeLevel.takeWholeNodeDiff(node)` | node-level diff unless it is a `rename` |
| `Operation.takeTitleRowDiff(node)` | whole-node diff, else `title` diff, else synthetic replace for a `deprecated` change |
| `Operation.takeOperationIdRowDiff(node)` | `operationId` diff, else whole-node diff |
| `Operation.takeDeprecatedTagDiff(node)` | the tag's own `deprecated` diff (never a borrowed node-level diff) |
| `RequestBody.isRequiredStarVisibleOnSide(node, side)` | required on that side (side-exclusive) |
| `RequestBody.takeRequiredTagDiff(node)` | normalized `required` diff, `undefined` when the body is wholly added / removed |
| `SecurityScheme.isCardPresentOnSide(node, side)` | `false` on the side where the scheme does not exist (no frame there) |
| `Operation.takeAddressRowDiff(node)` | `address` diff, else whole-node diff |
| `Operation.takeExternalDocsRowDiff(node)` / `resolveExternalDocsSide(node, side)` | row diff (whole object or `url`; `description` per Q16) / `{ url, description } \| null` per side — the link text is static |
| `Section.takeHeaderRowDiff(node)` | the section-rule diff on `""` |
| `SecurityScheme.takeFieldRowDiff(node, field)` | field diff for one detail row |
| `SecurityScheme.resolveRequiredScopesSideItems(node, side)` | chips per side (`resolveListSideItems`) |
| `OAuthFlow.resolveScopesSideItems(node, side)` | chips per side |
| `MediaType.resolveSideTitle(node, side)` | media type text per side (rename aware) |
| `Response.resolveSideCode(node, side)` | code text per side (rename aware) |

## Row visibility

With-diffs visibility managers (`tree-with-diffs/node-visibility-data/kind-*.ts`) delegate diff-free
rules to the plain managers and add: a row is visible when the merged value has content **or** the
row's own diff exists (a removed description has no merged value but must render on the origin
side). Never derive this in JSX.

## Nested viewers

| Content | Viewer | What the OpenAPI layer passes |
| --- | --- | --- |
| Parameter groups, response headers | `JsonSchemaDiffsViewer` | the synthesized schema (diffs already attached) |
| Media-type schemas | `JsonSchemaDiffsViewer` | `wrapJsonSchemaForDiffsViewer('Type', schema, mediaTypeNode.diffs[""], diffMetaKeys)` |
| Extensions | `JsoDiffsViewer` | `rawValues` with the relocated `M` record |

`hideUnchangedNodes` and `diffTypes` are forwarded from `OpenApiViewerContext`.

## Unit tests (`packages/next-data-model/tests/unit-tests/`)

| File | Covers |
| --- | --- |
| `openapi-spec-transformer.test.ts` | lookup, defaults, effective security, synthesis (plain), code order, dialect per fixture |
| `openapi-spec-with-diffs-transformer.test.ts` | every row of the diff-source tables above, one case per fixture under `openapi-diffs/` |
| `openapi-object-schema-synthesizer.test.ts` | add / remove / rename / required / description precedence / whole-group stamping |
| `openapi-section-header-diffs.test.ts` | rule (a), rule (b), mixed directions, unchanged sibling |
| `openapi-security-override-diffs.test.ts` | synthetic alternative diffs (`security/05-root-security-overridden`, reverse) |
| `openapi-severities.test.ts` | one placement per row; whole-node fills all placements |

Inline cases go to `packages/samples/src/openapi-diffs.ts` (published as
`@netcracker/qubership-apihub-samples`), as `async-api-diffs.ts` does.

## Related documents

- [../architecture/data-model-with-diffs.md](../architecture/data-model-with-diffs.md)
- [../architecture/viewer-with-diffs.md](../architecture/viewer-with-diffs.md)
