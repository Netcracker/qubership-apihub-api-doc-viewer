import { findOpenApiChild, isOpenApiContentNode } from "@apihub/utils/openapi/node-type-checkers"
import { getOpenApiMediaTypes, resolveSelectedMediaType } from "@apihub/utils/openapi/view-selection"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC } from "react"
import { MarkdownTextRow } from "../shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "./diff-state"
import { MediaTypeContentSection } from "./MediaTypeContentSection"
import { useOpenApiViewState } from "./OpenApiViewStateContext"

export type ResponseNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>

type ResponseNodeProps = {
  node: ResponseNode
}

/** The response Body; its media-type selection is kept per response in the view state. Layout blocks: `response-blocks.tsx`. */
export const ResponseBodyViewer: FC<ResponseNodeProps> = ({ node }) => {
  const { selection, select } = useOpenApiViewState()
  const content = findOpenApiChild(node, isOpenApiContentNode)
  return (
    <MediaTypeContentSection
      testId="openapi-response-body-section"
      optionTestIdPrefix="response-media-type"
      mediaTypes={getOpenApiMediaTypes(node)}
      selectedId={resolveSelectedMediaType(node, selection)?.id}
      onSelect={(mediaTypeId) => select(node.id, mediaTypeId)}
      headerDiff={content ? OpenApiRowDiffs.ResponseBody.takeHeaderRowDiff(content) : undefined}
      diffsSeverities={content ? takeOpenApiSeverities(content) : undefined}
      titleEdge={content ? OpenApiBlockEdges.responseBodyTitleRow(content) : OpenApiBlockEdges.row({})}
      sectionNodeId={content?.id ?? `${node.id}:body`}
    />
  )
}

/** The response description row. */
export const ResponseDescriptionRow: FC<ResponseNodeProps> = ({ node }) => (
  <MarkdownTextRow
    data-precededby={PrecededBy.SEPARATOR_LAYOUT_ROW}
    value={node.value()?.description ?? ''}
    variant={TextValueVariant.body2}
    diff={OpenApiRowDiffs.NodeLevel.takeRowDiff(node, 'description')}
    diffsSeverities={takeOpenApiSeverities(node)}
  />
)
