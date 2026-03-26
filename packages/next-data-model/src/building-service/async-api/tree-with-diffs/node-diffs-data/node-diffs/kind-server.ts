import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { ComplexTreeNodeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/complex-node.impl";
import { SimpleTreeNodeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/simple-node.impl";
import { NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { DiffMetaKeys } from "./factory";
import { AsyncApiNodeDiffsAggregatorKindAny } from "./kind-any";

export class AsyncApiNodeDiffsAggregatorKindServer extends AsyncApiNodeDiffsAggregatorKindAny {
  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: SimpleTreeNodeWithDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiNodeMeta>,
    containerNode?: ComplexTreeNodeWithDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiNodeMeta>,
  ): NodeDiffs<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.SERVER> | null> | undefined {
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue)) {
      return undefined
    }

    let nodeDiffs = super.aggregate(crawlValue, diffsMetaKeys, nodeKey, parentNode, containerNode)

    if (!nodeDiffs) {
      nodeDiffs = {}
    }

    const diffs = crawlValue[diffsMetaKey]
    if (AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
      // host
      const hostDiff = diffs['host']
      hostDiff && this.aggregateTextDiff(hostDiff, 'host', nodeDiffs)

      // protocol
      const protocolDiff = diffs['protocol']
      protocolDiff && this.aggregateTextDiff(protocolDiff, 'protocol', nodeDiffs)
    }

    return Object.keys(nodeDiffs).length > 0 ? nodeDiffs : undefined;
  }
}
