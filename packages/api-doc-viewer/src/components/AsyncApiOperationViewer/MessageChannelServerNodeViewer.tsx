import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, memo, useMemo } from "react"

import { isBindingsNode } from "@apihub/utils/async-api/node-type-checkers"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { DescriptionFontSize } from "../common/annotations/Description/types/DescriptionFontSize"
import { Aligner } from "../JsoViewer/Aligner"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { BrokenRefViewer } from "./BrokenRefViewer"
import './styles/MessageChannelServer.css'
import { TextValueVariant } from "./TextValue/types"
import { TitleRow } from "./TitleRow/TitleRow"
import { SizeVariant } from "./types/SizeVariant"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { TitleRowProps } from "./TitleRow/types"

type MessageChannelServerNodeViewerProps = {
  node:
  | AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
  | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVER>
}

export const MessageChannelServerNodeViewer: FC<MessageChannelServerNodeViewerProps> = memo(props => {
  const { node } = props

  const value = useMemo(() => node.value(), [node])
  const meta = useMemo(() => node.meta(), [node])

  const brokenRef = useMemo(() => meta?.brokenRef, [meta])

  const description = useMemo(() => value?.description ?? value?.summary ?? '', [value])

  const children: AsyncApiTreeNode[] | AsyncApiTreeNodeWithDiffs[] = node.childrenNodes()
  const bindingsChild = children.find(isBindingsNode)

  const legacyChangesForDescription = useMemo(() => {
    if (node instanceof SimpleTreeNodeWithDiffs) {
      const diff = node.diffs['description']?.data
      return diff ? { description: diff } : undefined
    }
    return undefined
  }, [node])

  const legacyNodeChangeForDescription = useMemo(() => {
    if (node instanceof SimpleTreeNodeWithDiffs) {
      const diff = node.diffs['']?.data
      return diff ? { depth: 0, ...diff } : undefined
    }
    return undefined
  }, [node])

  const diffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (node instanceof SimpleTreeNodeWithDiffs) {
      return {
        diff: node.diffs[''],
        descendantDiffs: node.descendantDiffs,
        diffsSeverities: node.diffsSeverities,
      }
    }
    return {}
  }, [node])

  return (
    <div className='flex flex-col gap-2 message-channel-server-node'>
      {brokenRef && <BrokenRefViewer value={brokenRef} />}
      {!brokenRef && value && <>
        {value.title && (
          <TitleRow
            value={value.title}
            expandable={false}
            expanded={true}
            variant={TextValueVariant.h4}
            // diffs
            {...diffsProps}
          />
        )}
        <span className='server-element server-subheader'>
          {value.protocol}://{value.host}
        </span>
        <Aligner>
          <DescriptionRow
            value={description}
            fontSize={DescriptionFontSize.TERTIARY}
            // diffs
            $nodeChange={legacyNodeChangeForDescription}
            $changes={legacyChangesForDescription}
          />
        </Aligner>
      </>}
      {!brokenRef && children.length > 0 && bindingsChild && (
        <div className="flex flex-col gap-2">
          <BindingsNodeViewer
            node={bindingsChild}
            variant={SizeVariant.SECONDARY}
          />
        </div>
      )}
    </div>
  )
})
