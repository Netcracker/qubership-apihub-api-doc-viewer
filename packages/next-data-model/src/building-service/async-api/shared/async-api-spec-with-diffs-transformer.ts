import { OperationKeys } from "@apihub/next-data-model/shared/async-api/types/operation-keys";
import { isArray, isObject } from "../../../utilities";
import { AsyncApiLogger } from "../logging";
import { DiffMetaKeys } from "../tree-with-diffs/diffs-data-aggregators/node-diffs/factory";
import {
  AsyncApiMessageOrientedSpec,
  AsyncApiMessageOrientedSpecData,
  AsyncApiMessageOrientedSpecDataChannel,
  AsyncApiMessageOrientedSpecDataContent,
  AsyncApiMessageOrientedSpecDataOperation,
  AsyncApiSpecTransformer,
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
    const transformed = super.transformOperationOrientedSpecToMessageOrientedSpec(source, operationKeys)
    if (!this.isAsyncApiMessageOrientedSpecWithDiffs(transformed)) {
      return null
    }
    return transformed
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
}
