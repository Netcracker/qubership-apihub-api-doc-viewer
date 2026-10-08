import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { resolveHttpMethodBadge } from "@apihub/utils/openapi/http-method-badge-config"
import {
  findOpenApiChild,
  isOpenApiExtensionsNode,
  isOpenApiRequestNode,
  isOpenApiResponsesNode,
  isOpenApiSecurityNode,
} from "@apihub/utils/openapi/node-type-checkers"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/model/openapi/node-visibility"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC, ReactElement, useCallback, useMemo } from "react"
import { AddressRow } from "../shared-components/AddressRow/AddressRow"
import { TagsWithDiffs } from "../shared-components/diffs/TagsWithDiffs"
import { ExternalDocsRow } from "../shared-components/ExternalDocsRow/ExternalDocsRow"
import { MarkdownTextRow } from "../shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextRow } from "../shared-components/TextRow/TextRow"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { PrecededBy } from "../shared-components/WithPrecededByProps"
import '../shared-styles/preceded-by.css'
import { OPENAPI_SECTION_ORDER } from "./config/section-order"
import { takeOpenApiSeverities } from "./diff-state"
import { OpenApiExtensionsNodeViewer } from "./OpenApiExtensionsNodeViewer"
import { RequestNodeViewer } from "./RequestNodeViewer"
import { ResponsesNodeViewer } from "./ResponsesNodeViewer"
import { SecurityNodeViewer } from "./SecurityNodeViewer"
import { chainSectionsPrecededBy, OpenApiSectionEntry } from "./section-preceded-by"

export const OPERATION_ID_ROW_LABEL = 'Operation ID'
const SECONDARY_TEXT_COLOR = '#626D82'

type OperationNodeViewerProps = {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.OPERATION>
  noHeading: boolean
}

/** Header rows (title, operation ID, address, external docs, description), then sections in config order. */
export const OperationNodeViewer: FC<OperationNodeViewerProps> = (props) => {
  const { node, noHeading } = props
  const value = node.value()
  const severities = takeOpenApiSeverities(node)
  const visibility = useMemo(() => OpenApiNodeVisibility.resolveOperation(value, noHeading), [value, noHeading])

  const deprecatedDiff = OpenApiRowDiffs.Operation.takeDeprecatedTagDiff(node)
  const hasDeprecatedTag = value?.deprecated === true || !!deprecatedDiff
  const renderDeprecatedTag = useCallback((layoutSide: LayoutSide): ReactElement => (
    hasDeprecatedTag
      ? (
        <TagsWithDiffs
          readOnly={false}
          writeOnly={false}
          deprecated={OpenApiRowDiffs.Operation.isDeprecatedOnSide(node, layoutSide)}
          deprecatedDiff={deprecatedDiff}
          layoutSide={layoutSide}
        />
      )
      : <></>
  ), [deprecatedDiff, hasDeprecatedTag, node])

  const security = findOpenApiChild(node, isOpenApiSecurityNode)
  const operationExtensions = findOpenApiChild(node, isOpenApiExtensionsNode, 'extensions')
  const request = findOpenApiChild(node, isOpenApiRequestNode)
  const responses = findOpenApiChild(node, isOpenApiResponsesNode)
  const responsesExtensions = findOpenApiChild(node, isOpenApiExtensionsNode, 'responsesExtensions')

  const headerTail = visibility.showDescription
    ? PrecededBy.DESCRIPTION_ROW
    : visibility.showExternalDocs ? PrecededBy.EXTERNAL_DOCS_ROW : PrecededBy.ADDRESS_ROW

  const sections = chainSectionsPrecededBy(
    OPENAPI_SECTION_ORDER.operation.flatMap((sectionId): OpenApiSectionEntry[] => {
      switch (sectionId) {
        case 'security':
          return security ? [{ id: sectionId, tail: PrecededBy.JSON_SCHEMA_VIEWER, render: (precededBy: PrecededBy) => <SecurityNodeViewer key={sectionId} data-precededby={precededBy} node={security} /> }] : []
        case 'operationExtensions':
          return operationExtensions ? [{ id: sectionId, tail: PrecededBy.JSO_VIEWER, render: (precededBy: PrecededBy) => <OpenApiExtensionsNodeViewer key={sectionId} data-precededby={precededBy} node={operationExtensions} variant={TextValueVariant.h2} testId="openapi-extensions-section" /> }] : []
        case 'request':
          return request ? [{ id: sectionId, tail: PrecededBy.JSON_SCHEMA_VIEWER, render: (precededBy: PrecededBy) => <RequestNodeViewer key={sectionId} data-precededby={precededBy} node={request} /> }] : []
        case 'responses':
          return responses ? [{ id: sectionId, tail: PrecededBy.JSON_SCHEMA_VIEWER, render: (precededBy: PrecededBy) => <ResponsesNodeViewer key={sectionId} data-precededby={precededBy} node={responses} extensionsNode={responsesExtensions} /> }] : []
        default:
          return []
      }
    }),
    headerTail,
  )

  return (
    <div className="flex flex-col">
      {visibility.showTitle && (
        <TitleRow
          data-precededby={PrecededBy.ROOT}
          value={value?.title ?? ''}
          expandable={false}
          variant={TextValueVariant.h1}
          subheader={renderDeprecatedTag}
          diff={OpenApiRowDiffs.Operation.takeTitleRowDiff(node)}
          diffsSeverities={severities}
        />
      )}
      {visibility.showOperationId && (
        <TextRow
          data-precededby={visibility.showTitle ? PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL : PrecededBy.ROOT}
          label={OPERATION_ID_ROW_LABEL}
          value={value?.operationId ?? ''}
          variant={TextValueVariant.body2}
          labelFontWeight="normal"
          textFontWeight="normal"
          labelColor={SECONDARY_TEXT_COLOR}
          textColor={SECONDARY_TEXT_COLOR}
          diff={OpenApiRowDiffs.Operation.takeOperationIdRowDiff(node)}
          diffsSeverities={severities}
          diffsSeverityPlacement={NodeDiffsSeverityPlacemennt.OperationIdRow}
        />
      )}
      <AddressRow
        data-precededby={
          visibility.showOperationId
            ? PrecededBy.OPERATION_ID_ROW
            : visibility.showTitle ? PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL : PrecededBy.ROOT
        }
        badge={resolveHttpMethodBadge(value?.method ?? '')}
        address={value?.path ?? ''}
        trailing={!visibility.showTitle && hasDeprecatedTag ? renderDeprecatedTag : undefined}
        diff={OpenApiRowDiffs.Operation.takeAddressRowDiff(node)}
        diffsSeverities={severities}
      />
      {visibility.showExternalDocs && (
        <ExternalDocsRow
          data-precededby={PrecededBy.ADDRESS_ROW}
          resolveSide={(layoutSide) => OpenApiRowDiffs.Operation.resolveExternalDocsSide(node, layoutSide)}
          diff={OpenApiRowDiffs.Operation.takeExternalDocsRowDiff(node)}
          diffsSeverities={severities}
        />
      )}
      {visibility.showDescription && (
        <MarkdownTextRow
          data-precededby={visibility.showExternalDocs ? PrecededBy.EXTERNAL_DOCS_ROW : PrecededBy.ADDRESS_ROW}
          value={value?.description ?? ''}
          variant={TextValueVariant.body2}
          diff={OpenApiRowDiffs.Operation.takeDescriptionRowDiff(node)}
          diffsSeverities={severities}
        />
      )}
      {sections}
    </div>
  )
}
