import {
  LayoutSide,
} from "../../abstract/layout-side"
import { DdlApiTreeNodeWithDiffs } from "../types/aliases"
import { DdlApiTreeNodeKinds } from "../types/node-kind"
import {
  buildCommaSeparatedListSideSegments,
  DdlCommaSeparatedListParenthesesStyle,
  DdlListSideSegment,
  resolveListSideItems,
} from "./list-side-display"
import {
  DdlApiIndexPartNameDiffs,
  DdlApiIndexPropertyRowDiffs,
} from "./property-row-diffs.types"

export type DdlIndexPartNamesSideDisplay =
  | {
    readonly kind: "plain"
    readonly text: string
  }
  | {
    readonly kind: "segmented"
    readonly segments: readonly DdlListSideSegment[]
  }

export function takeIndexPartNameDiffs(
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>,
): DdlApiIndexPartNameDiffs | undefined {
  const partNameDiffs = (node.diffs as DdlApiIndexPropertyRowDiffs).partNameDiffs
  if (!partNameDiffs || Object.keys(partNameDiffs).length === 0) {
    return undefined
  }
  return partNameDiffs
}

export function resolveIndexPartNamesSideDisplay(
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>,
  layoutSide: LayoutSide,
  parenthesesStyle: DdlCommaSeparatedListParenthesesStyle,
): DdlIndexPartNamesSideDisplay {
  const mergedPartNames = node.value()?.partNames ?? []
  const partNameDiffs = takeIndexPartNameDiffs(node)

  if (!partNameDiffs) {
    return {
      kind: "plain",
      text: mergedPartNames.join(", "),
    }
  }

  const sideItems = resolveListSideItems(mergedPartNames, partNameDiffs, layoutSide)
  const segments = buildCommaSeparatedListSideSegments(sideItems, parenthesesStyle)

  if (segments.length === 0) {
    return {
      kind: "plain",
      text: mergedPartNames.join(", "),
    }
  }

  return {
    kind: "segmented",
    segments,
  }
}
