import { X_AXIS_PADDING_ROWS_ASYNC_API } from "@apihub/components/shared-styles/tailwind-classnames"
import { NodeId } from "@netcracker/qubership-apihub-next-data-model/utility-types"
import { FC, memo, useCallback } from "react"
import { LevelIndicator } from "../LevelIndicator"
import { ATTRIBUTE_PRECEDED_BY } from "../WithPrecededByProps"
import type { ShowUnchangedRowProps } from "./ShowUnchangedRow"

type ShowUnchangedRowContentProps = ShowUnchangedRowProps & {
  layoutSide: "before" | "after"
  level: number
}

function formatShowUnchangedLabel(count: number): string {
  return count === 1 ? "Show 1 unchanged node" : `Show ${count} unchanged nodes`
}

export const ShowUnchangedRowContent: FC<ShowUnchangedRowContentProps> = memo((props) => {
  const {
    unchangedBlockId,
    count,
    onReveal,
    layoutSide,
    level,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  const onClick = useCallback(() => {
    onReveal(unchangedBlockId)
  }, [onReveal, unchangedBlockId])

  return (
    <div
      data-testid="show-unchanged-nodes"
      data-precededby={precededBy}
      data-layout-side={layoutSide}
      className={[
        "show-unchanged-row-content flex w-full items-stretch gap-2",
        X_AXIS_PADDING_ROWS_ASYNC_API,
        "min-h-[26px] py-1",
      ].join(" ")}
    >
      {level > 0 && (
        <div className="level-indicator-column flex items-stretch self-stretch">
          <LevelIndicator level={level} />
          <div className="w-4" aria-hidden="true" />
        </div>
      )}
      <button
        type="button"
        className="show-unchanged-row-button text-left text-[12px] font-normal text-[#0068FF] hover:underline"
        onClick={onClick}
      >
        {formatShowUnchangedLabel(count)}
      </button>
    </div>
  )
})
