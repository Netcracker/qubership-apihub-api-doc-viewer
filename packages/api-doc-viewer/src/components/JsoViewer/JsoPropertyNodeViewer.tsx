import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { isObject } from "@netcracker/qubership-apihub-json-crawl"
import { AsyncApiNodeJsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value-type"
import { JsoTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { JsoTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-kind"
import { FC, useCallback, useState } from "react"
import { TitleRow, TitleVariant } from "../AsyncApiOperationViewer/TitleRow"
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"

type JsoPropertyNodeViewerProps = {
  node: JsoTreeNode<typeof JsoTreeNodeKinds.PROPERTY>
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
        const childNodeValue = childProperty.value()
        const nextLevel = level + 1
        return (
          <LevelContext.Provider
            key={childProperty.id}
            value={nextLevel}
          >
            <JsoPropertyNodeViewer
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
