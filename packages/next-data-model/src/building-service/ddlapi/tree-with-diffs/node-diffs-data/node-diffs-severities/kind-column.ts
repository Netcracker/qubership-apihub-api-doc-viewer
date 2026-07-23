import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator";
import { NODE_LEVEL_DIFF_KEY, NodeDiffs, NodeDiffsSeverities, NodeDiffsSeverityPlacemennt } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DDL_COLUMN_FLAG_DIFF_KEYS } from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs";
import { DdlApiColumnPropertyRowDiffs } from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types";
import { DdlApiTreeNodeKind } from "@apihub/next-data-model/model/ddlapi/types/node-kind";
import { DdlApiTreeNodeValue } from "@apihub/next-data-model/model/ddlapi/tree/node-value";
import { DdlApiNodeDiffsSeveritiesAggregatorKindAny } from "./kind-any";

export class DdlApiNodeDiffsSeveritiesAggregatorKindColumn
  extends DdlApiNodeDiffsSeveritiesAggregatorKindAny {

  public aggregate(
    nodeDiffs: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null>,
  ): NodeDiffsSeverities | undefined {
    const wholeNodeDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    const diffsSeverities: NodeDiffsSeverities = {}

    if (wholeNodeDiff) {
      diffsSeverities[NodeDiffsSeverityPlacemennt.TitleRow] = this.buildNodeDiffsSeverity(wholeNodeDiff)
    } else {
      this.applyMaxRowSeverityFromColumnTitleRowDiffs(nodeDiffs, diffsSeverities)
      this.applyRowSeverity(nodeDiffs, 'description', NodeDiffsSeverityPlacemennt.DescriptionRow, diffsSeverities)
    }

    this.applyMaxRowSeverityFromPropertyDiffs(
      nodeDiffs,
      [NODE_LEVEL_DIFF_KEY, 'isGenerated', 'generatedExpression'],
      NodeDiffsSeverityPlacemennt.AdditionalInfoRow,
      diffsSeverities,
    )

    return Object.keys(diffsSeverities).length > 0 ? diffsSeverities : undefined
  }

  private applyMaxRowSeverityFromColumnTitleRowDiffs(
    nodeDiffs: NodeDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null>,
    diffsSeverities: NodeDiffsSeverities,
  ): void {
    const columnDiffs = nodeDiffs as DdlApiColumnPropertyRowDiffs
    const titleRowDiffs = [
      columnDiffs.columnName,
      ...DDL_COLUMN_FLAG_DIFF_KEYS.map(flagKey => columnDiffs[flagKey]),
      ...Object.values(columnDiffs.foreignKeyTargetDiffs ?? {}),
    ]

    const maxPropertyDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
      ...titleRowDiffs,
    )
    if (!maxPropertyDiff) {
      return
    }

    diffsSeverities[NodeDiffsSeverityPlacemennt.TitleRow] = this.buildNodeDiffsSeverity(maxPropertyDiff)
  }
}
