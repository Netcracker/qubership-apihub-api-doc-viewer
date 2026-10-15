import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { resolveHttpMethodBadge } from "@apihub/utils/openapi/http-method-badge-config"
import {
  findOpenApiChild,
  isOpenApiExtensionsNode,
  isOpenApiRequestNode,
  isOpenApiResponsesNode,
  isOpenApiSecurityNode,
} from "@apihub/utils/openapi/node-type-checkers"
import { OpenApiSelection } from "@apihub/utils/openapi/view-selection"
import { OpenApiBlockEdges } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import {
  OpenApiNodeVisibility,
  OpenApiOperationHeaderRow,
  OpenApiOperationRowVisibility,
} from "@netcracker/qubership-apihub-next-data-model/model/openapi/node-visibility"
import { OpenApiRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC, ReactElement, useCallback, useEffect, useMemo, useState } from "react"
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
import { buildExtensionsBlock } from "./OpenApiExtensionsNodeViewer"
import { OpenApiBlock, OpenApiLayout } from "./OpenApiLayout"
import { useOpenApiViewerContext } from "./OpenApiViewerContext"
import { OpenApiViewState, OpenApiViewStateContext } from "./OpenApiViewStateContext"
import { buildRequestBlock } from "./RequestNodeViewer"
import { buildResponsesBlock } from "./ResponsesNodeViewer"
import { buildSecurityBlock } from "./SecurityNodeViewer"

export const OPERATION_ID_ROW_LABEL = 'Operation ID'
const SECONDARY_TEXT_COLOR = '#626D82'

type OperationNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.OPERATION>

type OperationNodeViewerProps = {
  node: OperationNode
  noHeading: boolean
}

/**
 * The operation: the header block (title, operation ID, address, description, external docs), then
 * the sections in config order, planned as one level (separator rows between blocks). Owns the view
 * state (selections) every level reads. Design: features/operation-viewer.md, features/block-separators.md.
 */
export const OperationNodeViewer: FC<OperationNodeViewerProps> = (props) => {
  const { node, noHeading } = props
  const { spacing } = useOpenApiViewerContext()
  const visibility = useMemo(() => OpenApiNodeVisibility.resolveOperation(node.value(), noHeading), [node, noHeading])

  // View state of the whole operation; a rebuilt tree (new source) starts fresh.
  const [selection, setSelection] = useState<OpenApiSelection>(new Map())
  useEffect(() => setSelection(new Map()), [node])
  const select = useCallback((ownerNodeId: string, selectedNodeId: string) => {
    setSelection(current => new Map(current).set(ownerNodeId, selectedNodeId))
  }, [])
  const view: OpenApiViewState = useMemo(() => ({ selection, select }), [selection, select])

  const blocks = useMemo(() => buildOperationBlocks(node, visibility, view), [node, visibility, view])

  return (
    <OpenApiViewStateContext.Provider value={view}>
      <div className="flex flex-col">
        <OpenApiLayout blocks={blocks} spacing={spacing} />
      </div>
    </OpenApiViewStateContext.Provider>
  )
}

function buildOperationBlocks(node: OperationNode, visibility: OpenApiOperationRowVisibility, view: OpenApiViewState): OpenApiBlock[] {
  const security = findOpenApiChild(node, isOpenApiSecurityNode)
  const operationExtensions = findOpenApiChild(node, isOpenApiExtensionsNode, 'extensions')
  const request = findOpenApiChild(node, isOpenApiRequestNode)
  const responses = findOpenApiChild(node, isOpenApiResponsesNode)
  const responsesExtensions = findOpenApiChild(node, isOpenApiExtensionsNode, 'responsesExtensions')

  const sections = OPENAPI_SECTION_ORDER.operation.flatMap((sectionId): OpenApiBlock[] => {
    switch (sectionId) {
      case 'security':
        return security ? [buildSecurityBlock(security, view)] : []
      case 'operationExtensions':
        return operationExtensions
          ? [buildExtensionsBlock(sectionId, { node: operationExtensions, variant: TextValueVariant.h2, testId: 'openapi-extensions-section' })]
          : []
      case 'request':
        return request ? [buildRequestBlock(request, view)] : []
      case 'responses':
        return responses ? [buildResponsesBlock(responses, responsesExtensions, view)] : []
      default:
        return []
    }
  })
  return [
    {
      id: 'operation-header',
      ...OpenApiBlockEdges.operationHeader(node, visibility),
      payload: () => <OperationHeaderRows key="operation-header" node={node} visibility={visibility} />,
    },
    ...sections,
  ]
}

type OperationHeaderRowsProps = {
  node: OperationNode
  visibility: OpenApiOperationRowVisibility
}

/** The header block: its visible rows in the data-layer order (`resolveOperationHeaderRows`). */
const OperationHeaderRows: FC<OperationHeaderRowsProps> = ({ node, visibility }) => {
  const value = node.value()
  // The deprecated tag (and its diff badge) sits on the title row, else the operation ID row, else the address row.
  const deprecatedTagRow = visibility.deprecatedTagRow
  const severities = takeOpenApiSeverities(node)
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
  const rowDiff = (row: OpenApiOperationHeaderRow): ReturnType<typeof OpenApiRowDiffs.Operation.takeHeaderRowDiff> =>
    OpenApiRowDiffs.Operation.takeHeaderRowDiff(node, row, deprecatedTagRow)

  const renderRow = (row: OpenApiOperationHeaderRow): ReactElement => {
    switch (row) {
      case 'title':
        return (
          <TitleRow
            key={row}
            data-precededby={PrecededBy.OPENAPI_ROW}
            value={value?.title ?? ''}
            expandable={false}
            variant={TextValueVariant.h1}
            subheader={renderDeprecatedTag}
            diff={rowDiff(row)}
            diffsSeverities={severities}
          />
        )
      case 'operationId':
        return (
          <TextRow
            key={row}
            data-precededby={PrecededBy.OPENAPI_ROW}
            label={OPERATION_ID_ROW_LABEL}
            value={value?.operationId ?? ''}
            variant={TextValueVariant.body2}
            labelFontWeight="normal"
            textFontWeight="normal"
            labelColor={SECONDARY_TEXT_COLOR}
            textColor={SECONDARY_TEXT_COLOR}
            trailing={deprecatedTagRow === 'operationId' && hasDeprecatedTag ? renderDeprecatedTag : undefined}
            diff={rowDiff(row)}
            diffsSeverities={severities}
            diffsSeverityPlacement={OpenApiRowDiffs.Operation.resolveOperationIdRowSeverityPlacement(deprecatedTagRow)}
          />
        )
      case 'address':
        return (
          <AddressRow
            key={row}
            data-precededby={PrecededBy.OPENAPI_ROW}
            badge={resolveHttpMethodBadge(value?.method ?? '')}
            address={value?.path ?? ''}
            trailing={deprecatedTagRow === 'address' && hasDeprecatedTag ? renderDeprecatedTag : undefined}
            diff={rowDiff(row)}
            diffsSeverities={severities}
            diffsSeverityPlacement={OpenApiRowDiffs.Operation.resolveAddressRowSeverityPlacement(deprecatedTagRow)}
          />
        )
      case 'description':
        return (
          <MarkdownTextRow
            key={row}
            data-precededby={PrecededBy.OPENAPI_ROW}
            value={value?.description ?? ''}
            variant={TextValueVariant.body2}
            diff={rowDiff(row)}
            diffsSeverities={severities}
          />
        )
      case 'externalDocs':
        return (
          <ExternalDocsRow
            key={row}
            data-precededby={PrecededBy.OPENAPI_ROW}
            resolveSide={(layoutSide) => OpenApiRowDiffs.Operation.resolveExternalDocsSide(node, layoutSide)}
            diff={rowDiff(row)}
            diffsSeverities={severities}
          />
        )
    }
  }

  return <>{OpenApiNodeVisibility.resolveOperationHeaderRows(visibility).map(renderRow)}</>
}
