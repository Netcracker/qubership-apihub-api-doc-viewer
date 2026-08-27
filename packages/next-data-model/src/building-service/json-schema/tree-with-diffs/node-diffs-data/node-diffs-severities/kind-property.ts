import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import {
  NodeDiffs,
  NodeDiffsSeverities,
  NodeDiffsSeverityPlacemennt,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaKindPropertyNodeDiffs } from "@apihub/next-data-model/model/json-schema/tree-with-diffs/property-row-diffs.types"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaNodeDiffsSeveritiesAggregatorKindAny } from "./kind-any"

export class JsonSchemaNodeDiffsSeveritiesAggregatorKindProperty
  extends JsonSchemaNodeDiffsSeveritiesAggregatorKindAny {

  public aggregate(
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeValue | null>,
  ): NodeDiffsSeverities | undefined {
    const diffsSeverities = super.aggregate(nodeDiffs) ?? {}
    this.applyMaxAdditionalInfoRowSeverity(nodeDiffs, diffsSeverities)
    return Object.keys(diffsSeverities).length > 0 ? diffsSeverities : undefined
  }

  private applyMaxAdditionalInfoRowSeverity(
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeValue | null>,
    diffsSeverities: NodeDiffsSeverities,
  ): void {
    const propertyDiffs = nodeDiffs as JsonSchemaKindPropertyNodeDiffs
    const maxPropertyDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
      propertyDiffs.default,
      propertyDiffs.defaultRowColorizingDiff,
      propertyDiffs.enumDiff,
      propertyDiffs.enumRowColorizingDiff,
      propertyDiffs.examplesDiff,
      propertyDiffs.examplesRowColorizingDiff,
      ...Object.values(propertyDiffs.enumValueDiffs ?? {}),
      ...Object.values(propertyDiffs.examplesValueDiffs ?? {}),
      ...Object.values(propertyDiffs.validationRowDiffs ?? {}),
      ...Object.values(propertyDiffs.validationRowValueDiffs ?? {}).flatMap((rowValueDiffs) => (
        Object.values(rowValueDiffs ?? {})
      )),
      ...Object.values(propertyDiffs.validationRowColorizingDiffs ?? {}),
    )
    if (!maxPropertyDiff) {
      return
    }

    diffsSeverities[NodeDiffsSeverityPlacemennt.AdditionalInfoRow] =
      this.buildNodeDiffsSeverity(maxPropertyDiff)
  }
}
