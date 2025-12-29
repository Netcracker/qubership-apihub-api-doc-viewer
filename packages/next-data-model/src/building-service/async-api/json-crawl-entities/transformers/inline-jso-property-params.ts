import { JSON_SCHEMA_NODE_TYPES, JSON_SCHEMA_PROPERTY_ADDITIONAL_ITEMS, JSON_SCHEMA_PROPERTY_ADDITIONAL_PROPERTIES, JSON_SCHEMA_PROPERTY_ALL_OF, JSON_SCHEMA_PROPERTY_ANY_OF, JSON_SCHEMA_PROPERTY_CONST, JSON_SCHEMA_PROPERTY_CONTAINS, JSON_SCHEMA_PROPERTY_CONTENT_MEDIA_TYPE, JSON_SCHEMA_PROPERTY_DEFAULT, JSON_SCHEMA_PROPERTY_DEFINITIONS, JSON_SCHEMA_PROPERTY_DEFS, JSON_SCHEMA_PROPERTY_DEPENDENCIES, JSON_SCHEMA_PROPERTY_DEPRECATED, JSON_SCHEMA_PROPERTY_DESCRIPTION, JSON_SCHEMA_PROPERTY_ENUM, JSON_SCHEMA_PROPERTY_EXAMPLES, JSON_SCHEMA_PROPERTY_EXCLUSIVE_MAXIMUM, JSON_SCHEMA_PROPERTY_EXCLUSIVE_MINIMUM, JSON_SCHEMA_PROPERTY_FORMAT, JSON_SCHEMA_PROPERTY_ITEMS, JSON_SCHEMA_PROPERTY_MAX_ITEMS, JSON_SCHEMA_PROPERTY_MAX_LENGTH, JSON_SCHEMA_PROPERTY_MAX_PROPERTIES, JSON_SCHEMA_PROPERTY_MAXIMUM, JSON_SCHEMA_PROPERTY_MIN_ITEMS, JSON_SCHEMA_PROPERTY_MIN_LENGTH, JSON_SCHEMA_PROPERTY_MIN_PROPERTIES, JSON_SCHEMA_PROPERTY_MINIMUM, JSON_SCHEMA_PROPERTY_MULTIPLE_OF, JSON_SCHEMA_PROPERTY_NOT, JSON_SCHEMA_PROPERTY_NULLABLE, JSON_SCHEMA_PROPERTY_ONE_OF, JSON_SCHEMA_PROPERTY_PATTERN, JSON_SCHEMA_PROPERTY_PATTERN_PROPERTIES, JSON_SCHEMA_PROPERTY_PROPERTIES, JSON_SCHEMA_PROPERTY_PROPERTY_NAMES, JSON_SCHEMA_PROPERTY_READ_ONLY, JSON_SCHEMA_PROPERTY_REF, JSON_SCHEMA_PROPERTY_REQUIRED, JSON_SCHEMA_PROPERTY_TITLE, JSON_SCHEMA_PROPERTY_TYPE, JSON_SCHEMA_PROPERTY_UNIQUE_ITEMS, JSON_SCHEMA_PROPERTY_WRITE_ONLY } from "@netcracker/qubership-apihub-api-unifier"
import { isObject } from "../../../../utilities"
import { AsyncApiTreeCrawlState } from "../state/types"
import { SchemaTransformFunc } from "./types/types"
import { AsyncApiNodeJsoPropertyValueType, AsyncApiNodeJsoPropertyValueTypes } from "@apihub/next-data-model/model/async-api/types/node-value-type"

export const inlineJsoPropertyParameters: SchemaTransformFunc<AsyncApiTreeCrawlState> = (key, value) => {
  const valueType = getValueType(value)
  const isPrimitive = isPrimitiveValue(valueType)
  return {
    title: typeof key === 'symbol' ? key.toString() : `${key}`,
    value: value,
    valueType: getValueType(value),
    isPrimitive: isPrimitive,
  }
}

function isPrimitiveValue(valueType: AsyncApiNodeJsoPropertyValueType): boolean {
  return (
    valueType !== AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA &&
    valueType !== AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA && 
    valueType !== AsyncApiNodeJsoPropertyValueTypes.OBJECT
  )
}

function getValueType(value: unknown): AsyncApiNodeJsoPropertyValueType {
  if (typeof value === 'string') {
    return AsyncApiNodeJsoPropertyValueTypes.STRING
  }
  if (typeof value === 'number') {
    return AsyncApiNodeJsoPropertyValueTypes.NUMBER
  }
  if (typeof value === 'boolean') {
    return AsyncApiNodeJsoPropertyValueTypes.BOOLEAN
  }
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return AsyncApiNodeJsoPropertyValueTypes.ARRAY
    }
    if (isJsonSchema(value)) {
      return AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA
    }
    if (isMultiSchema(value)) {
      return AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA
    }
    return AsyncApiNodeJsoPropertyValueTypes.OBJECT
  }
  return AsyncApiNodeJsoPropertyValueTypes.UNKNOWN
}

function isJsonSchema(value: unknown): boolean {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const hasFieldTypeFromJsonSchema = (
    'type' in value &&
    typeof value.type === 'string' &&
    JSON_SCHEMA_NODE_TYPES.some(type => type === value.type)
  )
  const JSON_SCHEMA_PROPERTY_KEYS = new Set([
    JSON_SCHEMA_PROPERTY_TITLE,
    JSON_SCHEMA_PROPERTY_CONTENT_MEDIA_TYPE,
    JSON_SCHEMA_PROPERTY_CONST,
    JSON_SCHEMA_PROPERTY_PROPERTY_NAMES,
    JSON_SCHEMA_PROPERTY_CONTAINS,
    JSON_SCHEMA_PROPERTY_DEPENDENCIES,
    JSON_SCHEMA_PROPERTY_DEFS,
    JSON_SCHEMA_PROPERTY_TYPE,
    JSON_SCHEMA_PROPERTY_DESCRIPTION,
    JSON_SCHEMA_PROPERTY_FORMAT,
    JSON_SCHEMA_PROPERTY_DEFAULT,
    JSON_SCHEMA_PROPERTY_MULTIPLE_OF,
    JSON_SCHEMA_PROPERTY_MAXIMUM,
    JSON_SCHEMA_PROPERTY_EXCLUSIVE_MAXIMUM,
    JSON_SCHEMA_PROPERTY_MINIMUM,
    JSON_SCHEMA_PROPERTY_EXCLUSIVE_MINIMUM,
    JSON_SCHEMA_PROPERTY_MAX_LENGTH,
    JSON_SCHEMA_PROPERTY_MIN_LENGTH,
    JSON_SCHEMA_PROPERTY_PATTERN,
    JSON_SCHEMA_PROPERTY_MAX_ITEMS,
    JSON_SCHEMA_PROPERTY_MIN_ITEMS,
    JSON_SCHEMA_PROPERTY_UNIQUE_ITEMS,
    JSON_SCHEMA_PROPERTY_MAX_PROPERTIES,
    JSON_SCHEMA_PROPERTY_MIN_PROPERTIES,
    JSON_SCHEMA_PROPERTY_ITEMS,
    JSON_SCHEMA_PROPERTY_ADDITIONAL_ITEMS,
    JSON_SCHEMA_PROPERTY_REQUIRED,
    JSON_SCHEMA_PROPERTY_ENUM,
    JSON_SCHEMA_PROPERTY_PROPERTIES,
    JSON_SCHEMA_PROPERTY_ADDITIONAL_PROPERTIES,
    JSON_SCHEMA_PROPERTY_PATTERN_PROPERTIES,
    JSON_SCHEMA_PROPERTY_ALL_OF,
    JSON_SCHEMA_PROPERTY_ONE_OF,
    JSON_SCHEMA_PROPERTY_ANY_OF,
    JSON_SCHEMA_PROPERTY_NOT,
    JSON_SCHEMA_PROPERTY_NULLABLE,
    JSON_SCHEMA_PROPERTY_READ_ONLY,
    JSON_SCHEMA_PROPERTY_WRITE_ONLY,
    JSON_SCHEMA_PROPERTY_EXAMPLES,
    JSON_SCHEMA_PROPERTY_DEPRECATED,
    JSON_SCHEMA_PROPERTY_DEFINITIONS,
    JSON_SCHEMA_PROPERTY_REF,
  ])
  return (
    hasFieldTypeFromJsonSchema &&
    Object.keys(value).every(key => JSON_SCHEMA_PROPERTY_KEYS.has(key))
  )
}

function isMultiSchema(value: unknown): boolean {
  if (typeof value !== 'object' || value === null) {
    return false
  }
  if ('schemaFormat' in value && typeof value.schemaFormat === 'string' && 'schema' in value && isObject(value.schema)) {
    return true
  }
  return false
}
