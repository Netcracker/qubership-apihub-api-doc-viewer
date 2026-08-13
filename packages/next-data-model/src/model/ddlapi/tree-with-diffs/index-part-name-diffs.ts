import {
  LayoutSide,
} from "../../abstract/layout-side"
import { DdlApiTreeNodeWithDiffs } from "../types/aliases"
import { DdlApiTreeNodeKinds } from "../types/node-kind"
import {
  buildCommaSeparatedListSideSegments,
  resolveListSideItems,
  SideListDisplay,
  SideListDisplayKinds,
} from "../../abstract/tree-with-diffs/list-side-display"
import {
  DdlApiIndexPartNameDiffs,
  DdlApiIndexPropertyRowDiffs,
} from "./property-row-diffs.types"

/** @deprecated Use {@link SideListDisplay} */
export type DdlIndexPartNamesSideDisplay = SideListDisplay

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
): SideListDisplay {
  const mergedPartNames = node.value()?.partNames ?? []
  const partNameDiffs = takeIndexPartNameDiffs(node)

  const sideItems = partNameDiffs
    ? resolveListSideItems(mergedPartNames, partNameDiffs, layoutSide)
    : mergedPartNames.map((text) => ({ text }))

  const segments = buildCommaSeparatedListSideSegments(sideItems, "tight")

  if (segments.length === 0) {
    return {
      kind: SideListDisplayKinds.NO_DIFFS,
      text: "",
    }
  }

  return {
    kind: SideListDisplayKinds.PARTIAL_DIFFS,
    segments,
  }
}
