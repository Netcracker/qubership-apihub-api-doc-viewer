import { AbstractNodeDescendantsDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-aggregator";
import { DiffStyles, NodeDescendantDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { isObject, takeIfDiffsRecord } from "@apihub/next-data-model/utilities";
import { DiffMetaKeys } from "../node-diffs/factory";

export class JsoNodeDescendantDiffsAggregatorKindAny extends AbstractNodeDescendantsDiffsAggregator {
  private readonly DEFAULT_DIFF_STYLES: DiffStyles = {
    isContentVisible: true,
  }

  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    referenceNamePropertyKey: symbol,
  ): NodeDescendantDiffs | undefined {
    if (!isObject(crawlValue)) {
      return undefined;
    }
    const value = crawlValue.value
    if (!isObject(value)) {
      return undefined
    }

    const { diffsMetaKey } = diffsMetaKeys

    const diffs = takeIfDiffsRecord(value[diffsMetaKey])
    if (!diffs) {
      return undefined
    }

    const nodeDescendantDiffs: NodeDescendantDiffs = {}
    for (const [key, diff] of Object.entries(diffs)) {
      if (diff) {
        nodeDescendantDiffs[key] = {
          data: diff,
          styles: {
            before: this.DEFAULT_DIFF_STYLES,
            after: this.DEFAULT_DIFF_STYLES,
          },
        }
      }
    }

    return nodeDescendantDiffs
  }
}
