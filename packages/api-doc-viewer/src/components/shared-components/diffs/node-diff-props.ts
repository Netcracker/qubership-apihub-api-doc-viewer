import {
  ChangedPropertyMetaData,
  NodeDescendantDiffs,
  NodeDiffs,
  NodeDiffsSeverities,
  NodeDiffsSeverityPlacemennt,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { useMemo } from "react"

type NodeWithDiffState<V extends object = object> = {
  diffs: NodeDiffs<V>
  descendantDiffs: NodeDescendantDiffs
  diffsSeverities: NodeDiffsSeverities
}

export type NodeDiffState<V extends object = object> = {
  nodeDiffs: NodeDiffs<V> | undefined
  nodeDescendantDiffs: NodeDescendantDiffs | undefined
  nodeDiffsSeverities: NodeDiffsSeverities | undefined
}

type BuildRowDiffPropsConfig<V extends object = object> = {
  diffKey?: keyof V | string
  fallbackToNodeDiff?: boolean
  includeDescendantDiffs?: boolean
  diffsSeverityPlacement?: NodeDiffsSeverityPlacemennt
  resolveDiff?: (
    diffs: NodeDiffs<V>,
    getDiffByKey: (key: keyof V | string) => ChangedPropertyMetaData | undefined,
  ) => ChangedPropertyMetaData | undefined
}

export type RowDiffProps = {
  diff?: ChangedPropertyMetaData
  descendantDiffs?: NodeDescendantDiffs
  diffsSeverities?: NodeDiffsSeverities
  diffsSeverityPlacement?: NodeDiffsSeverityPlacemennt
}

export function useNodeDiffState<V extends object, N>(
  node: N,
  isNodeWithDiffs: (node: N) => node is N & NodeWithDiffState<V>,
): NodeDiffState<V> {
  return useMemo(() => {
    if (!isNodeWithDiffs(node)) {
      return {
        nodeDiffs: undefined,
        nodeDescendantDiffs: undefined,
        nodeDiffsSeverities: undefined,
      }
    }
    return {
      nodeDiffs: node.diffs,
      nodeDescendantDiffs: node.descendantDiffs,
      nodeDiffsSeverities: node.diffsSeverities,
    }
  }, [isNodeWithDiffs, node])
}

export function toNodeDiffState<V extends object>(node: NodeWithDiffState<V>): NodeDiffState<V> {
  return {
    nodeDiffs: node.diffs,
    nodeDescendantDiffs: node.descendantDiffs,
    nodeDiffsSeverities: node.diffsSeverities,
  }
}

export function buildRowDiffProps<V extends object = object>(
  state: NodeDiffState<V>,
  config: BuildRowDiffPropsConfig<V> = {},
): RowDiffProps {
  const {
    diffKey = "",
    fallbackToNodeDiff = true,
    includeDescendantDiffs = true,
    diffsSeverityPlacement,
    resolveDiff,
  } = config
  const { nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities } = state
  if (!nodeDiffs) {
    return {}
  }

  const getDiffByKey = (key: keyof V | string) => nodeDiffs[key as keyof NodeDiffs<V>] as ChangedPropertyMetaData | undefined
  const keyedDiff = getDiffByKey(diffKey)
  const diff = resolveDiff
    ? resolveDiff(nodeDiffs, getDiffByKey)
    : (fallbackToNodeDiff ? nodeDiffs[""] ?? keyedDiff : keyedDiff)

  return {
    diff,
    ...(includeDescendantDiffs ? { descendantDiffs: nodeDescendantDiffs } : {}),
    diffsSeverities: nodeDiffsSeverities,
    ...(diffsSeverityPlacement ? { diffsSeverityPlacement } : {}),
  }
}
