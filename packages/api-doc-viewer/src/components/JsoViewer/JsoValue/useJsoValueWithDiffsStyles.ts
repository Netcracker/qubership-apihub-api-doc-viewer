import { DiffStyles, HighlightVariant } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { useJsoValueStyles } from "./useJsoValueStyles"

type UseJsoValueWithDiffsStylesInput = {
  isPredefinedValueSet: boolean
  sideStyles?: DiffStyles
  forcedBackgroundColor?: HighlightVariant
  forcedTextHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
}

type UseJsoValueWithDiffsStylesResult = {
  styleClasses: string[]
  valueClasses: string[]
}

export function useJsoValueWithDiffsStyles(
  input: UseJsoValueWithDiffsStylesInput,
): UseJsoValueWithDiffsStylesResult {
  const {
    isPredefinedValueSet,
    sideStyles,
    forcedBackgroundColor,
    forcedTextHighlighterColor,
  } = input
  const baseStyles = useJsoValueStyles({ isPredefinedValueSet })
  const resolvedBackgroundColor = forcedBackgroundColor ?? sideStyles?.backgroundColor
  const useFixedPoolDiffBorder = isPredefinedValueSet && resolvedBackgroundColor === HighlightVariant.Yellow
  const styleClasses = [
    useFixedPoolDiffBorder ? "" : DiffsClassesBuilder.background(resolvedBackgroundColor),
    useFixedPoolDiffBorder ? "" : DiffsClassesBuilder.highlighter(forcedTextHighlighterColor ?? sideStyles?.textHighlighterColor),
    DiffsClassesBuilder.borderShadow(sideStyles?.borderShadowColor),
    useFixedPoolDiffBorder ? "jso-value-fixed-pool-diff-border_orange" : "",
  ].filter(Boolean)

  return {
    styleClasses,
    valueClasses: baseStyles.valueClasses,
  }
}
