import { NodeDiffs, NodeDiffsSummary } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DiffMetaKeys } from "../node-diffs/factory";
import { AsyncApiNodeDiffsSummaryKindAny } from "./kind-any";

export class AsyncApiNodeDiffsSummaryKindBinding extends AsyncApiNodeDiffsSummaryKindAny {
  public aggregate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nodeDiffs?: NodeDiffs,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    crawlValue?: object | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    diffsMetaKeys?: DiffMetaKeys,
  ): NodeDiffsSummary | undefined {
    return undefined
  }
}