import { isBindingsNode, isExtensionsNode } from "@apihub/utils/async-api/node-type-checkers"
import { shouldBeDisplayed } from "@apihub/utils/async-api/visibility-checkers"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { AsyncApiTreeNodeValueTypeMessageOperation } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
import { FC, useMemo } from "react"
import { TextRow } from "../shared-components/TextRow/TextRow"
import { TextRowProps } from "../shared-components/TextRow/types"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { TitleRowProps } from "../shared-components/TitleRow/types"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { ExtensionsNodeViewer } from "./ExtensionsNodeViewer"

type MessageOperationNodeViewerProps = WithPrecededByProps & {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>
}

export const MessageOperationNodeViewer: FC<MessageOperationNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const value = node.value()

  const children: AsyncApiTreeNode[] = node.childrenNodes()
  const bindingsChild = children.find(isBindingsNode)
  const extensionsChild = children.find(isExtensionsNode)

  const nodeDiffs = useMemo(() => isMessageOperationNodeWithDiffs(node) ? node.diffs : undefined, [node])
  const nodeDescendantDiffs = useMemo(() => isMessageOperationNodeWithDiffs(node) ? node.descendantDiffs : undefined, [node])
  const nodeDiffsSeverities = useMemo(() => isMessageOperationNodeWithDiffs(node) ? node.diffsSeverities : undefined, [node])

  const titleRowDiffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
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

  const isTitleDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessageOperation>(value, nodeDiffs, 'title'), [value, nodeDiffs])
  const isDescriptionDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessageOperation>(value, nodeDiffs, 'description'), [value, nodeDiffs])
  const isSummaryDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessageOperation>(value, nodeDiffs, 'summary'), [value, nodeDiffs])

  return (
    <div className="flex flex-col">
      {isTitleDisplayed && (
        <TitleRow
          data-precededby={precededBy}
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
          data-precededby={precededBy}
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
          data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
          value={value?.description ?? ''}
          variant={TextValueVariant.body}
          // diffs
          {...descriptionRowDiffProps}
        />
      )}
      {isSummaryDisplayed && (
        <TextRow
          data-precededby={
            isDescriptionDisplayed
              ? PrecededBy.DESCRIPTION_ROW
              : PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL
          }
          value={value?.summary ?? ''}
          variant={TextValueVariant.body}
          // diffs
          {...summaryRowDiffProps}
        />
      )}

      {children.length > 0 && (
        <div className="flex flex-col">
          {extensionsChild && (
            <ExtensionsNodeViewer
              data-precededby={
                isSummaryDisplayed
                  ? PrecededBy.SUMMARY_ROW
                  : isDescriptionDisplayed
                    ? PrecededBy.DESCRIPTION_ROW
                    : PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL
              }
              node={extensionsChild}
            />
          )}
          {bindingsChild && (
            <BindingsNodeViewer
              data-precededby={
                extensionsChild
                  ? PrecededBy.JSO_VIEWER
                  : isSummaryDisplayed
                    ? PrecededBy.SUMMARY_ROW
                    : isDescriptionDisplayed
                      ? PrecededBy.DESCRIPTION_ROW
                      : PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL
              }
              node={bindingsChild}
            />
          )}
        </div>
      )}
    </div>
  )
}

function isMessageOperationNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION> {
  return node.kind == AsyncApiTreeNodeKinds.MESSAGE_OPERATION && node instanceof SimpleTreeNodeWithDiffs
}
