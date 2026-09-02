import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import {
  ChangedPropertyMetaData,
  NODE_LEVEL_DIFF_KEY,
  NodeDiffs,
  NodeDiffsSeverities,
  NodeDiffsSeverity,
  NodeDiffsSeverityPlacemennt,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  JSON_SCHEMA_TITLE_ROW_DIFF_KEY,
  JsonSchemaKindAnyNodeDiffs,
  JsonSchemaSharedRowDiffs,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/property-row-diffs.types"
import { JsonSchemaTreeNodeStoredValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"

export class JsonSchemaNodeDiffsSeveritiesAggregatorKindAny
  extends AbstractNodeDiffsSeveritiesAggregator<JsonSchemaTreeNodeStoredValue | null> {

  public aggregate(
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeStoredValue | null>,
  ): NodeDiffsSeverities | undefined {
    const diffNode = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    const diffsSeverities: NodeDiffsSeverities = {}

    if (diffNode) {
      diffsSeverities[NodeDiffsSeverityPlacemennt.TitleRow] = this.buildNodeDiffsSeverity(diffNode)
      diffsSeverities[NodeDiffsSeverityPlacemennt.DescriptionRow] = this.buildNodeDiffsSeverity(diffNode)
      diffsSeverities[NodeDiffsSeverityPlacemennt.NestingIndicatorRow] = this.buildNodeDiffsSeverity(diffNode)
    } else {
      this.applyMaxRowSeverityFromTypeLabelDiffs(nodeDiffs, diffsSeverities)
      this.applyRowSeverity(nodeDiffs, "description", NodeDiffsSeverityPlacemennt.DescriptionRow, diffsSeverities)
      this.applyRowSeverity(
        nodeDiffs,
        "nestingIndicatorRowColorizingDiff",
        NodeDiffsSeverityPlacemennt.NestingIndicatorRow,
        diffsSeverities,
      )
    }

    this.applyMaxAdditionalInfoRowSeverityFromValidationRowDiffs(nodeDiffs, diffsSeverities)

    return Object.keys(diffsSeverities).length > 0 ? diffsSeverities : undefined
  }

  /**
   * Floating diff badge for validation-constraint rows (`AdditionalInfoRow` placement), computed
   * for every node kind - not just property/root - so combiner-variant nodes get the same
   * severity indicator as a top-level property. Property/root nodes extend this with
   * default/enum/examples severities in {@link JsonSchemaNodeDiffsSeveritiesAggregatorKindProperty}.
   */
  private applyMaxAdditionalInfoRowSeverityFromValidationRowDiffs(
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeStoredValue | null>,
    diffsSeverities: NodeDiffsSeverities,
  ): void {
    const validationDiffs = nodeDiffs as JsonSchemaKindAnyNodeDiffs
    const maxPropertyDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
      ...Object.values(validationDiffs.validationRowDiffs ?? {}),
      ...Object.values(validationDiffs.validationRowValueDiffs ?? {}).flatMap((rowValueDiffs) => (
        Object.values(rowValueDiffs ?? {})
      )),
      ...Object.values(validationDiffs.validationRowColorizingDiffs ?? {}),
    )
    if (!maxPropertyDiff) {
      return
    }

    diffsSeverities[NodeDiffsSeverityPlacemennt.AdditionalInfoRow] = this.buildNodeDiffsSeverity(maxPropertyDiff)
  }

  private applyMaxRowSeverityFromTypeLabelDiffs(
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeStoredValue | null>,
    diffsSeverities: NodeDiffsSeverities,
  ): void {
    const sharedDiffs = nodeDiffs as JsonSchemaSharedRowDiffs
    const titleRowDiffs = [
      sharedDiffs[JSON_SCHEMA_TITLE_ROW_DIFF_KEY],
      ...Object.values(sharedDiffs.typeLabelFieldDiffs ?? {}),
    ]

    const maxPropertyDiff = AbstractNodeDiffsSeveritiesAggregator.maxChangedPropertyMetaDataByDiffType(
      ...titleRowDiffs,
    )
    if (!maxPropertyDiff) {
      return
    }

    diffsSeverities[NodeDiffsSeverityPlacemennt.TitleRow] = this.buildNodeDiffsSeverity(maxPropertyDiff)
  }

  protected buildNodeDiffsSeverity(propertyDiff: ChangedPropertyMetaData): NodeDiffsSeverity {
    const diff = propertyDiff.data
    const nodeDiffsSeverity: NodeDiffsSeverity = {
      type: diff.type,
      causedAt: [],
    }
    if (isDiffRemove(diff) || isDiffReplace(diff)) {
      nodeDiffsSeverity.causedAt = diff.beforeDeclarationPaths[0]
    } else if (isDiffAdd(diff)) {
      nodeDiffsSeverity.causedAt = diff.afterDeclarationPaths[0]
    }
    return nodeDiffsSeverity
  }

  protected applyRowSeverity(
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeStoredValue | null>,
    propertyKey: string,
    placement: NodeDiffsSeverityPlacemennt,
    diffsSeverities: NodeDiffsSeverities,
  ): void {
    const propertyDiff = (nodeDiffs as Record<string, ChangedPropertyMetaData | undefined>)[propertyKey]
    if (!propertyDiff) {
      return
    }
    diffsSeverities[placement] = this.buildNodeDiffsSeverity(propertyDiff)
  }
}
