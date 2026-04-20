import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { useDiffTypes } from "@apihub/contexts/DiffTypesContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { isBindingsNode, isExtensionsNode, isMessageContentHeadersNode, isMessageContentPayloadNode } from "@apihub/utils/async-api/node-type-checkers"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useCallback } from "react"
import { DOCUMENT_LAYOUT_MODE, JsonSchemaDiffViewer, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "../.."
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { Aligner } from "../JsoViewer/Aligner"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { ExtensionsNodeViewer } from "./ExtensionsNodeViewer"
import { TextValueVariant } from "./TextValue/types"
import { TitleRow } from "./TitleRow/TitleRow"

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

  const renderJsonSchemaViewer = useCallback((source: unknown) => {
    if (layoutMode === DOCUMENT_LAYOUT_MODE) {
      return (
        <JsonSchemaViewer
          schema={source}
          displayMode={displayMode}
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
            {renderJsonSchemaViewer(headersChild.value()?.schema)}
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
            {renderJsonSchemaViewer(payloadChild.value()?.schema)}
          </Aligner>
        </div>
      )}
    </div>
  )
}
