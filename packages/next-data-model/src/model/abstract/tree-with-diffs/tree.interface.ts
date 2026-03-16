import { NodeId } from "@apihub/next-data-model/utility-types"
import { ITree } from "../tree/tree.interface"
import { ITreeNodeWithDiffs } from "./tree-node.interface"

export interface ITreeWithDiffs<
  V extends object | null,
  K extends string,
  M extends object,
> extends ITree<V, K, M> {
  root: ITreeNodeWithDiffs<V, K, M> | null
  nodes: Map<NodeId, ITreeNodeWithDiffs<V, K, M>>
}
