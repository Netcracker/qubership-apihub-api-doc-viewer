import { DiffMetaKeys } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys"
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator"
import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import {
  ChangedPropertyKey,
  ChangedPropertyMetaData,
  DIFF_HIGHLIGHTING_MODES_DEFAULT,
  DiffStyles,
  HighlightVariant,
  ITreeNodeWithDiffs,
  NODE_LEVEL_DIFF_KEY,
  NodeDiffs,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  JSON_SCHEMA_META_FLAG_DIFF_KEYS,
  JSON_SCHEMA_TITLE_ROW_DIFF_KEY,
  JSON_SCHEMA_TYPE_LABEL_FIELD_DIFF_KEYS,
  JsonSchemaKindAnyNodeDiffs,
  JsonSchemaMetaFlagDiffKey,
  JsonSchemaSharedRowDiffs,
  JsonSchemaTypeLabelFieldDiffKey,
  JsonSchemaTypeLabelFieldDiffs,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/property-row-diffs.types"
import { JsonSchemaTreeNodeKind } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeStoredValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { isObject } from "@apihub/next-data-model/utilities"
import { NodeKey } from "@apihub/next-data-model/utility-types"
import { Diff, DiffAction, DiffType, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"

export class JsonSchemaNodeDiffsAggregatorKindAny
  extends AbstractNodeDiffsAggregator<
    JsonSchemaTreeNodeStoredValue | null,
    JsonSchemaTreeNodeKind,
    JsonSchemaTreeNodeMeta,
    JsonSchemaTreeNodeStoredValue | null
  > {
  private readonly DEFAULT_DIFF_STYLES: DiffStyles = {
    isContentVisible: true,
    isHeaderVisible: true,
  }

  public aggregate(
    crawlValue: JsonSchemaTreeNodeStoredValue | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: ITreeNodeWithDiffs<
      JsonSchemaTreeNodeStoredValue | null,
      JsonSchemaTreeNodeKind,
      JsonSchemaTreeNodeMeta,
      JsonSchemaTreeNodeStoredValue | null
    >,
    containerNode?: ITreeNodeWithDiffs<
      JsonSchemaTreeNodeStoredValue | null,
      JsonSchemaTreeNodeKind,
      JsonSchemaTreeNodeMeta,
      JsonSchemaTreeNodeStoredValue | null
    >,
  ): NodeDiffs<JsonSchemaTreeNodeStoredValue | null> | undefined {
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue) && !Array.isArray(crawlValue)) {
      return undefined
    }

    const diffs = (crawlValue as Record<PropertyKey, unknown>)[diffsMetaKey]
    const nodeDiffs: JsonSchemaKindAnyNodeDiffs = {}

    if (containerNode) {
      const containerNodeDiff = containerNode.diffs[NODE_LEVEL_DIFF_KEY]
      if (containerNodeDiff && (isDiffAdd(containerNodeDiff.data) || isDiffRemove(containerNodeDiff.data))) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = { ...containerNodeDiff, inherited: true }
        return nodeDiffs
      }
      const maybeNodeDiffs = containerNode.descendantDiffs[nodeKey]
      if (maybeNodeDiffs) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = maybeNodeDiffs
        return nodeDiffs
      }
    } else if (parentNode) {
      const parentNodeDiff = parentNode.diffs[NODE_LEVEL_DIFF_KEY]
      if (parentNodeDiff && (isDiffAdd(parentNodeDiff.data) || isDiffRemove(parentNodeDiff.data))) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = { ...parentNodeDiff, inherited: true }
        return nodeDiffs
      }
      const maybeNodeDiffs = parentNode.descendantDiffs[nodeKey]
      if (maybeNodeDiffs) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = maybeNodeDiffs
        return nodeDiffs
      }
    }

    if (!AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
      return undefined
    }

    const wholeNodeDiff = diffs[NODE_LEVEL_DIFF_KEY]
    wholeNodeDiff && this.aggregateTextDiff(wholeNodeDiff, NODE_LEVEL_DIFF_KEY, nodeDiffs)

    const titleDiff = diffs["title"]
    const formatDiff = diffs["format"]
    const typeDiff = diffs["type"]

    this.aggregateTypeLabelFieldDiffs(
      { type: typeDiff, format: formatDiff, title: titleDiff },
      nodeDiffs,
    )

    const descriptionDiff = diffs["description"]
    descriptionDiff && this.aggregateTextDiff(descriptionDiff, "description", nodeDiffs)

    const suppressMetaFlagDiffs = this.hasWholeNodeAddOrRemoveDiff(nodeDiffs)
    if (!suppressMetaFlagDiffs) {
      for (const metaFlagKey of JSON_SCHEMA_META_FLAG_DIFF_KEYS) {
        const metaFlagDiff = diffs[metaFlagKey]
        if (AbstractNodeDiffsAggregator.isDiff(metaFlagDiff)) {
          this.aggregateMetaFlagDiff(metaFlagDiff, metaFlagKey, nodeDiffs)
        }
      }
    }

    this.stripMetaFlagDiffsWhenWholeNode(nodeDiffs)
    this.aggregateTitleRowDiff(nodeDiffs)

    return Object.keys(nodeDiffs).length > 0 ? nodeDiffs : undefined
  }

  protected aggregateTextDiff(
    diff: Diff<DiffType>,
    key: ChangedPropertyKey<JsonSchemaTreeNodeStoredValue | null>,
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeStoredValue | null>,
  ): void {
    nodeDiffs[key] = this.buildChangedPropertyMetaDataFromDiff(diff)
  }

  protected aggregateMetaFlagDiff(
    diff: Diff<DiffType>,
    key: JsonSchemaMetaFlagDiffKey,
    nodeDiffs: JsonSchemaKindAnyNodeDiffs,
  ): void {
    nodeDiffs[key] = this.buildChangedPropertyMetaDataFromDiff(diff)
  }

  private aggregateTypeLabelFieldDiffs(
    crawlDiffs: Partial<Record<JsonSchemaTypeLabelFieldDiffKey, Diff<DiffType>>>,
    nodeDiffs: JsonSchemaSharedRowDiffs,
  ): void {
    const typeLabelFieldDiffs: JsonSchemaTypeLabelFieldDiffs = {}

    for (const fieldKey of JSON_SCHEMA_TYPE_LABEL_FIELD_DIFF_KEYS) {
      const diff = crawlDiffs[fieldKey]
      if (!AbstractNodeDiffsAggregator.isDiff(diff)) {
        continue
      }
      typeLabelFieldDiffs[fieldKey] = this.buildTypeLabelFieldDiffMetadata(diff)
    }

    if (Object.keys(typeLabelFieldDiffs).length > 0) {
      nodeDiffs.typeLabelFieldDiffs = typeLabelFieldDiffs
    }
  }

  protected aggregateTitleRowDiff(nodeDiffs: JsonSchemaKindAnyNodeDiffs): void {
    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    if (nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))) {
      nodeDiffs[JSON_SCHEMA_TITLE_ROW_DIFF_KEY] = nodeLevelDiff
      return
    }

    for (const flagKey of JSON_SCHEMA_META_FLAG_DIFF_KEYS) {
      const flagDiff = nodeDiffs[flagKey]
      if (flagDiff) {
        nodeDiffs[JSON_SCHEMA_TITLE_ROW_DIFF_KEY] = this.asReplaceFlagDiffForTitleRow(flagDiff)
        return
      }
    }

    this.aggregateTypeLabelTitleRowDiff(nodeDiffs)
  }

  protected aggregateTypeLabelTitleRowDiff(nodeDiffs: JsonSchemaSharedRowDiffs): void {
    const typeLabelFieldDiffs = nodeDiffs.typeLabelFieldDiffs
    if (!typeLabelFieldDiffs || Object.keys(typeLabelFieldDiffs).length === 0) {
      return
    }

    const representativeDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
      ...Object.values(typeLabelFieldDiffs),
    )
    if (!representativeDiff) {
      return
    }

    nodeDiffs[JSON_SCHEMA_TITLE_ROW_DIFF_KEY] = this.asReplaceRowColorizingDiff(representativeDiff)
  }

  private buildTypeLabelFieldDiffMetadata(diff: Diff<DiffType>): ChangedPropertyMetaData {
    if (isDiffReplace(diff)) {
      return this.buildChipReplaceDiffMetadata(diff, {
        textHighlighterColor: HighlightVariant.Yellow,
      })
    }

    return this.buildChipAddRemoveDiffMetadata(diff, {
      addAfter: { textHighlighterColor: HighlightVariant.Green },
      removeBefore: { textHighlighterColor: HighlightVariant.Red },
    })
  }

  protected buildChangedPropertyMetaDataFromDiff(diff: Diff<DiffType>): ChangedPropertyMetaData {
    let beforeStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    let afterStyles: DiffStyles = this.DEFAULT_DIFF_STYLES
    if (isDiffAdd(diff)) {
      beforeStyles = {
        ...beforeStyles,
        isContentVisible: false,
        isHeaderVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
      afterStyles = {
        ...afterStyles,
        isContentVisible: true,
        isHeaderVisible: true,
        backgroundColor: HighlightVariant.Green,
      }
    }
    if (isDiffRemove(diff)) {
      beforeStyles = {
        ...beforeStyles,
        isContentVisible: true,
        isHeaderVisible: true,
        backgroundColor: HighlightVariant.Red,
      }
      afterStyles = {
        ...afterStyles,
        isContentVisible: false,
        isHeaderVisible: false,
        backgroundColor: HighlightVariant.Gray,
      }
    }
    if (isDiffRename(diff) || isDiffReplace(diff)) {
      beforeStyles = {
        ...beforeStyles,
        isContentVisible: true,
        backgroundColor: HighlightVariant.Yellow,
        textHighlighterColor: HighlightVariant.Yellow,
      }
      afterStyles = {
        ...afterStyles,
        isContentVisible: true,
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
        before: {
          increaseLevel: false,
        },
        after: {
          increaseLevel: false,
        },
      },
      highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
    }
  }

  protected readonly ROW_PARTIAL_CHANGE_STYLES: { before: DiffStyles; after: DiffStyles } = {
    before: {
      isContentVisible: true,
      isHeaderVisible: true,
      backgroundColor: HighlightVariant.Yellow,
    },
    after: {
      isContentVisible: true,
      isHeaderVisible: true,
      backgroundColor: HighlightVariant.Yellow,
    },
  }

  protected asReplaceRowColorizingDiff(
    sourceDiff: ChangedPropertyMetaData,
  ): ChangedPropertyMetaData {
    const { data } = sourceDiff

    if (isDiffReplace(data)) {
      return {
        ...sourceDiff,
        styles: this.ROW_PARTIAL_CHANGE_STYLES,
      }
    }

    if (isDiffAdd(data)) {
      return {
        ...sourceDiff,
        data: {
          type: data.type,
          scope: data.scope,
          description: data.description,
          action: "replace" as const,
          beforeValue: false,
          afterValue: data.afterValue ?? true,
          beforeDeclarationPaths: [],
          afterDeclarationPaths: data.afterDeclarationPaths,
        },
        styles: this.ROW_PARTIAL_CHANGE_STYLES,
      }
    }

    if (isDiffRemove(data)) {
      return {
        ...sourceDiff,
        data: {
          type: data.type,
          scope: data.scope,
          description: data.description,
          action: "replace" as const,
          beforeValue: data.beforeValue ?? true,
          afterValue: false,
          beforeDeclarationPaths: data.beforeDeclarationPaths,
          afterDeclarationPaths: [],
        },
        styles: this.ROW_PARTIAL_CHANGE_STYLES,
      }
    }

    return sourceDiff
  }

  protected buildChipAddRemoveDiffMetadata(
    diff: Diff<DiffType>,
    chipHighlight?: {
      addAfter?: Pick<DiffStyles, "textHighlighterColor" | "borderShadowColor" | "isFontMuted">
      removeBefore?: Pick<DiffStyles, "textHighlighterColor" | "borderShadowColor" | "isFontMuted">
    },
  ): ChangedPropertyMetaData {
    if (isDiffAdd(diff)) {
      return {
        data: diff,
        styles: {
          before: {
            isContentVisible: false,
            isHeaderVisible: true,
          },
          after: {
            isContentVisible: true,
            isHeaderVisible: true,
            ...chipHighlight?.addAfter,
          },
        },
        flags: {
          before: { increaseLevel: false },
          after: { increaseLevel: false },
        },
        highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
      }
    }

    if (isDiffRemove(diff)) {
      return {
        data: diff,
        styles: {
          before: {
            isContentVisible: true,
            isHeaderVisible: true,
            ...chipHighlight?.removeBefore,
          },
          after: {
            isContentVisible: false,
            isHeaderVisible: true,
          },
        },
        flags: {
          before: { increaseLevel: false },
          after: { increaseLevel: false },
        },
        highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
      }
    }

    return this.buildChangedPropertyMetaDataFromDiff(diff)
  }

  protected buildChipReplaceDiffMetadata(
    diff: Diff<DiffType>,
    chipHighlight: Pick<DiffStyles, "textHighlighterColor" | "borderShadowColor">,
  ): ChangedPropertyMetaData {
    const metadata = this.buildChangedPropertyMetaDataFromDiff(diff)
    return {
      ...metadata,
      styles: {
        before: {
          ...metadata.styles.before,
          backgroundColor: undefined,
          textHighlighterColor: chipHighlight.textHighlighterColor,
          borderShadowColor: chipHighlight.borderShadowColor,
        },
        after: {
          ...metadata.styles.after,
          backgroundColor: undefined,
          textHighlighterColor: chipHighlight.textHighlighterColor,
          borderShadowColor: chipHighlight.borderShadowColor,
        },
      },
    }
  }

  protected buildWholeNodeInheritedRowColorizingDiff(
    nodeLevelDiff: ChangedPropertyMetaData,
  ): ChangedPropertyMetaData {
    const { data } = nodeLevelDiff

    if (isDiffAdd(data)) {
      return this.buildChangedPropertyMetaDataFromDiff({
        type: data.type,
        scope: data.scope,
        description: data.description,
        action: DiffAction.add,
        afterValue: true,
        afterDeclarationPaths: data.afterDeclarationPaths ?? [],
      })
    }

    if (isDiffRemove(data)) {
      return this.buildChangedPropertyMetaDataFromDiff({
        type: data.type,
        scope: data.scope,
        description: data.description,
        action: DiffAction.remove,
        beforeValue: true,
        beforeDeclarationPaths: data.beforeDeclarationPaths ?? [],
      })
    }

    return nodeLevelDiff
  }

  protected hasWholeNodeAddOrRemoveDiff(
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeStoredValue | null>,
  ): boolean {
    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    return !!nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))
  }

  protected stripMetaFlagDiffsWhenWholeNode(nodeDiffs: JsonSchemaKindAnyNodeDiffs): void {
    if (!this.hasWholeNodeAddOrRemoveDiff(nodeDiffs)) {
      return
    }

    for (const metaFlagKey of JSON_SCHEMA_META_FLAG_DIFF_KEYS) {
      delete nodeDiffs[metaFlagKey]
    }
  }

  protected readonly TITLE_ROW_FLAG_AS_REPLACE_STYLES: { before: DiffStyles; after: DiffStyles } = {
    before: {
      isContentVisible: true,
      isHeaderVisible: true,
      backgroundColor: HighlightVariant.Yellow,
    },
    after: {
      isContentVisible: true,
      isHeaderVisible: true,
      backgroundColor: HighlightVariant.Yellow,
    },
  }

  protected asReplaceFlagDiffForTitleRow(
    flagDiff: ChangedPropertyMetaData,
  ): ChangedPropertyMetaData {
    const { data } = flagDiff

    if (isDiffReplace(data)) {
      return {
        ...flagDiff,
        styles: this.TITLE_ROW_FLAG_AS_REPLACE_STYLES,
      }
    }

    if (isDiffAdd(data)) {
      return {
        ...flagDiff,
        data: {
          type: data.type,
          scope: data.scope,
          description: data.description,
          action: DiffAction.replace,
          beforeValue: false,
          afterValue: data.afterValue ?? true,
          beforeDeclarationPaths: [],
          afterDeclarationPaths: data.afterDeclarationPaths,
        },
        styles: this.TITLE_ROW_FLAG_AS_REPLACE_STYLES,
      }
    }

    if (isDiffRemove(data)) {
      return {
        ...flagDiff,
        data: {
          type: data.type,
          scope: data.scope,
          description: data.description,
          action: DiffAction.replace,
          beforeValue: data.beforeValue ?? true,
          afterValue: false,
          beforeDeclarationPaths: data.beforeDeclarationPaths,
          afterDeclarationPaths: [],
        },
        styles: this.TITLE_ROW_FLAG_AS_REPLACE_STYLES,
      }
    }

    return flagDiff
  }
}
