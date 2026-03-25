import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { isBindingsNode, isExtensionsNode, isMessageChannelParametersNode, isServersNode } from "@apihub/utils/async-api/node-type-checkers"
import { isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { NodeDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { AsyncApiTreeNodeValueTypeMessageChannel } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
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

  const nodeDiffs = useMemo(() => node instanceof SimpleTreeNodeWithDiffs ? node.diffs : undefined, [node])
  const nodeDescendantDiffs = useMemo(() => node instanceof SimpleTreeNodeWithDiffs ? node.descendantDiffs : undefined, [node])
  const nodeDiffsSeverities = useMemo(() => node instanceof SimpleTreeNodeWithDiffs ? node.diffsSeverities : undefined, [node])

  const legacyChanges = useMemo(() => {
    if (nodeDiffs) {
      const diffDescription = nodeDiffs['description']?.data
      const diffSummary = nodeDiffs['summary']?.data
      if (!diffDescription && !diffSummary) {
        return undefined
      }
      return {
        ...diffDescription ? { description: diffDescription } : {},
        ...diffSummary ? { summary: diffSummary } : {},
      }
    }
    return undefined
  }, [nodeDiffs])

  const legacyNodeChange = useMemo(() => {
    if (nodeDiffs) {
      const diff = nodeDiffs['']?.data
      return diff ? { depth: 0, ...diff } : undefined
    }
    return undefined
  }, [nodeDiffs])

  const diffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''],
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
      }
    }
    return {}
  }, [nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities])

  return (
    <div className="flex flex-col gap-2">
      {shouldBeDisplayed(value, nodeDiffs) && (
        <TitleRow
          value={value?.title ?? ''}
          expandable={false}
          expanded={true}
          variant={TextValueVariant.h2}
          // diffs
          {...diffProps}
        />
      )}
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

function shouldBeDisplayed(
  value: AsyncApiTreeNodeValueTypeMessageChannel | null,
  diffs: NodeDiffs<AsyncApiTreeNodeValueTypeMessageChannel> | undefined
) {
  if (!diffs) {
    return value?.title !== undefined
  }
  const diffTitle = diffs['title']?.data
  if (!diffTitle) {
    return value?.title !== undefined
  }
  if (isDiffRemove(diffTitle) || isDiffReplace(diffTitle)) {
    return diffTitle.beforeValue !== undefined
  }
  if (isDiffAdd(diffTitle) || isDiffReplace(diffTitle)) {
    return diffTitle.afterValue !== undefined
  }
  if (isDiffRename(diffTitle)) {
    return diffTitle.beforeKey !== undefined && diffTitle.afterKey !== undefined
  }
  return false
}
