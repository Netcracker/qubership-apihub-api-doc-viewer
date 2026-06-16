import { FC, memo } from "react"
import { ErrorBoundary } from "../services/ErrorBoundary"
import { DisplayMode } from "@apihub/types/DisplayMode"
import { TableKeys } from "@apihub/next-data-model/shared/ddl-api/types/table-keys"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"
import { ForeignKeyCallback } from "@netcracker/qubership-apihub-next-data-model/shared/ddl-api/types/foreign-key-callback"

export type DdlTableViewerProps = {
  source: unknown
  tableKeys: TableKeys
  foreignKeyCallback: ForeignKeyCallback
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