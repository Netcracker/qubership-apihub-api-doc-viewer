import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useMemo } from "react"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { TitleRow } from "./TitleRow"

type ChannelNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.CHANNEL>
}

export const ChannelNodeViewer: FC<ChannelNodeViewerProps> = (props) => {
  const { node } = props

  const level = useLevelContext()
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
        variant='h2'
      />
      <DescriptionRow
        value={value?.description ?? ''}
        // fontSize='base'
        layoutMode={layoutMode}
        level={level}
      />
    </div>
  )
}
