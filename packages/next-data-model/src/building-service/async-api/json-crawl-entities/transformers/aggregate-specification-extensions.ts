import { SpecificationExtensionKey } from "@apihub/next-data-model/model/specification-extension-key"
import { isArray, isObject } from "../../../../utilities"
import { AsyncApiTreeCrawlState } from "../state/types"
import { SchemaTransformFunc } from "./types/types"

export const aggregateSpecificationExtensions: SchemaTransformFunc<AsyncApiTreeCrawlState> = (key, value) => {
  if (!isObject(value) || isArray(value)) {
    return value
  }
  const allKeys = Reflect.ownKeys(value)
  const extensionKeys = allKeys.filter((key): key is string => typeof key === 'string' && key.startsWith('x-'))
  if (extensionKeys.length === 0) {
    return value
  }
  const extensionKeysSet = new Set(extensionKeys)
  const extensions = extensionKeys.reduce((acc, extensionKey) => {
    const extensionValue = value[extensionKey]
    return { ...acc, [extensionKey]: extensionValue }
  }, {} as Record<SpecificationExtensionKey, unknown>)
  const result: Record<PropertyKey, unknown> = {}
  for (const key of allKeys) {
    if (typeof key === 'string' && extensionKeysSet.has(key)) {
      continue
    }
    result[key] = value[key]
  }
  result.extensions = extensions
  return result
}
