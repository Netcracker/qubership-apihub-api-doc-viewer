import { SpecificationExtensionKey } from "../../specification-extension-key"
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "./node-kind"

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

interface AsyncApiTreeNodeValueWithExtensions {
  readonly extensions?: Record<SpecificationExtensionKey, unknown>
}

export interface AsyncApiTreeNodeValueTypeRoot extends AsyncApiTreeNodeValueBase {}

export interface AsyncApiTreeNodeValueTypeOperation extends AsyncApiTreeNodeValueBase, AsyncApiTreeNodeValueWithExtensions {
  readonly title: string
  readonly description: string
  readonly action: string
  readonly address: string | null
}

export interface AsyncApiTreeNodeValueTypeBinding extends AsyncApiTreeNodeValueWithExtensions {
  readonly binding: Record<string, unknown>
  readonly version: string
  readonly protocol: string
}

export interface AsyncApiTreeNodeValueTypeChannel extends AsyncApiTreeNodeValueBase, AsyncApiTreeNodeValueWithExtensions {}

export interface AsyncApiTreeNodeValueTypeMessage extends AsyncApiTreeNodeValueBase, AsyncApiTreeNodeValueWithExtensions {
  readonly internalTitle: string
}

interface AsyncApiTreeNodeValueTypeMultiSchema extends AsyncApiTreeNodeValueBase {
  readonly schema: object
  readonly schemaFormat?: string
}

export interface AsyncApiTreeNodeValueTypeMessageHeaders extends AsyncApiTreeNodeValueTypeMultiSchema {}

export interface AsyncApiTreeNodeValueTypeMessagePayload extends AsyncApiTreeNodeValueTypeMultiSchema {}