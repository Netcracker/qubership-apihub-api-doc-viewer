import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/diffs-data-aggregation/abstract-node-diffs-aggregator";
import { DiffStyles, HighlightVariant, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { isObject } from "@apihub/next-data-model/utilities";
import { Diff, DiffType, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { DiffMetaKeys } from "./factory";
import { ChangedPropertyKey } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";

export class AsyncApiNodeDiffsAggregatorKindAny extends AbstractNodeDiffsAggregator {
  private readonly DEFAULT_DIFF_STYLES: DiffStyles = {
    isContentVisible: true,
  }

  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
  ): NodeDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null> | undefined {
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue)) {
      return undefined
    }

    const diffs = crawlValue[diffsMetaKey]

    if (!this.isDiffsRecord(diffs)) {
      return undefined
    }

    const nodeDiffs: NodeDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null> = {}

    // title
    const titleDiff = diffs['title']
    titleDiff && this.aggregateTextDiff(titleDiff, 'title', nodeDiffs)

    // description
    const descriptionDiff = diffs['description']
    descriptionDiff && this.aggregateTextDiff(descriptionDiff, 'description', nodeDiffs)

    // summary
    const summaryDiff = diffs['summary']
    summaryDiff && this.aggregateTextDiff(summaryDiff, 'summary', nodeDiffs)

    return nodeDiffs
  }

  protected aggregateTextDiff(
    diff: Diff<DiffType>,
    key: ChangedPropertyKey<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null>,
    nodeDiffs: NodeDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null>,
  ) {
    let beforeStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    let afterStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    if (isDiffAdd(diff)) {
      beforeStyles = {
        isContentVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
      afterStyles = {
        isContentVisible: true,
        backgroundColor: HighlightVariant.Green,
      }
    }
    if (isDiffRemove(diff)) {
      beforeStyles = {
        isContentVisible: true,
        backgroundColor: HighlightVariant.Red,
      }
      afterStyles = {
        isContentVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
    }
    if (isDiffRename(diff) || isDiffReplace(diff)) {
      beforeStyles = {
        isContentVisible: true,
        backgroundColor: HighlightVariant.Yellow,
        textHighlighterColor: HighlightVariant.Yellow,
      }
      afterStyles = {
        isContentVisible: true,
        backgroundColor: HighlightVariant.Yellow,
        textHighlighterColor: HighlightVariant.Yellow,
      }
    }
    nodeDiffs[key] = {
      data: diff,
      styles: {
        before: beforeStyles,
        after: afterStyles,
      },
    }
  }
}
