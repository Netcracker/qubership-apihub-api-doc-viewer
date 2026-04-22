import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { HighlightVariant } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
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
import {
  isDiffWithComplexValue,
  resolveHiddenDescendantsLayoutSide,
  resolveJsoSideState,
  withForcedBackgroundColor
} from "./resolve-jso-side-state"

type JsoPropertyNodeViewerProps = {
  node:
  | JsoTreeNode<typeof JsoTreeNodeKinds.PROPERTY>
  | JsoTreeNodeWithDiffs<typeof JsoTreeNodeKinds.PROPERTY>
  expandable: boolean
  expanded?: boolean
  supportJsonSchema?: boolean
  forceYellowDescendantDiffs?: boolean
  hiddenLayoutSide?: LayoutSide
}

export const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps> = (props) => {
  const {
    node,
    expandable,
    expanded: initialExpanded,
    supportJsonSchema = false,
    forceYellowDescendantDiffs = false,
    hiddenLayoutSide,
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

  const nodeDiffs = useMemo(() => isJsoPropertyNodeWithDiffs(node) ? node.diffs : undefined, [node])
  const nodeDescendantDiffs = useMemo(() => isJsoPropertyNodeWithDiffs(node) ? node.descendantDiffs : undefined, [node])
  const nodeDiffsSeverities = useMemo(() => isJsoPropertyNodeWithDiffs(node) ? node.diffsSeverities : undefined, [node])

  const nodeValueDiff = useMemo(() => {
    if (!nodeDiffs) {
      return undefined
    }
    return nodeDiffs['value'] ?? nodeDiffs['']
  }, [nodeDiffs])

  const nodeTitleDiff = useMemo(() => {
    if (!nodeDiffs) {
      return undefined
    }
    return nodeDiffs[''] ?? nodeDiffs['title']
  }, [nodeDiffs])

  const hasComplexOwnDiff = useMemo(() => isDiffWithComplexValue(nodeValueDiff), [nodeValueDiff])
  const shouldForceYellowForCurrentNode = forceYellowDescendantDiffs
  const shouldForceYellowForChildren = forceYellowDescendantDiffs || hasComplexOwnDiff
  const hiddenLayoutSideForChildren = useMemo(
    () => hiddenLayoutSide ?? resolveHiddenDescendantsLayoutSide(nodeValueDiff),
    [hiddenLayoutSide, nodeValueDiff],
  )

  const effectiveValueDiff = useMemo(
    () => withForcedBackgroundColor(
      nodeValueDiff,
      shouldForceYellowForCurrentNode ? HighlightVariant.Yellow : undefined,
    ),
    [nodeValueDiff, shouldForceYellowForCurrentNode],
  )

  const effectiveTitleDiff = useMemo(
    () => withForcedBackgroundColor(
      nodeTitleDiff,
      shouldForceYellowForCurrentNode ? HighlightVariant.Yellow : undefined,
    ),
    [nodeTitleDiff, shouldForceYellowForCurrentNode],
  )

  const subheader = useCallback(
    (layoutSide: LayoutSide) => {
      if (!nodeValue) {
        return <></>
      }

      const sideState = resolveJsoSideState({
        nodeValue,
        diff: effectiveValueDiff,
        layoutSide,
      })
      if (hiddenLayoutSide === layoutSide) {
        return <></>
      }
      return (
        <JsoValue
          sideState={sideState}
          forcedBackgroundColor={shouldForceYellowForCurrentNode ? HighlightVariant.Yellow : undefined}
        />
      )
    },
    [effectiveValueDiff, hiddenLayoutSide, nodeValue, shouldForceYellowForCurrentNode]
  )

  const titleRowDiffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities' | 'forcedBackgroundColor' | 'hiddenLayoutSide'> = useMemo(() => {
    const forcedBackgroundColor = shouldForceYellowForCurrentNode ? HighlightVariant.Yellow : undefined
    if (nodeDiffs) {
      return {
        diff: effectiveTitleDiff,
        descendantDiffs: nodeDescendantDiffs,
        diffsSeverities: nodeDiffsSeverities,
        forcedBackgroundColor,
        hiddenLayoutSide,
      }
    }
    return {
      forcedBackgroundColor,
      hiddenLayoutSide,
    }
  }, [effectiveTitleDiff, hiddenLayoutSide, nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities, shouldForceYellowForCurrentNode])

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
              forceYellowDescendantDiffs={shouldForceYellowForChildren}
              hiddenLayoutSide={hiddenLayoutSideForChildren}
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
