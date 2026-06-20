import { ITreeNodeWithDiffs } from "../../abstract/tree-with-diffs/tree-node.interface"
import { ITreeNode } from "../../abstract/tree/tree-node.interface"
import { DdlApiTreeNodeValue } from "../tree/node-value"
import { DdlApiTreeNodeKind } from "./node-kind"
import { DdlApiTreeNodeMeta } from "./node-meta"

export type DdlApiTreeNode =
  ITreeNode<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null, DdlApiTreeNodeKind, DdlApiTreeNodeMeta>

export type DdlApiTreeNodeWithDiffs =
  ITreeNodeWithDiffs<DdlApiTreeNodeValue<DdlApiTreeNodeKind> | null, DdlApiTreeNodeKind, DdlApiTreeNodeMeta, DdlApiTreeNodeValue<DdlApiTreeNodeKind>>