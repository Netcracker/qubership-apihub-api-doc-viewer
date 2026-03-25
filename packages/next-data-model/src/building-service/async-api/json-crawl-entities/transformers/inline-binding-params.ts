import { isArray, isObject } from "../../../../utilities"
import { AsyncApiCommonCrawlState } from "../rules/types"
import { SchemaTransformFunc } from "./types/types"

export const inlineBindingParameters: SchemaTransformFunc<AsyncApiCommonCrawlState> = (key, value) => {
  if (!isObject(value) || isArray(value)) {
    return value
  }
  const { bindingVersion, ...restValue } = value
  return {
    binding: restValue,
    version: bindingVersion,
    protocol: typeof key === 'symbol' ? key.toString() : `${key}`,
  }
}
