import { NodeId, NodeKey, UnknownObject } from "../../../utility-types"

export const TreeNodeTypes = {
  SIMPLE: 'simple',
  ONE_OF: 'oneOf',
  ANY_OF: 'anyOf',
  ALL_OF: 'allOf',
} as const
export type TreeNodeType = (typeof TreeNodeTypes)[keyof typeof TreeNodeTypes]
export type ComplexTreeNodeType = Exclude<TreeNodeType, typeof TreeNodeTypes.SIMPLE>

export type TreeNodeParams<
  V extends UnknownObject | null,
  K extends string,
  M extends UnknownObject,
> = {
  type?: TreeNodeType
  value: V | null
  meta?: M
  parent: ITreeNode<V, K, M> | null
  container: ITreeNode<V, K, M> | null
  newDataLevel: boolean
}

export type SimpleTreeNodeParams<
  V extends UnknownObject | null,
  K extends string,
  M extends UnknownObject,
> = TreeNodeParams<V, K, M> & {
  type: typeof TreeNodeTypes.SIMPLE
}

export type ComplexTreeNodeParams<
  V extends UnknownObject | null,
  K extends string,
  M extends UnknownObject,
> = TreeNodeParams<V, K, M> & {
  type: Exclude<TreeNodeType, typeof TreeNodeTypes.SIMPLE>
}

export interface ITreeNode<
  V extends UnknownObject | null = UnknownObject | null,
  K extends string = string,
  M extends UnknownObject = UnknownObject,
> {
  id: NodeId
  key: NodeKey
  kind: K
  type: TreeNodeType
  newDataLevel: boolean
  parent: ITreeNode | null
  container: ITreeNode | null
  isCycle: boolean

  createCycledClone(
    id: NodeId,
    key: NodeKey,
    parent: ITreeNode | null,
  ): ITreeNode<V, K, M>

  value(nestedNodeId?: NodeId): V | null;

  meta(): M;

  childrenNodes(nestedNodeId?: NodeId): ITreeNode<V, K, M>[]

  nestedNodes(): ITreeNode<V, K, M>[]

  findNestedNode(nestedNodeId?: NodeId, recursive?: boolean): ITreeNode<V, K, M> | null

  addChildNode(node: ITreeNode): void

  addNestedNode(node: ITreeNode): void
}
