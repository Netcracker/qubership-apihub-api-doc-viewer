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
  values: string[]
}

function formatBoundRangeChips(
  min: number | undefined,
  max: number | undefined,
  exclusiveMin?: number | boolean,
  exclusiveMax?: number | boolean,
): string[] {
  const range = resolveBoundRangeLabel({ min, max, exclusiveMin, exclusiveMax })
  if (!range.visible) {
    return []
  }
  return [range.data.lower, range.data.upper].filter((chip): chip is string => Boolean(chip))
}

function formatValueRangeChips(value: JsonSchemaTreeNodeValueTypeNumber): string[] {
  const range = resolveValueRangeLabel(value)
  if (!range.visible) {
    return []
  }
  return [range.data.lower, range.data.upper].filter((chip): chip is string => Boolean(chip))
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

  const valueLength = formatBoundRangeChips(stringValue.minLength, stringValue.maxLength)
  if (valueLength.length) {
    rows.push({ key: JsonSchemaValidationRowKeys.VALUE_LENGTH, label: VALUE_LENGTH_LABEL, values: valueLength })
  }

  if (stringValue.pattern !== undefined) {
    rows.push({
      key: JsonSchemaValidationRowKeys.VALUE_PATTERN,
      label: VALUE_PATTERN_LABEL,
      values: [String(stringValue.pattern)],
    })
  }

  const propertiesCount = formatBoundRangeChips(objectValue.minProperties, objectValue.maxProperties)
  if (propertiesCount.length) {
    rows.push({
      key: JsonSchemaValidationRowKeys.PROPERTIES_COUNT,
      label: PROPERTIES_COUNT_LABEL,
      values: propertiesCount,
    })
  }

  if (arrayValue.uniqueItems !== undefined) {
    rows.push({
      key: JsonSchemaValidationRowKeys.UNIQUE_ITEMS,
      label: UNIQUE_ITEMS_LABEL,
      values: [String(arrayValue.uniqueItems)],
    })
  }

  const itemsCount = formatBoundRangeChips(arrayValue.minItems, arrayValue.maxItems)
  if (itemsCount.length) {
    rows.push({ key: JsonSchemaValidationRowKeys.ITEMS_COUNT, label: ITEMS_COUNT_LABEL, values: itemsCount })
  }

  if (numberValue.multipleOf !== undefined) {
    rows.push({
      key: JsonSchemaValidationRowKeys.VALUE_MULTIPLE_OF,
      label: VALUE_MULTIPLE_OF_LABEL,
      values: [String(numberValue.multipleOf)],
    })
  }

  const valueRange = formatValueRangeChips(numberValue)
  if (valueRange.length) {
    rows.push({ key: JsonSchemaValidationRowKeys.VALUE_RANGE, label: VALUE_RANGE_LABEL, values: valueRange })
  }

  return rows
}

export function resolveListValidationValues(values: unknown[]): string[] {
  return values.map(formatScalar)
}
