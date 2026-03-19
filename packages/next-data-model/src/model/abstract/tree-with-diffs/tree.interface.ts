import { NodeId, NodeKey } from "@apihub/next-data-model/utility-types"
import { ComplexTreeNodeParams, SimpleTreeNodeParams } from "../tree/tree-node.interface"
import { ITree } from "../tree/tree.interface"
import { ITreeNodeWithDiffs } from "./tree-node.interface"

export interface ITreeWithDiffs<
  V extends object | null,
  K extends string,
  M extends object,
> extends ITree<V, K, M> {
  root: ITreeNodeWithDiffs<V, K, M> | null
  nodes: Map<NodeId, ITreeNodeWithDiffs<V, K, M>>

  createSimpleNode(
    id: NodeId,
    key: NodeKey,
    kind: K,
    isCycle: boolean,
    nodeParams: SimpleTreeNodeParams<V, K, M>,
  ): ITreeNodeWithDiffs<V, K, M>

  createComplexNode(
    id: NodeId,
    key: NodeKey,
    kind: K,
    isCycle: boolean,
    nodeParams: ComplexTreeNodeParams<V, K, M>,
  ): ITreeNodeWithDiffs<V, K, M>

  createCycledClone(
    sourceNode: ITreeNodeWithDiffs<V, K, M>,
    cloneId: NodeId,
    cloneKey: NodeKey,
    cloneParent: ITreeNodeWithDiffs<V, K, M> | null,
  ): ITreeNodeWithDiffs<V, K, M>
}
