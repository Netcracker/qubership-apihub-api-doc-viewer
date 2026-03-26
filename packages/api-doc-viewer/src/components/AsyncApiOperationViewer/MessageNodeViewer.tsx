import { useLayoutMode } from "@apihub/contexts/LayoutModeContext";
import { isMessageSectionSelectorNode } from "@apihub/utils/async-api/node-type-checkers";
import { shouldBeDisplayed } from "@apihub/utils/async-api/visibility-checkers";
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl";
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeValueTypeMessage } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value";
import { FC, useMemo } from "react";
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow";
import { DescriptionFontSize } from "../common/annotations/Description/types/DescriptionFontSize";
import { Aligner } from "../JsoViewer/Aligner";
import { AddressRow } from "./AddressRow";
import { MessageSectionsViewer } from "./MessageSectionsViewer";
import { TextValueVariant } from "./TextValue/types";
import { TitleRow } from "./TitleRow/TitleRow";
import { TitleRowProps } from "./TitleRow/types";

type MessageNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>
}

export const MessageNodeViewer: FC<MessageNodeViewerProps> = (props) => {
  const { node } = props

  const layoutMode = useLayoutMode()

  const value = node.value()
  const children = useMemo(() => node.childrenNodes(), [node])

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

  const diffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['title'], // TODO: Check if this is correct
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
      }
    }
    return {}
  }, [nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities])

  const isTitleDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessage>(value, nodeDiffs, 'title'), [value, nodeDiffs])
  const isDescriptionDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessage>(value, nodeDiffs, 'description'), [value, nodeDiffs])
  const isSummaryDisplayed = useMemo(() => shouldBeDisplayed<AsyncApiTreeNodeValueTypeMessage>(value, nodeDiffs, 'summary'), [value, nodeDiffs])

  return (
    <div className="flex flex-col gap-2">
      {isTitleDisplayed && (
        <TitleRow
          value={value?.title ?? ''}
          expandable={false}
          variant={TextValueVariant.h1}
          // diffs
          {...diffsProps}
        />
      )}
      {!isTitleDisplayed && (
        <TitleRow
          value={node.key.toString()}
          expandable={false}
          variant={TextValueVariant.h1}
          // diffs
          {...diffsProps}
        />
      )}
      <AddressRow
        action={value?.action ?? ''}
        address={value?.address ?? ''}
      />
      {isDescriptionDisplayed && (
        <Aligner>
          <DescriptionRow
            value={value?.description ?? ''}
            fontSize={DescriptionFontSize.PRIMARY}
            layoutMode={layoutMode}
            // diffs
            $nodeChange={legacyNodeChange}
            $changes={legacyChanges}
          />
        </Aligner>
      )}
      {isSummaryDisplayed && (
        <Aligner>
          <DescriptionRow
            value={value?.summary ?? ''}
            fontSize={DescriptionFontSize.PRIMARY}
            layoutMode={layoutMode}
            // diffs
            $nodeChange={legacyNodeChange}
            $changes={legacyChanges}
          />
        </Aligner>
      )}
      <MessageChildrenViewer
        children={children}
      />
    </div>
  )
}

type OperationChildrenViewerProps = {
  children: AsyncApiTreeNode[]
}

const MessageChildrenViewer: FC<OperationChildrenViewerProps> = (props) => {
  const { children } = props

  return (
    <div className="flex flex-col gap-5">
      {children.map(child => {
        if (isMessageSectionSelectorNode(child)) {
          return <MessageSectionsViewer key={child.key} node={child} />
        }
        return null
      })}
    </div>
  )
}
