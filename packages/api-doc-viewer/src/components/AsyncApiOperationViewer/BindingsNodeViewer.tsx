import { ITreeNode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value";
import { FC, useCallback, useState } from "react";
import { TitleRow } from "./TitleRow";

type BindingsNodeViewerProps = {
  node: ITreeNode<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDINGS> | null, typeof AsyncApiTreeNodeKinds.BINDINGS, AsyncApiNodeMeta>
  level: number
}

export const BindingsNodeViewer: FC<BindingsNodeViewerProps> = (props) => {
  const { node, level } = props

  const [expanded, setExpanded] = useState(true)
  const onClickExpander = useCallback(() => {
    setExpanded(prev => !prev)
  }, [])
  
  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value='Bindings'
        expandable={true}
        expanded={expanded}
        onClickExpander={onClickExpander}
        level={level}
        variant='h3'
      />
      {expanded && (
        <div>
          Bindings content
        </div>
      )}
    </div>
  )
}