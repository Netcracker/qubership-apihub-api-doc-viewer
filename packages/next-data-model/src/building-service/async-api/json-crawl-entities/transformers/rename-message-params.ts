import { isArray, isObject } from "../../../../utilities"
import { AsyncApiCommonCrawlState } from "../rules/types"
import { SchemaTransformFunc } from "./types/types"

export const renameMessageParams: SchemaTransformFunc<AsyncApiCommonCrawlState> = (key, value) => {
  if (!isObject(value) || isArray(value)) {
    return value
  }
  const { name, ...restValue } = value
  return {
    ...restValue,
    ...(name ? { internalTitle: name } : {}),
  }
}
