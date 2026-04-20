import { AbstractNodeDescendantsDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-aggregator";
import { DiffStyles, HighlightVariant, NodeDescendantDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { isObject, takeIfDiffsRecord } from "@apihub/next-data-model/utilities";
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
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
      if (!diff) {
        continue
      }

      let beforeDiffStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
      let afterDiffStyles: DiffStyles = this.DEFAULT_DIFF_STYLES

      if (isDiffAdd(diff)) {
        beforeDiffStyles = {
          isContentVisible: false,
          backgroundColor: HighlightVariant.Gray,
        }
        afterDiffStyles = {
          isContentVisible: true,
          backgroundColor: HighlightVariant.Green,
        }
      }

      if (isDiffRemove(diff)) {
        beforeDiffStyles = {
          isContentVisible: true,
          backgroundColor: HighlightVariant.Red,
        }
        afterDiffStyles = {
          isContentVisible: false,
          backgroundColor: HighlightVariant.Gray,
        }
      }

      if (isDiffReplace(diff)) {
        beforeDiffStyles = {
          isContentVisible: true,
          backgroundColor: HighlightVariant.Yellow,
        }
        afterDiffStyles = {
          isContentVisible: true,
          backgroundColor: HighlightVariant.Yellow,
        }
      }

      nodeDescendantDiffs[key] = {
        data: diff,
        styles: {
          before: beforeDiffStyles,
          after: afterDiffStyles,
        },
      }
    }

    return nodeDescendantDiffs
  }
}
