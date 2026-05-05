import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { JsoTreeNodeKind } from "@apihub/next-data-model/model/jso/types/node-kind";
import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta";
import { JsoTreeNodeValue } from "@apihub/next-data-model/model/jso/types/node-value";
import { JsoNodeDiffsAggregatorKindAny } from "./kind-any";

type JsoTreeNodeDiffsSource = Pick<JsoTreeNodeValue, 'value'>

export type DiffMetaKeys = {
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}

export class JsoNodeDiffsAggregatorFactory {
  private static readonly instances = new Map<
    JsoTreeNodeKind | null,
    AbstractNodeDiffsAggregator<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>
  >();

  public static instance(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kind: JsoTreeNodeKind,
  ): AbstractNodeDiffsAggregator<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource> {
    if (!this.instances.has(null)) {
      this.instances.set(null, new JsoNodeDiffsAggregatorKindAny());
    }
    return this.instances.get(null)!;
  }
}
