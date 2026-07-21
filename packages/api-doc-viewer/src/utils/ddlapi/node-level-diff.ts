import { buildRowDiffProps, toNodeDiffState } from "@apihub/components/shared-components/diffs/node-diff-props"
import { TitleRowProps } from "@apihub/components/shared-components/TitleRow/types"
import { COLUMN_FLAG_DIFF_KEYS, INDEX_FLAG_DIFF_KEYS } from "@apihub/utils/ddlapi/column-row-badges"
import { DiffAction, isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { AbstractNodeDiffsSeveritiesAggregator } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import {
  ChangedPropertyMetaData,
  DiffStyles,
  HighlightVariant,
  NODE_LEVEL_DIFF_KEY,
  NodeDiffs,
  NodeDiffsSeverities,
  NodeDiffsSeverity,
  NodeDiffsSeverityPlacemennt,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { DdlApiColumnRowValue, DdlApiIndexRowValue } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/tree/node-value"
import { DdlApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"

/** Row value for DDL property list items rendered with a title row + subheader (column, index). */
export type DdlApiPropertyRowValue = DdlApiColumnRowValue | DdlApiIndexRowValue

export type DdlApiPropertyNodeWithDiffs =
  | DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>
  | DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>

type DdlApiPropertyNodeDiffs = NodeDiffs<DdlApiPropertyRowValue>

export function takeNodeDiffIfPresent(
  node: DdlApiPropertyNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  const diff = node.diffs[NODE_LEVEL_DIFF_KEY]
  if (!diff) {
    return undefined
  }
  if (isDiffAdd(diff.data) || isDiffRemove(diff.data)) {
    return diff
  }
  return undefined
}

const FLAG_DIFF_AS_REPLACE_STYLES: { before: DiffStyles; after: DiffStyles } = {
  before: {
    isContentVisible: true,
    isHeaderVisible: true,
    backgroundColor: HighlightVariant.Yellow,
    textHighlighterColor: HighlightVariant.Yellow,
  },
  after: {
    isContentVisible: true,
    isHeaderVisible: true,
    backgroundColor: HighlightVariant.Yellow,
    textHighlighterColor: HighlightVariant.Yellow,
  },
}

function asReplaceFlagDiff(flagDiff: ChangedPropertyMetaData): ChangedPropertyMetaData {
  const { data } = flagDiff

  if (isDiffReplace(data)) {
    return {
      ...flagDiff,
      styles: FLAG_DIFF_AS_REPLACE_STYLES,
    }
  }

  if (isDiffAdd(data)) {
    return {
      ...flagDiff,
      data: {
        type: data.type,
        scope: data.scope,
        description: data.description,
        action: DiffAction.replace,
        beforeValue: false,
        afterValue: true,
        beforeDeclarationPaths: [],
        afterDeclarationPaths: data.afterDeclarationPaths,
      },
      styles: FLAG_DIFF_AS_REPLACE_STYLES,
    }
  }

  if (isDiffRemove(data)) {
    return {
      ...flagDiff,
      data: {
        type: data.type,
        scope: data.scope,
        description: data.description,
        action: DiffAction.replace,
        beforeValue: true,
        afterValue: false,
        beforeDeclarationPaths: data.beforeDeclarationPaths,
        afterDeclarationPaths: [],
      },
      styles: FLAG_DIFF_AS_REPLACE_STYLES,
    }
  }

  return flagDiff
}

function takeFirstFlagDiff(diffs: DdlApiPropertyNodeDiffs): ChangedPropertyMetaData | undefined {
  for (const key of COLUMN_FLAG_DIFF_KEYS) {
    const flagDiff = diffs[key]
    if (flagDiff) {
      return asReplaceFlagDiff(flagDiff)
    }
  }
  return undefined
}

function collectTitleRowPropertyDiffs(node: DdlApiPropertyNodeWithDiffs): ChangedPropertyMetaData[] {
  const diffs = node.diffs as DdlApiPropertyNodeDiffs
  const titleRowDiffs: ChangedPropertyMetaData[] = []

  const nodeLevelDiff = diffs[NODE_LEVEL_DIFF_KEY]
  if (nodeLevelDiff) {
    titleRowDiffs.push(nodeLevelDiff)
  }

  if (node.kind === DdlApiTreeNodeKinds.COLUMN) {
    const columnNameDiff = diffs.columnName
    if (columnNameDiff) {
      titleRowDiffs.push(columnNameDiff)
    }
    for (const key of COLUMN_FLAG_DIFF_KEYS) {
      const flagDiff = diffs[key]
      if (flagDiff) {
        titleRowDiffs.push(flagDiff)
      }
    }
  }

  if (node.kind === DdlApiTreeNodeKinds.INDEX) {
    const indexNameDiff = diffs.indexName
    if (indexNameDiff) {
      titleRowDiffs.push(indexNameDiff)
    }
    for (const key of INDEX_FLAG_DIFF_KEYS) {
      const flagDiff = diffs[key]
      if (flagDiff) {
        titleRowDiffs.push(flagDiff)
      }
    }
  }

  return titleRowDiffs
}

function buildNodeDiffsSeverityFromPropertyDiff(
  propertyDiff: ChangedPropertyMetaData,
): NodeDiffsSeverity {
  const diff = propertyDiff.data
  const nodeDiffsSeverity: NodeDiffsSeverity = {
    type: diff.type,
    causedAt: [],
  }
  if (isDiffRemove(diff) || isDiffReplace(diff)) {
    nodeDiffsSeverity.causedAt = diff.beforeDeclarationPaths[0]
  } else if (isDiffAdd(diff)) {
    nodeDiffsSeverity.causedAt = diff.afterDeclarationPaths[0]
  }
  return nodeDiffsSeverity
}

function buildTitleRowDiffsSeverities(
  node: DdlApiPropertyNodeWithDiffs,
): NodeDiffsSeverities | undefined {
  const maxPropertyDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
    ...collectTitleRowPropertyDiffs(node),
  )
  if (!maxPropertyDiff) {
    return undefined
  }

  return {
    [NodeDiffsSeverityPlacemennt.TitleRow]: buildNodeDiffsSeverityFromPropertyDiff(maxPropertyDiff),
  }
}

export function buildDdlPropertyTitleRowDiffProps(
  node: DdlApiPropertyNodeWithDiffs,
): Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities" | "highlightingMode"> {
  const nodeDiffState = toNodeDiffState<DdlApiPropertyRowValue>(node)
  const nodeLevelDiff = takeNodeDiffIfPresent(node)

  const rowDiffProps = buildRowDiffProps<DdlApiPropertyRowValue>(nodeDiffState, {
    resolveDiff: (diffs) => nodeLevelDiff ?? takeFirstFlagDiff(diffs),
  })

  if (!rowDiffProps.diff) {
    return {}
  }

  const titleRowDiffsSeverities = buildTitleRowDiffsSeverities(node)

  return {
    ...rowDiffProps,
    diffsSeverities: titleRowDiffsSeverities ?? rowDiffProps.diffsSeverities,
    highlightingMode: rowDiffProps.diff.highlightingMode,
  }
}

export function isNodeSubheaderVisible(
  nodeLevelDiff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
): boolean {
  if (!nodeLevelDiff) {
    return true
  }

  const styles = layoutSide === ORIGIN_LAYOUT_SIDE
    ? nodeLevelDiff.styles.before
    : nodeLevelDiff.styles.after

  // Whole-node add/remove diffs reuse the JSO descendant contract where
  // isContentVisible targets nested/value payloads. DDL column/index type and
  // badges live in the title-row subheader and should follow the side that
  // shows the row header (green add / red remove), not isContentVisible.
  return styles.isHeaderVisible
}
