import { useLayoutMode } from "@apihub/contexts/LayoutModeContext";
import { isMessageSectionSelectorNode } from "@apihub/utils/async-api/node-type-checkers";
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl";
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
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

  const legacyChangesForDescription = useMemo(() => {
    if (node instanceof SimpleTreeNodeWithDiffs) {
      const diff = node.diffs['description']?.data
      return diff ? { description: diff } : undefined
    }
    return undefined
  }, [node])

  const legacyChangesForSummary = useMemo(() => {
    if (node instanceof SimpleTreeNodeWithDiffs) {
      const diff = node.diffs['summary']?.data
      return diff ? { summary: diff } : undefined
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
        diff: node.diffs[''] ?? node.diffs['title'], // TODO: Check if this is correct
        descendantDiffs: node.descendantDiffs,
        diffsSeverities: node.diffsSeverities,
      }
    }
    return {}
  }, [node])

  /*
  Problems:
  - Displaying title by condition
  - Displaying description and summary by condition
  */

  return (
    <div className="flex flex-col gap-2">
      <TitleRow
        value={value?.title ?? ''}
        expandable={false}
        variant={TextValueVariant.h1}
        // diffs
        {...diffsProps}
      />
      <TitleRow
        value={node.key.toString()}
        expandable={false}
        variant={TextValueVariant.h1}
        // diffs
        {...diffsProps}
      />
      <AddressRow
        action={value?.action ?? ''}
        address={value?.address ?? ''}
      />
      <Aligner>
        <DescriptionRow
          value={value?.description ?? ''}
          fontSize={DescriptionFontSize.PRIMARY}
          layoutMode={layoutMode}
          // diffs
          $nodeChange={legacyNodeChange}
          $changes={legacyChangesForDescription}
        />
      </Aligner>
      <Aligner>
        <DescriptionRow
          value={value?.summary ?? ''}
          fontSize={DescriptionFontSize.PRIMARY}
          layoutMode={layoutMode}
          // diffs
          $nodeChange={legacyNodeChange}
          $changes={legacyChangesForSummary}
        />
      </Aligner>
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
