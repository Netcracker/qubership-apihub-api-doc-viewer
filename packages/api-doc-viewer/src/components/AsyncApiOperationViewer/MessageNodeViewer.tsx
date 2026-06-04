import { isMessageSectionSelectorNode } from "@apihub/utils/async-api/node-type-checkers";
import { shouldBeDisplayed } from "@apihub/utils/async-api/visibility-checkers";
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl";
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeValueTypeMessage } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value";
import { FC, useMemo } from "react";
import { TextRow } from "../shared-components/TextRow/TextRow";
import { TextRowProps } from "../shared-components/TextRow/types";
import { TextValueVariant } from "../shared-components/TextValue/types";
import { TitleRow } from "../shared-components/TitleRow/TitleRow";
import { TitleRowProps } from "../shared-components/TitleRow/types";
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps";
import { AddressRow, AddressRowProps } from "./AddressRow/AddressRow";
import { MessageSectionsViewer } from "./MessageSectionsViewer";

type MessageNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>
}

export const MessageNodeViewer: FC<MessageNodeViewerProps> = (props) => {
  const { node } = props

  const value = node.value()
  const children = useMemo(() => node.childrenNodes(), [node])

  const nodeDiffs = useMemo(() => isMessageNodeWithDiffs(node) ? node.diffs : undefined, [node])
  const nodeDescendantDiffs = useMemo(() => isMessageNodeWithDiffs(node) ? node.descendantDiffs : undefined, [node])
  const nodeDiffsSeverities = useMemo(() => isMessageNodeWithDiffs(node) ? node.diffsSeverities : undefined, [node])

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

  const addressRowDiffsProps: Pick<AddressRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['address'], // TODO: Check if this is correct
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
      }
    }
    return {}
  }, [nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities])

  const descriptionRowDiffsProps: Pick<TextRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['description'], // TODO: Check if this is correct
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
        diffsSeverityPlacement: NodeDiffsSeverityPlacemennt.DescriptionRow,
      }
    }
    return {}
  }, [nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities])

  const summaryRowDiffsProps: Pick<TextRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['summary'], // TODO: Check if this is correct
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
        diffsSeverityPlacement: NodeDiffsSeverityPlacemennt.SummaryRow,
      }
    }
    return {}
  }, [nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities])

  const isTitleDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessage>(value, nodeDiffs, 'title'), [value, nodeDiffs])
  const isDescriptionDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessage>(value, nodeDiffs, 'description'), [value, nodeDiffs])
  const isSummaryDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessage>(value, nodeDiffs, 'summary'), [value, nodeDiffs])

  return (
    <div className="flex flex-col">
      {isTitleDisplayed && (
        <TitleRow
          data-precededby={PrecededBy.ROOT}
          value={value?.title ?? ''}
          expandable={false}
          variant={TextValueVariant.h1}
          // diffs
          {...titleRowDiffsProps}
        />
      )}
      {!isTitleDisplayed && (
        <TitleRow
          data-precededby={PrecededBy.ROOT}
          value={node.key.toString()}
          expandable={false}
          variant={TextValueVariant.h1}
          // diffs
          {...titleRowDiffsProps}
        />
      )}
      <AddressRow
        data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
        action={value?.action ?? ''}
        address={value?.address ?? ''}
        // diffs
        {...addressRowDiffsProps}
      />
      {isDescriptionDisplayed && (
        <TextRow
          data-precededby={PrecededBy.ADDRESS_ROW}
          value={value?.description ?? ''}
          variant={TextValueVariant.body}
          // diffs
          {...descriptionRowDiffsProps}
        />
      )}
      {isSummaryDisplayed && (
        <TextRow
          data-precededby={
            isDescriptionDisplayed
              ? PrecededBy.DESCRIPTION_ROW
              : PrecededBy.ADDRESS_ROW
          }
          value={value?.summary ?? ''}
          variant={TextValueVariant.body}
          // diffs
          {...summaryRowDiffsProps}
        />
      )}
      <MessageChildrenViewer
        data-precededby={
          isSummaryDisplayed
            ? PrecededBy.SUMMARY_ROW
            : isDescriptionDisplayed
              ? PrecededBy.DESCRIPTION_ROW
              : PrecededBy.ADDRESS_ROW
        }
        children={children}
      />
    </div>
  )
}

type OperationChildrenViewerProps = WithPrecededByProps & {
  children: AsyncApiTreeNode[]
}

const MessageChildrenViewer: FC<OperationChildrenViewerProps> = (props) => {
  const { children, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  return (
    <div className="flex flex-col">
      {children.map(child => {
        if (isMessageSectionSelectorNode(child)) {
          return (
            <MessageSectionsViewer
              data-precededby={precededBy}
              key={child.key}
              node={child}
            />
          )
        }
        return null
      })}
    </div>
  )
}

function isMessageNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE> {
  return node.kind == AsyncApiTreeNodeKinds.MESSAGE && node instanceof SimpleTreeNodeWithDiffs
}
