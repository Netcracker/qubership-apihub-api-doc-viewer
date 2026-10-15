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
import { ParametersNodeViewer, resolveParametersTail } from "./ParametersNodeViewer"
import { chainSectionsPrecededBy, isBlockClosing, OpenApiSectionEntry, OpenApiSectionTail } from "./section-preceded-by"

export const RESPONSE_HEADERS_SECTION_TITLE = 'Headers'

type ResponseNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>

type ResponseSectionsParams = {
  node: ResponseNode
  selectedMediaTypeId: string | undefined
  onSelectMediaType: (mediaTypeId: string) => void
}

/** The sections of one response (description, Headers, Extensions, Body) in config order. */
export function buildResponseSections(params: ResponseSectionsParams): OpenApiSectionEntry[] {
  const { node, selectedMediaTypeId, onSelectMediaType } = params
  const value = node.value()
  const severities = takeOpenApiSeverities(node)
  const headers = findOpenApiChild(node, isOpenApiResponseHeadersNode)
  const extensions = findOpenApiChild(node, isOpenApiExtensionsNode)
  const content = findOpenApiChild(node, isOpenApiContentNode)
  const mediaTypes = getOpenApiChildren(content, isOpenApiMediaTypeNode)

  return OPENAPI_SECTION_ORDER.response.flatMap((sectionId): OpenApiSectionEntry[] => {
    switch (sectionId) {
      case 'responseDescription':
        return OpenApiNodeVisibility.showResponseDescription(value)
          ? [{
            id: sectionId,
            tail: PrecededBy.OPENAPI_BLOCK_START,
            render: (sectionPrecededBy, closing) => (
              <MarkdownTextRow
                key={sectionId}
                data-precededby={sectionPrecededBy}
                data-block-last-row={isBlockClosing(closing)}
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
            tail: resolveParametersTail(headers),
            render: (sectionPrecededBy, closing) => (
              <ParametersNodeViewer
                key={sectionId}
                data-precededby={sectionPrecededBy}
                closing={closing}
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
            tail: PrecededBy.OPENAPI_AFTER_NESTED_VIEWER,
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
            // The selected media type (view state) decides whether a schema ends the body.
            tail: PrecededBy.OPENAPI_AFTER_NESTED_VIEWER,
            render: (sectionPrecededBy, closing) => (
              <MediaTypeContentSection
                key={sectionId}
                precededBy={sectionPrecededBy}
                closing={closing}
                testId="openapi-response-body-section"
                optionTestIdPrefix="response-media-type"
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
  })
}

type ResponseNodeViewerProps = WithPrecededByProps & ResponseSectionsParams & {
  /** What the row after the response assumes about its end (see `OpenApiSectionEntry`). */
  closing: OpenApiSectionTail
}

/** The selected response: description, Headers, Extensions, Body - in config order. Design: entities/responses.md. */
export const ResponseNodeViewer: FC<ResponseNodeViewerProps> = (props) => {
  const { node, closing, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const sections = chainSectionsPrecededBy(buildResponseSections(props), precededBy ?? PrecededBy.OPENAPI_BLOCK_ROW, closing)

  return (
    <div data-testid={`openapi-response-${String(node.key)}`} className="flex flex-col">
      {sections}
    </div>
  )
}
