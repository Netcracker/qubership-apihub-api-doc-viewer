import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta";
import { JsoTreeNodeValue } from "@apihub/next-data-model/model/jso/types/node-value";
import { NodeDataPickFunction } from "../../../abstract/tree/node-data/builder";
import { JsoNodeDataBuilder } from "../../tree/node-data/builder";

export class JsoNodeDataWithDiffsBuilder extends JsoNodeDataBuilder {
  public override createNodeValue(kind: string, value: unknown, pick: NodeDataPickFunction): JsoTreeNodeValue | null {
    return super.createNodeValue(kind, value, pick);
  }

  public override createNodeMeta(value: unknown): JsoTreeNodeMeta {
    return super.createNodeMeta(value);
  }
}
