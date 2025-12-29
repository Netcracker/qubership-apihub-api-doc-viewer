import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";

export function isOperationNode(
  node: AsyncApiTreeNode
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.OPERATION> {
  return node.kind === AsyncApiTreeNodeKinds.OPERATION;
}

export function isChannelNode(
  node: AsyncApiTreeNode
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.CHANNEL> {
  return node.kind === AsyncApiTreeNodeKinds.CHANNEL;
}

export function isMessagesNode(
  node: AsyncApiTreeNode
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGES> {
  return node.kind === AsyncApiTreeNodeKinds.MESSAGES;
}

export function isMessageNode(
  node: AsyncApiTreeNode
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE> {
  return node.kind === AsyncApiTreeNodeKinds.MESSAGE;
}

export function isHeadersNode(
  node: AsyncApiTreeNode
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY> {
  return node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY && node.key === 'headers';
}

export function isPayloadNode(
  node: AsyncApiTreeNode
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY> {
  return node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY && node.key === 'payload';
}

export function isBindingsNode(
  node: AsyncApiTreeNode
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> {
  return node.kind === AsyncApiTreeNodeKinds.BINDINGS;
}

export function isBindingNode(
  node: AsyncApiTreeNode
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING> {
  return node.kind === AsyncApiTreeNodeKinds.BINDING;
}

export function isJsoPropertyNode(
  node: AsyncApiTreeNode
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY> {
  return node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY;
}
