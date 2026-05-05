import { DiffMetaKeys } from "@apihub/next-data-model/building-service/async-api/tree-with-diffs/node-diffs-data/node-diffs/factory";
import { ITreeNodeWithDiffs, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { Diff, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from '@netcracker/qubership-apihub-api-diff';

export abstract class AbstractNodeDiffsAggregator<
  V extends object | null,
  K extends string,
  M extends object,
  D extends object | null,
> {
  public abstract aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: ITreeNodeWithDiffs<V, K, M, D>,
    containerNode?: ITreeNodeWithDiffs<V, K, M, D>,
  ): NodeDiffs<D> | undefined;

  public static isDiffsRecord(value: unknown): value is Partial<Record<string, Diff>> {
    if (!isObject(value)) {
      return false
    }

    for (const maybeDiff of Object.values(value)) {
      if (!AbstractNodeDiffsAggregator.isDiff(maybeDiff)) {
        return false
      }
    }

    return true
  }

  public static isDiff(value: unknown): value is Diff {
    const maybeDiff: Diff | undefined = value as Diff | undefined
    return isObject(maybeDiff) && (isDiffAdd(maybeDiff) || isDiffRemove(maybeDiff) || isDiffRename(maybeDiff) || isDiffReplace(maybeDiff))
  }
}