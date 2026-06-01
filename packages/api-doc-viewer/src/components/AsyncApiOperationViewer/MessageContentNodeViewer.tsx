import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { useDiffTypes } from "@apihub/contexts/DiffTypesContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { isBindingsNode, isExtensionsNode, isMessageContentHeadersNode, isMessageContentPayloadNode } from "@apihub/utils/async-api/node-type-checkers"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { ChangedPropertyMetaData } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { AsyncApiTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value"
import { NodeKey } from "@netcracker/qubership-apihub-next-data-model/utility-types"
import { FC, useCallback, useMemo } from "react"
import { DiffMetaKeys, DOCUMENT_LAYOUT_MODE, JsonSchemaDiffViewer, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "../.."
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { TitleRowProps } from "../shared-components/TitleRow/types"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { ExtensionsNodeViewer } from "./ExtensionsNodeViewer"

type MessageContentNodeViewerProps = WithPrecededByProps & {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT>
}

export const MessageContentNodeViewer: FC<MessageContentNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

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
    if (!headersChild) {
      return undefined
    }
    const headersValue = headersChild.value()
    if (!headersValue) {
      return undefined
    }
    if (!isAsyncApiMessageHeadersNodeWithDiffs(headersChild)) {
      return prepareJsonSchemaForJsoViewer('Type', headersValue)
    }
    return prepareJsonSchemaForJsoDiffsViewer('Type', headersValue, headersChild.diffs[''], diffMetaKeys)
  }, [headersChild, diffMetaKeys])

  const headersTitleRowDiffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (!isAsyncApiMessageHeadersNodeWithDiffs(headersChild)) {
      return {}
    }
    return {
      diff: headersChild.diffs[''],
      descendantDiffs: headersChild.descendantDiffs,
      diffsSeverities: headersChild.diffsSeverities,
    }
  }, [headersChild])
  const payloadJsonSchema = useMemo(() => {
    if (!payloadChild) {
      return undefined
    }
    const payloadValue = payloadChild.value()
    if (!payloadValue) {
      return undefined
    }
    if (!isAsyncApiMessagePayloadNodeWithDiffs(payloadChild)) {
      return prepareJsonSchemaForJsoViewer('Type', payloadValue)
    }
    return prepareJsonSchemaForJsoDiffsViewer('Type', payloadValue, payloadChild.diffs[''], diffMetaKeys)
  }, [payloadChild, diffMetaKeys])
  const payloadTitleRowDiffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (!isAsyncApiMessagePayloadNodeWithDiffs(payloadChild)) {
      return {}
    }
    return {
      diff: payloadChild.diffs[''],
      descendantDiffs: payloadChild.descendantDiffs,
      descendantDiffsSummary: payloadChild.descendantDiffsSummary,
      diffsSeverities: payloadChild.diffsSeverities,
    }
  }, [payloadChild])

  const renderJsonSchemaViewer = useCallback((source: unknown) => {
    if (layoutMode === DOCUMENT_LAYOUT_MODE) {
      return (
        <JsonSchemaViewer
          data-precededBy={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
          schema={source}
          displayMode={displayMode}
          overriddenKind='parameters'
        />
      )
    }
    if (layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE && diffMetaKeys) {
      return (
        <JsonSchemaDiffViewer
          data-precededBy={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
          schema={source}
          displayMode={displayMode}
          metaKeys={diffMetaKeys}
          filters={diffTypes}
          layoutMode={SIDE_BY_SIDE_DIFFS_LAYOUT_MODE}
          overriddenKind='parameters'
        />
      )
    }
    return null
  }, [diffMetaKeys, diffTypes, displayMode, layoutMode])

  return (
    <div className="flex flex-col">
      {headersChild && (
        <div className="flex flex-col">
          <TitleRow
            data-precededBy={precededBy}
            value="Headers"
            variant={TextValueVariant.h3}
            expandable={false}
            // diffs
            {...headersTitleRowDiffProps}
          />
          {renderJsonSchemaViewer(headersJsonSchema)}
        </div>
      )}
      {extensionsChild && (
        <ExtensionsNodeViewer
          data-precededBy={
            headersChild
              ? PrecededBy.JSON_SCHEMA_VIEWER
              : precededBy
          }
          node={extensionsChild}
        />
      )}
      {bindingsChild && (
        <BindingsNodeViewer
          data-precededBy={
            headersChild
              ? PrecededBy.JSON_SCHEMA_VIEWER
              : extensionsChild
                ? PrecededBy.JSO_VIEWER
                : precededBy
          }
          node={bindingsChild}
        />
      )}
      {payloadChild && (
        <div className="flex flex-col">
          <TitleRow
            data-precededBy={
              headersChild
                ? PrecededBy.JSON_SCHEMA_VIEWER
                : extensionsChild || bindingsChild
                  ? PrecededBy.JSO_VIEWER
                  : precededBy
            }
            value="Payload"
            variant={TextValueVariant.h3}
            expandable={false}
            // diffs
            {...payloadTitleRowDiffProps}
          />
          {renderJsonSchemaViewer(payloadJsonSchema)}
        </div>
      )}
    </div>
  )
}

function prepareJsonSchemaForJsoViewer(
  nodeKey: NodeKey,
  nodeValue: AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS> | AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD>,
): object | undefined {
  if (!nodeValue) {
    return undefined
  }

  return {
    type: 'object',
    properties: {
      [nodeKey]: nodeValue.schema,
    },
  }
}

function prepareJsonSchemaForJsoDiffsViewer(
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
