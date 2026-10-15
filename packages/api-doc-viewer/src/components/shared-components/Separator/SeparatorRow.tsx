import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { OpenApiSeparatorRow } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { FC, ReactElement } from "react"
import { WithFramePositionProps } from "../Frame/types"
import { OneSideLayout } from "../Layout/OneSideLayout"
import { SideBySideLayout } from "../Layout/SideBySideLayout"
import { BadgeStub } from "./BadgeStub"
import "./SeparatorRow.css"

type SeparatorRowProps = WithFramePositionProps & {
  separator: OpenApiSeparatorRow
}

/**
 * A content-less row between two blocks: per side a stack of bands whose heights and tones come
 * from the layout data (next-data-model `OpenApiLayoutPlanner`), and in diffs mode a decorative badge
 * stub continuing the neighbouring rows' floating badges. No padding, no margin, no text.
 * Design: docs/design/openapi/features/block-separators.md
 */
export const SeparatorRow: FC<SeparatorRowProps> = (props) => {
  const { separator, framePosition } = props
  const layoutMode = useLayoutMode()

  const renderSide = (layoutSide: LayoutSide): ReactElement => {
    const bands = layoutSide === ORIGIN_LAYOUT_SIDE ? separator.before : separator.after
    return (
      <div data-testid="layout-separator" data-frame-position={framePosition?.(layoutSide)} className="layout-separator flex w-full flex-col">
        {bands.map((band, index) => (
          <div key={index} className={`layout-separator-band ${DiffsClassesBuilder.background(band.tone)}`} style={{ height: band.height }} />
        ))}
      </div>
    )
  }

  if (layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE) {
    // Same wrapper shape as `DiffFloatingBadgeWrapper`, so the stub sits where the real badges sit.
    return (
      <div className="relative flex w-full flex-row items-stretch">
        <BadgeStub segments={separator.badge} />
        <SideBySideLayout left={renderSide(ORIGIN_LAYOUT_SIDE)} right={renderSide(CHANGED_LAYOUT_SIDE)} />
      </div>
    )
  }
  return <OneSideLayout content={renderSide(CHANGED_LAYOUT_SIDE)} />
}
