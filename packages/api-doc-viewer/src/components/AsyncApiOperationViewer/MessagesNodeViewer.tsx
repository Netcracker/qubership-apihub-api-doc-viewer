import { ITreeNode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { AsyncApiTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
import { FC, useState, useCallback } from "react"
import { TitleRow } from "./TitleRow"

type MessagesNodeViewerProps = {
  node: ITreeNode<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGES> | null, typeof AsyncApiTreeNodeKinds.MESSAGES, AsyncApiNodeMeta>
  level: number
}

export const MessagesNodeViewer: FC<MessagesNodeViewerProps> = (props) => {
  const { node, level } = props

  const [expanded, setExpanded] = useState(true)
  const onClickExpander = useCallback(() => {
    setExpanded(prev => !prev)
  }, [])

  return (
    <div>
      <TitleRow
        value='Messages'
        expandable={false}
        expanded={expanded}
        onClickExpander={onClickExpander}
        level={level}
        variant='h2'
      />
      {expanded && (
        <div>
          Messages content
        </div>
      )}
    </div>
  )

}