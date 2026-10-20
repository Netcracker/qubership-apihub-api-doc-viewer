import { RecordDrivenNodeDescendantDiffsSummaryAggregator } from "../../../../abstract/tree-with-diffs/node-diffs-data/record-driven-aggregators"

/**
 * Forward summary from the document rollup of the TRANSFORMED node value: every displayed change below
 * the node; empty for a wholly added / removed node (response-code change markers,
 * docs/design/openapi/entities/responses.md).
 */
export class OpenApiNodeDescendantDiffsSummaryAggregatorKindAny extends RecordDrivenNodeDescendantDiffsSummaryAggregator { }
