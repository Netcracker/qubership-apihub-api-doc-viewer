import { denormalize, normalize } from "@netcracker/qubership-apihub-api-unifier";
import { isObject } from "@netcracker/qubership-apihub-json-crawl";
import { AsyncApiTreeBuilder } from "../../src/building-service/async-api/tree/builder";
import { AsyncApiTree } from "../../src/model/async-api/tree/tree.impl";

export function createAsyncApiTreeForTests(source: unknown): AsyncApiTree | null {
  if (!isObject(source)) {
    return null
  }

  const normalizedSource = normalize(source)
  const mergedSource = denormalize(normalizedSource)

  const builder = new AsyncApiTreeBuilder(mergedSource)
  return builder.build()
}
