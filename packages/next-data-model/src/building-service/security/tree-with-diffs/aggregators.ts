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
 * rows exactly as the OpenAPI tree does. Stateless; cached per kind and node type.
 */
export class SecurityNodeAggregators {
  private static readonly cache = new Map<string, unknown>()

  private static cached<T>(key: string, create: () => T): T {
    const existing = SecurityNodeAggregators.cache.get(key)
    if (existing) {
      return existing as T
    }
    const created = create()
    SecurityNodeAggregators.cache.set(key, created)
    return created
  }

  public static nodeDiffs<V extends object | boolean | null, K extends string, M extends object>(kind: SecurityTreeNodeKind): RecordDrivenNodeDiffsAggregator<V, K, M> {
    return SecurityNodeAggregators.cached(`diffs:${kind}`, () => new RecordDrivenNodeDiffsAggregator<V, K, M>(securityFieldDiffKeys(kind)))
  }

  public static severities<V extends object | boolean | null>(kind: SecurityTreeNodeKind): RecordDrivenNodeDiffsSeveritiesAggregator<V> {
    return SecurityNodeAggregators.cached(`severities:${kind}`, () => new RecordDrivenNodeDiffsSeveritiesAggregator<V>(
      SECURITY_FIELD_PLACEMENTS[kind] ?? {},
      SECURITY_NODE_PLACEMENTS[kind] ?? [NodeDiffsSeverityPlacemennt.TitleRow],
    ))
  }

  public static descendantDiffs(): RecordDrivenNodeDescendantDiffsAggregator {
    return SecurityNodeAggregators.cached('descendantDiffs', () => new RecordDrivenNodeDescendantDiffsAggregator())
  }

  public static diffsSummary(): RecordDrivenNodeDiffsSummaryAggregator {
    return SecurityNodeAggregators.cached('diffsSummary', () => new RecordDrivenNodeDiffsSummaryAggregator())
  }

  public static descendantDiffsSummary(): RecordDrivenNodeDescendantDiffsSummaryAggregator {
    return SecurityNodeAggregators.cached('descendantDiffsSummary', () => new RecordDrivenNodeDescendantDiffsSummaryAggregator())
  }
}
