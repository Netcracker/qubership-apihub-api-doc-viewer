import { DisplayMode } from "@apihub/types/DisplayMode"
import { NavigationCallback } from "@netcracker/qubership-apihub-next-data-model/shared/ddl-api/types/navigation-callback"
import { TableKey } from "@netcracker/qubership-apihub-next-data-model/shared/ddl-api/types/table-key"
import { FC, memo } from "react"
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"

export type DdlTableViewerProps = {
  source: unknown
  tableKey: TableKey
  navigationCallback: NavigationCallback
  // techincal props
  displayMode?: DisplayMode
  devMode?: boolean
}

export const DdlTableViewer: FC<DdlTableViewerProps> =
  memo<DdlTableViewerProps>(props => {
    if (props.source === null) {
      return null
    }

    return (
      <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="DDL Table Viewer" />}>
        <DdlTableViewerInner {...props} />
      </ErrorBoundary>
    )
  })

const DdlTableViewerInner: FC<DdlTableViewerProps> =
  memo<DdlTableViewerProps>(() => {
    return (
      <div>
        <h1>DDL Table Viewer</h1>
        <p>Component is under construction.</p>
      </div>
    )
  })