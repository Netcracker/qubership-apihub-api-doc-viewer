import { isBindingsNode, isExtensionsNode } from "@apihub/utils/async-api/node-type-checkers"
import { shouldBeDisplayed } from "@apihub/utils/async-api/visibility-checkers"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { AsyncApiTreeNodeValueTypeMessageOperation } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
import { FC, useMemo } from "react"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { ExtensionsNodeViewer } from "./ExtensionsNodeViewer"
import { TextRow } from "./TextRow/TextRow"
import { TextRowProps } from "./TextRow/types"
import { TextValueVariant } from "./TextValue/types"
import { TitleRow } from "./TitleRow/TitleRow"
import { TitleRowProps } from "./TitleRow/types"

type MessageOperationNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>
}

export const MessageOperationNodeViewer: FC<MessageOperationNodeViewerProps> = (props) => {
  const { node } = props

  const value = node.value()

  const children: AsyncApiTreeNode[] = node.childrenNodes()
  const bindingsChild = children.find(isBindingsNode)
  const extensionsChild = children.find(isExtensionsNode)

  const nodeDiffs = useMemo(() => node instanceof SimpleTreeNodeWithDiffs ? node.diffs : undefined, [node])
  const nodeDescendantDiffs = useMemo(() => node instanceof SimpleTreeNodeWithDiffs ? node.descendantDiffs : undefined, [node])
  const nodeDiffsSeverities = useMemo(() => node instanceof SimpleTreeNodeWithDiffs ? node.diffsSeverities : undefined, [node])

  const titleRowDiffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['title'], // TODO: Check if this is correct
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

  const isTitleDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessageOperation>(value, nodeDiffs, 'title'), [value, nodeDiffs])
  const isDescriptionDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessageOperation>(value, nodeDiffs, 'description'), [value, nodeDiffs])
  const isSummaryDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessageOperation>(value, nodeDiffs, 'summary'), [value, nodeDiffs])

  return (
    <div className="flex flex-col gap-2">
      {isTitleDisplayed && (
        <TitleRow
          value={value?.title ?? ''}
          variant={TextValueVariant.h2}
          expandable={false}
          expanded={true}
          // diffs
          {...titleRowDiffsProps}
        />
      )}
      {!isTitleDisplayed && (
        <TitleRow
          value={node.key.toString()}
          variant={TextValueVariant.h2}
          expandable={false}
          expanded={true}
          // diffs
          {...titleRowDiffsProps}
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
          {extensionsChild && <ExtensionsNodeViewer node={extensionsChild} />}
          {bindingsChild && <BindingsNodeViewer node={bindingsChild} />}
        </div>
      )}
    </div>
  )
}
