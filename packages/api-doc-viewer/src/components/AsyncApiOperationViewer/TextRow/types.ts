import type { LayoutSide } from "@apihub/types/internal/LayoutSide"
import type { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffsSeverities } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { TextValueVariant } from "../TextValue/types"

export type TextRowProps = {
  value?: string // Document Mode
  variant: TextValueVariant
  // diffs
  diff?: ChangedPropertyMetaData
  descendantDiffs?: NodeDescendantDiffs
  diffsSeverities?: NodeDiffsSeverities
}

export type TextRowContentProps = TextRowProps & {
  layoutSide: LayoutSide
}
