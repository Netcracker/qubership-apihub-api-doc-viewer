import { isArray, isObject } from "../../../../utilities"
import { AsyncApiTreeCrawlState } from "../state/types"
import { SchemaTransformFunc } from "./types"

export const liftAddressTransformer: SchemaTransformFunc<AsyncApiTreeCrawlState> = (value) => {
  if (!isObject(value) || isArray(value)) {
    return value
  }
  if ('channel' in value && isObject(value.channel) && 'address' in value.channel) {
    value.address = value.channel.address
  }
  return value
}
