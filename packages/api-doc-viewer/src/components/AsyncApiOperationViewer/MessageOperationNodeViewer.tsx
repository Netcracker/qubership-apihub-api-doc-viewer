import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { isBindingsNode, isExtensionsNode } from "@apihub/utils/async-api/node-type-checkers"
import { shouldBeDisplayed } from "@apihub/utils/async-api/visibility-checkers"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { AsyncApiTreeNodeValueTypeMessageOperation } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
import { FC, useMemo } from "react"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { DescriptionFontSize } from "../common/annotations/Description/types/DescriptionFontSize"
import { Aligner } from "../JsoViewer/Aligner"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { ExtensionsNodeViewer } from "./ExtensionsNodeViewer"
import { TextValueVariant } from "./TextValue/types"
import { TitleRow } from "./TitleRow/TitleRow"
import { TitleRowProps } from "./TitleRow/types"

type MessageOperationNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>
}

export const MessageOperationNodeViewer: FC<MessageOperationNodeViewerProps> = (props) => {
  const { node } = props

  const layoutMode = useLayoutMode()

  const value = node.value()

  const children: AsyncApiTreeNode[] = node.childrenNodes()
  const bindingsChild = children.find(isBindingsNode)
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
        <Aligner>
          <DescriptionRow
            value={value?.description ?? ''}
            fontSize={DescriptionFontSize.SECONDARY}
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
            fontSize={DescriptionFontSize.SECONDARY}
            layoutMode={layoutMode}
            // diffs
            $nodeChange={legacyNodeChange}
            $changes={legacyChanges}
          />
        </Aligner>
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
