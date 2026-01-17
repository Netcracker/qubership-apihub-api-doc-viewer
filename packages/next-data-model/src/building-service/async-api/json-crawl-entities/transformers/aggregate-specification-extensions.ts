import { isArray, isObject } from "../../../../utilities"

export function aggregateSpecificationExtensions(value: unknown): unknown {
  if (!isObject(value) || isArray(value)) {
    return value
  }
  const allKeys = Reflect.ownKeys(value)
  const extensionKeys = allKeys.filter((key): key is string => typeof key === 'string' && key.startsWith('x-'))
  const extensionKeysSet = new Set(extensionKeys)
  const extensions = extensionKeys.map(extensionKey => {
    const extensionValue = value[extensionKey]
    return { [extensionKey]: extensionValue }
  })
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
