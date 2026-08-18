import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import {
  ChangedPropertyMetaData,
  NODE_LEVEL_DIFF_KEY,
  NodeDiffs,
  NodeDiffsSeverities,
  NodeDiffsSeverity,
  NodeDiffsSeverityPlacemennt,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaTreeNodeKind } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"

export class JsonSchemaNodeDiffsSeveritiesAggregatorKindAny
  extends AbstractNodeDiffsSeveritiesAggregator<JsonSchemaTreeNodeValue | null> {

  public aggregate(
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeValue | null>,
  ): NodeDiffsSeverities | undefined {
    const diffNode = nodeDiffs[NODE_LEVEL_DIFF_KEY]
    if (diffNode) {
      return {
        [NodeDiffsSeverityPlacemennt.TitleRow]: this.buildNodeDiffsSeverity(diffNode),
        [NodeDiffsSeverityPlacemennt.DescriptionRow]: this.buildNodeDiffsSeverity(diffNode),
      }
    }

    const diffsSeverities: NodeDiffsSeverities = {}

    this.applyRowSeverity(nodeDiffs, "title", NodeDiffsSeverityPlacemennt.TitleRow, diffsSeverities)
    this.applyRowSeverity(nodeDiffs, "description", NodeDiffsSeverityPlacemennt.DescriptionRow, diffsSeverities)

    return Object.keys(diffsSeverities).length > 0 ? diffsSeverities : undefined
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
    nodeDiffs: NodeDiffs<JsonSchemaTreeNodeValue | null>,
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
