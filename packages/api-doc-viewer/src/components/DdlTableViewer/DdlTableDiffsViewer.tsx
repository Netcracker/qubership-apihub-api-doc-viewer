import { DisplayMode } from "@apihub/types/DisplayMode"
import { DiffMetaKeys } from "@apihub/types/DiffMetaKeys"
import { DdlApiTreeWithDiffsBuilder, createBuildingServiceLogger } from "@netcracker/qubership-apihub-next-data-model"
import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { NavigationCallback } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/types/navigation-callback"
import { TableKey } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/types/table-key"
import { FC, memo, useMemo } from "react"
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"

export type DdlTableDiffsViewerProps = {
  mergedSource: unknown
  tableKey: TableKey
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
      <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="DDL Table Diffs Viewer" />}>
        <DdlTableDiffsViewerInner {...props} />
      </ErrorBoundary>
    )
  })

const DdlTableDiffsViewerInner: FC<DdlTableDiffsViewerProps> =
  memo<DdlTableDiffsViewerProps>(props => {
    const {
      mergedSource: source,
      tableKey,
      navigationCallback,
      devMode = false,
      diffMetaKeys,
    } = props

    const referenceNamePropertyKey = Symbol('referenceName')

    const logger = useMemo(() => createBuildingServiceLogger(devMode), [devMode])

    const treeBuilder = useMemo(
      () => new DdlApiTreeWithDiffsBuilder(
        source,
        tableKey,
        diffMetaKeys,
        referenceNamePropertyKey,
        logger,
      ),
      [source, tableKey, diffMetaKeys, referenceNamePropertyKey, logger],
    )
    const tree = useMemo(() => treeBuilder.build(), [treeBuilder])

    logger.debug('[DDL API Diffs] Original Source:', source)
    logger.debug('[DDL API Diffs] Table Key:', tableKey)
    logger.debug('[DDL API Diffs] Navigation Callback:', navigationCallback)
    logger.debug('[DDL API Diffs] Tree:', tree)

    return (
      <div>
        <h1>DDL Table Diffs Viewer</h1>
        <p>Component is under construction.</p>
      </div>
    )
  })
