import { DiffMetaKeys } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys";
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { ITreeNodeWithDiffs, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DdlApiTreeNodeValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import { DdlApiTreeNodeKind } from "@apihub/next-data-model/model/ddlapi/types/node-kind";
import { DdlApiTreeNodeMeta } from "@apihub/next-data-model/model/ddlapi/types/node-meta";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { DDL_COLUMN_FLAG_DIFF_KEYS } from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs";
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

    let nodeDiffs: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null> | undefined =
      super.aggregate(crawlValue, diffsMetaKeys, nodeKey, parentNode, containerNode)

    const diffs = (crawlValue as Record<PropertyKey, unknown>)[diffsMetaKey]
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
      return nodeDiffs
    }

    if (!nodeDiffs) {
      nodeDiffs = {}
    }

    const isPrimaryKeyDiff = diffs['isPrimaryKey']
    isPrimaryKeyDiff && this.aggregateFlagDiff(isPrimaryKeyDiff, 'isPrimaryKey', nodeDiffs)

    const isForeignKeyDiff = diffs['isForeignKey']
    isForeignKeyDiff && this.aggregateFlagDiff(isForeignKeyDiff, 'isForeignKey', nodeDiffs)

    const isGeneratedDiff = diffs['isGenerated']
    isGeneratedDiff && this.aggregateFlagDiff(isGeneratedDiff, 'isGenerated', nodeDiffs)

    const isUniqueDiff = diffs['isUnique']
    isUniqueDiff && this.aggregateFlagDiff(isUniqueDiff, 'isUnique', nodeDiffs)

    const isNotNullDiff = diffs['isNotNull']
    isNotNullDiff && this.aggregateFlagDiff(isNotNullDiff, 'isNotNull', nodeDiffs)

    this.aggregatePropertyTitleRowDiff(nodeDiffs, 'columnName', DDL_COLUMN_FLAG_DIFF_KEYS)

    return nodeDiffs
  }
}
