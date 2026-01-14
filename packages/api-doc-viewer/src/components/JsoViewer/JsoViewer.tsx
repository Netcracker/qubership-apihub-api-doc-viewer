import { DEFAULT_DISPLAY_MODE } from "@apihub/constants/configuration"
import { DisplayModeContext } from "@apihub/contexts/DisplayModeContext"
import { LayoutModeContext } from "@apihub/contexts/LayoutModeContext"
import { LevelContext } from "@apihub/contexts/LevelContext"
import { JsoTreeBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/jso/tree/builder"
import { FC, memo } from "react"
import { DisplayMode, DOCUMENT_LAYOUT_MODE } from "../.."
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"
import { JsoPropertyNodeViewer } from "./JsoPropertyNodeViewer"
import { TitleVariant } from "../AsyncApiOperationViewer/TitleRow"

type JsoViewerProps = {
  source: object | null
  displayMode?: DisplayMode
}

export const JsoViewer: FC<JsoViewerProps> =
  memo<JsoViewerProps>(props => {
    return (
      <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="JSO Viewer" />}>
        <JsoViewerInner {...props} />
      </ErrorBoundary>
    )
  })

const JsoViewerInner: FC<JsoViewerProps> = memo<JsoViewerProps>(props => {
  const { source, displayMode = DEFAULT_DISPLAY_MODE } = props

  if (source === null) {
    return null
  }

  const builder = new JsoTreeBuilder(source)
  const tree = builder.build()

  console.debug('[JSO] Source:', source)
  console.debug('[JSO] Tree:', tree)

  const root = tree.root
  if (!root) {
    return null
  }

  const jsoProperties = root.childrenNodes()
  if (jsoProperties.length === 0) {
    return null
  }

  return (
    <DisplayModeContext.Provider value={displayMode}>
      <LayoutModeContext.Provider value={DOCUMENT_LAYOUT_MODE}> {/* Now only 1 layout mode is supported */}
        <LevelContext.Provider value={0}>
          {jsoProperties.map(jsoProperty => (
            <JsoPropertyNodeViewer
              key={jsoProperty.id}
              node={jsoProperty}
              expandable={!jsoProperty.value()?.isPrimitive}
              expanded={true}
              titleVariant={TitleVariant.body}
            />
          ))}
        </LevelContext.Provider>
      </LayoutModeContext.Provider>
    </DisplayModeContext.Provider>
  )
})
