import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { buildCollapsibleSectionElements } from "./CollapsibleSection"
import { CollapsibleExtensionsTitleRow, ExtensionsTitleRow, ExtensionsValues } from "./OpenApiExtensionsNodeViewer"
import { OpenApiBlock, OpenApiLayout } from "./OpenApiLayout"
import { OpenApiViewState } from "./OpenApiViewStateContext"

type ExtensionsNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>

type OpenApiExtensionsNodeViewerProps = {
  node: ExtensionsNode
  variant: TextValueVariant
  testId: string
}

/**
 * An Extensions section as a layout block: its title row and its JSO viewer, two elements. Given the
 * view state it is a collapsible 2nd-level section (response, Responses Object extensions); the
 * operation's own (h2) Extensions are not collapsible.
 */
export function buildExtensionsBlock(id: string, props: OpenApiExtensionsNodeViewerProps, collapsibleIn?: OpenApiViewState): OpenApiBlock {
  const { node, variant, testId } = props
  const title: OpenApiBlock = {
    id: 'title',
    ...OpenApiBlockEdges.single(OpenApiBlockEdges.sectionTitleRow(node)),
    payload: () => collapsibleIn
      ? <CollapsibleExtensionsTitleRow key="title" node={node} variant={variant} />
      : <ExtensionsTitleRow key="title" node={node} variant={variant} />,
  }
  const values: OpenApiBlock = {
    id: 'values',
    ...OpenApiBlockEdges.single(OpenApiBlockEdges.nested(node)),
    payload: () => <ExtensionsValues key="values" node={node} />,
  }
  const elements: [OpenApiBlock, ...OpenApiBlock[]] = collapsibleIn
    ? buildCollapsibleSectionElements(title, [values], collapsibleIn, node.id)
    : [title, values]
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
