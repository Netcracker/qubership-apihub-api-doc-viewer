import type { LayoutSide } from "@apihub/types/internal/LayoutSide"
import type {
  ChangedPropertyMetaData,
  HighlightVariant,
  NodeDescendantDiffs,
  NodeDiffsSeverities
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import type { ReactElement } from "react"
import { TextValueVariant } from "../TextValue/types"

export type TitleRowProps = {
  value?: string // Document Mode
  expandable: boolean
  expanded?: boolean
  onClickExpander?: () => void
  variant: TextValueVariant
  enableMainHeader?: boolean
  subheader?: (layoutSide: LayoutSide) => ReactElement
  // diffs
  diff?: ChangedPropertyMetaData
  descendantDiffs?: NodeDescendantDiffs
  diffsSeverities?: NodeDiffsSeverities
  forcedBackgroundColor?: HighlightVariant
}

export type TitleRowContentProps = TitleRowProps & {
  layoutSide: LayoutSide
}
