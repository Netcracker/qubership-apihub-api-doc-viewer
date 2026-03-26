import { OperationKeys } from "@apihub/next-data-model/shared/async-api/types/operation-keys";
import { Diff } from "@netcracker/qubership-apihub-api-diff";
import { JsonPath } from "@netcracker/qubership-apihub-json-crawl";
import { isArray, isObject } from "../../../utilities";
import { AbstractNodeDiffsAggregator } from "../../abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { AsyncApiLogger } from "../logging";
import { DiffMetaKeys } from "../tree-with-diffs/node-diffs-data/node-diffs/factory";
import {
  AsyncApiMessageOrientedSpec,
  AsyncApiMessageOrientedSpecData,
  AsyncApiMessageOrientedSpecDataChannel,
  AsyncApiMessageOrientedSpecDataContent,
  AsyncApiMessageOrientedSpecDataOperation,
  AsyncApiSpecTransformer
} from "./async-api-spec-transformer";

export interface AsyncApiMessageOrientedSpecDataContentWithDiffs extends AsyncApiMessageOrientedSpecDataContent {
  [key: symbol]: unknown;
}

export interface AsyncApiMessageOrientedSpecDataChannelWithDiffs extends AsyncApiMessageOrientedSpecDataChannel {
  [key: symbol]: unknown;
}

export interface AsyncApiMessageOrientedSpecDataOperationWithDiffs extends AsyncApiMessageOrientedSpecDataOperation {
  [key: symbol]: unknown;
}

export interface AsyncApiMessageOrientedSpecDataWithDiffs extends AsyncApiMessageOrientedSpecData {
  content: AsyncApiMessageOrientedSpecDataContentWithDiffs;
  channel: AsyncApiMessageOrientedSpecDataChannelWithDiffs;
  operation: AsyncApiMessageOrientedSpecDataOperationWithDiffs;
  [key: symbol]: unknown;
}

export interface AsyncApiMessageOrientedSpecWithDiffs extends AsyncApiMessageOrientedSpec {
  data: AsyncApiMessageOrientedSpecDataWithDiffs;
  [key: symbol]: unknown;
}

export class AsyncApiSpecWithDiffsTransformer extends AsyncApiSpecTransformer {
  constructor(
    referenceNamePropertyKey: symbol,
    logger: AsyncApiLogger,
    private readonly diffMetaKeys: DiffMetaKeys,
  ) {
    super(referenceNamePropertyKey, logger)
  }

  public override transformOperationOrientedSpecToMessageOrientedSpec(
    source: unknown,
    operationKeys?: OperationKeys,
  ): AsyncApiMessageOrientedSpecWithDiffs | null {
    if (!this.isAsyncApiSpecification(source)) {
      return null
    }

    const resolvedOperationKeys = this.operationKeysOrDefaults(source, operationKeys)
    if (!resolvedOperationKeys) {
      return null
    }
    const { operationKey, messageKey } = resolvedOperationKeys
    const { diffsMetaKey, aggregatedDiffsMetaKey } = this.diffMetaKeys

    const transformed = super.transformOperationOrientedSpecToMessageOrientedSpec(source, resolvedOperationKeys)

    if (!transformed) {
      return null
    }

    const operationsDiffsRecord = this.takeIfDiffsRecord(
      this.getValueByPath(source, ['operations', diffsMetaKey])
    )
    const operationFieldsDiffsRecord = this.takeIfDiffsRecord(
      this.getValueByPath(source, ['operations', operationKey, diffsMetaKey])
    )
    const operationBindingsDiffsRecord = this.takeIfDiffsRecord(
      this.getValueByPath(source, ['operations', operationKey, 'bindings', diffsMetaKey])
    )

    const channelFieldsDiffsRecord = this.takeIfDiffsRecord(
      this.getValueByPath(source, ['operations', operationKey, 'channel', diffsMetaKey])
    )
    const channelBindingsDiffsRecord = this.takeIfDiffsRecord(
      this.getValueByPath(source, ['operations', operationKey, 'channel', 'bindings', diffsMetaKey])
    )
    const channelServersDiffsRecord = this.takeIfDiffsRecord(
      this.getValueByPath(source, ['operations', operationKey, 'channel', 'servers', diffsMetaKey])
    )

    const messagesDiffsRecord = this.takeIfDiffsRecord(
      this.getValueByPath(source, ['operations', operationKey, 'messages', diffsMetaKey])
    )
    const messageFieldsDiffsRecord = this.takeIfDiffsRecord(
      this.getValueByPath(source, ['operations', operationKey, 'messages', messageKey, diffsMetaKey])
    )
    const messageBindingsDiffsRecord = this.takeIfDiffsRecord(
      this.getValueByPath(source, ['operations', operationKey, 'messages', messageKey, 'bindings', diffsMetaKey])
    )

    const transformedWithDiffs = transformed as AsyncApiMessageOrientedSpecWithDiffs

    if (!(diffsMetaKey in transformedWithDiffs)) {
      const diffTitle = messageFieldsDiffsRecord?.title
      const diffName = messageFieldsDiffsRecord?.name
      const diffDescription = messageFieldsDiffsRecord?.description
      const diffSummary = messageFieldsDiffsRecord?.summary
      const diffAddress = channelFieldsDiffsRecord?.address
      transformedWithDiffs[diffsMetaKey] = {
        ...(diffTitle ? { title: diffTitle } : {}),
        ...(diffName ? { internalTitle: diffName } : {}),
        ...(diffDescription ? { description: diffDescription } : {}),
        ...(diffSummary ? { summary: diffSummary } : {}),
        ...(diffAddress ? { address: diffAddress } : {}),
      }
    }

    if (!(diffsMetaKey in transformedWithDiffs.data.channel)) {
      const diffTitle = channelFieldsDiffsRecord?.title
      const diffDescription = channelFieldsDiffsRecord?.description
      const diffSummary = channelFieldsDiffsRecord?.summary
      const diffAddress = channelFieldsDiffsRecord?.address
      transformedWithDiffs.data.channel[diffsMetaKey] = {
        ...(diffTitle ? { title: diffTitle } : {}),
        ...(diffDescription ? { description: diffDescription } : {}),
        ...(diffSummary ? { summary: diffSummary } : {}),
        ...(diffAddress ? { address: diffAddress } : {}),
      }
    }

    if (!(diffsMetaKey in transformedWithDiffs.data.operation)) {
      const diffTitle = operationFieldsDiffsRecord?.title
      const diffDescription = operationFieldsDiffsRecord?.description
      const diffSummary = operationFieldsDiffsRecord?.summary
      transformedWithDiffs.data.operation[diffsMetaKey] = {
        ...(diffTitle ? { title: diffTitle } : {}),
        ...(diffDescription ? { description: diffDescription } : {}),
        ...(diffSummary ? { summary: diffSummary } : {}),
      }
    }

    return transformedWithDiffs
  }

  private isAsyncApiMessageOrientedSpecWithDiffs(value: unknown): value is AsyncApiMessageOrientedSpecWithDiffs {
    if (!isObject(value)) {
      return false
    }
    return this.hasOnlyAllowedDiffMetaSymbols(value)
  }

  private hasOnlyAllowedDiffMetaSymbols(value: unknown): boolean {
    if (!isObject(value) && !isArray(value)) {
      return true
    }

    if (isArray(value)) {
      return value.every((item) => this.hasOnlyAllowedDiffMetaSymbols(item))
    }

    const allowedSymbols = new Set<symbol>([
      this.diffMetaKeys.diffsMetaKey,
      this.diffMetaKeys.aggregatedDiffsMetaKey,
    ])

    const currentSymbols = Object.getOwnPropertySymbols(value)
    const hasOnlyAllowedCurrentSymbols = currentSymbols.every((symbolKey) => allowedSymbols.has(symbolKey))
    if (!hasOnlyAllowedCurrentSymbols) {
      return false
    }

    return Object.values(value).every((nestedValue) => this.hasOnlyAllowedDiffMetaSymbols(nestedValue))
  }

  // TODO 26.03.26 // Duplicate
  private getValueByPath(source: unknown, path: JsonPath): unknown {
    let currentValue: unknown = source
    let isArrayTraversal = false

    for (const pathSegment of path) {
      if (!isObject(currentValue) && !isArray(currentValue)) {
        return undefined
      }

      if (isArrayTraversal && isArray(currentValue)) {
        const matchedElement = currentValue.find((element) =>
          isObject(element) && element[this.referenceNamePropertyKey] === pathSegment
        )
        currentValue = matchedElement
        isArrayTraversal = false
        continue
      }

      const currentNode = currentValue as Record<PropertyKey, unknown>
      currentValue = currentNode[pathSegment]
      if (isArray(currentValue)) {
        isArrayTraversal = true
      }
    }

    return currentValue
  }

  // TODO 26.03.26 // Duplicate
  private takeIfDiffsRecord(maybeDiffsRecord: unknown): Partial<Record<string, Diff>> | undefined {
    if (!AbstractNodeDiffsAggregator.isDiffsRecord(maybeDiffsRecord)) {
      return undefined
    }
    return maybeDiffsRecord
  }
}
