import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, memo, useMemo } from "react"

import './styles/MessageChannelServer.css'
import { BrokenRefViewer } from "./BrokenRefViewer"

type MessageChannelServerNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
}

export const MessageChannelServerNodeViewer: FC<MessageChannelServerNodeViewerProps> = memo(props => {
  const { node } = props

  const value = useMemo(() => node.value(), [node])
  const meta = useMemo(() => node.meta(), [node])

  const brokenRef = useMemo(() => meta?.brokenRef, [meta])

  return (
    <div className='flex flex-col gap-2 message-channel-server-node'>
      {brokenRef && <BrokenRefViewer value={brokenRef} />}
      {!brokenRef && <>
        <span className='server-element server-header'>{value?.title}</span>
        <span className='server-element server-subheader'>{value?.protocol}://{value?.host}</span>
        <span className='server-element server-description'>{value?.description}</span>
      </>}
    </div>
  )
})
