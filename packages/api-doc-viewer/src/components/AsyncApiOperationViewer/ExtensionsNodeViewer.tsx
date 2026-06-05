import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useMemo } from "react"
import { JsoDiffsViewer } from "../JsoViewer/JsoDiffsViewer"
import { JsoViewer } from "../JsoViewer/JsoViewer"
import { buildRowDiffProps, toNodeDiffState } from "../shared-components/diffs/node-diff-props"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { TitleRowProps, TitleRowUsage } from "../shared-components/TitleRow/types"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"

type SpecificationExtensionsProps = WithPrecededByProps & {
  node:
  | AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
  | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
}

// TODO: Make it row-like component
export const ExtensionsNodeViewer: FC<SpecificationExtensionsProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const diffMetaKeys = useDiffMetaKeys()

  const value = node.value()
  const extensions = value?.rawValues ?? {}

  const diffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities' | 'highlightingMode'> = useMemo(() => {
    if (isExtensionsNodeWithDiffs(node)) {
      const rowDiffProps = buildRowDiffProps(toNodeDiffState(node))
      return {
        ...rowDiffProps,
        highlightingMode: node.diffs['']?.highlightingMode,
      }
    }
    return {}
  }, [node])

  return <>
    <TitleRow
      data-precededby={precededBy}
      value='Extensions'
      expandable={false}
      variant={TextValueVariant.h3}
      usage={TitleRowUsage.JsoProperty}
      // diffs
      {...diffsProps}
    />
    {diffMetaKeys ? (
      <JsoDiffsViewer
        data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
        mergedSource={extensions}
        initialLevel={1}
        diffMetaKeys={diffMetaKeys}
      />
    ) : (
      <JsoViewer
        data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
        source={extensions}
        initialLevel={1}
      />
    )}
  </>
}

function isExtensionsNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.EXTENSIONS> {
  return node instanceof SimpleTreeNodeWithDiffs
}
