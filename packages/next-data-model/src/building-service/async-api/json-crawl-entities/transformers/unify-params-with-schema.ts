import { isObject } from "../../../../utilities"
import { AsyncApiCommonCrawlState } from "../rules/types"
import { SchemaTransformFunc } from "./types/types"

export const unifyParamsWithSchema: SchemaTransformFunc<AsyncApiCommonCrawlState> = (key, value) => {
  if (!isObject(value)) {
    return null
  }

  return {
    schema: value.schema ?? value,
    schemaFormat: value.schemaFormat ?? null,
  }
}
