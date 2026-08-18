import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY, apiDiff } from "@netcracker/qubership-apihub-api-diff"
import { NODE_LEVEL_DIFF_KEY } from "../../src/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaSpecWithDiffsTransformer } from "../../src/building-service/json-schema/shared/json-schema-spec-with-diffs-transformer"
import { JsonSchemaTreeWithDiffsBuilder } from "../../src/building-service/json-schema/tree-with-diffs/builder"
import { JsonSchemaTreeNodeKinds } from "../../src/model/json-schema/types/node-kind"
import { isJsonSchemaTreeNodeWithDiffs } from "../../src/shared/json-schema/guards/tree-node"
import { createBuildingServiceLogger } from "../../src/loggers"
import { simplifyConsole } from "../helpers/simplify-console"

const DIFF_META_KEYS = {
  diffsMetaKey: DIFF_META_KEY,
  aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY,
}

function mergeSchemas(beforeSchema: object, afterSchema: object): object {
  const beforeDocument = {
    openapi: "3.0.0",
    info: { title: "Test", version: "1.0.0" },
    paths: {},
    components: {
      schemas: {
        __Substitution__: beforeSchema,
      },
    },
  }
  const afterDocument = {
    openapi: "3.0.0",
    info: { title: "Test", version: "1.0.0" },
    paths: {},
    components: {
      schemas: {
        __Substitution__: afterSchema,
      },
    },
  }

  return apiDiff(beforeDocument, afterDocument, {
    beforeSource: beforeDocument,
    afterSource: afterDocument,
    metaKey: DIFF_META_KEY,
  }).merged.components.schemas.__Substitution__ as object
}

describe("JsonSchema with-diffs stack", () => {
  simplifyConsole()

  const beforeSchema = {
    type: "object",
    description: "Simple object with five primitive properties",
    properties: {
      prop1: { type: "string", description: "First property" },
      prop2: { type: "string", description: "Second property" },
      prop3: { type: "integer", description: "Third property" },
    },
  }

  const afterSchema = {
    type: "object",
    description: "Simple object with five primitive properties",
    properties: {
      prop1: { type: "string", description: "First property" },
      prop2: { type: "string", description: "Second property" },
      prop6: { type: "string", description: "Sixth property (added)" },
    },
  }

  it("rolls up diff metadata on the merged schema", () => {
    const merged = mergeSchemas(beforeSchema, afterSchema)
    const transformer = new JsonSchemaSpecWithDiffsTransformer(createBuildingServiceLogger(), DIFF_META_KEYS)
    const prepared = transformer.transformSourceToSchemaWithDiffs(merged)

    expect(prepared).toBe(merged)
    expect(Reflect.get(merged, DIFFS_AGGREGATED_META_KEY)).toBeDefined()
  })

  it("propagates property add/remove diffs from properties bag to descendantDiffs", () => {
    const merged = mergeSchemas(beforeSchema, afterSchema)
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()

    const root = tree.root
    expect(root).toBeDefined()
    expect(isJsonSchemaTreeNodeWithDiffs(root!)).toBe(true)
    expect(Object.keys(root!.descendantDiffs).sort()).toEqual(["prop3", "prop6"])

    const prop6Node = root!.childrenNodes().find((node) => node.key === "prop6")
    expect(prop6Node).toBeDefined()
    expect(isJsonSchemaTreeNodeWithDiffs(prop6Node!)).toBe(true)
    expect(prop6Node!.kind).toBe(JsonSchemaTreeNodeKinds.PROPERTY)
    expect(prop6Node!.diffs[NODE_LEVEL_DIFF_KEY]).toBeDefined()
  })
})
