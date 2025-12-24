import { LayoutSide } from "@apihub/types/internal/LayoutSide";
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { BindingSelector } from "./BindingSelector/BindingSelector";
import { TitleRow } from "./TitleRow";

type BindingsNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS>
  level: number
}

export const BindingsNodeViewer: FC<BindingsNodeViewerProps> = (props) => {
  const { node, level } = props

  const [expanded, setExpanded] = useState(true)
  const onClickExpander = useCallback(() => {
    setExpanded(prev => !prev)
  }, [])

  const bindingNodes: AsyncApiTreeNode[] = node.nestedNodes()
  const bindingSelectorOptions = useMemo(() => bindingNodes.filter(isBindingNode), [bindingNodes])
  const [selectedBinding, setSelectedBinding] = useState<AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING> | null>(null)

  useEffect(() => {
    if (bindingSelectorOptions.length > 0 && selectedBinding === null) {
      setSelectedBinding(bindingSelectorOptions[0])
    }
  }, [bindingSelectorOptions, selectedBinding])

  const titleRowSubheader = useCallback((layoutSide: LayoutSide) => (
    <BindingSelector
      options={bindingSelectorOptions}
      selectedOption={selectedBinding}
      onSelectOption={setSelectedBinding}
    />
  ), [bindingSelectorOptions, selectedBinding])

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value='Bindings'
        expandable={true}
        expanded={expanded}
        onClickExpander={onClickExpander}
        level={level}
        variant='h3'
        subheader={titleRowSubheader}
      />
      {expanded && (
        <div>
          Bindings content
        </div>
      )}
    </div>
  )
}

function isBindingNode(
  node: AsyncApiTreeNode
): node is AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING> {
  return node.kind === AsyncApiTreeNodeKinds.BINDING
}
