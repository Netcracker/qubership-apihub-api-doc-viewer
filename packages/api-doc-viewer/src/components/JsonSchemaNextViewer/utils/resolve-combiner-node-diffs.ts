import { SelectorOption } from "@apihub/components/shared-components/Selector/Selector"
import { maxDiffType } from "../../../utils/common/changes"
import { AbstractNodeDiffsSeveritiesAggregator } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import { takeJsonSchemaNestingIndicatorRowColorizingDiff } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import { isChangedPropertyMetaData } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/guards/property-row-diffs"
import {
  ChangedPropertyMetaData,
  DIFF_HIGHLIGHTING_MODES_DEFAULT,
  HighlightVariant,
  NODE_LEVEL_DIFF_KEY,
  NodeDiffsSeverities,
  NodeDiffsSeverity,
  NodeDiffsSeverityPlacemennt,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import { Diff, DiffAction, isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import type { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { resolveCombinerBranchDisplayValue } from "./resolve-combiner-display"
import { isJsonSchemaCombinerOwnerNode } from "./node-type-checkers"
import { resolveJsonSchemaCombinerNestingIndicatorTitle } from "./resolve-json-schema-nesting-indicator-title"

const COMBINER_ROW_REPLACE_STYLES: ChangedPropertyMetaData["styles"] = {
  before: {
    isContentVisible: true,
    isHeaderVisible: true,
    backgroundColor: HighlightVariant.Yellow,
  },
  after: {
    isContentVisible: true,
    isHeaderVisible: true,
    backgroundColor: HighlightVariant.Yellow,
  },
}

export type CombinerSelectorRowPresentation = {
  selectorRowDiff?: ChangedPropertyMetaData
  diffsSeverities?: NodeDiffsSeverities
}

function buildCombinerSyntheticReplaceDiff(
  existingDiff?: ChangedPropertyMetaData,
): ChangedPropertyMetaData {
  if (existingDiff && isDiffReplace(existingDiff.data)) {
    return {
      ...existingDiff,
      styles: COMBINER_ROW_REPLACE_STYLES,
    }
  }

  return {
    data: {
      type: "annotation" as DiffType,
      action: DiffAction.replace,
      scope: "root",
      description: "",
      beforeValue: undefined,
      afterValue: undefined,
      beforeDeclarationPaths: [],
      afterDeclarationPaths: [],
    },
    styles: COMBINER_ROW_REPLACE_STYLES,
    flags: {
      before: { increaseLevel: false },
      after: { increaseLevel: false },
    },
    highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
  }
}

function buildNodeDiffsSeverityFromChangedProperty(
  propertyDiff: ChangedPropertyMetaData,
): NodeDiffsSeverity {
  const diff = propertyDiff.data
  const nodeDiffsSeverity: NodeDiffsSeverity = {
    type: diff.type,
    causedAt: [],
  }
  if (isDiffRemove(diff) || isDiffReplace(diff)) {
    nodeDiffsSeverity.causedAt = diff.beforeDeclarationPaths[0] ?? []
  } else if (isDiffAdd(diff)) {
    nodeDiffsSeverity.causedAt = diff.afterDeclarationPaths[0] ?? []
  }
  return nodeDiffsSeverity
}

function buildNodeDiffsSeverityFromDiff(diff: Diff): NodeDiffsSeverity {
  return buildNodeDiffsSeverityFromChangedProperty({
    data: diff,
    styles: COMBINER_ROW_REPLACE_STYLES,
    flags: {
      before: { increaseLevel: false },
      after: { increaseLevel: false },
    },
    highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
  })
}

/**
 * `node.diffs` is a flat-looking record, but some entries (`typeLabelFieldDiffs`,
 * `validationRowDiffs`, `validationRowColorizingDiffs`, `enumValueDiffs`, ...) are themselves
 * nested maps of `ChangedPropertyMetaData` rather than a `ChangedPropertyMetaData` directly (see
 * the equivalent recursion in next-data-model's `JsonSchemaNodeDiffsSummaryKindAny`). Walk down
 * until real diff leaves are found instead of assuming every top-level value is a leaf.
 */
function collectChangedPropertyMetaData(
  value: unknown,
  out: ChangedPropertyMetaData[],
): void {
  if (!value || typeof value !== "object") {
    return
  }
  if (isChangedPropertyMetaData(value)) {
    out.push(value)
    return
  }
  for (const nested of Object.values(value as Record<string, unknown>)) {
    collectChangedPropertyMetaData(nested, out)
  }
}

function maxNodeDiffsSeverity(
  ...severities: (NodeDiffsSeverity | undefined)[]
): NodeDiffsSeverity | undefined {
  let maxSeverity: NodeDiffsSeverity | undefined
  for (const severity of severities) {
    if (!severity) {
      continue
    }
    if (
      !maxSeverity
      || AbstractNodeDiffsSeveritiesAggregator.compareDiffTypes(severity.type, maxSeverity.type) > 0
    ) {
      maxSeverity = severity
    }
  }
  return maxSeverity
}

function isNestedNodeWhollyAddedOrRemoved(node: JsonSchemaTreeNodeWithDiffs): boolean {
  const nodeLevelDiff = node.diffs[NODE_LEVEL_DIFF_KEY]
  return !!nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))
}

/**
 * Every `nestedNodes()` variant was uniformly added, or uniformly removed - without the owner
 * itself being wholly added/removed (that case is covered separately by
 * `isNestedNodeWhollyAddedOrRemoved(combinerNode)`, reused as-is for a combiner owner node in
 * {@link resolveCombinerSelectorLevelReductionAction}). No existing next-data-model signal covers
 * this (`takeJsonSchemaNestingIndicatorRowColorizingDiff` only inspects structural
 * properties/items children, never `nestedNodes()`), so it's computed here, view-layer only.
 */
function resolveUniformNestedNodesAction(
  combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): typeof DiffAction.add | typeof DiffAction.remove | undefined {
  const nestedNodes = combinerNode.nestedNodes()
  if (nestedNodes.length === 0) {
    return undefined
  }

  let action: typeof DiffAction.add | typeof DiffAction.remove | undefined
  for (const nestedNode of nestedNodes) {
    if (!isJsonSchemaTreeNodeWithDiffs(nestedNode)) {
      return undefined
    }
    const nestedDiff = nestedNode.diffs[NODE_LEVEL_DIFF_KEY]
    const nestedAction = nestedDiff && isDiffAdd(nestedDiff.data)
      ? DiffAction.add
      : nestedDiff && isDiffRemove(nestedDiff.data)
        ? DiffAction.remove
        : undefined
    if (!nestedAction) {
      return undefined
    }
    if (!action) {
      action = nestedAction
      continue
    }
    if (action !== nestedAction) {
      return undefined
    }
  }
  return action
}

/**
 * Level-reduction action for one `CombinerSelectorRow` instance (one `selectorLevels` entry,
 * evaluated independently per level - so a nested combiner-in-combiner chain gets its own correct
 * answer per level). `undefined` means no reduction: either nothing qualifies, or
 * `CombinerNodeViewer`'s outer level-freeze wrap (case 1 applied to this same owner node, via
 * `takeJsonSchemaNestingIndicatorRowColorizingDiff`) already pins the ambient level at the owner's
 * own level, so an additional reduction here would go one level too low - hence the
 * `isNestedNodeWhollyAddedOrRemoved` guard below.
 */
export function resolveCombinerSelectorLevelReductionAction(
  combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): typeof DiffAction.add | typeof DiffAction.remove | undefined {
  if (!isJsonSchemaTreeNodeWithDiffs(combinerNode)) {
    return undefined
  }
  if (isNestedNodeWhollyAddedOrRemoved(combinerNode)) {
    return undefined
  }
  return resolveUniformNestedNodesAction(combinerNode)
}

function nestedNodeHasDiffSignals(node: JsonSchemaTreeNodeWithDiffs): boolean {
  if (node.diffsSummary.size > 0) {
    return true
  }
  if (node.descendantDiffsSummary.size > 0) {
    return true
  }
  if (Object.keys(node.diffs).length > 0) {
    return true
  }
  if (Object.keys(node.descendantDiffs).length > 0) {
    return true
  }
  return false
}

export function hasCombinerOwnerChanges(
  ownerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): boolean {
  if (!isJsonSchemaTreeNodeWithDiffs(ownerNode)) {
    return false
  }

  if (ownerNode.diffsSummary.size > 0) {
    return true
  }
  if (Object.keys(ownerNode.descendantDiffs).length > 0) {
    return true
  }
  if (ownerNode.descendantDiffsSummary.size > 0) {
    return true
  }

  return ownerNode.nestedNodes().some((nestedNode) => (
    isJsonSchemaTreeNodeWithDiffs(nestedNode) && nestedNodeHasDiffSignals(nestedNode)
  ))
}

/**
 * Fallback for a combiner row that changed but was not itself wholly added/removed (e.g. a
 * description/type edit on an existing variant) - always a yellow "replace" indication.
 * Whole add/remove is handled upstream by {@link buildCombinerSelectorRowPresentation} via the
 * precomputed `nestingIndicatorRowColorizingDiff` from next-data-model.
 */
export function buildCombinerSelectorRowDiff(
  combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  if (!isJsonSchemaTreeNodeWithDiffs(combinerNode) || !hasCombinerOwnerChanges(combinerNode)) {
    return undefined
  }

  return buildCombinerSyntheticReplaceDiff(combinerNode.diffs[NODE_LEVEL_DIFF_KEY])
}

export function buildCombinerSelectorRowDiffsSeverities(
  combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): NodeDiffsSeverities | undefined {
  if (!isJsonSchemaTreeNodeWithDiffs(combinerNode) || !hasCombinerOwnerChanges(combinerNode)) {
    return undefined
  }

  const severityCandidates: NodeDiffsSeverity[] = []

  for (const severity of Object.values(combinerNode.diffsSeverities)) {
    if (severity) {
      severityCandidates.push(severity)
    }
  }

  for (const descendantDiff of Object.values(combinerNode.descendantDiffs)) {
    if (descendantDiff) {
      severityCandidates.push(buildNodeDiffsSeverityFromChangedProperty(descendantDiff))
    }
  }

  for (const nestedNode of combinerNode.nestedNodes()) {
    if (!isJsonSchemaTreeNodeWithDiffs(nestedNode)) {
      continue
    }

    for (const severity of Object.values(nestedNode.diffsSeverities)) {
      if (severity) {
        severityCandidates.push(severity)
      }
    }

    const nestedChangedProperties: ChangedPropertyMetaData[] = []
    for (const nestedDiff of Object.values(nestedNode.diffs)) {
      collectChangedPropertyMetaData(nestedDiff, nestedChangedProperties)
    }
    for (const nestedChangedProperty of nestedChangedProperties) {
      severityCandidates.push(buildNodeDiffsSeverityFromChangedProperty(nestedChangedProperty))
    }

    const nestedSummaryMaxType = maxDiffType([
      ...nestedNode.diffsSummary,
      ...nestedNode.descendantDiffsSummary,
    ])
    if (nestedSummaryMaxType) {
      severityCandidates.push({ type: nestedSummaryMaxType, causedAt: [] })
    }
  }

  const combinerNodeLevelDiff = combinerNode.diffs[NODE_LEVEL_DIFF_KEY]
  if (combinerNodeLevelDiff) {
    severityCandidates.push(buildNodeDiffsSeverityFromChangedProperty(combinerNodeLevelDiff))
  }

  const ownChangedProperties: ChangedPropertyMetaData[] = []
  for (const propertyDiff of Object.values(combinerNode.diffs)) {
    collectChangedPropertyMetaData(propertyDiff, ownChangedProperties)
  }
  for (const ownChangedProperty of ownChangedProperties) {
    severityCandidates.push(buildNodeDiffsSeverityFromChangedProperty(ownChangedProperty))
  }

  const summaryMaxType = maxDiffType([
    ...combinerNode.diffsSummary,
    ...combinerNode.descendantDiffsSummary,
  ])
  if (summaryMaxType) {
    severityCandidates.push({ type: summaryMaxType, causedAt: [] })
  }

  const maxSeverity = maxNodeDiffsSeverity(...severityCandidates)
  if (!maxSeverity) {
    const syntheticDiff = buildCombinerSyntheticReplaceDiff(combinerNodeLevelDiff)
    return {
      [NodeDiffsSeverityPlacemennt.TitleRow]: buildNodeDiffsSeverityFromDiff(syntheticDiff.data),
    }
  }

  return {
    [NodeDiffsSeverityPlacemennt.TitleRow]: maxSeverity,
  }
}

/**
 * A combiner variant can itself be a nested combiner (`oneOf`/`anyOf`/`allOf` inside a
 * variant). When that nested combiner node was wholly added or removed, next-data-model already
 * computes the correct single-side-only add/remove colorizing diff and matching severity for it
 * (`nestingIndicatorRowColorizingDiff` / `diffsSeverities[NestingIndicatorRow]` - the same fields
 * `NestingIndicatorTitleRow` consumes elsewhere), via the generic parent/container diff-inheritance
 * cascade in `JsonSchemaNodeDiffsAggregatorKindAny` - this applies recursively at any nesting
 * depth without extra wiring. Prefer that precomputed data over the ad-hoc yellow "replace"
 * fallback below, which is reserved for partial (non whole-node) changes.
 */
export function buildCombinerSelectorRowPresentation(
  combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): CombinerSelectorRowPresentation {
  if (isJsonSchemaTreeNodeWithDiffs(combinerNode)) {
    const wholeNodeRowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(combinerNode)
    if (wholeNodeRowDiff) {
      const wholeNodeSeverity = combinerNode.diffsSeverities[NodeDiffsSeverityPlacemennt.NestingIndicatorRow]
      return {
        selectorRowDiff: wholeNodeRowDiff,
        diffsSeverities: wholeNodeSeverity
          ? { [NodeDiffsSeverityPlacemennt.TitleRow]: wholeNodeSeverity }
          : undefined,
      }
    }
  }

  return {
    selectorRowDiff: buildCombinerSelectorRowDiff(combinerNode),
    diffsSeverities: buildCombinerSelectorRowDiffsSeverities(combinerNode),
  }
}

/**
 * A combiner variant can itself be a nested combiner (e.g. a `oneOf` branch that is itself
 * `{ oneOf: [...] }`). The plain type-label resolution drills straight through to that nested
 * combiner's own first variant (via `resolveCombinerBranchDisplayValue`'s `_fragment` proxy), so
 * without this suffix the option button reads as a leaf type when it actually opens another
 * selector. Applies recursively at any nesting depth - each option only reports its own
 * immediate nested-combiner kind, not the kind of combiners further down.
 */
function resolveCombinerOptionTitleSuffix(
  nestedNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): string {
  if (!isJsonSchemaCombinerOwnerNode(nestedNode)) {
    return ""
  }
  const nestedCombinerKind = resolveJsonSchemaCombinerNestingIndicatorTitle(nestedNode)
  return nestedCombinerKind ? ` (${nestedCombinerKind})` : ""
}

export function buildCombinerSelectorOption(
  nestedNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
  index: number,
): SelectorOption<JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs> {
  const baseOption: SelectorOption<JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs> = {
    title: resolveJsonSchemaTypeLabel(
      resolveCombinerBranchDisplayValue(nestedNode),
      nestedNode.meta(),
    ) + resolveCombinerOptionTitleSuffix(nestedNode),
    node: nestedNode,
    testId: `json-schema-combiner-option-${index}`,
  }

  if (!isJsonSchemaTreeNodeWithDiffs(nestedNode)) {
    return baseOption
  }

  const whollyAddedOrRemoved = isNestedNodeWhollyAddedOrRemoved(nestedNode)

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
