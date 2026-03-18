import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { FC, memo } from "react"
import { Expander } from "../Expander"
import { LevelIndicator } from "../LevelIndicator"
import { TitleRowValue } from "./TitleRowValue"
import type { TitleRowContentProps } from "./types"

const TITLE_ROW_MIN_HEIGHT = 18 + 4 + 4 // font size + padding top + padding bottom

export const TitleRowContent: FC<TitleRowContentProps> = memo<TitleRowContentProps>((props) => {
  const { expandable, expanded, onClickExpander, layoutSide, enableMainHeader = true, subheader } = props

  const level = useLevelContext()

  const layoutMode = useLayoutMode()
  const isSideBySideDiffsLayoutMode = layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE

  const width = isSideBySideDiffsLayoutMode ? "w-1/2" : "w-full"

  const showLevelAndExpanderGroup = level > 0 || expandable

  return (
    <div className={`flex flex-row items-center gap-2 ${width}`} style={{ minHeight: TITLE_ROW_MIN_HEIGHT }}>
      {showLevelAndExpanderGroup && (
        <div className="flex flex-row items-stretch h-full">
          <LevelIndicator level={level} />
          <Expander
            expandable={expandable}
            expanded={expanded}
            onClick={onClickExpander}
            level={level}
          />
        </div>
      )}
      {enableMainHeader && <TitleRowValue {...props} />}
      {subheader?.(layoutSide)}
    </div>
  )
})
