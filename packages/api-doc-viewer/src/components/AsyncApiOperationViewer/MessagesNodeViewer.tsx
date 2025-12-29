import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { isMessageNode } from "@apihub/utils/async-api/node-type-checkers"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useCallback, useEffect, useState } from "react"
import { MessageNodeViewer } from "./MessageNodeViewer"
import { MessageSelector } from "./MessageSelector/MessageSelector"
import { TitleRow } from "./TitleRow"

type MessagesNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGES>
}

export const MessagesNodeViewer: FC<MessagesNodeViewerProps> = (props) => {
  const { node } = props

  const [selectedMessage, setSelectedMessage] = useState<AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE> | null>(null)
  const messages: AsyncApiTreeNode[] = node.nestedNodes()
  const messagesOptions = messages.filter(isMessageNode)

  useEffect(() => {
    if (messagesOptions.length > 0 && selectedMessage === null) {
      setSelectedMessage(messagesOptions[0])
    }
  }, [messagesOptions, selectedMessage])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        variant='h2'
        subheader={titleRowSubheader}
      />
      {selectedMessage && (
        <MessageNodeViewer
          node={selectedMessage}
        />
      )}
    </div>
  )
}
