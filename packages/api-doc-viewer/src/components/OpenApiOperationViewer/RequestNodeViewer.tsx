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
import { ParametersNodeViewer } from "./ParametersNodeViewer"
import { chainSectionsPrecededBy, OpenApiSectionEntry } from "./section-preceded-by"

export const REQUEST_SECTION_TITLE = 'Request'

const PARAMETER_SECTION_LOCATIONS: Readonly<Partial<Record<OpenApiSectionId, OpenApiParameterLocation>>> = {
  pathParameters: 'path',
  queryParameters: 'query',
  headerParameters: 'header',
  cookieParameters: 'cookie',
}

type RequestNodeViewerProps = WithPrecededByProps & {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST>
}

/** "Request" (h2): parameter groups and the Body in config order. Design: entities/parameters.md, entities/request-body.md. */
export const RequestNodeViewer: FC<RequestNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const groups = getOpenApiChildren(node, isOpenApiParametersNode)
  const requestBody = findOpenApiChild(node, isOpenApiRequestBodyNode)

  const sections = chainSectionsPrecededBy(
    OPENAPI_SECTION_ORDER.request.flatMap((sectionId): OpenApiSectionEntry[] => {
      const location = PARAMETER_SECTION_LOCATIONS[sectionId]
      if (location) {
        const group = groups.find(candidate => candidate.value()?.location === location)
        return group
          ? [{
            id: sectionId,
            tail: PrecededBy.JSON_SCHEMA_VIEWER,
            render: (sectionPrecededBy) => (
              <ParametersNodeViewer
                key={sectionId}
                data-precededby={sectionPrecededBy}
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
          tail: PrecededBy.JSON_SCHEMA_VIEWER,
          render: (sectionPrecededBy) => <RequestBodyNodeViewer key={sectionId} data-precededby={sectionPrecededBy} node={requestBody} />,
        }]
        : []
    }),
    PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL,
  )

  return (
    <div data-testid="openapi-request-section" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
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
}

const RequestBodyNodeViewer: FC<RequestBodyNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const value = node.value()
  const content = findOpenApiChild(node, isOpenApiContentNode)
  const mediaTypes = getOpenApiChildren(content, isOpenApiMediaTypeNode)
  const severities = takeOpenApiSeverities(node)
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
  useEffect(() => setSelectedId(undefined), [node])

  return (
    <MediaTypeContentSection
      precededBy={precededBy ?? PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
      testId="openapi-request-body-section"
      mediaTypes={mediaTypes}
      selectedId={selectedId}
      onSelect={setSelectedId}
      headerDiff={OpenApiRowDiffs.RequestBody.takeHeaderRowDiff(node)}
      diffsSeverities={severities}
      isRequiredOnSide={(side) => OpenApiRowDiffs.RequestBody.isRequiredStarVisibleOnSide(node, side)}
      requiredTagDiff={OpenApiRowDiffs.RequestBody.takeRequiredTagDiff(node)}
      renderBeforeSchema={() => OpenApiNodeVisibility.showRequestBodyDescription(value)
        ? (
          <MarkdownTextRow
            data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
            value={value?.description ?? ''}
            variant={TextValueVariant.body2}
            diff={OpenApiRowDiffs.NodeLevel.takeRowDiff(node, 'description')}
            diffsSeverities={severities}
          />
        )
        : null}
    />
  )
}
