import { ChannelObject, isAsyncApiSpecification, isReferenceObject, MessageObject, OperationObject, OperationsObject, SpecificationExtensions } from "@apihub/next-data-model/model/async-api/types/async-api-specification";
import { AsyncApiTreeCrawlState } from "../state/types";
import { UNKNOWN_ADDRESS } from "./constants/constants";
import { SchemaTransformFunc } from "./types/types";

export function createTransformerOperationOrientedSpecToMessageOrientedSpec(
  operationType: string, // action (send, receive)
  operationKey: string, // id (key) to the necessary operation in source
  messageKey: string, // id (key) to the necessary message in source
): SchemaTransformFunc<AsyncApiTreeCrawlState> {
  return (_1, value, _2, path) => {
    if (path.length !== 0) {
      return value
    }
    if (!isAsyncApiSpecification(value)) {
      return value
    }

    const operations: OperationsObject = value.operations ?? {}
    const operation: OperationObject | undefined = Object.entries(operations)
      .filter((operationEntry): operationEntry is [string, OperationObject] => {
        const [operationId, operation] = operationEntry
        return (
          !isReferenceObject(operation) &&
          operation.action === operationType &&
          operationId === operationKey
        )
      })
      .map(([, operation]) => operation)
      .at(0)
    if (!operation) {
      console.error('Cannot find operation with key (id) =', operationKey, 'and type (action) =', operationType)
      return value
    }

    const operationChannel: ChannelObject = !isReferenceObject(operation.channel) ? operation.channel : {}
    const operationMessages: MessageObject[] = (operation.messages ?? [])
      .filter((message): message is MessageObject => !isReferenceObject(message))
    const operationMessage: MessageObject | undefined = operationMessages
      .find((message: MessageObject) => (message as Record<PropertyKey, unknown>)[Symbol('referenceName')] === messageKey)

    if (!operationMessage) {
      console.error('Cannot find message with key (id) =', messageKey)
      return value
    }

    const operationExtensions = copyExtensions(operation)
    const operationChannelExtensions = copyExtensions(operationChannel)
    const operationMessageExtensions = copyExtensions(operationMessage)

    const messageOrientedOperation: Record<PropertyKey, unknown> = {
      title: operationMessage.title,
      internalTitle: operationMessage?.name,
      action: operation.action,
      address: operationChannel.address ?? UNKNOWN_ADDRESS,
      summary: operationMessage.summary,
      description: operationMessage.description,
      ...operationMessageExtensions ? { extensions: operationMessageExtensions } : {},
      data: {
        content: {
          ...operationMessage.bindings ? { bindings: operationMessage.bindings } : {},
          ...operationMessage.headers ? { headers: operationMessage.headers } : {},
          ...operationMessage.payload ? { payload: operationMessage.payload } : {},
        },
        channel: {
          title: operationChannel.title,
          summary: operationChannel.summary,
          description: operationChannel.description,
          ...operationChannelExtensions ? { extensions: operationChannelExtensions } : {},
          ...operationChannel.bindings ? { bindings: operationChannel.bindings } : {},
          ...operationChannel.parameters ? { parameters: operationChannel.parameters } : {},
        },
        operation: {
          title: operation.title,
          summary: operation.summary,
          description: operation.description,
          ...operationExtensions ? { extensions: operationExtensions } : {},
        },
      }
    }
    return messageOrientedOperation
  }
}

function copyExtensions(source: MessageObject): SpecificationExtensions | undefined {
  const extensionKeys = Object.keys(source)
    .filter((key): key is keyof SpecificationExtensions => key.startsWith('x-'))
  if (extensionKeys.length === 0) {
    return undefined
  }
  return extensionKeys.reduce((extensions, key) => {
    extensions[key] = source[key]
    return extensions
  }, {} as SpecificationExtensions)
}
