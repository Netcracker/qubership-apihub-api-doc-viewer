import { AbstractNodeDescendantsDiffsSummaryAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-summary-aggregator";
import { NodeDescendantDiffs, NodeDescendantDiffsSummary, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { AsyncApiTreeNodeKinds } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { getValueByPath } from "@apihub/next-data-model/utilities";
import { Diff, DiffType, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { DiffMetaKeys } from "../node-diffs/factory";

export class AsyncApiNodeDescendantDiffsSummaryAggregatorKindContent extends AbstractNodeDescendantsDiffsSummaryAggregator {
  public aggregate(
    nodeDiffs?: NodeDiffs<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT>>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nodeDescendantDiffs?: NodeDescendantDiffs,
    crawlValue?: object | null,
    diffsMetaKeys?: DiffMetaKeys,
  ): NodeDescendantDiffsSummary | undefined {
    const summary: NodeDescendantDiffsSummary = new Set();

    if (nodeDiffs && nodeDiffs['']) {
      const diff = nodeDiffs[''].data
      if (diff && (isDiffRemove(diff) || isDiffAdd(diff))) {
        return summary;
      }
    }

    if (!crawlValue || !diffsMetaKeys) {
      return summary;
    }

    const { aggregatedDiffsMetaKey } = diffsMetaKeys

    const diffsSummaryBinding = getValueByPath(crawlValue, ['binding', aggregatedDiffsMetaKey])
    if (this.isDiffsSet(diffsSummaryBinding)) {
      for (const diff of diffsSummaryBinding) {
        summary.add(diff.type)
      }
    }

    return summary;
  }

  private isDiffsSet(value: unknown): value is Set<Diff<DiffType>> {
    if (!value) {
      return false;
    }
    if (!(value instanceof Set)) {
      return false;
    }
    for (const item of value) {
      if (typeof item !== 'object') {
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