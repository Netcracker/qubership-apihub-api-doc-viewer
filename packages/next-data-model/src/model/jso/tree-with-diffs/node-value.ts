import { JsoTreeNodeValueBase } from "../tree/node-value"

export type JsoTreeNodeValueWithDiffs = {
  readonly before: JsoTreeNodeValueBase
  readonly after: JsoTreeNodeValueBase
}
