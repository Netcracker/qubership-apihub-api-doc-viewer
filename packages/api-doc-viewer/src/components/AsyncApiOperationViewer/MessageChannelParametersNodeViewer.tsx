import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useMemo } from "react"
import { JsonSchemaDiffViewer } from "../JsonSchemaViewer/JsonSchemaDiffViewer"
import { Aligner } from "../JsoViewer/Aligner"
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

  const displayMode = useDisplayMode()
  const layoutMode = useLayoutMode()

  const value = node.value()
  const addressParameters = value?.rawValues

  const diffMetaKeys = useDiffMetaKeys()

  const diffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    return {
      diff: node.diffs[''],
      descendantDiffs: node.descendantDiffs,
      diffsSeverities: node.diffsSeverities,
    }
  }, [node])

  if (!diffMetaKeys || !addressParameters) {
    return null
  }

  return <>
    <TitleRow
      value='Address Parameters'
      expandable={false}
      variant={TextValueVariant.h3}
      // diffs
      {...diffsProps}
    />
    <Aligner>
      <JsonSchemaDiffViewer
        schema={addressParameters}
        expandedDepth={2}
        displayMode={displayMode}
        layoutMode={layoutMode}
        metaKeys={diffMetaKeys}
        overriddenKind='parameters'
      />
    </Aligner>
  </>
}

function isMessageChannelParametersNodeWithDiffs(
  node:
    | AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
    | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS> {
  return node instanceof SimpleTreeNodeWithDiffs
}
