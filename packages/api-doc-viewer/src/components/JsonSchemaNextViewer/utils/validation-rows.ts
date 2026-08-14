import {
  JsonSchemaTreeNodeValueTypeArray,
  JsonSchemaTreeNodeValueTypeNumber,
  JsonSchemaTreeNodeValueTypeObject,
  JsonSchemaTreeNodeValueTypeString,
  JsonSchemaTreeNodeValue,
} from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { resolveBoundRangeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/bound-range"
import { resolveValueRangeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/value-range"
import {
  ITEMS_COUNT_LABEL,
  PROPERTIES_COUNT_LABEL,
  UNIQUE_ITEMS_LABEL,
  VALUE_LENGTH_LABEL,
  VALUE_MULTIPLE_OF_LABEL,
  VALUE_PATTERN_LABEL,
  VALUE_RANGE_LABEL,
} from "../../../consts/validations"
import {
  JsonSchemaValidationRowKey,
  JsonSchemaValidationRowKeys,
} from "./validation-row-keys"

export type JsonSchemaValidationRow = {
  key: JsonSchemaValidationRowKey
  label: string
  value: string
}

function formatBoundRangeLabel(
  min: number | undefined,
  max: number | undefined,
  exclusiveMin?: number | boolean,
  exclusiveMax?: number | boolean,
): string | undefined {
  const range = resolveBoundRangeLabel({ min, max, exclusiveMin, exclusiveMax })
  if (!range.visible) {
    return undefined
  }
  return [range.data.lower, range.data.upper].filter(Boolean).join(", ")
}

function formatValueRangeLabel(value: JsonSchemaTreeNodeValueTypeNumber): string | undefined {
  const range = resolveValueRangeLabel(value)
  if (!range.visible) {
    return undefined
  }
  return [range.data.lower, range.data.upper].filter(Boolean).join(", ")
}

function formatScalar(value: unknown): string {
  if (typeof value === "string") {
    return value
  }
  return JSON.stringify(value)
}

export function resolveValidationRows(value: JsonSchemaTreeNodeValue | null | undefined): JsonSchemaValidationRow[] {
  if (!value) {
    return []
  }

  const rows: JsonSchemaValidationRow[] = []
  const stringValue = value as JsonSchemaTreeNodeValueTypeString
  const numberValue = value as JsonSchemaTreeNodeValueTypeNumber
  const objectValue = value as JsonSchemaTreeNodeValueTypeObject
  const arrayValue = value as JsonSchemaTreeNodeValueTypeArray

  const valueLength = formatBoundRangeLabel(stringValue.minLength, stringValue.maxLength)
  if (valueLength) {
    rows.push({ key: JsonSchemaValidationRowKeys.VALUE_LENGTH, label: VALUE_LENGTH_LABEL, value: valueLength })
  }

  if (stringValue.pattern !== undefined) {
    rows.push({ key: JsonSchemaValidationRowKeys.VALUE_PATTERN, label: VALUE_PATTERN_LABEL, value: String(stringValue.pattern) })
  }

  const propertiesCount = formatBoundRangeLabel(objectValue.minProperties, objectValue.maxProperties)
  if (propertiesCount) {
    rows.push({ key: JsonSchemaValidationRowKeys.PROPERTIES_COUNT, label: PROPERTIES_COUNT_LABEL, value: propertiesCount })
  }

  if (arrayValue.uniqueItems !== undefined) {
    rows.push({
      key: JsonSchemaValidationRowKeys.UNIQUE_ITEMS,
      label: UNIQUE_ITEMS_LABEL,
      value: String(arrayValue.uniqueItems),
    })
  }

  const itemsCount = formatBoundRangeLabel(arrayValue.minItems, arrayValue.maxItems)
  if (itemsCount) {
    rows.push({ key: JsonSchemaValidationRowKeys.ITEMS_COUNT, label: ITEMS_COUNT_LABEL, value: itemsCount })
  }

  if (numberValue.multipleOf !== undefined) {
    rows.push({
      key: JsonSchemaValidationRowKeys.VALUE_MULTIPLE_OF,
      label: VALUE_MULTIPLE_OF_LABEL,
      value: String(numberValue.multipleOf),
    })
  }

  const valueRange = formatValueRangeLabel(numberValue)
  if (valueRange) {
    rows.push({ key: JsonSchemaValidationRowKeys.VALUE_RANGE, label: VALUE_RANGE_LABEL, value: valueRange })
  }

  return rows
}

export function resolveListValidationValue(values: unknown[]): string {
  return values.map(formatScalar).join(", ")
}
