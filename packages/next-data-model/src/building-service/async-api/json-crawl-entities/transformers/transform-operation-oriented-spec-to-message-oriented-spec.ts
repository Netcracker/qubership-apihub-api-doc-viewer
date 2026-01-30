import type { v3 } from "@asyncapi/parser/esm/spec-types";
import { UNKNOWN_ADDRESS } from "./constants/constants";

export function transformOperationOrientedSpecToMessageOrientedSpec(
  source: unknown,
  operationType?: string, // action (send, receive)
  operationKey?: string, // id (key) to the necessary operation in source
  messageKey?: string, // id (key) to the necessary message in source
): unknown {
  if (!isAsyncApiSpecification(source)) {
    return source
  }

  const operations: v3.OperationsObject = source.operations ?? {}

  let firstOperationKey: string | undefined
  let firstOperationChannelKey: string | undefined
  let firstOperationMessageKey: string | undefined
  if (!operationType || !operationKey || !messageKey) {
    console.error('Operation type (action), key or message key is not provided. Looking for first operation, channel and message in source...')
    firstOperationKey = Object.keys(operations).at(0)
    if (firstOperationKey) {
      const firstOperationCandidate = operations[firstOperationKey]
      const firstOperation = !isReferenceObject(firstOperationCandidate) ? firstOperationCandidate : null
      if (firstOperation) {
        const firstOperationChannelCandidate = firstOperation.channel
        const firstOperationChannel = !isReferenceObject(firstOperationChannelCandidate) ? firstOperationChannelCandidate : null
        if (firstOperationChannel) {
          firstOperationChannelKey = Object.keys(firstOperationChannel).at(0)
        }
        const firstOperationMessagesCandidate = firstOperationChannel?.messages?.[0]
        const firstOperationMessage = !isReferenceObject(firstOperationMessagesCandidate) ? firstOperationMessagesCandidate : null
        if (firstOperationMessage) {
          firstOperationMessageKey = Object.keys(firstOperationMessage).at(0)
        }
      }
    }
    if (!firstOperationKey || !firstOperationChannelKey || !firstOperationMessageKey) {
      console.error('Cannot find first operation, channel or message in source.')
      return source
    }
    console.debug('[AsyncAPI] Found first operation, channel and message in source:', firstOperationKey, firstOperationChannelKey, firstOperationMessageKey)
    operationType = firstOperationKey
    operationKey = firstOperationKey
    messageKey = firstOperationMessageKey
  }

  const operation: v3.OperationObject | undefined = Object.entries(operations)
    .filter((currentOperationEntry): currentOperationEntry is [string, v3.OperationObject] => {
      const [currentOperationKey, currentOperation] = currentOperationEntry
      return (
        !isReferenceObject(currentOperation) &&
        currentOperation.action === operationType &&
        currentOperationKey === operationKey
      )
    })
    .map(([, operation]) => operation)
    .at(0)

  if (!operation) {
    console.error(`Cannot find operation with key (id) = ${operationKey}, type (action) = ${operationType}`)
    return source
  }

  const operationChannel: v3.ChannelObject = !isReferenceObject(operation.channel) ? operation.channel : {}
  const operationMessages: v3.MessageObject[] = (operation.messages ?? [])
    .filter((message): message is v3.MessageObject => !isReferenceObject(message))
  const operationMessage: v3.MessageObject | undefined = operationMessages
    .find((message: v3.MessageObject) => (message as Record<PropertyKey, unknown>)[Symbol('referenceName')] === messageKey)

  if (!operationMessage) {
    console.error(`Cannot find message with key (id) = ${messageKey}`)
    return source
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
    data: {
      content: {
        ...operationMessage.headers ? { headers: operationMessage.headers } : {},
        ...operationMessageExtensions ? { extensions: operationMessageExtensions } : {},
        ...operationMessage.bindings ? { bindings: operationMessage.bindings } : {},
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

function copyExtensions(source: v3.MessageObject): v3.SpecificationExtensions | undefined {
  const extensionKeys = Object.keys(source)
    .filter((key): key is keyof v3.SpecificationExtensions => key.startsWith('x-'))
  if (extensionKeys.length === 0) {
    return undefined
  }
  return extensionKeys.reduce((extensions, key) => {
    extensions[key] = source[key]
    return extensions
  }, {} as v3.SpecificationExtensions)
}

function isAsyncApiSpecification(value: unknown): value is v3.AsyncAPIObject {
  return typeof value === 'object' && value !== null && 'asyncapi' in value && typeof value.asyncapi === 'string'
}

function isReferenceObject(value: unknown): value is v3.ReferenceObject {
  return typeof value === 'object' && value !== null && '$ref' in value && typeof value.$ref === 'string'
}
