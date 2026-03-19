import { isBindingsNode, isExtensionsNode } from "@apihub/utils/async-api/node-type-checkers"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
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

  const value = node.value()

  const children: AsyncApiTreeNode[] = node.childrenNodes()
  const bindingsChild = children.find(isBindingsNode)
  const extensionsChild = children.find(isExtensionsNode)

  const legacyChanges = useMemo(() => {
    if (node instanceof SimpleTreeNodeWithDiffs) {
      const diffDescription = node.diffs['description']?.data
      const diffSummary = node.diffs['summary']?.data
      if (!diffDescription && !diffSummary) {
        return undefined
      }
      return {
        ...diffDescription ? { description: diffDescription } : {},
        ...diffSummary ? { summary: diffSummary } : {},
      }
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
  - Displaying description by condition
  */

  return (
    <div className="flex flex-col gap-2">
      <TitleRow
        value={value?.title ?? ''}
        variant={TextValueVariant.h2}
        expandable={false}
        expanded={true}
        // diffs
        {...diffsProps}
      />
      <TitleRow
        value={node.key.toString()}
        variant={TextValueVariant.h2}
        expandable={false}
        expanded={true}
        // diffs
        {...diffsProps}
      />
      <Aligner>
        <DescriptionRow
          value={value?.description ?? ''}
          fontSize={DescriptionFontSize.SECONDARY}
          // diffs
          $nodeChange={legacyNodeChange}
          $changes={legacyChanges}
        />
      </Aligner>
      <Aligner>
        <DescriptionRow
          value={value?.summary ?? ''}
          fontSize={DescriptionFontSize.SECONDARY}
          // diffs
          $nodeChange={legacyNodeChange}
          $changes={legacyChanges}
        />
      </Aligner>

      {children.length > 0 && (
        <div className="flex flex-col gap-2">
          {extensionsChild && <ExtensionsNodeViewer node={extensionsChild} />}
          {bindingsChild && <BindingsNodeViewer node={bindingsChild} />}
        </div>
      )}
    </div>
  )
}
