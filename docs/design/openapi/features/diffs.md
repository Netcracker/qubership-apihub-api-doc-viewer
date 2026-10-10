# OpenAPI operation diffs

How `OpenApiOperationDiffsViewer` gets and paints diffs. Status: **implemented** (first iteration; deviations in [../notes/2026-10-implementation-decisions.md](../notes/2026-10-implementation-decisions.md)). Shared contracts:
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
      4. resolve section presence per side → synthetic section add / remove (OpenApiSectionPresenceResolver)
      5. aggregateDiffsWithRollup(spec, diffsMetaKey, aggregatedDiffsMetaKey)   ← on the TRANSFORMED spec
  → OpenApiTreeWithDiffsBuilder (assignNodeDiffs per node, five aggregator families)
  → OpenApiOperationDiffsViewer → containers read OpenApiRowDiffs accessors
  → nested JsonSchemaDiffsViewer / JsoDiffsViewer continue inside schemas and extensions
```

Step 5 must run on the transformed spec (AsyncAPI comment: "It is IMPORTANT to aggregate diffs on
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
| Request Body Object `x-*` | `op.requestBody[M]['x-…']` | cloned into every request media type's schema root, per-key precedence ([request-body.md](../entities/request-body.md#extensions)) |
| Media Type Object `x-*` (request, response) | `….content[mt][M]['x-…']` | cloned into that schema root, per-key precedence |
| Response Object `x-*` | `op.responses[code][M]['x-…']` | `response.extensions[M]` → response **Extensions** subsection |
| Responses Object `x-*` | `op.responses[M]['x-…']` | `data.responsesExtensions[M]` → Responses **Extensions** subsection |

## Node diff aggregation

Five families per kind, Factory + Strategy, under
`packages/next-data-model/src/building-service/openapi/tree-with-diffs/node-diffs-data/`. Every
kind aggregator extends `KindAny` and calls `super.aggregate()` first.

| Family | `KindAny` | Kind-specific aggregators |
| --- | --- | --- |
| `node-diffs/` | inheritance (below) + text fields `title`, `description` | `KindOperation` (`address`, `operationId`, `externalDocs`, `deprecated` flag + title-row synthetic replace), `KindRequestBody` (`required` normalized to boolean semantics + title-row synthetic replace), section kinds read the synthetic whole-section diff written by `OpenApiSectionPresenceResolver` ([below](#section-presence-and-whole-section-changes)) — no section logic in `aggregateByDescendantDiffs`, `KindSecurityScheme` (field diffs, `requiredScopes` list), `KindOAuthFlow` (URL fields, `scopes` list), `KindResponse` (code rename) |
| `node-descendant-diffs/` | child-key → diff from the node's own diff record | `KindSecurity` (index keys), `KindContent` (media-type keys), `KindResponses` (code keys), `KindRequest` (location keys + `requestBody`) |
| `node-diffs-summary/` | node's own diff types | — |
| `node-descendant-diffs-summary/` | local descendants | forward aggregators reading `aggregatedDiffsMetaKey` for kinds whose content another viewer renders: `parameters`, `responseHeaders`, `mediaType`, `extensions`, and their containers `content`, `requestBody`, `request`, `responses`; `KindResponse` = the response-code change marker (inner changes only, ∅ for a wholly added / removed response — [responses.md](../entities/responses.md#change-markers-on-response-code-options)). Rule for every kind: a node whose node-level diff is add / remove (own or inherited) gets an empty descendant summary and skips `mergeAggregatedDiffTypesIntoDescendantSummary` (inferred and stamped diffs are not "changes inside") |
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

### Section presence and whole-section changes

In the diffs viewer every row exists in both columns. What a section shows on **one side** depends
on whether it has displayable content on that side — not on whether its raw OpenAPI object exists,
and not on where `apiDiff` attached a diff. The same intent lands at different depths (E19):
removing the only media type is a `content[M][mt]` remove, removing a response's whole `content` is
one `content` remove, deleting a `headers` map is one `remove` **per header** (the unifier default
`headers: {}` exists on the after side), and in none of these cases does the diff sit on the
section's own object.

**Presence.** Each section kind has a presence predicate `present(side)` over the reconstructed
side values (per-side reconstruction: [parameters.md, step 1](../entities/parameters.md#step-1--reconstruct-each-side-from-the-merged-entry)):

| Section (node) | `present(side)` — the section has on that side… | Not counted |
| --- | --- | --- |
| Security (`security`) | ≥1 effective alternative (operation list, or the document list when not overridden) | — |
| Security card (`securityScheme`) | the scheme in the selected alternative | — |
| Extensions (`extensions`) | ≥1 `x-*` key | — |
| Request (`request`) | a present parameter group **or** a present request Body | — |
| Parameter group (`parameters`), response Headers (`responseHeaders`) | ≥1 entry | — |
| Request Body (`requestBody`) | a non-empty `description` **or** ≥1 media type option (below) | `required` alone; media types without `schema` |
| Media type option (`mediaType`, request and response) | `schema` (any value, incl. `true` / `false` / `{}`) | the media-type key alone |
| Response Body (part of `response`) | ≥1 media type option | — |
| Responses (`responses`) | ≥1 response code **or** ≥1 Responses Object `x-*` | — |
| Response / Responses Extensions (`extensions` under `response` / `responsesExtensions`) | ≥1 `x-*` key | — |
| Response option (`response`) | the code exists | — |

A media type without `schema` is **not** content (product decision, 2026-10-08): it is not a
selector option in either mode, and a Body made only of such media types (and no description) is
not rendered.

**Whole-section diff.** `OpenApiSectionPresenceResolver` (with-diffs transformer, step 4) evaluates
every section bottom-up (options → Body → group → Request; codes → Responses) and writes a
**synthetic node-level diff** into the parent's diff record under the section key — the place
`KindAny` reads it from (`parent.descendantDiffs[key]`):

| `present(before)` | `present(after)` | Section | Synthetic diff |
| :---: | :---: | --- | --- |
| ✓ | ✗ | wholly **removed** | `remove`; `beforeValue` = the section's before value |
| ✗ | ✓ | wholly **added** | `add`; `afterValue` = the section's after value |
| ✓ | ✓ | changed inside (or unchanged) | none — inner diffs paint their own rows; the header stays uncolored |
| ✗ | ✗ | not rendered at all | none — even if raw diffs exist inside (e.g. a schema-less media type added) |

- A raw add / remove already on the section object (`requestBody` removed, a response removed, the
  whole operation added) yields the same result; the resolver keeps the raw diff instead of a
  synthetic one.
- Synthetic diff metadata: `type` = the highest type among the raw diffs that caused the change;
  declaration paths from those diffs.
- Through `KindAny` inheritance every row of a wholly added / removed section takes the section
  diff: header and rows green / red on the side that has them, hidden (grey, no content) on the
  other. Inner raw diffs are not shown on top (aggregation stops on inherited add / remove).
- The header severity (`TitleRow` placement) is built from the **same** diff object.

**Relation to the shared rule.** This is the
[section header colorizing](../../shared/features/section-header-colorizing.md) rule with
"children" widened to **everything the section displays**: rule (a) = a raw add / remove on the
section or an ancestor; rule (b) "every child uniformly added / removed" = `present` flips. It is
stricter where it must be: a Body whose media types were all added while its description stayed is
**not** wholly added (`present` is true on both sides). Mixed sets never flip `present` in one
direction, so the AsyncAPI first-diff-only bug (`kind-parameters.ts` / `kind-extensions.ts`,
fixture `request-headers/03-entry-renamed`) cannot happen. Removed children are present in merged
values (E3), so counts use the merged set reconstructed per side.

Cases (fixtures in `packages/samples/openapi-diffs/`):

| Fixture | Change | Result |
| --- | --- | --- |
| `request-body/02-body-removed` | `requestBody` removed | Body wholly removed (raw diff) |
| `request-body/12-only-media-type-removed` | the only media type removed, no description | Body wholly removed (synthetic) |
| `request-body/16-schema-removed` | the only media type loses its `schema`, no description | option wholly removed → Body wholly removed (synthetic) |
| `request-body/15-schema-added` | symmetric | option and Body wholly added (synthetic) |
| `request-body/14-media-type-removed-description-kept` | the only media type removed, description stays | Body present on both sides; option removed; header uncolored |
| `response-body/02-body-removed` | response `content` removed | response Body wholly removed; the response option itself unchanged (code still exists) |
| `response-body/16-schema-removed` | the only media type loses its `schema` | response Body wholly removed |
| `response-headers/20-all-removed` | `headers` map deleted (arrives as per-header removes) | response Headers wholly removed |
| `request-headers/20-all-removed` | every header parameter removed | Headers group wholly removed |
| `request-headers/03-entry-renamed` | one header removed, one added | present on both sides → header uncolored |
| `security/02-security-removed` | `security: []` | Security wholly removed |

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
rules to the plain managers. Two separate questions, never mixed:

| Question | Rule |
| --- | --- |
| Is the row **rendered** (in both columns)? | `present(before) \|\| present(after)` for section headers ([presence](#section-presence-and-whole-section-changes)); for a single-field row: the field has content on either side **or** its own diff exists (a removed description has no merged value but must render on the origin side) |
| What does each **side** show? | the row's diff styles: a wholly added / removed section's synthetic or raw diff hides the header and content on the side where `present` is false (`isHeaderVisible` / `isContentVisible`), the other side is green / red |

So a header is never shown on a side merely because the section's raw object exists there (e.g.
`requestBody: {}` after its only media type was removed). Never derive any of this in JSX.

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
| `openapi-object-schema-synthesizer.test.ts` | add / remove / rename / required / whole-group stamping / description and schema sources (every scenario of `parameters.md` → "Description and schema sources", fixtures `query-parameters/21-description-moved-entry-to-schema`–`18`) |
| `openapi-section-presence.test.ts` | `OpenApiSectionPresenceResolver`: every row of the presence table and the fixture table in [Section presence](#section-presence-and-whole-section-changes) (raw vs synthetic whole diffs, schema-less media types, description keeps the Body present, mixed directions, unchanged sibling, neither side present → nothing rendered) |
| `openapi-security-override-diffs.test.ts` | synthetic alternative diffs (`security/03-document-security-overridden`, reverse) |
| `openapi-response-change-markers.test.ts` | `KindResponse` descendant summary: every row of the fixture table in [responses.md](../entities/responses.md#change-markers-on-response-code-options) (whole add / remove / rename → ∅, stamped header diffs ignored, strongest type wins via the set) |
| `openapi-severities.test.ts` | one placement per row; whole-node fills all placements |

Inline cases go to `packages/samples/src/openapi-diffs.ts` (published as
`@netcracker/qubership-apihub-samples`), as `async-api-diffs.ts` does.

## Related documents

- [../architecture/data-model-with-diffs.md](../architecture/data-model-with-diffs.md)
- [../architecture/viewer-with-diffs.md](../architecture/viewer-with-diffs.md)
