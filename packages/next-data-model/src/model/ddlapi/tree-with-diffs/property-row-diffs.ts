import { isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff"
import { hasDdlPropertyTitleRowDiff } from "../../../shared/ddlapi/guards/property-row-diffs"
import { formatForeignKeyTargetKey } from "../../../shared/ddlapi/foreign-key-target-key"
import {
  ChangedPropertyMetaData,
  NODE_LEVEL_DIFF_KEY,
} from "../../abstract/tree-with-diffs/tree-node.interface"
import { DdlApiTreeNodeWithDiffs } from "../types/aliases"
import { DdlApiTreeNodeKinds } from "../types/node-kind"
import {
  DDL_COLUMN_FLAG_DIFF_KEYS,
  DDL_INDEX_FLAG_DIFF_KEYS,
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY,
  type DdlApiColumnFlagDiffKey,
  type DdlApiColumnPropertyRowDiffs,
  type DdlApiForeignKeyTargetDiffs,
  type DdlApiIndexFlagDiffKey,
} from "./property-row-diffs.types"

export type {
  DdlApiColumnFlagDiffKey,
  DdlApiColumnPropertyRowDiffs,
  DdlApiForeignKeyTargetDiffs,
  DdlApiIndexFlagDiffKey,
  DdlApiIndexPropertyRowDiffs,
  DdlApiPropertyRowValue
} from "./property-row-diffs.types"

export {
  DDL_COLUMN_FLAG_DIFF_KEYS,
  DDL_INDEX_FLAG_DIFF_KEYS,
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY
} from "./property-row-diffs.types"

export { formatForeignKeyTargetKey } from "../../../shared/ddlapi/foreign-key-target-key"

export type DdlApiPropertyNodeWithDiffs =
  | DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>
  | DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>

export function takeDdlPropertyTitleRowDiff(
  node: DdlApiPropertyNodeWithDiffs,
) {
  if (!hasDdlPropertyTitleRowDiff(node.diffs)) {
    return undefined
  }
  return node.diffs[DDL_PROPERTY_TITLE_ROW_DIFF_KEY]
}

export function takeDdlPropertyNodeDiffIfPresent(
  node: DdlApiPropertyNodeWithDiffs,
) {
  const diff = node.diffs[NODE_LEVEL_DIFF_KEY]
  if (!diff) {
    return undefined
  }
  if (isDiffAdd(diff.data) || isDiffRemove(diff.data)) {
    return diff
  }
  return undefined
}

export function isDdlPropertySubheaderVisible(
  nodeLevelDiff: ChangedPropertyMetaData | undefined,
  layoutSide: "origin" | "changed",
): boolean {
  if (!nodeLevelDiff) {
    return true
  }

  const styles = layoutSide === "origin"
    ? nodeLevelDiff.styles.before
    : nodeLevelDiff.styles.after

  return styles.isHeaderVisible
}

export function takeColumnForeignKeyTargetDiffs(
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>,
): DdlApiForeignKeyTargetDiffs | undefined {
  const columnDiffs = node.diffs as DdlApiColumnPropertyRowDiffs
  const targetDiffs = columnDiffs.foreignKeyTargetDiffs
  if (!targetDiffs || Object.keys(targetDiffs).length === 0) {
    return undefined
  }
  return targetDiffs
}

export function takeColumnForeignKeyTargetDiff(
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>,
  target: { readonly schemaName: string; readonly tableName: string; readonly columnName: string },
): ChangedPropertyMetaData | undefined {
  return takeColumnForeignKeyTargetDiffs(node)?.[formatForeignKeyTargetKey(target)]
}

export function takeColumnFlagDiffs(
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>,
): Partial<Record<DdlApiColumnFlagDiffKey, ChangedPropertyMetaData>> | undefined {
  if (takeDdlPropertyNodeDiffIfPresent(node)) {
    return undefined
  }

  const flagDiffs: Partial<Record<DdlApiColumnFlagDiffKey, ChangedPropertyMetaData>> = {}
  let hasDiff = false
  for (const key of DDL_COLUMN_FLAG_DIFF_KEYS) {
    const diff = node.diffs[key]
    if (diff) {
      flagDiffs[key] = diff
      hasDiff = true
    }
  }
  return hasDiff ? flagDiffs : undefined
}

export function takeColumnGeneratedExpressionDiff(
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>,
): ChangedPropertyMetaData | undefined {
  return node.diffs.generatedExpression
}

export function takeIndexFlagDiffs(
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>,
): Partial<Record<DdlApiIndexFlagDiffKey, ChangedPropertyMetaData>> | undefined {
  if (takeDdlPropertyNodeDiffIfPresent(node)) {
    return undefined
  }

  const flagDiffs: Partial<Record<DdlApiIndexFlagDiffKey, ChangedPropertyMetaData>> = {}
  let hasDiff = false
  for (const key of DDL_INDEX_FLAG_DIFF_KEYS) {
    const diff = node.diffs[key]
    if (diff) {
      flagDiffs[key] = diff
      hasDiff = true
    }
  }
  return hasDiff ? flagDiffs : undefined
}
