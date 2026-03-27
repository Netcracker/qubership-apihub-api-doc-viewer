import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { DOCUMENT_LAYOUT_MODE, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { FC, memo, useMemo } from "react"
import { DiffFloatingBadgeWrapper } from "../DiffFloatingBadgeWrapper/DiffFloatingBadgeWrapper"
import { OneSideLayout } from "../Layout/OneSideLayout"
import { SideBySideLayout } from "../Layout/SideBySideLayout"
import { TextRowContent } from "./TextRowContent"
import type { TextRowProps } from "./types"

export const TextRow: FC<TextRowProps> = memo<TextRowProps>(props => {
  const layoutMode = useLayoutMode()

  const { diffsSeverities, diffsSeverityPlacement = NodeDiffsSeverityPlacemennt.DescriptionRow } = props

  const diffType = useMemo(() => diffsSeverities?.[diffsSeverityPlacement]?.type, [diffsSeverities, diffsSeverityPlacement])
  const diffTypeCause = useMemo(() => {
    // TODO: Extract to shared utility function
    const path = diffsSeverities?.[diffsSeverityPlacement]?.causedAt.join('.')
    return path ? `caused by ${path} change` : undefined
  }, [diffsSeverities, diffsSeverityPlacement])

  switch (layoutMode) {
    case SIDE_BY_SIDE_DIFFS_LAYOUT_MODE:
      return (
        <DiffFloatingBadgeWrapper
          diffType={diffType}
          diffTypeCause={diffTypeCause}
          hidden={false} // TODO: Implement diffs severities filters
        >
          <SideBySideLayout
            left={<TextRowContent {...props} layoutSide={ORIGIN_LAYOUT_SIDE} />}
            right={<TextRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />}
          />
        </DiffFloatingBadgeWrapper>
      )
    case DOCUMENT_LAYOUT_MODE:
      return (
        <OneSideLayout
          content={<TextRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />}
        />
      )
  }

  return (
    <div style={{ fontSize: 12, marginTop: 4, marginBottom: 4 }}>
      This layout mode ({layoutMode}) is not supported.
    </div>
  )
})
