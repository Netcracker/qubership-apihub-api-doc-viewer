import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { isBindingsNode, isExtensionsNode, isMessageChannelParametersNode, isServersNode } from "@apihub/utils/async-api/node-type-checkers"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useMemo } from "react"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { DescriptionFontSize } from "../common/annotations/Description/types/DescriptionFontSize"
import { Aligner } from "../JsoViewer/Aligner"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { ExtensionsNodeViewer } from "./ExtensionsNodeViewer"
import { MessageChannelParametersNodeViewer } from "./MessageChannelParametersNodeViewer"
import { MessageChannelServersNodeViewer } from "./MessageChannelServersNodeViewer"
import { TextValueVariant } from "./TextValue/types"
import { TitleRow } from "./TitleRow/TitleRow"
import { TitleRowProps } from "./TitleRow/types"

type MessageChannelNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>
}

export const MessageChannelNodeViewer: FC<MessageChannelNodeViewerProps> = (props) => {
  const { node } = props

  const level = useLevelContext()
  const layoutMode = useLayoutMode()

  const value = node.value()

  const children: AsyncApiTreeNode[] = node.childrenNodes()
  const bindingsChild = children.find(isBindingsNode)
  const parametersChild = children.find(isMessageChannelParametersNode)
  const serversChild = children.find(isServersNode)
  const extensionsChild = children.find(isExtensionsNode)

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

  const diffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
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
    <div className="flex flex-col gap-2">
      <TitleRow
        value={value?.title ?? ''}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.h2}
        // diffs
        {...diffProps}
      />
      <TitleRow
        value={node.key.toString()}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.h2}
        // diffs
        {...diffProps}
      />
      <Aligner>
        <DescriptionRow
          value={value?.description ?? ''}
          fontSize={DescriptionFontSize.SECONDARY}
          layoutMode={layoutMode}
          level={level}
          // diffs
          $nodeChange={legacyNodeChange}
          $changes={legacyChanges}
        />
      </Aligner>
      <Aligner>
        <DescriptionRow
          value={value?.summary ?? ''}
          fontSize={DescriptionFontSize.SECONDARY}
          layoutMode={layoutMode}
          level={level}
          // diffs
          $nodeChange={legacyNodeChange}
          $changes={legacyChanges}
        />
      </Aligner>

      {children.length > 0 && (
        <div className="flex flex-col gap-2">
          {parametersChild && <MessageChannelParametersNodeViewer node={parametersChild} />}
          {serversChild && <MessageChannelServersNodeViewer node={serversChild} />}
          {extensionsChild && <ExtensionsNodeViewer node={extensionsChild} />}
          {bindingsChild && <BindingsNodeViewer node={bindingsChild} />}
        </div>
      )}
    </div>
  )
}
