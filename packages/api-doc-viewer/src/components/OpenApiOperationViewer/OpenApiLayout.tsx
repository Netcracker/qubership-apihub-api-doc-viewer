import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { OpenApiLayoutBlock, OpenApiLayoutPlanner, OpenApiSpacingConfig } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { FC, Fragment, ReactElement } from "react"
import { FramePosition } from "../shared-components/Frame/types"
import { SeparatorRow } from "../shared-components/Separator/SeparatorRow"

/** A block of OpenAPI rows: its edges (from next-data-model `OpenApiBlockEdges`) and how to render it. */
export type OpenApiBlock = OpenApiLayoutBlock<() => ReactElement>

type OpenApiLayoutProps = {
  blocks: readonly OpenApiBlock[]
  spacing: OpenApiSpacingConfig
  /** Frame segment of the separators (inside a card: `middle` on the sides where the card exists). */
  separatorFramePosition?: (layoutSide: LayoutSide) => FramePosition | undefined
}

/**
 * One container level: the blocks in the given order with the separator rows the planner puts
 * between them. All colours and heights come from the plan; nothing is decided here.
 * Design: docs/design/openapi/features/block-separators.md -> "Viewer rendering".
 */
export const OpenApiLayout: FC<OpenApiLayoutProps> = ({ blocks, spacing, separatorFramePosition }) => (
  <>
    {OpenApiLayoutPlanner.plan(blocks, spacing).map(item => item.type === 'block'
      ? <Fragment key={item.block.id}>{item.block.payload()}</Fragment>
      : <SeparatorRow key={item.separator.id} separator={item.separator} framePosition={separatorFramePosition} />)}
  </>
)
