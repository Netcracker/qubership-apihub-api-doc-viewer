import { DiffMetaKeys } from "@apihub/next-data-model/building-service/async-api/tree-with-diffs/diffs-data-aggregators/node-diffs/factory";
import { NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { isObject } from "@apihub/next-data-model/utilities";
import { Diff, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from '@netcracker/qubership-apihub-api-diff';

export abstract class AbstractNodeDiffsAggregator<
  V extends object | null = object | null,
> {
  public abstract aggregate(crawlValue: V, diffsMetaKeys: DiffMetaKeys): NodeDiffs<V> | undefined;

  protected isDiffsRecord(value: unknown): value is Partial<Record<string, Diff>> {
    if (!isObject(value)) {
      return false
    }

    for (const maybeDiff of Object.values(value)) {
      if (!this.isDiff(maybeDiff)) {
        return false
      }
    }

    return true
  }

  protected isDiff(value: unknown): value is Diff {
    const maybeDiff: Diff | undefined = value as Diff | undefined
    return isObject(maybeDiff) && (isDiffAdd(maybeDiff) || isDiffRemove(maybeDiff) || isDiffRename(maybeDiff) || isDiffReplace(maybeDiff))
  }
}