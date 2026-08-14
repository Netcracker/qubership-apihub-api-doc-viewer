import { DEFAULT_DISPLAY_MODE, DEFAULT_EXPANDED_DEPTH } from "@apihub/constants/configuration"
import { DisplayModeContext } from "@apihub/contexts/DisplayModeContext"
import { LayoutModeContext } from "@apihub/contexts/LayoutModeContext"
import { LevelContext } from "@apihub/contexts/LevelContext"
import { DisplayMode } from "@apihub/types/DisplayMode"
import { DOCUMENT_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { JsonSchemaTreeBuilder, createBuildingServiceLogger } from "@netcracker/qubership-apihub-next-data-model"
import { FC, memo, useMemo } from "react"
import "../../index.css"
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"
import { JsonSchemaNodeViewer } from "./JsonSchemaNodeViewer"

export type JsonSchemaNextViewerProps = {
  schema: unknown
  expandedDepth?: number
  displayMode?: DisplayMode
  devMode?: boolean
  initialLevel?: number
}

export const JsonSchemaNextViewer: FC<JsonSchemaNextViewerProps> = memo((props) => {
  if (props.schema === null || props.schema === undefined) {
    return null
  }

  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="JSON Schema Next Viewer" />}>
      <JsonSchemaNextViewerInner {...props} />
    </ErrorBoundary>
  )
})

const JsonSchemaNextViewerInner: FC<JsonSchemaNextViewerProps> = (props) => {
  const {
    schema,
    expandedDepth = DEFAULT_EXPANDED_DEPTH,
    displayMode = DEFAULT_DISPLAY_MODE,
    devMode = false,
    initialLevel = 0,
  } = props

  const logger = useMemo(() => createBuildingServiceLogger(devMode), [devMode])

  const tree = useMemo(() => {
    const builder = new JsonSchemaTreeBuilder({
      source: schema,
      materializeDepth: expandedDepth,
      logger,
    })
    return builder.build()
  }, [schema, expandedDepth, logger])

  console.debug('[JSON Schema] Schema:', schema)
  console.debug('[JSON Schema] Tree:', tree)

  const root = tree.root
  if (!root) {
    return null
  }

  return (
    <DisplayModeContext.Provider value={displayMode}>
      <LayoutModeContext.Provider value={DOCUMENT_LAYOUT_MODE}>
        <LevelContext.Provider value={initialLevel}>
          <div data-testid="json-schema-next-viewer">
            <JsonSchemaNodeViewer node={root} />
          </div>
        </LevelContext.Provider>
      </LayoutModeContext.Provider>
    </DisplayModeContext.Provider>
  )
}
