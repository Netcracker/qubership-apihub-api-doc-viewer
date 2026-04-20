import { TreeWithDiffs } from "../../abstract/tree-with-diffs/tree.impl";
import { JsoTreeNodeKind } from "../types/node-kind";
import { JsoTreeNodeMeta } from "../types/node-meta";
import { JsoTreeNodeValue } from "../types/node-value";

export class JsoTreeWithDiffs extends TreeWithDiffs<
  JsoTreeNodeValue | null,
  JsoTreeNodeKind,
  JsoTreeNodeMeta
> {
  constructor() {
    super();
  }
}
