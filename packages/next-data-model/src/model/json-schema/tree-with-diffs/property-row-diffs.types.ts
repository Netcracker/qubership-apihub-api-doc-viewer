import {
  ChangedPropertyMetaData,
  NodeDiffs,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaValidationRowKey } from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { ValueRangeCrawlDiffData } from "@apihub/next-data-model/model/json-schema/value-range-diff-side-display"

/** Per-index diffs for list-valued fields (`enum`, `examples`); keys match the source diffs record. */
export type JsonSchemaListValueDiffs = Partial<Record<string, ChangedPropertyMetaData>>

export type JsonSchemaPropertyRowDiffs = NodeDiffs<JsonSchemaTreeNodeValue | null> & {
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
  validationRowDiffs?: Partial<Record<JsonSchemaValidationRowKey, ChangedPropertyMetaData>>
  /** Per-chip diffs for partial validation-row changes; keys are chip indices as strings. */
  validationRowValueDiffs?: Partial<Record<JsonSchemaValidationRowKey, JsonSchemaListValueDiffs>>
  validationRowColorizingDiffs?: Partial<Record<JsonSchemaValidationRowKey, ChangedPropertyMetaData>>
  /** Raw crawl diffs for value-range chip side resolution (includes boolean exclusive flag changes). */
  valueRangeCrawlDiffs?: ValueRangeCrawlDiffData
}
