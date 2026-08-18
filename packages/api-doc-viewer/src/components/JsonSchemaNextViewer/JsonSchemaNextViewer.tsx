import { DEFAULT_DISPLAY_MODE, DEFAULT_EXPANDED_DEPTH } from "@apihub/constants/configuration"
import { CustomizationOptions, CustomizationOptionsContext } from "@apihub/contexts/CustomizationOptionsContext"
import { DisplayModeContext } from "@apihub/contexts/DisplayModeContext"
import { LayoutModeContext } from "@apihub/contexts/LayoutModeContext"
import { LevelContext } from "@apihub/contexts/LevelContext"
import { DisplayMode } from "@apihub/types/DisplayMode"
import { DOCUMENT_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { JsonSchemaTreeBuilder, createBuildingServiceLogger } from "@netcracker/qubership-apihub-next-data-model"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { FC, memo, useCallback, useMemo, useReducer } from "react"
import "../../index.css"
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"
import { JsonSchemaNodeViewer } from "./JsonSchemaNodeViewer"
import { JsonSchemaNextViewerContext } from "./JsonSchemaNextViewerContext"

export type JsonSchemaNextViewerProps = {
  schema: unknown
  expandedDepth?: number
  displayMode?: DisplayMode
  devMode?: boolean
  initialLevel?: number
  customizationOptions?: CustomizationOptions
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
    customizationOptions,
  } = props

  const logger = useMemo(() => createBuildingServiceLogger(devMode), [devMode])

  const builder = useMemo(
    () => new JsonSchemaTreeBuilder({
      source: schema,
      materializeDepth: expandedDepth,
      logger,
    }),
    [schema, expandedDepth, logger],
  )

  const tree = useMemo(() => builder.build(), [builder])

  const [treeRevision, bumpTreeRevision] = useReducer((revision: number) => revision + 1, 0)

  const materializeChildren = useCallback((node: JsonSchemaTreeNode) => {
    builder.materializeChildren(node)
    bumpTreeRevision()
  }, [builder])

  const viewerContext = useMemo(
    () => ({
      expandedDepth,
      materializeChildren,
      treeRevision,
    }),
    [expandedDepth, materializeChildren, treeRevision],
  )

  console.debug('[JSON Schema] Schema:', schema)
  console.debug('[JSON Schema] Tree:', tree)

  const root = tree.root
  if (!root) {
    return null
  }

  return (
    <JsonSchemaNextViewerContext.Provider value={viewerContext}>
      <CustomizationOptionsContext.Provider value={customizationOptions}>
        <DisplayModeContext.Provider value={displayMode}>
          <LayoutModeContext.Provider value={DOCUMENT_LAYOUT_MODE}>
            <LevelContext.Provider value={initialLevel}>
              <div data-testid="json-schema-next-viewer">
                <JsonSchemaNodeViewer node={root} />
              </div>
            </LevelContext.Provider>
          </LayoutModeContext.Provider>
        </DisplayModeContext.Provider>
      </CustomizationOptionsContext.Provider>
    </JsonSchemaNextViewerContext.Provider>
  )
}
