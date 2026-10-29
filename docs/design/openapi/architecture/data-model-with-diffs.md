# OpenAPI — data model, with diffs

Status: **implemented**; diagram refreshed to the code on 2026-10-29
([../notes/2026-10-architecture-review.md](../notes/2026-10-architecture-review.md), D1). Decisions
behind this shape: I2, I3, I6–I8 in [../notes/2026-10-implementation-decisions.md](../notes/2026-10-implementation-decisions.md).
Paths are relative to `packages/next-data-model/src/`. Abstract layer:
[../../shared/architecture/data-model-with-diffs.md](../../shared/architecture/data-model-with-diffs.md).
Rules: [../features/diffs.md](../features/diffs.md).

```mermaid
flowchart TB
  subgraph ABS["Abstract (shared)"]
    RecordDriven["building-service/abstract/tree-with-diffs/node-diffs-data/<br/>record-driven-aggregators.ts · RecordDriven*Aggregator (5 families)"]
    SideReader["building-service/shared/side-reader.ts<br/>SideReader · SideContext · FieldSides"]
    Rollup["api-diff aggregateDiffsWithRollup · aggregatedDiffsMetaKey"]
    RowDiffsBase["model/abstract/tree-with-diffs/row-diffs-base.ts<br/>NodeLevelRowDiffs · SectionRowDiffs"]
    Placements["NodeDiffsSeverityPlacemennt<br/>+ OperationIdRow(WithDeprecatedTag) · AddressRow(WithDeprecatedTag) ·<br/>ExternalDocsRow · SelectorRow · SecurityScheme*Row · OAuthFlow*Row"]
  end

  subgraph SEC["Security module (spec-neutral, shared with AsyncAPI)"]
    SecDecorator["building-service/security/security-spec-diffs-decorator.ts<br/>SecuritySpecDiffsDecorator (composed)"]
    SecTables["building-service/security/tree-with-diffs/aggregation-tables.ts<br/>SECURITY_FIELD_PLACEMENTS · SECURITY_NODE_PLACEMENTS"]
    SecRowDiffs["model/security/tree-with-diffs/row-diffs.ts · SecurityRowDiffs"]
  end

  subgraph PLAIN["Plain stack (data-model-plain.md)"]
    Builder["OpenApiTreeBuilder"]
    Transformer["OpenApiSpecTransformer"]
    SecBuilder["OpenApiSecuritySpecBuilder"]
    Synth["OpenApiObjectSchemaSynthesizer"]
    NodeData["OpenApiNodeDataBuilder (reused as is)"]
  end

  subgraph BSD["building-service/openapi"]
    TransformerD["shared/openapi-spec-with-diffs-transformer.ts<br/>OpenApiSpecWithDiffsTransformer<br/>record relocation · flag normalization · section presence (I3) ·<br/>media-type / response-code options diffs · cloned extension diffs · rollup"]
    SecBuilderD["shared/openapi-security-spec-with-diffs-builder.ts<br/>OpenApiSecuritySpecWithDiffsBuilder (one list / switched lists, allowsAnonymous)"]
    SynthD["shared/object-schema-with-diffs-synthesizer.ts<br/>OpenApiObjectSchemaWithDiffsSynthesizer"]
    BuilderD["tree-with-diffs/builder.ts<br/>OpenApiTreeWithDiffsBuilder · assignNodeDiffs"]
    subgraph AGG["tree-with-diffs/node-diffs-data — one KindAny per family (I2)"]
      Factories["factories.ts · OpenApiNode*AggregatorFactory (cached per kind)"]
      KindAny["node-diffs · node-descendant-diffs · node-diffs-summary ·<br/>node-descendant-diffs-summary · node-diffs-severities<br/>*/kind-any.ts (FIELD_PLACEMENTS · NODE_PLACEMENTS · SYNTHETIC_FIELD_DIFF_KEYS)"]
    end
  end

  subgraph MODELD["model/openapi/tree-with-diffs"]
    TreeD["tree.impl.ts · OpenApiTreeWithDiffs"]
    DiffKeys["diff-keys.ts · OPENAPI_MEDIA_TYPE_OPTIONS_DIFF_KEY · OPENAPI_RESPONSE_OPTIONS_DIFF_KEY"]
    RowDiffs["row-diffs.ts · OpenApiRowDiffs<br/>Operation · RequestBody · ResponseBody · MediaType · Responses · Response"]
  end

  Builder -->|extends| BuilderD
  Transformer -->|extends| TransformerD
  SecBuilder -->|extends| SecBuilderD
  Synth -->|extends| SynthD
  BuilderD --> NodeData
  BuilderD --> TransformerD
  TransformerD --> SideReader
  TransformerD --> SynthD
  TransformerD -->|createSecuritySpecBuilder| SecBuilderD
  SecBuilderD --> SecDecorator
  TransformerD --> Rollup
  TransformerD --> DiffKeys
  BuilderD --> Factories
  Factories --> KindAny
  KindAny -->|extend| RecordDriven
  KindAny --> SecTables
  KindAny --> Placements
  BuilderD --> TreeD
  RowDiffs --> RowDiffsBase
  RowDiffs --> DiffKeys
  SecRowDiffs --> RowDiffsBase
```

## Builder contract

`OpenApiTreeWithDiffsBuilder` overrides only:

| Member | Rule |
| --- | --- |
| `public declare readonly tree: OpenApiTreeWithDiffs` | retype only |
| `createTree()`, `createNodeDataBuilder()`, `prepareSource()`, `logPrefix` (`[OpenAPI][WithDiffs]`) | overrides |
| `takeCrawlValue()` | keeps arrays (`isObjective`) — list records (alternatives) live on the arrays |
| `createNodeFromRaw()` | `super.createNodeFromRaw(...)`, narrow with `isOpenApiTreeNodeWithDiffs`, then `assignNodeDiffs` |
| `assignNodeDiffs()` | node diffs → summary → descendant diffs → descendant summary (from the rollup; `mergeAggregatedDiffTypesIntoDescendantSummary` is **not** called, I6) → severities |

No type assertions between plain and with-diffs node types; guards only.

## Notes

- The transformer writes every diff where its row reads it (child-section, option, scheme, and
  synthetic whole-section records); the aggregators only map records to rows through the kind
  tables — no per-kind aggregator classes (I2).
- Section presence per side is computed inside the transformer (a `WeakMap` from each built
  section to its presence, `writeSectionDiff`), not by a separate resolver (I3).
- Parameters, response headers, media-type schemas, and extensions are separate trees in the
  viewer; the forward descendant summary reads `aggregatedDiffsMetaKey`, so changes inside those
  trees still mark selector options and section headers.
- Section headers follow
  [../../shared/features/section-header-colorizing.md](../../shared/features/section-header-colorizing.md)
  evaluated over section presence per side, [../features/diffs.md](../features/diffs.md#section-presence-and-whole-section-changes).
- Row visibility has no with-diffs variant: `OpenApiNodeVisibility` works on merged values (I5).
