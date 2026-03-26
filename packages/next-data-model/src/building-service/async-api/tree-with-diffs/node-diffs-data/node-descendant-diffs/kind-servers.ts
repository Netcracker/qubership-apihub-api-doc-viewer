import { AbstractNodeDescendantsDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-aggregator";
import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { NodeDescendantDiffs, NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { isObject } from "@apihub/next-data-model/utilities";
import { Diff } from "@netcracker/qubership-apihub-api-diff";
import { JsonPath } from "@netcracker/qubership-apihub-json-crawl";
import { DiffMetaKeys } from "../node-diffs/factory";

export class AsyncApiNodeDescendantDiffsAggregatorKindServers extends AbstractNodeDescendantsDiffsAggregator {
  public override aggregate(
    value: object | null,
    diffsMetaKeys: DiffMetaKeys,
    referenceNamePropertyKey: symbol
  ): NodeDescendantDiffs | undefined {
    if (!value) {
      return undefined
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { diffsMetaKey } = diffsMetaKeys

    if (!Array.isArray(value)) {
      return undefined
    }

    const diffsServers = this.takeIfDiffsRecord(
      this.getValueByPath(value, [diffsMetaKey])
    )
    if (!diffsServers) {
      return undefined
    }
    const nodeDescendantDiffs: NodeDescendantDiffs = {}
    let somethingChanged = false
    for (let i = 0; i < value.length; i++) {
      const server = value[i]
      const serverKey = server[referenceNamePropertyKey]
      if (!serverKey) {
        continue
      }
      const nodeDiffs: NodeDiffs<object | null> = {}
      const diffServer = diffsServers[i]
      if (!diffServer) {
        continue
      }
      nodeDescendantDiffs[serverKey] = nodeDiffs
      somethingChanged = true
      this.aggregateWholeNodeDiff<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null>(diffServer, nodeDiffs)
    }

    return somethingChanged ? nodeDescendantDiffs : undefined;
  }

  private getValueByPath(source: unknown, path: JsonPath): unknown {
    let currentValue: unknown = source

    for (const pathSegment of path) {
      if (!isObject(currentValue) && !Array.isArray(currentValue)) {
        return undefined
      }

      const currentNode = currentValue as Record<PropertyKey, unknown>
      currentValue = currentNode[pathSegment]
    }

    return currentValue
  }

  private takeIfDiffsRecord(maybeDiffsRecord: unknown): Partial<Record<string, Diff>> | undefined {
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(maybeDiffsRecord)) {
      return undefined
    }
    return maybeDiffsRecord
  }
}