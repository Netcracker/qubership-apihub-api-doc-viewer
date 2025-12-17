import { isArray, isObject } from "../../../../utilities"
import { AsyncApiTreeCrawlState } from "../state/types"
import { SchemaTransformFunc } from "./types/types"

export const inlineJsoPropertyParameters: SchemaTransformFunc<AsyncApiTreeCrawlState> = (key, value) => {
  if (!isObject(value) || isArray(value)) {
    return value
  }

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
    if ('type' in value && typeof value.type === 'string') {
      return 'jsonSchema'
    }
    return 'object'
  }
  return 'unknown'
}
