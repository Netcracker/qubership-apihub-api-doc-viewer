import { isArray, isObject } from "../../../../utilities"
import { AsyncApiCommonCrawlState } from "../rules/types"
import { SchemaTransformFunc } from "./types/types"

export const collectRawValues: SchemaTransformFunc<AsyncApiCommonCrawlState> = (key, value) => {
  if (!isObject(value) || isArray(value)) {
    return value
  }
  return {
    rawValues: value,
  }
}
