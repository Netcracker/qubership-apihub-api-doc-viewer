import { ITreeNodeWithDiffs } from "../../abstract/tree-with-diffs/tree-node.interface";
import { JsoTreeNodeKind } from "../types/node-kind";
import { JsoTreeNodeMeta } from "../types/node-meta";
import { JsoTreeNodeValue } from "../types/node-value";

export type JsoSimpleTreeNodeWithDiffs = ITreeNodeWithDiffs<
  JsoTreeNodeValue | null,
  JsoTreeNodeKind,
  JsoTreeNodeMeta
>
