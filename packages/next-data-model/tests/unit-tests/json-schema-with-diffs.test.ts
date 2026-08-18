import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY, DiffAction, apiDiff } from "@netcracker/qubership-apihub-api-diff"
import { HighlightVariant, NODE_LEVEL_DIFF_KEY } from "../../src/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaSpecWithDiffsTransformer } from "../../src/building-service/json-schema/shared/json-schema-spec-with-diffs-transformer"
import { JsonSchemaTreeWithDiffsBuilder } from "../../src/building-service/json-schema/tree-with-diffs/builder"
import { JsonSchemaTreeNodeKinds } from "../../src/model/json-schema/types/node-kind"
import { JsonSchemaValidationRowKeys } from "../../src/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { isJsonSchemaTreeNodeWithDiffs } from "../../src/shared/json-schema/guards/tree-node"
import { createBuildingServiceLogger } from "../../src/loggers"
import { simplifyConsole } from "../helpers/simplify-console"
import fs from "fs"
import path from "path"
import yaml from "yaml"

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

  it("aggregates property metadata and constraint diffs for case 1.4", () => {
    const fixtureDir = path.resolve(
      __dirname,
      "../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.4-property-metadata-and-constraints-changed",
    )
    const beforeSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "before.yaml"), "utf8"))
    const afterSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "after.yaml"), "utf8"))
    const merged = mergeSchemas(beforeSchema, afterSchema)
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()

    const prop2 = tree.root!.childrenNodes().find((node) => node.key === "prop2")
    const prop3 = tree.root!.childrenNodes().find((node) => node.key === "prop3")
    const prop4 = tree.root!.childrenNodes().find((node) => node.key === "prop4")

    expect(prop2).toBeDefined()
    expect(prop3).toBeDefined()
    expect(prop4).toBeDefined()

    const prop2Diffs = prop2!.diffs as Record<string, { data?: { action?: string }, styles?: { before?: { backgroundColor?: string } } }>
    expect(prop2Diffs.enumValueDiffs?.delta?.data?.action).toBe(DiffAction.add)
    expect(prop2Diffs.enumRowColorizingDiff?.data?.action).toBe(DiffAction.replace)
    expect(prop2Diffs.enumRowColorizingDiff?.styles?.before?.backgroundColor).toBe(HighlightVariant.Yellow)

    const prop3Diffs = prop3!.diffs as Record<string, { data?: { action?: string }, styles?: { after?: { backgroundColor?: string } } }>
    expect(prop3Diffs.validationRowColorizingDiffs?.[JsonSchemaValidationRowKeys.VALUE_RANGE]?.data?.action)
      .toBe(DiffAction.add)
    expect(prop3Diffs.validationRowColorizingDiffs?.[JsonSchemaValidationRowKeys.VALUE_RANGE]?.styles?.after?.backgroundColor)
      .toBe(HighlightVariant.Green)

    const prop4Diffs = prop4!.diffs as Record<string, { data?: { action?: string }, styles?: { before?: { backgroundColor?: string } } }>
    expect(prop4Diffs.default?.data?.action).toBe(DiffAction.remove)
    expect(prop4Diffs.defaultRowColorizingDiff?.data?.action).toBe(DiffAction.remove)
    expect(prop4Diffs.defaultRowColorizingDiff?.styles?.before?.backgroundColor).toBe(HighlightVariant.Red)
  })
})
