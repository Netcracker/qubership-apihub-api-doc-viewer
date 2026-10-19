import { OpenApiLayoutBlock, OpenApiLayoutLevel, OpenApiLayoutPlanner } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { FC, Fragment, ReactElement, useMemo } from "react"
import { renderSeparatorRow } from "../shared-components/Separator/render-separator-row"
import { SeparatorFramePositions } from "../shared-components/Separator/SeparatorRow"
import { useOpenApiViewerContext } from "./OpenApiViewerContext"

/** A block of OpenAPI elements: its edges (from next-data-model `OpenApiBlockEdges`) and how to render it. */
export type OpenApiBlock = OpenApiLayoutBlock<() => ReactElement>

type OpenApiLayoutProps = {
  blocks: readonly OpenApiBlock[]
  /** The container level: its level gap (config `levelGap`). */
  level: OpenApiLayoutLevel
  /** Also the first element's upper half and the last element's lower half (viewer edges, inside a card). */
  outerHalves?: boolean
  /** Frame segment of the separators per side (inside a card: `middle` where the card exists). */
  separatorFramePositions?: SeparatorFramePositions
}

/**
 * One container level: the blocks in the given order with the separator rows the planner puts
 * between them. All colours and heights come from the plan; nothing is decided here. Separator
 * elements are shared (`renderSeparatorRow`), so equal separators are drawn from one element.
 * Design: docs/design/openapi/features/vertical-gaps.md -> "Algorithm".
 */
export const OpenApiLayout: FC<OpenApiLayoutProps> = ({ blocks, level, outerHalves = false, separatorFramePositions }) => {
  const { spacing } = useOpenApiViewerContext()
  const items = useMemo(() => OpenApiLayoutPlanner.plan(blocks, level, spacing, { outerHalves }), [blocks, level, spacing, outerHalves])
  return (
    <>
      {items.map(item => item.type === 'block'
        ? <Fragment key={item.block.id}>{item.block.payload()}</Fragment>
        : <Fragment key={item.id}>{renderSeparatorRow(item.separator, separatorFramePositions)}</Fragment>)}
    </>
  )
}
