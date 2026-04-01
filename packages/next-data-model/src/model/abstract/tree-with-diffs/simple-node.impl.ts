import { NodeId, NodeKey } from "../../../utility-types";
import { TreeNodeComplexityType, TreeNodeComplexityTypes } from "../tree/tree-node.interface";
import { ITreeNodeWithDiffs, NodeDescendantDiffs, NodeDescendantDiffsSummary, NodeDiffs, NodeDiffsSeverities, NodeDiffsSummary, TreeNodeWithDiffsParams } from "./tree-node.interface";

export class SimpleTreeNodeWithDiffs<
  V extends object | null,
  K extends string,
  M extends object,
> implements ITreeNodeWithDiffs<V, K, M> {

  public readonly type: TreeNodeComplexityType
  public readonly parent: ITreeNodeWithDiffs | null
  public readonly container: ITreeNodeWithDiffs | null
  public readonly newDataLevel: boolean

  protected readonly _value: V | null
  protected readonly _meta: M

  protected readonly _childrenNodes: ITreeNodeWithDiffs<V, K, M>[] = []
  protected readonly _nestedNodes: ITreeNodeWithDiffs<V, K, M>[] = []

  protected readonly _diffs: NodeDiffs<V> = { }
  protected readonly _diffsSummary: NodeDiffsSummary = new Set()
  protected readonly _descendantDiffs: NodeDescendantDiffs = {}
  protected readonly _descendantDiffsSummary: NodeDescendantDiffsSummary = new Set()
  protected readonly _diffsSeverities: NodeDiffsSeverities = {}

  get diffs(): NodeDiffs<V> {
    return this._diffs;
  }
  get diffsSummary(): NodeDiffsSummary {
    return this._diffsSummary;
  }
  get descendantDiffs(): NodeDescendantDiffs {
    return this._descendantDiffs;
  }
  get descendantDiffsSummary(): NodeDescendantDiffsSummary {
    return this._descendantDiffsSummary;
  }
  get diffsSeverities(): NodeDiffsSeverities {
    return this._diffsSeverities;
  }

  constructor(
    public readonly id: NodeId = '#',
    public readonly key: NodeKey = '',
    public readonly kind: K,
    public readonly isCycle: boolean,
    nodeParams: TreeNodeWithDiffsParams<V, K, M>,
  ) {
    const {
      type = TreeNodeComplexityTypes.SIMPLE,
      value = null,
      parent = null,
      container = null,
      newDataLevel = true,
      meta,
    } = nodeParams;
    this.type = type;
    this.parent = parent;
    this.container = container;
    this.newDataLevel = newDataLevel;

    this._value = value;
    this._meta = meta!; // if you did not pass "meta", that is wrong contract
    // TODO 05.11.25 // Separate params contract for different scenarios.
  }

  public createCycledClone(
    id: NodeId,
    key: NodeKey,
    parent: ITreeNodeWithDiffs<V, K, M> | null,
  ): ITreeNodeWithDiffs<V, K, M> {
    const clonedNode = new SimpleTreeNodeWithDiffs<V, K, M>(id, key, this.kind, true, {
      type: this.type,
      parent: parent,
      container: null,
      newDataLevel: this.newDataLevel,
      value: this._value !== null ? { ...this._value } : null,
      meta: { ...this._meta },
    });
    clonedNode.setChildrenNodes(this._childrenNodes);
    clonedNode.setNestedNodes(this._nestedNodes);
    return clonedNode;
  }

  public value(nestedNodeId?: NodeId): V | null {
    return nestedNodeId ? null : this._value;
  }

  public meta(): M {
    return this._meta;
  }

  public childrenNodes(nestedNodeId?: NodeId): ITreeNodeWithDiffs<V, K, M>[] {
    return nestedNodeId ? [] : this._childrenNodes;
  }

  /* not public API */
  protected setChildrenNodes(childrenNodes: ITreeNodeWithDiffs<V, K, M>[]): void {
    this._childrenNodes.length = 0;
    this._childrenNodes.push(...childrenNodes);
  }

  public nestedNodes(): ITreeNodeWithDiffs<V, K, M>[] {
    return this._nestedNodes;
  }

  /* not public API */
  protected setNestedNodes(nestedNodes: ITreeNodeWithDiffs<V, K, M>[]): void {
    this._nestedNodes.length = 0;
    this._nestedNodes.push(...nestedNodes);
  }

  public findNestedNode(nestedNodeId?: NodeId, recursive = false): ITreeNodeWithDiffs<V, K, M> | null {
    if (!nestedNodeId && this._nestedNodes.length) {
      return this._nestedNodes[0];
    }

    for (const nestedNode of this._nestedNodes) {
      if (nestedNode.id === nestedNodeId) {
        return nestedNode;
      }
      if (recursive && nestedNode.type === TreeNodeComplexityTypes.COMPLEX) {
        const node = nestedNode.findNestedNode(nestedNodeId, recursive);
        if (node) {
          return node;
        }
      }
    }

    return null;
  }

  public addChildNode(node: ITreeNodeWithDiffs<V, K, M>): void {
    this._childrenNodes.push(node);
  }

  public addNestedNode(node: ITreeNodeWithDiffs<V, K, M>): void {
    this._nestedNodes.push(node);
  }

}