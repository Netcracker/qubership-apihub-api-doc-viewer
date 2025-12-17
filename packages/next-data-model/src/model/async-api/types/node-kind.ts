export const AsyncApiTreeNodeKinds = {
  ROOT: 'root',
  OPERATION: 'operation',
  BINDINGS: 'bindings',
  BINDING: 'binding',
  JSO_PROPERTY: 'jsoProperty',
  CHANNEL: 'channel',
  MESSAGES: 'messages',
  MESSAGE: 'message',
} as const

export const AsyncApiTreeNodeKindsList: AsyncApiTreeNodeKind[] = Object.values(AsyncApiTreeNodeKinds)

export type AsyncApiTreeNodeKind = typeof AsyncApiTreeNodeKinds[keyof typeof AsyncApiTreeNodeKinds]
