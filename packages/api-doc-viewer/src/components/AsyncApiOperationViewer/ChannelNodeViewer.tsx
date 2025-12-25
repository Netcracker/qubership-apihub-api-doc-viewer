import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useMemo } from "react"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { TitleRow } from "./TitleRow"

type ChannelNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.CHANNEL>
  level: number
}

export const ChannelNodeViewer: FC<ChannelNodeViewerProps> = (props) => {
  const { node, level } = props
  
  const layoutMode = useLayoutMode()

  const value = node.value()

  const sectionTitle = useMemo(
    () => `Channel ${value?.title ?? node.key.toString() ?? ''}`.trim(), 
    [value, node],
  )

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value={sectionTitle}
        expandable={false}
        expanded={true}
        level={level}
        variant='h2'
      />
      <DescriptionRow
        value={value?.description ?? ''}
        fontSize='base'
        disablePaddingLeft={true}
        level={level}
        layoutMode={layoutMode}
      />
    </div>
  )
}
