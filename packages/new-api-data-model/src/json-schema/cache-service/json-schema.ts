import { ADV, TObject, TOptions } from "../../abstract/types/model"
import { CacheServiceResult, EvaluateValueCallback, ICacheService, UnknownSchema } from "../../abstract/types/cache-service"

export class JsonSchemaCacheService implements ICacheService {
  private cache: Map<UnknownSchema, ADV.Row[]> = new Map()

  constructor(prevCacheService?: JsonSchemaCacheService) {
    if (prevCacheService) {
      this.cache = new Map(prevCacheService.getCache())
    }
  }

  public evaluateRowsBySchema(
    evaluate: EvaluateValueCallback,
    schema: TObject,
    options: TOptions,
  ): CacheServiceResult {
    const isCache = this.cache.has(schema)
    if (!isCache) {
      this.cache.set(schema, [])
      this.cache.get(schema)!.push(...evaluate(schema, options))
    }
    return [this.cache.get(schema)!, isCache]
  }

  public getCache(): Map<UnknownSchema, ADV.Row[]> {
    return this.cache
  }
}
