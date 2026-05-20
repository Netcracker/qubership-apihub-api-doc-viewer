import { DEFAULT_DISPLAY_MODE } from "@apihub/constants/configuration"
import { AsyncLevelContextProvider } from "@apihub/contexts/AsyncLevelContext/AsyncLevelContextProvider"
import { DiffMetaKeysContext } from "@apihub/contexts/DiffMetaKeysContext"
import { DiffTypesContext } from "@apihub/contexts/DiffTypesContext"
import { DisplayModeContext } from "@apihub/contexts/DisplayModeContext"
import { LayoutModeContext } from "@apihub/contexts/LayoutModeContext"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { DiffMetaKeys } from "@netcracker/qubership-apihub-api-data-model"
import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { JsoTreeWithDiffsBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/jso/tree-with-diffs/builder"
import { FC, memo, useMemo } from "react"
import { DisplayMode } from "../.."
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"
import { JsoPropertyNodeViewerWithDiffs } from "./JsoPropertyNodeViewerWithDiffs"
import '../shared-styles/diffs/index.css';

type JsoDiffsViewerProps = {
  mergedSource: unknown
  displayMode?: DisplayMode
  initialLevel?: number
  supportJsonSchema?: boolean
  // diffs specific
  diffMetaKeys: DiffMetaKeys
  diffTypes?: ReadonlyArray<DiffType>
}

export const JsoDiffsViewer: FC<JsoDiffsViewerProps> =
  memo<JsoDiffsViewerProps>(props => {
    if (props.mergedSource === null) {
      return null
    }

    return (
      <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="JSO Diffs Viewer" />}>
        <JsoDiffsViewerInner {...props} />
      </ErrorBoundary>
    )
  })

const JsoDiffsViewerInner: FC<JsoDiffsViewerProps> =
  memo<JsoDiffsViewerProps>(props => {
    const {
      mergedSource: source,
      displayMode = DEFAULT_DISPLAY_MODE,
      initialLevel = 0,
      supportJsonSchema = false,
      diffMetaKeys,
      diffTypes,
    } = props

    const referenceNamePropertyKey = Symbol('referenceName')

    const builder = useMemo(
      () => new JsoTreeWithDiffsBuilder(source, supportJsonSchema, referenceNamePropertyKey, diffMetaKeys),
      [source, supportJsonSchema, referenceNamePropertyKey, diffMetaKeys]
    )
    const tree = useMemo(() => builder.build(), [builder])

    console.debug("[JSO Diffs] Source:", source)
    console.debug("[JSO Diffs] Tree:", tree)

    const root = tree.root
    if (!root) {
      return null
    }

    const jsoProperties = root.childrenNodes()
    if (jsoProperties.length === 0) {
      return null
    }

    return (
      <DiffMetaKeysContext.Provider value={diffMetaKeys}>
        <DiffTypesContext.Provider value={diffTypes}>
          <DisplayModeContext.Provider value={displayMode}>
            <LayoutModeContext.Provider value={SIDE_BY_SIDE_DIFFS_LAYOUT_MODE}>
              <AsyncLevelContextProvider beforeLevel={initialLevel} afterLevel={initialLevel}>
                <div data-testid='jso-diffs-viewer'>
                  {jsoProperties.map(jsoProperty => (
                    <JsoPropertyNodeViewerWithDiffs
                      key={jsoProperty.id}
                      node={jsoProperty}
                      supportJsonSchema={supportJsonSchema}
                    />
                  ))}
                </div>
              </AsyncLevelContextProvider>
            </LayoutModeContext.Provider>
          </DisplayModeContext.Provider>
        </DiffTypesContext.Provider>
      </DiffMetaKeysContext.Provider>
    )
  })
