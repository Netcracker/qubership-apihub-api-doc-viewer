import { AbstractNodeDescendantsDiffsSummaryAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-summary-aggregator";
import { NodeDescendantDiffs, NodeDescendantDiffsSummary, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { getValueByPath, takeIfDiffsRecord } from "@apihub/next-data-model/utilities";
import { Diff, DiffType, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { DiffMetaKeys } from "../node-diffs/factory";

/**
 * Forward collecting diffs summary for MESSAGE_CHANNEL node.
 * This is necessary because some fields under the node in renderred view are not direct descendants of the node.
 * It means that such descendants can't be reached by the backward propagation of diffs summary to parent/container nodes
 * in common mechanism and we have to collect the summary here.
 */
export class AsyncApiNodeDescendantDiffsSummaryAggregatorKindMessageContent extends AbstractNodeDescendantsDiffsSummaryAggregator {
  public aggregate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nodeDiffs?: NodeDiffs,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nodeDescendantDiffs?: NodeDescendantDiffs,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    crawlValue?: object | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    diffsMetaKeys?: DiffMetaKeys,
  ): NodeDescendantDiffsSummary | undefined {
    const summary: NodeDescendantDiffsSummary = new Set();

    if (!crawlValue || !diffsMetaKeys) {
      return summary;
    }
    const { diffsMetaKey, aggregatedDiffsMetaKey } = diffsMetaKeys

    const diffsRecordExtensions = takeIfDiffsRecord(
      getValueByPath(crawlValue, ['extensions', diffsMetaKey])
    )
    if (diffsRecordExtensions) {
      for (const diff of Object.values(diffsRecordExtensions)) {
        if (!diff) { continue; }
        summary.add(diff.type);
      }
    }

    const aggregatedDiffTypesHeaders = getValueByPath(crawlValue, ['headers', aggregatedDiffsMetaKey])
    if (this.isDiffsSet(aggregatedDiffTypesHeaders)) {
      for (const diff of aggregatedDiffTypesHeaders) {
        if (!diff) { continue; }
        summary.add(diff.type);
      }
    }

    const aggregatedDiffTypesPayload = getValueByPath(crawlValue, ['payload', aggregatedDiffsMetaKey])
    if (this.isDiffsSet(aggregatedDiffTypesPayload)) {
      for (const diff of aggregatedDiffTypesPayload) {
        if (!diff) { continue; }
        summary.add(diff.type);
      }
    }

    return summary;
  }

  // TODO 22.05.26 // Move to shared utils
  protected isDiffsSet(value: unknown): value is Set<Diff<DiffType>> {
    if (!value) {
      return false;
    }
    if (!(value instanceof Set)) {
      return false;
    }
    for (const item of value) {
      if (typeof item !== "object") {
        return false;
      }
      if (
        !isDiffAdd(item) &&
        !isDiffRemove(item) &&
        !isDiffReplace(item) &&
        !isDiffRename(item)
      ) {
        return false;
      }
    }
    return true;
  }
}