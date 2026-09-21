import { buildRowDiffProps, toNodeDiffState } from "@apihub/components/shared-components/diffs/node-diff-props"
import { TitleRowProps } from "@apihub/components/shared-components/TitleRow/types"
import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"

export function buildJsonSchemaTitleRowDiffProps(
  node: JsonSchemaTreeNodeWithDiffs,
): Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities"> {
  return buildRowDiffProps<JsonSchemaTreeNodeValue>(toNodeDiffState(node), {
    resolveDiff: () => JsonSchemaRowDiffs.TitleRow.takeDiff(node),
  })
}
