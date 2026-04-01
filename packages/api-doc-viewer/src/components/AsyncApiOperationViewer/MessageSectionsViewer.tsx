import { useDisplayMode } from "@apihub/contexts/DisplayModeContext";
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext";
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide";
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

  const renderSelector = useCallback((layoutSide: LayoutSide) => {
    const selectorElement = (
      <div className="px-2">
        <Selector
          options={sectionSelectorOptions}
          selectedOption={selectedSection}
          onSelectOption={setSelectedSection}
          variant={SizeVariant.SECONDARY}
          // diffs
          layoutSide={layoutSide}
        />
      </div>
    )
    return selectorElement
  }, [sectionSelectorOptions, selectedSection])

  const renderSelectorRow = useCallback(() => {
    switch (layoutMode) {
      case SIDE_BY_SIDE_DIFFS_LAYOUT_MODE:
        return (
          <SideBySideLayout
            left={renderSelector(ORIGIN_LAYOUT_SIDE)}
            right={renderSelector(CHANGED_LAYOUT_SIDE)}
          />
        )
      default:
        return (
          <OneSideLayout
            content={renderSelector(CHANGED_LAYOUT_SIDE)}
          />
        )
    }
  }, [layoutMode, renderSelector])

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
