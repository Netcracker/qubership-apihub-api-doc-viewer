import { SelectorOption } from "@apihub/components/shared-components/Selector/Selector"
import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import { JsonSchemaRowDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import { resolveCombinerBranchDisplayValue } from "./resolve-combiner-display"
import { isJsonSchemaCombinerOwnerNode } from "./node-type-checkers"
import { resolveJsonSchemaCombinerNestingIndicatorTitle } from "./resolve-json-schema-nesting-indicator-title"

/**
 * A combiner variant can itself be a nested combiner (e.g. a `oneOf` branch that is itself
 * `{ oneOf: [...] }`). The plain type-label resolution drills straight through to that nested
 * combiner's own first variant (via `resolveCombinerBranchDisplayValue`'s `_fragment` proxy), so
 * without this suffix the option button reads as a leaf type when it actually opens another
 * selector. Applies recursively at any nesting depth - each option only reports its own
 * immediate nested-combiner kind, not the kind of combiners further down.
 */
export function resolveCombinerOptionTitleSuffix(
  nestedNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): string {
  if (!isJsonSchemaCombinerOwnerNode(nestedNode)) {
    return ""
  }
  const nestedCombinerKind = resolveJsonSchemaCombinerNestingIndicatorTitle(nestedNode)
  return nestedCombinerKind ? ` (${nestedCombinerKind})` : ""
}

/**
 * `title` defaults to the plain type-label + combiner-kind-suffix string (used as-is by tests
 * and any non-UI caller); the view layer overrides it with a rich, diff-aware render function
 * built from the shared TypeValue component stack - see `CombinerNodeViewer.tsx` and
 * `TypeValue/JsonSchemaCombinerOptionTypeValue[WithDiffs].tsx`.
 */
export function buildCombinerSelectorOption<N extends JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs>(
  nestedNode: N,
  index: number,
  title: SelectorOption<N>["title"] = (
    resolveJsonSchemaTypeLabel(
      resolveCombinerBranchDisplayValue(nestedNode),
      nestedNode.meta(),
    ) + resolveCombinerOptionTitleSuffix(nestedNode)
  ),
): SelectorOption<N> {
  const baseOption: SelectorOption<N> = {
    title,
    node: nestedNode,
    testId: `json-schema-combiner-option-${index}`,
  }

  if (!isJsonSchemaTreeNodeWithDiffs(nestedNode)) {
    return baseOption
  }

  const whollyAddedOrRemoved = JsonSchemaRowDiffs.NodeLevel.isWholePropertyAddOrRemove(nestedNode)

  return {
    ...baseOption,
    diffs: nestedNode.diffs,
    ...(whollyAddedOrRemoved
      ? {}
      : {
        diffsSummary: nestedNode.diffsSummary,
        descendantDiffsSummary: nestedNode.descendantDiffsSummary,
      }),
  }
}
