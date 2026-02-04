import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { isBindingsNode, isHeadersNode, isPayloadNode } from "@apihub/utils/async-api/node-type-checkers"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC } from "react"
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { Aligner } from "../JsoViewer/Aligner"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { TitleRow } from "./TitleRow"

type MessageContentNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT>
}

export const MessageContentNodeViewer: FC<MessageContentNodeViewerProps> = (props) => {
  const { node } = props

  const displayMode = useDisplayMode()

  const messageChildren: AsyncApiTreeNode[] = node.childrenNodes()
  const bindingsChild = messageChildren.find(isBindingsNode)
  const headersChild = messageChildren.find(isHeadersNode)
  const payloadChild = messageChildren.find(isPayloadNode)

  return (
    <div className="flex flex-col gap-1">
      {/* TODO: Add extensions viewer */}
      {bindingsChild && (
        <BindingsNodeViewer
          node={bindingsChild}
        />
      )}
      {headersChild && (
        <div className="flex flex-col gap-1">
          <TitleRow
            value="Headers"
            variant="h3"
            expandable={false}
          />
          <Aligner>
            <JsonSchemaViewer
              schema={headersChild.value()?.schema}
              displayMode={displayMode}
            />
          </Aligner>
        </div>
      )}
      {payloadChild && (
        <div className="flex flex-col gap-1">
          <TitleRow
            value="Payload"
            variant="h3"
            expandable={false}
          />
          <Aligner>
            <JsonSchemaViewer
              schema={payloadChild.value()?.schema}
              displayMode={displayMode}
            />
          </Aligner>
        </div>
      )}
    </div>
  )
}
