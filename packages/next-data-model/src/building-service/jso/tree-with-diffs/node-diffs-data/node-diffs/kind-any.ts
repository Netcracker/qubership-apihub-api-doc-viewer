import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { ComplexTreeNodeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/complex-node.impl";
import { SimpleTreeNodeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/simple-node.impl";
import { ChangedPropertyKey, DiffStyles, HighlightVariant, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { JsoTreeNodeKind } from "@apihub/next-data-model/model/jso/types/node-kind";
import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta";
import { JsoTreeNodeValue } from "@apihub/next-data-model/model/jso/types/node-value";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { Diff, DiffType, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { DiffMetaKeys } from "./factory";

export class JsoNodeDiffsAggregatorKindAny
  extends AbstractNodeDiffsAggregator<
    JsoTreeNodeValue | null,
    JsoTreeNodeKind,
    JsoTreeNodeMeta
  > {
  private readonly DEFAULT_DIFF_STYLES: DiffStyles = {
    isContentVisible: true,
  }

  private static readonly DIFFABLE_NODE_VALUE_KEYS: (keyof JsoTreeNodeValue)[] = [
    "title",
    "value",
    "valueType",
    "isPrimitive",
    "isArrayItem",
    "isPredefinedValueSet",
  ];

  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: SimpleTreeNodeWithDiffs<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>,
    containerNode?: ComplexTreeNodeWithDiffs<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>,
  ): NodeDiffs<JsoTreeNodeValue | null> | undefined {
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue)) {
      return undefined
    }

    const diffs = crawlValue[diffsMetaKey]
    const nodeDiffs: NodeDiffs<JsoTreeNodeValue | null> = {}

    if (containerNode) {
      const containerNodeDiff = containerNode.diffs[""]
      if (containerNodeDiff && (isDiffAdd(containerNodeDiff.data) || isDiffRemove(containerNodeDiff.data))) {
        nodeDiffs[""] = containerNodeDiff
      } else {
        const maybeNodeDiffs = containerNode.descendantDiffs[nodeKey]
        if (maybeNodeDiffs) {
          nodeDiffs[""] = maybeNodeDiffs
          return nodeDiffs
        }
      }
    } else if (parentNode) {
      const parentNodeDiff = parentNode.diffs[""]
      if (parentNodeDiff && (isDiffAdd(parentNodeDiff.data) || isDiffRemove(parentNodeDiff.data))) {
        nodeDiffs[""] = parentNodeDiff
      } else {
        const maybeNodeDiffs = parentNode.descendantDiffs[nodeKey]
        if (maybeNodeDiffs) {
          nodeDiffs[""] = maybeNodeDiffs
          return nodeDiffs
        }
      }
    }

    if (!AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
      return undefined
    }

    for (const key of JsoNodeDiffsAggregatorKindAny.DIFFABLE_NODE_VALUE_KEYS) {
      const diff = diffs[key]
      diff && this.aggregateValueDiff(diff, key, nodeDiffs)
    }

    return nodeDiffs
  }

  protected aggregateValueDiff(
    diff: Diff<DiffType>,
    key: ChangedPropertyKey<JsoTreeNodeValue | null>,
    nodeDiffs: NodeDiffs<JsoTreeNodeValue | null>,
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
