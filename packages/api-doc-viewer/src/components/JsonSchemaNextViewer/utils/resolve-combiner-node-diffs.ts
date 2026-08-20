import { SelectorOption } from "@apihub/components/shared-components/Selector/Selector"
import { maxDiffType } from "../../../utils/common/changes"
import { AbstractNodeDiffsSeveritiesAggregator } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
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

export function buildCombinerSelectorRowDiff(
  combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  if (!isJsonSchemaTreeNodeWithDiffs(combinerNode) || !hasCombinerOwnerChanges(combinerNode)) {
    return undefined
  }

  const combinerNodeLevelDiff = combinerNode.diffs[NODE_LEVEL_DIFF_KEY]
  if (combinerNodeLevelDiff && (isDiffAdd(combinerNodeLevelDiff.data) || isDiffRemove(combinerNodeLevelDiff.data))) {
    return buildCombinerSyntheticReplaceDiff(combinerNodeLevelDiff)
  }

  return buildCombinerSyntheticReplaceDiff(combinerNodeLevelDiff)
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

    for (const nestedDiff of Object.values(nestedNode.diffs)) {
      if (nestedDiff) {
        severityCandidates.push(buildNodeDiffsSeverityFromChangedProperty(nestedDiff))
      }
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

  for (const propertyDiff of Object.values(combinerNode.diffs)) {
    if (propertyDiff) {
      severityCandidates.push(buildNodeDiffsSeverityFromChangedProperty(propertyDiff))
    }
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

export function buildCombinerSelectorRowPresentation(
  combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
): CombinerSelectorRowPresentation {
  return {
    selectorRowDiff: buildCombinerSelectorRowDiff(combinerNode),
    diffsSeverities: buildCombinerSelectorRowDiffsSeverities(combinerNode),
  }
}

export function buildCombinerSelectorOption(
  nestedNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs,
  index: number,
): SelectorOption<JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs> {
  const baseOption: SelectorOption<JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs> = {
    title: resolveJsonSchemaTypeLabel(
      resolveCombinerBranchDisplayValue(nestedNode),
      nestedNode.meta(),
    ),
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
