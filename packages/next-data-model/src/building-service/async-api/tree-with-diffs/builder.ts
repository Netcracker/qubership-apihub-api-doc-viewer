import { NodeDiffs, NodeDiffsSeverities, TreeNodeWithDiffsParams } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { AsyncApiComplexTreeNodeWithDiffs } from "@apihub/next-data-model/model/async-api/tree-with-diffs/complex-node.impl";
import { AsyncApiSimpleTreeNodeWithDiffs } from "@apihub/next-data-model/model/async-api/tree-with-diffs/simple-node.impl";
import { AsyncApiTreeWithDiffs } from "@apihub/next-data-model/model/async-api/tree-with-diffs/tree.impl";
import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { OperationKeys } from "@apihub/next-data-model/shared/async-api/types/operation-keys";
import { NodeId, NodeKey } from "@apihub/next-data-model/utility-types";
import { DiffType } from "@netcracker/qubership-apihub-api-diff/dist/types";
import { TreeWithDiffsBuilder } from "../../abstract/tree-with-diffs/builder";
import { AsyncApiLogger, createAsyncApiLogger } from "../logging";
import { DiffMetaKeys } from "./diffs-data-aggregators/node-diffs/factory";

export class AsyncApiTreeWithDiffsBuilder extends TreeWithDiffsBuilder<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiNodeMeta
> {
  public readonly tree: AsyncApiTreeWithDiffs;

  constructor(
    private readonly source: unknown,
    private readonly referenceNamePropertyKey: symbol,
    private readonly diffsMetaKeys: DiffMetaKeys,
    private readonly operationKeys?: OperationKeys,
    private readonly logger: AsyncApiLogger = createAsyncApiLogger(),
  ) {
    super()
    this.tree = new AsyncApiTreeWithDiffs();
  }

  public build(): AsyncApiTreeWithDiffs {
    return this.tree;
  }

  public createNodeFromRaw(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id: NodeId,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key: NodeKey,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kind: AsyncApiTreeNodeKind,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    complex: boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: TreeNodeWithDiffsParams<object | null, string, object> // FIXME
  ): AsyncApiSimpleTreeNodeWithDiffs | AsyncApiComplexTreeNodeWithDiffs | undefined {
    return undefined;
  }

  public createNodeMeta(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key: NodeKey,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: TreeNodeWithDiffsParams<object | null, string, object> // FIXME
  ): AsyncApiNodeMeta {
    return {};
  }

  public createNodeValue(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key: NodeKey,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kind: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: TreeNodeWithDiffsParams<object | null, string, object> // FIXME
  ): AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null {
    return null;
  }

  public createNodeDiffs(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kind: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: TreeNodeWithDiffsParams<object | null, string, object> // FIXME
  ): NodeDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind>> | undefined {
    return undefined;
  }

  public createNodeDescendantsDiffs(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kind: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: TreeNodeWithDiffsParams<object | null, string, object> // FIXME
  ): Set<DiffType> | undefined {
    return undefined;
  }

  public createNodeDiffsSeverities(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kind: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: TreeNodeWithDiffsParams<object | null, string, object> // FIXME
  ): NodeDiffsSeverities | undefined {
    return undefined;
  }
}