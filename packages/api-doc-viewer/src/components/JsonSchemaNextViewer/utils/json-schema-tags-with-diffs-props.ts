import { TagsWithDiffsProps } from "@apihub/components/shared-components/diffs/TagsWithDiffs"
import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { NODE_LEVEL_DIFF_KEY } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"

export function buildJsonSchemaTagsWithDiffsProps(
  node: JsonSchemaTreeNodeWithDiffs,
): Pick<TagsWithDiffsProps, "requiredChanged" | "requiredDiff" | "readOnlyDiff" | "writeOnlyDiff" | "deprecatedDiff"> {
  const isNodeChanged = !!node.diffs[NODE_LEVEL_DIFF_KEY]
  const requiredDiff = JsonSchemaRowDiffs.RequiredStar.takeMetaDiff(node)

  return {
    requiredChanged: !isNodeChanged && !!requiredDiff,
    requiredDiff,
    readOnlyDiff: JsonSchemaRowDiffs.MetaFlags.takeReadOnlyDiff(node),
    writeOnlyDiff: JsonSchemaRowDiffs.MetaFlags.takeWriteOnlyDiff(node),
    deprecatedDiff: JsonSchemaRowDiffs.MetaFlags.takeDeprecatedDiff(node),
  }
}
