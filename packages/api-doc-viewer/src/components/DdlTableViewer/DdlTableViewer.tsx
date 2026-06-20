import { DisplayMode } from "@apihub/types/DisplayMode"
import { DdlApiTreeBuilder, createBuildingServiceLogger } from "@netcracker/qubership-apihub-next-data-model"
import { NavigationCallback } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/types/navigation-callback"
import { TableKey } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/types/table-key"
import { FC, memo, useMemo } from "react"
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
  memo<DdlTableViewerProps>((props) => {
    const { source, tableKey, navigationCallback, devMode = false } = props

    const logger = useMemo(() => createBuildingServiceLogger(devMode), [devMode])

    const treeBuilder = useMemo(
      () => new DdlApiTreeBuilder({
        source,
        tableKey,
        logger,
      }),
      [source, tableKey, logger],
    )
    const tree = useMemo(() => treeBuilder.build(), [treeBuilder])

    logger.debug('[DDL API] Original Source:', source)
    logger.debug('[DDL API] Table Key:', tableKey)
    logger.debug('[DDL API] Navigation Callback:', navigationCallback)
    logger.debug('[DDL API] Tree:', tree)

    return (
      <div>
        <h1>DDL Table Viewer</h1>
        <p>Component is under construction.</p>
      </div>
    )
  })
