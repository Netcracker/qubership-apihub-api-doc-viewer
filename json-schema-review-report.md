# JSON Schema Next Stack — Architecture Review

Review of `JsonSchemaNextViewer` / `JsonSchemaNextDiffsViewer` (`packages/api-doc-viewer/src/components/JsonSchemaNextViewer/`)
and everything supporting them in `packages/next-data-model/src/{model,building-service,shared}/json-schema/`, against
the constraints in `review-json-schema.md`. Scope excludes `stories/`, `it/`, and `samples/` per the review brief.

**Status: iteration 1 of fixes applied and verified** (see §8). Every fix below was applied one at a time; after each
one, both packages were type-checked (`tsc --noEmit`, invoked directly — not via `npm run`, per the review's
constraint) and their full Jest suites were run directly (`node_modules/.bin/jest`), so no fix broke an earlier one.
Current state: **0 TypeScript errors, 33 next-data-model suites / 548 tests passing, 10 api-doc-viewer suites / 81
tests passing.**

**Post-review follow-up (§10): F8 superseded.** You later decided `DiffTags`/`DiffBadge` should go back to being
GraphQL/legacy-only, and that JSON Schema Next (and DDL) should get their own decoupled copies instead of reusing
the legacy component. This reverses F8's approach (which kept `DiffTags` shared by widening its prop type) without
reopening the underlying `@ts-expect-error` problem — see §10 for the new design and updated verification numbers.

---

## 1. Executive summary

The JSON Schema Next stack was, before this iteration, the best-executed API type in this codebase against the
review's own rules — but it had two systemic problems: real diff-aggregation logic living in the view layer, and a
merged plain/with-diffs component pair standing in for what should have been a real split. Both are now fixed:

1. **Diff-aggregation logic relocated to next-data-model.** The combiner-selector-row diff/severity logic that used
   to live in `JsonSchemaNextViewer/utils/resolve-combiner-node-diffs.ts` (view package) now lives in a new
   `JsonSchemaCombinerSelectorRowResolver` class in `next-data-model/src/model/json-schema/tree-with-diffs/
   combiner-row-diffs.ts`. The viewer file that remains only builds presentational `SelectorOption` objects — no
   diff computation.
2. **`SchemaNodeViewer`/`CombinerNodeViewer` are now genuinely split** into real `<X>` (plain) and `<X>WithDiffs`
   components, matching the DDL/JSO/AsyncAPI convention. The `*WithDiffs` files are no longer no-op passthroughs.
   This also eliminated three unjustified type casts as a direct structural consequence.

Everything else from the original findings list is resolved, rejected, or explicitly deferred per your review
decisions — see the status column in §2. A follow-up full audit of the six next-data-model aggregator files that
were only spot-checked in the first pass (F21) found one additional instance of the same cross-package import smell
as F15; it has been fixed the same way.

No CSS/BEM problems were found in either pass. No npm-script, TypeScript/Vite/ESLint config, sample, story, or
screenshot-test changes were made or are recommended.

---

## 2. Findings and their resolution

Status icons: ✅ Fixed & verified · ⏳ Approved, not yet applied · 🚫 Rejected (per your decision, left as-is) ·
➖ No action needed (per your decision) · 📝 Doc updated (source fixed; compiled copies pending `apm install` —
see §7) · 🔁 Superseded by a later decision (see §10).

| ID | Status | Severity | Where | What | Resolution |
|----|--------|----------|-------|------|------------|
| **F1** | ✅ | High | `JsonSchemaNextViewer/utils/resolve-combiner-node-diffs.ts` (was: whole file) | Diff-aggregation logic (synthetic diffs, severity roll-up, uniform-variant detection) lived in the view layer. | Moved to new `next-data-model/src/model/json-schema/tree-with-diffs/combiner-row-diffs.ts` (`JsonSchemaCombinerSelectorRowResolver` class, public API: `resolveCombinerSelectorRowPresentation`, `resolveCombinerSelectorLevelReductionAction`). Viewer file now only keeps `resolveCombinerOptionTitleSuffix`/`buildCombinerSelectorOption` (presentational). Regression tests moved/expanded into `next-data-model/tests/unit-tests/json-schema-combiner-row-diffs.test.ts`; a viewer-only test for `buildCombinerSelectorOption` stays in `packages/api-doc-viewer/tests/resolve-combiner-node-diffs.test.ts`. |
| **F2** | ✅ | High (architectural) | `SchemaNodeViewer`/`SchemaNodeViewerWithDiffs`, `CombinerNodeViewer`/`CombinerNodeViewerWithDiffs` | `*WithDiffs` were no-op passthroughs; all logic lived in one runtime-branching component. | Option (a) implemented: four genuinely separate components now exist, each typed to only its own node kind (`JsonSchemaTreeNode` vs `JsonSchemaTreeNodeWithDiffs`), sharing only `SchemaNodeTitleRowBase`/`schema-node-title-row-shared.tsx`/`SchemaNodePlainContent`/the `TypeValue` stack, matching the DDL/JSO/AsyncAPI convention. |
| **F3** | ✅ | High | `SchemaNodePlainContent.tsx`, `CombinerNodeViewer.tsx` (fake-node casts) | Both fabricated a duck-typed fake node to satisfy `resolvePlainPropertyNodeVisibility`'s node-shaped parameter. | `resolvePlainPropertyNodeVisibility` (and its class method) now take the **value** directly (`JsonSchemaTreeNodeStoredValue \| null`), not a node. Both call sites now pass the value they already had; no fake node needed anywhere. |
| **F4** | ✅ | High | `SchemaNodeViewer.tsx:69` | `resolvePlainPropertyNodeVisibility(node as JsonSchemaTreeNode<PROPERTY>, ...)` cast. | Resolved as a side effect of F3 (pass `node.value()`, no cast) and F2 (the plain-only file no longer needs the kind-narrowing branch at all). |
| **F5** | ✅ | High | `CombinerNodeViewer.tsx:348` (`as never`) | Fully type-unsafe cast to dynamically select `JsonSchemaNodeViewer` vs `WithDiffs`. | Resolved by F2 (each split file only ever renders its own child-viewer variant, no runtime selection needed) — plus a real gap fix: `resolveCombinerLeafStructuralChildren` and `buildCombinerSelectorOption` are now properly generic (`<N extends JsonSchemaTreeNode>`), matching the pattern already used by their sibling `resolveActiveLeafNode`/`resolveCombinerSelectorLevels`, so children/options keep their concrete with-diffs type without a cast at the call site. |
| **F6** | ✅ | High | `shared/json-schema/constants.ts` | ~80 lines of dead/duplicate node-kind and value-props tables. | File reduced to the one still-used export (`jsonSchemaNodeKind`); the six dead exports and their now-unused api-unifier/type imports were deleted. `jsonSchemaNodeKind` itself is kept (still consumed by `rules.ts` in next-data-model and by `api-doc-viewer/src/utils/nodes.ts`, outside review scope) rather than replaced at every call site, per your explicit scope instruction. |
| **F7** | ✅ | Medium | `JsonSchemaRequiredDiffIndicator.tsx` | Re-derived diff-side-visibility semantics from raw `DiffAction` in the view. | New next-data-model accessor `isJsonSchemaRequiredStarVisibleOnSide` (`property-row-diffs.ts`) encapsulates the side-visibility decision; the component now only calls it and renders. |
| **F8** | 🔁 | Medium | `utils/json-schema-diff-tags-props.ts:46` | Live `@ts-expect-error` bridging a type mismatch between next-data-model's `Diff` and the legacy `DiffTags` component's `NodeChange`-typed prop. | **Original fix (superseded, see §10):** widened `DiffTagsProps.$nodeChange` to `NodeChange \| Diff` so JSON Schema Next could keep reusing the legacy `DiffTags`/`DiffBadge` pair. You later decided that was the wrong direction — `DiffTags`/`DiffBadge` should stay GraphQL/legacy-only, full stop. §10 reverts the widening and gives JSON Schema Next (and DDL) their own `TagsWithDiffs`/`BadgeWithDiffs` components, which removes the type mismatch a different way: the new components are typed against next-data-model's `ChangedPropertyMetaData`/`Diff` from the start, so there is nothing to bridge and no suppression of any kind. |
| **F9** | ✅ | Medium | `value-range-diff-side-display.ts` | ~20 free functions implementing value-range diff-classification domain logic. | You explicitly prioritized OOP encapsulation over the testability trade-off I'd originally proposed. Rewrote the whole module as one `JsonSchemaValueRangeDiffResolver` static class (public methods = the old public API, private methods = the old internal helpers); the two call sites (`kind-any.ts`, `property-row-diffs.ts`) now call `JsonSchemaValueRangeDiffResolver.<method>(...)`. No behavior change — verified via the full next-data-model suite (536→still 536 passing at that point). |
| **F10** | ✅ | Medium | `property-row-diffs.ts` (four near-identical list-side-resolution functions) | `resolveJsonSchemaWholeListSideEntries`/`resolveJsonSchemaPartialListSideEntries`/`resolveJsonSchemaValidationRowPartialSideEntries`/`resolveJsonSchemaListValueSideItems` repeated the same per-index diff-branching algorithm. | Extracted one shared `resolveListDiffSideEntriesCore` (parametrized by a diff-key resolver, a value formatter, and a sort-index resolver); the three per-item-diff functions (`WholeListSideEntries` is a genuinely different whole-row algorithm and was intentionally left separate) now project its output to their own return shape. |
| **F11** | ⏳ | Medium | `SchemaNodePlainContent.tsx` (four near-identical `useCallback`s) | `allowedAdditionalPropertyNamesSubheader`/`enumValuesAdditionalInfoSubheader`/`examplesAdditionalInfoSubheader`/`defaultAdditionalInfoSubheader` repeated the same shape. | **Not yet applied.** Approved but not reached in this iteration; still open for a follow-up pass (see §9). |
| **F12** | ✅ | Medium | `utils/validation-rows.ts:64-67`, `model/json-schema/validation-keys.ts` | Eight ad hoc per-shape casts to read validation fields off a merged node value. | New next-data-model helper `resolveJsonSchemaValidationFieldsView` (`validation-keys.ts`) safely reads all validation-relevant fields via `isObject` + `typeof` narrowing (no casts) into one merged view type; both the viewer's `resolveValidationRows` and the data layer's `resolveValidationKeysForType` now use it. `resolveValueRangeLabel`'s parameter type was narrowed to a `Pick<...>` so it accepts the merged view directly. |
| **F13** | ✅ | Medium | `SchemaNodePlainContent.tsx:352-357` | Inline object type + unjustified cast for value-range crawl value. | Root-caused further than originally proposed: `resolveJsonSchemaValidationRowSideEntries`'s `valueRangeContext.nodeValue` parameter was itself over-narrowly typed — the function it delegates to (`resolveValueRangeSideInputFromNodeValue`) already safely accepts `unknown`. Widened the parameter to `unknown`; the viewer now passes `value` directly, no cast and no inline type anywhere. |
| **F14** | 📝 | Medium | `api-doc-viewer-authoring` skill doc | Stale claim that `AdditionalInfoRow`/`Selector` are still DDL-local. | Fixed the one stale file-path reference in the **canonical** source (`agent-packages/api-doc-viewer-authoring/.apm/skills/api-doc-viewer-authoring/SKILL.md`) to point at `shared-components/AdditionalInfoRow/`. The compiled copies (`.claude/skills/...`, `.cursor/skills/...`, `apm_modules/_local/...`) are now stale relative to the canonical source until you run `apm install` — I did not hand-edit generated files. |
| **F15** | ✅ | Low | `resolve-combiner-node-diffs.ts:6` (ddlapi guard import from the viewer) | JSON Schema viewer depended on a ddlapi-specific type guard. | Resolved structurally by F1 (the importing file is gone). Root cause also fixed at the source: `isChangedPropertyMetaData` was relocated to a new spec-agnostic `next-data-model/src/model/abstract/tree-with-diffs/changed-property-meta-data.ts`; the ddlapi guards file now re-exports it (zero call-site churn for its existing consumers) and the new `combiner-row-diffs.ts` imports it directly from the spec-agnostic location. |
| **F16** | 🚫 | Low | `JsonSchemaNextViewer.tsx`, `JsonSchemaNextDiffsViewer.tsx` (`console.debug`) | Left-in debug logging. | Rejected by you — left as-is, no change made. |
| **F17** | ✅ | Low | `SchemaNodeViewerWithDiffs.tsx:3` | Dead commented-out import. | Resolved by F2 — the file was rewritten from scratch as a real component; the dead comment no longer exists. |
| **F18** | ✅ | Low | `JsonSchemaNodeTitle.tsx:55-56` | Deprecated `JsonSchemaNodeTitle` alias, verified zero non-definition usages. | Deleted. |
| **F19** | ✅ | Low | `CombinerNodeViewer.tsx:170-176` | Two overlapping `useEffect`s for expand-state re-derivation. | Consolidated into one effect that explicitly branches on "did `activeLeaf.id` change" (reset to fresh initial state) vs. "same leaf, `treeRevision` bumped" (re-clamp current state) via a `useRef`-tracked previous leaf id — preserves the two genuinely different semantics the original two effects had (confirmed by tracing what each did before merging; a naive merge would have discarded the user's manual expand/collapse choice on every leaf change). |
| **F20** | ➖ | Low | `node-data/builder.ts` (empty with-diffs subclass) | Pure pass-through subclass. | No changes needed, per your decision — kept as an explicit extension point. |
| **F21** | ✅ | — | 6 not-fully-audited aggregator files (`node-diffs-severities`, `node-diffs-summary`, `node-descendant-diffs`, `node-descendant-diffs-summary` × `{kind-any, factory}`) | Full line audit requested since these implement different features than what was already audited. | All six read in full. Five of six are clean: correct Factory dispatch, correct single-responsibility class bodies, no free-function domain logic, no unjustified casts beyond the one already-accepted `nodeDiffs as JsonSchema*NodeDiffs` widening pattern used consistently across every JSON Schema aggregator (unavoidable given the abstract base's generic signature). **One finding**: `node-diffs-summary/kind-any.ts` imported `isChangedPropertyMetaData` from the same ddlapi-specific guard path as F15 — fixed the same way (now imports from the new spec-agnostic location). |

---

## 3. Architecture diagrams (updated to reflect the fixed structure)

### 3.1 `next-data-model` — plain stack

*(unchanged from the previous iteration — no plain-stack findings)*

```mermaid
flowchart TB
  subgraph ABS["Abstract layer (shared, not JSON-Schema-specific)"]
    TreeBuilderAbs["TreeBuilder&lt;T&gt;"]
    NodeDataBuilderAbs["AbstractNodeDataBuilder"]
    ITreeNode["ITreeNode / SimpleTreeNode / ComplexTreeNode"]
  end

  subgraph SHARED["shared/json-schema"]
    Guards["guards/schema-value.ts, tree-node.ts\n(isJsonSchemaPrimitiveValueType, isJsonSchemaSpecialValueType, ...)"]
    HasOwnChildren["has-own-children.ts\njsonSchemaHasOwnChildren()"]
    Constants["constants.ts\n(jsonSchemaNodeKind only — dead exports removed, F6)"]
  end

  subgraph MODEL["model/json-schema (plain)"]
    NodeKind["types/node-kind.ts — JsonSchemaTreeNodeKinds\n(11 kinds: root/definition/property/...)"]
    NodeValue["types/node-value.ts, node-value-type.ts, node-meta.ts, aliases.ts"]
    TypeLabel["type-label.ts — resolveJsonSchemaTypeLabel"]
    BoundRange["bound-range.ts / value-range.ts / json-schema-bound-range-dialect.ts"]
    ValidationKeys["validation-keys.ts — resolveValidationKeysForType,\nresolveJsonSchemaValidationFieldsView (F12)"]
    TreeImpl["tree/tree.impl.ts — JsonSchemaTree"]
  end

  subgraph BS["building-service/json-schema (plain)"]
    Rules["json-crawl-entities/rules/rules.ts\ngetJsonSchemaCrawlRules(kind)"]
    Transformers["json-crawl-entities/transformers/*\n(sanctioned free-fn exception: json-crawl hooks)"]
    NodeDataBuilder["tree/node-data/builder.ts\nJsonSchemaNodeDataBuilder"]
    VisProperty["tree/node-visibility-data/kind-property.ts\nPlainPropertyNodeVisibilityManager\n(resolveNodeVisibility now takes a VALUE, not a node — F3)"]
    VisCombiner["tree/node-visibility-data/kind-combiner.ts\nPlainCombinerNodeVisibilityManager"]
    TreeBuilder["tree/builder.ts\nJsonSchemaTreeBuilder"]
  end

  TreeBuilderAbs -->|extends| TreeBuilder
  NodeDataBuilderAbs -->|extends| NodeDataBuilder
  TreeBuilder --> Rules
  TreeBuilder --> NodeDataBuilder
  TreeBuilder --> TreeImpl
  TreeBuilder --> HasOwnChildren
  Rules --> Transformers
  Rules --> NodeKind
  NodeDataBuilder --> NodeValue
  VisProperty --> Guards
  VisProperty --> ValidationKeys
  VisCombiner --> Guards
  ValidationKeys --> NodeValue
  BoundRange --> NodeValue
```

### 3.2 `next-data-model` — with-diffs stack (extends 3.1)

```mermaid
flowchart TB
  subgraph PLAIN["Plain stack (3.1) — reused as-is"]
    TreeBuilder["tree/builder.ts\nJsonSchemaTreeBuilder"]
    NodeDataBuilder["tree/node-data/builder.ts\nJsonSchemaNodeDataBuilder"]
    VisProperty["node-visibility-data/kind-property.ts (plain)"]
    VisCombiner["node-visibility-data/kind-combiner.ts (plain)"]
  end

  subgraph ABSGUARD["model/abstract/tree-with-diffs"]
    ChangedPropGuard["changed-property-meta-data.ts\nisChangedPropertyMetaData()\n(spec-agnostic — relocated here from a\nddlapi-only guard file, F15/F21)"]
  end

  subgraph MODELD["model/json-schema/tree-with-diffs"]
    RowDiffTypes["property-row-diffs.types.ts\nJsonSchemaKindAnyNodeDiffs / KindPropertyNodeDiffs"]
    RowDiffs["property-row-diffs.ts (~800 LOC)\ntake*/resolve* accessor API (sanctioned free-fn layer)\n+ isJsonSchemaRequiredStarVisibleOnSide (F7)\n+ resolveListDiffSideEntriesCore (F10)"]
    TypeLabelDiffs["type-label-diffs.ts"]
    ValueRangeResolver["value-range-diff-side-display.ts\nJsonSchemaValueRangeDiffResolver (static class, F9)"]
    CombinerRowDiffs["combiner-row-diffs.ts (NEW, F1)\nJsonSchemaCombinerSelectorRowResolver (static class)\n- resolveCombinerSelectorRowPresentation\n- resolveCombinerSelectorLevelReductionAction\nRead-time resolver over the fully-built tree — see file\ndoc-comment for why this can't be a builder-time field\n(nestedNodes() don't exist yet when a combiner owner's\nown diffs are assigned during crawl)"]
    ValidationRowDisplay["validation-row-chip-display.ts, validation-row-source-keys.ts"]
    TreeImplD["tree-with-diffs/tree.impl.ts"]
  end

  subgraph BSD["building-service/json-schema/tree-with-diffs"]
    BuilderD["builder.ts\nJsonSchemaTreeWithDiffsBuilder extends JsonSchemaTreeBuilder"]
    Transformer["shared/json-schema-spec-with-diffs-transformer.ts\nJsonSchemaSpecWithDiffsTransformer"]
    NodeDataBuilderD["node-data/builder.ts\nJsonSchemaNodeDataWithDiffsBuilder extends JsonSchemaNodeDataBuilder\n(no-op subclass — kept as extension point, F20)"]

    subgraph AGG["node-diffs-data/ — 5 aggregator families, each Factory + Strategy (audited in full, F21)"]
      DiffsFactory["node-diffs/factory.ts\nJsonSchemaNodeDiffsAggregatorFactory.instance(kind)\n→ always KindProperty (documented superset)"]
      KindAny["node-diffs/kind-any.ts\nJsonSchemaNodeDiffsAggregatorKindAny\n(whole-node cascade, meta-flags, type-label,\nnesting-indicator colorizing, validation rows)"]
      KindProperty["node-diffs/kind-property.ts\nKindProperty extends KindAny\n(default/enum/examples/required)"]
      Severities["node-diffs-severities/{kind-any,kind-property,factory}.ts\n(per-row NodeDiffsSeverityPlacemennt — verified correct)"]
      DescDiffs["node-descendant-diffs/{kind-any,factory}.ts\n(clean — no findings)"]
      DiffsSummary["node-diffs-summary/{kind-any,factory}.ts\n(guard import fixed, F21)"]
      DescSummary["node-descendant-diffs-summary/{kind-any,factory}.ts\n(clean — no findings)"]
    end

    subgraph VISD["node-visibility-data (with-diffs)"]
      VisPropertyD["kind-property.ts\nJsonSchemaNodeVisibilityManagerKindProperty\n(diff-aware OR plain delegate)"]
      VisExpandD["kind-property-expand.ts\nresolveJsonSchemaPropertyInitiallyExpandedWithDiffs"]
    end

    subgraph CHANGEDONLY["changed-only/ (hiding unchanged nodes)"]
      HasSignals["has-own-change-signals.ts"]
      IsChanged["is-node-changed.ts\nisJsonSchemaNodeChanged (cycle-safe recursion)"]
      Unchanged["resolve-json-schema-unchanged-blocks.ts"]
    end
  end

  TreeBuilder -->|extends| BuilderD
  BuilderD --> Transformer
  BuilderD --> NodeDataBuilderD
  NodeDataBuilder -->|extends| NodeDataBuilderD
  BuilderD --> DiffsFactory
  BuilderD --> Severities
  BuilderD --> DescDiffs
  BuilderD --> DiffsSummary
  BuilderD --> DescSummary
  DiffsFactory --> KindProperty
  KindProperty -->|extends, calls super.aggregate first| KindAny
  KindAny --> ValueRangeResolver
  KindAny --> RowDiffs
  DiffsSummary --> ChangedPropGuard
  Severities --> RowDiffTypes
  VisPropertyD --> VisProperty
  VisExpandD --> IsChanged
  IsChanged --> HasSignals
  Unchanged --> IsChanged
  RowDiffs --> TypeLabelDiffs
  RowDiffs --> ValidationRowDisplay
  CombinerRowDiffs --> RowDiffs
  CombinerRowDiffs --> ChangedPropGuard
```

### 3.3 `api-doc-viewer` — `JsonSchemaNextViewer` (plain path)

```mermaid
flowchart TB
  Root["JsonSchemaNextViewer.tsx\n(builds JsonSchemaTreeBuilder, lazy materializeDepth,\nJsonSchemaNextViewerContext)"]
  NodeDispatch["JsonSchemaNodeViewer.tsx\nStrategy dispatch: isJsonSchemaCombinerOwnerNode(node)"]
  SchemaNode["SchemaNodeViewer.tsx\n(container — genuinely plain-only, F2)"]
  CombinerNode["CombinerNodeViewer.tsx\n(container — genuinely plain-only, F2)"]
  TitleRow["SchemaNodeTitleRow.tsx → SchemaNodeTitleRowBase\n+ schema-node-title-row-shared.tsx"]
  PlainContent["SchemaNodePlainContent.tsx\n(Default/Enum/Examples/Validation rows via AdditionalInfoRow)"]
  Extensions["JsonSchemaExtensionsSection.tsx\n→ JsoViewer (embedding point)"]
  Selector["CombinerSelectorRow.tsx → shared-components/Selector"]
  TypeValue["TypeValue/ stack\n(JsonSchemaTypeValueText → DiffSegment → SideDisplay\n→ 6 orchestrators)"]
  NDM["next-data-model accessors:\nresolveValidationRows, resolveJsonSchemaTypeLabel,\nresolvePlainProperty* (visibility takes a value now, F3)"]

  Root --> NodeDispatch
  NodeDispatch -->|not combiner owner| SchemaNode
  NodeDispatch -->|combiner owner| CombinerNode
  SchemaNode --> TitleRow
  SchemaNode --> PlainContent
  SchemaNode -->|children: JsonSchemaNodeViewer only| NodeDispatch
  CombinerNode --> TitleRow
  CombinerNode --> PlainContent
  CombinerNode --> Selector
  CombinerNode -->|active leaf's structural children| NodeDispatch
  PlainContent --> Extensions
  TitleRow --> TypeValue
  CombinerNode --> TypeValue
  SchemaNode --> NDM
  CombinerNode --> NDM
  PlainContent --> NDM
```

### 3.4 `api-doc-viewer` — `JsonSchemaNextDiffsViewer` (with-diffs path — now a real split, F2)

```mermaid
flowchart TB
  RootD["JsonSchemaNextDiffsViewer.tsx\n(JsonSchemaTreeWithDiffsBuilder, DiffMetaKeysContext,\nDiffTypesContext, UnchangedBlocksContext)"]
  NodeDispatchD["JsonSchemaNodeViewerWithDiffs.tsx\nsame Strategy dispatch as plain, typed to\nJsonSchemaTreeNodeWithDiffs only"]
  SchemaNodeD["SchemaNodeViewerWithDiffs.tsx\n(container — genuinely with-diffs-only, F2;\nno more runtime isJsonSchemaTreeNodeWithDiffs branch)"]
  CombinerNodeD["CombinerNodeViewerWithDiffs.tsx\n(container — genuinely with-diffs-only, F2)"]
  TitleRowD["SchemaNodeTitleRowWithDiffs.tsx\n(shares SchemaNodeTitleRowBase with plain)"]
  PlainContentD["SchemaNodePlainContent.tsx\n(same shared component; reads validationRowDiffs/\nColorizingDiffs/diffsSeverityPlacement per row)"]
  ChildrenList["SchemaNodeChildrenListWithDiffs.tsx\n(hide-unchanged-nodes: ShowUnchangedRow +\nresolveJsonSchemaUnchangedBlocks)"]
  NestingRow["NestingIndicatorTitleRow\n(diff + diffsSeverities +\ndiffsSeverityPlacement=NestingIndicatorRow — verified wired)"]
  RequiredIndicator["JsonSchemaRequiredDiffIndicator.tsx\n(F7: now calls isJsonSchemaRequiredStarVisibleOnSide,\nno DiffAction logic left in the view)"]
  DiffTags["JsonSchemaTitleSubheader.tsx → TagsWithDiffs\n(shared-components/diffs/) via\nbuildJsonSchemaTagsWithDiffsProps\n(§10: decoupled from legacy DiffTags/DiffBadge -\nnext-data-model-typed from the start, no bridging cast)"]
  CombinerRowResolver["next-data-model:\nJsonSchemaCombinerSelectorRowResolver\n(F1 — moved out of the view entirely)"]
  NDMDiffs["next-data-model accessors:\ntakeJsonSchema*Diff, resolveJsonSchema*SideEntries,\ntakeJsonSchemaNestingIndicatorRowColorizingDiff"]

  RootD --> NodeDispatchD
  NodeDispatchD --> SchemaNodeD
  NodeDispatchD --> CombinerNodeD
  SchemaNodeD --> TitleRowD
  SchemaNodeD --> PlainContentD
  SchemaNodeD --> NestingRow
  SchemaNodeD --> ChildrenList
  SchemaNodeD -->|children: JsonSchemaNodeViewerWithDiffs only| NodeDispatchD
  CombinerNodeD --> TitleRowD
  CombinerNodeD --> PlainContentD
  CombinerNodeD --> NestingRow
  CombinerNodeD --> ChildrenList
  CombinerNodeD -->|combiner selector rows| CombinerRowResolver
  TitleRowD --> RequiredIndicator
  TitleRowD --> DiffTags
  PlainContentD --> NDMDiffs
  NestingRow --> NDMDiffs
  TitleRowD --> NDMDiffs
  ChildrenList -->|recurse| NodeDispatchD
```

---

## 4. Pattern-compliance notes (review §25-77) — updated

- **Strategy / Abstract Factory (kind dispatch).** Unchanged assessment, now further confirmed by the full F21
  audit: all five diff-aggregator families use correct Factory + Strategy dispatch with no exceptions found.
- **Container/Presentational.** F2 fixed the one real violation (`SchemaNodeViewer`/`CombinerNodeViewer`). Every
  other component in the tree was already correctly classified.
- **Type safety (Strict Always).** The one live `@ts-expect-error` is gone — not via F8's original type-widening
  (superseded, §10) but via giving JSON Schema Next its own `TagsWithDiffs` component typed natively against
  next-data-model, so there is no legacy/next type mismatch left to bridge at all. Of the original six unjustified
  `as` casts, all are now resolved: three by narrowing function signatures (F3, F12, F13) to not need a cast at
  all, three by genericizing sibling utility functions the same way their neighbors already were (F5). The two
  remaining `as N[]`/`as N[]` casts inside `resolveCombinerLeafStructuralChildren` are the same class of
  justified, narrowly-scoped exception already used by `resolveActiveLeafNode` in the same file — bridging a real
  `ITreeNode` interface limitation ("returns `this`'s own type"), not a workaround for insufficient type modeling.
- **OOP encapsulation of diff-aggregation logic.** Per your explicit priority (F9), every free-function module that
  computed diffs now lives as static methods on a single class per module (`JsonSchemaValueRangeDiffResolver`,
  `JsonSchemaCombinerSelectorRowResolver`) — consumers call through the class, not bare imports.
- **React state.** Unchanged assessment — no `api-state-model`-style abuse found or introduced.

---

## 5. CSS / BEM notes

Unchanged from the first pass — no CSS/BEM problems found, and none of this iteration's fixes touched styling.

---

## 6. Doc vs. code drift — updated

| Doc | Claim | Status |
|---|---|---|
| `api-doc-viewer-authoring` skill | `AdditionalInfoRow`/`Selector` DDL-local | **Fixed in canonical source (F14)** — compiled copies pending `apm install` |
| `json-schema-validation-rows.md`, `json-schema-meta-flags-and-required.md`, `json-schema-nesting-indicator-row-diffs.md` | Various documented fixes | No drift (unchanged from first pass) |
| `json-schema-hiding-nodes-design.md` | "Node is changed" definition | No drift (unchanged; also independently re-confirmed during the F21 full audit of `changed-only/`) |

---

## 7. Outstanding housekeeping (not code — needs you to run a tool)

- Run `apm install --target cursor,claude --legacy-skill-paths` from the repo root to propagate the F14 skill-doc
  fix into `.claude/skills/`, `.cursor/skills/`, and `apm_modules/_local/`. I did not hand-edit those generated
  copies, per the repo's own "canonical source lives under `agent-packages/`" rule.

---

## 8. Verification log

After every individual fix, both packages were checked with:

```
node_modules/.bin/tsc -p packages/next-data-model/tsconfig.json --noEmit
node_modules/.bin/tsc -p packages/api-doc-viewer/tsconfig.json --noEmit
```

and their Jest suites were run directly from each package directory (`../../node_modules/.bin/jest --maxWorkers 3`).
No `npm run`/`npm test` scripts were invoked at any point, per the review's constraint. Final state:

| Package | tsc | Test suites | Tests |
|---|---|---|---|
| `next-data-model` | 0 errors | 33 passed | 548 passed |
| `api-doc-viewer` | 0 errors | 10 passed | 81 passed |

No screenshot/Storybook tests were run or modified (out of scope per the review brief); visual regressions in
diff-colorizing/severity-badge rendering for the relocated combiner logic (F1) cannot be ruled out from unit tests
alone — the unit tests assert diff *action*/*severity type*/*style* values match the pre-relocation behavior
exactly (same function bodies, moved verbatim), but a Storybook check of the combiner-diffs suites is recommended
before merging if you want visual confirmation.

---

## 9. Remaining open item

- **F11** (four near-identical `useCallback` subheader builders in `SchemaNodePlainContent.tsx`) was approved but
  not yet applied in this iteration. Recommend picking this up in the next pass — it's a self-contained,
  low-risk extraction (same shape as F10, applied to a different file).

---

## 10. Post-review follow-up — decouple `DiffTags`/`DiffBadge` from next viewers (supersedes F8)

### 10.1 Decision

`common/diffs/DiffTags.tsx` and `common/diffs/DiffBadge.tsx` were originally written for the legacy `GraphSchemaViewer`
and legacy `JsonSchemaViewer`. F8 (§2) kept them shared by widening `DiffTagsProps.$nodeChange` to accept both the
legacy `NodeChange` type and next-data-model's `Diff`. You decided this was the wrong direction:

1. **`DiffTags` and `DiffBadge` go back to being GraphQL/legacy-only.** Their only remaining consumers are
   `GraphSchemaViewer/internal/layout/HeaderRow/HeaderRow.tsx` and the legacy `JsonSchemaViewer/internal/layout/
   HeaderRow.tsx`. The `$nodeChange` widening is reverted to `NodeChange` only.
2. **Next components get their own copies**, decoupled from the legacy `@netcracker/qubership-apihub-api-data-model`
   package entirely: `TagsWithDiffs` (replaces `DiffTags`, used by JSON Schema Next) and `BadgeWithDiffs` (replaces
   `DiffBadge`, used by both JSON Schema Next's `TagsWithDiffs` and DDL's `ColumnRowBadgesContent`, which already
   used `DiffBadge` directly for its PK/FK/unique/not-null/generated badges).

This is a real architectural win, not just a rename-for-symmetry exercise: `DiffTagsProps` carried the legacy
`$`-prefixed change-object convention (`$nodeChange`, `$metaChanges`, `$valueChanges`) that review rule 18 explicitly
calls out as the bad `api-state-model` pattern to avoid repeating in next code. The new `TagsWithDiffsProps` takes
plain, already-resolved `ChangedPropertyMetaData | undefined` per flag — no dollar-prefixed props, no alias
resolution, no legacy `NodeChange`/`applyDiffReplaceAlias*`/`inverDiffAction` calls anywhere in the next stack.

### 10.2 New components

| Component | Location | Replaces | Notes |
|---|---|---|---|
| `BadgeWithDiffs` | `shared-components/diffs/BadgeWithDiffs.tsx` | `DiffBadge` for next consumers | Same rendering logic as `DiffBadge` (presentational; already had zero legacy-package coupling — it only ever took `Diff` from `@netcracker/qubership-apihub-api-diff`), duplicated into the next-only location per your explicit instruction so the two stacks never share a file again. Two props were dropped as dead weight (both flagged by you): `$changes` renamed to `diff`, and `isNodeChanged` removed outright — every next caller always passed `isNodeChanged={false}`, so `isNodeOrContentChanged` (= `isNodeChanged \|\| isContentChanged`) collapsed to plain `isContentChanged`. That collapse then exposed a second redundancy: every remaining caller always passed `isContentChanged={!!diff}` (or, for the FK badge, `isContentChanged={true}` with `diff` always truthy on that path) — the two props were never independent. `isContentChanged` is now gone too; `BadgeWithDiffs` derives it internally as `!!diff`, which is provably identical for every caller (`ChangedPropertyMetaData.data` is non-optional, so "has a diff" and "has a truthy `.data`" were always the same fact expressed twice). Net effect: `BadgeWithDiffsProps` shrank from 6 fields to 4, all algebraic simplification, zero behavior change. |
| `TagsWithDiffs` | `shared-components/diffs/TagsWithDiffs.tsx` | `DiffTags` for JSON Schema Next | Renders the same 4 tags (required/read-only/write-only/deprecated) built on `BadgeWithDiffs`. Props are plain `ChangedPropertyMetaData` per flag instead of `$`-prefixed legacy change objects; visibility per tag is `!!value \|\| !!diff` (no `isDefined`/alias-resolution helpers needed — next-data-model diffs don't have the legacy format's aliasing quirks). Follows the same container-reads-precomputed-diffs pattern already used by DDL's `ColumnRowBadgesContent`. |

`json-schema-diff-tags-props.ts` was replaced by `json-schema-tags-with-diffs-props.ts`, which builds
`TagsWithDiffsProps` directly from `JsonSchemaRowDiffs.MetaFlags.take{ReadOnly,WriteOnly,Deprecated}Diff` and
`JsonSchemaRowDiffs.RequiredStar.takeMetaDiff` — no intermediate `Diff`-shaped "raw" record, no cast, no suppression.

### 10.3 A fallback that was tried and reverted — do not repeat

An earlier pass of this change added a `?? node.diffs[NODE_LEVEL_DIFF_KEY]` fallback to `MetaFlags.takeReadOnlyDiff`/
`takeWriteOnlyDiff`/`takeDeprecatedDiff`, reasoning that the with-diffs aggregator does not populate per-flag
`readOnly`/`writeOnly`/`deprecated` diffs for a wholly-added/removed node (it only sets `NODE_LEVEL_DIFF_KEY` in that
case), so a wholly-added property's `readOnly: true` would otherwise render as an undiffed grey badge instead of
green. **This was wrong and has been reverted.** The fallback made all three accessors return the *same* node-level
diff whenever the node was wholly added/removed, regardless of which flags actually changed — so `TagsWithDiffs`'
visibility check (`!!value || !!diff`) would show and diff-highlight **every** tag (read-only, write-only,
deprecated) together any time a property was wholly added or removed, even for flags that were `false`/absent on
that property. A badge must only be highlighted when it has its own diff — never borrowed from a sibling flag's or
the node's diff. `MetaFlags.takeReadOnlyDiff`/`takeWriteOnlyDiff`/`takeDeprecatedDiff` are back to reading only their
own field (`this.takeKindAnyNodeDiffs(node).readOnly` etc., no fallback), matching their pre-this-task behavior.
The remaining cosmetic gap this reopens (a wholly-added property's true flags render as plain, undiffed badges
rather than green ones) is accepted as-is — it is the original, already-reviewed next-data-model behavior, not a
regression introduced by this task.

### 10.4 Files touched

- `common/diffs/DiffTags.tsx` — `$nodeChange` type reverted to `NodeChange` only; doc comment about the JSON Schema
  Next stack removed (no longer true).
- `common/diffs/DiffBadge.tsx` — unchanged (still the legacy component; `BadgeWithDiffs` is a separate file).
- `shared-components/diffs/BadgeWithDiffs.tsx` — new; `$changes` prop renamed to `diff`, `isNodeChanged` prop
  dropped (always `false` at every call site — see §10.3's sibling note above the table).
- `shared-components/diffs/TagsWithDiffs.tsx` — new.
- `JsonSchemaNextViewer/utils/json-schema-diff-tags-props.ts` — deleted, replaced by
  `JsonSchemaNextViewer/utils/json-schema-tags-with-diffs-props.ts`.
- `JsonSchemaNextViewer/SchemaNodeViewer/JsonSchemaTitleSubheader.tsx` — both `JsonSchemaTitleSubheader` (plain) and
  `JsonSchemaTitleSubheaderWithDiffs` now render `TagsWithDiffs` instead of `DiffTags`.
- `DdlTableViewer/ColumnRowBadges/ColumnRowBadgesContent.tsx` — `DiffBadge` → `BadgeWithDiffs`; local `$changes`
  variables renamed to `changes` (dollar-prefix dropped everywhere in the next stack, not just on the prop).
- `next-data-model/src/model/json-schema/tree-with-diffs/property-row-diffs.ts` — `MetaFlags.takeReadOnlyDiff`/
  `takeWriteOnlyDiff`/`takeDeprecatedDiff` tried and reverted a `NODE_LEVEL_DIFF_KEY` fallback; see §10.3.

### 10.5 Verification

`node_modules/.bin/tsc --noEmit` on both packages and the full Jest suite from both packages, same discipline as
§8 — updated totals below (superseding the §8 table for the current state of the repo):

| Package | tsc | Test suites | Tests |
|---|---|---|---|
| `next-data-model` | 0 errors | 33 passed | 548 passed |
| `api-doc-viewer` | 0 errors | 10 passed | 81 passed |

No test file imported `DiffTags`/`DiffBadge`/`json-schema-diff-tags-props` directly, so no test churn was needed;
the full suites above are the same suites from §8, still green. Grepping both packages afterward confirmed
`DiffTags`/`DiffBadge` now have exactly two consumers each outside their own definitions
(`GraphSchemaViewer/internal/layout/HeaderRow/HeaderRow.tsx` and legacy `JsonSchemaViewer/internal/layout/
HeaderRow.tsx` for `DiffTags`; the same two plus `common/AdditionalInfo{Array,Object}Row.tsx`, which are
themselves legacy-only, for `DiffBadge`) — no next-viewer reference to either remains.

No changes to `review-json-schema.md` were needed — none of its stated rules changed; this is an implementation
decision within the existing rules (rule 17's "no diff logic in components" and rule 18's "no `api-state-model`
abuse" are what motivated decoupling from `DiffTags` in the first place, not new rules).
