import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY, DiffAction, apiDiff } from "@netcracker/qubership-apihub-api-diff"
import { JsonSchemaTreeWithDiffsBuilder } from "../../src/building-service/json-schema/tree-with-diffs/builder"
import { ORIGIN_LAYOUT_SIDE, CHANGED_LAYOUT_SIDE } from "../../src/model/abstract/layout-side"
import { HighlightVariant, NODE_LEVEL_DIFF_KEY } from "../../src/model/abstract/tree-with-diffs/tree-node.interface"
import { isDiffSideHeaderVisible } from "../../src/model/abstract/tree-with-diffs/list-side-display"
import { JSON_SCHEMA_TITLE_ROW_DIFF_KEY } from "../../src/model/json-schema/tree-with-diffs/property-row-diffs.types"
import { JsonSchemaTreeNodeKinds } from "../../src/model/json-schema/types/node-kind"
import {
  hasJsonSchemaMetaFlagContentChange,
  normalizeJsonSchemaRequiredMetaDiffForDisplay,
  takeJsonSchemaDeprecatedDiff,
  takeJsonSchemaMetaFlagRawDiffs,
  takeJsonSchemaReadOnlyDiff,
  takeJsonSchemaRequiredMetaDiff,
  takeJsonSchemaRequiredMetaDiffForDisplay,
  takeJsonSchemaTitleRowDiff,
  takeJsonSchemaWriteOnlyDiff,
} from "../../src/model/json-schema/tree-with-diffs/property-row-diffs"
import { isJsonSchemaTreeNodeWithDiffs } from "../../src/shared/json-schema/guards/tree-node"
import { createBuildingServiceLogger } from "../../src/loggers"
import { simplifyConsole } from "../helpers/simplify-console"

const syntheticTitleFlag = Symbol("syntheticTitle")

const DIFF_META_KEYS = {
  diffsMetaKey: DIFF_META_KEY,
  aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY,
}

const NORMALIZED_DIFF_OPTIONS = {
  syntheticTitleFlag,
  unify: true,
  validate: true,
  liftCombiners: true,
  allowNotValidSyntheticChanges: true,
} as const

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

function mergeSchemasWithOasNormalize(beforeSchema: object, afterSchema: object): object {
  const beforeDocument = {
    openapi: "3.0.0",
    info: { title: "Test", version: "1.0.0" },
    paths: {
      "/test": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/__Substitution__" },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        __Substitution__: beforeSchema,
      },
    },
  }
  const afterDocument = {
    openapi: "3.0.0",
    info: { title: "Test", version: "1.0.0" },
    paths: {
      "/test": {
        post: {
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/__Substitution__" },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        __Substitution__: afterSchema,
      },
    },
  }

  return apiDiff(beforeDocument, afterDocument, {
    ...NORMALIZED_DIFF_OPTIONS,
    beforeSource: beforeDocument,
    afterSource: afterDocument,
    metaKey: DIFF_META_KEY,
  }).merged.components.schemas.__Substitution__ as object
}

function buildTree(merged: object) {
  return new JsonSchemaTreeWithDiffsBuilder({
    source: merged,
    diffsMetaKeys: DIFF_META_KEYS,
    logger: createBuildingServiceLogger(),
  }).build()
}

function findPropertyNode(
  tree: ReturnType<typeof buildTree>,
  propertyKey: string,
) {
  const root = tree.root
  expect(root).toBeDefined()
  const propertyNode = root!.childrenNodes().find((child) => child.key === propertyKey)
  expect(propertyNode).toBeDefined()
  expect(isJsonSchemaTreeNodeWithDiffs(propertyNode!)).toBe(true)
  expect(propertyNode!.kind).toBe(JsonSchemaTreeNodeKinds.PROPERTY)
  return propertyNode!
}

describe("JSON Schema meta flag diffs", () => {
  simplifyConsole()

  it("aggregates readOnly add on root schema", () => {
    const merged = mergeSchemas(
      { type: "string", description: "Sample string description" },
      { type: "string", description: "Sample string description", readOnly: true },
    )
    const tree = buildTree(merged)
    const root = tree.root!
    expect(isJsonSchemaTreeNodeWithDiffs(root)).toBe(true)

    const readOnlyDiff = takeJsonSchemaReadOnlyDiff(root)
    expect(readOnlyDiff?.data.action).toBe(DiffAction.add)
    expect(hasJsonSchemaMetaFlagContentChange(root)).toBe(true)
    expect(takeJsonSchemaMetaFlagRawDiffs(root).readOnly?.action).toBe(DiffAction.add)
  })

  it("aggregates readOnly remove on root schema", () => {
    const merged = mergeSchemas(
      { type: "string", description: "Sample string description", readOnly: true },
      { type: "string", description: "Sample string description" },
    )
    const tree = buildTree(merged)
    const root = tree.root!
    expect(isJsonSchemaTreeNodeWithDiffs(root)).toBe(true)

    const readOnlyDiff = takeJsonSchemaReadOnlyDiff(root)
    expect(readOnlyDiff?.data.action).toBe(DiffAction.remove)
  })

  it("aggregates writeOnly add on root schema", () => {
    const merged = mergeSchemas(
      { type: "string", description: "Sample string description" },
      { type: "string", description: "Sample string description", writeOnly: true },
    )
    const tree = buildTree(merged)
    const root = tree.root!

    expect(takeJsonSchemaWriteOnlyDiff(root)?.data.action).toBe(DiffAction.add)
  })

  it("aggregates deprecated add on root schema", () => {
    const merged = mergeSchemas(
      { type: "string", description: "Sample string description" },
      { type: "string", description: "Sample string description", deprecated: true },
    )
    const tree = buildTree(merged)
    const root = tree.root!

    expect(takeJsonSchemaDeprecatedDiff(root)?.data.action).toBe(DiffAction.add)
  })

  it("aggregates required add on property node (case 007 shape)", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        description: "Object with one string property",
        properties: {
          name: { type: "string", description: "Name property" },
        },
      },
      {
        type: "object",
        description: "Object with one string property",
        properties: {
          name: { type: "string", description: "Name property" },
        },
        required: ["name"],
      },
    )
    const tree = buildTree(merged)
    const nameNode = findPropertyNode(tree, "name")

    const requiredDiff = takeJsonSchemaRequiredMetaDiff(nameNode)
    expect(requiredDiff?.data.action).toBe(DiffAction.add)
    expect(takeJsonSchemaMetaFlagRawDiffs(nameNode).required?.action).toBe(DiffAction.add)
    expect(hasJsonSchemaMetaFlagContentChange(nameNode)).toBe(true)
  })

  it("aggregates required remove on property node (case 008 shape)", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        description: "Object with one string property",
        properties: {
          name: { type: "string", description: "Name property" },
        },
        required: ["name"],
      },
      {
        type: "object",
        description: "Object with one string property",
        properties: {
          name: { type: "string", description: "Name property" },
        },
      },
    )
    const tree = buildTree(merged)
    const nameNode = findPropertyNode(tree, "name")

    const requiredDiff = takeJsonSchemaRequiredMetaDiff(nameNode)
    expect(requiredDiff?.data.action).toBe(DiffAction.remove)
    expect(takeJsonSchemaMetaFlagRawDiffs(nameNode).required?.action).toBe(DiffAction.remove)
  })

  it("normalizes required meta diff for display as boolean add/remove", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        properties: {
          name: { type: "string" },
        },
      },
      {
        type: "object",
        properties: {
          name: { type: "string" },
        },
        required: ["name"],
      },
    )
    const tree = buildTree(merged)
    const nameNode = findPropertyNode(tree, "name")
    const requiredMeta = takeJsonSchemaRequiredMetaDiff(nameNode)

    expect(normalizeJsonSchemaRequiredMetaDiffForDisplay(requiredMeta)?.action).toBe(DiffAction.add)
    expect(normalizeJsonSchemaRequiredMetaDiffForDisplay(requiredMeta)?.afterValue).toBe(true)
    expect(takeJsonSchemaRequiredMetaDiffForDisplay(nameNode)?.afterValue).toBe(true)
  })

  it("sets yellow replace title row diff for readOnly add on root schema", () => {
    const merged = mergeSchemas(
      { type: "string", description: "Sample string description" },
      { type: "string", description: "Sample string description", readOnly: true },
    )
    const tree = buildTree(merged)
    const root = tree.root!

    const titleRowDiff = takeJsonSchemaTitleRowDiff(root)
    expect(titleRowDiff).toBeDefined()
    expect(titleRowDiff!.data.action).toBe(DiffAction.replace)
    expect(titleRowDiff!.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(root.diffs[JSON_SCHEMA_TITLE_ROW_DIFF_KEY]).toBeDefined()
  })

  it("sets yellow replace title row diff for required add on property (case 007 shape)", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        properties: {
          name: { type: "string" },
        },
      },
      {
        type: "object",
        properties: {
          name: { type: "string" },
        },
        required: ["name"],
      },
    )
    const tree = buildTree(merged)
    const nameNode = findPropertyNode(tree, "name")

    const titleRowDiff = takeJsonSchemaTitleRowDiff(nameNode)
    expect(titleRowDiff).toBeDefined()
    expect(titleRowDiff!.data.action).toBe(DiffAction.replace)
    expect(titleRowDiff!.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
  })

  it("suppresses required meta when property has whole-node add diff", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        properties: {
          prop1: { type: "string" },
        },
      },
      {
        type: "object",
        properties: {
          prop1: { type: "string" },
          prop2: { type: "string" },
        },
        required: ["prop2"],
      },
    )
    const tree = buildTree(merged)
    const prop2Node = findPropertyNode(tree, "prop2")

    expect(prop2Node.diffs[NODE_LEVEL_DIFF_KEY]).toBeDefined()
    expect(prop2Node.diffs[NODE_LEVEL_DIFF_KEY]?.data.action).toBe(DiffAction.add)
    expect(takeJsonSchemaRequiredMetaDiff(prop2Node)).toBeUndefined()
    expect(takeJsonSchemaRequiredMetaDiffForDisplay(prop2Node)).toBeUndefined()

    const titleRowDiff = takeJsonSchemaTitleRowDiff(prop2Node)
    expect(titleRowDiff?.data.action).toBe(DiffAction.add)
    expect(isDiffSideHeaderVisible(titleRowDiff, ORIGIN_LAYOUT_SIDE)).toBe(false)
    expect(isDiffSideHeaderVisible(titleRowDiff, CHANGED_LAYOUT_SIDE)).toBe(true)
  })

  it("hides title row content on changed side for removed property nodes", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        properties: {
          prop1: { type: "string" },
          prop2: { type: "string" },
        },
      },
      {
        type: "object",
        properties: {
          prop1: { type: "string" },
        },
      },
    )
    const tree = buildTree(merged)
    const prop2Node = findPropertyNode(tree, "prop2")
    const titleRowDiff = takeJsonSchemaTitleRowDiff(prop2Node)

    expect(titleRowDiff?.data.action).toBe(DiffAction.remove)
    expect(isDiffSideHeaderVisible(titleRowDiff, ORIGIN_LAYOUT_SIDE)).toBe(true)
    expect(isDiffSideHeaderVisible(titleRowDiff, CHANGED_LAYOUT_SIDE)).toBe(false)
  })

  it("aggregates required add via OAS-normalized merge (storybook path, case 007 shape)", () => {
    const merged = mergeSchemasWithOasNormalize(
      {
        type: "object",
        description: "Object with one string property",
        properties: {
          name: { type: "string", description: "Name property" },
        },
      },
      {
        type: "object",
        description: "Object with one string property",
        properties: {
          name: { type: "string", description: "Name property" },
        },
        required: ["name"],
      },
    )
    const tree = buildTree(merged)
    const nameNode = findPropertyNode(tree, "name")

    expect(takeJsonSchemaRequiredMetaDiff(nameNode)?.data.action).toBe(DiffAction.add)
    expect(takeJsonSchemaRequiredMetaDiffForDisplay(nameNode)?.afterValue).toBe(true)
    expect(takeJsonSchemaTitleRowDiff(nameNode)?.data.action).toBe(DiffAction.replace)
    expect(takeJsonSchemaTitleRowDiff(nameNode)?.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
  })

  it("aggregates required remove via OAS-normalized merge (storybook path, case 008 shape)", () => {
    const merged = mergeSchemasWithOasNormalize(
      {
        type: "object",
        description: "Object with one string property",
        properties: {
          name: { type: "string", description: "Name property" },
        },
        required: ["name"],
      },
      {
        type: "object",
        description: "Object with one string property",
        properties: {
          name: { type: "string", description: "Name property" },
        },
      },
    )
    const tree = buildTree(merged)
    const nameNode = findPropertyNode(tree, "name")

    expect(takeJsonSchemaRequiredMetaDiff(nameNode)?.data.action).toBe(DiffAction.remove)
    expect(takeJsonSchemaRequiredMetaDiffForDisplay(nameNode)?.beforeValue).toBe(true)
    expect(takeJsonSchemaTitleRowDiff(nameNode)?.data.action).toBe(DiffAction.replace)
  })
})
