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
import { buildCollapsibleSectionElements, OpenApiSectionTitleRowProps, useOpenApiSectionTitleRowProps } from "./CollapsibleSection"
import { takeOpenApiSeverities } from "./diff-state"
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

type ExtensionsTitleRowProps = { node: ExtensionsNode, variant: TextValueVariant }

/** Operation (h2), Response (h3) and Responses Object (h3) extensions title. */
const ExtensionsTitleRow: FC<ExtensionsTitleRowProps & { section?: OpenApiSectionTitleRowProps }> = ({ node, variant, section }) => (
  <ExtensionsSectionTitleRow
    data-precededby={PrecededBy.OPENAPI_ROW}
    variant={variant}
    section={section}
    titleRowDiffProps={{
      diff: OpenApiRowDiffs.Section.takeHeaderRowDiff(node),
      diffsSeverities: takeOpenApiSeverities(node),
      highlightingMode: isOpenApiTreeNodeWithDiffs(node) ? node.diffs[NODE_LEVEL_DIFF_KEY]?.highlightingMode : undefined,
    }}
  />
)

/** The same title with the section expander (expanded state from the operation view state). */
const CollapsibleExtensionsTitleRow: FC<ExtensionsTitleRowProps> = (props) => {
  const section = useOpenApiSectionTitleRowProps(props.node.id)
  return <ExtensionsTitleRow {...props} section={section} />
}

/** The `x-*` values (JSO viewer); its first row keeps the nested-viewer inset. */
const ExtensionsValues: FC<{ node: ExtensionsNode }> = ({ node }) => (
  <ExtensionsSectionContent rawValues={node.value()?.rawValues ?? {}} contentPrecededBy={PrecededBy.OPENAPI_NESTED_VIEWER_START} />
)
