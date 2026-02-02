import { denormalize, normalize } from "@netcracker/qubership-apihub-api-unifier";
import { isObject } from "@netcracker/qubership-apihub-json-crawl";
import { AsyncApiTreeBuilder } from "../../src/building-service/async-api/tree/builder";
import { AsyncApiTree } from "../../src/model/async-api/tree/tree.impl";

const REFERENCE_NAME_PROPERTY_KEY = Symbol('referenceName')

const NORMALIZATION_OPTIONS = {
  referenceNameProperty: REFERENCE_NAME_PROPERTY_KEY
}

export function createAsyncApiTreeForTests(source: unknown): AsyncApiTree | null {
  if (!isObject(source)) {
    return null
  }

  const normalizedSource = normalize(source, NORMALIZATION_OPTIONS)
  const mergedSource = denormalize(normalizedSource)

  const builder = new AsyncApiTreeBuilder(mergedSource, undefined, REFERENCE_NAME_PROPERTY_KEY)
  return builder.build()
}
