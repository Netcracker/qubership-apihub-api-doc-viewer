import { OperationKeys } from "@apihub/next-data-model/shared/async-api/types/operation-keys";
import { getValueByPath, isArray, isObject, takeIfDiffsRecord } from "@apihub/next-data-model/utilities";
import { aggregateDiffsWithRollup } from "@netcracker/qubership-apihub-api-diff";
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

    const operationsDiffsRecord = takeIfDiffsRecord(
      getValueByPath(source, ['operations', diffsMetaKey], this.referenceNamePropertyKey)
    )
    const operationFieldsDiffsRecord = takeIfDiffsRecord(
      getValueByPath(source, ['operations', operationKey, diffsMetaKey], this.referenceNamePropertyKey)
    )
    const operationBindingsDiffsRecord = takeIfDiffsRecord(
      getValueByPath(source, ['operations', operationKey, 'bindings', diffsMetaKey], this.referenceNamePropertyKey)
    )

    const channelFieldsDiffsRecord = takeIfDiffsRecord(
      getValueByPath(source, ['operations', operationKey, 'channel', diffsMetaKey], this.referenceNamePropertyKey)
    )
    const channelBindingsDiffsRecord = takeIfDiffsRecord(
      getValueByPath(source, ['operations', operationKey, 'channel', 'bindings', diffsMetaKey], this.referenceNamePropertyKey)
    )
    const channelServersDiffsRecord = takeIfDiffsRecord(
      getValueByPath(source, ['operations', operationKey, 'channel', 'servers', diffsMetaKey], this.referenceNamePropertyKey)
    )

    const messagesDiffsRecord = takeIfDiffsRecord(
      getValueByPath(source, ['operations', operationKey, 'messages', diffsMetaKey], this.referenceNamePropertyKey)
    )
    const messageFieldsDiffsRecord = takeIfDiffsRecord(
      getValueByPath(source, ['operations', operationKey, 'messages', messageKey, diffsMetaKey], this.referenceNamePropertyKey)
    )
    const messageBindingsDiffsRecord = takeIfDiffsRecord(
      getValueByPath(source, ['operations', operationKey, 'messages', messageKey, 'bindings', diffsMetaKey], this.referenceNamePropertyKey)
    )

    // TODO 31.03.26 // Invent something to migrate 'bindingVersion' diffs from 'binding' property to our synthetic representation for binding

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

    // channel
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

    // operation
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

    // ATTENTION: It is IMPORTANT to aggregate diffs on TRANSFORMED DOCUMENT
    aggregateDiffsWithRollup(transformedWithDiffs, diffsMetaKey, aggregatedDiffsMetaKey)

    return transformedWithDiffs
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
}
