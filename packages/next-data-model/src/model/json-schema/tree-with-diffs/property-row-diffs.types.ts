import {
  ChangedPropertyMetaData,
  NodeDiffs,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaValidationRowKey } from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { ValueRangeCrawlDiffData } from "@apihub/next-data-model/model/json-schema/value-range-diff-side-display"

/** Synthetic diff slot: resolved title-row background diff for type-label field changes. */
export const JSON_SCHEMA_TITLE_ROW_DIFF_KEY = "titleRow" as const

export const JSON_SCHEMA_TYPE_LABEL_FIELD_DIFF_KEYS = [
  "type",
  "format",
  "title",
] as const

export const JSON_SCHEMA_META_FLAG_DIFF_KEYS = [
  "readOnly",
  "writeOnly",
  "deprecated",
] as const

export type JsonSchemaMetaFlagDiffKey = (typeof JSON_SCHEMA_META_FLAG_DIFF_KEYS)[number]

export type JsonSchemaTypeLabelFieldDiffKey = (typeof JSON_SCHEMA_TYPE_LABEL_FIELD_DIFF_KEYS)[number]

/** Per-field diffs for type subheader parts (`type`, `(format)`, `<title>`). */
export type JsonSchemaTypeLabelFieldDiffs = Partial<
  Record<JsonSchemaTypeLabelFieldDiffKey, ChangedPropertyMetaData>
>

/** Per-index diffs for list-valued fields (`enum`, `examples`); keys match the source diffs record. */
export type JsonSchemaListValueDiffs = Partial<Record<string, ChangedPropertyMetaData>>

export type JsonSchemaSharedRowDiffs = {
  typeLabelFieldDiffs?: JsonSchemaTypeLabelFieldDiffs
  [JSON_SCHEMA_TITLE_ROW_DIFF_KEY]?: ChangedPropertyMetaData
}

/** Diffs bag produced by kind-any aggregation before property-specific keys are added. */
export type JsonSchemaKindAnyNodeDiffs = NodeDiffs<JsonSchemaTreeNodeValue | null> & JsonSchemaSharedRowDiffs & {
  readOnly?: ChangedPropertyMetaData
  writeOnly?: ChangedPropertyMetaData
  deprecated?: ChangedPropertyMetaData
  /**
   * Row background for the "Properties"/"Items" nesting-indicator header row shown above a
   * node's children list. Set when the node itself (or an ancestor container/parent) was
   * wholly added/removed, or when every visible child was uniformly added or uniformly
   * removed - single-side visibility only (green add-only / red remove-only), never yellow.
   */
  nestingIndicatorRowColorizingDiff?: ChangedPropertyMetaData
  /**
   * Validation-constraint row diffs (`Value range`, `Value length`, `Properties count`,
   * `Items count`, `Unique items`, ...). Computed for every node kind - not just
   * property/root - so combiner-variant nodes (`oneOf`/`anyOf`/`allOf`) that carry
   * constraints directly (e.g. `minItems`/`maxItems`/`uniqueItems` on an array variant)
   * get the same row highlighting as a top-level property.
   */
  validationRowDiffs?: Partial<Record<JsonSchemaValidationRowKey, ChangedPropertyMetaData>>
  /** Per-chip diffs for partial validation-row changes; keys are chip indices as strings. */
  validationRowValueDiffs?: Partial<Record<JsonSchemaValidationRowKey, JsonSchemaListValueDiffs>>
  validationRowColorizingDiffs?: Partial<Record<JsonSchemaValidationRowKey, ChangedPropertyMetaData>>
  /** Raw crawl diffs for value-range chip side resolution (includes boolean exclusive flag changes). */
  valueRangeCrawlDiffs?: ValueRangeCrawlDiffData
}

export type JsonSchemaKindPropertyNodeDiffs = JsonSchemaKindAnyNodeDiffs & {
  /** Parent-derived required meta diff (not a property value field). */
  required?: ChangedPropertyMetaData
  default?: ChangedPropertyMetaData
  defaultRowColorizingDiff?: ChangedPropertyMetaData
  /** Whole `enum` field add/remove; mutually exclusive with {@link enumValueDiffs}. */
  enumDiff?: ChangedPropertyMetaData
  /** Per-index diffs under `enum`; keys match the source array diffs record. */
  enumValueDiffs?: JsonSchemaListValueDiffs
  enumRowColorizingDiff?: ChangedPropertyMetaData
  /** Whole `examples` field add/remove; mutually exclusive with {@link examplesValueDiffs}. */
  examplesDiff?: ChangedPropertyMetaData
  /** Per-index diffs under `examples`; keys match the source array diffs record. */
  examplesValueDiffs?: JsonSchemaListValueDiffs
  examplesRowColorizingDiff?: ChangedPropertyMetaData
}
