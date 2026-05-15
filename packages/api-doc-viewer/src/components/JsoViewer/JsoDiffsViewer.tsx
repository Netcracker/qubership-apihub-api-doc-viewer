import { DEFAULT_DISPLAY_MODE } from "@apihub/constants/configuration"
import { DiffMetaKeysContext, useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { DiffTypesContext } from "@apihub/contexts/DiffTypesContext"
import { DisplayModeContext, useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LayoutModeContext } from "@apihub/contexts/LayoutModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { DiffMetaKeys } from "@netcracker/qubership-apihub-api-data-model"
import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { isObject } from "@netcracker/qubership-apihub-json-crawl"
import { JsoTreeWithDiffsBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/jso/tree-with-diffs/builder"
import { AsyncApiNodeJsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value-type"
import { JsoTreeNodeValueWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/jso/tree-with-diffs/node-value"
import { JsoTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { NodeKey } from "@netcracker/qubership-apihub-next-data-model/utility-types"
import { FC, memo, useMemo } from "react"
import { DisplayMode } from "../.."
import { JsonSchemaDiffViewer } from "../JsonSchemaViewer/JsonSchemaDiffViewer"
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { ErrorBoundary } from "../services/ErrorBoundary"
import { ErrorBoundaryFallback } from "../services/ErrorBoundaryFallback"
import { Aligner } from "./Aligner"
import { JsoPropertyNodeViewerWithDiffs } from "./JsoPropertyNodeViewerWithDiffs"

type JsoDiffsViewerProps = {
  mergedSource: unknown
  displayMode?: DisplayMode
  initialLevel?: number
  supportJsonSchema?: boolean
  // diffs specific
  diffMetaKeys: DiffMetaKeys
  diffTypes?: ReadonlyArray<DiffType>
}

export const JsoDiffsViewer: FC<JsoDiffsViewerProps> =
  memo<JsoDiffsViewerProps>(props => {
    if (props.mergedSource === null) {
      return null
    }

    return (
      <ErrorBoundary fallback={<ErrorBoundaryFallback componentName="JSO Diffs Viewer" />}>
        <JsoDiffsViewerInner {...props} />
      </ErrorBoundary>
    )
  })

const JsoDiffsViewerInner: FC<JsoDiffsViewerProps> =
  memo<JsoDiffsViewerProps>(props => {
    const {
      mergedSource: source,
      displayMode = DEFAULT_DISPLAY_MODE,
      initialLevel = 0,
      supportJsonSchema = false,
      diffMetaKeys,
      diffTypes,
    } = props
  
    const referenceNamePropertyKey = Symbol('referenceName')

    const builder = useMemo(
      () => new JsoTreeWithDiffsBuilder(source, referenceNamePropertyKey, diffMetaKeys),
      [source, referenceNamePropertyKey, diffMetaKeys]
    )
    const tree = useMemo(() => builder.build(), [builder])

    console.debug("[JSO Diffs] Source:", source)
    console.debug("[JSO Diffs] Tree:", tree)

    const root = tree.root
    if (!root) {
      return null
    }

    const jsoProperties = root.childrenNodes()
    if (jsoProperties.length === 0) {
      return null
    }

    return (
      <DiffMetaKeysContext.Provider value={diffMetaKeys}>
        <DiffTypesContext.Provider value={diffTypes}>
          <DisplayModeContext.Provider value={displayMode}>
            <LayoutModeContext.Provider value={SIDE_BY_SIDE_DIFFS_LAYOUT_MODE}>
              <LevelContext.Provider value={initialLevel}>
                <div data-testid='jso-diffs-viewer'>
                  {jsoProperties.map(jsoProperty => (
                    <JsoPropertyNodeRenderSwitchWithDiffs
                      key={jsoProperty.id}
                      node={jsoProperty}
                      supportJsonSchema={supportJsonSchema}
                    />
                  ))}
                </div>
              </LevelContext.Provider>
            </LayoutModeContext.Provider>
          </DisplayModeContext.Provider>
        </DiffTypesContext.Provider>
      </DiffMetaKeysContext.Provider>
    )
  })

type RenderJsoPropertyWithDiffsInput = {
  node: JsoTreeNodeWithDiffs
  supportJsonSchema: boolean
}

const JsoPropertyNodeRenderSwitchWithDiffs: FC<RenderJsoPropertyWithDiffsInput> = (input) => {
  const { node, supportJsonSchema } = input
  const displayMode = useDisplayMode()
  const level = useLevelContext()
  const diffMetaKeys = useDiffMetaKeys()
  const nodeValue = node.value()
  const schema = supportJsonSchema ? prepareJsonSchemaForJsoViewer(node.key, nodeValue) : undefined

  if (schema && nodeValue?.after.valueType === AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA) {
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

  if (schema && nodeValue?.after.valueType === AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA) {
    if (!diffMetaKeys) {
      return <JsoPropertyNodeViewerWithDiffs node={node} supportJsonSchema={supportJsonSchema} />
    }
    return (
      <Aligner key={node.id}>
        <JsonSchemaDiffViewer
          schema={schema}
          expandedDepth={2}
          displayMode={displayMode}
          metaKeys={diffMetaKeys}
          overriddenKind='parameters'
        />
      </Aligner>
    )
  }

  return (
    <JsoPropertyNodeViewerWithDiffs node={node} supportJsonSchema={supportJsonSchema} />
  )
}

function prepareJsonSchemaForJsoViewer(
  nodeKey: NodeKey,
  nodeValue: JsoTreeNodeValueWithDiffs | null | undefined,
): object | undefined {
  if (!nodeValue) {
    return undefined
  }
  if (
    nodeValue.after.valueType !== AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA &&
    nodeValue.after.valueType !== AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA
  ) {
    return undefined
  }

  return isObject(nodeValue.after.value)
    ? { type: 'object', properties: { [nodeKey]: nodeValue.after.value } }
    : undefined
}
