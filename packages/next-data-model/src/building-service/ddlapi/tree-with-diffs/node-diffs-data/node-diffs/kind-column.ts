import { DiffMetaKeys } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys";
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { ITreeNodeWithDiffs, HighlightVariant, NODE_LEVEL_DIFF_KEY, NodeDiffs, ChangedPropertyMetaData } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DdlApiTreeNodeValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import {
  DDL_COLUMN_CHANGED_PROPERTY_KEYS,
  DDL_COLUMN_FLAG_DIFF_KEYS,
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY,
  DdlApiColumnPropertyRowDiffs,
  DdlApiForeignKeyTargetDiffs,
} from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types";
import { DdlApiTreeNodeKind } from "@apihub/next-data-model/model/ddlapi/types/node-kind";
import { DdlApiTreeNodeMeta } from "@apihub/next-data-model/model/ddlapi/types/node-meta";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { isDiffAdd, isDiffRemove, Diff } from "@netcracker/qubership-apihub-api-diff";
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

    const diffs = (crawlValue as Record<PropertyKey, unknown>)[diffsMetaKey]
    if (!isObject(diffs)) {
      return superNodeDiffs
    }

    const hasForeignKeyTargetDiffs = AbstractNodeDiffsAggregator.isDiffsRecord(diffs['foreignKeyTargets'])
    const hasFlatDiffs = Object.entries(diffs).some(([key, value]) =>
      key !== 'foreignKeyTargets' && AbstractNodeDiffsAggregator.isDiff(value),
    )
    if (!hasFlatDiffs && !hasForeignKeyTargetDiffs) {
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

    const generatedExpressionDiff = diffs['generatedExpression']
    if (AbstractNodeDiffsAggregator.isDiff(generatedExpressionDiff)) {
      this.aggregateTextDiff(
        generatedExpressionDiff,
        'generatedExpression',
        nodeDiffs,
      )
    }

    if (this.hasWholeNodeAddOrRemoveDiff(nodeDiffs)) {
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
}
