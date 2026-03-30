import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { ComplexTreeNodeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/complex-node.impl";
import { SimpleTreeNodeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/simple-node.impl";
import { ChangedPropertyKey, DiffStyles, HighlightVariant, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { Diff, DiffType, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { DiffMetaKeys } from "./factory";

export class AsyncApiNodeDiffsAggregatorKindAny
  extends AbstractNodeDiffsAggregator<
    AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
    AsyncApiTreeNodeKind,
    AsyncApiTreeNodeMeta
  > {
  private readonly DEFAULT_DIFF_STYLES: DiffStyles = {
    isContentVisible: true,
  }

  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: SimpleTreeNodeWithDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiTreeNodeMeta>,
    containerNode?: ComplexTreeNodeWithDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiTreeNodeMeta>,
  ): NodeDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null> | undefined {
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue)) {
      return undefined
    }

    const diffs = crawlValue[diffsMetaKey]

    const nodeDiffs: NodeDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null> = {}

    if (parentNode) {
      // Support inheritance of node diff from parent
      // If parent wholly added/removed, it means that all the descendants are wholly added/removed
      if (parentNode.diffs['']) {
        nodeDiffs[''] = parentNode.diffs['']
      } else {
        const maybeNodeDiffs = parentNode.descendantDiffs[nodeKey]
        if (maybeNodeDiffs) {
          nodeDiffs[''] = maybeNodeDiffs
          return nodeDiffs
        }
      }
    }
    if (containerNode) {
      // Support inheritance of node diff from container
      // If container wholly added/removed, it means that all the descendants are wholly added/removed
      if (containerNode.diffs['']) {
        nodeDiffs[''] = containerNode.diffs['']
      } else {
        const maybeNodeDiffs = containerNode.descendantDiffs[nodeKey]
        if (maybeNodeDiffs) {
          nodeDiffs[''] = maybeNodeDiffs
          return nodeDiffs
        }
      }
    }

    if (!AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
      return undefined
    }

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
