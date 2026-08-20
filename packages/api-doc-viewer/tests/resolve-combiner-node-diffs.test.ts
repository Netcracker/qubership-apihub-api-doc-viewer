import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY, DiffAction, apiDiff } from "@netcracker/qubership-apihub-api-diff"
import { HighlightVariant, NODE_LEVEL_DIFF_KEY } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaSpecWithDiffsTransformer } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/shared/json-schema-spec-with-diffs-transformer"
import { JsonSchemaTreeWithDiffsBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree-with-diffs/builder"
import { createBuildingServiceLogger } from "@netcracker/qubership-apihub-next-data-model/loggers"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import {
  buildCombinerSelectorOption,
  buildCombinerSelectorRowDiff,
  buildCombinerSelectorRowDiffsSeverities,
  buildCombinerSelectorRowPresentation,
  hasCombinerOwnerChanges,
} from "../src/components/JsonSchemaNextViewer/utils/resolve-combiner-node-diffs"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"

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
  const diffResult = apiDiff(beforeDocument, afterDocument, {
    beforeSource: beforeDocument,
    afterSource: afterDocument,
    metaKey: DIFF_META_KEY,
  }) as { merged: { components: { schemas: { __Substitution__: object } } } }
  return diffResult.merged.components.schemas.__Substitution__
}

function buildTree(beforeSchema: object, afterSchema: object) {
  const merged = mergeSchemas(beforeSchema, afterSchema)
  const transformer = new JsonSchemaSpecWithDiffsTransformer(createBuildingServiceLogger(), DIFF_META_KEYS)
  transformer.transformSourceToSchemaWithDiffs(merged)
  return new JsonSchemaTreeWithDiffsBuilder({ source: merged, diffsMetaKeys: DIFF_META_KEYS }).build()
}

describe("resolve-combiner-node-diffs", () => {
  it("highlights selector row and styles wholly added variant without round marker", () => {
    const beforeSchema = {
      type: "object",
      properties: {
        status: {
          oneOf: [
            { type: "string" },
            { type: "number" },
          ],
        },
      },
    }
    const afterSchema = {
      type: "object",
      properties: {
        status: {
          oneOf: [
            { type: "string" },
            { type: "number" },
            { type: "boolean" },
          ],
        },
      },
    }

    const tree = buildTree(beforeSchema, afterSchema)
    const status = tree.root!.childrenNodes().find((node) => node.key === "status")!

    expect(isJsonSchemaTreeNodeWithDiffs(status)).toBe(true)
    expect(hasCombinerOwnerChanges(status)).toBe(true)

    const selectorRowDiff = buildCombinerSelectorRowDiff(status)
    expect(selectorRowDiff?.data.action).toBe(DiffAction.replace)
    expect(selectorRowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(selectorRowDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)

    const selectorRowSeverities = buildCombinerSelectorRowDiffsSeverities(status)
    expect(selectorRowSeverities?.[NodeDiffsSeverityPlacemennt.TitleRow]?.type).toBeDefined()

    const selectorRowPresentation = buildCombinerSelectorRowPresentation(status)
    expect(selectorRowPresentation.selectorRowDiff?.data.action).toBe(DiffAction.replace)
    expect(selectorRowPresentation.diffsSeverities?.[NodeDiffsSeverityPlacemennt.TitleRow]?.type).toBeDefined()

    const addedVariant = status.nestedNodes()[2]!
    const selectorOption = buildCombinerSelectorOption(addedVariant, 2)
    expect(selectorOption.diffs?.[NODE_LEVEL_DIFF_KEY]?.data.action).toBe(DiffAction.add)
    expect(selectorOption.diffs?.[NODE_LEVEL_DIFF_KEY]?.styles.after.borderShadowColor)
      .toBe(HighlightVariant.Green)
    expect(selectorOption.diffsSummary).toBeUndefined()
    expect(selectorOption.descendantDiffsSummary).toBeUndefined()
  })

  it("highlights selector row for nested content edits and exposes round-marker summary on unchanged variant option", () => {
    const beforeSchema = {
      type: "object",
      properties: {
        value: {
          oneOf: [
            {
              type: "object",
              properties: {
                nestedChanged: { type: "string", description: "Before" },
              },
            },
            { type: "number" },
          ],
        },
      },
    }
    const afterSchema = {
      type: "object",
      properties: {
        value: {
          oneOf: [
            {
              type: "object",
              properties: {
                nestedChanged: { type: "string", description: "After" },
              },
            },
            { type: "number" },
          ],
        },
      },
    }

    const tree = buildTree(beforeSchema, afterSchema)
    const value = tree.root!.childrenNodes().find((node) => node.key === "value")!

    expect(hasCombinerOwnerChanges(value)).toBe(true)
    expect(buildCombinerSelectorRowDiff(value)?.data.action).toBe(DiffAction.replace)
    expect(buildCombinerSelectorRowDiffsSeverities(value)?.[NodeDiffsSeverityPlacemennt.TitleRow]?.type)
      .toBeDefined()

    const objectVariant = value.nestedNodes()[0]!
    const selectorOption = buildCombinerSelectorOption(objectVariant, 0)
    expect((selectorOption.diffsSummary?.size ?? 0) + (selectorOption.descendantDiffsSummary?.size ?? 0))
      .toBeGreaterThan(0)
  })
})
