import { DiffMetaKeys } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys";
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator";
import { ChangedPropertyMetaData, DIFF_HIGHLIGHTING_MODES_DEFAULT, HighlightVariant, ITreeNodeWithDiffs, NODE_LEVEL_DIFF_KEY, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import {
  DDL_COLUMN_CHANGED_PROPERTY_KEYS,
  DDL_COLUMN_FLAG_DIFF_KEYS,
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY,
  DdlApiColumnPropertyRowDiffs,
  DdlApiEnumValueDiffs,
  DdlApiForeignKeyTargetDiffs,
  DdlApiColumnTypeFieldDiffKey,
  DdlApiColumnTypeFieldDiffs,
  DDL_COLUMN_TYPE_FIELD_DIFF_KEYS,
} from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types";
import { DdlApiTreeNodeValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import { DdlApiTreeNodeKind } from "@apihub/next-data-model/model/ddlapi/types/node-kind";
import { DdlApiTreeNodeMeta } from "@apihub/next-data-model/model/ddlapi/types/node-meta";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { Diff, isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { DdlApiNodeDiffsAggregatorKindAny } from "./kind-any";

export class DdlApiNodeDiffsAggregatorKindColumn extends DdlApiNodeDiffsAggregatorKindAny {
  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: ITreeNodeWithDiffs<
      DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null,
      DdlApiTreeNodeKind,
      DdlApiTreeNodeMeta,
      DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null
    >,
    containerNode?: ITreeNodeWithDiffs<
      DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null,
      DdlApiTreeNodeKind,
      DdlApiTreeNodeMeta,
      DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null
    >,
  ): NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null> | undefined {
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue) && !Array.isArray(crawlValue)) {
      return undefined
    }

    const superNodeDiffs = super.aggregate(crawlValue, diffsMetaKeys, nodeKey, parentNode, containerNode)

    const hasColumnTypeFieldDiffs = this.hasColumnTypeFieldDiffs(crawlValue, diffsMetaKey)
    const crawlDiffs = (crawlValue as Record<PropertyKey, unknown>)[diffsMetaKey]
    if (!isObject(crawlDiffs)) {
      if (!hasColumnTypeFieldDiffs) {
        return superNodeDiffs
      }
    }

    const diffs = isObject(crawlDiffs) ? crawlDiffs : {}
    const hasForeignKeyTargetDiffs = AbstractNodeDiffsAggregator.isDiffsRecord(diffs['foreignKeyTargets'])
    const hasEnumValueDiffs = AbstractNodeDiffsAggregator.isDiffsRecord(diffs['enumValues'])
    const hasFlatDiffs = Object.entries(diffs).some(([key, value]) => (
      key !== 'foreignKeyTargets' &&
      key !== 'enumValues' &&
      AbstractNodeDiffsAggregator.isDiff(value)
    ))
    if (!hasFlatDiffs && !hasForeignKeyTargetDiffs && !hasEnumValueDiffs && !hasColumnTypeFieldDiffs) {
      return superNodeDiffs
    }

    const nodeDiffs: DdlApiColumnPropertyRowDiffs = this.adoptPropertyRowDiffs(
      superNodeDiffs,
      DDL_COLUMN_CHANGED_PROPERTY_KEYS,
    )

    this.adoptNodeLevelDiffFromCrawlIfAbsent(
      diffs as Partial<Record<string, Diff>>,
      nodeDiffs,
    )

    const descriptionDiff = diffs['description']
    if (AbstractNodeDiffsAggregator.isDiff(descriptionDiff)) {
      this.aggregateDescriptionTextDiff(descriptionDiff, nodeDiffs)
    }

    const generatedExpressionDiff = diffs['generatedExpression']
    if (AbstractNodeDiffsAggregator.isDiff(generatedExpressionDiff)) {
      this.aggregateTextDiff(
        generatedExpressionDiff,
        'generatedExpression',
        nodeDiffs,
      )
    }

    if (this.hasWholeNodeAddOrRemoveDiff(nodeDiffs)) {
      this.aggregatePresentFlagDiffsFromWholeNodeAddOrRemove(
        crawlValue,
        nodeDiffs,
        DDL_COLUMN_FLAG_DIFF_KEYS,
      )
      this.aggregatePresentDescriptionFromWholeNodeAddOrRemove(crawlValue, nodeDiffs)
      this.aggregatePropertyTitleRowDiff(nodeDiffs)
      return nodeDiffs
    }

    const isPrimaryKeyDiff = diffs['isPrimaryKey']
    if (AbstractNodeDiffsAggregator.isDiff(isPrimaryKeyDiff)) {
      this.aggregateFlagDiff(
        isPrimaryKeyDiff,
        'isPrimaryKey',
        nodeDiffs,
        this.takeBooleanFlagValue(crawlValue, 'isPrimaryKey'),
      )
    }

    const isGeneratedDiff = diffs['isGenerated']
    if (AbstractNodeDiffsAggregator.isDiff(isGeneratedDiff)) {
      this.aggregateFlagDiff(
        isGeneratedDiff,
        'isGenerated',
        nodeDiffs,
        this.takeBooleanFlagValue(crawlValue, 'isGenerated'),
      )
    }

    const isUniqueDiff = diffs['isUnique']
    if (AbstractNodeDiffsAggregator.isDiff(isUniqueDiff)) {
      this.aggregateFlagDiff(
        isUniqueDiff,
        'isUnique',
        nodeDiffs,
        this.takeBooleanFlagValue(crawlValue, 'isUnique'),
      )
    }

    const isNotNullDiff = diffs['isNotNull']
    if (AbstractNodeDiffsAggregator.isDiff(isNotNullDiff)) {
      this.aggregateFlagDiff(
        isNotNullDiff,
        'isNotNull',
        nodeDiffs,
        this.takeBooleanFlagValue(crawlValue, 'isNotNull'),
      )
    }

    this.aggregateForeignKeyTargetDiffs(diffs, nodeDiffs)

    this.aggregateEnumValueDiffs(diffs, nodeDiffs)

    this.aggregateColumnTypeFieldDiffs(crawlValue, diffsMetaKey, nodeDiffs)

    this.aggregatePropertyTitleRowDiff(nodeDiffs)

    return nodeDiffs
  }

  private aggregatePropertyTitleRowDiff(
    nodeDiffs: DdlApiColumnPropertyRowDiffs,
  ): void {
    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    if (nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))) {
      nodeDiffs[DDL_PROPERTY_TITLE_ROW_DIFF_KEY] = nodeLevelDiff
      return
    }

    const nameDiff = nodeDiffs.columnName
    if (nameDiff) {
      nodeDiffs[DDL_PROPERTY_TITLE_ROW_DIFF_KEY] = nameDiff
      return
    }

    for (const flagKey of DDL_COLUMN_FLAG_DIFF_KEYS) {
      const flagDiff = nodeDiffs[flagKey]
      if (flagDiff) {
        nodeDiffs[DDL_PROPERTY_TITLE_ROW_DIFF_KEY] = this.asReplaceFlagDiffForTitleRow(flagDiff)
        return
      }
    }

    const foreignKeyTargetDiffs = nodeDiffs.foreignKeyTargetDiffs
    if (foreignKeyTargetDiffs) {
      const firstTargetDiff = Object.values(foreignKeyTargetDiffs).find(Boolean)
      if (firstTargetDiff) {
        nodeDiffs[DDL_PROPERTY_TITLE_ROW_DIFF_KEY] = this.asReplaceFlagDiffForTitleRow(firstTargetDiff)
      }
    }
  }

  private aggregateForeignKeyTargetDiffs(
    diffs: object,
    nodeDiffs: DdlApiColumnPropertyRowDiffs,
  ): void {
    const foreignKeyTargetsDiffRecord = (diffs as Record<string, unknown>)['foreignKeyTargets']
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(foreignKeyTargetsDiffRecord)) {
      return
    }

    const foreignKeyTargetDiffs: DdlApiForeignKeyTargetDiffs = {}
    for (const [targetKey, diff] of Object.entries(foreignKeyTargetsDiffRecord)) {
      if (!diff) {
        continue
      }
      foreignKeyTargetDiffs[targetKey] = this.buildForeignKeyTargetDiffMetadata(diff)
    }

    if (Object.keys(foreignKeyTargetDiffs).length > 0) {
      nodeDiffs.foreignKeyTargetDiffs = foreignKeyTargetDiffs
    }
  }

  private aggregateEnumValueDiffs(
    diffs: object,
    nodeDiffs: DdlApiColumnPropertyRowDiffs,
  ): void {
    const enumValuesDiffRecord = (diffs as Record<string, unknown>)['enumValues']
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(enumValuesDiffRecord)) {
      return
    }

    const enumValueDiffs: DdlApiEnumValueDiffs = {}
    for (const [literalKey, diff] of Object.entries(enumValuesDiffRecord)) {
      if (!diff) {
        continue
      }
      enumValueDiffs[literalKey] = this.buildEnumValueDiffMetadata(diff)
    }

    if (Object.keys(enumValueDiffs).length > 0) {
      nodeDiffs.enumValueDiffs = enumValueDiffs
      this.aggregateEnumValuesRowColorizingDiff(nodeDiffs)
    }
  }

  private aggregateEnumValuesRowColorizingDiff(
    nodeDiffs: DdlApiColumnPropertyRowDiffs,
  ): void {
    const enumValueDiffs = nodeDiffs.enumValueDiffs
    if (!enumValueDiffs) {
      return
    }

    const representativeDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
      ...Object.values(enumValueDiffs),
    )
    if (!representativeDiff) {
      return
    }

    nodeDiffs.enumValuesRowColorizingDiff = this.asReplaceFlagDiffForTitleRow(representativeDiff)
  }

  private buildEnumValueDiffMetadata(diff: Diff): ChangedPropertyMetaData {
    if (isDiffReplace(diff)) {
      const metadata = this.buildChangedPropertyMetaDataFromDiff(diff)
      return {
        ...metadata,
        styles: {
          before: {
            ...metadata.styles.before,
            backgroundColor: undefined,
            textHighlighterColor: HighlightVariant.Yellow,
          },
          after: {
            ...metadata.styles.after,
            backgroundColor: undefined,
            textHighlighterColor: HighlightVariant.Yellow,
          },
        },
      }
    }

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
            borderShadowColor: HighlightVariant.Green,
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
            borderShadowColor: HighlightVariant.Red,
            isFontMuted: true,
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

  private buildForeignKeyTargetDiffMetadata(diff: Diff): ChangedPropertyMetaData {
    const metadata = this.buildChangedPropertyMetaDataFromDiff(diff)

    if (isDiffAdd(diff)) {
      return {
        ...metadata,
        styles: {
          ...metadata.styles,
          after: {
            ...metadata.styles.after,
            textHighlighterColor: HighlightVariant.Green,
          },
        },
      }
    }

    if (isDiffRemove(diff)) {
      return {
        ...metadata,
        styles: {
          ...metadata.styles,
          before: {
            ...metadata.styles.before,
            textHighlighterColor: HighlightVariant.Red,
          },
        },
      }
    }

    return metadata
  }

  private hasColumnTypeFieldDiffs(
    crawlValue: object,
    diffsMetaKey: PropertyKey,
  ): boolean {
    const columnType = Reflect.get(crawlValue, "columnType")
    if (!isObject(columnType)) {
      return false
    }

    const columnTypeCrawlDiffs = columnType[diffsMetaKey]
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(columnTypeCrawlDiffs)) {
      return false
    }

    return Object.values(columnTypeCrawlDiffs).some(AbstractNodeDiffsAggregator.isDiff)
  }

  private readColumnTypeFieldDiffs(
    crawlValue: object,
    diffsMetaKey: PropertyKey,
  ): DdlApiColumnTypeFieldDiffs {
    const columnTypeFieldDiffs: DdlApiColumnTypeFieldDiffs = {}
    const columnType = Reflect.get(crawlValue, "columnType")
    if (!isObject(columnType)) {
      return columnTypeFieldDiffs
    }

    const columnTypeCrawlDiffs = columnType[diffsMetaKey]
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(columnTypeCrawlDiffs)) {
      return columnTypeFieldDiffs
    }

    for (const [crawlKey, diff] of Object.entries(columnTypeCrawlDiffs)) {
      if (!diff) {
        continue
      }

      const fieldKey = this.normalizeColumnTypeFieldDiffKey(crawlKey)
      if (!fieldKey) {
        continue
      }

      columnTypeFieldDiffs[fieldKey] = this.buildColumnTypeFieldDiffMetadata(diff)
    }

    return columnTypeFieldDiffs
  }

  private aggregateColumnTypeFieldDiffs(
    crawlValue: object,
    diffsMetaKey: PropertyKey,
    nodeDiffs: DdlApiColumnPropertyRowDiffs,
  ): void {
    const columnTypeFieldDiffs = this.readColumnTypeFieldDiffs(crawlValue, diffsMetaKey)

    if (Object.keys(columnTypeFieldDiffs).length > 0) {
      nodeDiffs.columnTypeFieldDiffs = columnTypeFieldDiffs
    }
  }

  private normalizeColumnTypeFieldDiffKey(
    crawlKey: string,
  ): DdlApiColumnTypeFieldDiffKey | undefined {
    if (crawlKey === "type") {
      return "typeName"
    }
    if ((DDL_COLUMN_TYPE_FIELD_DIFF_KEYS as readonly string[]).includes(crawlKey)) {
      return crawlKey as DdlApiColumnTypeFieldDiffKey
    }
    return undefined
  }

  private buildColumnTypeFieldDiffMetadata(diff: Diff): ChangedPropertyMetaData {
    if (isDiffReplace(diff)) {
      const metadata = this.buildChangedPropertyMetaDataFromDiff(diff)
      return {
        ...metadata,
        styles: {
          before: {
            ...metadata.styles.before,
            backgroundColor: undefined,
            textHighlighterColor: HighlightVariant.Yellow,
          },
          after: {
            ...metadata.styles.after,
            backgroundColor: undefined,
            textHighlighterColor: HighlightVariant.Yellow,
          },
        },
      }
    }

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
            textHighlighterColor: HighlightVariant.Green,
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
            textHighlighterColor: HighlightVariant.Red,
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
}
