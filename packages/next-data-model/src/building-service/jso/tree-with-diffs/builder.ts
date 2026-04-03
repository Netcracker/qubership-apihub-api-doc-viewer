import { JsoTreeWithDiffs } from "@apihub/next-data-model/model/jso/tree-with-diffs/tree.impl";
import { JsoTreeNodeKind } from "@apihub/next-data-model/model/jso/types/node-kind";
import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta";
import { JsoTreeNodeValue } from "@apihub/next-data-model/model/jso/types/node-value";
import { isObject } from "@apihub/next-data-model/utilities";
import { TreeWithDiffsBuilder } from "../../abstract/tree-with-diffs/builder";
import { AsyncApiLogger, createAsyncApiLogger } from "../../async-api/logging";
import { DiffMetaKeys } from "../../async-api/tree-with-diffs/node-diffs-data/node-diffs/factory";
import { JsoNodeDataWithDiffsBuilder } from "./node-data/builder";

export class JsoTreeWithDiffsBuilder extends TreeWithDiffsBuilder<
  JsoTreeNodeValue | null,
  JsoTreeNodeKind,
  JsoTreeNodeMeta
> {
  public readonly tree: JsoTreeWithDiffs;
  private readonly nodeDataBuilder: JsoNodeDataWithDiffsBuilder;

  constructor(
    private readonly source: unknown,
    private readonly referenceNamePropertyKey: symbol,
    private readonly diffsMetaKeys: DiffMetaKeys,
    private readonly logger: AsyncApiLogger = createAsyncApiLogger(),
  ) {
    super()
    this.tree = new JsoTreeWithDiffs()
    this.nodeDataBuilder = new JsoNodeDataWithDiffsBuilder()
  }

  public build(): JsoTreeWithDiffs {
    if (!isObject(this.source)) {
      return this.tree
    }
    return this.tree
  }

}