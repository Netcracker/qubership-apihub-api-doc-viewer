import { ITreeNodeWithDiffs, NodeDescendantDiffs, NodeDescendantDiffsSummary, NodeDiffs, NodeDiffsSeverities, NodeDiffsSummary, TreeNodeWithDiffsParams } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { ITreeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree.interface";
import { NodeId, NodeKey } from "@apihub/next-data-model/utility-types";
import { DiffMetaKeys } from "../../async-api/tree-with-diffs/node-diffs-data/node-diffs/factory";
import { TreeBuilder } from "../tree/builder";

export abstract class TreeWithDiffsBuilder<
  V extends object | null,
  K extends string,
  M extends object,
> extends TreeBuilder<V, K, M> {
  public readonly treeWithDiffs: ITreeWithDiffs<V, K, M> | null = null;

  public abstract build(): ITreeWithDiffs<V, K, M>;

  protected abstract createNodeFromRaw(
    id: NodeId,
    key: NodeKey,
    kind: K,
    complex: boolean,
    params: TreeNodeWithDiffsParams<V, K, M>
  ): ITreeNodeWithDiffs<V, K, M> | undefined;

  protected abstract createNodeMeta(
    key: NodeKey,
    params: TreeNodeWithDiffsParams<V, K, M>,
  ): M;

  protected abstract createNodeValue(
    key: NodeKey,
    kind: string,
    params: TreeNodeWithDiffsParams<V, K, M>,
  ): V | null;

  /* Atomic builders */

  protected abstract createNodeDiffs(
    key: NodeKey,
    kind: string,
    params: TreeNodeWithDiffsParams<V, K, M>,
  ): NodeDiffs<V> | undefined;

  protected abstract createNodeDiffsSummary(
    kind: string,
    nodeDiffs: NodeDiffs<V> | undefined,
    crawlValue: object | null | undefined,
    diffsMetaKeys: DiffMetaKeys | undefined,
  ): NodeDiffsSummary | undefined;

  protected abstract createNodeDescendantsDiffs(
    kind: string,
    params: TreeNodeWithDiffsParams<V, K, M>,
  ): NodeDescendantDiffs | undefined;

  protected abstract createNodeDescendantsDiffsSummary(
    kind: string,
    nodeDiffs: NodeDiffs<V> | undefined,
    nodeDescendantDiffs: NodeDescendantDiffs | undefined,
    crawlValue: object | null | undefined,
    diffsMetaKeys: DiffMetaKeys | undefined,
  ): NodeDescendantDiffsSummary | undefined;

  protected abstract createNodeDiffsSeverities(
    kind: string,
    nodeDiffs: NodeDiffs<V> | undefined,
  ): NodeDiffsSeverities | undefined;
}