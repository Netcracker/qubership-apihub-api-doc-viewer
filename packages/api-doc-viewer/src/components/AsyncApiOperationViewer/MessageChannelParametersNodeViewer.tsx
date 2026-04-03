import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useMemo } from "react"
import { JsoDiffsViewer } from "../JsoViewer/JsoDiffsViewer"
import { JsoViewer } from "../JsoViewer/JsoViewer"
import { TextValueVariant } from "./TextValue/types"
import { TitleRow } from "./TitleRow/TitleRow"
import { TitleRowProps } from "./TitleRow/types"

type MessageChannelParametersNodeViewerProps = {
  node:
  | AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
  | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
}

// TODO: Make it row-like component
export const MessageChannelParametersNodeViewer: FC<MessageChannelParametersNodeViewerProps> = (props) => {
  const { node } = props

  const layoutMode = useLayoutMode()

  if (isMessageChannelParametersNodeWithDiffs(node)) {
    return <MessageChannelParametersNodeWithDiffsViewer node={node} />
  }

  const value = node.value()
  const addressParameters = value?.rawValues ?? {}

  return <>
    <TitleRow
      value='Address Parameters'
      expandable={false}
      variant={TextValueVariant.h3}
    />
    <JsoViewer
      source={addressParameters}
      initialLevel={1}
      supportJsonSchema={true}
      layoutMode={layoutMode}
    />
  </>
}

type MessageChannelParametersNodeWithDiffsViewerProps = {
  node: AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
}

const MessageChannelParametersNodeWithDiffsViewer: FC<MessageChannelParametersNodeWithDiffsViewerProps> = (props) => {
  const { node } = props

  const value = node.value()
  const addressParameters = value?.rawValues ?? {}

  const diffMetaKeys = useDiffMetaKeys()
  const referenceNamePropertyKey: symbol = Symbol('referenceName')

  const diffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    return {
      diff: node.diffs[''],
      descendantDiffs: node.descendantDiffs,
      diffsSeverities: node.diffsSeverities,
    }
  }, [node])

  if (!diffMetaKeys) {
    return null
  }

  console.log('diffsProps', diffsProps)
  console.log('diffMetaKeys', diffMetaKeys)
  console.log('referenceNamePropertyKey', referenceNamePropertyKey)
  console.log('addressParameters', addressParameters)

  return <>
    <TitleRow
      value='Address Parameters'
      expandable={false}
      variant={TextValueVariant.h3}
      // diffs
      {...diffsProps}
    />
    <JsoDiffsViewer
      mergedSource={addressParameters}
      initialLevel={1}
      supportJsonSchema={true}
      // diffs specific
      diffMetaKeys={diffMetaKeys}
      referenceNamePropertyKey={referenceNamePropertyKey}
    />
  </>
}

function isMessageChannelParametersNodeWithDiffs(
  node:
    | AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
    | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS> {
  return node instanceof SimpleTreeNodeWithDiffs
}
