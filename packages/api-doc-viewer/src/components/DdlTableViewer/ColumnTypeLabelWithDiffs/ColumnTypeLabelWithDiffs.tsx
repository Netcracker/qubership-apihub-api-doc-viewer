import { takeDiffSideBackgroundColor } from "@apihub/utils/diffs/take-diff-side-background-color"
import { takeDiffSideTextHighlighterColor } from "@apihub/utils/diffs/take-diff-side-text-highlighter-color"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { resolveColumnTypeLabelSideDisplay } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs"
import { DdlApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { FC, memo } from "react"
import { DdlApiPropertyValue } from "../DdlApiPropertyValue/DdlApiPropertyValue"
import { DdlApiPropertyValueWithDiffs } from "../DdlApiPropertyValue/DdlApiPropertyValueWithDiffs"

type ColumnTypeLabelWithDiffsProps = {
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>
  layoutSide: LayoutSide
}

export const ColumnTypeLabelWithDiffs: FC<ColumnTypeLabelWithDiffsProps> = memo<ColumnTypeLabelWithDiffsProps>((props) => {
  const { node, layoutSide } = props
  const display = resolveColumnTypeLabelSideDisplay(node, layoutSide)

  if (display.kind === "plain") {
    return (
      <DdlApiPropertyValue
        isVisible={true}
        value={display.text}
        appearance="text"
      />
    )
  }

  if (display.kind === "monolithic") {
    return (
      <DdlApiPropertyValueWithDiffs
        isVisible={true}
        value={display.text}
        appearance="text"
        backgroundColor={takeDiffSideBackgroundColor(display.diff, layoutSide)}
      />
    )
  }

  return (
    <>
      {display.segments.map((segment, index) => (
        segment.diff
          ? (
            <DdlApiPropertyValueWithDiffs
              key={`${segment.text}-${index}`}
              isVisible={true}
              value={segment.text}
              appearance="text"
              textHighlighterColor={takeDiffSideTextHighlighterColor(segment.diff, layoutSide)}
            />
          )
          : (
            <DdlApiPropertyValue
              key={`${segment.text}-${index}`}
              isVisible={true}
              value={segment.text}
              appearance="text"
            />
          )
      ))}
    </>
  )
})
