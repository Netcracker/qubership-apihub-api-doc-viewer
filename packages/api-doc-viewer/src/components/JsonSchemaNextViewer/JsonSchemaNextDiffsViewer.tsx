import { DEFAULT_DISPLAY_MODE, DEFAULT_EXPANDED_DEPTH } from "@apihub/constants/configuration"
import { CustomizationOptions, CustomizationOptionsContext } from "@apihub/contexts/CustomizationOptionsContext"
import { DiffMetaKeysContext } from "@apihub/contexts/DiffMetaKeysContext"
import { DiffTypesContext } from "@apihub/contexts/DiffTypesContext"
import { DisplayModeContext } from "@apihub/contexts/DisplayModeContext"
import { LayoutModeContext } from "@apihub/contexts/LayoutModeContext"
import { LevelContext } from "@apihub/contexts/LevelContext"
import { DiffMetaKeys } from "@apihub/types/DiffMetaKeys"
import { DisplayMode } from "@apihub/types/DisplayMode"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { JsonSchemaTreeWithDiffsBuilder, createBuildingServiceLogger } from "@netcracker/qubership-apihub-next-data-model"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { FC, memo, useCallback, useMemo, useReducer } from "react"
import "../../index.css"
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"
import "../shared-styles/diffs/index.css"
import { JsonSchemaNextViewerContext } from "./JsonSchemaNextViewerContext"
import { JsonSchemaNodeViewerWithDiffs } from "./JsonSchemaNodeViewerWithDiffs"
import {
  UnchangedBlocksContext,
  useUnchangedBlocksContextValue,
} from "./UnchangedBlocksContext"

export type JsonSchemaNextDiffsViewerProps = {
  schema: unknown
  expandedDepth?: number
  displayMode?: DisplayMode
  devMode?: boolean
  initialLevel?: number
  customizationOptions?: CustomizationOptions
  diffMetaKeys: DiffMetaKeys
  diffTypes?: ReadonlyArray<DiffType>
  hideUnchangedNodes?: boolean
}

export const JsonSchemaNextDiffsViewer: FC<JsonSchemaNextDiffsViewerProps> = memo((props) => {
  if (props.schema === null || props.schema === undefined) {
    return null
  }

  return (
    <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="JSON Schema Next Diffs Viewer" />}>
      <JsonSchemaNextDiffsViewerInner {...props} />
    </ErrorBoundary>
  )
})

const JsonSchemaNextDiffsViewerInner: FC<JsonSchemaNextDiffsViewerProps> = (props) => {
  const {
    schema,
    expandedDepth = DEFAULT_EXPANDED_DEPTH,
    displayMode = DEFAULT_DISPLAY_MODE,
    devMode = false,
    initialLevel = 0,
    customizationOptions,
    diffMetaKeys,
    diffTypes,
    hideUnchangedNodes = true,
  } = props

  const unchangedBlocksContext = useUnchangedBlocksContextValue(hideUnchangedNodes)

  const logger = useMemo(() => createBuildingServiceLogger(devMode), [devMode])

  const builder = useMemo(
    () => new JsonSchemaTreeWithDiffsBuilder({
      source: schema,
      materializeDepth: expandedDepth,
      diffsMetaKeys: diffMetaKeys,
      logger,
    }),
    [schema, expandedDepth, diffMetaKeys, logger],
  )

  const tree = useMemo(() => builder.build(), [builder])

  console.debug('[JSON Schema Diffs] Schema', schema)
  console.debug('[JSON Schema Diffs] Tree:', tree)

  const [treeRevision, bumpTreeRevision] = useReducer((revision: number) => revision + 1, 0)

  const materializeChildren = useCallback((node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs) => {
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

  const root = tree.root
  if (!root) {
    return null
  }

  return (
    <DiffMetaKeysContext.Provider value={diffMetaKeys}>
      <DiffTypesContext.Provider value={diffTypes}>
        <UnchangedBlocksContext.Provider value={unchangedBlocksContext}>
          <JsonSchemaNextViewerContext.Provider value={viewerContext}>
            <CustomizationOptionsContext.Provider value={customizationOptions}>
              <DisplayModeContext.Provider value={displayMode}>
                <LayoutModeContext.Provider value={SIDE_BY_SIDE_DIFFS_LAYOUT_MODE}>
                  <LevelContext.Provider value={initialLevel}>
                    <div data-testid="json-schema-next-diffs-viewer">
                      <JsonSchemaNodeViewerWithDiffs node={root} />
                    </div>
                  </LevelContext.Provider>
                </LayoutModeContext.Provider>
              </DisplayModeContext.Provider>
            </CustomizationOptionsContext.Provider>
          </JsonSchemaNextViewerContext.Provider>
        </UnchangedBlocksContext.Provider>
      </DiffTypesContext.Provider>
    </DiffMetaKeysContext.Provider>
  )
}
