import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { isBindingsNode, isHeadersNode, isPayloadNode } from "@apihub/utils/async-api/node-type-checkers"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useMemo } from "react"
import { DescriptionRow } from "../common/annotations/Description/DescriptionRow"
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { BindingsNodeViewer } from "./BindingsNodeViewer"
import { TitleRow } from "./TitleRow"
import { SpecificationExtensions } from "./SpecificationExtensions"

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

  const messageExtensions = useMemo(
    () => messageValue?.extensions ?? {},
    [messageValue?.extensions],
  )

  return (
    <div className="flex flex-col gap-3">
      {messageDescription && (
        <DescriptionRow
          value={messageDescription}
          level={0}
          // fontSize='base'
        />
      )}
      <SpecificationExtensions
        values={messageExtensions}
        kind={AsyncApiTreeNodeKinds.MESSAGE}
      />
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
          <JsonSchemaViewer
            schema={headersChild.value()?.schema}
            displayMode={displayMode}
          />
        </div>
      )}
      {payloadChild && (
        <div className="flex flex-col gap-1">
          <TitleRow
            value="Payload"
            variant="h3"
            expandable={false}
          />
          <JsonSchemaViewer
            schema={payloadChild.value()?.schema}
            displayMode={displayMode}
          />
        </div>
      )}
    </div>
  )
}
