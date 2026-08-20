import {
  ITreeNodeWithDiffs,
  NodeDescendantDiffsSummary,
  NodeDiffsSummary,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaTreeNodeKind } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { JsonSchemaNodeChangedOptions } from "./types"

type JsonSchemaWithDiffsNode = ITreeNodeWithDiffs<
  JsonSchemaTreeNodeValue | null,
  JsonSchemaTreeNodeKind,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeValue | null
>

function hasNonEmptyRecord(record: object | undefined): boolean {
  return !!record && Object.keys(record).length > 0
}

function hasNonEmptySet(set: NodeDiffsSummary | NodeDescendantDiffsSummary | undefined): boolean {
  return !!set && set.size > 0
}

export function collectJsonSchemaOwnChangeTypes(node: JsonSchemaWithDiffsNode): ReadonlySet<DiffType> {
  const types = new Set<DiffType>()

  for (const diff of Object.values(node.diffs)) {
    if (diff) {
      types.add(diff.data.type)
    }
  }

  for (const diff of Object.values(node.descendantDiffs)) {
    if (diff) {
      types.add(diff.data.type)
    }
  }

  for (const type of node.diffsSummary) {
    types.add(type)
  }

  for (const type of node.descendantDiffsSummary) {
    types.add(type)
  }

  for (const severity of Object.values(node.diffsSeverities)) {
    if (severity) {
      types.add(severity.type)
    }
  }

  return types
}

export function hasOwnChangeSignals(
  node: JsonSchemaWithDiffsNode,
  options?: JsonSchemaNodeChangedOptions,
): boolean {
  const hasSignals = hasNonEmptyRecord(node.diffs)
    || hasNonEmptyRecord(node.descendantDiffs)
    || hasNonEmptySet(node.diffsSummary)
    || hasNonEmptySet(node.descendantDiffsSummary)
    || hasNonEmptyRecord(node.diffsSeverities)

  if (!hasSignals) {
    return false
  }

  if (!options?.diffTypes) {
    return true
  }

  const types = collectJsonSchemaOwnChangeTypes(node)
  for (const type of types) {
    if (options.diffTypes.has(type)) {
      return true
    }
  }

  return false
}
