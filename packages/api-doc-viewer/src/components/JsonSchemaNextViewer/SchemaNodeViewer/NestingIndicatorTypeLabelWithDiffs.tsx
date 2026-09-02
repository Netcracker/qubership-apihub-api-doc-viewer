import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import {
  resolveJsonSchemaTypeLabelSideDisplay,
  resolveJsonSchemaTypeSideValue,
} from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import { isJsonSchemaPrimitiveValueType } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/schema-value"
import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-meta"
import { FC, memo } from "react"
import { JsonSchemaTypeLabelSideDisplay } from "./JsonSchemaTypeLabelWithDiffs"

export type NestingIndicatorTypeLabelWithDiffsProps = {
  node: JsonSchemaTreeNodeWithDiffs
  meta: JsonSchemaTreeNodeMeta | null | undefined
  layoutSide: LayoutSide
}

/**
 * Nesting-indicator row content for a node's children header, rendered in the exact same
 * format as the title row subheader (type/format/title, per-side diff resolution and
 * highlighting) - invisible on a side whose resolved type is primitive, since a primitive
 * type never has children to introduce.
 */
export const NestingIndicatorTypeLabelWithDiffs: FC<NestingIndicatorTypeLabelWithDiffsProps> =
  memo<NestingIndicatorTypeLabelWithDiffsProps>((props) => {
    const { node, meta, layoutSide } = props

    const sideType = resolveJsonSchemaTypeSideValue(node, layoutSide)
    if (isJsonSchemaPrimitiveValueType(sideType)) {
      return null
    }

    const display = resolveJsonSchemaTypeLabelSideDisplay(node, meta, layoutSide)
    return <JsonSchemaTypeLabelSideDisplay display={display} layoutSide={layoutSide} />
  })
