import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { isObject } from "@netcracker/qubership-apihub-json-crawl"
import { SimpleTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/simple-node.impl"
import { AsyncApiNodeJsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value-type"
import { JsoTreeNode, JsoTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { JsoTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-kind"
import { JsoTreeNodeValueBase } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-value"
import { NodeKey } from "@netcracker/qubership-apihub-next-data-model/utility-types"
import { FC, useCallback, useMemo, useState } from "react"
import { JsoValue } from "./JsoValue/JsoValue"
import { TextValueVariant } from "../AsyncApiOperationViewer/TextValue/types"
import { TitleRow } from "../AsyncApiOperationViewer/TitleRow/TitleRow"
import { JsonSchemaDiffViewer } from "../JsonSchemaViewer/JsonSchemaDiffViewer"
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { Aligner } from "./Aligner"
import { TitleRowProps } from "../AsyncApiOperationViewer/TitleRow/types"

type JsoPropertyNodeViewerProps = {
  node:
  | JsoTreeNode<typeof JsoTreeNodeKinds.PROPERTY>
  | JsoTreeNodeWithDiffs<typeof JsoTreeNodeKinds.PROPERTY>
  expandable: boolean
  expanded?: boolean
  supportJsonSchema?: boolean
}

export const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps> = (props) => {
  const {
    node,
    expandable,
    expanded: initialExpanded,
    supportJsonSchema = false
  } = props

  const displayMode = useDisplayMode()
  const level = useLevelContext()

  const diffMetaKeys = useDiffMetaKeys()

  const [expanded, setExpanded] = useState(initialExpanded ?? false)
  const onClickExpander = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded)
  }, [])

  const nodeValue = node.value()

  const isNodeWithDiffs = useMemo(() => isJsoPropertyNodeWithDiffs(node), [node])

  const subheader = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (layoutSide: LayoutSide) => {
      if (nodeValue) {
        return (
          <JsoValue
            value={nodeValue.value}
            valueType={nodeValue.valueType}
            isPredefinedValueSet={nodeValue.isPredefinedValueSet}
            layoutSide={layoutSide}
          />
        )
      }
      return <></>
    },
    [nodeValue]
  )

  const nodeDiffs = useMemo(() => isJsoPropertyNodeWithDiffs(node) ? node.diffs : undefined, [node])
  const nodeDescendantDiffs = useMemo(() => isJsoPropertyNodeWithDiffs(node) ? node.descendantDiffs : undefined, [node])
  const nodeDiffsSeverities = useMemo(() => isJsoPropertyNodeWithDiffs(node) ? node.diffsSeverities : undefined, [node])

  const titleRowDiffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    if (nodeDiffs) {
      return {
        diff: nodeDiffs[''] ?? nodeDiffs['title'],
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
      }
    }
    return {}
  }, [nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities])

  if (supportJsonSchema && nodeValue?.valueType === AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA) {
    const schema = prepareJsonSchemaForJsoViewer(node.key, nodeValue)
    return (
      <Aligner>
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
      </Aligner>
    )
  }

  if (supportJsonSchema && nodeValue?.valueType === AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA) {
    const schema = prepareJsonSchemaForJsoViewer(node.key, nodeValue)
    if (isNodeWithDiffs && diffMetaKeys) {
      return (
        <Aligner>
          <JsonSchemaDiffViewer
            schema={schema}
            expandedDepth={2}
            displayMode={displayMode}
            metaKeys={diffMetaKeys}
            overriddenKind='parameters' // This option is WA until JSON Schema Viewer is uniformed with JSO Viewer
          />
        </Aligner>
      )
    }
    return (
      <Aligner>
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
      </Aligner>
    )
  }

  const childrenProperties = node.childrenNodes()

  return (
    <div data-testid='jso-property-node-viewer' className="flex flex-col jso-property">
      <TitleRow
        value={`${node.key}`}
        expandable={expandable}
        expanded={expanded}
        onClickExpander={onClickExpander}
        variant={TextValueVariant.body}
        enableMainHeader={!nodeValue?.isArrayItem}
        subheader={subheader}
        // diffs
        {...titleRowDiffProps}
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

function isJsoPropertyNodeWithDiffs(
  node: JsoTreeNode<typeof JsoTreeNodeKinds.PROPERTY> | JsoTreeNodeWithDiffs<typeof JsoTreeNodeKinds.PROPERTY>
): node is JsoTreeNodeWithDiffs<typeof JsoTreeNodeKinds.PROPERTY> {
  return node instanceof SimpleTreeNodeWithDiffs
}
