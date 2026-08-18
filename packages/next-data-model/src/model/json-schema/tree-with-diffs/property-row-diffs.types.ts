import {
  ChangedPropertyMetaData,
  NodeDiffs,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaValidationRowKey } from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"

/** Per-literal diffs for list-valued fields (`enum`, `examples`); keys are display strings. */
export type JsonSchemaListValueDiffs = Partial<Record<string, ChangedPropertyMetaData>>

export type JsonSchemaPropertyRowDiffs = NodeDiffs<JsonSchemaTreeNodeValue | null> & {
  default?: ChangedPropertyMetaData
  defaultRowColorizingDiff?: ChangedPropertyMetaData
  enumValueDiffs?: JsonSchemaListValueDiffs
  enumRowColorizingDiff?: ChangedPropertyMetaData
  examplesValueDiffs?: JsonSchemaListValueDiffs
  examplesRowColorizingDiff?: ChangedPropertyMetaData
  validationRowDiffs?: Partial<Record<JsonSchemaValidationRowKey, ChangedPropertyMetaData>>
  validationRowColorizingDiffs?: Partial<Record<JsonSchemaValidationRowKey, ChangedPropertyMetaData>>
}
