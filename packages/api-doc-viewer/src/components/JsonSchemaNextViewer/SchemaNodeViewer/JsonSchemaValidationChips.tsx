import { takeDiffSideBorderShadowColor } from "@apihub/utils/diffs/take-diff-side-border-shadow-color"
import { takeDiffSideIsFontMuted } from "@apihub/utils/diffs/take-diff-side-is-font-muted"
import { takeDiffSideTextHighlighterColor } from "@apihub/utils/diffs/take-diff-side-text-highlighter-color"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { ListSideItem } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/list-side-display"
import { AdditionalInfoPiece } from "@apihub/components/shared-components/AdditionalInfoPiece/AdditionalInfoPiece"
import { AdditionalInfoPieceUsage } from "@apihub/components/shared-components/AdditionalInfoPiece/types"
import { FC, memo } from "react"

export type JsonSchemaValidationChipsProps = {
  layoutSide: LayoutSide
  sideItems: readonly ListSideItem[]
}

export const JsonSchemaValidationChips: FC<JsonSchemaValidationChipsProps> = memo<JsonSchemaValidationChipsProps>((props) => {
  const { layoutSide, sideItems } = props

  if (!sideItems.length) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {sideItems.map((sideItem, index) => (
        <AdditionalInfoPiece
          key={`${sideItem.text}-${index}`}
          isVisible={true}
          value={sideItem.text}
          usage={AdditionalInfoPieceUsage.JsonSchemaValidation}
          textHighlighterColor={takeDiffSideTextHighlighterColor(sideItem.diff, layoutSide)}
          borderShadowColor={takeDiffSideBorderShadowColor(sideItem.diff, layoutSide)}
          isFontMuted={takeDiffSideIsFontMuted(sideItem.diff, layoutSide)}
        />
      ))}
    </div>
  )
})
