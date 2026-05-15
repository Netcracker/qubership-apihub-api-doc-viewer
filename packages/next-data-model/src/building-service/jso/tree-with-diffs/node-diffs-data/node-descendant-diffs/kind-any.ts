import { AbstractNodeDescendantsDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-aggregator";
import { DiffFlags, DiffStyles, HighlightVariant, NodeDescendantDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { isObject, takeIfDiffsRecord } from "@apihub/next-data-model/utilities";
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { JsoRawValueUtilities } from "../../../json-crawl-entities/transformers/raw-jso-property-to-base-jso-node-value";
import { DiffMetaKeys } from "../node-diffs/factory";

export class JsoNodeDescendantDiffsAggregatorKindAny extends AbstractNodeDescendantsDiffsAggregator {
  private readonly DEFAULT_DIFF_STYLES: DiffStyles = {
    isContentVisible: true,
    isHeaderVisible: true,
  }

  private readonly DEFAULT_DIFF_FLAGS: DiffFlags = {
    increaseLevel: true,
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

    const { diffsMetaKey } = diffsMetaKeys

    const diffs = takeIfDiffsRecord(crawlValue[diffsMetaKey])
    if (!diffs) {
      return undefined
    }

    const nodeDescendantDiffs: NodeDescendantDiffs = {}
    for (const [key, diff] of Object.entries(diffs)) {
      if (!diff) {
        continue
      }

      let beforeStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
      let afterStyles: DiffStyles = this.DEFAULT_DIFF_STYLES

      let beforeFlags: DiffFlags = this.DEFAULT_DIFF_FLAGS
      let afterFlags: DiffFlags = this.DEFAULT_DIFF_FLAGS

      if (isDiffAdd(diff)) {
        beforeStyles = {
          isContentVisible: false,
          isHeaderVisible: false,
          backgroundColor: HighlightVariant.Gray,
        }
        beforeFlags = {
          increaseLevel: false,
        }
        afterStyles = {
          isContentVisible: true,
          isHeaderVisible: true,
          backgroundColor: HighlightVariant.Green,
        }
        afterFlags = {
          increaseLevel: true,
        }
      }

      if (isDiffRemove(diff)) {
        beforeStyles = {
          isContentVisible: true,
          isHeaderVisible: true,
          backgroundColor: HighlightVariant.Red,
        }
        beforeFlags = {
          increaseLevel: true,
        }
        afterStyles = {
          isContentVisible: false,
          isHeaderVisible: false,
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
        beforeStyles = {
          isContentVisible: isBeforeValuePrimitive,
          isHeaderVisible: true,
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
          isHeaderVisible: true,
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

      nodeDescendantDiffs[key] = {
        data: diff,
        styles: {
          before: beforeStyles,
          after: afterStyles,
        },
        flags: {
          before: beforeFlags,
          after: afterFlags,
        }
      }
    }

    return nodeDescendantDiffs
  }
}
