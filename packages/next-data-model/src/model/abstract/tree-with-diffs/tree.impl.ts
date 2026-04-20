import { NodeId, NodeKey } from "../../../utility-types";
import { ComplexTreeNodeWithDiffs } from "./complex-node.impl";
import { SimpleTreeNodeWithDiffs } from "./simple-node.impl";
import { ComplexTreeNodeWithDiffsParams, ITreeNodeWithDiffs, SimpleTreeNodeWithDiffsParams } from "./tree-node.interface";
import { ITreeWithDiffs } from "./tree.interface";

export class TreeWithDiffs<
  V extends object | null,
  K extends string,
  M extends object,
>
  implements ITreeWithDiffs<V, K, M> {
  public readonly nodes: Map<NodeId, ITreeNodeWithDiffs<V, K, M>> = new Map()

  constructor() {
  }

  public get root(): ITreeNodeWithDiffs<V, K, M> | null {
    return this.nodes.get('#') ?? null
  }

  public createSimpleNode(
    id: NodeId,
    key: NodeKey,
    kind: K,
    isCycle: boolean,
    nodeParams: SimpleTreeNodeWithDiffsParams<V, K, M>,
  ): ITreeNodeWithDiffs<V, K, M> {
    const node = new SimpleTreeNodeWithDiffs(id, key, kind, isCycle, nodeParams)
    this.nodes.set(id, node)
    return node
  }

  public createComplexNode(
    id: NodeId,
    key: NodeKey,
    kind: K,
    isCycle: boolean,
    nodeParams: ComplexTreeNodeWithDiffsParams<V, K, M>,
  ): ITreeNodeWithDiffs<V, K, M> {
    const node = new ComplexTreeNodeWithDiffs(id, key, kind, isCycle, nodeParams)
    this.nodes.set(id, node)
    return node
  }

  public createCycledClone(
    sourceNode: ITreeNodeWithDiffs<V, K, M>,
    cloneId: NodeId,
    cloneKey: NodeKey,
    cloneParent: ITreeNodeWithDiffs<V, K, M> | null,
  ): ITreeNodeWithDiffs<V, K, M> {
    const node = sourceNode.createCycledClone(cloneId, cloneKey, cloneParent)
    this.nodes.set(cloneId, node)
    return node
  }
}
