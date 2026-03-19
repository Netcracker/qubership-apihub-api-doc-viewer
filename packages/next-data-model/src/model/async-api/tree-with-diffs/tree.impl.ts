import { TreeWithDiffs } from "../../abstract/tree-with-diffs/tree.impl";
import { AsyncApiTreeNodeKind } from "../types/node-kind";
import { AsyncApiNodeMeta } from "../types/node-meta";
import { AsyncApiTreeNodeValue } from "../types/node-value";

export class AsyncApiTreeWithDiffs extends TreeWithDiffs<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiNodeMeta
> {
  constructor() {
    super();
  }
}
