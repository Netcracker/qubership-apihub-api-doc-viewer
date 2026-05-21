import { AbstractNodeDescendantsDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-aggregator";
import { DIFF_HIGHLIGHTING_MODES_DEFAULT, NodeDescendantDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { getValueByPath, takeIfDiffsRecord } from "@apihub/next-data-model/utilities";
import { DiffMetaKeys } from "../node-diffs/factory";

export class AsyncApiNodeDescendantDiffsAggregatorKindMessageContent extends AbstractNodeDescendantsDiffsAggregator {
  public aggregate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value: object | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    diffsMetaKeys: DiffMetaKeys,
  ): NodeDescendantDiffs | undefined {
    if (!value) {
      return undefined;
    }
    const { diffsMetaKey } = diffsMetaKeys
    const diffsContent = takeIfDiffsRecord(
      getValueByPath(value, [diffsMetaKey])
    )
    const diffsHeaders = diffsContent?.headers
    const diffsPayload = diffsContent?.payload

    const nodeDescendantDiffs: NodeDescendantDiffs = {}
    if (diffsHeaders) {
      nodeDescendantDiffs['headers'] = {
        data: diffsHeaders,
        styles: {
          before: { isContentVisible: true, isHeaderVisible: true },
          after: { isContentVisible: true, isHeaderVisible: true },
        },
        flags: {
          before: { increaseLevel: false },
          after: { increaseLevel: true },
        },
        highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT
      }
    }
    if (diffsPayload) {
      nodeDescendantDiffs['payload'] = {
        data: diffsPayload,
        styles: {
          before: { isContentVisible: true, isHeaderVisible: true },
          after: { isContentVisible: true, isHeaderVisible: true },
        },
        flags: {
          before: { increaseLevel: false },
          after: { increaseLevel: true },
        },
        highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT
      }
    }

    return nodeDescendantDiffs;
  }
}