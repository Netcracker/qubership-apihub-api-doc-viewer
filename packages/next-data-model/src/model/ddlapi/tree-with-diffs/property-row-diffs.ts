import { isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff"
import { hasDdlPropertyTitleRowDiff } from "../../../shared/ddlapi/guards/property-row-diffs"
import {
  ChangedPropertyMetaData,
  NODE_LEVEL_DIFF_KEY,
} from "../../abstract/tree-with-diffs/tree-node.interface"
import { DdlApiTreeNodeWithDiffs } from "../types/aliases"
import { DdlApiTreeNodeKinds } from "../types/node-kind"
import {
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY,
} from "./property-row-diffs.types"

export type {
  DdlApiColumnFlagDiffKey,
  DdlApiColumnPropertyRowDiffs,
  DdlApiIndexFlagDiffKey,
  DdlApiIndexPropertyRowDiffs,
  DdlApiPropertyRowValue
} from "./property-row-diffs.types"

export {
  DDL_COLUMN_FLAG_DIFF_KEYS,
  DDL_INDEX_FLAG_DIFF_KEYS,
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY
} from "./property-row-diffs.types"

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
