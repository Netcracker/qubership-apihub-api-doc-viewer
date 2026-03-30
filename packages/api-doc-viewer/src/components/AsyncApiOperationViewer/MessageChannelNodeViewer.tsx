import { isBindingsNode, isExtensionsNode, isMessageChannelParametersNode, isServersNode } from "@apihub/utils/async-api/node-type-checkers"
import { shouldBeDisplayed } from "@apihub/utils/async-api/visibility-checkers"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { AsyncApiTreeNodeValueTypeMessageChannel } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
import { FC, useMemo } from "react"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { ExtensionsNodeViewer } from "./ExtensionsNodeViewer"
import { MessageChannelParametersNodeViewer } from "./MessageChannelParametersNodeViewer"
import { MessageChannelServersNodeViewer } from "./MessageChannelServersNodeViewer"
import { TextRow } from "./TextRow/TextRow"
import { TextRowProps } from "./TextRow/types"
import { TextValueVariant } from "./TextValue/types"
import { TitleRow } from "./TitleRow/TitleRow"
import { TitleRowProps } from "./TitleRow/types"

type MessageChannelNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>
}

export const MessageChannelNodeViewer: FC<MessageChannelNodeViewerProps> = (props) => {
  const { node } = props

  const value = node.value()

  const children: AsyncApiTreeNode[] = node.childrenNodes()
  const bindingsChild = children.find(isBindingsNode)
  const parametersChild = children.find(isMessageChannelParametersNode)
  const serversChild = children.find(isServersNode)
  const extensionsChild = children.find(isExtensionsNode)

  const nodeDiffs = useMemo(() => node instanceof SimpleTreeNodeWithDiffs ? node.diffs : undefined, [node])
  const nodeDescendantDiffs = useMemo(() => node instanceof SimpleTreeNodeWithDiffs ? node.descendantDiffs : undefined, [node])
  const nodeDiffsSeverities = useMemo(() => node instanceof SimpleTreeNodeWithDiffs ? node.diffsSeverities : undefined, [node])

  const titleRowDiffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['title'],
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
      }
    }
    return {}
  }, [nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities])

  const descriptionRowDiffProps: Pick<TextRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['description'],
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
        diffsSeverityPlacement: NodeDiffsSeverityPlacemennt.DescriptionRow,
      }
    }
    return {}
  }, [nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities])

  const summaryRowDiffProps: Pick<TextRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['summary'],
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
        diffsSeverityPlacement: NodeDiffsSeverityPlacemennt.SummaryRow,
      }
    }
    return {}
  }, [nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities])

  const isTitleDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessageChannel>(value, nodeDiffs, 'title'), [value, nodeDiffs])
  const isDescriptionDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessageChannel>(value, nodeDiffs, 'description'), [value, nodeDiffs])
  const isSummaryDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessageChannel>(value, nodeDiffs, 'summary'), [value, nodeDiffs])

  return (
    <div className="flex flex-col gap-2">
      {isTitleDisplayed && (
        <TitleRow
          value={value?.title ?? ''}
          expandable={false}
          expanded={true}
          variant={TextValueVariant.h2}
          // diffs
          {...titleRowDiffProps}
        />
      )}
      {!isTitleDisplayed && (
        <TitleRow
          value={node.key.toString()}
          expandable={false}
          expanded={true}
          variant={TextValueVariant.h2}
          // diffs
          {...titleRowDiffProps}
        />
      )}
      {isDescriptionDisplayed && (
        <TextRow
          value={value?.description ?? ''}
          variant={TextValueVariant.body}
          // diffs
          {...descriptionRowDiffProps}
        />

      )}
      {isSummaryDisplayed && (
        <TextRow
          value={value?.summary ?? ''}
          variant={TextValueVariant.body}
          // diffs
          {...summaryRowDiffProps}
        />
      )}

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
