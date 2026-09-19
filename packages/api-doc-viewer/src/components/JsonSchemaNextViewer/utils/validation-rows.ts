import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { resolveBoundRangeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/bound-range"
import { resolveValueRangeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/value-range"
import {
  JsonSchemaValidationFieldsView,
  resolveJsonSchemaValidationFieldsView,
} from "@netcracker/qubership-apihub-next-data-model/model/json-schema/validation-keys"
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

function formatValueRangeChips(fields: JsonSchemaValidationFieldsView): string[] {
  const range = resolveValueRangeLabel(fields)
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
  const fields = resolveJsonSchemaValidationFieldsView(value)

  const valueLength = formatBoundRangeChips(fields.minLength, fields.maxLength)
  if (valueLength.length) {
    rows.push({ key: JsonSchemaValidationRowKeys.VALUE_LENGTH, label: VALUE_LENGTH_LABEL, values: valueLength })
  }

  if (fields.pattern !== undefined) {
    rows.push({
      key: JsonSchemaValidationRowKeys.VALUE_PATTERN,
      label: VALUE_PATTERN_LABEL,
      values: [String(fields.pattern)],
    })
  }

  const valueRange = formatValueRangeChips(fields)
  if (valueRange.length) {
    rows.push({ key: JsonSchemaValidationRowKeys.VALUE_RANGE, label: VALUE_RANGE_LABEL, values: valueRange })
  }

  if (fields.multipleOf !== undefined) {
    rows.push({
      key: JsonSchemaValidationRowKeys.VALUE_MULTIPLE_OF,
      label: VALUE_MULTIPLE_OF_LABEL,
      values: [String(fields.multipleOf)],
    })
  }

  const propertiesCount = formatBoundRangeChips(fields.minProperties, fields.maxProperties)
  if (propertiesCount.length) {
    rows.push({
      key: JsonSchemaValidationRowKeys.PROPERTIES_COUNT,
      label: PROPERTIES_COUNT_LABEL,
      values: propertiesCount,
    })
  }

  if (fields.uniqueItems !== undefined) {
    rows.push({
      key: JsonSchemaValidationRowKeys.UNIQUE_ITEMS,
      label: UNIQUE_ITEMS_LABEL,
      values: [String(fields.uniqueItems)],
    })
  }

  const itemsCount = formatBoundRangeChips(fields.minItems, fields.maxItems)
  if (itemsCount.length) {
    rows.push({ key: JsonSchemaValidationRowKeys.ITEMS_COUNT, label: ITEMS_COUNT_LABEL, values: itemsCount })
  }

  return rows
}

export function resolveListValidationValues(values: unknown[]): string[] {
  return values.map(formatScalar)
}
