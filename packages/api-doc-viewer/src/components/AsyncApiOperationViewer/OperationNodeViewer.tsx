import { ITreeNode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value";
import { FC } from "react";
import { BindingsNodeViewer } from "./BindingsNodeViewer";
import { ChannelNodeViewer } from "./ChannelNodeViewer";
import { TitleRow } from "./TitleRow";
import { MessagesNodeViewer } from "./MessagesNodeViewer";
import { AddressRow } from "./AddressRow";

type OperationNodeViewerProps = {
  node: ITreeNode<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.OPERATION> | null, typeof AsyncApiTreeNodeKinds.OPERATION, AsyncApiNodeMeta>
}

export const OperationNodeViewer: FC<OperationNodeViewerProps> = (props) => {
  const { node } = props

  const value = node.value()
  const operationChildren = node.childrenNodes()

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value='Operation Title'
        expandable={false}
        level={0}
        variant='h1'
      />
      <AddressRow
        action={value?.action ?? ''}
        address={value?.address ?? ''}
      />
      <OperationChildrenViewer
        children={operationChildren}
      />
    </div>
  )
}

type OperationChildrenViewerProps = {
  children: ITreeNode<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiNodeMeta>[]
}

const OperationChildrenViewer: FC<OperationChildrenViewerProps> = (props) => {
  const { children } = props

  return (
    <div className="flex flex-col gap-1">
      {children.map(child => {
        if (isBindingsNode(child)) {
          return <BindingsNodeViewer key={child.key} node={child} level={0} />
        }
        if (isChannelNode(child)) {
          return <ChannelNodeViewer key={child.key} node={child} level={0} />
        }
        if (isMessagesNode(child)) {
          return <MessagesNodeViewer key={child.key} node={child} level={0} />
        }
        return null
      })}
    </div>
  )
}

function isBindingsNode(
  node: ITreeNode<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiNodeMeta>
): node is ITreeNode<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDINGS> | null, typeof AsyncApiTreeNodeKinds.BINDINGS, AsyncApiNodeMeta> {
  return node.kind === AsyncApiTreeNodeKinds.BINDINGS
}

function isChannelNode(
  node: ITreeNode<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiNodeMeta>
): node is ITreeNode<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.CHANNEL> | null, typeof AsyncApiTreeNodeKinds.CHANNEL, AsyncApiNodeMeta> {
  return node.kind === AsyncApiTreeNodeKinds.CHANNEL
}

function isMessagesNode(
  node: ITreeNode<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiNodeMeta>
): node is ITreeNode<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGES> | null, typeof AsyncApiTreeNodeKinds.MESSAGES, AsyncApiNodeMeta> {
  return node.kind === AsyncApiTreeNodeKinds.MESSAGES
}
