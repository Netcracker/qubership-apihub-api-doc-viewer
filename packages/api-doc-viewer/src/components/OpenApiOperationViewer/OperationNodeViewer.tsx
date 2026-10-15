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
import { RequestNodeViewer, resolveRequestTail } from "./RequestNodeViewer"
import { ResponsesNodeViewer } from "./ResponsesNodeViewer"
import { SecurityNodeViewer } from "./SecurityNodeViewer"
import { chainSectionsPrecededBy, OpenApiRowSpacing, OpenApiSectionEntry, resolveBlockRowsSpacing } from "./section-preceded-by"

export const OPERATION_ID_ROW_LABEL = 'Operation ID'
const SECONDARY_TEXT_COLOR = '#626D82'

type HeaderRow = {
  readonly key: string
  readonly render: (spacing: OpenApiRowSpacing) => ReactElement
}

type OperationNodeViewerProps = {
  node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.OPERATION>
  noHeading: boolean
}

/** Header rows (title, operation ID, address, description, external docs), then sections in config order. */
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

  const sections = chainSectionsPrecededBy(
    OPENAPI_SECTION_ORDER.operation.flatMap((sectionId): OpenApiSectionEntry[] => {
      switch (sectionId) {
        case 'security':
          // Ends with an OpenAPI row: a card's closing row or the "No authentication" text.
          return security ? [{ id: sectionId, tail: PrecededBy.OPENAPI_BLOCK_START, render: (precededBy, closing) => <SecurityNodeViewer key={sectionId} data-precededby={precededBy} closing={closing} node={security} /> }] : []
        case 'operationExtensions':
          return operationExtensions ? [{ id: sectionId, tail: PrecededBy.OPENAPI_AFTER_NESTED_VIEWER, render: (precededBy) => <OpenApiExtensionsNodeViewer key={sectionId} data-precededby={precededBy} node={operationExtensions} variant={TextValueVariant.h2} testId="openapi-extensions-section" /> }] : []
        case 'request':
          return request ? [{ id: sectionId, tail: resolveRequestTail(request), render: (precededBy, closing) => <RequestNodeViewer key={sectionId} data-precededby={precededBy} closing={closing} node={request} /> }] : []
        case 'responses':
          // The selected response (view state) decides the real end: promise a nested viewer's end.
          return responses ? [{ id: sectionId, tail: PrecededBy.OPENAPI_AFTER_NESTED_VIEWER, render: (precededBy, closing) => <ResponsesNodeViewer key={sectionId} data-precededby={precededBy} closing={closing} node={responses} extensionsNode={responsesExtensions} /> }] : []
        default:
          return []
      }
    }),
    PrecededBy.OPENAPI_BLOCK_START,
    PrecededBy.OPENAPI_BLOCK_START,
  )

  // Header block (title, operation ID, address, description, external docs): one pass over the
  // visible rows; the last one ends the block (sections or the end of the viewer follow).
  const headerRows: HeaderRow[] = [
    ...(visibility.showTitle ? [{
      key: 'title',
      render: (spacing: OpenApiRowSpacing) => (
        <TitleRow
          key="title"
          {...spacing}
          value={value?.title ?? ''}
          expandable={false}
          variant={TextValueVariant.h1}
          subheader={renderDeprecatedTag}
          diff={OpenApiRowDiffs.Operation.takeTitleRowDiff(node)}
          diffsSeverities={severities}
        />
      ),
    }] : []),
    ...(visibility.showOperationId ? [{
      key: 'operationId',
      render: (spacing: OpenApiRowSpacing) => (
        <TextRow
          key="operationId"
          {...spacing}
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
      ),
    }] : []),
    {
      key: 'address',
      render: (spacing: OpenApiRowSpacing) => (
        <AddressRow
          key="address"
          {...spacing}
          badge={resolveHttpMethodBadge(value?.method ?? '')}
          address={value?.path ?? ''}
          trailing={!visibility.showTitle && hasDeprecatedTag ? renderDeprecatedTag : undefined}
          diff={OpenApiRowDiffs.Operation.takeAddressRowDiff(node)}
          diffsSeverities={severities}
        />
      ),
    },
    ...(visibility.showDescription ? [{
      key: 'description',
      render: (spacing: OpenApiRowSpacing) => (
        <MarkdownTextRow
          key="description"
          {...spacing}
          value={value?.description ?? ''}
          variant={TextValueVariant.body2}
          diff={OpenApiRowDiffs.Operation.takeDescriptionRowDiff(node)}
          diffsSeverities={severities}
        />
      ),
    }] : []),
    ...(visibility.showExternalDocs ? [{
      key: 'externalDocs',
      render: (spacing: OpenApiRowSpacing) => (
        <ExternalDocsRow
          key="externalDocs"
          {...spacing}
          resolveSide={(layoutSide) => OpenApiRowDiffs.Operation.resolveExternalDocsSide(node, layoutSide)}
          diff={OpenApiRowDiffs.Operation.takeExternalDocsRowDiff(node)}
          diffsSeverities={severities}
        />
      ),
    }] : []),
  ]
  const headerSpacing = resolveBlockRowsSpacing(headerRows.length, PrecededBy.OPENAPI_VIEWER_START, true)

  return (
    <div className="flex flex-col">
      {headerRows.map((row, index) => row.render(headerSpacing[index]))}
      {sections}
    </div>
  )
}
