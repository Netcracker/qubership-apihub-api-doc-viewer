import { RecordDrivenNodeDescendantDiffsAggregator } from "../../../../abstract/tree-with-diffs/node-diffs-data/record-driven-aggregators"

/**
 * Child diffs keyed by child key: the transformer writes every child-section / option / scheme
 * add, remove, and rename into the parent's own record under the child's key.
 */
export class OpenApiNodeDescendantDiffsAggregatorKindAny extends RecordDrivenNodeDescendantDiffsAggregator { }
