import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { SideListDisplay, SideListDisplayKinds } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/list-side-display"
import { FC, memo } from "react"
import { JsonSchemaTypeValueDiffSegment } from "./JsonSchemaTypeValueDiffSegment"
import { JsonSchemaTypeValueText } from "./JsonSchemaTypeValueText"

export type JsonSchemaTypeValueSideDisplayProps = {
  display: SideListDisplay
  layoutSide: LayoutSide
  color?: string
}

/**
 * Local SideListDisplay renderer for JSON Schema type-value text, independent of
 * SubheaderValue/CommaSeparatedListWithDiffs (see JsonSchemaTitleSubheader.tsx note). Shared
 * by both with-diffs orchestrators (title row and nesting-indicator row).
 */
export const JsonSchemaTypeValueSideDisplay: FC<JsonSchemaTypeValueSideDisplayProps> = memo<JsonSchemaTypeValueSideDisplayProps>((props) => {
  const { display, layoutSide, color } = props

  if (display.kind === SideListDisplayKinds.NO_DIFFS) {
    return <JsonSchemaTypeValueText text={display.text} color={color} />
  }

  if (display.kind === SideListDisplayKinds.WHOLE_DIFFS) {
    return (
      <JsonSchemaTypeValueDiffSegment
        text={display.text}
        diff={display.diff}
        layoutSide={layoutSide}
        color={color}
      />
    )
  }

  return (
    <span className="json-schema-type-value-segments inline-flex items-center gap-1">
      {display.segments.map((segment, index) => (
        <JsonSchemaTypeValueDiffSegment
          key={`${segment.text}-${index}`}
          text={segment.text}
          diff={segment.diff}
          layoutSide={layoutSide}
          color={color}
        />
      ))}
    </span>
  )
})
