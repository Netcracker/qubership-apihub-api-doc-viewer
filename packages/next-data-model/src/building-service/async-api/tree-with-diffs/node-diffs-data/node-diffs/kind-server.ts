import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { AsyncApiTreeNodeKinds } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { isObject } from "@apihub/next-data-model/utilities";
import { DiffMetaKeys } from "./factory";
import { AsyncApiNodeDiffsAggregatorKindAny } from "./kind-any";

export class AsyncApiNodeDiffsAggregatorKindServer extends AsyncApiNodeDiffsAggregatorKindAny {
  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
  ): NodeDiffs<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.SERVER> | null> | undefined {
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue)) {
      return undefined
    }

    let nodeDiffs = super.aggregate(crawlValue, diffsMetaKeys)
    if (!nodeDiffs) {
      nodeDiffs = {}
    }

    const diffs = crawlValue[diffsMetaKey]
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
      return undefined
    }
    
    // host
    const hostDiff = diffs['host']
    hostDiff && this.aggregateTextDiff(hostDiff, 'host', nodeDiffs)

    // protocol
    const protocolDiff = diffs['protocol']
    protocolDiff && this.aggregateTextDiff(protocolDiff, 'protocol', nodeDiffs)

    return nodeDiffs;
  }
}
