import { isServerNode } from "@apihub/utils/async-api/node-type-checkers";
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl";
import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { FC, memo, useMemo } from "react";
import { TextValueVariant } from "../shared-components/TextValue/types";
import { TitleRow } from "../shared-components/TitleRow/TitleRow";
import { TitleRowProps } from "../shared-components/TitleRow/types";
import { MessageChannelServerNodeViewer } from "./MessageChannelServerNodeViewer/MessageChannelServerNodeViewer";

type MessageChannelServersNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVERS>
}

export const MessageChannelServersNodeViewer: FC<MessageChannelServersNodeViewerProps> = memo(props => {
  const { node } = props

  const children: (AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVER>)[] = useMemo(
    () => {
      const children: AsyncApiTreeNode[] | AsyncApiTreeNodeWithDiffs[] = node.childrenNodes()
      return children.filter(isServerNode)
    },
    [node]
  )

  const titleRowDiffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (isNodeWithDiffs(node)) {
      return {
        diff: node.diffs[''],
        descendantDiffs: node.descendantDiffs,
        diffsSeverities: node.diffsSeverities,
      }
    }
    return {}
  }, [node])

  return (
    <div className='flex flex-col gap-2'>
      <TitleRow
        value='Servers'
        expandable={false}
        expanded={true}
        variant={TextValueVariant.h3}
        // diffs
        {...titleRowDiffProps}
      />
      {children.map(child => (
        <MessageChannelServerNodeViewer key={child.id} node={child} />
      ))}
    </div>
  )
})

function isNodeWithDiffs(node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVERS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVERS>): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVERS> {
  return node instanceof SimpleTreeNodeWithDiffs
}
