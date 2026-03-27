import { CHANGED_LAYOUT_SIDE, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { FC, memo, useMemo } from "react"
import { TextValue } from "../TextValue/TextValue"
import type { TextRowContentProps } from "./types"

const TITLE_ROW_MIN_HEIGHT = 18 + 4 + 4 // font size + padding top + padding bottom

export const TextRowContent: FC<TextRowContentProps> = memo<TextRowContentProps>((props) => {
  const { value, variant, layoutSide } = props

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { diff, descendantDiffs, diffsSeverities } = props

  const diffsStyleClasses = useMemo(() => {
    if (!diff) {
      return []
    }
    const { data, styles } = diff
    if (!data) {
      return []
    }
    const diffsStyleClasses: string[] = []
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
  }, [diff, layoutSide])

  return (
    <div className={`h-full gap-2 ${diffsStyleClasses.join(' ')}`} style={{ minHeight: TITLE_ROW_MIN_HEIGHT }}>
      <TextValue
        value={value}
        variant={variant}
        layoutSide={layoutSide}
        diff={diff}
      />
    </div>
  )
})
