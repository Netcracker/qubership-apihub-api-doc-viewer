import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY, DiffAction, apiDiff } from "@netcracker/qubership-apihub-api-diff"
import { JsonSchemaTreeWithDiffsBuilder } from "@netcracker/qubership-apihub-next-data-model"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { isJsonSchemaCombinerOwnerNode } from "./node-type-checkers"
import {
  buildCombinerSelectorRowDiff,
  buildCombinerSelectorRowDiffsSeverities,
  buildCombinerSelectorRowPresentation,
  resolveCombinerSelectorLevelReductionAction,
} from "./resolve-combiner-node-diffs"

const DIFF_META_KEYS = {
  diffsMetaKey: DIFF_META_KEY,
  aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY,
}

function mergeSchemas(beforeSchema: object, afterSchema: object): object {
  const beforeDocument = {
    openapi: "3.0.0",
    info: { title: "Test", version: "1.0.0" },
    paths: {},
    components: { schemas: { __Substitution__: beforeSchema } },
  }
  const afterDocument = {
    openapi: "3.0.0",
    info: { title: "Test", version: "1.0.0" },
    paths: {},
    components: { schemas: { __Substitution__: afterSchema } },
  }

  const result = apiDiff(beforeDocument, afterDocument, {
    beforeSource: beforeDocument,
    afterSource: afterDocument,
    metaKey: DIFF_META_KEY,
  }) as { merged: { components: { schemas: { __Substitution__: object } } } }
  return result.merged.components.schemas.__Substitution__
}

function buildOneOfPropNode(
  beforeOneOf: object[] | undefined,
  afterOneOf: object[] | undefined,
): JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs {
  const merged = mergeSchemas(
    {
      type: "object",
      properties: {
        plainProp: { type: "string" },
        ...(beforeOneOf ? { oneOfProp: { oneOf: beforeOneOf } } : {}),
      },
    },
    {
      type: "object",
      properties: {
        plainProp: { type: "string" },
        ...(afterOneOf ? { oneOfProp: { oneOf: afterOneOf } } : {}),
      },
    },
  )

  const tree = new JsonSchemaTreeWithDiffsBuilder({
    source: merged,
    materializeDepth: 10,
    diffsMetaKeys: DIFF_META_KEYS,
  }).build()

  const oneOfPropNode = tree.root!.childrenNodes().find((node) => node.key === "oneOfProp")
  expect(oneOfPropNode).toBeDefined()
  expect(isJsonSchemaCombinerOwnerNode(oneOfPropNode!)).toBe(true)
  return oneOfPropNode!
}

describe("resolve-combiner-node-diffs", () => {
  it("does not throw when a whole new array-typed oneOf variant is added alongside unchanged variants", () => {
    const oneOfPropNode = buildOneOfPropNode(
      [{ type: "string" }, { type: "number" }],
      [
        { type: "string" },
        { type: "number" },
        {
          type: "array",
          items: [{ type: "string" }],
          minItems: 0,
          maxItems: 10,
          uniqueItems: true,
        },
      ],
    )

    expect(() => buildCombinerSelectorRowDiff(oneOfPropNode)).not.toThrow()
    expect(() => buildCombinerSelectorRowDiffsSeverities(oneOfPropNode)).not.toThrow()
    expect(() => buildCombinerSelectorRowPresentation(oneOfPropNode)).not.toThrow()

    for (const nestedNode of oneOfPropNode.nestedNodes()) {
      expect(() => buildCombinerSelectorRowPresentation(nestedNode)).not.toThrow()
    }
  })

  it("does not throw when a whole array-typed oneOf variant is removed, leaving other variants unchanged", () => {
    const oneOfPropNode = buildOneOfPropNode(
      [
        { type: "string" },
        { type: "number" },
        {
          type: "array",
          items: [{ type: "string" }],
          minItems: 0,
          maxItems: 10,
          uniqueItems: true,
        },
      ],
      [{ type: "string" }, { type: "number" }],
    )

    expect(() => buildCombinerSelectorRowDiff(oneOfPropNode)).not.toThrow()
    expect(() => buildCombinerSelectorRowDiffsSeverities(oneOfPropNode)).not.toThrow()
    expect(() => buildCombinerSelectorRowPresentation(oneOfPropNode)).not.toThrow()

    for (const nestedNode of oneOfPropNode.nestedNodes()) {
      expect(() => buildCombinerSelectorRowPresentation(nestedNode)).not.toThrow()
    }
  })

  it("does not throw when the whole oneOfProp property (with a nested array variant) is added", () => {
    const oneOfPropNode = buildOneOfPropNode(
      undefined,
      [
        { type: "string" },
        {
          type: "array",
          items: [{ type: "string" }],
          minItems: 0,
          maxItems: 10,
          uniqueItems: true,
        },
      ],
    )

    expect(() => buildCombinerSelectorRowDiffsSeverities(oneOfPropNode)).not.toThrow()
    for (const nestedNode of oneOfPropNode.nestedNodes()) {
      expect(() => buildCombinerSelectorRowPresentation(nestedNode)).not.toThrow()
    }
  })

  it("does not throw when the whole oneOfProp property (with a nested object variant) is removed", () => {
    const oneOfPropNode = buildOneOfPropNode(
      [
        { type: "string" },
        {
          type: "object",
          properties: { prop0: { type: "string" } },
          minProperties: 0,
          maxProperties: 10,
        },
      ],
      undefined,
    )

    expect(() => buildCombinerSelectorRowDiffsSeverities(oneOfPropNode)).not.toThrow()
    for (const nestedNode of oneOfPropNode.nestedNodes()) {
      expect(() => buildCombinerSelectorRowPresentation(nestedNode)).not.toThrow()
    }
  })
})

describe("resolveCombinerSelectorLevelReductionAction", () => {
  it("returns undefined when the combiner owner itself was wholly added (case 2(a), handled upstream by CombinerNodeViewer's outer freeze)", () => {
    const oneOfPropNode = buildOneOfPropNode(
      undefined,
      [{ type: "string" }, { type: "number" }],
    )
    expect(resolveCombinerSelectorLevelReductionAction(oneOfPropNode)).toBeUndefined()
  })

  it("returns undefined when the combiner owner itself was wholly removed (case 2(a), handled upstream by CombinerNodeViewer's outer freeze)", () => {
    const oneOfPropNode = buildOneOfPropNode(
      [{ type: "string" }, { type: "number" }],
      undefined,
    )
    expect(resolveCombinerSelectorLevelReductionAction(oneOfPropNode)).toBeUndefined()
  })

  it("returns DiffAction.add when every nestedNodes() variant was uniformly added while the owner itself stayed untouched (case 2(b))", () => {
    const oneOfPropNode = buildOneOfPropNode([], [{ type: "string" }, { type: "number" }])
    expect(oneOfPropNode.nestedNodes()).toHaveLength(2)
    expect(resolveCombinerSelectorLevelReductionAction(oneOfPropNode)).toBe(DiffAction.add)
  })

  it("returns undefined when nestedNodes() actions are mixed (one variant unchanged/replaced, one added)", () => {
    const oneOfPropNode = buildOneOfPropNode(
      [{ type: "string" }],
      [{ type: "boolean" }, { type: "array", items: [{ type: "string" }] }],
    )
    expect(resolveCombinerSelectorLevelReductionAction(oneOfPropNode)).toBeUndefined()
  })

  it("returns undefined for an owner whose resultant variant list is empty (nothing to compare, not a real uniform-remove signal)", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        properties: {
          plainProp: { type: "string" },
          oneOfProp: { oneOf: [{ type: "string" }, { type: "number" }] },
        },
      },
      {
        type: "object",
        properties: {
          plainProp: { type: "string" },
          oneOfProp: { oneOf: [] },
        },
      },
    )
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      materializeDepth: 10,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()
    const oneOfPropNode = tree.root!.childrenNodes().find((node) => node.key === "oneOfProp")!
    expect(oneOfPropNode).toBeDefined()
    expect(oneOfPropNode.nestedNodes()).toHaveLength(0)
    expect(resolveCombinerSelectorLevelReductionAction(oneOfPropNode)).toBeUndefined()
  })

  it("resolves a nested oneOf-in-oneOf independently per level: outer stays undefined (mixed), inner reduces (all its own variants uniformly added)", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        properties: {
          oneOfProp: { oneOf: [{ type: "string" }, { oneOf: [] }] },
        },
      },
      {
        type: "object",
        properties: {
          oneOfProp: {
            oneOf: [
              { type: "string" },
              { oneOf: [{ type: "number" }, { type: "boolean" }] },
            ],
          },
        },
      },
    )
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      materializeDepth: 10,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()
    const outerCombinerNode = tree.root!.childrenNodes().find((node) => node.key === "oneOfProp")!
    expect(isJsonSchemaCombinerOwnerNode(outerCombinerNode)).toBe(true)
    expect(resolveCombinerSelectorLevelReductionAction(outerCombinerNode)).toBeUndefined()

    const innerCombinerNode = outerCombinerNode.nestedNodes()[1]
    expect(isJsonSchemaCombinerOwnerNode(innerCombinerNode)).toBe(true)
    expect(innerCombinerNode.nestedNodes()).toHaveLength(2)
    expect(resolveCombinerSelectorLevelReductionAction(innerCombinerNode)).toBe(DiffAction.add)
  })
})
