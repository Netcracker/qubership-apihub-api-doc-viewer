import { HighlightVariant } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { useMemo } from "react"

export type JsoValueWithDiffsAppearance = 'text' | 'block'

export type UseJsoValueWithDiffsStylesInput = {
  appearance: JsoValueWithDiffsAppearance
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  borderShadowColor?: HighlightVariant
  backgroundColor?: HighlightVariant
  blockClassName?: string
}

export function useJsoValueWithDiffsStyles(input: UseJsoValueWithDiffsStylesInput): string {
  const {
    appearance,
    textHighlighterColor,
    borderShadowColor,
    backgroundColor,
    blockClassName = 'px-2 rounded-md',
  } = input

  return useMemo(() => {
    return [
      'jso-value',
      'subheader',
      appearance === 'text' ? DiffsClassesBuilder.highlighter(textHighlighterColor) : '',
      appearance === 'block' ? blockClassName : '',
      appearance === 'block' ? DiffsClassesBuilder.borderShadow(borderShadowColor) : '',
      appearance === 'block' ? DiffsClassesBuilder.background(backgroundColor) : '',
    ].filter(Boolean).join(' ')
  }, [appearance, backgroundColor, blockClassName, borderShadowColor, textHighlighterColor])
}
