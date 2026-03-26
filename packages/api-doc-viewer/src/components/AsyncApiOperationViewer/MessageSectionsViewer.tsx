import { useDisplayMode } from "@apihub/contexts/DisplayModeContext";
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext";
import { isMessageSectionNode } from "@apihub/utils/async-api/node-type-checkers";
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl";
import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "../..";
import { OneSideLayout } from "./Layout/OneSideLayout";
import { SideBySideLayout } from "./Layout/SideBySideLayout";
import { MessageSectionViewer } from "./MessageSectionViewer";
import { Selector, SelectorOption } from "./Selector/Selector";
import { SizeVariant } from "./types/SizeVariant";

type MessageSectionsViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
}

export const MessageSectionsViewer: FC<MessageSectionsViewerProps> = (props) => {
  const { node } = props

  const layoutMode = useLayoutMode()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const displayMode = useDisplayMode()

  const [selectedSection, setSelectedSection] = useState<SelectorOption | null>(null)
  const sectionNodes: AsyncApiTreeNode[] | AsyncApiTreeNodeWithDiffs[] = node.nestedNodes()
  const sectionSelectorOptions = useMemo(
    () => sectionNodes.map(node => {
      if (node instanceof SimpleTreeNodeWithDiffs) {
        return {
          node: node,
          title: getMessageSectionTitle(node),
          testId: getMessageSectionTestId(node),
          // diffs
          diffs: node.diffs,
          descendantDiffs: node.descendantDiffs,
          diffsSeverities: node.diffsSeverities,
        }
      }
      return {
        node: node,
        title: getMessageSectionTitle(node),
        testId: getMessageSectionTestId(node)
      }
    }),
    [sectionNodes]
  )

  useEffect(() => {
    if (sectionSelectorOptions.length > 0 && selectedSection === null) {
      setSelectedSection(sectionSelectorOptions[0])
    }
  }, [sectionSelectorOptions, selectedSection])

  const renderSelectorRow = useCallback(() => {
    const selectorElement = (
      <Selector
        options={sectionSelectorOptions}
        selectedOption={selectedSection}
        onSelectOption={setSelectedSection}
        variant={SizeVariant.SECONDARY}
      />
    )
    switch (layoutMode) {
      case SIDE_BY_SIDE_DIFFS_LAYOUT_MODE:
        return (
          <SideBySideLayout
            left={selectorElement}
            right={selectorElement}
          />
        )
      default:
        return (
          <OneSideLayout
            content={selectorElement}
          />
        )
    }
  }, [layoutMode, sectionSelectorOptions, selectedSection])

  return (
    <div className="flex flex-col gap-2">
      {renderSelectorRow()}
      {selectedSection && isMessageSectionNode(selectedSection.node) && (
        <div data-testid={`${selectedSection.testId}-section`}>
          <MessageSectionViewer node={selectedSection.node} />
        </div>
      )}
    </div>
  )
}

function getMessageSectionTitle(node: AsyncApiTreeNode): string {
  switch (node.kind) {
    case AsyncApiTreeNodeKinds.MESSAGE_CONTENT:
      return 'Message'
    case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL:
      return 'Channel'
    case AsyncApiTreeNodeKinds.MESSAGE_OPERATION:
      return 'Operation'
    default:
      return 'Unknown'
  }
}

function getMessageSectionTestId(node: AsyncApiTreeNode): string {
  switch (node.kind) {
    case AsyncApiTreeNodeKinds.MESSAGE_CONTENT:
      return 'message-content'
    case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL:
      return 'message-channel'
    case AsyncApiTreeNodeKinds.MESSAGE_OPERATION:
      return 'message-operation'
    default:
      return 'unknown'
  }
}
