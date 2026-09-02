# JSON Schema nesting-indicator row diffs — agent reference

Reference for AI assistants adding diff highlighting to `NestingIndicatorTitleRow` (the
"Properties"/"Items" header `SchemaNodeViewer` renders above a node's children list) in the
JSON Schema Next stack. Covers two cases: the owning node (or an inherited parent/container) was
wholly added/removed, and every visible child was uniformly added or uniformly removed while the
owning node itself was untouched. Includes session learnings from wiring row background, label
visibility, and the diff floating badge for both.

**Primary code paths**

| Layer | Role | Path |
| --- | --- | --- |
| Row colorizing diff | `aggregateNestingIndicatorRowColorizingDiff`, `collectJsonSchemaChildKeys` | `next-data-model/.../node-diffs/kind-any.ts` (`aggregateByDescendantDiffs` override) |
| Row diff field | `nestingIndicatorRowColorizingDiff` | `next-data-model/.../property-row-diffs.types.ts` (`JsonSchemaKindAnyNodeDiffs`) |
| Row diff accessor | `takeJsonSchemaNestingIndicatorRowColorizingDiff` | `next-data-model/.../property-row-diffs.ts` |
| Row severity | `NodeDiffsSeverityPlacemennt.NestingIndicatorRow` | `next-data-model/.../node-diffs-severities/kind-any.ts` |
| Viewer wiring | `diff` + `diffsSeverities` + `diffsSeverityPlacement` props | `api-doc-viewer/.../SchemaNodeViewer/SchemaNodeViewer.tsx` |
| Row rendering | background, label visibility, floating badge | `shared-components/NestingIndicatorTitleRow/{NestingIndicatorTitleRow,NestingIndicatorTitleRowContent,NestingIndicatorTitleLabel}.tsx` |
| Reference pattern (async-api) | row diff + matching severity, same source diff | `AsyncApiOperationViewer/MessageChannelServerNodeViewer/MessageChannelServerNodeViewer.tsx` + `AsyncApiNodeDiffsSeveritiesAggregatorKindAny` |
| Reference pattern (ddlapi) | uniform-descendant-diff detection (different storage target — see lesson 1) | `next-data-model/.../ddlapi/tree-with-diffs/node-diffs-data/shared/property-list-section-diff-utils.ts` (`aggregateUniformWholeNodeDescendantDiff`) |

**Regression**

| Mode | Suite |
| --- | --- |
| Unit (data layer) | `packages/next-data-model/tests/unit-tests/json-schema-with-diffs.test.ts` — describe block `"JsonSchema nesting-indicator row colorizing diff"` |
| Storybook (case 1 — uniform children) | `packages/samples/json-schema-diffs/type-changes/object-properties/003…008` |
| Storybook (case 2 — whole node) | `packages/samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.6`, `2.7` |

---

## Session learnings — what was non-obvious

### 1. The row is not a tree node — do not reuse `NODE_LEVEL_DIFF_KEY` for it

ddlapi's closest precedent (`DdlApiNodeDiffsAggregatorKindPropertyListSection` +
`aggregateUniformWholeNodeDescendantDiff`) stores its "every child uniformly added/removed"
result directly into `nodeDiffs[NODE_LEVEL_DIFF_KEY]` — correct there because DDL's "Columns" /
"Indexes" section **is** a dedicated node kind whose own title row is exactly what should be
colored.

`NestingIndicatorTitleRow` is **not** a node — it is auxiliary UI that `SchemaNodeViewer` renders
inside the **owning** node's body, above that node's real children. Writing the synthetic diff
into that owning node's `NODE_LEVEL_DIFF_KEY` would incorrectly also recolor the owning node's own
title row (`aggregateTitleRowDiff` reads that same key). The fix needed a **separate** field,
`nestingIndicatorRowColorizingDiff`, computed independently and consumed only by
`NestingIndicatorTitleRow`.

### 2. `nodeDescendantDiffs` is polluted with non-child keys — do not count it directly

`JsonSchemaNodeDescendantDiffsAggregatorKindAny` pushes the node's **own** raw diffs record
(`crawlValue[diffsMetaKey]`) into the same bag it builds descendant diffs from, so
`nodeDescendantDiffs` can contain entries for plain scalar fields (`description`,
`minProperties`, …) alongside real per-child diffs, keyed by whatever the raw diff literal key
happened to be. Naively porting ddlapi's `descendantDiffEntries.length !== childCount` check
(`Object.values(nodeDescendantDiffs).length`) breaks the moment a sibling field changes alongside
the children (a very common real-world case) — the count is inflated and "uniform" detection
silently stops firing.

**Fix:** explicitly enumerate the node's real child keys from the raw crawl value (`properties`,
`patternProperties`, `items` tuple entries, singleton `additionalProperties` / `additionalItems`
— **not** `allOf`/`oneOf`/`anyOf`, which are `nestedNodes()`, not `childrenNodes()`) and look up
each one individually in `nodeDescendantDiffs`, rather than trusting the record's own key count.

### 3. `aggregateByDescendantDiffs` already existed — JSON Schema had just never overridden it

`AbstractNodeDiffsAggregator.aggregateByDescendantDiffs` is a no-op hook on the abstract base,
already wired into the builder's `assignNodeDiffs` (`updateNodeDiffsByDescendantDiffs`, called
**after** `node.diffs` and `node.descendantDiffs` are both populated) and already used by
async-api and ddlapi. JSON Schema's `kind-any.ts` had simply never overridden it. This is the
right place for "combine already-computed node diffs with already-computed descendant diffs"
logic — do not recompute descendant diffs a second time inside `aggregate()`, and do not try to
do this in the severities pass instead.

The hook's return value is **discarded** by the caller — implementations must **mutate** the
`nodeDiffs` object passed in, not just return a new one.

### 4. Diagnosed the wrong root cause first — traced layout, not data

When told "we lost the floating diff badge", the first fix hypothesized a **DOM/CSS** cause:
conditionally unmounting `<NestingIndicatorTitleLabel>` on the hidden side was assumed to shrink
that side's row height and break the badge's positioning, so the fix wrapped that theory in a
`visibility: hidden` toggle instead. The actual cause was unrelated to layout: `diffType` /
`diffTypeCause` in `NestingIndicatorTitleRow.tsx` come from `diffsSeverities?.[placement]`, and
`diffsSeverities` had **never been passed** from `SchemaNodeViewer.tsx` in the first place — the
severities side of the feature had not been wired at all (see lesson 5).

**Lesson:** when a diff-driven visual element (badge, background, chip) "disappears" or "never
appears", trace what **data** it renders from first (`diffType`/`diffTypeCause` ← `diffsSeverities`
← the node's `diffsSeverities` field ← the severities aggregator) before hypothesizing a
layout/CSS explanation. The layout theory was plausible-sounding but wrong, and shipping a fix
for it before verifying cost a full extra round trip that had to be reverted.

### 5. Row-level colorizing and row-level severity are two separate wiring steps — do both together

Adding a `*RowColorizingDiff` field (drives the `diff` prop / background) does **not**
automatically drive `diffsSeverities` / `DiffFloatingBadgeWrapper` — they are separate props read
from separate node fields (`node.diffs.<field>` vs `node.diffsSeverities[placement]`), populated
by separate aggregators (`node-diffs/` vs `node-diffs-severities/`) that both need updating.

The async-api `ServerAddressRow` pattern (`MessageChannelServerNodeViewer.tsx` +
`AsyncApiNodeDiffsSeveritiesAggregatorKindAny`) is the reference: a **dedicated**
`NodeDiffsSeverityPlacemennt` member per row (`NestingIndicatorRow` was added here, alongside
`ServerAddressRow` / `AddressRow` / `BindingVersionRow`), whose severity is built from **the same
diff object** already used for the row's colorizing — not a separately re-derived one. Whenever
you add a new row-level colorizing diff for any spec, add its matching severities placement in
the **same** change; do not treat severities as an optional cosmetic follow-up.

### 6. Whole-node cascade covers "node itself or its parent/container" for free

`nodeDiffs[NODE_LEVEL_DIFF_KEY]` on a JSON Schema node is already populated by inheritance when a
**parent or container** was wholly added/removed (`JsonSchemaNodeDiffsAggregatorKindAny.aggregate`
— the `containerNode` / `parentNode` branches at the top of the method run before the node's own
crawl diffs are read). By the time `aggregateNestingIndicatorRowColorizingDiff` runs, that
inherited diff is already sitting in `nodeDiffs[NODE_LEVEL_DIFF_KEY]`. So "node itself wholly
added/removed" and "its parent/container was wholly added/removed" did not need two separate
checks — reading `NODE_LEVEL_DIFF_KEY` once covers both.

### 7. Hiding-unchanged-nodes interplay needed no extra plumbing

`hasOwnChangeSignals` (`changed-only/has-own-change-signals.ts`) treats **any** non-empty
`node.diffs` record as a change signal — it does not special-case individual field names. Storing
the new field on `node.diffs` was therefore enough to keep the owning node (and its
`NestingIndicatorTitleRow`) out of collapsed "N unchanged nodes" placeholders automatically; no
change was needed in `resolveJsonSchemaUnchangedBlocks` / `isJsonSchemaNodeChanged`. Verify this
holds instead of assuming it does — it is easy to over-engineer a fix here that duplicates
existing behaviour.

---

## Checklist — new row-level colorizing diff for JSON Schema (or any spec)

1. Compute the row's `ChangedPropertyMetaData` in `aggregateByDescendantDiffs` (or `aggregate`),
   as a field distinct from `NODE_LEVEL_DIFF_KEY` unless the row **is** the node's own title row.
2. Add a matching `NodeDiffsSeverityPlacemennt` member and populate it from **the same diff
   object**, in both the whole-node-cascade branch and the field-specific branch of the
   severities aggregator.
3. Wire the viewer: `diff` (background) **and** `diffsSeverities` + `diffsSeverityPlacement`
   (floating badge) — both, not just one.
4. If the row can hide content on one side, keep the element mounted and toggle
   `visibility`/inner content — but verify first whether the actual symptom is layout or a
   missing data field before choosing that fix (see lesson 4).
5. Confirm `hasOwnChangeSignals` doesn't need a change — it usually doesn't, since it reads
   `node.diffs` generically (see lesson 7).

---

## Related documents

- Diff inheritance / `NODE_LEVEL_DIFF_KEY` contract and the `aggregateByDescendantDiffs`
  extension point: `next-data-model-authoring` skill — "Diff inheritance contract".
- ddlapi precedent for uniform-descendant colorizing:
  `packages/next-data-model/src/building-service/ddlapi/tree-with-diffs/node-diffs-data/shared/property-list-section-diff-utils.ts`.
- async-api precedent for row diff + severity pairing:
  `packages/api-doc-viewer/src/components/AsyncApiOperationViewer/MessageChannelServerNodeViewer/MessageChannelServerNodeViewer.tsx`.
- Hiding-unchanged-nodes mechanics:
  `packages/next-data-model/src/building-service/json-schema/tree-with-diffs/changed-only/`.
- Unit tests: `packages/next-data-model/tests/unit-tests/json-schema-with-diffs.test.ts`.
