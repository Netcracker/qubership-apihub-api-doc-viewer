# 2026-10 — OpenAPI design analysis

Evidence behind the OpenAPI operation viewer design: how `api-unifier` and `apiDiff` shape OpenAPI
documents. Measured on 2026-10-07 with `@netcracker/qubership-apihub-api-diff`
`4.0.1-dev.20261005155833` and `@netcracker/qubership-apihub-api-unifier`
`2.9.3-dev.20261005154101`, using the fixtures in `packages/samples/openapi/` and
`packages/samples/openapi-diffs/`. Merge options were those of `mergeOpenApiDocuments` in
`packages/api-doc-viewer/src/stories/preprocess.ts` (whole documents, `unify`, `validate`,
`liftCombiners`, `allowNotValidSyntheticChanges`).

Re-run the probes when either library is upgraded; a changed finding means a design document must
change too. `M` = `diffsMetaKey`; `op` = `paths[path][method]`.

## Findings

| Id | Finding | Fixture | Design consequence |
| --- | --- | --- | --- |
| E1 | A renamed path (`/orders/{orderId}` → `/orders/{id}`) is one `rename` in `paths[M]['/orders/{id}']` (`beforeKey`, `afterKey`); the merged document keys the path item by the **after** path. The renamed path parameter is a separate `name` `replace` on the parameter. | `operation/05-path-parameter-renamed` | Diffs viewer `operationKeys.path` is the merged key (Q14); the transformer turns the rename into an `address` replace. |
| E2 | A new method on an existing path: `pathItem[M][method]` `add`. A removed **whole path**: `paths[M][path]` `remove` and nothing per method — unless `openApiPathItemPerOperationDiffs: true`, which yields one diff per method instead. | `operation/06-whole-operation-added`, probe | Whole-operation diff = `pathItem[M][method]` ?? `paths[M][path]` (add / remove only). |
| E3 | Parameters are mapped by `in` + `name` (path parameters by template position). Removed parameters stay in the merged array at their **before** index; added ones are appended; diffs are keyed by the merged index. | `request/01`, `request/02`, `request/03` | The synthesizer iterates the merged array. |
| E4 | A parameter whose `in` changed is a `remove` plus an `add` (never a replace of `in`). | `request/05-parameter-moved-query-to-header` | No cross-group logic. |
| E5 | `required: false → true` arrives as a `replace` with `beforeValue: false` although the before document omits `required` (compared against the unifier default). | `request/04-parameter-required-changed` | Treat missing as `false`; drop no-op required diffs. |
| E6 | Media types are mapped by `contentMediaTypeMappingResolver` (exact, then base type, then one wildcard-compatible pair): `application/json` → `application/json; charset=utf-8` is a `rename` keyed by the after key. Response codes are mapped case-insensitively: `4xx` → `4XX` is a `rename`. | `request/07-body-media-type-renamed`, `responses/02-response-code-case-renamed` | Selector option titles are side-dependent; rename is not a whole-node change. |
| E7 | Security alternatives are mapped **by index**: an added alternative is `security[M][index]` `add`; `security: []` yields one `remove` per alternative; a scheme added to an alternative is `security[i][M][name]` `add`; a scope is `security[i][name][M][j]`. | `security/01`, `02`, `03`, `06` | Alternatives = selector options keyed by index; scopes via list-side display. |
| E8 | An operation starting to override the document-level `security` is one `op[M].security` `add` with the whole list as `afterValue`. | `security/05-root-security-overridden` | Synthetic alternative diffs by deep equality (Q15). |
| E9 | Scheme definition changes live in `components.securitySchemes[…]`. A merge in operation mode **with `components` stripped** (as `prepareJsonDiffSchemaFromOAS` does) produces no scheme diffs and no scheme definitions; operation mode with `components` kept produces both. | `security/04-scheme-definition-changed`, probe | Hosts must keep `components` (D11, public API). |
| E10 | OAS 3.1 `type: [string, 'null']` is unified into `anyOf: [{type: string}, {type: null}]` (also in diffs: adding `null` is `anyOf[1]` `add`). An `enum` without `type` gets `type: any`. OAS 3.0 `nullable: true` stays as is. | `oas31/01-nullable-via-type-array`, `oas31/01-full-operation` | Schema display is a JSON Schema topic; the OpenAPI stack never rewrites schemas. |
| E11 | Path-item `parameters` are merged into each operation after the operation's own parameters; an operation parameter with the same `name` + `in` wins. Afterwards the path item contains only methods. Path-item `x-*` keys are copied into operations only when the path item also has `parameters` / `servers` / `summary` / `description`. | `oas30/04-parameters-sources`, `oas30/01-full-operation` | The transformer reads only the operation; tests must not assume path-item extension copying. |
| E12 | OAS 3.1 Reference Object `description` siblings override the target's description (parameter, response); `components.pathItems` and path-item `$ref` are resolved. | `oas31/04-reference-overrides-and-path-items` | No OpenAPI-stack code; fixture only. |
| E13 | Denormalized and merged documents carry no unifier defaults: no `parameters: []`, no `headers: {}`, no `required: false`, no `style`. | probe on `security/04` | Presence checks are reliable; still treat explicit empty containers as absent. |
| E16 | Operation `deprecated` added is a `replace` `false → true` (unifier default, like E5); `requestBody.required` `true → false` is a `replace`; `operationId` change is a `replace`. | `operation/08`, `09`, `10`, `request/10-request-body-became-optional` | Boolean flags are normalized to add / remove semantics in the aggregators (JSON Schema required rule). |
| E14 | `normalize` reports `Invalid property 'components.pathItems' for OpenAPI 3.0` through `onValidateError` for **every** OAS 3.0 document that has `components`, even without `pathItems` (`Reflect.deleteProperty` returns `true` for a missing key). Upstream bug; harmless. | every OAS 3.0 fixture with `components` | Stories and tests must not fail on validation callbacks; report upstream. |
| E15 | The OAS 3.1 schema rules report `Key 'contentEncoding' unexpected here` (a valid JSON Schema 2020-12 keyword); the key is kept. | `oas31/01-full-operation` | Harmless; report upstream. |

## Lessons carried over from the AsyncAPI stack

| Observation in AsyncAPI | OpenAPI decision |
| --- | --- |
| `kind-parameters.ts` / `kind-extensions.ts` color the section header from the **first** child diff after checking only the count | Check the direction of **every** child diff (D8, [../features/diffs.md](../features/diffs.md#section-headers)). |
| `MessageChannelParametersNodeViewer` stamps a whole-node diff onto the top-level keys of the parameters schema and needs `hasNestedPropertiesDiffs` to avoid hijacking JSON Schema nesting detection | Stamp per **property** in the synthesizer; the viewer never stamps (D3). |
| Row visibility lives in the viewer (`shouldBeDisplayed`), listed as `planned` to move | Visibility managers in next-data-model from the start (D6). |
| `node-diffs-severities/kind-any.ts` maps a whole-node replace to `TitleRow` and `BindingVersionRow` only ("TODO: Extract more layers") | One placement per row; whole-node add / remove fills all of the node's placements (D7). |
| `AddressRow` is AsyncAPI-only | Shared, with a badge descriptor (D9). |

## How to re-run

The probes are throw-away scripts; their essence:

```javascript
const { apiDiff, DIFF_META_KEY } = require('@netcracker/qubership-apihub-api-diff')
const merged = apiDiff(before, after, {
  syntheticTitleFlag: Symbol('t'), unify: true, validate: true, liftCombiners: true,
  allowNotValidSyntheticChanges: true, beforeSource: before, afterSource: after, metaKey: DIFF_META_KEY,
}).merged
// walk `merged`, print every `node[DIFF_META_KEY]` record with its path, action, and values
```

For plain documents: `denormalize(normalize(doc, opts), opts)` with the same options plus
`source: doc`.
