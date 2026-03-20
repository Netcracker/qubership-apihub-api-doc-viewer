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
import { ServerAddressRow } from "./ServerAddressRow"

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

  const children: AsyncApiTreeNode[] | AsyncApiTreeNodeWithDiffs[] = node.childrenNodes()
  const bindingsChild = children.find(isBindingsNode)

  const legacyChanges = useMemo(() => {
    if (node instanceof SimpleTreeNodeWithDiffs) {
      const diffDescription = node.diffs['description']?.data
      const diffSummary = node.diffs['summary']?.data
      if (!diffDescription && !diffSummary) {
        return undefined
      }
      return {
        ...diffDescription ? { description: diffDescription } : {},
        ...diffSummary ? { summary: diffSummary } : {},
      }
    }
    return undefined
  }, [node])

  const legacyNodeChange = useMemo(() => {
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
        {/* TODO: Provide changes to parts of ServerAddressRow */}
        <ServerAddressRow 
          renderProtocol={() => <>{value.protocol}</>}
          renderHost={() => <>{value.host}</>}
        />
        {/* ---------------------------------- */}
        <Aligner>
          <DescriptionRow
            value={value?.description ?? ''}
            fontSize={DescriptionFontSize.TERTIARY}
            // diffs
            $nodeChange={legacyNodeChange}
            $changes={legacyChanges}
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
