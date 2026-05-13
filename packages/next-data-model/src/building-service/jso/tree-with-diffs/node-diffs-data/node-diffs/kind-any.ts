import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { ChangedPropertyKey, DiffFlags, DiffStyles, HighlightVariant, ITreeNodeWithDiffs, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { JsoTreeNodeDiffsSource } from "@apihub/next-data-model/model/jso/tree-with-diffs/node-diffs-source";
import { JsoTreeNodeValueWithDiffs } from "@apihub/next-data-model/model/jso/tree-with-diffs/node-value";
import { JsoTreeNodeKind } from "@apihub/next-data-model/model/jso/types/node-kind";
import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { Diff, DiffType, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { JsoRawValueUtilities } from "../../../json-crawl-entities/transformers/raw-jso-property-to-base-jso-node-value";
import { DiffMetaKeys } from "./factory";

export class JsoNodeDiffsAggregatorKindAny
  extends AbstractNodeDiffsAggregator<
    JsoTreeNodeValueWithDiffs | null,
    JsoTreeNodeKind,
    JsoTreeNodeMeta,
    JsoTreeNodeDiffsSource
  > {

  private readonly DEFAULT_DIFF_STYLES: DiffStyles = {
    isContentVisible: true,
  }

  private readonly DEFAULT_DIFF_FLAGS: DiffFlags = {
    increaseLevel: true,
  }

  private static readonly DIFFABLE_NODE_VALUE_KEYS: (keyof JsoTreeNodeDiffsSource)[] = [
    "value",
  ];

  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    containerNode?: ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>,
  ): NodeDiffs<JsoTreeNodeDiffsSource> | undefined {
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue)) {
      return undefined
    }

    const diffs = crawlValue[diffsMetaKey]
    const nodeDiffs: NodeDiffs<JsoTreeNodeDiffsSource> = {}

    if (parentNode) {
      const parentNodeChangePropertyMetadata = parentNode.diffs['']
      if (parentNodeChangePropertyMetadata) {
        const { data: diff } = parentNodeChangePropertyMetadata
        // add/remove object property/array item in parent
        if (isDiffAdd(diff) || isDiffRemove(diff)) {
          nodeDiffs[''] = parentNodeChangePropertyMetadata
          return nodeDiffs
        }
        // complex <-> primitive, complex <-> complex in parent
        if (isDiffReplace(diff)) {
          const propertyMetadata = parentNode.descendantDiffs[nodeKey]
          if (propertyMetadata) {
            nodeDiffs[''] = propertyMetadata
            return nodeDiffs
          }
        }
      }
    }

    if (!AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
      return undefined
    }

    const diff = diffs[nodeKey]
    if (!diff) {
      return undefined
    }

    this.aggregateValueDiff(diff, 'value', nodeDiffs)

    return nodeDiffs
  }

  protected aggregateValueDiff(
    diff: Diff<DiffType>,
    key: ChangedPropertyKey<JsoTreeNodeDiffsSource>,
    nodeDiffs: NodeDiffs<JsoTreeNodeDiffsSource>,
  ) {
    let beforeStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    let afterStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    let beforeFlags: DiffFlags = this.DEFAULT_DIFF_FLAGS
    let afterFlags: DiffFlags = this.DEFAULT_DIFF_FLAGS
    if (isDiffAdd(diff)) {
      key = ''
      beforeStyles = {
        isContentVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
      beforeFlags = {
        increaseLevel: false,
      }
      afterStyles = {
        isContentVisible: true,
        backgroundColor: HighlightVariant.Green,
      }
      afterFlags = {
        increaseLevel: true,
      }
    }
    if (isDiffRemove(diff)) {
      key = ''
      beforeStyles = {
        isContentVisible: true,
        backgroundColor: HighlightVariant.Red,
      }
      beforeFlags = {
        increaseLevel: true,
      }
      afterStyles = {
        isContentVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
      afterFlags = {
        increaseLevel: false,
      }
    }
    if (isDiffReplace(diff)) {
      const { beforeValue, afterValue } = diff
      const beforeValueType = JsoRawValueUtilities.getValueType(beforeValue)
      const afterValueType = JsoRawValueUtilities.getValueType(afterValue)
      const isBeforeValuePrimitive = JsoRawValueUtilities.isPrimitiveValue(beforeValueType)
      const isAfterValuePrimitive = JsoRawValueUtilities.isPrimitiveValue(afterValueType)
      const isBeforeValuePredefined = JsoRawValueUtilities.isPredefinedValueSet(beforeValueType)
      const isAfterValuePredefined = JsoRawValueUtilities.isPredefinedValueSet(afterValueType)
      if (!isBeforeValuePrimitive || !isAfterValuePrimitive) {
        key = '' // complex <-> primitive, complex <-> complex
      }
      beforeStyles = {
        isContentVisible: isBeforeValuePrimitive,
        backgroundColor: HighlightVariant.Yellow,
      }
      if (isBeforeValuePrimitive) {
        if (isBeforeValuePredefined) {
          beforeStyles.borderShadowColor = HighlightVariant.Yellow
        } else {
          beforeStyles.textHighlighterColor = HighlightVariant.Yellow
        }
      }
      afterStyles = {
        isContentVisible: isAfterValuePrimitive,
        backgroundColor: HighlightVariant.Yellow,
      }
      if (isAfterValuePrimitive) {
        if (isAfterValuePredefined) {
          afterStyles.borderShadowColor = HighlightVariant.Yellow
        } else {
          afterStyles.textHighlighterColor = HighlightVariant.Yellow
        }
      }
    }
    nodeDiffs[key] = {
      data: diff,
      styles: {
        before: beforeStyles,
        after: afterStyles,
      },
      flags: {
        before: beforeFlags,
        after: afterFlags,
      },
    }
  }
}
