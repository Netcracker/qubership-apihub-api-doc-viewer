import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { HighlightVariant } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { useMemo } from "react"

export function useAdditionalInfoPieceStyles(
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>,
): string {
  return useMemo(() => {
    return [
      'additional-info-piece',
      'subheader',
      'block',
      DiffsClassesBuilder.highlighter(textHighlighterColor),
    ].filter(Boolean).join(' ')
  }, [textHighlighterColor])
}
