import { DiffMetaKeys } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys";
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { ITreeNodeWithDiffs, NODE_LEVEL_DIFF_KEY, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DdlApiTreeNodeValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import {
  DDL_INDEX_FLAG_DIFF_KEYS,
  DDL_PROPERTY_TITLE_ROW_DIFF_KEY,
  DdlApiIndexPropertyRowDiffs,
} from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types";import { DdlApiTreeNodeKind } from "@apihub/next-data-model/model/ddlapi/types/node-kind";
import { DdlApiTreeNodeMeta } from "@apihub/next-data-model/model/ddlapi/types/node-meta";
import { adoptDdlIndexPropertyRowDiffs } from "@apihub/next-data-model/shared/ddlapi/guards/property-row-diffs";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff";
import { DdlApiNodeDiffsAggregatorKindAny } from "./kind-any";
export class DdlApiNodeDiffsAggregatorKindIndex extends DdlApiNodeDiffsAggregatorKindAny {
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

    const nodeDiffs: DdlApiIndexPropertyRowDiffs = adoptDdlIndexPropertyRowDiffs(superNodeDiffs) ?? {}

    const isUniqueDiff = diffs['isUnique']
    isUniqueDiff && this.aggregateFlagDiff(isUniqueDiff, 'isUnique', nodeDiffs)

    this.aggregatePropertyTitleRowDiff(nodeDiffs)

    return nodeDiffs
  }

  private aggregatePropertyTitleRowDiff(
    nodeDiffs: DdlApiIndexPropertyRowDiffs,
  ): void {
    const nodeLevelDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    if (nodeLevelDiff && (isDiffAdd(nodeLevelDiff.data) || isDiffRemove(nodeLevelDiff.data))) {
      nodeDiffs[DDL_PROPERTY_TITLE_ROW_DIFF_KEY] = nodeLevelDiff
      return
    }

    const nameDiff = nodeDiffs.indexName
    if (nameDiff) {
      nodeDiffs[DDL_PROPERTY_TITLE_ROW_DIFF_KEY] = nameDiff
      return
    }

    for (const flagKey of DDL_INDEX_FLAG_DIFF_KEYS) {
      const flagDiff = nodeDiffs[flagKey]
      if (flagDiff) {
        nodeDiffs[DDL_PROPERTY_TITLE_ROW_DIFF_KEY] = this.asReplaceFlagDiffForTitleRow(flagDiff)
        return
      }
    }
  }
}