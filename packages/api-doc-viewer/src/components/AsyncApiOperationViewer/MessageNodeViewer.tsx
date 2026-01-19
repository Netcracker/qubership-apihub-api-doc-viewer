import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { isBindingsNode, isHeadersNode, isPayloadNode } from "@apihub/utils/async-api/node-type-checkers"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC } from "react"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { Aligner } from "../JsoViewer/Aligner"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { SpecificationExtensions } from "./SpecificationExtensions"
import { TitleRow } from "./TitleRow"

type MessageNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>
}

export const MessageNodeViewer: FC<MessageNodeViewerProps> = (props) => {
  const { node } = props

  const displayMode = useDisplayMode()

  const messageValue = node.value()
  const messageDescription = messageValue?.description ?? ''

  const messageChildren: AsyncApiTreeNode[] = node.childrenNodes()
  const bindingsChild = messageChildren.find(isBindingsNode)
  const headersChild = messageChildren.find(isHeadersNode)
  const payloadChild = messageChildren.find(isPayloadNode)

  return (
    <div className="flex flex-col gap-1">
      {messageDescription && (
        <Aligner>
          <DescriptionRow
            value={messageDescription}
            level={0}
          // fontSize='base'
          />
        </Aligner>
      )}
      {messageValue?.extensions && (
        <SpecificationExtensions
          values={messageValue.extensions}
          kind={AsyncApiTreeNodeKinds.MESSAGE}
        />
      )}
      {bindingsChild && (
        <BindingsNodeViewer
          node={bindingsChild}
          relatedTo={AsyncApiTreeNodeKinds.MESSAGE}
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
