import { AbstractNodeDescendantsDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-aggregator";
import { DdlApiTreeNodeKind, DdlApiTreeNodeKinds } from "@apihub/next-data-model/model/ddlapi/types/node-kind";
import { DdlApiNodeDescendantDiffsAggregatorKindAny } from "./kind-any";
import { DdlApiNodeDescendantDiffsAggregatorKindTable } from "./kind-table";

export class DdlApiNodeDescendantDiffsAggregatorFactory {
  private static readonly instances = new Map<DdlApiTreeNodeKind | null, AbstractNodeDescendantsDiffsAggregator>();

  public static instance(
    kind: DdlApiTreeNodeKind,
  ): AbstractNodeDescendantsDiffsAggregator {
    if (!this.instances.has(kind)) {
      switch (kind) {
        case DdlApiTreeNodeKinds.TABLE:
          this.instances.set(kind, new DdlApiNodeDescendantDiffsAggregatorKindTable());
          break;
        default:
          this.instances.set(null, new DdlApiNodeDescendantDiffsAggregatorKindAny());
          return this.instances.get(null)!;
      }
    }
    return this.instances.get(kind)!;
  }
}
