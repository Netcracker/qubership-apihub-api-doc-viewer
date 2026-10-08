# Parameters (and the schema synthesizer)

The **Request** section header and its four parameter subsections, plus the schema synthesizer that
turns parameters — and response headers ([responses.md](responses.md#headers)) — into one JSON
Schema object per group. Status: **planned**.

## Request section header

`TitleRow` "Request", **h2**. Node kind `request` (simple, empty value) — exists so the header has
a node for diffs and visibility. Shown when at least one parameter group or the request body is
shown. Children: up to four `parameters` nodes, then `requestBody`.

## Groups

The operation's `parameters` (already merged with the path item's by `api-unifier`, E11) are split
by `in`, in this fixed order:

| `in` | Node key | Title (h3) | Test id |
| --- | --- | --- | --- |
| `path` | `path` | Path Parameters | `openapi-parameters-path` |
| `query` | `query` | Query Parameters | `openapi-parameters-query` |
| `header` | `header` | Headers | `openapi-parameters-header` |
| `cookie` | `cookie` | Cookies | `openapi-parameters-cookie` |

A parameter with any other `in` value is dropped with a dev-mode log. Inside a group, parameters
keep the order of the (merged) `parameters` array. A group without parameters has no node.

Header parameters named `Accept`, `Content-Type`, `Authorization` are shown like any other (Q5).

## Node

Kind `parameters`, simple, key = location.

```typescript
export interface OpenApiTreeNodeValueTypeParameters {
  readonly location: OpenApiParameterLocation   // 'path' | 'query' | 'header' | 'cookie'
  readonly schema: OpenApiSynthesizedObjectSchema
}
```

## Rendering

`ParametersNodeViewer` — the same component renders response headers.

| Item | Rule |
| --- | --- |
| Header | `TitleRow` with the group title, **h3**, `expandable={false}` |
| Content | `JsonSchemaViewer` / `JsonSchemaDiffsViewer` over `value.schema`, `customizationOptions={SUPPRESS_ROOT_NESTING_INDICATOR_CUSTOMIZATION_OPTIONS}`, `expandedDepth` from `OpenApiViewerContext` (default `2`, as AsyncAPI address parameters), `data-precededby={MESSAGE_SECTION_HEADER_HIGH_LEVEL}` |
| Diffs viewer | passes `diffMetaKeys`, `diffTypes`, `hideUnchangedNodes`; **no** wrapping or stamping in the viewer — the synthesizer already attached every diff ([With diffs](#with-diffs)) |

Each parameter becomes one property row of the JSON Schema viewer: name + required `*`, type
label, deprecated tag, description, constraints, enum, default, examples — everything the JSON
Schema stack shows for a property.

## Schema synthesizer

Classes in `packages/next-data-model/src/building-service/openapi/shared/`:

| Class | File | Role |
| --- | --- | --- |
| `OpenApiObjectSchemaSynthesizer` | `object-schema-synthesizer.ts` | plain synthesis |
| `OpenApiObjectSchemaWithDiffsSynthesizer` | `object-schema-with-diffs-synthesizer.ts` | extends it; attaches diffs |

Used only by `OpenApiSpecTransformer` / `OpenApiSpecWithDiffsTransformer` (constructed in the
transformer, no exported free functions). Input: a list of **entries** — `{ name, value }` — where a
parameter entry comes from the `parameters` array and a header entry from a `headers` map entry
(name = map key). It replaces the story helper
`src/stories/json-schema-diffs-suite/parameters-schema-synthesis.ts`; the property-rename stories
switch to the data-layer class when it lands.

### Output shape

```typescript
type OpenApiSynthesizedObjectSchema = {
  type: 'object'
  properties: Record<string, object | boolean>
  required: string[]
}
```

### Property schema of one entry

| Source field | Goes to | Rule |
| --- | --- | --- |
| `schema` | the property schema itself | shallow copy of the (already resolved) schema; never mutate the source object |
| `content` (no `schema`) | the property schema | `content[firstMediaType].schema` (the specification allows exactly one entry) |
| `content` media type | `customAnnotations.mediaType = { label: 'Media type', value: <media type> }` | Q12; rendered by the JSON Schema custom-annotation row in both modes |
| neither | `{}` | an empty schema (type `any`) |
| `description` | `description` | the **entry** description wins over the schema's own `description`; without an entry description the schema description stays |
| `deprecated` | `deprecated` | only when `true` (or when it carries a diff) — JSON Schema renders the deprecated tag |
| `required` | parent `required` array | `true` → name appended; path parameters are required by the specification and must declare it |
| `name`, `in` | — | consumed by grouping and keys |
| `style`, `explode`, `allowEmptyValue`, `allowReserved`, `example`, `examples`, `x-*` | — | not displayed in v1 (Q11) |

A boolean schema (`true` / `false`, OAS 3.1) is kept as is; the JSON Schema stack renders boolean
property schemas.

### Dialect

The synthesizer does not branch on the OpenAPI version: it copies schemas verbatim, so the JSON
Schema stack sees each dialect's own keywords (OAS 3.0 `nullable`, boolean exclusive bounds;
OAS 3.1 type arrays unified into `anyOf`, numeric exclusive bounds). See
[../features/oas-versions.md](../features/oas-versions.md#schemas).

## With diffs

`OpenApiObjectSchemaWithDiffsSynthesizer` reads diffs from the merged entries and writes JSON
Schema diff records onto the synthesized schema, so `JsonSchemaDiffsViewer` paints them without any
help from the OpenAPI viewer. It generalizes the rules of the story helper and adds the
whole-group and description cases.

| Merged-document diff (E3–E5) | Synthesized diff record |
| --- | --- |
| Entry added / removed: `parameters[diffsMetaKey][index]` (or `headers[diffsMetaKey][name]`) | `properties[diffsMetaKey][name]` = the same diff |
| Path parameter renamed: `parameters[i][diffsMetaKey].name` (`replace`) | `properties[diffsMetaKey][afterName]` = `rename` (`beforeKey`, `afterKey`) — see [JSON Schema node key rename](../../json-schema/features/node-key-rename.md) |
| `required` changed: `parameters[i][diffsMetaKey].required` | `required[diffsMetaKey][k]` = `add` (became required) / `remove` (became optional) of the name; no diff when the effective value did not change |
| `deprecated`, `description` (entry level) | `properties[name][diffsMetaKey][key]` |
| `schema` replaced / added / removed as a whole | `properties[name][diffsMetaKey]` gets the diff under each top-level key of the schema (the existing `prepareJsonSchemaInCaseOfWhollyChanged` stamping, now done here) |
| Any diff inside `schema` | stays where it is — the property schema **is** the merged schema object |
| Entry-level `x-*`, `style`, … | dropped (not displayed) |

Rules:

1. **Removed entries are in the merged array.** `apiDiff` keeps removed parameters at their before
   index and appends added ones (E3). Iterate the merged array; never index into the before or
   after document.
2. **`required` defaults.** A diff can report `required: false → true` although the before document
   omits `required` — `api-unifier` compared against its default (E5). Treat a missing value as
   `false`; drop diffs whose effective value is unchanged.
3. **Description precedence with diffs.** Resolve the shown description per side: entry
   description if present on that side, else the schema description of that side. If the two sides
   resolve to different sources, emit one synthetic diff on `description` (`add` / `remove` /
   `replace`) built from the per-side values and the entry diff's metadata.
4. **Container changed as a whole.** When an ancestor that holds the entries is added / removed as
   a whole, its diff is stamped as `properties[diffsMetaKey][name]` for **every** entry — never as
   a synthetic diff on the wrapper's own top-level keys. Ancestors: the operation (inherited
   node-level diff), the whole `parameters` array (`op[diffsMetaKey].parameters`), for response
   headers the whole `headers` map (`response[diffsMetaKey].headers`) or the response. (AsyncAPI
   stamps the top-level keys of the parameters object, which hijacks JSON Schema's
   nesting-indicator detection; see the comment in `MessageChannelParametersNodeViewer.tsx`.)
5. **Moved between locations.** A parameter whose `in` changed is a `remove` in one group and an
   `add` in another (E4) — no cross-group logic.
6. **Content media type.** A media-type key change of a `content` parameter becomes a diff on
   `customAnnotations` (JSON Schema already aggregates custom-annotation diffs).

### Whole group added / removed

A parameter group (**Path Parameters**, **Query Parameters**, **Headers**, **Cookies**, response
**Headers**) is **not an object of the OpenAPI document** — it is derived by splitting `parameters`
by `in` (or from a `headers` map). It therefore never has an add / remove diff of its own.

**Definition.** A group is wholly added (removed) **if and only if every property of its synthetic
schema carries an `add` (`remove`) diff in `properties[diffsMetaKey]`.** Counted over all
properties of the merged schema — removed parameters are present in it (rule 1), unchanged ones
have no record and therefore break the condition.

The synthesizer makes both sources of "everything added / removed" end in this same state, so the
section rule needs only one check:

| Source | Example | How every property gets its `add` / `remove` |
| --- | --- | --- |
| Each entry added / removed individually | every header parameter removed (`request/02-all-headers-removed`); before had no query parameters, after has two | the per-entry array-item diffs (first row of the table above) |
| An ancestor added / removed as a whole | whole operation added (`operation/06-whole-operation-added`); `parameters` array added; response `headers` map removed | stamping (rule 4) |

Not wholly added / removed (header stays uncolored; property rows show their own diffs):

| Case | Why |
| --- | --- |
| One entry added, another removed (`request/03-mixed-header-changes`) | directions differ |
| All but one entry added, one unchanged | the unchanged property has no diff record |
| Every entry renamed / changed inside (`required`, `description`, schema) | `rename` / field diffs are not `add` / `remove` |
| Mix of whole-entry adds and field changes on another entry | the changed entry has no `add` |

**Consequences on screen** (the shared [section header colorizing](../../shared/features/section-header-colorizing.md)
rule, implemented in `KindParameters.aggregateByDescendantDiffs` over the synthesized properties —
[../features/diffs.md](../features/diffs.md#section-headers)):

| Group state | Origin side | Changed side |
| --- | --- | --- |
| Wholly added | header row hidden (grey, no content) | header row green; every property row green |
| Wholly removed | header row red; every property row red | header row hidden (grey, no content) |
| Otherwise | header uncolored on both sides | header uncolored on both sides |

The header's floating severity badge is built from the same synthetic group diff (one of the
property diffs — they are all the same direction; `type` = the max severity among them).

The **Request** section header (h2) applies the same rule one level up: wholly added / removed when
every group **and** the request body are wholly added / removed in the same direction.

## Related documents

- [responses.md](responses.md#headers) — response headers use the same synthesizer
- [../features/diffs.md](../features/diffs.md)
- Fixtures: `packages/samples/openapi/oas30/04-parameters-sources/`, `packages/samples/openapi-diffs/request/`
