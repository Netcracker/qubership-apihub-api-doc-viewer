import { JsoTreeNodeValueWithDiffs } from "@apihub/next-data-model/model/jso/tree-with-diffs/node-value";
import { JsoTreeNodeValueBase } from "@apihub/next-data-model/model/jso/tree/node-value";
import { JsoTreeNodeKind, JsoTreeNodeKinds, JsoTreeNodeKindsList } from "@apihub/next-data-model/model/jso/types/node-kind";
import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta";
import { isObject } from "@netcracker/qubership-apihub-json-crawl";
import { AbstractNodeDataBuilder, NodeDataPickFunction } from "../../../abstract/tree/node-data/builder";

const JSO_NODE_KINDS: ReadonlySet<string> = new Set(JsoTreeNodeKindsList);

export class JsoNodeDataWithDiffsBuilder extends AbstractNodeDataBuilder<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeMeta> {
  private static readonly JSO_TREE_NODE_VALUE_PROPS: (keyof JsoTreeNodeValueBase)[] = [
    "title", "value", "valueType", "isPrimitive", "isArrayItem", "isPredefinedValueSet",
  ];

  public override createNodeMeta(value: unknown): JsoTreeNodeMeta {
    return {
      _fragment: value,
    };
  }

  public override createNodeValue(
    kind: string,
    value: unknown,
    pick: NodeDataPickFunction
  ): JsoTreeNodeValueWithDiffs | null {
    if (!this.isJsoTreeNodeKind(kind)) {
      return null;
    }
    if (kind !== JsoTreeNodeKinds.PROPERTY) {
      return null;
    }
    if (!this.isJsoTreeNodeValue(value)) {
      return null;
    }

    return {
      // todo
      before: pick<JsoTreeNodeValueBase>(value, JsoNodeDataWithDiffsBuilder.JSO_TREE_NODE_VALUE_PROPS)!,
      after: pick<JsoTreeNodeValueBase>(value, JsoNodeDataWithDiffsBuilder.JSO_TREE_NODE_VALUE_PROPS)!,
    };
  }

  private isJsoTreeNodeKind(kind: string): kind is JsoTreeNodeKind {
    return JSO_NODE_KINDS.has(kind);
  }

  private isJsoTreeNodeValue(value: unknown): value is JsoTreeNodeValueWithDiffs {
    return isObject(value) && Object.keys(value).every(
      key => JsoNodeDataWithDiffsBuilder.JSO_TREE_NODE_VALUE_PROPS.includes(key as keyof JsoTreeNodeValueBase)
    );
  }
}
