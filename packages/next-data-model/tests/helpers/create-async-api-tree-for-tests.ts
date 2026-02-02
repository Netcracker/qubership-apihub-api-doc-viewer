import { denormalize, normalize } from "@netcracker/qubership-apihub-api-unifier";
import { isObject } from "@netcracker/qubership-apihub-json-crawl";
import { AsyncApiTreeBuilder } from "../../src/building-service/async-api/tree/builder";
import { AsyncApiTree } from "../../src/model/async-api/tree/tree.impl";

export const TEST_REFERENCE_NAME_PROPERTY_KEY = Symbol('referenceName')

const NORMALIZATION_OPTIONS = {
  referenceNameProperty: TEST_REFERENCE_NAME_PROPERTY_KEY
}

export function createAsyncApiTreeForTests(source: unknown, operationKeys?: Partial<{
  operationType: string // send, receive
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}>): AsyncApiTree | null {
  if (!isObject(source)) {
    return null
  }

  const normalizedSource = normalize(source, NORMALIZATION_OPTIONS)
  const mergedSource = denormalize(normalizedSource)

  const builder = new AsyncApiTreeBuilder(mergedSource, operationKeys, TEST_REFERENCE_NAME_PROPERTY_KEY)
  return builder.build()
}
