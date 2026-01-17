export const AsyncApiTreeNodeKinds = {
  ROOT: 'root',
  OPERATION: 'operation',
  BINDINGS: 'bindings',
  BINDING: 'binding',
  CHANNEL: 'channel',
  MESSAGES: 'messages',
  MESSAGE: 'message',
  MESSAGE_HEADERS: 'messageHeaders',
  MESSAGE_PAYLOAD: 'messagePayload',
} as const

export const AsyncApiTreeNodeKindsList: AsyncApiTreeNodeKind[] = Object.values(AsyncApiTreeNodeKinds)

export type AsyncApiTreeNodeKind = typeof AsyncApiTreeNodeKinds[keyof typeof AsyncApiTreeNodeKinds]
