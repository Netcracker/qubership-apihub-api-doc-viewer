import { isBindingsNode, isHeadersNode, isPayloadNode } from "@apihub/utils/async-api/node-type-checkers"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC } from "react"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { JsoPropertyNodeViewer } from "./JsoPropertyNodeViewer"

type MessageNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>
}

export const MessageNodeViewer: FC<MessageNodeViewerProps> = (props) => {
  const { node } = props

  const messageValue = node.value()
  const messageDescription = messageValue?.description ?? ''

  const messageChildren: AsyncApiTreeNode[] = node.childrenNodes()
  const bindingsChild = messageChildren.find(isBindingsNode)
  const headersChild = messageChildren.find(isHeadersNode)
  const payloadChild = messageChildren.find(isPayloadNode)

  return (
    <div className="flex flex-col gap-3">
      {messageDescription && (
        <DescriptionRow
          value={messageDescription}
          level={1}
        />
      )}
      {bindingsChild && (
        <BindingsNodeViewer
          node={bindingsChild}
          relatedTo={AsyncApiTreeNodeKinds.MESSAGE}
          level={1}
        />
      )}
      {headersChild && (
        <JsoPropertyNodeViewer
          node={headersChild}
          expandable={true}
          level={1}
        />
      )}
      {payloadChild && (
        <JsoPropertyNodeViewer
          node={payloadChild}
          expandable={true}
          level={1}
        />
      )}
    </div>
  )
}
