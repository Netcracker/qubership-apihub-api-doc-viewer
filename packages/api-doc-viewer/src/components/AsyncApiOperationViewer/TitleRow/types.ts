import type { LayoutSide } from "@apihub/types/internal/LayoutSide"
import type { NodeDiffs, NodeDiffsSeverities } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import type { ReactElement } from "react"

export const TitleVariant = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "body",
} as const

export type TitleVariant = typeof TitleVariant[keyof typeof TitleVariant]

export type TitleRowProps<V extends object | null = object | null> = {
  value?: string // Document Mode
  expandable: boolean
  expanded?: boolean
  onClickExpander?: () => void
  variant: TitleVariant
  enableMainHeader?: boolean
  subheader?: (layoutSide: LayoutSide) => ReactElement
  // diffs
  diffs?: NodeDiffs<V> // Comparison Mode
  diffsSeverities?: NodeDiffsSeverities // Comparison Mode
}

export type TitleRowContentProps = TitleRowProps & {
  layoutSide: LayoutSide
}
