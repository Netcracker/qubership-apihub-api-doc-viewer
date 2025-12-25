import { LayoutSide } from "@apihub/types/internal/LayoutSide";
import { isBindingNode } from "@apihub/utils/async-api/node-type-checkers";
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { BindingSelector } from "./BindingSelector/BindingSelector";
import { TitleRow } from "./TitleRow";

type BindingsNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS>
  relatedTo: AsyncApiTreeNodeKind
  level: number
}

const DEFAULT_SECTION_TITLE = 'Bindings'

const SECTION_TITLE_MAP: Map<AsyncApiTreeNodeKind | null, string> = new Map([
  [AsyncApiTreeNodeKinds.OPERATION, `Operation ${DEFAULT_SECTION_TITLE}`],
  [AsyncApiTreeNodeKinds.CHANNEL, `Channel ${DEFAULT_SECTION_TITLE}`],
  [AsyncApiTreeNodeKinds.MESSAGE, `Message ${DEFAULT_SECTION_TITLE}`],
  [null, DEFAULT_SECTION_TITLE],
])

export const BindingsNodeViewer: FC<BindingsNodeViewerProps> = (props) => {
  const { node, relatedTo, level } = props

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        value={SECTION_TITLE_MAP.get(relatedTo) ?? SECTION_TITLE_MAP.get(null)}
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
