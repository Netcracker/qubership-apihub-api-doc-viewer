import { DiffTagsProps } from "@apihub/components/common/diffs/DiffTags"
import { LayoutMode } from "@apihub/types/LayoutMode"
import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { NODE_LEVEL_DIFF_KEY } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  JSON_SCHEMA_META_FLAG_DIFF_KEYS,
  JsonSchemaRowDiffs,
} from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"

function takeJsonSchemaSubheaderFlagRawDiffs(
  node: JsonSchemaTreeNodeWithDiffs,
): Pick<ReturnType<typeof JsonSchemaRowDiffs.MetaFlags.takeRawDiffs>, "readOnly" | "writeOnly" | "deprecated"> {
  const allMeta = JsonSchemaRowDiffs.MetaFlags.takeRawDiffs(node)
  const flagDiffs: Pick<ReturnType<typeof JsonSchemaRowDiffs.MetaFlags.takeRawDiffs>, "readOnly" | "writeOnly" | "deprecated"> = {}

  for (const key of JSON_SCHEMA_META_FLAG_DIFF_KEYS) {
    const diff = allMeta[key]
    if (diff) {
      flagDiffs[key] = diff
    }
  }

  return flagDiffs
}

export function buildJsonSchemaDiffTagsProps(
  node: JsonSchemaTreeNodeWithDiffs,
  _layoutMode: LayoutMode,
): Pick<
  DiffTagsProps,
  "isNodeChanged" | "isContentChanged" | "requiredChanged" | "$nodeChange" | "$metaChanges"
> {
  const isNodeChanged = !!node.diffs[NODE_LEVEL_DIFF_KEY]
  const allMeta = JsonSchemaRowDiffs.MetaFlags.takeRawDiffs(node)
  const flagDiffs = takeJsonSchemaSubheaderFlagRawDiffs(node)
  const requiredDiff = allMeta.required
  const $metaChanges = requiredDiff
    ? { ...flagDiffs, required: requiredDiff }
    : flagDiffs
  const isContentChanged = Object.keys($metaChanges).length > 0

  return {
    isNodeChanged,
    isContentChanged,
    requiredChanged: !isNodeChanged && !!requiredDiff,
    $nodeChange: node.diffs[NODE_LEVEL_DIFF_KEY]?.data,
    $metaChanges,
  }
}
