import { DisplayMode } from "@apihub/types/DisplayMode"
import { DiffType } from "@netcracker/qubership-apihub-api-diff/dist/types/compare"
import { NavigationCallback } from "@netcracker/qubership-apihub-next-data-model/shared/ddl-api/types/navigation-callback"
import { TableKey } from "@netcracker/qubership-apihub-next-data-model/shared/ddl-api/types/table-key"
import { FC, memo } from "react"
import { DiffMetaKeys } from "../../types/DiffMetaKeys"
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"

export type DdlTableDiffsViewerProps = {
  mergedSource: unknown
  tableKey?: TableKey
  navigationCallback: NavigationCallback
  // techincal props
  displayMode?: DisplayMode
  devMode?: boolean
  // diffs specific props
  diffMetaKeys: DiffMetaKeys
  diffTypes?: ReadonlyArray<DiffType>
}

export const DdlTableDiffsViewer: FC<DdlTableDiffsViewerProps> =
  memo<DdlTableDiffsViewerProps>(props => {
    if (props.mergedSource === null) {
      return null
    }

    return (
      <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="Async API Operation Viewer" />}>
        <DdlTableDiffsViewerInner {...props} />
      </ErrorBoundary>
    )
  })

const DdlTableDiffsViewerInner: FC<DdlTableDiffsViewerProps> =
  memo<DdlTableDiffsViewerProps>(() => {
    return (
      <div>
        <h1>DDL Table Diffs Viewer</h1>
        <p>Component is under construction.</p>
      </div>
    )
  })