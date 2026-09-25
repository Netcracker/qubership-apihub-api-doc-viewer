import { JsonSchemaTreeBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/builder"
import { TreeNodeComplexityTypes } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import {
  applyCombinerSelection,
  resolveActiveLeafNode,
  resolveCombinerOptionLeafNode,
  resolveCombinerSelectorLevels,
} from "../src/components/JsonSchemaNextViewer/utils/resolve-combiner-selection"
import { resolveCombinerBranchDisplayValue, resolveCombinerLeafStructuralChildren } from "../src/components/JsonSchemaNextViewer/utils/resolve-combiner-display"
import { resolveCombinerOptionTitleSuffix } from "../src/components/JsonSchemaNextViewer/utils/resolve-combiner-node-diffs"
import { isJsonSchemaCombinerOwnerNode } from "../src/components/JsonSchemaNextViewer/utils/node-type-checkers"

function buildCombinerOptionText(node: Parameters<typeof resolveCombinerOptionLeafNode>[0]): string {
  const leaf = resolveCombinerOptionLeafNode(node)
  return resolveJsonSchemaTypeLabel(resolveCombinerBranchDisplayValue(leaf), leaf.meta())
    + resolveCombinerOptionTitleSuffix(node)
}

describe("resolve-combiner-selection", () => {
  const schema = {
    oneOf: [
      { type: "string" },
      {
        type: "object",
        properties: {
          prop1: { type: "string" },
          prop2: { type: "number" },
        },
      },
      {
        anyOf: [
          { type: "number" },
          { type: "boolean" },
        ],
      },
    ],
  }

  const root = new JsonSchemaTreeBuilder({ source: schema, materializeDepth: 5 }).build().root!

  it("builds nested selector levels for oneOf with nested anyOf", () => {
    expect(root.type).toBe(TreeNodeComplexityTypes.COMPLEX)
    expect(isJsonSchemaCombinerOwnerNode(root)).toBe(true)

    const defaultLevels = resolveCombinerSelectorLevels(root, new Map())
    expect(defaultLevels).toHaveLength(1)
    expect(defaultLevels[0]?.selectedNestedNode.id).toBe(root.nestedNodes()[0]?.id)

    const objectBranch = root.nestedNodes()[1]!
    const selections = applyCombinerSelection(root, new Map(), root.id, objectBranch.id)
    const objectLevels = resolveCombinerSelectorLevels(root, selections)
    expect(objectLevels).toHaveLength(1)
    expect(resolveActiveLeafNode(root, selections).id).toBe(objectBranch.id)
    expect(resolveCombinerLeafStructuralChildren(resolveActiveLeafNode(root, selections))).toHaveLength(2)

    const nestedAnyOfBranch = root.nestedNodes()[2]!
    expect(isJsonSchemaCombinerOwnerNode(nestedAnyOfBranch)).toBe(true)

    const nestedSelections = applyCombinerSelection(root, new Map(), root.id, nestedAnyOfBranch.id)
    const nestedLevels = resolveCombinerSelectorLevels(root, nestedSelections)
    expect(nestedLevels).toHaveLength(2)
    expect(nestedLevels[1]?.combinerNode.id).toBe(nestedAnyOfBranch.id)
    expect(nestedLevels[1]?.selectedNestedNode.kind).toBe(JsonSchemaTreeNodeKinds.ANY_OF)
  })

  it("clears stale nested combiner selections when the parent branch changes", () => {
    const nestedAnyOfBranch = root.nestedNodes()[2]!
    const booleanVariant = nestedAnyOfBranch.nestedNodes()[1]!

    let selections = applyCombinerSelection(root, new Map(), root.id, nestedAnyOfBranch.id)
    selections = applyCombinerSelection(root, selections, nestedAnyOfBranch.id, booleanVariant.id)
    expect(selections.get(nestedAnyOfBranch.id)).toBe(booleanVariant.id)

    const objectBranch = root.nestedNodes()[1]!
    selections = applyCombinerSelection(root, selections, root.id, objectBranch.id)
    expect(selections.has(nestedAnyOfBranch.id)).toBe(false)
    expect(resolveActiveLeafNode(root, selections).id).toBe(objectBranch.id)
  })

  it("resolves a combiner option's leaf via the first variant recursively, with a trailing combiner-kind suffix per level", () => {
    // Example 1 from the task: anyOf whose first variant is a simple leaf.
    const oneLevelSchema = {
      anyOf: [
        { type: "number", title: "MyNumber", format: "Money" },
        { type: "boolean" },
      ],
    }
    const oneLevelRoot = new JsonSchemaTreeBuilder({ source: oneLevelSchema, materializeDepth: 5 }).build().root!
    expect(buildCombinerOptionText(oneLevelRoot)).toBe("number(Money)<MyNumber> (anyOf)")

    // Example 2 from the task: anyOf -> first variant is a complex allOf -> first variant is the leaf.
    const twoLevelSchema = {
      anyOf: [
        {
          allOf: [
            { type: "string", title: "MyString", format: "ID" },
          ],
        },
        { type: "number" },
      ],
    }
    const twoLevelRoot = new JsonSchemaTreeBuilder({ source: twoLevelSchema, materializeDepth: 5 }).build().root!
    const allOfBranch = twoLevelRoot.nestedNodes()[0]!
    expect(isJsonSchemaCombinerOwnerNode(allOfBranch)).toBe(true)

    // First-level option (points to anyOf) - suffix reflects its own immediate combiner kind.
    expect(buildCombinerOptionText(twoLevelRoot)).toBe("string(ID)<MyString> (anyOf)")
    // Second-level option (the allOf variant itself) - same resolved leaf, different suffix.
    expect(buildCombinerOptionText(allOfBranch)).toBe("string(ID)<MyString> (allOf)")
  })
})
