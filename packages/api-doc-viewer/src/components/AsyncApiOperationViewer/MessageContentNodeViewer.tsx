import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { useDiffTypes } from "@apihub/contexts/DiffTypesContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { isBindingsNode, isExtensionsNode, isMessageContentHeadersNode, isMessageContentPayloadNode } from "@apihub/utils/async-api/node-type-checkers"
import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useCallback, useMemo } from "react"
import { DiffMetaKeys, DOCUMENT_LAYOUT_MODE, JsonSchemaDiffViewer, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "../.."
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { Aligner } from "../JsoViewer/Aligner"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { ExtensionsNodeViewer } from "./ExtensionsNodeViewer"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { NodeKey } from "@netcracker/qubership-apihub-next-data-model/utility-types"
import { ChangedPropertyMetaData } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { AsyncApiTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"

type MessageContentNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT>
}

export const MessageContentNodeViewer: FC<MessageContentNodeViewerProps> = (props) => {
  const { node } = props

  const displayMode = useDisplayMode()
  const layoutMode = useLayoutMode()
  const diffMetaKeys = useDiffMetaKeys()
  const diffTypes = useDiffTypes()

  const messageChildren: AsyncApiTreeNode[] = node.childrenNodes()
  const headersChild = messageChildren.find(isMessageContentHeadersNode)
  const extensionsChild = messageChildren.find(isExtensionsNode)
  const bindingsChild = messageChildren.find(isBindingsNode)
  const payloadChild = messageChildren.find(isMessageContentPayloadNode)

  const headersJsonSchema = useMemo(() => {
    if (!isAsyncApiMessageHeadersNodeWithDiffs(headersChild)) {
      return undefined
    }
    const headersValue = headersChild.value()
    if (!headersValue) {
      return undefined
    }
    return prepareJsonSchemaForJsoViewer('Type', headersValue, headersChild.diffs[''], diffMetaKeys)
  }, [headersChild, diffMetaKeys])
  const payloadJsonSchema = useMemo(() => {
    if (!isAsyncApiMessagePayloadNodeWithDiffs(payloadChild)) {
      return undefined
    }
    const payloadValue = payloadChild.value()
    if (!payloadValue) {
      return undefined
    }
    return prepareJsonSchemaForJsoViewer('Type', payloadValue, payloadChild.diffs[''], diffMetaKeys)
  }, [payloadChild, diffMetaKeys])

  const renderJsonSchemaViewer = useCallback((source: unknown) => {
    if (layoutMode === DOCUMENT_LAYOUT_MODE) {
      return (
        <JsonSchemaViewer
          schema={source}
          displayMode={displayMode}
          overriddenKind='parameters'
        />
      )
    }
    if (layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE) {
      return diffMetaKeys ? (
        <JsonSchemaDiffViewer
          schema={source}
          displayMode={displayMode}
          metaKeys={diffMetaKeys}
          filters={diffTypes}
          layoutMode={SIDE_BY_SIDE_DIFFS_LAYOUT_MODE}
          overriddenKind='parameters'
        />
      ) : null
    }
    return null
  }, [diffMetaKeys, diffTypes, displayMode, layoutMode])

  return (
    <div className="flex flex-col gap-1">
      {headersChild && (
        <div className="flex flex-col gap-1">
          <TitleRow
            value="Headers"
            variant={TextValueVariant.h3}
            expandable={false}
          />
          <Aligner>
            {renderJsonSchemaViewer(headersJsonSchema)}
          </Aligner>
        </div>
      )}
      {extensionsChild && (
        <ExtensionsNodeViewer
          node={extensionsChild}
        />
      )}
      {bindingsChild && (
        <BindingsNodeViewer
          node={bindingsChild}
        />
      )}
      {payloadChild && (
        <div className="flex flex-col gap-1">
          <TitleRow
            value="Payload"
            variant={TextValueVariant.h3}
            expandable={false}
          />
          <Aligner>
            {renderJsonSchemaViewer(payloadJsonSchema)}
          </Aligner>
        </div>
      )}
    </div>
  )
}

function prepareJsonSchemaForJsoViewer(
  nodeKey: NodeKey,
  nodeValue: AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS> | AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD>,
  nodeValueDiff: ChangedPropertyMetaData | undefined,
  diffMetaKeys: DiffMetaKeys | undefined,
): object | undefined {
  if (!nodeValue) {
    return undefined
  }

  const diff = nodeValueDiff?.data
  const diffsMetaKey = diffMetaKeys?.diffsMetaKey

  return {
    type: 'object',
    properties: {
      [nodeKey]: nodeValue.schema,
      ...(diff && diffsMetaKey ? { [diffsMetaKey]: { [nodeKey]: diff } } : {}),
    },
  }
}

function isAsyncApiMessageHeadersNodeWithDiffs(
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS> | undefined
): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS> {
  return !!node && node.kind == AsyncApiTreeNodeKinds.MESSAGE_HEADERS && node instanceof SimpleTreeNodeWithDiffs
}

function isAsyncApiMessagePayloadNodeWithDiffs(
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD> | undefined
): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD> {
  return !!node && node.kind == AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD && node instanceof SimpleTreeNodeWithDiffs
}
