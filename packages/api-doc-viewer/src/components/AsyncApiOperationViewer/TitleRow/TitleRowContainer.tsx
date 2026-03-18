import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { FC, memo } from "react"
import { TitleRowContent } from "./TitleRowContent"
import type { TitleRowProps } from "./types"

export const TitleRowContainer: FC<TitleRowProps> = memo<TitleRowProps>((props) => {
  const layoutMode = useLayoutMode()

  const sideBySideLayout = layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE

  if (sideBySideLayout) {
    return (
      <div className="flex flex-row">
        <TitleRowContent {...props} layoutSide={ORIGIN_LAYOUT_SIDE} />
        <TitleRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />
      </div>
    )
  }

  return (
    <div className="flex flex-row">
      <TitleRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />
    </div>
  )
})
