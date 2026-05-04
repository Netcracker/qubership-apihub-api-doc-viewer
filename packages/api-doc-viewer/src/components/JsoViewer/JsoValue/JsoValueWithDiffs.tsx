import { HighlightVariant } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { FC, memo } from "react"
import { ResolvedJsoSideState } from "../resolve-jso-side-state"
import { BaseJsoValue } from "./BaseJsoValue"
import { useJsoValueWithDiffsStyles } from "./useJsoValueWithDiffsStyles"

type JsoValueWithDiffsProps = {
  sideState: ResolvedJsoSideState
  forcedBackgroundColor?: HighlightVariant
  forcedTextHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
}

export const JsoValueWithDiffs: FC<JsoValueWithDiffsProps> = memo<JsoValueWithDiffsProps>((props) => {
  const { sideState, forcedBackgroundColor, forcedTextHighlighterColor } = props
  const {
    showSubheader,
    resolvedValue,
    resolvedValueType,
    isPredefinedValueSet,
    sideStyles,
  } = sideState
  const { styleClasses, valueClasses } = useJsoValueWithDiffsStyles({
    isPredefinedValueSet,
    sideStyles,
    forcedBackgroundColor,
    forcedTextHighlighterColor,
  })

  return (
    <BaseJsoValue
      showSubheader={showSubheader}
      resolvedValue={resolvedValue}
      resolvedValueType={resolvedValueType}
      styleClasses={styleClasses}
      valueClasses={valueClasses}
    />
  )
})
