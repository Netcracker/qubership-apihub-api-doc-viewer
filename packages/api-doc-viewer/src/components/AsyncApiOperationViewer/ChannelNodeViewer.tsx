import { ITreeNode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { AsyncApiNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-meta"
import { AsyncApiTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
import { FC, useCallback, useState } from "react"
import { TitleRow } from "./TitleRow"

type ChannelNodeViewerProps = {
  node: ITreeNode<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.CHANNEL> | null, typeof AsyncApiTreeNodeKinds.CHANNEL, AsyncApiNodeMeta>
  level: number
}

export const ChannelNodeViewer: FC<ChannelNodeViewerProps> = (props) => {
  const { node, level } = props

  const [expanded, setExpanded] = useState(true)
  const onClickExpander = useCallback(() => {
    setExpanded(prev => !prev)
  }, [])

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value='Channel'
        expandable={false}
        expanded={expanded}
        onClickExpander={onClickExpander}
        level={level}
        variant='h2'
      />
      {expanded && (
        <div>
          Channel content
        </div>
      )}
    </div>
  )
}
