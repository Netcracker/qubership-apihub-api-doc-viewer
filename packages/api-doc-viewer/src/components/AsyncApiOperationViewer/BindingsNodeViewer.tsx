import { useDisplayMode } from "@apihub/contexts/DisplayModeContext";
import { LayoutSide } from "@apihub/types/internal/LayoutSide";
import { isBindingNode } from "@apihub/utils/async-api/node-type-checkers";
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { JsoViewer } from "../JsoViewer/JsoViewer";
import { Selector, SelectorOption } from "./Selector/Selector";
import { TitleRow } from "./TitleRow";
import { BrokenRefViewer } from "./BrokenRefViewer";

type BindingsNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS>
}

export const BindingsNodeViewer: FC<BindingsNodeViewerProps> = (props) => {
  const { node } = props

  const displayMode = useDisplayMode()

  const bindingsNodeMeta = node.meta()
  const brokenRef = bindingsNodeMeta?.brokenRef

  const [selectedBinding, setSelectedBinding] = useState<SelectorOption | null>(null)
  const bindingNodes: AsyncApiTreeNode[] = node.nestedNodes()
  const bindingSelectorOptions = useMemo(() => (
    bindingNodes
      .filter(isBindingNode)
      .map((bindingNode, index) => {
        const protocol = bindingNode.value()?.protocol ?? ''
        const testId = `binding-${index}`
        return {
          title: protocol,
          node: bindingNode,
          testId: testId,
        }
      })
  ), [bindingNodes])

  const selectedBindingNode = selectedBinding?.node && isBindingNode(selectedBinding.node) ? selectedBinding.node : null
  const selectedBindingValue = selectedBindingNode?.value()
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
    brokenRef ? (
      <BrokenRefViewer value={brokenRef} />
    ) : (
      <Selector
        options={bindingSelectorOptions}
        selectedOption={selectedBinding}
        onSelectOption={setSelectedBinding}
        variant='secondary'
      />
    )
  ), [bindingSelectorOptions, brokenRef, selectedBinding])

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value='Bindings'
        expandable={false}
        expanded={true}
        variant='h3'
        subheader={titleRowSubheader}
      />
      {!brokenRef && (
        <div data-testid={`${selectedBinding?.testId}-content`} className="flex flex-col gap-1">
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
      )}
    </div>
  )
}
