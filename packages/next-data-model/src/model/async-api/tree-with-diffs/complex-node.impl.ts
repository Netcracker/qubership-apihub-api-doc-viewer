import { ComplexTreeNodeWithDiffs } from "../../abstract/tree-with-diffs/complex-node.impl";
import { AsyncApiTreeNodeKind } from "../types/node-kind";
import { AsyncApiNodeMeta } from "../types/node-meta";
import { AsyncApiTreeNodeValue } from "../types/node-value";

export type AsyncApiComplexTreeNodeWithDiffs = ComplexTreeNodeWithDiffs<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiNodeMeta
>
