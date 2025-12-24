import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useCallback, useState } from "react"
import { TitleRow } from "./TitleRow"

type JsoPropertyNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY>
}

export const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps> = (props) => {
  const { node } = props

  const [expanded, setExpanded] = useState(false)
  const onClickExpander = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded)
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <TitleRow
        value={capitalizeFirstLetter(node.key)}
        expandable={true}
        expanded={expanded}
        onClickExpander={onClickExpander}
        level={0}
        variant='h3'
      />
      {expanded && (
        <div>
          Here will be content
        </div>
      )}
    </div>
  )
}

function capitalizeFirstLetter(str: string | number) {
  return str.toString().charAt(0).toUpperCase() + str.toString().slice(1)
}
