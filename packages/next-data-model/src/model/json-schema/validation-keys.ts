import {
  JsonSchemaTreeNodeStoredValue,
  JsonSchemaTreeNodeValueTypeArray,
  JsonSchemaTreeNodeValueTypeNumber,
  JsonSchemaTreeNodeValueTypeObject,
  JsonSchemaTreeNodeValueTypeString
} from "@apihub/next-data-model/model/json-schema/types/node-value"
import {
  JsonSchemaValidationKey,
  JsonSchemaValidationKeys,
} from "@apihub/next-data-model/model/json-schema/types/validation-key"
import { asJsonSchemaTypedNodeValue } from "@apihub/next-data-model/shared/json-schema/guards/schema-value"

function isDefined(value: unknown): value is NonNullable<unknown> {
  return value !== undefined && value !== null
}

export function resolveValidationKeysForType(
  value: JsonSchemaTreeNodeStoredValue | null | undefined,
): JsonSchemaValidationKey[] {
  const typedValue = asJsonSchemaTypedNodeValue(value)
  if (!typedValue) {
    return []
  }

  const keys: JsonSchemaValidationKey[] = []

  const stringValue = typedValue as JsonSchemaTreeNodeValueTypeString
  if (stringValue.minLength !== undefined) {
    keys.push(JsonSchemaValidationKeys.MIN_LENGTH)
  }
  if (stringValue.maxLength !== undefined) {
    keys.push(JsonSchemaValidationKeys.MAX_LENGTH)
  }
  if (stringValue.pattern !== undefined) {
    keys.push(JsonSchemaValidationKeys.PATTERN)
  }

  const numberValue = typedValue as JsonSchemaTreeNodeValueTypeNumber
  if (numberValue.minimum !== undefined) {
    keys.push(JsonSchemaValidationKeys.MINIMUM)
  }
  if (numberValue.maximum !== undefined) {
    keys.push(JsonSchemaValidationKeys.MAXIMUM)
  }
  if (isDefined(numberValue.exclusiveMinimum)) {
    keys.push(JsonSchemaValidationKeys.EXCLUSIVE_MINIMUM)
  }
  if (isDefined(numberValue.exclusiveMaximum)) {
    keys.push(JsonSchemaValidationKeys.EXCLUSIVE_MAXIMUM)
  }
  if (numberValue.multipleOf !== undefined) {
    keys.push(JsonSchemaValidationKeys.MULTIPLE_OF)
  }

  const objectValue = typedValue as JsonSchemaTreeNodeValueTypeObject
  if (objectValue.minProperties !== undefined) {
    keys.push(JsonSchemaValidationKeys.MIN_PROPERTIES)
  }
  if (objectValue.maxProperties !== undefined) {
    keys.push(JsonSchemaValidationKeys.MAX_PROPERTIES)
  }

  const arrayValue = typedValue as JsonSchemaTreeNodeValueTypeArray
  if (arrayValue.uniqueItems !== undefined) {
    keys.push(JsonSchemaValidationKeys.UNIQUE_ITEMS)
  }
  if (arrayValue.minItems !== undefined) {
    keys.push(JsonSchemaValidationKeys.MIN_ITEMS)
  }
  if (arrayValue.maxItems !== undefined) {
    keys.push(JsonSchemaValidationKeys.MAX_ITEMS)
  }

  return keys
}
