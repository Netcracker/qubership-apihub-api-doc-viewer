import { useDisplayMode } from "@apihub/contexts/DisplayModeContext";
import { LayoutSide } from "@apihub/types/internal/LayoutSide";
import { isBindingNode } from "@apihub/utils/async-api/node-type-checkers";
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { JsoViewer } from "../JsoViewer/JsoViewer";
import { BindingSelector } from "./BindingSelector/BindingSelector";
import { TitleRow } from "./TitleRow";
import { SpecificationExtensions } from "./SpecificationExtensions";

type BindingsNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS>
  relatedTo: AsyncApiTreeNodeKind
}

const DEFAULT_SECTION_TITLE = 'Bindings'

const SECTION_TITLE_MAP: Map<AsyncApiTreeNodeKind | null, string> = new Map([
  [AsyncApiTreeNodeKinds.OPERATION, `Operation ${DEFAULT_SECTION_TITLE}`],
  [AsyncApiTreeNodeKinds.CHANNEL, `Channel ${DEFAULT_SECTION_TITLE}`],
  [AsyncApiTreeNodeKinds.MESSAGE, `Message ${DEFAULT_SECTION_TITLE}`],
  [null, DEFAULT_SECTION_TITLE],
])

export const BindingsNodeViewer: FC<BindingsNodeViewerProps> = (props) => {
  const { node, relatedTo } = props

  const displayMode = useDisplayMode()

  const [selectedBinding, setSelectedBinding] = useState<AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING> | null>(null)
  const bindingNodes: AsyncApiTreeNode[] = node.nestedNodes()
  const bindingSelectorOptions = useMemo(() => bindingNodes.filter(isBindingNode), [bindingNodes])
  const selectedBindingValue = selectedBinding?.value()
  const {
    version: bindingVersion = null,
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

  const bindingExtensions = useMemo(
    () => selectedBindingValue?.extensions ?? {},
    [selectedBindingValue?.extensions],
  )

  return (
    <div className="flex flex-col gap-1">
      <TitleRow
        value={SECTION_TITLE_MAP.get(relatedTo) ?? SECTION_TITLE_MAP.get(null)}
        expandable={false}
        expanded={true}
        variant='h3'
        subheader={titleRowSubheader}
      />
      {bindingVersion && (
        <span className='font-Inter-Medium font-bold text-sm mb-1'>
          Version: {bindingVersion}
        </span>
      )}
      <SpecificationExtensions
        values={bindingExtensions}
        kind={AsyncApiTreeNodeKinds.BINDING}
      />
      <JsoViewer
        source={bindingValue}
        displayMode={displayMode}
        initialLevel={1}
      />
    </div>
  )
}
