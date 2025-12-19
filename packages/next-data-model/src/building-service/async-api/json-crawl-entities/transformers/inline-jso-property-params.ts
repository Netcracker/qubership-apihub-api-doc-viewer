import { isArray, isObject } from "../../../../utilities"
import { AsyncApiTreeCrawlState } from "../state/types"
import { SchemaTransformFunc } from "./types/types"

export const inlineJsoPropertyParameters: SchemaTransformFunc<AsyncApiTreeCrawlState> = (key, value) => {
  return {
    title: typeof key === 'symbol' ? key.toString() : `${key}`,
    value: value,
    valueType: getValueType(value),
  }
}

function getValueType(value: unknown): string {
  if (typeof value === 'string') {
    return 'string'
  }
  if (typeof value === 'number') {
    return 'number'
  }
  if (typeof value === 'boolean') {
    return 'boolean'
  }
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return 'array'
    }
    if (isJsonSchema(value)) {
      return 'jsonSchema'
    }
    if (isMultiSchema(value)) {
      return 'multiSchema'
    }
    return 'object'
  }
  return 'unknown'
}

function isJsonSchema(value: unknown): boolean {
  if (typeof value !== 'object' || value === null) {
    return false
  }
  if ('type' in value && typeof value.type === 'string') {
    return true
  }
  return false
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
