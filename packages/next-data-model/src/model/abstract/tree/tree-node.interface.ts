import { NodeId, NodeKey, UnknownObject } from "../../../utility-types"

export const TreeNodeComplexityTypes = {
  SIMPLE: 'simple',
  COMPLEX: 'complex',
} as const
export type TreeNodeComplexityType = (typeof TreeNodeComplexityTypes)[keyof typeof TreeNodeComplexityTypes]

export type TreeNodeParams<
  V extends UnknownObject | null,
  K extends string,
  M extends UnknownObject,
> = {
  type?: TreeNodeComplexityType
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
  type: typeof TreeNodeComplexityTypes.SIMPLE
}

export type ComplexTreeNodeParams<
  V extends UnknownObject | null,
  K extends string,
  M extends UnknownObject,
> = TreeNodeParams<V, K, M> & {
  type: typeof TreeNodeComplexityTypes.COMPLEX
}

export interface ITreeNode<
  V extends UnknownObject | null = UnknownObject | null,
  K extends string = string,
  M extends UnknownObject = UnknownObject,
> {
  id: NodeId
  key: NodeKey
  kind: K
  type: TreeNodeComplexityType
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
