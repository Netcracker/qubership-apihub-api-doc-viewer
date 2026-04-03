import { ITreeNode } from "../../abstract/tree/tree-node.interface"
import { JsoTreeNodeKind } from "./node-kind"
import { JsoTreeNodeValue } from "./node-value"
import { JsoTreeNodeMeta } from "./node-meta"
import { ITreeNodeWithDiffs } from "../../abstract/tree-with-diffs/tree-node.interface"

export type JsoTreeNode<K extends JsoTreeNodeKind = JsoTreeNodeKind> =
  ITreeNode<JsoTreeNodeValue | null, K, JsoTreeNodeMeta>

export type JsoTreeNodeWithDiffs<K extends JsoTreeNodeKind = JsoTreeNodeKind> =
  ITreeNodeWithDiffs<JsoTreeNodeValue | null, K, JsoTreeNodeMeta>