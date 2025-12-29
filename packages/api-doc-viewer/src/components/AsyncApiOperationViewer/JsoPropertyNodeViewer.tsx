import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { isJsoPropertyNode } from "@apihub/utils/async-api/node-type-checkers"
import { isObject } from "@netcracker/qubership-apihub-json-crawl"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { AsyncApiNodeJsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value-type"
import { FC, useCallback, useState } from "react"
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { TitleRow, TitleVariant } from "./TitleRow"

type JsoPropertyNodeViewerProps = {
  node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY>
  expandable: boolean
  expanded?: boolean
  titleVariant?: TitleVariant
}

export const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps> = (props) => {
  const { node, expandable, expanded: initialExpanded, titleVariant = TitleVariant.h3 } = props

  const displayMode = useDisplayMode()
  const level = useLevelContext()

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
          headerRowTitle: capitalizeFirstLetter(node.key),
          // TODO 25.12.25 // Temporarily disabled
          // headerRowFontSize: 'h3'
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
          headerRowTitle: capitalizeFirstLetter(node.key),
          // TODO 25.12.25 // Temporarily disabled
          // headerRowFontSize: 'h3'
        }}
      />
    )
  }

  const childrenProperties = node.childrenNodes()

  return (
    <div className="flex flex-col gap-3">
      <TitleRow
        value={capitalizeFirstLetter(node.key)}
        expandable={expandable}
        expanded={expanded}
        onClickExpander={onClickExpander}
        variant={titleVariant}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        subheader={(layoutSide) => {
          switch (nodeValue?.valueType) {
            case 'string':
            case 'number':
            case 'boolean':
              return (
                <span className="text-slate-500 text-xs">
                  {`${nodeValue?.value}`}
                </span>
              )
          }
          return <></>
        }}
      />
      {expanded && childrenProperties.map(childProperty => {
        if (!isJsoPropertyNode(childProperty)) {
          return null
        }
        const childNodeValue = childProperty.value()
        const nextLevel = level + 1
        return (
          <LevelContext.Provider value={nextLevel}>
            <JsoPropertyNodeViewer
              key={childProperty.id}
              node={childProperty}
              expandable={childNodeValue?.isPrimitive ?? false}
              expanded={expanded}
              titleVariant={titleVariant}
            />
          </LevelContext.Provider>
        )
      })}
    </div>
  )
}

function capitalizeFirstLetter(str: string | number) {
  return str.toString().charAt(0).toUpperCase() + str.toString().slice(1)
}
