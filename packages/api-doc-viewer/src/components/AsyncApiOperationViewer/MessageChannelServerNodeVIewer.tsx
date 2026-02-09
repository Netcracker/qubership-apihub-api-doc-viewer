import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, memo, useMemo } from "react"

import './styles/MessageChannelServer.css'

type MessageChannelServerNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
}

export const MessageChannelServerNodeViewer: FC<MessageChannelServerNodeViewerProps> = memo(props => {
  const { node } = props

  const value = useMemo(() => node.value(), [node])

  return (
    <div className='flex flex-col gap-2 message-channel-server-node'>
      <span className='font-Inter-Bolder server-header'>{value?.title}</span>
      <span className='font-Inter-Medium server-subheader'>{value?.protocol}://{value?.host}</span>
      <span className='font-Inter server-description'>{value?.description}</span>
    </div>
  )
})
