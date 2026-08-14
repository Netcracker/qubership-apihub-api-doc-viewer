import { JsonSchemaTreeNodeValueTypeNumber } from "@apihub/next-data-model/model/json-schema/types/node-value"
import {
  JsonSchemaBoundRangeLabel,
  JsonSchemaBoundRangeResult,
  resolveBoundRangeLabel,
} from "@apihub/next-data-model/model/json-schema/bound-range"

export type JsonSchemaValueRangeLabel = JsonSchemaBoundRangeLabel

export type JsonSchemaValueRangeResult = JsonSchemaBoundRangeResult

export function resolveValueRangeLabel(value: JsonSchemaTreeNodeValueTypeNumber | null | undefined): JsonSchemaValueRangeResult {
  if (!value) {
    return {
      data: {},
      visible: false,
    }
  }

  return resolveBoundRangeLabel({
    min: value.minimum,
    max: value.maximum,
    exclusiveMin: value.exclusiveMinimum,
    exclusiveMax: value.exclusiveMaximum,
  })
}
