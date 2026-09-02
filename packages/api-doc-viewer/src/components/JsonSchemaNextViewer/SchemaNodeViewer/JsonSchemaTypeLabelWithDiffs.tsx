import { takeDiffSideTextHighlighterColor } from "@apihub/utils/diffs/take-diff-side-text-highlighter-color"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import {
  JsonSchemaTypeLabelSideSegment,
  resolveJsonSchemaTypeLabelSideDisplay,
} from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import { SideListDisplay, SideListDisplayKinds } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/list-side-display"
import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-meta"
import { FC, memo } from "react"
import { CommaSeparatedListWithDiffs } from "../../shared-components/CommaSeparatedList/CommaSeparatedListWithDiffs"
import { SubheaderValue } from "../../shared-components/SubheaderValue/SubheaderValue"
import { SubheaderValueAppearance } from "../../shared-components/SubheaderValue/types"
import { SubheaderValueWithDiffs } from "../../shared-components/SubheaderValue/SubheaderValueWithDiffs"

type JsonSchemaTypeLabelWithDiffsProps = {
  node: JsonSchemaTreeNodeWithDiffs
  meta: JsonSchemaTreeNodeMeta | null | undefined
  layoutSide: LayoutSide
}

function renderTypeLabelSegment(
  segment: JsonSchemaTypeLabelSideSegment,
  index: number,
  layoutSide: LayoutSide,
) {
  if (segment.diff) {
    return (
      <SubheaderValueWithDiffs
        key={`${segment.text}-${index}`}
        isVisible={true}
        value={segment.text}
        appearance={SubheaderValueAppearance.Text}
        textHighlighterColor={takeDiffSideTextHighlighterColor(segment.diff, layoutSide)}
      />
    )
  }

  return (
    <SubheaderValue
      key={`${segment.text}-${index}`}
      isVisible={true}
      value={segment.text}
      appearance={SubheaderValueAppearance.Text}
    />
  )
}

export type JsonSchemaTypeLabelSideDisplayProps = {
  display: SideListDisplay
  layoutSide: LayoutSide
}

/**
 * Renders an already-resolved {@link SideListDisplay} (type/format/title segments with
 * per-side diff highlighting). Extracted so other rows - e.g. the nesting-indicator row -
 * can render type/format/title in exactly the same format as the title row subheader.
 */
export const JsonSchemaTypeLabelSideDisplay: FC<JsonSchemaTypeLabelSideDisplayProps> = memo<JsonSchemaTypeLabelSideDisplayProps>((props) => {
  const { display, layoutSide } = props

  if (display.kind === SideListDisplayKinds.NO_DIFFS || display.kind === SideListDisplayKinds.WHOLE_DIFFS) {
    return (
      <CommaSeparatedListWithDiffs
        layoutSide={layoutSide}
        display={display}
      />
    )
  }

  return (
    <span className="inline-flex items-center gap-1">
      {display.segments.map((segment, index) => renderTypeLabelSegment(segment, index, layoutSide))}
    </span>
  )
})

export const JsonSchemaTypeLabelWithDiffs: FC<JsonSchemaTypeLabelWithDiffsProps> = memo<JsonSchemaTypeLabelWithDiffsProps>((props) => {
  const { node, meta, layoutSide } = props
  const display = resolveJsonSchemaTypeLabelSideDisplay(node, meta, layoutSide)
  return <JsonSchemaTypeLabelSideDisplay display={display} layoutSide={layoutSide} />
})
