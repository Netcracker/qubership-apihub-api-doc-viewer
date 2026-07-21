import { NODE_LEVEL_DIFF_KEY, NodeDiffs, NodeDiffsSeverities, NodeDiffsSeverityPlacemennt } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DDL_INDEX_FLAG_DIFF_KEYS } from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs";
import { DdlApiTreeNodeKind } from "@apihub/next-data-model/model/ddlapi/types/node-kind";
import { DdlApiTreeNodeValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import { DdlApiNodeDiffsSeveritiesAggregatorKindAny } from "./kind-any";

export class DdlApiNodeDiffsSeveritiesAggregatorKindIndex
  extends DdlApiNodeDiffsSeveritiesAggregatorKindAny {

  public aggregate(
    nodeDiffs: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null>,
  ): NodeDiffsSeverities | undefined {
    const wholeNodeDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    if (wholeNodeDiff) {
      return {
        [NodeDiffsSeverityPlacemennt.TitleRow]: this.buildNodeDiffsSeverity(wholeNodeDiff),
      }
    }

    const diffsSeverities: NodeDiffsSeverities = {}

    this.applyMaxRowSeverityFromPropertyDiffs(
      nodeDiffs,
      ['indexName', ...DDL_INDEX_FLAG_DIFF_KEYS],
      NodeDiffsSeverityPlacemennt.TitleRow,
      diffsSeverities,
    )

    return Object.keys(diffsSeverities).length > 0 ? diffsSeverities : undefined
  }
}
