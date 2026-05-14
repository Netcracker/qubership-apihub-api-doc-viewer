import { DEFAULT_DISPLAY_MODE } from "@apihub/constants/configuration"
import { DisplayModeContext, useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LayoutModeContext } from "@apihub/contexts/LayoutModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { isObject } from "@netcracker/qubership-apihub-json-crawl"
import { JsoTreeBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/jso/tree/builder"
import { AsyncApiNodeJsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value-type"
import { JsoTreeNodeValueBase } from "@netcracker/qubership-apihub-next-data-model/model/jso/tree/node-value"
import { JsoTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { NodeKey } from "@netcracker/qubership-apihub-next-data-model/utility-types"
import { FC, memo, useMemo } from "react"
import { DisplayMode, DOCUMENT_LAYOUT_MODE, LayoutMode } from "../.."
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"
import { Aligner } from "./Aligner"
import { JsoPropertyNodeViewer } from "./JsoPropertyNodeViewer"
import './styles/index.css'

type JsoViewerProps = {
  source: object | null
  displayMode?: DisplayMode
  layoutMode?: LayoutMode
  initialLevel?: number
  supportJsonSchema?: boolean
}

export const JsoViewer: FC<JsoViewerProps> =
  memo<JsoViewerProps>(props => {
    if (props.source === null) {
      return null
    }

    return (
      <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="JSO Viewer" />}>
        <JsoViewerInner {...props} />
      </ErrorBoundary>
    )
  })

const JsoViewerInner: FC<JsoViewerProps> = memo<JsoViewerProps>(props => {
  const { source, displayMode = DEFAULT_DISPLAY_MODE, layoutMode = DOCUMENT_LAYOUT_MODE, initialLevel = 0, supportJsonSchema = false } = props

  const builder = useMemo(() => new JsoTreeBuilder(source, supportJsonSchema), [source, supportJsonSchema])
  const tree = useMemo(() => builder.build(), [builder])

  console.debug('[JSO] Source:', source)
  console.debug('[JSO] Tree:', tree)

  const root = tree.root
  if (!root) {
    return null
  }

  const jsoProperties = root.childrenNodes()
  if (jsoProperties.length === 0) {
    return null
  }

  return (
    <DisplayModeContext.Provider value={displayMode}>
      <LayoutModeContext.Provider value={layoutMode}> {/* Now only 1 layout mode is supported */}
        <LevelContext.Provider value={initialLevel}>
          <div data-testid='jso-viewer'>
            {jsoProperties.map(jsoProperty => (
              <JsoPropertyNodeRenderSwitch
                key={jsoProperty.id}
                node={jsoProperty}
                supportJsonSchema={supportJsonSchema}
              />
            ))}
          </div>
        </LevelContext.Provider>
      </LayoutModeContext.Provider>
    </DisplayModeContext.Provider>
  )
})

type RenderJsoPropertyInput = {
  node: JsoTreeNode
  supportJsonSchema: boolean
}

const JsoPropertyNodeRenderSwitch: FC<RenderJsoPropertyInput> = (input) => {
  const { node, supportJsonSchema } = input
  const displayMode = useDisplayMode()
  const level = useLevelContext()
  const nodeValue = node.value()
  const schema = supportJsonSchema ? prepareJsonSchemaForJsoViewer(node.key, nodeValue) : undefined

  if (schema && nodeValue?.valueType === AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA) {
    return (
      <Aligner key={node.id}>
        <JsonSchemaViewer
          schema={schema}
          expandedDepth={2}
          displayMode={displayMode}
          customizationOptions={{
            headerRowTitle: `${node.key}`,
          }}
          initialLevel={level - 1}
          overriddenKind='parameters'
        />
      </Aligner>
    )
  }

  if (schema && nodeValue?.valueType === AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA) {
    return (
      <Aligner key={node.id}>
        <JsonSchemaViewer
          schema={schema}
          expandedDepth={2}
          displayMode={displayMode}
          customizationOptions={{
            headerRowTitle: `${node.key}`,
          }}
          initialLevel={level - 1}
          overriddenKind='parameters'
        />
      </Aligner>
    )
  }

  return (
    <JsoPropertyNodeViewer
      node={node}
      supportJsonSchema={supportJsonSchema}
    />
  )
}

function prepareJsonSchemaForJsoViewer(
  nodeKey: NodeKey,
  nodeValue: JsoTreeNodeValueBase | null | undefined,
): object | undefined {
  if (!nodeValue) {
    return undefined
  }
  if (
    nodeValue.valueType !== AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA &&
    nodeValue.valueType !== AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA
  ) {
    return undefined
  }

  return isObject(nodeValue.value)
    ? { type: 'object', properties: { [nodeKey]: nodeValue.value } }
    : undefined
}
