import { JSON_SCHEMA_PROPERTY_REF } from "@netcracker/qubership-apihub-api-unifier"
import {
  JsonSchemaNodeValueType,
  JsonSchemaNodeValueTypes,
  JsonSchemaNodeValueTypesList,
} from "@apihub/next-data-model/model/json-schema/types/node-value-type"
import {
  JsonSchemaTreeNodeStoredValue,
  JsonSchemaTreeNodeValue,
} from "@apihub/next-data-model/model/json-schema/types/node-value"
import { isArray, isObject, isString } from "@apihub/next-data-model/utilities"

export function isJsonSchemaNodeType(type: unknown): type is JsonSchemaNodeValueType {
  if (!type || !isString(type)) {
    return false
  }
  return JsonSchemaNodeValueTypesList.some(jsonSchemaNodeType => jsonSchemaNodeType === type)
}

export function isBrokenRef(value: unknown): value is Record<typeof JSON_SCHEMA_PROPERTY_REF, unknown> {
  return isObject(value) && JSON_SCHEMA_PROPERTY_REF in value
}

function hasCombinerArray(value: Record<PropertyKey, unknown>, key: "allOf" | "oneOf" | "anyOf"): boolean {
  const combiner = value[key]
  return isArray(combiner) && combiner.length > 0
}

export function isJsonSchemaPrimitiveNodeValue(value: unknown): value is boolean {
  return typeof value === "boolean"
}

export function isJsonSchemaTypedNodeValue(
  value: unknown,
): value is JsonSchemaTreeNodeValue {
  return isObject(value) && !isArray(value)
}

export function asJsonSchemaTypedNodeValue(
  value: JsonSchemaTreeNodeStoredValue | null | undefined,
): JsonSchemaTreeNodeValue | null | undefined {
  if (value === null || value === undefined || typeof value === "boolean") {
    return null
  }
  return value
}

const JSON_SCHEMA_PRIMITIVE_VALUE_TYPES: readonly string[] = [
  JsonSchemaNodeValueTypes.STRING,
  JsonSchemaNodeValueTypes.NUMBER,
  JsonSchemaNodeValueTypes.INTEGER,
  JsonSchemaNodeValueTypes.BOOLEAN,
]

/**
 * True when `type` is a primitive JSON Schema `type` keyword value (string/number/integer/boolean).
 * Distinct from {@link isJsonSchemaPrimitiveNodeValue}, which checks whether the *node itself*
 * is a literal boolean schema (`true`/`false`), not the `type` keyword's value.
 */
export function isJsonSchemaPrimitiveValueType(type: string | undefined): boolean {
  return !!type && JSON_SCHEMA_PRIMITIVE_VALUE_TYPES.includes(type)
}

export function isJsonSchemaComplexValue(value: unknown): boolean {
  if (!isObject(value) || isArray(value)) {
    return false
  }
  return hasCombinerArray(value, "allOf")
    || hasCombinerArray(value, "oneOf")
    || hasCombinerArray(value, "anyOf")
}
