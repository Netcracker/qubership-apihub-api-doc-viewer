# JSON Schema Next — plain display coverage

Baseline reference for AI agents working on **api-doc-viewer** and **next-data-model** plain JSON Schema
stack (`JsonSchemaNextViewer` + `JsonSchemaTreeBuilder`). Assumes **current behaviour is correct** — this
document records what is shown today, intentional gaps, and how to classify missing UI when planning
work or writing tests.

**Primary sources (keep in sync when behaviour changes):**

| Layer | Location |
| --- | --- |
| Plain tree model | `packages/next-data-model/src/model/json-schema/` |
| Crawl rules / builder | `packages/next-data-model/src/building-service/json-schema/` |
| Plain visibility | `packages/next-data-model/src/building-service/json-schema/tree/node-visibility-data/` |
| Resolvers | `packages/next-data-model/src/model/json-schema/{type-label,bound-range,value-range,validation-keys}.ts` |
| Viewer | `packages/api-doc-viewer/src/components/JsonSchemaNextViewer/` |
| Regression stories | `packages/api-doc-viewer/src/stories/json-schema-next/` |
| Sample cases | `packages/samples/json-schema/` (96 plain cases, 6 types) |

**Viewer scope:** single merged JSON Schema document rendered as a property tree. Not OpenAPI path
navigation, not with-diffs (Phase 3), not legacy `JsonSchemaViewer` replacement yet.

**Pipeline:**

```text
Raw / merged schema JSON
  → JsonSchemaTreeBuilder (materializeDepth / expandedDepth at build time)
  → JsonSchemaTree
  → JsonSchemaNextViewer → SchemaNodeViewer / CombinerNodeViewer
```

---

## Agent classification legend

| Tag | Meaning |
| --- | --- |
| **`viewer`** | Shown in `JsonSchemaNextViewer` plain mode today. |
| **`ndm-reserved`** | Resolved in next-data-model but not painted; keep for future UI or consumers. |
| **`intentional-gap`** | Product decision — do **not** treat absence as a regression in Phase 2. |
| **`phase-3`** | Deferred to with-diffs stack (`JsonSchemaTreeWithDiffsBuilder`, diffs viewer). |
| **`phase-4+`** | Post–Phase 2 gate (embedding registry, consumer migration, legacy removal). |

---

## § Displayed in JsonSchemaNextViewer (plain)

### Title row (`SchemaNodeViewer`)

| UI element | Condition | Source |
| --- | --- | --- |
| Property name + required `*` | non-root property | `node.key`, `meta.required` |
| Type subheader | always on title row | `resolveJsonSchemaTypeLabel(value, meta)` |
| Broken `$ref` label | `meta.brokenRef` set | type label shows `$ref: …` |
| **readOnly** / **writeOnly** / **deprecated** badges | meta flags | `DiffTags` (plain, no diff chrome) |
| Circular ref icon | `node.isCycle` | `CircularRefIcon` + tooltip |

### Content rows (detailed display mode)

| UI element | Condition | Visibility resolver |
| --- | --- | --- |
| Deprecation reason | `x-deprecated-reason` in `value.extensions` | `showDeprecationReasonRow` |
| Description | `value.description` | `showDescription` |
| Allowed values | `value.enum` | `showEnumValuesRow` |
| Default | `value.default` defined | `showDefaultRow` |
| Examples | `value.examples` | `showExamplesRow` |
| Validation rows | scalar constraints (not enum) | `showValidationsSection` + `resolveValidationRows` |
| Extensions block | non-empty `value.extensions` | `showExtensionsRow` → `JsoViewer` |

### Structure

| UI element | Condition | Notes |
| --- | --- | --- |
| Property children | materialized at build time | gated by `!node.isCycle` only |
| Combiner selector | `oneOf` / `anyOf` / `allOf`, ≥2 branches | `CombinerNodeViewer` |
| Single combiner branch | exactly one branch | renders branch without selector |

---

## § Intentional gaps (Phase 2)

| Item | Tag | Notes |
| --- | --- | --- |
| **`const` constraint row** | `intentional-gap` | Not requested by current consumers; enum uses Allowed values row. |
| **Per-node expand/collapse** | `intentional-gap` | `TitleRow` always `expandable={false}` `expanded={false}`; tree depth via `expandedDepth` / `materializeDepth` at build. |
| **Expand-on-click + UI `materializeChildren`** | `intentional-gap` | Data-layer expand resolvers exist; viewer wiring deferred post–Phase 2 gate. |
| **Property sort toggle** | `phase-4+` | Legacy `onToggleSort` not ported. |
| **With-diffs rendering** | `phase-3` | Separate viewer + aggregators. |
| **Full extensions embedding registry** | `phase-4+` | Interim: embed `JsoViewer` for `extensions` object (mirrors legacy). |
| **Root scalar “expand fix”** | `intentional-gap` | Root title row hidden when `isRoot`; content always shown. |

---

## § Regression coverage

| Suite | Stories | Screenshot ITs |
| --- | --- | --- |
| Boolean | 8 | 8 |
| String | 8 | 8 |
| Number | 8 | 8 |
| Integer | 8 | 8 |
| Object | 32 | 32 |
| Array | 32 | 32 |
| Circular `$ref` | 1 | 1 |
| **Total** | **97** | **97** |

Generate stories: `node bin/generate-json-schema-next-suite-stories.mjs`  
Generate ITs: `node bin/generate-json-schema-next-suite-tests.mjs`  
(both from `packages/api-doc-viewer`)

Phase 2 gate: all generated plain screenshot ITs pass; builder tests verify `jsonSchemaHasOwnChildren`
and `materializeDepth`; TitleRow expand flags remain falsy.

---

## § Constants alignment

| Concern | Authority |
| --- | --- |
| JSON Schema property names | `@netcracker/qubership-apihub-api-unifier` `JSON_SCHEMA_PROPERTY_*` |
| Validation keys (data layer) | `JsonSchemaValidationKeys` derived from api-unifier |
| Validation row keys (viewer) | `JsonSchemaValidationRowKeys` in `validation-row-keys.ts` |
| Local-only node value keys | `extensions`, `location` in `node-value-property-key.ts` |

---

## § Related documents

- Stack analysis and phase roadmap: `packages/api-doc-viewer/json-schema-next-stack-analysis.md`
- Legacy reference viewer: `packages/api-doc-viewer/src/components/JsonSchemaViewer/`
- Legacy screenshot suite: `packages/api-doc-viewer/src/stories/json-schema-suite/`
