import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { HighlightVariant, ITreeNodeWithDiffs, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { getValueByPath, isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff";
import { DiffMetaKeys } from "./factory";
import { AsyncApiNodeDiffsAggregatorKindAny } from "./kind-any";

export class AsyncApiNodeDiffsAggregatorKindBinding extends AsyncApiNodeDiffsAggregatorKindAny {
  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: ITreeNodeWithDiffs<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiTreeNodeMeta,
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null
    >,
    containerNode?: ITreeNodeWithDiffs<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiTreeNodeMeta,
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null
    >,
  ): NodeDiffs<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING> | null> | undefined {
    const { diffsMetaKey } = diffsMetaKeys

    if (!isObject(crawlValue)) {
      return undefined
    }

    let nodeDiffs = super.aggregate(crawlValue, diffsMetaKeys, nodeKey, parentNode, containerNode)

    if (nodeDiffs) {
      const diffNode = nodeDiffs['']
      if (diffNode) {
        const { data, styles } = diffNode
        if (isDiffAdd(data)) {
          styles.after.borderShadowColor = HighlightVariant.Green
        }
        if (isDiffRemove(data)) {
          styles.before.borderShadowColor = HighlightVariant.Red
        }
      }
    }

    if (!nodeDiffs) {
      nodeDiffs = {}
    }

    const bindingCrawlValue = getValueByPath(crawlValue, ['binding'])
    if (isObject(bindingCrawlValue)) {
      const diffs = bindingCrawlValue[diffsMetaKey]
      if (AbstractNodeDiffsAggregator.isDiffsRecord(diffs)) {
        // binding version
        const versionDiff = diffs['bindingVersion']
        versionDiff && this.aggregateTextDiff(versionDiff, 'version', nodeDiffs)
      }
    }

    return Object.keys(nodeDiffs).length > 0 ? nodeDiffs : undefined;
  }
}
