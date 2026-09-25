import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import {
  resolveJsonSchemaCombinerNestingIndicatorTitle,
} from "../src/components/JsonSchemaNextViewer/utils/resolve-json-schema-nesting-indicator-title"

describe("resolve-json-schema-nesting-indicator-title", () => {
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
