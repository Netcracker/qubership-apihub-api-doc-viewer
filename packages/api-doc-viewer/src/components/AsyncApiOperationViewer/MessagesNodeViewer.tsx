import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC } from "react"
import { TitleRow } from "./TitleRow"

type MessagesNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGES>
  level: number
}

export const MessagesNodeViewer: FC<MessagesNodeViewerProps> = (props) => {
  const { node, level } = props

  return (
    <div>
      <TitleRow
        value='Messages'
        expandable={false}
        expanded={true}
        level={level}
        variant='h2'
      />
      <div>
        Messages content
      </div>
    </div>
  )

}