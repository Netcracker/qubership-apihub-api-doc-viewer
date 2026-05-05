import { HighlightVariant } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { FC, memo } from "react"
import { JsoValueBase } from "./JsoValueBase"
import { JsoValueWithDiffsAppearance, useJsoValueWithDiffsStyles } from "./useJsoValueWithDiffsStyles"

export type JsoValueWithDiffsProps = {
  isVisible: boolean
  value: unknown
  appearance: JsoValueWithDiffsAppearance
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  borderShadowColor?: HighlightVariant
  backgroundColor?: HighlightVariant
  blockClassName?: string
}

export const JsoValueWithDiffs: FC<JsoValueWithDiffsProps> = memo<JsoValueWithDiffsProps>((props) => {
  const {
    isVisible,
    value,
    appearance,
    textHighlighterColor,
    borderShadowColor,
    backgroundColor,
    blockClassName,
  } = props
  const className = useJsoValueWithDiffsStyles({
    appearance,
    textHighlighterColor,
    borderShadowColor,
    backgroundColor,
    blockClassName,
  })

  return (
    <JsoValueBase
      isVisible={isVisible}
      value={value}
      className={className}
    />
  )
})
