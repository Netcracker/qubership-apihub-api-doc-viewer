import { HighlightVariant } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { useMemo } from "react"

export type JsoValueWithDiffsAppearance = 'text' | 'block'

export type UseJsoValueWithDiffsStylesInput = {
  appearance: JsoValueWithDiffsAppearance
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  borderShadowColor?: HighlightVariant
}

export function useJsoValueWithDiffsStyles(input: UseJsoValueWithDiffsStylesInput): string {
  const {
    appearance,
    textHighlighterColor,
    borderShadowColor,
  } = input

  return useMemo(() => {
    return [
      'jso-value',
      'subheader',
      appearance === 'text' ? DiffsClassesBuilder.highlighter(textHighlighterColor) : '',
      appearance === 'block' ? 'px-2 rounded-md bg-slate-200' : '',
      appearance === 'block' ? DiffsClassesBuilder.borderShadow(borderShadowColor) : '',
    ].filter(Boolean).join(' ')
  }, [appearance, borderShadowColor, textHighlighterColor])
}
