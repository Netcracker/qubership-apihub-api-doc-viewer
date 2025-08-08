import { isGraphApi } from "@netcracker/qubership-apihub-graphapi"
import { ADV } from "../../abstract/types/model"
import { isObject } from "../../utilities"
import { buildOperation } from "./section/operation"
import { GraphApiCacheService } from "../cache-service/graph-api"

export function createModel(schema: unknown): ADV.Row[] {
  if (!isObject(schema)) {
    throw new Error('"schema" is not an object')
  }

  if (!isGraphApi(schema)) {
    throw new Error('"schema" is not a GraphAPI schema')
  }

  const rows: ADV.Row[] = []

  const { queries = {}, mutations = {}, subscriptions = {} } = schema

  const cacheService = new GraphApiCacheService()

  for (const [queryName, query] of Object.entries(queries)) {
    rows.push(...buildOperation(query, 'query', { cacheService, nodeTitle: queryName }))
  }

  for (const [mutationName, mutation] of Object.entries(mutations)) {
    rows.push(...buildOperation(mutation, 'mutation', { cacheService, nodeTitle: mutationName }))
  }

    for (const [subscriptionName, subscription] of Object.entries(subscriptions)) {
    rows.push(...buildOperation(subscription, 'subscription', { cacheService, nodeTitle: subscriptionName }))
  }

  return rows
} 