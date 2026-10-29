import { NodeDiffsSeverityPlacemennt } from "../../../model/abstract/tree-with-diffs/tree-node.interface"
import { SecurityTreeNodeKind } from "../../../model/security/types/node-kind"
import {
  RecordDrivenNodeDescendantDiffsAggregator,
  RecordDrivenNodeDescendantDiffsSummaryAggregator,
  RecordDrivenNodeDiffsAggregator,
  RecordDrivenNodeDiffsSeveritiesAggregator,
  RecordDrivenNodeDiffsSummaryAggregator,
} from "../../abstract/tree-with-diffs/node-diffs-data/record-driven-aggregators"
import { SECURITY_FIELD_PLACEMENTS, SECURITY_NODE_PLACEMENTS, securityFieldDiffKeys } from "./aggregation-tables"

/**
 * Aggregators of the Security section kinds for the API types whose own aggregators are not
 * record-driven (AsyncAPI): the security with-diffs builders prepare the records, these map them to
 * rows exactly as the OpenAPI tree does. Stateless; one instance per API type's node types (`V`,
 * `K`, `M`), cached per kind inside it.
 */
export class SecurityNodeAggregators<V extends object | boolean | null, K extends string, M extends object> {
  private readonly nodeDiffsByKind = new Map<SecurityTreeNodeKind, RecordDrivenNodeDiffsAggregator<V, K, M>>()
  private readonly severitiesByKind = new Map<SecurityTreeNodeKind, RecordDrivenNodeDiffsSeveritiesAggregator<V>>()
  private readonly descendantDiffsAggregator = new RecordDrivenNodeDescendantDiffsAggregator()
  private readonly diffsSummaryAggregator = new RecordDrivenNodeDiffsSummaryAggregator()
  private readonly descendantDiffsSummaryAggregator = new RecordDrivenNodeDescendantDiffsSummaryAggregator()

  public nodeDiffs(kind: SecurityTreeNodeKind): RecordDrivenNodeDiffsAggregator<V, K, M> {
    let aggregator = this.nodeDiffsByKind.get(kind)
    if (!aggregator) {
      aggregator = new RecordDrivenNodeDiffsAggregator<V, K, M>(securityFieldDiffKeys(kind))
      this.nodeDiffsByKind.set(kind, aggregator)
    }
    return aggregator
  }

  public severities(kind: SecurityTreeNodeKind): RecordDrivenNodeDiffsSeveritiesAggregator<V> {
    let aggregator = this.severitiesByKind.get(kind)
    if (!aggregator) {
      aggregator = new RecordDrivenNodeDiffsSeveritiesAggregator<V>(
        SECURITY_FIELD_PLACEMENTS[kind] ?? {},
        SECURITY_NODE_PLACEMENTS[kind] ?? [NodeDiffsSeverityPlacemennt.TitleRow],
      )
      this.severitiesByKind.set(kind, aggregator)
    }
    return aggregator
  }

  public descendantDiffs(): RecordDrivenNodeDescendantDiffsAggregator {
    return this.descendantDiffsAggregator
  }

  public diffsSummary(): RecordDrivenNodeDiffsSummaryAggregator {
    return this.diffsSummaryAggregator
  }

  public descendantDiffsSummary(): RecordDrivenNodeDescendantDiffsSummaryAggregator {
    return this.descendantDiffsSummaryAggregator
  }
}
