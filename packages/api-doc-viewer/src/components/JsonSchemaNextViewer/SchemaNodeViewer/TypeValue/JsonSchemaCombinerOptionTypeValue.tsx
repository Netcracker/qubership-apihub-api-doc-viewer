import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { FC, memo } from "react"
import { resolveCombinerBranchDisplayValue } from "../../utils/resolve-combiner-display"
import { resolveCombinerOptionTitleSuffix } from "../../utils/resolve-combiner-node-diffs"
import { resolveCombinerOptionLeafNode } from "../../utils/resolve-combiner-selection"
import { JsonSchemaTypeValueText } from "./JsonSchemaTypeValueText"

export type JsonSchemaCombinerOptionTypeValueProps = {
  node: JsonSchemaTreeNode
}

/**
 * Combiner-selector option button content, plain (no diffs). Displays the type value of the
 * leaf reached by always taking the first nested variant recursively (see
 * `resolveCombinerOptionLeafNode`), with a trailing " (combinerKind)" suffix when `node` (the
 * option itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text
 * color to the button's own CSS (selected/unselected state), not the leaf's title-row default.
 */
export const JsonSchemaCombinerOptionTypeValue: FC<JsonSchemaCombinerOptionTypeValueProps> = memo<JsonSchemaCombinerOptionTypeValueProps>((props) => {
  const { node } = props

  const leafNode = resolveCombinerOptionLeafNode(node)
  const text = resolveJsonSchemaTypeLabel(resolveCombinerBranchDisplayValue(leafNode), leafNode.meta())
    + resolveCombinerOptionTitleSuffix(node)

  return <JsonSchemaTypeValueText text={text} color={null} />
})
