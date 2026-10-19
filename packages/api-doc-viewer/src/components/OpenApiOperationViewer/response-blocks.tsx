import {
  findOpenApiChild,
  isOpenApiContentNode,
  isOpenApiExtensionsNode,
  isOpenApiResponseHeadersNode,
} from "@apihub/utils/openapi/node-type-checkers"
import { getOpenApiMediaTypes, resolveSelectedMediaType } from "@apihub/utils/openapi/view-selection"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/model/openapi/node-visibility"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC } from "react"
import { MarkdownTextRow } from "../shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { OPENAPI_SECTION_ORDER } from "./config/section-order"
import { takeOpenApiSeverities } from "./diff-state"
import { MediaTypeContentSection } from "./MediaTypeContentSection"
import { buildExtensionsBlock } from "./OpenApiExtensionsNodeViewer"
import { OpenApiBlock } from "./OpenApiLayout"
import { OpenApiViewState, useOpenApiViewState } from "./OpenApiViewStateContext"
import { buildParametersBlock } from "./ParametersNodeViewer"

export const RESPONSE_HEADERS_SECTION_TITLE = 'Headers'

type ResponseNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>

/**
 * The sections of one (the selected) response as layout blocks — description, Headers, Extensions,
 * Body in `OPENAPI_SECTION_ORDER.response` order. They are sibling blocks of the Responses level
 * (next to the Responses Object extensions), so the planner separates them like any other blocks.
 * Block ids carry the response id: switching codes remounts the sections. Design: entities/responses.md.
 */
export function buildResponseBlocks(response: ResponseNode, view: OpenApiViewState): OpenApiBlock[] {
  const headers = findOpenApiChild(response, isOpenApiResponseHeadersNode)
  const extensions = findOpenApiChild(response, isOpenApiExtensionsNode)
  const content = findOpenApiChild(response, isOpenApiContentNode)
  const hasBody = getOpenApiMediaTypes(response).length > 0
  const id = (sectionId: string): string => `${response.id}:${sectionId}`

  return OPENAPI_SECTION_ORDER.response.flatMap((sectionId): OpenApiBlock[] => {
    switch (sectionId) {
      case 'responseDescription':
        return OpenApiNodeVisibility.showResponseDescription(response.value())
          ? [{
            id: id(sectionId),
            ...OpenApiBlockEdges.single(OpenApiBlockEdges.descriptionRow(response)),
            payload: () => <ResponseDescriptionRow key={id(sectionId)} node={response} />,
          }]
          : []
      case 'responseHeaders':
        return headers
          ? [buildParametersBlock(id(sectionId), { node: headers, title: RESPONSE_HEADERS_SECTION_TITLE, testId: 'openapi-response-headers-section' })]
          : []
      case 'responseExtensions':
        return extensions
          ? [buildExtensionsBlock(id(sectionId), { node: extensions, variant: TextValueVariant.h3, testId: 'openapi-response-extensions-section' })]
          : []
      case 'responseBody':
        return content && hasBody
          ? [{
            id: id(sectionId),
            ...OpenApiBlockEdges.body(OpenApiBlockEdges.responseBodyTitleRow(content), undefined, resolveSelectedMediaType(response, view.selection)),
            payload: () => <ResponseBodyViewer key={id(sectionId)} node={response} />,
          }]
          : []
      default:
        return []
    }
  })
}

const ResponseDescriptionRow: FC<{ node: ResponseNode }> = ({ node }) => (
  <MarkdownTextRow
    data-precededby={PrecededBy.OPENAPI_ROW}
    value={node.value()?.description ?? ''}
    variant={TextValueVariant.body2}
    diff={OpenApiRowDiffs.NodeLevel.takeRowDiff(node, 'description')}
    diffsSeverities={takeOpenApiSeverities(node)}
  />
)

/** The response Body; its media-type selection is kept per response in the view state. */
const ResponseBodyViewer: FC<{ node: ResponseNode }> = ({ node }) => {
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
    />
  )
}
