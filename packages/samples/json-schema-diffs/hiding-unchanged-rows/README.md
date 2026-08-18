# JSON Schema diff fixtures — hiding unchanged rows

Hand-written YAML pairs for screenshot-diff scenarios that exercise **changed-only** row
hiding in the JSON Schema Next diffs viewer.

- Total cases: 12 (4 simple-object + 8 complex-object)
- Layout: `json-schema-diffs/hiding-unchanged-rows/<suite>/<case-id>/before.yaml` and
  `.../after.yaml`
- Each file is a **standalone JSON Schema** document (not wrapped in OpenAPI).

Property addressing in case descriptions uses `#` for the root schema and `#.<n>` for the
*n*th first-level property (`prop1` … `prop5`). Nested properties use `#.<n>.<m>` (for example
`#.2.2` is `prop2.properties.nested2`).

## Suite 1 — simple object

Prerequisite: object-typed schema with five **primitive** properties (`prop1` … `prop5`).

| Case id | Change |
| --- | --- |
| `1.1-two-added-three-removed` | Two properties added, three removed |
| `1.2-second-and-fifth-added-others-unchanged` | `prop2` and `prop5` added; `prop1`, `prop3`, `prop4` unchanged |
| `1.3-root-description-replaced` | No property changes; root `description` replaced |
| `1.4-property-metadata-and-constraints-changed` | `#`.1 description replaced; `#`.2 enum value appended (3→4); `#`.3 `minimum`/`maximum` added; `#`.4 `default` removed; `#`.5 unchanged |

## Suite 2 — complex object

Prerequisite: object-typed schema with five first-level properties. `prop1`, `prop3`, `prop5`
are primitives; `prop2` and `prop4` are objects with two to four primitive nested properties
(`nested1`, `nested2`, …).

| Case id | Change |
| --- | --- |
| `2.1-root-description-changed` | `#`.description only |
| `2.2-primitive-props-added` | `#`.1, `#`.3, `#`.5 added |
| `2.3-nested-object-props-added` | `#`.2, `#`.4 added |
| `2.4-primitive-added-nested-removed` | `#`.1, `#`.3, `#`.5 added; `#`.2, `#`.4 removed |
| `2.5-nested-prop-added-and-removed` | `#`.2.2 added; `#`.4.1 removed |
| `2.6-nested-prop-added-object-removed` | `#`.2.2 added; `#`.4 removed |
| `2.7-object-added-nested-prop-removed` | `#`.2 added; `#`.4.1 removed |
| `2.8-nested-property-metadata-and-constraints-changed` | Inside `#`.2: `.1` description replaced; `.2` enum appended (3→4); `.3` `minimum`/`maximum` added; `.4` `default` removed; `#`.1, `#`.3, `#`.4, `#`.5 unchanged |

## Storybook and screenshot tests

Hand-written suites live under `packages/api-doc-viewer/src/stories/json-schema-diffs-suite/`
and `packages/api-doc-viewer/src/it/`. Shared helpers are in `json-schema-diffs-utils.tsx`.

| Suite | Story title | Story / IT files |
| --- | --- | --- |
| Simple object | `JSON Schema Diffs Suite/Hiding Unchanged Rows Simple Object Samples` | `hiding-unchanged-rows-simple-object-samples.*` |
| Complex object | `JSON Schema Diffs Suite/Hiding Unchanged Rows Complex Object Samples` | `hiding-unchanged-rows-complex-object-samples.*` |

Story id pattern: `{meta-id}--case-{case-id}` (for example
`json-schema-diffs-suite-hiding-unchanged-rows-simple-object-samples--case-1-1-two-added-three-removed`).

Stories merge `before.yaml` / `after.yaml` via `prepareJsonDiffSchema` and render through
`JsonSchemaNextDiffsViewer` (`json-schema-diffs-utils.tsx`). Changed-only row hiding is exercised
once the Next diffs stack supports it; regenerate snapshots after visual changes.

```bash
cd packages/api-doc-viewer
npm run regenerate-screenshots
```
