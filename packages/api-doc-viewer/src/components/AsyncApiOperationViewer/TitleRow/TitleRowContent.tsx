import { useLevelContext } from "@apihub/contexts/LevelContext"
import { CHANGED_LAYOUT_SIDE, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { FC, memo, useMemo } from "react"
import { Expander } from "../Expander"
import { LevelIndicator } from "../LevelIndicator"
import { TextValue } from "../TextValue/TextValue"
import type { TitleRowContentProps } from "./types"

const TITLE_ROW_MIN_HEIGHT = 18 + 4 + 4 // font size + padding top + padding bottom

export const TitleRowContent: FC<TitleRowContentProps> = memo<TitleRowContentProps>((props) => {
  const { expandable, expanded, onClickExpander, value, variant, layoutSide, enableMainHeader = true, subheader, forcedBackgroundColor } = props

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { diff, descendantDiffs, diffsSeverities } = props

  const level = useLevelContext()

  const showLevelAndExpanderGroup = level > 0 || expandable

  const diffsStyleClasses = useMemo(() => {
    const diffsStyleClasses: string[] = []
    if (forcedBackgroundColor) {
      diffsStyleClasses.push(DiffsClassesBuilder.background(forcedBackgroundColor))
    }
    if (!diff) {
      return diffsStyleClasses
    }
    const { data, styles } = diff
    if (!data) {
      return diffsStyleClasses
    }
    if (layoutSide === ORIGIN_LAYOUT_SIDE) {
      if (isDiffRemove(data)) {
        diffsStyleClasses.push(DiffsClassesBuilder.background(styles.before.backgroundColor))
      }
      if (isDiffAdd(data)) {
        diffsStyleClasses.push(DiffsClassesBuilder.background(styles.before.backgroundColor))
      }
      if (isDiffReplace(data)) {
        diffsStyleClasses.push(DiffsClassesBuilder.background(styles.before.backgroundColor))
      }
    }
    if (layoutSide === CHANGED_LAYOUT_SIDE) {
      if (isDiffRemove(data)) {
        diffsStyleClasses.push(DiffsClassesBuilder.background(styles.after.backgroundColor))
      }
      if (isDiffAdd(data)) {
        diffsStyleClasses.push(DiffsClassesBuilder.background(styles.after.backgroundColor))
      }
      if (isDiffReplace(data)) {
        diffsStyleClasses.push(DiffsClassesBuilder.background(styles.after.backgroundColor))
      }
    }
    return diffsStyleClasses
  }, [diff, forcedBackgroundColor, layoutSide])

  return (
    <div className={`px-2 flex flex-row items-center h-full gap-2 ${diffsStyleClasses.join(' ')}`} style={{ minHeight: TITLE_ROW_MIN_HEIGHT }}>
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
      {enableMainHeader && (
        <TextValue
          value={value}
          variant={variant}
          layoutSide={layoutSide}
          diff={diff}
        />
      )}
      {subheader?.(layoutSide)}
    </div>
  )
})
