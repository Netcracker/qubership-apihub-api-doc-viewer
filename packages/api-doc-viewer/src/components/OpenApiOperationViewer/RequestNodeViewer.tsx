import {
  findOpenApiChild,
  getOpenApiChildren,
  isOpenApiContentNode,
  isOpenApiMediaTypeNode,
  isOpenApiParametersNode,
  isOpenApiRequestBodyNode,
} from "@apihub/utils/openapi/node-type-checkers"
import { OpenApiDisplayLabels } from "@netcracker/qubership-apihub-next-data-model/model/openapi/display/labels"
import { OpenApiNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/model/openapi/node-visibility"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { OpenApiParameterLocation } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-value"
import { FC, useEffect, useState } from "react"
import { MarkdownTextRow } from "../shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { OPENAPI_SECTION_ORDER, OpenApiSectionId } from "./config/section-order"
import { takeOpenApiSeverities } from "./diff-state"
import { MediaTypeContentSection } from "./MediaTypeContentSection"
import { ParametersNodeViewer, resolveParametersTail } from "./ParametersNodeViewer"
import { chainSectionsPrecededBy, isBlockClosing, OpenApiSectionEntry, OpenApiSectionTail, resolveSectionsTail } from "./section-preceded-by"

export const REQUEST_SECTION_TITLE = 'Request'

const PARAMETER_SECTION_LOCATIONS: Readonly<Partial<Record<OpenApiSectionId, OpenApiParameterLocation>>> = {
  pathParameters: 'path',
  queryParameters: 'query',
  headerParameters: 'header',
  cookieParameters: 'cookie',
}

type RequestNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST>

type RequestNodeViewerProps = WithPrecededByProps & {
  node: RequestNode
  /** What the row after the Request section assumes about its end (see `OpenApiSectionEntry`). */
  closing: OpenApiSectionTail
}

/** Parameter groups and the Body of the request, in config order. */
function buildRequestSections(node: RequestNode): OpenApiSectionEntry[] {
  const groups = getOpenApiChildren(node, isOpenApiParametersNode)
  const requestBody = findOpenApiChild(node, isOpenApiRequestBodyNode)
  return OPENAPI_SECTION_ORDER.request.flatMap((sectionId): OpenApiSectionEntry[] => {
    const location = PARAMETER_SECTION_LOCATIONS[sectionId]
    if (location) {
      const group = groups.find(candidate => candidate.value()?.location === location)
      return group
        ? [{
          id: sectionId,
          tail: resolveParametersTail(group),
          render: (sectionPrecededBy, closing) => (
            <ParametersNodeViewer
              key={sectionId}
              data-precededby={sectionPrecededBy}
              closing={closing}
              node={group}
              title={OpenApiDisplayLabels.parameterGroupTitle(location)}
              testId={`openapi-${location}-parameters-section`}
            />
          ),
        }]
        : []
    }
    return requestBody
      ? [{
        id: sectionId,
        // The selected media type (view state) decides whether a schema ends the body.
        tail: PrecededBy.OPENAPI_AFTER_NESTED_VIEWER,
        render: (sectionPrecededBy, closing) => (
          <RequestBodyNodeViewer key={sectionId} data-precededby={sectionPrecededBy} closing={closing} node={requestBody} />
        ),
      }]
      : []
  })
}

/** How the Request section ends (its last sub-section, or its own title row when it has none). */
export function resolveRequestTail(node: RequestNode): OpenApiSectionTail {
  return resolveSectionsTail(buildRequestSections(node))
}

/** "Request" (h2): parameter groups and the Body in config order. Design: entities/parameters.md, entities/request-body.md. */
export const RequestNodeViewer: FC<RequestNodeViewerProps> = (props) => {
  const { node, closing, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const sectionEntries = buildRequestSections(node)
  // The h2 title row heads the first sub-block (in-block gap); sub-blocks are a block gap apart.
  const sections = chainSectionsPrecededBy(sectionEntries, PrecededBy.OPENAPI_BLOCK_ROW, closing)

  return (
    <div data-testid="openapi-request-section" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        data-block-last-row={sectionEntries.length === 0 && isBlockClosing(closing)}
        value={REQUEST_SECTION_TITLE}
        expandable={false}
        variant={TextValueVariant.h2}
        diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
        diffsSeverities={takeOpenApiSeverities(node)}
      />
      {sections}
    </div>
  )
}

type RequestBodyNodeViewerProps = WithPrecededByProps & {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST_BODY>
  closing: OpenApiSectionTail
}

const RequestBodyNodeViewer: FC<RequestBodyNodeViewerProps> = (props) => {
  const { node, closing, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const value = node.value()
  const content = findOpenApiChild(node, isOpenApiContentNode)
  const mediaTypes = getOpenApiChildren(content, isOpenApiMediaTypeNode)
  const severities = takeOpenApiSeverities(node)
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
  useEffect(() => setSelectedId(undefined), [node])

  return (
    <MediaTypeContentSection
      precededBy={precededBy ?? PrecededBy.OPENAPI_BLOCK_START}
      closing={closing}
      testId="openapi-request-body-section"
      optionTestIdPrefix="request-media-type"
      mediaTypes={mediaTypes}
      selectedId={selectedId}
      onSelect={setSelectedId}
      headerDiff={OpenApiRowDiffs.RequestBody.takeHeaderRowDiff(node)}
      diffsSeverities={severities}
      isRequiredOnSide={(side) => OpenApiRowDiffs.RequestBody.isRequiredStarVisibleOnSide(node, side)}
      requiredTagDiff={OpenApiRowDiffs.RequestBody.takeRequiredTagDiff(node)}
      renderDescription={OpenApiNodeVisibility.showRequestBodyDescription(value)
        ? (spacing) => (
          <MarkdownTextRow
            {...spacing}
            value={value?.description ?? ''}
            variant={TextValueVariant.body2}
            diff={OpenApiRowDiffs.NodeLevel.takeRowDiff(node, 'description')}
            diffsSeverities={severities}
          />
        )
        : undefined}
    />
  )
}
