import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useMemo } from "react"
import { JsoDiffsViewer } from "../JsoViewer/JsoDiffsViewer"
import { JsoViewer } from "../JsoViewer/JsoViewer"
import { TextValueVariant } from "./TextValue/types"
import { TitleRow } from "./TitleRow/TitleRow"
import { TitleRowProps } from "./TitleRow/types"

type SpecificationExtensionsProps = {
  node:
  | AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
  | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
}

// TODO: Make it row-like component
export const ExtensionsNodeViewer: FC<SpecificationExtensionsProps> = (props) => {
  const { node } = props

  const diffMetaKeys = useDiffMetaKeys()

  const value = node.value()
  const extensions = value?.rawValues ?? {}

  const diffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (isExtensionsNodeWithDiffs(node)) {
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
    {diffMetaKeys ? (
      <JsoDiffsViewer
        mergedSource={extensions}
        initialLevel={1}
        diffMetaKeys={diffMetaKeys}
      />
    ) : (
      <JsoViewer
        source={extensions}
        initialLevel={1}
      />
    )}
  </>
}

function isExtensionsNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.EXTENSIONS> {
  return node instanceof SimpleTreeNodeWithDiffs
}
