import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC } from "react"
import { TitleRow } from "./TitleRow"

type MessageOperationNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>
}

export const MessageOperationNodeViewer: FC<MessageOperationNodeViewerProps> = (props) => {
  const { node } = props

  return (
    <div className="flex flex-col gap-2">
      <TitleRow
        value={node.key.toString()}
        variant="h3"
        expandable={false}
        expanded={true}
      />
    </div>
  )
}
