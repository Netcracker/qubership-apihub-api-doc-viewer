import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { HighlightVariant } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { useMemo } from "react"

export type AdditionalInfoPieceStyles = {
  blockClassName: string
  valueClassName: string
}

export function useAdditionalInfoPieceStyles(
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>,
): AdditionalInfoPieceStyles {
  return useMemo(() => ({
    blockClassName: [
      'additional-info-piece',
      'subheader',
      'block',
    ].join(' '),
    valueClassName: DiffsClassesBuilder.highlighter(textHighlighterColor),
  }), [textHighlighterColor])
}
