import {
  findOpenApiChild,
  getOpenApiChildren,
  isOpenApiContentNode,
  isOpenApiExtensionsNode,
  isOpenApiMediaTypeNode,
  isOpenApiResponseHeadersNode,
} from "@apihub/utils/openapi/node-type-checkers"
import { OpenApiNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/model/openapi/node-visibility"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC } from "react"
import { MarkdownTextRow } from "../shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { OPENAPI_SECTION_ORDER } from "./config/section-order"
import { takeOpenApiSeverities } from "./diff-state"
import { MediaTypeContentSection } from "./MediaTypeContentSection"
import { OpenApiExtensionsNodeViewer } from "./OpenApiExtensionsNodeViewer"
import { ParametersNodeViewer } from "./ParametersNodeViewer"
import { chainSectionsPrecededBy, OpenApiSectionEntry } from "./section-preceded-by"

export const RESPONSE_HEADERS_SECTION_TITLE = 'Headers'

type ResponseNodeViewerProps = WithPrecededByProps & {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>
  selectedMediaTypeId: string | undefined
  onSelectMediaType: (mediaTypeId: string) => void
}

/** The selected response: description, Headers, Extensions, Body - in config order. Design: entities/responses.md. */
export const ResponseNodeViewer: FC<ResponseNodeViewerProps> = (props) => {
  const { node, selectedMediaTypeId, onSelectMediaType, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const value = node.value()
  const severities = takeOpenApiSeverities(node)
  const headers = findOpenApiChild(node, isOpenApiResponseHeadersNode)
  const extensions = findOpenApiChild(node, isOpenApiExtensionsNode)
  const content = findOpenApiChild(node, isOpenApiContentNode)
  const mediaTypes = getOpenApiChildren(content, isOpenApiMediaTypeNode)

  const sections = chainSectionsPrecededBy(
    OPENAPI_SECTION_ORDER.response.flatMap((sectionId): OpenApiSectionEntry[] => {
      switch (sectionId) {
        case 'responseDescription':
          return OpenApiNodeVisibility.showResponseDescription(value)
            ? [{
              id: sectionId,
              tail: PrecededBy.DESCRIPTION_ROW,
              render: (sectionPrecededBy) => (
                <MarkdownTextRow
                  key={sectionId}
                  data-precededby={sectionPrecededBy}
                  value={value?.description ?? ''}
                  variant={TextValueVariant.body2}
                  diff={OpenApiRowDiffs.NodeLevel.takeRowDiff(node, 'description')}
                  diffsSeverities={severities}
                />
              ),
            }]
            : []
        case 'responseHeaders':
          return headers
            ? [{
              id: sectionId,
              tail: PrecededBy.JSON_SCHEMA_VIEWER,
              render: (sectionPrecededBy) => (
                <ParametersNodeViewer
                  key={sectionId}
                  data-precededby={sectionPrecededBy}
                  node={headers}
                  title={RESPONSE_HEADERS_SECTION_TITLE}
                  testId="openapi-response-headers-section"
                />
              ),
            }]
            : []
        case 'responseExtensions':
          return extensions
            ? [{
              id: sectionId,
              tail: PrecededBy.JSO_VIEWER,
              render: (sectionPrecededBy) => (
                <OpenApiExtensionsNodeViewer
                  key={sectionId}
                  data-precededby={sectionPrecededBy}
                  node={extensions}
                  variant={TextValueVariant.h3}
                  testId="openapi-response-extensions-section"
                />
              ),
            }]
            : []
        case 'responseBody':
          return content && mediaTypes.length > 0
            ? [{
              id: sectionId,
              tail: PrecededBy.JSON_SCHEMA_VIEWER,
              render: (sectionPrecededBy) => (
                <MediaTypeContentSection
                  key={sectionId}
                  precededBy={sectionPrecededBy}
                  testId="openapi-response-body-section"
                  mediaTypes={mediaTypes}
                  selectedId={selectedMediaTypeId}
                  onSelect={onSelectMediaType}
                  headerDiff={OpenApiRowDiffs.Section.takeHeaderRowDiff(content)}
                  diffsSeverities={takeOpenApiSeverities(content)}
                />
              ),
            }]
            : []
        default:
          return []
      }
    }),
    precededBy ?? PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL,
  )

  return (
    <div data-testid={`openapi-response-${String(node.key)}`} className="flex flex-col">
      {sections}
    </div>
  )
}
