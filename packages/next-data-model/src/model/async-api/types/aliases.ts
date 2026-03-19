import { ITreeNode } from "../../abstract/tree/tree-node.interface"
import { AsyncApiTreeNodeKind } from "./node-kind"
import { AsyncApiTreeNodeValue } from "./node-value"
import { AsyncApiNodeMeta } from "./node-meta"
import { ITreeNodeWithDiffs } from "../../abstract/tree-with-diffs/tree-node.interface"

export type AsyncApiTreeNode<K extends AsyncApiTreeNodeKind = AsyncApiTreeNodeKind> = ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>
export type AsyncApiTreeNodeWithDiffs<K extends AsyncApiTreeNodeKind = AsyncApiTreeNodeKind> = ITreeNodeWithDiffs<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>
