import { NodeDiffs, NodeDiffsSeverities } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { ITreeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree.interface";
import { TreeNodeParams } from "@apihub/next-data-model/model/abstract/tree/tree-node.interface";
import { DiffType } from "@netcracker/qubership-apihub-api-diff/dist/types";
import { TreeBuilder } from "../tree/builder";

export abstract class TreeWithDiffsBuilder<
  V extends object | null,
  K extends string,
  M extends object,
> extends TreeBuilder<V, K, M> {
  public readonly treeWithDiffs: ITreeWithDiffs<V, K, M> | null = null;

  public abstract build(): ITreeWithDiffs<V, K, M>;

  /* Atomic builders */

  protected abstract createNodeDiffs(
    kind: string,
    params: TreeNodeParams<V, K, M>,
  ): NodeDiffs<V> | undefined;

  protected abstract createNodeDescendantsDiffs(
    kind: string,
    params: TreeNodeParams<V, K, M>,
  ): Set<DiffType> | undefined;

  protected abstract createNodeDiffsSeverities(
    kind: string,
    params: TreeNodeParams<V, K, M>,
  ): NodeDiffsSeverities | undefined;
}