import { DiffMetaKeys } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys";
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { ITreeNodeWithDiffs, NODE_LEVEL_DIFF_KEY, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DdlApiTreeNodeValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import {
  DDL_COLUMN_CHANGED_PROPERTY_KEYS,
  DDL_COLUMN_FLAG_DIFF_KEYS,
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY,
  DdlApiColumnPropertyRowDiffs,
} from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types";
import { DdlApiTreeNodeKind } from "@apihub/next-data-model/model/ddlapi/types/node-kind";
import { DdlApiTreeNodeMeta } from "@apihub/next-data-model/model/ddlapi/types/node-meta";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff";
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
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
      return superNodeDiffs
    }

    const nodeDiffs: DdlApiColumnPropertyRowDiffs = this.adoptPropertyRowDiffs(
      superNodeDiffs,
      DDL_COLUMN_CHANGED_PROPERTY_KEYS,
    )

    const isPrimaryKeyDiff = diffs['isPrimaryKey']
    isPrimaryKeyDiff && this.aggregateFlagDiff(
      isPrimaryKeyDiff,
      'isPrimaryKey',
      nodeDiffs,
      this.takeBooleanFlagValue(crawlValue, 'isPrimaryKey'),
    )

    const isForeignKeyDiff = diffs['isForeignKey']
    isForeignKeyDiff && this.aggregateFlagDiff(
      isForeignKeyDiff,
      'isForeignKey',
      nodeDiffs,
      this.takeBooleanFlagValue(crawlValue, 'isForeignKey'),
    )

    const isGeneratedDiff = diffs['isGenerated']
    isGeneratedDiff && this.aggregateFlagDiff(
      isGeneratedDiff,
      'isGenerated',
      nodeDiffs,
      this.takeBooleanFlagValue(crawlValue, 'isGenerated'),
    )

    const isUniqueDiff = diffs['isUnique']
    isUniqueDiff && this.aggregateFlagDiff(
      isUniqueDiff,
      'isUnique',
      nodeDiffs,
      this.takeBooleanFlagValue(crawlValue, 'isUnique'),
    )

    const isNotNullDiff = diffs['isNotNull']
    isNotNullDiff && this.aggregateFlagDiff(
      isNotNullDiff,
      'isNotNull',
      nodeDiffs,
      this.takeBooleanFlagValue(crawlValue, 'isNotNull'),
    )

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
  }
}
