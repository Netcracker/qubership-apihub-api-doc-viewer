import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { isObject } from "@netcracker/qubership-apihub-json-crawl"
import { AsyncApiNodeJsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value-type"
import { JsoTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { JsoTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-kind"
import { JsoTreeNodeValueBase } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-value"
import { NodeKey } from "@netcracker/qubership-apihub-next-data-model/utility-types"
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

  const subheader = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (layoutSide: LayoutSide) => {
      switch (nodeValue?.valueType) {
        case 'string':
        case 'number':
        case 'boolean':
          return (
            <span className="text-slate-500 text-xs py-1">
              {`${nodeValue?.value}`}
            </span>
          )
      }
      return <></>
    },
    [nodeValue]
  )

  if (nodeValue?.valueType === AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA) {
    const schema = prepareJsonSchemaForJsoViewer(node.key, nodeValue)
    return (
      <JsonSchemaViewer
        schema={schema}
        expandedDepth={2}
        displayMode={displayMode}
        customizationOptions={{
          headerRowTitle: `${node.key}`,
          // TODO 25.12.25 // Temporarily disabled
          // headerRowFontSize: 'h3'
        }}
        initialLevel={level - 1}
        overriddenKind='parameters' // This option is WA until JSON Schema Viewer is uniformed with JSO Viewer
      />
    )
  }

  if (nodeValue?.valueType === AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA) {
    const schema = prepareJsonSchemaForJsoViewer(node.key, nodeValue)
    return (
      <JsonSchemaViewer
        schema={schema}
        expandedDepth={2}
        displayMode={displayMode}
        customizationOptions={{
          headerRowTitle: `${node.key}`,
          // TODO 25.12.25 // Temporarily disabled
          // headerRowFontSize: 'h3'
        }}
        initialLevel={level - 1}
        overriddenKind='parameters' // This option is WA until JSON Schema Viewer is uniformed with JSO Viewer
      />
    )
  }

  const childrenProperties = node.childrenNodes()

  return (
    <div data-testId='jso-property-node-viewer' className="flex flex-col">
      <TitleRow
        value={`${node.key}`}
        expandable={expandable}
        expanded={expanded}
        onClickExpander={onClickExpander}
        variant={titleVariant}
        enableMainHeader={!nodeValue?.isArrayItem}
        subheader={subheader}
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
              expandable={!childNodeValue?.isPrimitive}
              expanded={expanded}
              titleVariant={titleVariant}
            />
          </LevelContext.Provider>
        )
      })}
    </div>
  )
}

function prepareJsonSchemaForJsoViewer(
  nodeKey: NodeKey,
  nodeValue: JsoTreeNodeValueBase,
): object | undefined {
  if (nodeValue.valueType !== AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA) {
    return undefined
  }

  return isObject(nodeValue.value)
    ? { type: 'object', properties: { [nodeKey]: nodeValue.value } }
    : undefined
}
