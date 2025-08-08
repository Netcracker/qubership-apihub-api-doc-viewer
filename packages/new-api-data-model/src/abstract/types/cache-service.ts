import { ADV, TObject, TOptions } from "./model";

export type UnknownSchema = Record<PropertyKey, unknown>

export type EvaluateValueCallback = (schema: TObject, options: TOptions) => ADV.Row[]

export type CacheServiceResult = [ADV.Row[], boolean]

export interface ICacheService {
  evaluateRowsBySchema(
    evaluate: EvaluateValueCallback,
    schema: TObject,
    options: TOptions,
  ): CacheServiceResult

  getCache(): Map<UnknownSchema, ADV.Row[]>
}
