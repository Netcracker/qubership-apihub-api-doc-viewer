import { ColumnRowBadgesFlagDiffs } from "@apihub/components/DdlTableViewer/ColumnRowBadges/types"
import {
  DDL_COLUMN_FLAG_DIFF_KEYS,
  DDL_INDEX_FLAG_DIFF_KEYS,
} from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs"
import { ChangedPropertyMetaData } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { DdlApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"

function pickFlagDiffs(
  diffs: Partial<Record<string, ChangedPropertyMetaData>>,
  keys: ReadonlyArray<keyof ColumnRowBadgesFlagDiffs>,
): ColumnRowBadgesFlagDiffs | undefined {
  const flagDiffs: ColumnRowBadgesFlagDiffs = {}
  let hasDiff = false
  for (const key of keys) {
    const diff = diffs[key]
    if (diff) {
      flagDiffs[key] = diff
      hasDiff = true
    }
  }
  return hasDiff ? flagDiffs : undefined
}

export function takeColumnFlagDiffs(
  node: DdlApiTreeNodeWithDiffs,
): ColumnRowBadgesFlagDiffs | undefined {
  return pickFlagDiffs(node.diffs, DDL_COLUMN_FLAG_DIFF_KEYS)
}

export function takeIndexFlagDiffs(
  node: DdlApiTreeNodeWithDiffs,
): ColumnRowBadgesFlagDiffs | undefined {
  return pickFlagDiffs(node.diffs, DDL_INDEX_FLAG_DIFF_KEYS)
}
