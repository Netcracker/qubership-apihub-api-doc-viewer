import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "./node-kind"
import { AsyncApiNodeJsoPropertyValueType } from "./node-value-type"

export type AsyncApiTreeNodeValue<T extends AsyncApiTreeNodeKind> =
  T extends typeof AsyncApiTreeNodeKinds.ROOT
  ? AsyncApiTreeNodeValueTypeRoot
  : T extends typeof AsyncApiTreeNodeKinds.OPERATION
  ? AsyncApiTreeNodeValueOperation
  : T extends typeof AsyncApiTreeNodeKinds.BINDING
  ? AsyncApiTreeNodeValueTypeBinding
  : T extends typeof AsyncApiTreeNodeKinds.JSO_PROPERTY
  ? AsyncApiTreeNodeValueTypeJsoProperty
  : T extends typeof AsyncApiTreeNodeKinds.CHANNEL
  ? AsyncApiTreeNodeValueTypeChannel
  : T extends typeof AsyncApiTreeNodeKinds.MESSAGE
  ? AsyncApiTreeNodeValueTypeMessage
  : never

export type AsyncApiTreeNodeValueBase = {
  readonly title?: string
  readonly description?: string
  readonly summary?: string
}

export type AsyncApiTreeNodeValueTypeRoot = AsyncApiTreeNodeValueBase

export type AsyncApiTreeNodeValueOperation = AsyncApiTreeNodeValueBase & {
  readonly title: string
  readonly description: string
  readonly action: string
  readonly address: string | null
}

export type AsyncApiTreeNodeValueTypeBinding = AsyncApiTreeNodeValueBase & {
  readonly protocol: string
}

export type AsyncApiTreeNodeValueTypeJsoProperty = AsyncApiTreeNodeValueBase & {
  readonly value: unknown
  readonly valueType: AsyncApiNodeJsoPropertyValueType
  readonly isPrimitive: boolean
}

export type AsyncApiTreeNodeValueTypeChannel = AsyncApiTreeNodeValueBase

export type AsyncApiTreeNodeValueTypeMessage = AsyncApiTreeNodeValueBase & {
  readonly internalTitle: string
}
