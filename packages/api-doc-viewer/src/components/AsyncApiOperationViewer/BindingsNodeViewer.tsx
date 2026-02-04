import { useDisplayMode } from "@apihub/contexts/DisplayModeContext";
import { LayoutSide } from "@apihub/types/internal/LayoutSide";
import { isBindingNode } from "@apihub/utils/async-api/node-type-checkers";
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { JsoViewer } from "../JsoViewer/JsoViewer";
import { BindingSelector } from "./BindingSelector/BindingSelector";
import { TitleRow } from "./TitleRow";

type BindingsNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS>
}

export const BindingsNodeViewer: FC<BindingsNodeViewerProps> = (props) => {
  const { node } = props

  const displayMode = useDisplayMode()

  const [selectedBinding, setSelectedBinding] = useState<AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING> | null>(null)
  const bindingNodes: AsyncApiTreeNode[] = node.nestedNodes()
  const bindingSelectorOptions = useMemo(() => bindingNodes.filter(isBindingNode), [bindingNodes])
  const selectedBindingValue = selectedBinding?.value()
  const {
    version: bindingVersion = 'latest',
    binding: bindingValue = null,
  } = selectedBindingValue ?? {}

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
        value='Bindings'
        expandable={false}
        expanded={true}
        variant='h3'
        subheader={titleRowSubheader}
      />
      {bindingVersion && (
        <span className='binding-version font-Inter-Medium font-bold text-black mb-1'>
          Version: {bindingVersion}
        </span>
      )}
      <JsoViewer
        source={bindingValue}
        displayMode={displayMode}
        initialLevel={1}
        supportJsonSchema={true}
      />
    </div>
  )
}
