import { ITreeNode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { AsyncApiNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-meta"
import { AsyncApiTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
import { FC, useCallback, useState } from "react"
import { TitleRow } from "./TitleRow"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"

type ChannelNodeViewerProps = {
  node: ITreeNode<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.CHANNEL> | null, typeof AsyncApiTreeNodeKinds.CHANNEL, AsyncApiNodeMeta>
  level: number
}

export const ChannelNodeViewer: FC<ChannelNodeViewerProps> = (props) => {
  const { node, level } = props
  
  const layoutMode = useLayoutMode()

  const value = node.value()

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value='Channel'
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
