import { DiffMetaKeys } from "@apihub/next-data-model/building-service/async-api/tree-with-diffs/node-diffs-data/node-diffs/factory";
import { DiffStyles, HighlightVariant, NodeDescendantDiffs, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DiffType, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { Diff } from "@netcracker/qubership-apihub-api-diff";

export abstract class AbstractNodeDescendantsDiffsAggregator {
  protected static readonly DEFAULT_DIFF_STYLES: DiffStyles = {
    isContentVisible: true,
  }

  public abstract aggregate(
    value: object | null,
    diffsMetaKeys: DiffMetaKeys,
    referenceNamePropertyKey: symbol
  ): NodeDescendantDiffs | undefined;

  protected aggregateWholeNodeDiff<
    V extends object | null,
  >(
    diff: Diff<DiffType>,
    nodeDiffs: NodeDiffs<V>,
  ) {
    let beforeStyles: DiffStyles = AbstractNodeDescendantsDiffsAggregator.DEFAULT_DIFF_STYLES
    let afterStyles: DiffStyles = AbstractNodeDescendantsDiffsAggregator.DEFAULT_DIFF_STYLES
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
    nodeDiffs[''] = {
      data: diff,
      styles: {
        before: beforeStyles,
        after: afterStyles,
      },
    }
  }
}
