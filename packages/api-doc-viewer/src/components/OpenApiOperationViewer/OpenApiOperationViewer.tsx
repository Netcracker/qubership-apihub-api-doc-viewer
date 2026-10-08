import { DEFAULT_DISPLAY_MODE } from "@apihub/constants/configuration"
import { DisplayModeContext } from "@apihub/contexts/DisplayModeContext"
import { LayoutModeContext } from "@apihub/contexts/LayoutModeContext"
import { LevelContext } from "@apihub/contexts/LevelContext"
import { DisplayMode } from "@apihub/types/DisplayMode"
import { DOCUMENT_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { isOpenApiOperationNode } from "@apihub/utils/openapi/node-type-checkers"
import { createOpenApiLogger, OpenApiTreeBuilder } from "@netcracker/qubership-apihub-next-data-model"
import { OpenApiOperationKeys } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/types/operation-keys"
import { FC, memo, useMemo } from "react"
import '../../index.css'
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"
import { OpenApiViewerContext, OpenApiViewerContextValue } from "./OpenApiViewerContext"
import { OperationNodeViewer } from "./OperationNodeViewer"

export type { OpenApiOperationKeys }

export type OpenApiOperationViewerProps = {
  /** Normalized OpenAPI 3.0 / 3.1 document (api-unifier `normalize` + `denormalize`). */
  source: unknown
  /** `{ path, method }` of the operation; the first operation of the document when omitted. */
  operationKeys?: OpenApiOperationKeys
  displayMode?: DisplayMode
  devMode?: boolean
  /** Hides the h1 title row. */
  noHeading?: boolean
  /** Forwarded to nested JSON Schema viewers. */
  expandedDepth?: number
}

/**
 * One OpenAPI operation (path + method).
 * Design: docs/design/openapi/features/operation-viewer.md
 */
export const OpenApiOperationViewer: FC<OpenApiOperationViewerProps> = memo<OpenApiOperationViewerProps>(props => {
  if (props.source === null) {
    return null
  }
  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="OpenAPI Operation Viewer" />}>
      <OpenApiOperationViewerInner {...props} />
    </ErrorBoundary>
  )
})

const OpenApiOperationViewerInner: FC<OpenApiOperationViewerProps> = memo<OpenApiOperationViewerProps>(props => {
  const {
    source,
    operationKeys,
    displayMode = DEFAULT_DISPLAY_MODE,
    devMode = false,
    noHeading = false,
    expandedDepth,
  } = props

  const logger = useMemo(() => createOpenApiLogger(devMode), [devMode])
  const treeBuilder = useMemo(
    () => new OpenApiTreeBuilder({ source, operationKeys, logger }),
    [source, operationKeys, logger],
  )
  const tree = useMemo(() => treeBuilder.build(), [treeBuilder])
  const viewerContext: OpenApiViewerContextValue = useMemo(() => ({ devMode, expandedDepth }), [devMode, expandedDepth])

  logger.debug('[OpenAPI] Source:', source)
  logger.debug('[OpenAPI] Tree:', tree)

  const operationNode = tree.root
  if (!isOpenApiOperationNode(operationNode)) {
    return null
  }

  return (
    <OpenApiViewerContext.Provider value={viewerContext}>
      <DisplayModeContext.Provider value={displayMode}>
        <LayoutModeContext.Provider value={DOCUMENT_LAYOUT_MODE}>
          <LevelContext.Provider value={0}>
            <div data-testid="openapi-operation-viewer">
              <OperationNodeViewer node={operationNode} noHeading={noHeading} />
            </div>
          </LevelContext.Provider>
        </LayoutModeContext.Provider>
      </DisplayModeContext.Provider>
    </OpenApiViewerContext.Provider>
  )
})
