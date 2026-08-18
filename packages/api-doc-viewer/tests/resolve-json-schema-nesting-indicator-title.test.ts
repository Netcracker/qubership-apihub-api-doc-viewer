import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import {
  resolveJsonSchemaCombinerNestingIndicatorTitle,
  resolveJsonSchemaPropertyNestingIndicatorTitle,
} from "../src/components/JsonSchemaNextViewer/utils/resolve-json-schema-nesting-indicator-title"

describe("resolve-json-schema-nesting-indicator-title", () => {
  it("resolves property nesting title from schema type label", () => {
    const node = {
      value: () => ({ type: "string", format: "uuid" }),
      meta: () => ({}),
    } as unknown as JsonSchemaTreeNode

    expect(resolveJsonSchemaPropertyNestingIndicatorTitle(node)).toBe("string uuid")
  })

  it("resolves combiner nesting title from first nested branch kind", () => {
    const node = {
      nestedNodes: () => [{ kind: JsonSchemaTreeNodeKinds.ONE_OF }],
    } as unknown as JsonSchemaTreeNode

    expect(resolveJsonSchemaCombinerNestingIndicatorTitle(node)).toBe("oneOf")
  })

  it("returns undefined when combiner branches are absent", () => {
    const node = {
      nestedNodes: () => [],
    } as unknown as JsonSchemaTreeNode

    expect(resolveJsonSchemaCombinerNestingIndicatorTitle(node)).toBeUndefined()
  })
})
