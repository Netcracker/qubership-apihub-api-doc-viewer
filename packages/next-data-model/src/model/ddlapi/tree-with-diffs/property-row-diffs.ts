import { isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff"
import {
  ChangedPropertyMetaData,
  NODE_LEVEL_DIFF_KEY,
} from "../../abstract/tree-with-diffs/tree-node.interface"
import { DdlApiColumnRowValue, DdlApiIndexRowValue } from "../tree/node-value"
import { DdlApiTreeNodeWithDiffs } from "../types/aliases"
import { DdlApiTreeNodeKinds } from "../types/node-kind"

/** Synthetic diff slot: resolved title-row background diff for column/index property rows. */
export const DDL_PROPERTY_TITLE_ROW_DIFF_KEY = "titleRow" as const

export const DDL_COLUMN_FLAG_DIFF_KEYS = [
  "isPrimaryKey",
  "isUnique",
  "isNotNull",
  "isGenerated",
  "isForeignKey",
] as const satisfies ReadonlyArray<keyof DdlApiColumnRowValue>

export const DDL_INDEX_FLAG_DIFF_KEYS = [
  "isUnique",
] as const satisfies ReadonlyArray<keyof DdlApiIndexRowValue>

export type DdlApiColumnFlagDiffKey = (typeof DDL_COLUMN_FLAG_DIFF_KEYS)[number]
export type DdlApiIndexFlagDiffKey = (typeof DDL_INDEX_FLAG_DIFF_KEYS)[number]

export type DdlApiPropertyRowValue = DdlApiColumnRowValue | DdlApiIndexRowValue

export type DdlApiPropertyNodeWithDiffs =
  | DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>
  | DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>

type DdlApiPropertyNodeDiffs = DdlApiPropertyNodeWithDiffs["diffs"] & Partial<
  Record<typeof DDL_PROPERTY_TITLE_ROW_DIFF_KEY, ChangedPropertyMetaData>
>

export function takeDdlPropertyTitleRowDiff(
  node: DdlApiPropertyNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  const diffs = node.diffs as DdlApiPropertyNodeDiffs
  return diffs[DDL_PROPERTY_TITLE_ROW_DIFF_KEY]
}

export function takeDdlPropertyNodeDiffIfPresent(
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

  // Whole-node add/remove diffs reuse the JSO descendant contract where
  // isContentVisible targets nested/value payloads. DDL column/index type and
  // badges live in the title-row subheader and should follow the side that
  // shows the row header (green add / red remove), not isContentVisible.
  return styles.isHeaderVisible
}
