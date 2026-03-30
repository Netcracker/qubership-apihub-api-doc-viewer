import { AsyncApiTreeNodeWithDiffs } from "@apihub/next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind"
import { AsyncApiTreeNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta"
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value"
import { ITreeNode } from "../../../../model/abstract/tree/tree-node.interface"
import { CrawlerIterationValue } from "../../../../utility-types"

export interface CommonState<
  V extends object | null,
  K extends string,
  M extends object,
  N extends ITreeNode<V, K, M> = ITreeNode<V, K, M>,
> {
  parent: N | null
  container: N | null
  alreadyConvertedValuesCache: Map<CrawlerIterationValue, N>
}

export type AsyncApiTreeCrawlState = CommonState<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiTreeNodeMeta
>

export type AsyncApiTreeWithDiffsCrawlState = CommonState<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiTreeNodeMeta,
  AsyncApiTreeNodeWithDiffs
>
