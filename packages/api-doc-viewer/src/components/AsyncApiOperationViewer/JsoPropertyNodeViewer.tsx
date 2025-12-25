import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC, useCallback, useState } from "react"
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { TitleRow } from "./TitleRow"
import { isObject } from "@netcracker/qubership-apihub-json-crawl"
import { AsyncApiNodeJsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value-type"

type JsoPropertyNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY>
  expandable: boolean
  expanded?: boolean
  level: number
}

export const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps> = (props) => {
  const { node, expandable, expanded: initialExpanded, level } = props

  const displayMode = useDisplayMode()

  const [expanded, setExpanded] = useState(initialExpanded ?? false)
  const onClickExpander = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded)
  }, [])

  const nodeValue = node.value()
  if (nodeValue?.valueType === AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA) {
    const schema = nodeValue.value
    return (
      <JsonSchemaViewer
        schema={schema}
        expandedDepth={2}
        displayMode={displayMode}
        customizationOptions={{
          headerRowTitle: capitalizeFirstLetter(node.key)
        }}
      />
    )
  }

  if (nodeValue?.valueType === AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA) {
    const schema = isObject(nodeValue.value) && 'schema' in nodeValue.value ? nodeValue.value.schema : undefined
    return (
      <JsonSchemaViewer
        schema={schema}
        expandedDepth={2}
        displayMode={displayMode}
        customizationOptions={{
          headerRowTitle: capitalizeFirstLetter(node.key)
        }}
      />
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <TitleRow
        value={capitalizeFirstLetter(node.key)}
        expandable={expandable}
        expanded={expanded}
        onClickExpander={onClickExpander}
        level={level}
        variant='h3'
      />
      {expanded && (
        <div>
          Here will be content
        </div>
      )}
    </div>
  )
}

function capitalizeFirstLetter(str: string | number) {
  return str.toString().charAt(0).toUpperCase() + str.toString().slice(1)
}
