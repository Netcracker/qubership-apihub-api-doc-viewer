import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useMemo } from "react"
import { JsoViewer } from "../JsoViewer/JsoViewer"
import { TextValueVariant } from "./TextValue/types"
import { TitleRow } from "./TitleRow/TitleRow"
import { TitleRowProps } from "./TitleRow/types"

type SpecificationExtensionsProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
}

// TODO: Make it row-like component
export const ExtensionsNodeViewer: FC<SpecificationExtensionsProps> = (props) => {
  const { node } = props

  const value = node.value()
  const extensions = value?.rawValues ?? {}

  const diffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (node instanceof SimpleTreeNodeWithDiffs) {
      return {
        diff: node.diffs[''],
        descendantDiffs: node.descendantDiffs,
        diffsSeverities: node.diffsSeverities,
      }
    }
    return {}
  }, [node])

  return <>
    <TitleRow
      value='Extensions'
      expandable={false}
      variant={TextValueVariant.h3}
      // diffs
      {...diffsProps}
    />
    <JsoViewer
      source={extensions}
      initialLevel={1}
    />
  </>
}