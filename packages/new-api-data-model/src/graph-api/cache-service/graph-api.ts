import { ADV, TObject, TOptions } from "../../abstract/types/model"
import { isObject } from "../../utilities"
import { CacheServiceResult, EvaluateValueCallback, ICacheService, UnknownSchema } from "../../abstract/types/cache-service"

export class GraphApiCacheService implements ICacheService {
  private cache: Map<UnknownSchema, ADV.Row[]> = new Map()
  constructor(prevCacheService?: ICacheService) {
    if (prevCacheService) {
      this.cache = new Map(prevCacheService.getCache())
    }
  }

  public evaluateRowsBySchema(
    evaluate: EvaluateValueCallback,
    schema: TObject,
    options: TOptions,
  ): CacheServiceResult {
    const { typeDef, type } = schema

    let actualSchema: TObject | undefined
    
    if (isObject(typeDef)) {
      actualSchema = typeDef
    } else if (isObject(type)) {
      actualSchema = schema
    }

    // FIXME 31.07.25 // Improve this part
    if (!isObject(actualSchema)) {
      throw new Error('Provided schema both is not a type definition and a type usage.')
    }

    const isCache = this.cache.has(actualSchema)
    if (!isCache) {
      this.cache.set(actualSchema, [])
      this.cache.get(actualSchema)!.push(...evaluate(schema, options))
    }
    return [this.cache.get(actualSchema)!, isCache]
  }

  public getCache(): Map<UnknownSchema, ADV.Row[]> {
    return this.cache
  }
}