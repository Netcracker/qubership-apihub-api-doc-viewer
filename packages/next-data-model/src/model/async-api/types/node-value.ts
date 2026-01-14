import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "./node-kind"
import { AsyncApiNodeJsoPropertyValueType } from "./node-value-type"

export type AsyncApiTreeNodeValue<T extends AsyncApiTreeNodeKind> =
  T extends typeof AsyncApiTreeNodeKinds.ROOT
  ? AsyncApiTreeNodeValueTypeRoot
  : T extends typeof AsyncApiTreeNodeKinds.OPERATION
  ? AsyncApiTreeNodeValueTypeOperation
  : T extends typeof AsyncApiTreeNodeKinds.BINDING
  ? AsyncApiTreeNodeValueTypeBinding
  : T extends typeof AsyncApiTreeNodeKinds.CHANNEL
  ? AsyncApiTreeNodeValueTypeChannel
  : T extends typeof AsyncApiTreeNodeKinds.MESSAGE
  ? AsyncApiTreeNodeValueTypeMessage
  : T extends typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS
  ? AsyncApiTreeNodeValueTypeMessageHeaders
  : T extends typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD
  ? AsyncApiTreeNodeValueTypeMessagePayload
  : never

export interface AsyncApiTreeNodeValueBase {
  readonly title?: string
  readonly description?: string
  readonly summary?: string
}

export interface AsyncApiTreeNodeValueTypeRoot extends AsyncApiTreeNodeValueBase {}

export interface AsyncApiTreeNodeValueTypeOperation extends AsyncApiTreeNodeValueBase {
  readonly title: string
  readonly description: string
  readonly action: string
  readonly address: string | null
}

export interface AsyncApiTreeNodeValueTypeBinding {
  readonly protocol: string
  readonly binding: Record<string, unknown>
}

export interface AsyncApiTreeNodeValueTypeJsoProperty extends AsyncApiTreeNodeValueBase {
  readonly value: unknown
  readonly valueType: AsyncApiNodeJsoPropertyValueType
  readonly isPrimitive: boolean
}

export interface AsyncApiTreeNodeValueTypeChannel extends AsyncApiTreeNodeValueBase {}

export interface AsyncApiTreeNodeValueTypeMessage extends AsyncApiTreeNodeValueBase {
  readonly internalTitle: string
}

export interface AsyncApiTreeNodeValueTypeMultiSchema extends AsyncApiTreeNodeValueBase {
  readonly schema: object
  readonly schemaFormat?: string
}

export interface AsyncApiTreeNodeValueTypeMessageHeaders extends AsyncApiTreeNodeValueTypeMultiSchema {}

export interface AsyncApiTreeNodeValueTypeMessagePayload extends AsyncApiTreeNodeValueTypeMultiSchema {}