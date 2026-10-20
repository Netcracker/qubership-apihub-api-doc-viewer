import {
  findOpenApiChild,
  getOpenApiChildren,
  isOpenApiParametersNode,
  isOpenApiRequestBodyNode,
} from "@apihub/utils/openapi/node-type-checkers"
import { getOpenApiMediaTypes, resolveSelectedMediaType } from "@apihub/utils/openapi/view-selection"
import { OpenApiDisplayLabels } from "@netcracker/qubership-apihub-next-data-model/model/openapi/display/labels"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/model/openapi/node-visibility"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { OpenApiParameterLocation } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-value"
import { FC } from "react"
import { MarkdownTextRow } from "../shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import { OPENAPI_SECTION_ORDER, OpenApiSectionId } from "./config/section-order"
import { takeOpenApiSeverities } from "./diff-state"
import { MediaTypeContentSection } from "./MediaTypeContentSection"
import { OpenApiBlock, OpenApiLayout } from "./OpenApiLayout"
import { isOpenApiSectionExpanded, OpenApiViewState, useOpenApiViewState } from "./OpenApiViewStateContext"
import { buildParametersBlock } from "./ParametersNodeViewer"

export const REQUEST_SECTION_TITLE = 'Request'

const PARAMETER_SECTION_LOCATIONS: Readonly<Partial<Record<OpenApiSectionId, OpenApiParameterLocation>>> = {
  pathParameters: 'path',
  queryParameters: 'query',
  headerParameters: 'header',
  cookieParameters: 'cookie',
}

type RequestNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST>
type RequestBodyNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST_BODY>

/** The Request section as a layout block: its h2 title row, then its sub-blocks - elements of one level. */
export function buildRequestBlock(node: RequestNode, view: OpenApiViewState): OpenApiBlock {
  const children: [OpenApiBlock, ...OpenApiBlock[]] = [
    { id: 'title', ...OpenApiBlockEdges.single(OpenApiBlockEdges.sectionTitleRow(node)), payload: () => <RequestTitleRow key="title" node={node} /> },
    ...buildRequestChildBlocks(node, view),
  ]
  return {
    id: 'request',
    ...OpenApiBlockEdges.container(children),
    payload: () => <RequestNodeViewer key="request" blocks={children} />,
  }
}

/** Parameter groups and the Body, in config order. */
function buildRequestChildBlocks(node: RequestNode, view: OpenApiViewState): OpenApiBlock[] {
  const groups = getOpenApiChildren(node, isOpenApiParametersNode)
  const requestBody = findOpenApiChild(node, isOpenApiRequestBodyNode)
  return OPENAPI_SECTION_ORDER.request.flatMap((sectionId): OpenApiBlock[] => {
    const location = PARAMETER_SECTION_LOCATIONS[sectionId]
    if (location) {
      const group = groups.find(candidate => candidate.value()?.location === location)
      return group
        ? [buildParametersBlock(sectionId, {
          node: group,
          title: OpenApiDisplayLabels.parameterGroupTitle(location),
          testId: `openapi-${location}-parameters-section`,
        }, view)]
        : []
    }
    return requestBody ? [buildRequestBodyBlock(sectionId, requestBody, view)] : []
  })
}

function buildRequestBodyBlock(id: string, node: RequestBodyNode, view: OpenApiViewState): OpenApiBlock {
  const description = OpenApiNodeVisibility.showRequestBodyDescription(node.value()) ? OpenApiBlockEdges.descriptionRow(node) : undefined
  return {
    id,
    ...OpenApiBlockEdges.body(OpenApiBlockEdges.requestBodyTitleRow(node), description, resolveSelectedMediaType(node, view.selection), { expanded: isOpenApiSectionExpanded(view, node.id) }),
    payload: () => <RequestBodyNodeViewer key={id} node={node} />,
  }
}

type RequestNodeViewerProps = {
  /** Its elements (title row, sub-blocks), built by `buildRequestBlock` (the parent needs them for the Request's own edges). */
  blocks: readonly OpenApiBlock[]
}

/** "Request" (h2): parameter groups and the Body in config order. Design: entities/parameters.md, entities/request-body.md. */
export const RequestNodeViewer: FC<RequestNodeViewerProps> = ({ blocks }) => (
  <div data-testid="openapi-request-section" className="flex flex-col">
    <OpenApiLayout blocks={blocks} level="request" />
  </div>
)

const RequestTitleRow: FC<{ node: RequestNode }> = ({ node }) => (
  <TitleRow
    data-precededby={PrecededBy.OPENAPI_ROW}
    value={REQUEST_SECTION_TITLE}
    expandable={false}
    variant={TextValueVariant.h2}
    diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
    diffsSeverities={takeOpenApiSeverities(node)}
  />
)

const RequestBodyNodeViewer: FC<{ node: RequestBodyNode }> = ({ node }) => {
  const value = node.value()
  const severities = takeOpenApiSeverities(node)
  const { selection, select } = useOpenApiViewState()

  return (
    <MediaTypeContentSection
      testId="openapi-request-body-section"
      optionTestIdPrefix="request-media-type"
      mediaTypes={getOpenApiMediaTypes(node)}
      selectedId={resolveSelectedMediaType(node, selection)?.id}
      onSelect={(mediaTypeId) => select(node.id, mediaTypeId)}
      headerDiff={OpenApiRowDiffs.RequestBody.takeHeaderRowDiff(node)}
      diffsSeverities={severities}
      isRequiredOnSide={(side) => OpenApiRowDiffs.RequestBody.isRequiredStarVisibleOnSide(node, side)}
      requiredTagDiff={OpenApiRowDiffs.RequestBody.takeRequiredTagDiff(node)}
      titleEdge={OpenApiBlockEdges.requestBodyTitleRow(node)}
      sectionNodeId={node.id}
      description={OpenApiNodeVisibility.showRequestBodyDescription(value)
        ? {
          edge: OpenApiBlockEdges.descriptionRow(node),
          render: () => (
            <MarkdownTextRow
              data-precededby={PrecededBy.OPENAPI_ROW}
              value={value?.description ?? ''}
              variant={TextValueVariant.body2}
              diff={OpenApiRowDiffs.NodeLevel.takeRowDiff(node, 'description')}
              diffsSeverities={severities}
            />
          ),
        }
        : undefined}
    />
  )
}
