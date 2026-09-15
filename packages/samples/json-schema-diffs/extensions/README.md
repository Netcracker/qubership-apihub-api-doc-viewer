# JSON Schema diff fixtures — extensions

Hand-written YAML pairs for screenshot-diff scenarios exercising specification
extension (`x-`-prefixed) properties — see OAS 3.0/3.1 and JSON Schema
draft-07 — in the JSON Schema Next diffs viewer. All cases are **root-only**
(no property/`items`-location split, unlike the plain `json-schema/extensions/`
suite).

- Total cases: 80 (4 types × 8 "existing 1 extension" + 4 types × 12
  "existing 2 extensions")
- Layout: `json-schema-diffs/extensions/<suite>/<case-id>/before.yaml` and
  `.../after.yaml`
- Each file is a **standalone JSON Schema** document (not wrapped in OpenAPI).

## Extension value catalog

Every case is built from a fixed catalog of extension keys/values, so the
same "kind" of extension always reads the same way across cases. A
"secondary" key is used whenever a case needs two coexisting extensions of
the same kind (e.g. two primitives) without a key collision.

| Kind | Primary key: value | Secondary key: value | "Replaced" value (differs from both) |
| --- | --- | --- | --- |
| primitive | `x-internal: true` | `x-version: '1.0.0'` | `false` |
| object | `x-metadata: {owner: platform-team}` | `x-labels: {team: core}` | `{owner: growth-team}` |
| array | `x-tags: [beta, internal]` | `x-owners: [team-a, team-b]` | `[ga, public]` |
| simple JSON Schema | `x-value-schema: {type: integer, minimum: 0}` | `x-response-schema: {type: string, minLength: 1}` | `{type: boolean}` |

## Suites 1–4 — "Existing 1 `<type>` extension"

Starting state: one extension of the given type at the schema root
(`existing-1-primitive/`, `existing-1-object/`, `existing-1-array/`,
`existing-1-json-schema/`).

| Case id | Change |
| --- | --- |
| `01-add-primitive` | + 1 more primitive extension added (secondary key if the base type is already primitive) |
| `02-add-object` | + 1 more object extension added |
| `03-add-array` | + 1 more array extension added |
| `04-add-json-schema` | + 1 more simple-JSON-Schema extension added |
| `05-replace-to-primitive` | Value replaced → another primitive (same key) |
| `06-replace-to-object` | Value replaced → object (same key) |
| `07-replace-to-array` | Value replaced → array (same key) |
| `08-replace-to-json-schema` | Value replaced → simple JSON Schema (same key) |

## Suites 5–8 — "Existing 2 `<type>` extensions"

Starting state for the "removed" cases is the mixed pair `{<type>, X}` — the
outcome of the matching "1 more X added" case above. Starting state for the
"replaced"/combo cases is the same-type pair `{<type>, <type>}` (primary +
secondary key). Combo cases use two auxiliary types, cycling deterministically
through `[primitive, object, array, json-schema]` starting right after the
base type, so each of the four sections exercises different concrete type
combinations.

| Case id | Change |
| --- | --- |
| `01-primitive-removed` | Base pair `{<type>, primitive}` → primitive extension removed |
| `02-object-removed` | Base pair `{<type>, object}` → object extension removed |
| `03-array-removed` | Base pair `{<type>, array}` → array extension removed |
| `04-json-schema-removed` | Base pair `{<type>, json-schema}` → JSON Schema extension removed |
| `05-replaced-to-primitive` | Secondary extension's value replaced → primitive |
| `06-replaced-to-object` | Secondary extension's value replaced → object |
| `07-replaced-to-array` | Secondary extension's value replaced → array |
| `08-replaced-to-json-schema` | Secondary extension's value replaced → simple JSON Schema |
| `09-added-and-removed` | Secondary extension removed; a new extension (auxiliary type 1) added |
| `10-removed-and-replaced` | Secondary extension removed; primary extension's value replaced → auxiliary type 1 |
| `11-added-and-replaced` | Secondary extension's value replaced → auxiliary type 1; a new extension (auxiliary type 2) added |
| `12-both-replaced` | Primary extension's value replaced → auxiliary type 1; secondary → auxiliary type 2 |

## Storybook and screenshot tests

Hand-written suites live under
`packages/api-doc-viewer/src/stories/json-schema-diffs-extensions-suite/`
and `packages/api-doc-viewer/src/it/`, reusing the generic helpers in
`json-schema-diffs-hiding-unchanged-nodes-suite/json-schema-diffs-utils.tsx`
(`createJsonSchemaDiffViewerArgs`, `createJsonSchemaDiffSampleById`,
`createJsonSchemaDiffCaseStoryFactory`, `JsonSchemaDiffSamplesStory`).

| Suite | Story title | Story / IT files |
| --- | --- | --- |
| Existing 1 Primitive | `JSON Schema Diffs Suite (Extensions)/Existing 1 Primitive` | `existing-1-primitive.*` |
| Existing 1 Object | `JSON Schema Diffs Suite (Extensions)/Existing 1 Object` | `existing-1-object.*` |
| Existing 1 Array | `JSON Schema Diffs Suite (Extensions)/Existing 1 Array` | `existing-1-array.*` |
| Existing 1 JSON Schema | `JSON Schema Diffs Suite (Extensions)/Existing 1 JSON Schema` | `existing-1-json-schema.*` |
| Existing 2 Primitive | `JSON Schema Diffs Suite (Extensions)/Existing 2 Primitive` | `existing-2-primitive.*` |
| Existing 2 Object | `JSON Schema Diffs Suite (Extensions)/Existing 2 Object` | `existing-2-object.*` |
| Existing 2 Array | `JSON Schema Diffs Suite (Extensions)/Existing 2 Array` | `existing-2-array.*` |
| Existing 2 JSON Schema | `JSON Schema Diffs Suite (Extensions)/Existing 2 JSON Schema` | `existing-2-json-schema.*` |

Story id pattern: `{meta-id}--case-{case-id}` (for example
`json-schema-diffs-suite-extensions-existing-1-primitive--case-01-add-primitive`).
Meta ids were derived from the title strings above and confirmed against a
built Storybook `index.json` before the IT files were written (per the
`api-doc-viewer-testing` skill's story-id verification step).

```bash
cd packages/api-doc-viewer
npm run regenerate-screenshots
```
