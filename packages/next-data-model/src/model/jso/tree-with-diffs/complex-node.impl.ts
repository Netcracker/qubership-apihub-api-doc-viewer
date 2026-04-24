import { ComplexTreeNodeWithDiffs } from "../../abstract/tree-with-diffs/complex-node.impl";
import { JsoTreeNodeKind } from "../types/node-kind";
import { JsoTreeNodeMeta } from "../types/node-meta";
import { JsoTreeNodeValue } from "../types/node-value";

export type JsoComplexTreeNodeWithDiffs = ComplexTreeNodeWithDiffs<
  JsoTreeNodeValue | null,
  JsoTreeNodeKind,
  JsoTreeNodeMeta
>
