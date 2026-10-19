import { NODE_LEVEL_DIFF_KEY } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { isOpenApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/guards/tree-node"
import { FC } from "react"
import { ExtensionsSectionContent, ExtensionsSectionTitleRow } from "../shared-components/ExtensionsSection/ExtensionsSection"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { OpenApiBlock, OpenApiLayout } from "./OpenApiLayout"

type ExtensionsNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>

type OpenApiExtensionsNodeViewerProps = {
  node: ExtensionsNode
  variant: TextValueVariant
  testId: string
}

/** An Extensions section as a layout block: its title row and its JSO viewer, two elements. */
export function buildExtensionsBlock(id: string, props: OpenApiExtensionsNodeViewerProps): OpenApiBlock {
  const { node, variant, testId } = props
  const elements: [OpenApiBlock, OpenApiBlock] = [
    { id: 'title', ...OpenApiBlockEdges.single(OpenApiBlockEdges.sectionTitleRow(node)), payload: () => <ExtensionsTitleRow key="title" node={node} variant={variant} /> },
    { id: 'values', ...OpenApiBlockEdges.single(OpenApiBlockEdges.nested(node)), payload: () => <ExtensionsValues key="values" node={node} /> },
  ]
  return {
    id,
    ...OpenApiBlockEdges.container(elements),
    payload: () => (
      <div key={id} data-testid={testId} className="flex flex-col">
        <OpenApiLayout blocks={elements} level="section" />
      </div>
    ),
  }
}

/** Operation (h2), Response (h3) and Responses Object (h3) extensions title. */
const ExtensionsTitleRow: FC<{ node: ExtensionsNode, variant: TextValueVariant }> = ({ node, variant }) => (
  <ExtensionsSectionTitleRow
    data-precededby={PrecededBy.OPENAPI_ROW}
    variant={variant}
    titleRowDiffProps={{
      diff: OpenApiRowDiffs.Section.takeHeaderRowDiff(node),
      diffsSeverities: takeOpenApiSeverities(node),
      highlightingMode: isOpenApiTreeNodeWithDiffs(node) ? node.diffs[NODE_LEVEL_DIFF_KEY]?.highlightingMode : undefined,
    }}
  />
)

/** The `x-*` values (JSO viewer); its first row keeps the nested-viewer inset. */
const ExtensionsValues: FC<{ node: ExtensionsNode }> = ({ node }) => (
  <ExtensionsSectionContent rawValues={node.value()?.rawValues ?? {}} contentPrecededBy={PrecededBy.OPENAPI_NESTED_VIEWER_START} />
)
