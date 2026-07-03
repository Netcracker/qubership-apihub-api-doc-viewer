import { buildRowDiffProps, toNodeDiffState } from "@apihub/components/shared-components/diffs/node-diff-props"
import { TitleRowProps } from "@apihub/components/shared-components/TitleRow/types"
import { isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff"
import {
  ChangedPropertyMetaData,
  NODE_LEVEL_DIFF_KEY,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { DdlApiTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/tree/node-value"
import { DdlApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"

export function takeNodeDiffIfPresent(
  node: DdlApiTreeNodeWithDiffs,
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

export function buildDdlPropertyTitleRowDiffProps(
  node: DdlApiTreeNodeWithDiffs,
): Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities" | "highlightingMode"> {
  const nodeLevelDiff = takeNodeDiffIfPresent(node)
  if (!nodeLevelDiff) {
    return {}
  }

  const nodeDiffState = toNodeDiffState<DdlApiTreeNodeValue>(node)
  return {
    ...buildRowDiffProps<DdlApiTreeNodeValue>(nodeDiffState, {
      resolveDiff: () => nodeLevelDiff,
    }),
    highlightingMode: nodeLevelDiff.highlightingMode,
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
