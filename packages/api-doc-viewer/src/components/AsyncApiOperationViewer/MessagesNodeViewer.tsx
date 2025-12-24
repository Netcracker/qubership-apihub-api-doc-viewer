import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useCallback, useEffect, useState } from "react"
import { TitleRow } from "./TitleRow"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { MessageSelector } from "./MessageSelector/MessageSelector"

type MessagesNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGES>
  level: number
}

export const MessagesNodeViewer: FC<MessagesNodeViewerProps> = (props) => {
  const { node, level } = props

  const [selectedMessage, setSelectedMessage] = useState<AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE> | null>(null)
  const messages: AsyncApiTreeNode[] = node.nestedNodes()
  const messagesOptions = messages.filter(isMessageNode)

  useEffect(() => {
    if (messagesOptions.length > 0 && selectedMessage === null) {
      setSelectedMessage(messagesOptions[0])
    }
  }, [messagesOptions, selectedMessage])

  const titleRowSubheader = useCallback((layoutSide: LayoutSide) => (
    <MessageSelector
      options={messagesOptions}
      selectedOption={selectedMessage}
      onSelectOption={setSelectedMessage}
    />
  ), [messagesOptions, selectedMessage])

  return (
    <div>
      <TitleRow
        value='Messages'
        expandable={false}
        expanded={true}
        level={level}
        variant='h2'
        subheader={titleRowSubheader}
      />
      <div>
        Messages content
      </div>
    </div>
  )

}

function isMessageNode(
  node: AsyncApiTreeNode,
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE> {
  return node.kind === AsyncApiTreeNodeKinds.MESSAGE
}