import { ComplexTreeNodeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/complex-node.impl";
import { SimpleTreeNodeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/simple-node.impl";
import { HighlightVariant, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeKey } from "@apihub/next-data-model/utility-types";
import { isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff";
import { DiffMetaKeys } from "./factory";
import { AsyncApiNodeDiffsAggregatorKindAny } from "./kind-any";

export class AsyncApiNodeDiffsAggregatorKindBinding extends AsyncApiNodeDiffsAggregatorKindAny {
  public aggregate(
    crawlValue: object | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: SimpleTreeNodeWithDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiTreeNodeMeta>,
    containerNode?: ComplexTreeNodeWithDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiTreeNodeMeta>,
  ): NodeDiffs<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING> | null> | undefined {
    // const { diffsMetaKey } = diffsMetaKeys

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

    return Object.keys(nodeDiffs).length > 0 ? nodeDiffs : undefined;
  }
}
