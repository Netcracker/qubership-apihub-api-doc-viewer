import { useLayoutMode } from "@apihub/contexts/LayoutModeContext";
import { sortNodesByDisplayPriority } from "@apihub/utils/async-api/node-sorting-by-display-priority";
import { isBindingsNode, isChannelNode, isMessagesNode } from "@apihub/utils/async-api/node-type-checkers";
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { FC, useMemo } from "react";
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow";
import { AddressRow } from "./AddressRow";
import { BindingsNodeViewer } from "./BindingsNodeViewer";
import { ChannelNodeViewer } from "./ChannelNodeViewer";
import { MessagesNodeViewer } from "./MessagesNodeViewer";
import { TitleRow } from "./TitleRow";

type OperationNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.OPERATION>
}

export const OperationNodeViewer: FC<OperationNodeViewerProps> = (props) => {
  const { node } = props

  const layoutMode = useLayoutMode()

  const value = node.value()
  const operationChildren = useMemo(() => (
    sortNodesByDisplayPriority(
      AsyncApiTreeNodeKinds.OPERATION, 
      node.childrenNodes(),
    )
  ), [node])

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value={value?.title ?? node.key.toString() ?? 'No title'}
        expandable={false}
        level={0}
        variant='h1'
      />
      <AddressRow
        action={value?.action ?? ''}
        address={value?.address ?? ''}
      />
      <DescriptionRow
        value={value?.description ?? ''}
        fontSize='base'
        disablePaddingLeft={true}
        level={0}
        layoutMode={layoutMode}
      />
      <OperationChildrenViewer
        children={operationChildren}
      />
    </div>
  )
}

type OperationChildrenViewerProps = {
  children: AsyncApiTreeNode[]
}

const OperationChildrenViewer: FC<OperationChildrenViewerProps> = (props) => {
  const { children } = props

  return (
    <div className="flex flex-col gap-1">
      {children.map(child => {
        if (isBindingsNode(child)) {
          return <BindingsNodeViewer key={child.key} node={child} relatedTo={AsyncApiTreeNodeKinds.OPERATION} level={0} />
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
