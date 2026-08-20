import { DiffMetaKeys } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys"
import { AbstractNodeDescendantsDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-aggregator"
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator"
import {
  DIFF_HIGHLIGHTING_MODES_DEFAULT,
  DiffFlags,
  DiffHighlightingModesByArea,
  DiffStyles,
  HighlightVariant,
  NODE_LEVEL_DIFF_KEY,
  NodeDescendantDiffs,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { DiffsRecord, isArray, isObject, takeIfDiffsRecord } from "@apihub/next-data-model/utilities"
import { Diff } from "@netcracker/qubership-apihub-api-diff"
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"

const JSON_SCHEMA_CHILD_DIFF_BAG_KEYS = [
  "properties",
  "patternProperties",
  "allOf",
  "anyOf",
  "oneOf",
  "items",
] as const

export class JsonSchemaNodeDescendantDiffsAggregatorKindAny extends AbstractNodeDescendantsDiffsAggregator {
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
  ): NodeDescendantDiffs | undefined {
    if (!isObject(crawlValue)) {
      return undefined
    }

    const { diffsMetaKey } = diffsMetaKeys
    const nodeDescendantDiffs: NodeDescendantDiffs = {}

    for (const diffs of this.resolveDescendantDiffsRecords(crawlValue, diffsMetaKey)) {
      for (const [key, diff] of Object.entries(diffs)) {
        if (!diff || key === NODE_LEVEL_DIFF_KEY || !AbstractNodeDiffsAggregator.isDiff(diff)) {
          continue
        }

        nodeDescendantDiffs[key] = this.buildDescendantDiffMetadata(diff)
      }
    }

    return Object.keys(nodeDescendantDiffs).length > 0 ? nodeDescendantDiffs : undefined
  }

  private resolveDescendantDiffsRecords(
    crawlValue: object,
    diffsMetaKey: symbol,
  ): readonly DiffsRecord[] {
    const records: DiffsRecord[] = []

    const ownDiffs = takeIfDiffsRecord(Reflect.get(crawlValue, diffsMetaKey))
    if (ownDiffs) {
      records.push(ownDiffs)
    }

    for (const childBagKey of JSON_SCHEMA_CHILD_DIFF_BAG_KEYS) {
      const childBag = Reflect.get(crawlValue, childBagKey)
      if (!isObject(childBag) && !isArray(childBag)) {
        continue
      }

      const bagDiffs = takeIfDiffsRecord(Reflect.get(childBag, diffsMetaKey))
      if (bagDiffs) {
        records.push(bagDiffs)
      }
    }

    return records
  }

  private buildDescendantDiffMetadata(diff: Diff) {
    let beforeStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    let afterStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    let beforeFlags: DiffFlags = this.DEFAULT_DIFF_FLAGS
    let afterFlags: DiffFlags = this.DEFAULT_DIFF_FLAGS
    const highlightingMode: DiffHighlightingModesByArea = DIFF_HIGHLIGHTING_MODES_DEFAULT

    if (isDiffAdd(diff)) {
      beforeStyles = {
        isContentVisible: false,
        isHeaderVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
      beforeFlags = { ...beforeFlags, increaseLevel: false }
      afterStyles = {
        isContentVisible: false,
        isHeaderVisible: true,
        backgroundColor: HighlightVariant.Green,
        borderShadowColor: HighlightVariant.Green,
      }
      afterFlags = { ...afterFlags, increaseLevel: true }
    }

    if (isDiffRemove(diff)) {
      beforeStyles = {
        isContentVisible: false,
        isHeaderVisible: true,
        backgroundColor: HighlightVariant.Red,
        borderShadowColor: HighlightVariant.Red,
      }
      beforeFlags = { ...beforeFlags, increaseLevel: true }
      afterStyles = {
        isContentVisible: false,
        isHeaderVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
      afterFlags = { ...afterFlags, increaseLevel: false }
    }

    if (isDiffReplace(diff)) {
      beforeStyles = {
        isContentVisible: false,
        isHeaderVisible: true,
        backgroundColor: HighlightVariant.Yellow,
        textHighlighterColor: HighlightVariant.Yellow,
      }
      afterStyles = {
        isContentVisible: false,
        isHeaderVisible: true,
        backgroundColor: HighlightVariant.Yellow,
        textHighlighterColor: HighlightVariant.Yellow,
      }
    }

    return {
      data: diff,
      styles: {
        before: beforeStyles,
        after: afterStyles,
      },
      flags: {
        before: beforeFlags,
        after: afterFlags,
      },
      highlightingMode,
    }
  }
}
