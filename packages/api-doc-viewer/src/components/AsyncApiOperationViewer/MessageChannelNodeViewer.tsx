import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { isBindingsNode, isExtensionsNode, isMessageChannelParametersNode } from "@apihub/utils/async-api/node-type-checkers"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC } from "react"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { Aligner } from "../JsoViewer/Aligner"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { TitleRow } from "./TitleRow"
import { ExtensionsNodeViewer } from "./ExtensionsNodeViewer"

type MessageChannelNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>
}

export const MessageChannelNodeViewer: FC<MessageChannelNodeViewerProps> = (props) => {
  const { node } = props

  const level = useLevelContext()
  const layoutMode = useLayoutMode()

  const value = node.value()
  const title = value?.title ?? node.key.toString() ?? ''
  const description = value?.description ?? value?.summary ?? ''

  const children: AsyncApiTreeNode[] = node.childrenNodes()
  const bindingsChild = children.find(isBindingsNode)
  const parametersChild = children.find(isMessageChannelParametersNode)
  const extensionsChild = children.find(isExtensionsNode)

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
              {title}
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

      {children.length > 0 && (
        <div className="flex flex-col gap-5">
          {parametersChild && (
            <h3>Parameters Node Viewer TBA</h3>
          )}
          {extensionsChild && <ExtensionsNodeViewer node={extensionsChild} />}
          {bindingsChild && <BindingsNodeViewer node={bindingsChild} />}
        </div>
      )}
    </div>
  )
}
