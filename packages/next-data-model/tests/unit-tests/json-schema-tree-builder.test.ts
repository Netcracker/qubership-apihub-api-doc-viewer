import { JsonSchemaTreeBuilder } from "../../src/building-service/json-schema/tree/builder"
import { JsonSchemaTreeNodeKinds } from "../../src/model/json-schema/types/node-kind"
import { TreeNodeComplexityTypes } from "../../src/model/abstract/tree/tree-node.interface"
import { jsonSchemaHasOwnChildren } from "../../src/shared/json-schema/has-own-children"
import { simplifyConsole } from "../helpers/simplify-console"

describe("JsonSchemaTreeBuilder", () => {
  simplifyConsole()

  it("builds a simple object schema with property nodes", () => {
    const schema = {
      type: "object",
      title: "Person",
      properties: {
        name: {
          type: "string",
          description: "Full name",
        },
        age: {
          type: "integer",
        },
      },
      required: ["name"],
    }

    const tree = new JsonSchemaTreeBuilder({ source: schema }).build()

    expect(tree.root).toBeDefined()
    expect(tree.root!.kind).toBe(JsonSchemaTreeNodeKinds.ROOT)
    expect(tree.root!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
    expect(tree.root!.value()?.type).toBe("object")
    expect(tree.root!.value()?.title).toBe("Person")

    const propertyNodes = tree.root!.childrenNodes()
    expect(propertyNodes).toHaveLength(2)

    const nameNode = propertyNodes.find((node) => node.key === "name")
    const ageNode = propertyNodes.find((node) => node.key === "age")

    expect(nameNode).toBeDefined()
    expect(nameNode!.kind).toBe(JsonSchemaTreeNodeKinds.PROPERTY)
    expect(nameNode!.value()?.type).toBe("string")
    expect(nameNode!.meta()?.required).toBe(true)
    expect(nameNode!.value()?.description).toBe("Full name")

    expect(ageNode).toBeDefined()
    expect(ageNode!.kind).toBe(JsonSchemaTreeNodeKinds.PROPERTY)
    expect(ageNode!.value()?.type).toBe("integer")
    expect(ageNode!.meta()?.required).toBeFalsy()
  })

  it("resolves node key from title when present", () => {
    const schema = {
      type: "object",
      properties: {
        internalKey: {
          type: "string",
          title: "Display Title",
        },
      },
    }

    const tree = new JsonSchemaTreeBuilder({ source: schema }).build()
    const propertyNode = tree.root!.childrenNodes()[0]

    expect(propertyNode.key).toBe("Display Title")
  })

  it("creates complex nodes for combiner schemas", () => {
    const schema = {
      oneOf: [
        { type: "string" },
        { type: "number" },
      ],
    }

    const tree = new JsonSchemaTreeBuilder({ source: schema }).build()

    expect(tree.root!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
    expect(tree.root!.kind).toBe(JsonSchemaTreeNodeKinds.ROOT)
    expect(tree.root!.nestedNodes()).toHaveLength(2)
  })

  it("hasOwnChildren matches children after full materialization", () => {
    const cases: { fragment: Record<string, unknown>; expectChildren: boolean }[] = [
      { fragment: { type: "string", minLength: 1 }, expectChildren: false },
      { fragment: { type: "object" }, expectChildren: false },
      {
        fragment: {
          type: "object",
          properties: { name: { type: "string" } },
        },
        expectChildren: true,
      },
      {
        fragment: {
          type: "array",
          items: { type: "string" },
        },
        expectChildren: true,
      },
      {
        fragment: {
          oneOf: [{ type: "string" }, { type: "number" }],
        },
        expectChildren: true,
      },
    ]

    for (const { fragment, expectChildren } of cases) {
      expect(jsonSchemaHasOwnChildren(fragment, undefined)).toBe(expectChildren)

      const tree = new JsonSchemaTreeBuilder({ source: fragment }).build()
      const root = tree.root!
      const hasMaterializedChildren = root.childrenNodes().length > 0 || root.nestedNodes().length > 0
      expect(hasMaterializedChildren).toBe(expectChildren)
    }
  })

  it("defers nested properties when materializeDepth is exceeded", () => {
    const schema = {
      type: "object",
      properties: {
        outer: {
          type: "object",
          properties: {
            inner: { type: "string" },
          },
        },
      },
    }

    const builder = new JsonSchemaTreeBuilder({ source: schema, materializeDepth: 2 })
    const tree = builder.build()
    const outer = tree.root!.childrenNodes().find((node) => node.key === "outer")!

    expect(outer.childrenNodes()).toHaveLength(0)

    builder.materializeChildren(outer, 2)
    expect(outer.childrenNodes()).toHaveLength(1)
    expect(outer.childrenNodes()[0].key).toBe("inner")
  })
})
