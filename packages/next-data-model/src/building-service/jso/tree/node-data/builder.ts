import { JsoTreeNodeKind, JsoTreeNodeKinds, JsoTreeNodeKindsList } from "@apihub/next-data-model/model/jso/types/node-kind";
import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta";
import { JsoTreeNodeValue, JsoTreeNodeValueBase } from "@apihub/next-data-model/model/jso/types/node-value";
import { isObject } from "../../../../utilities";
import { AbstractNodeDataBuilder, NodeDataPickFunction } from "../../../abstract/tree/node-data/builder";

const JSO_NODE_KINDS: ReadonlySet<string> = new Set(JsoTreeNodeKindsList);

export class JsoNodeDataBuilder extends AbstractNodeDataBuilder<
  JsoTreeNodeValue | null,
  JsoTreeNodeMeta
> {
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
  ): JsoTreeNodeValue | null {
    if (!this.isJsoTreeNodeKind(kind)) {
      return null;
    }
    if (kind !== JsoTreeNodeKinds.PROPERTY) {
      return null;
    }
    if (!this.isJsoTreeNodeValue(value)) {
      return null;
    }

    return pick<JsoTreeNodeValue>(value, JsoNodeDataBuilder.JSO_TREE_NODE_VALUE_PROPS);
  }

  private isJsoTreeNodeKind(kind: string): kind is JsoTreeNodeKind {
    return JSO_NODE_KINDS.has(kind);
  }

  private isJsoTreeNodeValue(value: unknown): value is JsoTreeNodeValue {
    return isObject(value) && Object.keys(value).every(
      key => JsoNodeDataBuilder.JSO_TREE_NODE_VALUE_PROPS.includes(key as keyof JsoTreeNodeValueBase)
    );
  }
}
