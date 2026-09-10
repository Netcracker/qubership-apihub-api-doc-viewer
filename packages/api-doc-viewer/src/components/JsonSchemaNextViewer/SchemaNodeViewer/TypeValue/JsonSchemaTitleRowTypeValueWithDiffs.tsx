import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { resolveJsonSchemaTypeLabelSideDisplay } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-meta"
import { FC, memo } from "react"
import { JsonSchemaTypeValueSideDisplay } from "./JsonSchemaTypeValueSideDisplay"

export type JsonSchemaTitleRowTypeValueWithDiffsProps = {
  node: JsonSchemaTreeNodeWithDiffs
  meta: JsonSchemaTreeNodeMeta | null | undefined
  layoutSide: LayoutSide
}

/**
 * Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
 * sibling JsonSchemaTitleRowTypeValue).
 */
export const JsonSchemaTitleRowTypeValueWithDiffs: FC<JsonSchemaTitleRowTypeValueWithDiffsProps> = memo<JsonSchemaTitleRowTypeValueWithDiffsProps>((props) => {
  const { node, meta, layoutSide } = props
  const display = resolveJsonSchemaTypeLabelSideDisplay(node, meta, layoutSide)
  return <JsonSchemaTypeValueSideDisplay display={display} layoutSide={layoutSide} />
})
