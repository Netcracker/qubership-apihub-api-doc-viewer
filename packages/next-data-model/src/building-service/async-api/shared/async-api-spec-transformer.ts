import { OperationKeys } from "@apihub/next-data-model/shared/async-api/types/operation-keys";
import type { v3 } from "@asyncapi/parser/esm/spec-types";
import { isObject } from "../../../utilities";
import { KeyCandidates, KeyResolution, resolveOperationKeys } from "./async-api-key-resolution";
import { UNKNOWN_ADDRESS } from "../json-crawl-entities/transformers/constants/constants";
import { BuildingServiceLogger } from "../../../loggers";

export interface AsyncApiMessageOrientedSpecDataContent {
  headers?: unknown;
  extensions?: v3.SpecificationExtensions;
  bindings?: unknown;
  payload?: unknown;
  [key: string]: unknown;
}

export interface AsyncApiMessageOrientedSpecDataChannel {
  title?: string;
  summary?: string;
  description?: string;
  extensions?: v3.SpecificationExtensions;
  bindings?: unknown;
  parameters?: v3.SchemaObject;
  servers?: (v3.ServerObject | v3.ReferenceObject)[];
  [key: string]: unknown;
}

export interface AsyncApiMessageOrientedSpecDataOperation {
  id: string;
  title?: string;
  summary?: string;
  description?: string;
  bindings?: unknown;
  extensions?: v3.SpecificationExtensions;
  [key: string]: unknown;
}

export interface AsyncApiMessageOrientedSpecData {
  content: AsyncApiMessageOrientedSpecDataContent;
  channel: AsyncApiMessageOrientedSpecDataChannel;
  operation: AsyncApiMessageOrientedSpecDataOperation;
}

export interface AsyncApiMessageOrientedSpec {
  id: string;
  internalTitle?: string;
  title?: string;
  summary?: string;
  description?: string;
  action?: v3.OperationObject["action"];
  address: string;
  data: AsyncApiMessageOrientedSpecData;
  [key: string]: unknown;
}

export class AsyncApiSpecTransformer {
  /**
   * `beforeKeyProperty` is the symbol api-diff records its mapping decision under. Optional:
   * without it only own-key matching is possible, which is the behaviour a non-merged document
   * gets anyway.
   */
  constructor(
    protected readonly referenceNamePropertyKey: symbol,
    protected readonly logger: BuildingServiceLogger,
    protected readonly beforeKeyProperty?: symbol,
  ) { }

  private readBeforeKey(value: unknown): string | undefined {
    if (!this.beforeKeyProperty || !isObject(value)) {
      return undefined
    }
    const beforeKey = (value as Record<PropertyKey, unknown>)[this.beforeKeyProperty]
    return typeof beforeKey === "string" ? beforeKey : undefined
  }

  private operationCandidates(source: v3.AsyncAPIObject): KeyCandidates {
    const operations: v3.OperationsObject = source.operations ?? {}
    return {
      keys: Object.keys(operations),
      beforeKeyOf: (key) => this.readBeforeKey(operations[key]),
    }
  }

  /**
   * A message is reachable both from `operation.messages[]` and from `channel.messages`, and only
   * the latter is a map - array elements carry a numeric before-key, which cannot name a message.
   * So own keys come from the operation's own reference-name properties, and before-keys from the
   * channel's messages map.
   */
  private messageCandidates(source: v3.AsyncAPIObject, operationKey: string): KeyCandidates {
    const operationCandidate = (source.operations ?? {})[operationKey]
    const operation = !this.isReferenceObject(operationCandidate) ? operationCandidate : undefined
    const channel = operation && !this.isReferenceObject(operation.channel) ? operation.channel : undefined
    const channelMessages = channel?.messages ?? {}

    const keysFromOperation = (operation?.messages ?? [])
      .map((message) => isObject(message) ? message[this.referenceNamePropertyKey] : undefined)
      .filter((key): key is string => typeof key === "string")

    return {
      // The channel map fills in messages the operation array does not name.
      keys: [...new Set([...keysFromOperation, ...Object.keys(channelMessages)])],
      beforeKeyOf: (key) => this.readBeforeKey(channelMessages[key]),
    }
  }

  protected resolveOperationKeys(
    source: v3.AsyncAPIObject,
    operationKeys?: OperationKeys,
    previousOperationKeys?: OperationKeys,
  ): KeyResolution {
    return resolveOperationKeys(
      this.operationCandidates(source),
      (operationKey) => this.messageCandidates(source, operationKey),
      { operationKeys, previousOperationKeys },
      this.logger,
    )
  }

  public transformOperationOrientedSpecToMessageOrientedSpec(
    source: unknown,
    operationKeys?: OperationKeys,
    previousOperationKeys?: OperationKeys,
  ): AsyncApiMessageOrientedSpec | null {
    if (!this.isAsyncApiSpecification(source)) {
      return null
    }

    const operations: v3.OperationsObject = source.operations ?? {}

    const resolution = this.resolveOperationKeys(source, operationKeys, previousOperationKeys)
    if (resolution.kind === "notFound") {
      return null
    }
    const { operationKey, messageKey } = resolution.keys

    const operation: v3.OperationObject | undefined = Object.entries(operations)
      .filter((currentOperationEntry): currentOperationEntry is [string, v3.OperationObject] => {
        const [currentOperationKey, currentOperation] = currentOperationEntry
        return !this.isReferenceObject(currentOperation) && currentOperationKey === operationKey
      })
      .map(([, currentOperation]) => currentOperation)
      .at(0)

    if (!operation) {
      this.logger.error(`Cannot find operation with key (id) = ${operationKey}`)
      return null
    }

    const operationChannel: v3.ChannelObject = !this.isReferenceObject(operation.channel) ? operation.channel : {}
    const operationMessages: v3.MessageObject[] = (operation.messages ?? [])
      .filter((message): message is v3.MessageObject => !this.isReferenceObject(message))
    let operationMessage: v3.MessageObject | undefined = operationMessages
      .find((message: v3.MessageObject) => isObject(message) && message[this.referenceNamePropertyKey] === messageKey)

    if (!operationChannel) {
      this.logger.error("Cannot find channel in the operation", operation)
      return null
    }

    if (!operationMessage) {
      const channelMessage = operationChannel.messages?.[messageKey]
      operationMessage = !this.isReferenceObject(channelMessage) ? channelMessage : undefined
      if (!operationMessage) {
        this.logger.error(`Cannot find message with key (id) = ${messageKey}`)
        return null
      }
    }

    const operationExtensions = this.copyExtensions(operation)
    const operationChannelExtensions = this.copyExtensions(operationChannel)
    const operationMessageExtensions = this.copyExtensions(operationMessage)

    const pickReferenceNameProperty = (value: unknown): Record<PropertyKey, unknown> | undefined => {
      return isObject(value)
        ? { [this.referenceNamePropertyKey]: value[this.referenceNamePropertyKey] }
        : undefined
    }

    const messageReferenceNameProperty = pickReferenceNameProperty(operationMessage)
    const channelReferenceNameProperty = pickReferenceNameProperty(operationChannel)
    const operationReferenceNameProperty = pickReferenceNameProperty(operation)

    const messageOrientedOperation: AsyncApiMessageOrientedSpec = {
      ...(messageReferenceNameProperty ?? {}),
      id: messageKey,
      ...(operationMessage.name ? { internalTitle: operationMessage.name } : {}),
      ...(operationMessage.title ? { title: operationMessage.title } : {}),
      ...(operationMessage.summary ? { summary: operationMessage.summary } : {}),
      ...(operationMessage.description ? { description: operationMessage.description } : {}),
      action: operation.action,
      address: operationChannel.address ?? UNKNOWN_ADDRESS,
      data: {
        content: {
          ...operationMessage.headers ? { headers: operationMessage.headers } : {},
          ...operationMessageExtensions ? { extensions: operationMessageExtensions } : {},
          ...operationMessage.bindings ? { bindings: operationMessage.bindings } : {},
          ...operationMessage.payload ? { payload: operationMessage.payload } : {},
        },
        channel: {
          ...(channelReferenceNameProperty ?? {}),
          ...(operationChannel.title ? { title: operationChannel.title } : {}),
          ...(operationChannel.summary ? { summary: operationChannel.summary } : {}),
          ...(operationChannel.description ? { description: operationChannel.description } : {}),
          ...operationChannelExtensions ? { extensions: operationChannelExtensions } : {},
          ...operationChannel.bindings ? { bindings: operationChannel.bindings } : {},
          ...operationChannel.parameters ? { parameters: this.transformParametersToJsonSchema(operationChannel.parameters) } : {},
          ...operationChannel.servers ? { servers: operationChannel.servers } : {},
        },
        operation: {
          ...(operationReferenceNameProperty ?? {}),
          id: operationKey,
          ...(operation.title ? { title: operation.title } : {}),
          ...(operation.summary ? { summary: operation.summary } : {}),
          ...(operation.description ? { description: operation.description } : {}),
          ...operation.bindings ? { bindings: operation.bindings } : {},
          ...operationExtensions ? { extensions: operationExtensions } : {},
        },
      },
    }

    return messageOrientedOperation
  }

  private transformParametersToJsonSchema(parameters: v3.ParametersObject): v3.SchemaObject {
    const newParameters: Record<PropertyKey, v3.SchemaObject> = {}
    for (const [parameterName, parameterValue] of Object.entries(parameters)) {
      newParameters[parameterName] =
        this.isReferenceObject(parameterValue)
          ? parameterValue
          : { type: "string", ...parameterValue }
    }
    const parametersRawObject = parameters as Record<PropertyKey, unknown>;
    for (const key of Reflect.ownKeys(parameters)) {
      if (typeof key !== "symbol") {
        continue
      }
      Object.defineProperty(newParameters, key, {
        value: parametersRawObject[key],
        configurable: true,
        enumerable: true,
        writable: true,
      })
    }
    return {
      type: 'object',
      properties: newParameters,
    }
  }

  private copyExtensions(
    source: v3.MessageObject | v3.OperationObject | v3.ChannelObject,
  ): v3.SpecificationExtensions | undefined {
    const extensionKeys = Object.keys(source)
      .filter((key): key is keyof v3.SpecificationExtensions => key.startsWith("x-"))
    if (extensionKeys.length === 0) {
      return undefined
    }
    return extensionKeys.reduce((extensions, key) => {
      extensions[key] = source[key]
      return extensions
    }, {} as v3.SpecificationExtensions)
  }

  protected isAsyncApiSpecification(value: unknown): value is v3.AsyncAPIObject {
    return typeof value === "object" && value !== null && "asyncapi" in value && typeof value.asyncapi === "string"
  }

  private isReferenceObject(value: unknown): value is v3.ReferenceObject {
    return typeof value === "object" && value !== null && "$ref" in value && typeof value.$ref === "string"
  }
}
