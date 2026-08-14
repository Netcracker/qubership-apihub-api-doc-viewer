import {
  DETAILED_DISPLAY_MODE,
  SIMPLE_DISPLAY_MODE,
} from "../../src/model/abstract/display-mode"
import {
  resolvePlainPropertyNodeVisibility,
  resolvePlainPropertyIsExpandable,
  resolvePlainPropertyInitiallyExpanded,
} from "../../src/building-service/json-schema/tree/node-visibility-data/kind-property"
import {
  isPlainCombinerNodeKind,
  resolvePlainCombinerNodeVisibility,
} from "../../src/building-service/json-schema/tree/node-visibility-data/kind-combiner"
import { JsonSchemaTreeNodeKinds } from "../../src/model/json-schema/types/node-kind"
import { TreeNodeComplexityTypes } from "../../src/model/abstract/tree/tree-node.interface"

function makePropertyNode(value: Record<string, unknown> | null, children: unknown[] = []) {
  return {
    kind: JsonSchemaTreeNodeKinds.PROPERTY,
    isCycle: false,
    value: () => value,
    childrenNodes: () => children,
  }
}

function makeCombinerNode(kind: typeof JsonSchemaTreeNodeKinds.ONE_OF, nested: unknown[] = [], isCycle = false) {
  return {
    kind,
    isCycle,
    type: TreeNodeComplexityTypes.COMPLEX,
    nestedNodes: () => nested,
    childrenNodes: () => [],
  }
}

describe("plain JSON Schema property node visibility", () => {
  it("shows only the title row in simple display mode", () => {
    const node = makePropertyNode({
      type: "string",
      description: "note",
      default: "x",
      enum: ["a"],
      examples: [1],
    })

    expect(resolvePlainPropertyNodeVisibility(node as never, SIMPLE_DISPLAY_MODE)).toEqual({
      showDescription: false,
      showDefaultRow: false,
      showExamplesRow: false,
      showEnumValuesRow: false,
      showValidationsSection: false,
      showExtensionsRow: false,
      showContentSection: false,
      showAnyAdditionalInfoRow: false,
    })
  })

  it("shows description and additional info rows in detailed display mode", () => {
    const node = makePropertyNode({
      type: "string",
      description: "note",
      default: "x",
      enum: ["a"],
      minLength: 1,
    })

    expect(resolvePlainPropertyNodeVisibility(node as never, DETAILED_DISPLAY_MODE)).toEqual({
      showDescription: true,
      showDefaultRow: true,
      showExamplesRow: false,
      showEnumValuesRow: true,
      showValidationsSection: true,
      showExtensionsRow: false,
      showContentSection: true,
      showAnyAdditionalInfoRow: true,
    })
  })

  it("marks empty leaf nodes as initially expanded and non-expandable", () => {
    const node = makePropertyNode({ type: "string" })

    expect(resolvePlainPropertyIsExpandable(node as never)).toBe(false)
    expect(resolvePlainPropertyInitiallyExpanded(node as never)).toBe(true)
  })

  it("marks nodes with children as expandable but not auto-expanded when children exist", () => {
    const child = { key: "child" }
    const node = makePropertyNode({ type: "object" }, [child])

    expect(resolvePlainPropertyIsExpandable(node as never)).toBe(true)
    expect(resolvePlainPropertyInitiallyExpanded(node as never)).toBe(false)
  })
})

describe("plain JSON Schema combiner node visibility", () => {
  it("shows selector when multiple nested options exist", () => {
    const node = makeCombinerNode(JsonSchemaTreeNodeKinds.ONE_OF, [{ id: "a" }, { id: "b" }])

    expect(resolvePlainCombinerNodeVisibility(node as never)).toEqual({
      showSelector: true,
      showSubheader: true,
      isExpandable: true,
      initiallyExpanded: true,
    })
  })

  it("hides selector for a single nested option", () => {
    const node = makeCombinerNode(JsonSchemaTreeNodeKinds.ANY_OF, [{ id: "a" }])

    expect(resolvePlainCombinerNodeVisibility(node as never).showSelector).toBe(false)
    expect(resolvePlainCombinerNodeVisibility(node as never).showSubheader).toBe(true)
  })

  it("recognises combiner node kinds", () => {
    expect(isPlainCombinerNodeKind(JsonSchemaTreeNodeKinds.ONE_OF)).toBe(true)
    expect(isPlainCombinerNodeKind(JsonSchemaTreeNodeKinds.ALL_OF)).toBe(true)
    expect(isPlainCombinerNodeKind(JsonSchemaTreeNodeKinds.ANY_OF)).toBe(true)
    expect(isPlainCombinerNodeKind(JsonSchemaTreeNodeKinds.PROPERTY)).toBe(false)
  })
})
