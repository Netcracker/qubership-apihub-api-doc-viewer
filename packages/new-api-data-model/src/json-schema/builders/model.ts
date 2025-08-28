import { buildArraySchema } from "./node/array"
import { buildBooleanSchema } from "./node/boolean"
import { buildCombinerSchema } from "./node/combiner"
import { buildNumberOrIntegerSchema } from "./node/number"
import { buildObjectSchema } from "./node/object"
import { buildStringSchema } from "./node/string"
import { isArraySchema, isBooleanSchema, isCombinerSchema, isNumberSchema, isObjectSchema, isStringSchema } from "./type-guards"
import { JsonSchemaCacheService } from "../cache-service/json-schema"
import { isObject } from "../../utilities"

export function createModel(source: unknown): any {
  if (!isObject(source)) {
    throw new Error('Source must be an object')
  }

  const cacheService = new JsonSchemaCacheService()

  if (isStringSchema(source)) {
    const [rows] = cacheService.evaluateRowsBySchema(buildStringSchema, source, { cacheService })
    return rows
  }

  if (isNumberSchema(source)) {
    const [rows] = cacheService.evaluateRowsBySchema(buildNumberOrIntegerSchema, source, { cacheService })
    return rows
  }

  if (isBooleanSchema(source)) {
    const [rows] = cacheService.evaluateRowsBySchema(buildBooleanSchema, source, { cacheService })
    return rows
  }

  if (isObjectSchema(source)) {
    const [rows] = cacheService.evaluateRowsBySchema(buildObjectSchema, source, { cacheService })
    return rows
  }

  if (isArraySchema(source)) {
    const [rows] = cacheService.evaluateRowsBySchema(buildArraySchema, source, { cacheService })
    return rows
  }

  if (isCombinerSchema(source)) {
    const [rows] = cacheService.evaluateRowsBySchema(buildCombinerSchema, source, { cacheService })
    return rows
  }

  return null
}
