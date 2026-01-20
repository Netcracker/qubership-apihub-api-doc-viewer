import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useMemo } from "react"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { Aligner } from "../JsoViewer/Aligner"
import { SpecificationExtensions } from "./SpecificationExtensions"
import { TitleRow } from "./TitleRow"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { isBindingsNode } from "@apihub/utils/async-api/node-type-checkers"

type ChannelNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.CHANNEL>
}

export const ChannelNodeViewer: FC<ChannelNodeViewerProps> = (props) => {
  const { node } = props

  const level = useLevelContext()
  const layoutMode = useLayoutMode()

  const value = node.value()

  const sectionTitle = useMemo(
    // TODO: api-unifier does NOT resolves synthetic title?
    () => `Channel ${value?.title ?? node.key.toString() ?? ''}`.trim(),
    [value, node],
  )

  const channelChildren = node.childrenNodes()

  const description = value?.description ?? value?.summary ?? ''

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value={sectionTitle}
        expandable={false}
        expanded={true}
        variant='h2'
      />
      {description && (
        <Aligner>
          <DescriptionRow
            value={description}
            // fontSize='base'
            layoutMode={layoutMode}
            level={level}
          />
        </Aligner>
      )}
      <ChannelChildrenViewer children={channelChildren} />
      {value?.extensions && (
        <SpecificationExtensions
          values={value.extensions}
          kind={AsyncApiTreeNodeKinds.CHANNEL}
        />
      )}
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
          return <BindingsNodeViewer key={child.key} node={child} relatedTo={AsyncApiTreeNodeKinds.CHANNEL} />
        }
      })}
    </div>
  )
}
