import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { isBindingsNode } from "@apihub/utils/async-api/node-type-checkers"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC } from "react"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { Aligner } from "../JsoViewer/Aligner"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { TitleRow } from "./TitleRow"

type MessageChannelNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>
}

export const MessageChannelNodeViewer: FC<MessageChannelNodeViewerProps> = (props) => {
  const { node } = props

  const level = useLevelContext()
  const layoutMode = useLayoutMode()

  const value = node.value()

  const channelTitle = value?.title ?? node.key.toString() ?? ''

  const channelChildren = node.childrenNodes()

  const description = value?.description ?? value?.summary ?? ''

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value='Channel'
        expandable={false}
        expanded={true}
        variant='h2'
        subheader={() => {
          return (
            <button className='button-selector-option button-selector-option_primary button-selector-option_disabled selected'>
              {channelTitle}
            </button>
          )
        }}
      />
      {description && (
        <Aligner>
          <DescriptionRow
            value={description}
            fontSize='secondary'
            layoutMode={layoutMode}
            level={level}
          />
        </Aligner>
      )}
      <ChannelChildrenViewer children={channelChildren} />
    </div>
  )
}

type ChannelChildrenViewerProps = {
  children: AsyncApiTreeNode[]
}

const ChannelChildrenViewer: FC<ChannelChildrenViewerProps> = (props) => {
  const { children } = props

  if (children.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col gap-5">
      {children.map(child => {
        if (isBindingsNode(child)) {
          return <BindingsNodeViewer key={child.key} node={child} />
        }
        // TODO: Add parameters viewer
        // TODO: Add extensions viewer
        return null
      })}
    </div>
  )
}
