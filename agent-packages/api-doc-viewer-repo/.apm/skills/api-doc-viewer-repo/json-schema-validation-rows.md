# JSON Schema validation rows — agent reference

Reference for AI assistants working on **validation constraint rows** in the JSON Schema Next stack
(`JsonSchemaNextViewer` / `JsonSchemaNextDiffsViewer` + `JsonSchemaTreeWithDiffsBuilder`).

Grouped by **plain (without diffs)** vs **with-diffs**, then by validation row kind.

**Primary code paths**

| Layer | Role | Path |
| --- | --- | --- |
| Plain chip text | `resolveValidationRows`, `resolveBoundRangeLabel`, `resolveValueRangeLabel` | `api-doc-viewer/.../utils/validation-rows.ts`, `next-data-model/.../bound-range.ts`, `value-range.ts` |
| Row ↔ source keys | `JSON_SCHEMA_VALIDATION_ROW_SOURCE_KEYS` | `next-data-model/.../validation-row-source-keys.ts` |
| Diff aggregation | `aggregateValidationRowDiffs` | `next-data-model/.../node-diffs/kind-property.ts` |
| Value-range dialect / partial logic | `isValueRangePartialBoundChange`, side entries | `next-data-model/.../value-range-diff-side-display.ts` |
| Side-entry resolution | `resolveJsonSchemaValidationRowSideEntries` | `next-data-model/.../property-row-diffs.ts` |
| Viewer | `AdditionalInfoRow` + `AdditionalInfoPiece` chips | `SchemaNodePlainContent.tsx` |

**Regression**

| Mode | Suites |
| --- | --- |
| Plain | `packages/samples/json-schema/` + `src/stories/json-schema-next/` |
| With diffs | `packages/samples/json-schema-diffs/type-changes/` (YAML + programmatic value-range) |

---

## Session constraints and recommendations (value-range work)

These rules came from the value-range diff session and apply to all validation-row work:

| Constraint | Rationale |
| --- | --- |
| **Do not edit `JsonSchemaViewer/`** | Legacy viewer; Next stack must mirror its behaviour via data-layer logic, not by patching legacy React. |
| **View / data split** | Chip labels, side entries, row/chip diff metadata, and colorizing live in **next-data-model** aggregators and resolvers. Viewer reads precomputed `validationRow*` fields only. |
| **Fix aggregators first** | If row background or chip highlight is wrong, change `kind-property.ts` or `value-range-diff-side-display.ts` — not `AdditionalInfoRow` branching. |
| **Dialect-aware value range** | OAS 3.0 (boolean `exclusiveMinimum` / `exclusiveMaximum`) and OAS 3.1 (numeric exclusive bounds) use different partial-bound rules. Never assume one dialect when writing tests or cases. |
| **Programmatic value-range samples** | Case definitions in committed `value-range-diff-case-definitions.ts` — **not** YAML fixtures, **not** `.generated.ts` (gitignored; compatibility-suites only). |
| **Separate OAS 3.1 story builder** | OAS 3.1 cases convert boolean exclusive flags to numeric bounds (`convertValueRangeSchemaToOas31`). Do not reuse OAS 3.0 schema shape in OAS 3.1 stories. |
| **Legacy parity target** | Value-range chip operators (`>=`, `<=`, `>`, `<`) and add/remove/replace/partial styling must match legacy bitwise chip logic from `useValueRangeValidation`. |

---

## Validation row kinds (catalogue)

All rows render as `AdditionalInfoRow` with label + chip list (`AdditionalInfoPiece`), except where noted.

| Row key | Label (approx.) | Schema fields | Chip shape |
| --- | --- | --- | --- |
| `valueLength` | Value length | `minLength`, `maxLength` | 0–2 bound chips (`>= n`, `<= n`) |
| `valuePattern` | Value pattern | `pattern` | Single regex string |
| `valueRange` | Value range | `minimum`, `maximum`, `exclusiveMinimum`, `exclusiveMaximum` | 0–2 bound chips (`>=`, `<=`, `>`, `<`) |
| `valueMultipleOf` | Multiple of | `multipleOf` | Single number |
| `propertiesCount` | Properties count | `minProperties`, `maxProperties` | 0–2 bound chips |
| `itemsCount` | Items count | `minItems`, `maxItems` | 0–2 bound chips |
| `uniqueItems` | Unique items | `uniqueItems` | Single boolean string |

Plain visibility: `showValidationsSection` + non-empty `resolveValidationRows(value)` (see
`json-schema-display-coverage.md`). Enum constraints use the **Allowed values** row, not a validation row.

---

## Without diffs (plain mode)

Plain mode has **no** `validationRowDiffs`, `validationRowValueDiffs`, or `validationRowColorizingDiffs`.
The viewer calls `resolveValidationRows(node.value())` and renders static chips.

### Value range

- **Source:** `resolveValueRangeLabel(numberValue)` → `resolveBoundRangeLabel` with dialect from merged
  node fields.
- **Chips:** lower and/or upper bound text, e.g. `>= 1`, `<= 10`, `> 1`, `< 10`.
- **OAS 3.0:** `{ minimum: 1, exclusiveMaximum: true }` → `>= 1` and `< 10` (boolean exclusive paired
  with bound).
- **OAS 3.1:** `{ minimum: 1, exclusiveMaximum: 10 }` → numeric exclusive bound stands alone.
- **Hidden when:** no visible lower or upper chip after bound-range resolution.

### Value length

- **Source:** `formatBoundRangeChips(minLength, maxLength)` — same bound-range formatter as object/array
  counts, without exclusive flags.
- **Chips:** `>= minLength`, `<= maxLength` (inclusive only).
- **Hidden when:** neither `minLength` nor `maxLength` set.

### Value pattern

- **Source:** `stringValue.pattern` as a single string chip.
- **Hidden when:** `pattern` undefined.

### Value multiple of

- **Source:** `numberValue.multipleOf` stringified.
- **Hidden when:** `multipleOf` undefined.

### Properties count

- **Source:** `formatBoundRangeChips(minProperties, maxProperties)`.
- **Chips:** `>= n`, `<= n`.
- **Hidden when:** neither bound set.

### Items count

- **Source:** `formatBoundRangeChips(minItems, maxItems)`.
- **Chips:** `>= n`, `<= n`.
- **Hidden when:** neither bound set.

### Unique items

- **Source:** `String(uniqueItems)`.
- **Hidden when:** `uniqueItems` undefined.

---

## With diffs (diff mode)

Diff mode adds three optional fields on `JsonSchemaPropertyRowDiffs` per validation row key:

| Field | Purpose |
| --- | --- |
| `validationRowDiffs[rowKey]` | Whole-row semantic diff (`add` / `remove`) — row appears or disappears |
| `validationRowValueDiffs[rowKey]` | Per-chip or per-source-key diffs (chip index `"0"`/`"1"` or field name) |
| `validationRowColorizingDiffs[rowKey]` | Row background: **green** add, **red** remove, **yellow** replace |

Viewer wiring (`SchemaNodePlainContent`):

- `AdditionalInfoRow.diff` ← `validationRowDiffs`
- `AdditionalInfoRow.colorizingDiff` ← `validationRowColorizingDiffs`
- Each chip `AdditionalInfoPiece.diff` ← entry from `validationRowValueDiffs` via `valueDiffKey`

Side text for origin/changed columns: `resolveJsonSchemaValidationRowSideEntries(rowKey, mergedChips, …)`.

**General aggregation rules** (`aggregateValidationRowDiffs`):

1. All contributing source keys are **add** → whole row **add** (green).
2. All contributing source keys are **remove** → whole row **remove** (red).
3. Mixed semantic changes on bound-range rows → **replace** row (yellow) + per-field/chip value diffs.
4. **Value range only:** dedicated branches for whole-row bound appearance/disappearance and
   dialect-aware **partial** bound changes (see below).

---

### Value range (with diffs)

Most complex validation row. Dedicated module: `value-range-diff-side-display.ts`.

#### Row colorizing vs chip `borderShadowColor`

Two independent layers:

| Layer | Field | Viewer effect |
| --- | --- | --- |
| **Row** | `validationRowColorizingDiffs` | `AdditionalInfoRow` background (green / red / yellow) |
| **Chip** | `validationRowValueDiffs["0"]` / `["1"]` | `AdditionalInfoPiece.borderShadowColor` on the changed bound chip |

Do not infer chip styling from row styling — both may apply on the same case.

#### Whole-row add / remove (green / red row)

When the bound range **appears** or **disappears** entirely (`classifyValueRangeWholeRowAction`):

- `validationRowDiffs` + `validationRowColorizingDiffs` → `add` or `remove`
- `validationRowValueDiffs` → **undefined** (no per-chip map)
- Examples: first `minimum` added; both bounds removed; OAS 3.1-only cases 054–057.

#### Partial bound change (yellow row + chip add/remove)

When exactly **one** chip is added or removed while the row **stays visible**
(`isValueRangePartialBoundChange` → `isValueRangePartialSingleChipChange`):

- Row → yellow (`replace` colorizing via `applyValueRangeFormattingRowColorizingDiff`)
- Changed chip → green/red `borderShadowColor` via `mergeValueRangeLabelChipDiffs`
- No whole-row `validationRowDiffs` (`add` / `remove` on the row is **wrong** for these cases)

Same rule for **OAS 3.0 and OAS 3.1** — inclusive (`>=` / `<=`) and exclusive (`>` / `<`) chips alike.

**Examples:** cases 038–053 in both story suites, including exclusive extensions 039, 041, 043, 045,
048–052. Whole-row green/red must **not** be used when the value-range row was already visible and only
one bound chip changed.

#### Exclusive-flag / bound replace (yellow row + chip replace)

When a chip text changes but the row stays visible with both slots (e.g. `>= 1` → `> 1`):

- `validationRowColorizingDiffs` → `replace` (yellow)
- `validationRowValueDiffs["0"]` or `["1"]` → chip-level diff metadata
- No whole-row `validationRowDiffs`

Examples: cases 005–006, 011–012, 021–030 (exclusive toggles and bound replacements).

#### Chip diff keys

| Key | Slot |
| --- | --- |
| `"0"` | Lower bound chip |
| `"1"` | Upper bound chip |

Built by `buildValueRangeChipStringDiffs`; paths attached in `mergeValueRangeLabelChipDiffs`.

#### Side entries

`resolveValueRangeDiffSideEntries` drives origin/changed column chip lists. Pass
`valueRangeCrawlDiffs` from node diffs when resolving in the viewer (value-range row only).

#### Sample suites

| Suite | Cases | Wrapper |
| --- | --- | --- |
| OAS 3.0 value range | 53 programmatic | `prepareJsonDiffSchema` |
| OAS 3.1 value range | 57 (+4 numeric-exclusive-only) | `prepareJsonDiffSchemaOas31` |

Hub: `packages/samples/json-schema-diffs/type-changes/number-validation/README.md`.

---

### Value length (with diffs)

Bound-range row without exclusive flags. Source keys: `minLength`, `maxLength`.

| Change pattern | Row colorizing | Value diffs |
| --- | --- | --- |
| Both bounds added (row appeared) | Green `add` | — |
| Both bounds removed (row gone) | Red `remove` | — |
| Single bound added alongside existing | Yellow `replace` | Chip keyed by source key (`minLength` / `maxLength`) |
| Single bound removed, one remains | Yellow `replace` | Chip keyed by removed bound |
| One bound value replaced | Yellow `replace` | `validationRowValueDiffs.minLength` or `.maxLength` |

Chip display text: `formatJsonSchemaValidationRowChipDisplay(VALUE_LENGTH, sourceKey, rawValue)` →
`>= n` / `<= n`.

Side entries: per-field diff keys map to origin/changed chip text (see unit test fixture
`003-min-length-replaced`, `006-max-length-replaced`).

**Samples:** `packages/samples/json-schema-diffs/type-changes/string-validation/value-length/` (16 YAML
cases); stories `string-validation-value-length-samples.stories.tsx`.

---

### Value pattern (with diffs)

Single-value row. Source key: `pattern`.

| Change pattern | Row colorizing | Value diffs |
| --- | --- | --- |
| Pattern added | Green `add` | — |
| Pattern removed | Red `remove` | — |
| Pattern replaced | Yellow `replace` | `validationRowValueDiffs.pattern` (chip index `0`) |

**Samples:** `string-validation/pattern/` YAML suite.

---

### Value multiple of (with diffs)

Single-value row. Source key: `multipleOf`.

| Change pattern | Row colorizing | Value diffs |
| --- | --- | --- |
| Added / removed / replaced | Same whole-row / replace pattern as value pattern | `multipleOf` at chip index `0` |

**Samples:** covered under number-validation YAML groups in type-changes suite.

---

### Properties count (with diffs)

Bound-range row for objects. Source keys: `minProperties`, `maxProperties`.

Same aggregation pattern as **value length**: whole-row add/remove when both bounds appear/disappear;
yellow replace + per-source-key value diffs when one bound changes.

Chip text: `>= n` / `<= n` via `formatJsonSchemaValidationRowChipDisplay(PROPERTIES_COUNT, …)`.

---

### Items count (with diffs)

Bound-range row for arrays. Source keys: `minItems`, `maxItems`.

Same aggregation pattern as **value length** and **properties count**.

---

### Unique items (with diffs)

Single-value row. Source key: `uniqueItems`.

Same aggregation pattern as **value pattern** / **value multiple of**.

---

## Row ordering (canonical type-grouped order) — session lesson

Rows are not rendered in `resolveValidationRows` push order alone. `SchemaNodePlainContent`
appends **diff-only rows** (a row whose source keys have no *current* value — the owning type
was fully removed, or not yet added — but still carries semantic diffs per
`hasJsonSchemaValidationRowSemanticDiffs`) **after** the base rows, then sorts the combined list
through `sortValidationRowsByType` (`JsonSchemaNextViewer/utils/sort-validation-rows-by-type.ts`)
before rendering.

**Why a sort, not just careful push order:** concatenating `[...baseRows, ...diffOnlyRows]`
without a final sort is order-**unstable** — which group ends up first flips depending on
whether the changed type is gaining or losing rows. Example: `string → number` puts String rows
in `baseRows` (present) and Number rows in `diffOnlyRows` (diff-only), landing String-then-Number;
the reverse case `number → string` puts Number in `baseRows` and String in `diffOnlyRows`, which
without a final sort would land Number-then-String — same type pair, opposite group order. The
canonical order must be re-imposed after combining, not preserved by the order rows happen to be
pushed in.

**Canonical order** (`VALIDATION_ROW_ORDER` in that file), mirrors legacy `Validations.tsx`:

1. `valueLength`, `valuePattern` — **String**
2. `valueRange`, `valueMultipleOf` — **Number** (covers `integer` too — legacy has no separate
   Integer group; do not invent one)
3. `propertiesCount` — **Object**
4. `uniqueItems`, `itemsCount` — **Array**

The shared/common rows (`default`, `enum`/"Allowed values", `examples`) are **not** validation
rows and are not part of this sort — they render as separate `AdditionalInfoRow`s before the
validation-rows block, unconditionally ordered by JSX position in `SchemaNodePlainContent`.

The sort function lives in a standalone **CSS-free** `.ts` file specifically so it can be unit
tested directly — see **Testability trap** below.

## Boolean-valued replace diffs use `borderShadowColor` — session lesson

Every REPLACE diff on a validation-row chip, `default`, or an enum/examples list item used to get
`textHighlighterColor: Yellow` unconditionally. When the value being replaced is a JS boolean
(`uniqueItems: true → false`, a boolean `default`, a boolean enum/examples literal), the correct
chrome is `borderShadowColor: Yellow` instead — DDL already had this rule for column defaults
(`columnType.kind === TypeKind.BoolType`, see `next-data-model-authoring` skill).

**Do not port the check as-is.** DDL checks the **node's declared type**
(`columnType.kind === TypeKind.BoolType`) because a DDL column's default value type always
matches its column type. JSON Schema has a keyword that breaks that assumption: `uniqueItems` is
a validation-row chip whose value is **always** a JS boolean, but it lives on an **`array`**-typed
node (`node.type` is `"array"`, never `"boolean"`) — a node-type check silently never highlights
it. The fix checks `typeof diff.beforeValue / diff.afterValue === "boolean"` on the **diff's own
value**, per side, independently — `buildBooleanAwareChipReplaceDiffMetadata` in `kind-any.ts`,
used by `buildListValueDiffMetadata` (validation-row chips, enum/examples items) and
`buildDefaultValueDiffMetadata` (`kind-property.ts`). Per-side independence also matters: if
`default` changes `true → "foo"` alongside `type: boolean → string`, only the boolean side (the
`before` side here) gets `borderShadowColor` — the other side keeps `textHighlighterColor`.

When adding a new chip-shaped value diff in this stack, reuse
`buildBooleanAwareChipReplaceDiffMetadata` rather than re-deriving the boolean check from a
node's `type` field.

## Partial vs whole row add/remove — generic guard (session lesson)

`aggregateValidationRowDiffs` (private, `kind-any.ts`) used to treat "every diff on this row's
active source keys is `add`" as sufficient for a whole-row green add (symmetrically for remove).
That is wrong whenever the row has **other source keys with unchanged, pre-existing content** —
e.g. `maxItems` newly added while `minItems` already existed and is untouched: the row already
existed, so this must be a **yellow partial replace** (with only the `maxItems` chip highlighted
via add/remove `borderShadowColor`), not a whole-row green add.

Fix: `rowHasOtherUnchangedContent` — `sourceKeys.some(sourceKey => !activeSourceKeys.includes(sourceKey)
&& Reflect.get(crawlValue, sourceKey) !== undefined)` — gates `allAdd`/`allRemove` before the
whole-row branch runs. This is deliberately **generic across every bound-range row**
(`itemsCount`, `propertiesCount`, `valueLength`, …), not special-cased per row key — a row key
listed as one of your reported examples is a symptom, not the fix's scope.

**Separately:** rows on non-`PROPERTY`/`ROOT` nodes (`additionalProperties`, `items`, combiner
variants, …) used to show as unchanged on both sides with no diff highlighting at all, even when
the underlying field genuinely appeared/disappeared. Root cause was **not** in row aggregation —
`JsonSchemaNodeDiffsAggregatorFactory` dispatched a plain `KindAny` aggregator (validation rows
only) to every kind except `PROPERTY`/`ROOT`, which alone got `KindProperty` (adds
default/enum/examples/required aggregation). `KindProperty extends KindAny` and calls
`super.aggregate()` first, so it is a **strict superset** — nothing in it is actually
PROPERTY/ROOT-specific (default/enum/examples read a node's own crawl fields generically;
`required` resolution safely no-ops when a node isn't a named property of a parent object). Fix:
the factory now always returns the `KindProperty` instance for every kind. When adding a new kind
to this stack, do not assume a "lesser" aggregator is needed for kinds that aren't PROPERTY/ROOT —
verify the specialised aggregator's logic is actually kind-gated before forking dispatch.

## Testability trap: CSS imports break Jest unit tests (session lesson)

`SchemaNodePlainContent.tsx` transitively imports `.css` (via `AdditionalInfoRow` →
`DiffFloatingBadgeWrapper` → `UxDiffFloatingBadge` → `UxDiffFloatingBadge.css`). Jest's default
transform does not parse CSS, so importing **any** symbol from that file in a unit test — even a
pure, non-React helper defined at the top of the file — fails with
`SyntaxError: Unexpected token '.'` pointing at the `.css` file, not the actual import.

When logic in a viewer `.tsx` component needs a direct unit test (not a screenshot IT), extract it
to a sibling **CSS-free** `.ts` file under `utils/` first (e.g.
`JsonSchemaNextViewer/utils/sort-validation-rows-by-type.ts`), import it back into the component,
and write the test against the utils file. Do not try to work around the Jest failure with mocks
or moduleNameMapper for CSS — extraction is simpler and keeps the logic reusable/testable
independent of the component tree.

## Troubleshooting checklist

| Symptom | Likely layer | Check |
| --- | --- | --- |
| Wrong chip operator (`>` vs `>=`) | Data | `bound-range.ts`, dialect in `json-schema-bound-range-dialect.ts` |
| OAS 3.0 case shows whole-row add but should be partial (or vice versa) | Data | `isValueRangePartialBoundChange` + dialect inference |
| Row yellow but chip not highlighted | Data | `validationRowValueDiffs` chip keys `"0"`/`"1"` or source keys |
| Row missing in diff view but field changed | Data | `hasJsonSchemaValidationRowSemanticDiffs`; diff-only row injection in viewer |
| Plain chips wrong | Viewer util | `resolveValidationRows` only — no diff fields involved |
| Side column shows wrong before/after text | Data | `resolveJsonSchemaValidationRowSideEntries` + crawl diffs for value range |
| Row group order flips depending on add- vs remove-direction of a type change | Viewer | `sortValidationRowsByType` must run on the **combined** `[...baseRows, ...diffOnlyRows]` list, not rely on push order |
| Boolean value (e.g. `uniqueItems`) replace shows yellow text fill instead of border | Data | `buildBooleanAwareChipReplaceDiffMetadata` — check must be `typeof diff.value === "boolean"`, not `node.type` |
| Row wholly green/red when only one bound of an existing row changed | Data | `rowHasOtherUnchangedContent` guard in `aggregateValidationRowDiffs` |
| `additionalProperties` / `items` / combiner-variant rows show no diff at all | Data | `JsonSchemaNodeDiffsAggregatorFactory` must dispatch `KindProperty` (superset of `KindAny`) for every kind, not just PROPERTY/ROOT |
| Unit test importing from a viewer `.tsx` fails with `SyntaxError: Unexpected token '.'` in a `.css` file | Test | Extract the pure logic to a CSS-free `utils/*.ts` file and import the test from there |

---

## Related documents

- Plain display baseline: `packages/api-doc-viewer/json-schema-display-coverage.md`
- Stack / phases: `packages/api-doc-viewer/json-schema-next-stack-analysis.md`
- Value-range sample hub: `packages/samples/json-schema-diffs/type-changes/number-validation/README.md`
- Type-changes catalogue: `packages/samples/json-schema-diffs/type-changes/README.md`
- Unit tests: `packages/next-data-model/tests/unit-tests/json-schema-with-diffs.test.ts`,
  `json-schema-value-range-scan.test.ts`
