import { ITreeNode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface";
import { AsyncApiTreeNodeKind } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value";
import { FC } from "react";
import { TitleRow } from "./TitleRow";

type OperationNodeViewerProps = {
  node: ITreeNode<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null, AsyncApiTreeNodeKind, AsyncApiNodeMeta>
}

export const OperationNodeViewer: FC<OperationNodeViewerProps> = (props) => {
  const { node } = props

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value='Operation Title'
        expandable={false}
        level={0}
        variant='h1'
      />
      <div>
        List of operation children
      </div>
    </div>
  )
}
