import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { HighlightVariant } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { isObject } from "@netcracker/qubership-apihub-json-crawl"
import { AsyncApiNodeJsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value-type"
import { JsoTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { JsoTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-kind"
import { JsoTreeNodeValueBase } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-value"
import { NodeKey } from "@netcracker/qubership-apihub-next-data-model/utility-types"
import { FC, useCallback, useMemo, useState } from "react"
import { JsoValueWithDiffs } from "./JsoValue/JsoValueWithDiffs"
import { TextValueVariant } from "../AsyncApiOperationViewer/TextValue/types"
import { TitleRow } from "../AsyncApiOperationViewer/TitleRow/TitleRow"
import { JsonSchemaDiffViewer } from "../JsonSchemaViewer/JsonSchemaDiffViewer"
import { JsonSchemaViewer } from "../JsonSchemaViewer/JsonSchemaViewer"
import { Aligner } from "./Aligner"
import { TitleRowProps } from "../AsyncApiOperationViewer/TitleRow/types"
import {
  isDiffWithComplexValue,
  isPrimitiveComplexTransitionReplaceDiff,
  resolveHiddenDescendantsLayoutSide,
  resolveJsoTitleDiffKey,
  resolveJsoValueDiffKey,
  resolveJsoSideState,
  withForcedBackgroundColor
} from "./resolve-jso-side-state"

type JsoPropertyNodeWithDiffsViewerProps = {
  node: JsoTreeNodeWithDiffs<typeof JsoTreeNodeKinds.PROPERTY>
  supportJsonSchema?: boolean
  forceYellowDescendantDiffs?: boolean
  forceYellowObjectDescendantHeaders?: boolean
  hiddenLayoutSide?: LayoutSide
  hiddenLayoutSideLevelCap?: number
}

export const JsoPropertyNodeWithDiffsViewer: FC<JsoPropertyNodeWithDiffsViewerProps> = (props) => {
  const {
    node,
    supportJsonSchema = false,
    forceYellowDescendantDiffs = false,
    forceYellowObjectDescendantHeaders = false,
    hiddenLayoutSide,
    hiddenLayoutSideLevelCap,
  } = props

  const displayMode = useDisplayMode()
  const level = useLevelContext()

  const diffMetaKeys = useDiffMetaKeys()

  const [expanded, setExpanded] = useState(true)
  const onClickExpander = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded)
  }, [])

  const nodeValue = node.value()
  const nodeDiffs = node.diffs
  const nodeDescendantDiffs = node.descendantDiffs
  const nodeDiffsSeverities = node.diffsSeverities

  const nodeValueDiffKey = useMemo(() => resolveJsoValueDiffKey(nodeDiffs), [nodeDiffs])
  const nodeTitleDiffKey = useMemo(() => resolveJsoTitleDiffKey(nodeDiffs), [nodeDiffs])
  const nodeValueDiff = useMemo(
    () => nodeValueDiffKey ? nodeDiffs[nodeValueDiffKey] : undefined,
    [nodeDiffs, nodeValueDiffKey],
  )
  const nodeTitleDiff = useMemo(
    () => nodeTitleDiffKey ? nodeDiffs[nodeTitleDiffKey] : undefined,
    [nodeDiffs, nodeTitleDiffKey],
  )

  const expandable = useMemo(
    () => !!nodeValue && !nodeValue.isPrimitive || isDiffWithComplexValue(nodeValueDiff),
    [nodeValue, nodeValueDiff],
  )

  const hasComplexOwnDiff = useMemo(() => isDiffWithComplexValue(nodeValueDiff), [nodeValueDiff])
  const hasPrimitiveComplexTransitionOwnDiff = useMemo(
    () => isPrimitiveComplexTransitionReplaceDiff(nodeValueDiff),
    [nodeValueDiff],
  )
  const shouldForceYellowForCurrentNode = forceYellowDescendantDiffs
  const shouldForceYellowForChildren = forceYellowDescendantDiffs || hasComplexOwnDiff
  const shouldForceYellowObjectHeaderForCurrentNode = forceYellowObjectDescendantHeaders
  const shouldForceYellowObjectHeaderForChildren = forceYellowObjectDescendantHeaders || hasPrimitiveComplexTransitionOwnDiff
  const hiddenLayoutSideForChildren = useMemo(
    () => hiddenLayoutSide ?? resolveHiddenDescendantsLayoutSide(nodeValueDiff),
    [hiddenLayoutSide, nodeValueDiff],
  )
  const hiddenLayoutSideLevelCapForChildren = useMemo(() => {
    if (hiddenLayoutSideLevelCap !== undefined) {
      return hiddenLayoutSideLevelCap
    }
    return hiddenLayoutSideForChildren ? level : undefined
  }, [hiddenLayoutSideForChildren, hiddenLayoutSideLevelCap, level])

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
        <JsoValueWithDiffs
          sideState={sideState}
          forcedBackgroundColor={shouldForceYellowForCurrentNode ? HighlightVariant.Yellow : undefined}
          forcedTextHighlighterColor={shouldForceYellowForCurrentNode ? HighlightVariant.Yellow : undefined}
        />
      )
    },
    [effectiveValueDiff, hiddenLayoutSide, nodeValue, shouldForceYellowForCurrentNode]
  )

  const titleRowDiffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities' | 'forcedBackgroundColor' | 'forcedMainHeaderTextHighlighterColor' | 'hiddenLayoutSide' | 'hiddenLayoutSideLevelCap' | 'disableMainHeaderDiff'> = useMemo(() => {
    const forcedBackgroundColor = shouldForceYellowForCurrentNode ? HighlightVariant.Yellow : undefined
    const forcedMainHeaderTextHighlighterColor = shouldForceYellowObjectHeaderForCurrentNode && !nodeValue?.isArrayItem
      ? HighlightVariant.Yellow
      : undefined
    const disableMainHeaderDiff = Boolean(
      nodeDiffs?.[''] &&
      nodeDiffs[''] === effectiveTitleDiff &&
      !nodeDiffs['title'] &&
      isDiffReplace(nodeDiffs[''].data),
    )

    return {
      diff: effectiveTitleDiff,
      descendantDiffs: nodeDescendantDiffs,
      diffsSeverities: nodeDiffsSeverities,
      forcedBackgroundColor,
      forcedMainHeaderTextHighlighterColor,
      hiddenLayoutSide,
      hiddenLayoutSideLevelCap,
      disableMainHeaderDiff,
    }
  }, [effectiveTitleDiff, hiddenLayoutSide, hiddenLayoutSideLevelCap, nodeDiffs, nodeDescendantDiffs, nodeDiffsSeverities, nodeValue?.isArrayItem, shouldForceYellowForCurrentNode, shouldForceYellowObjectHeaderForCurrentNode])

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
    if (diffMetaKeys) {
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
    <div data-testid='jso-property-node-with-diffs-viewer' className="flex flex-col jso-property">
      <TitleRow
        value={`${node.key}`}
        expandable={expandable}
        expanded={expanded}
        onClickExpander={onClickExpander}
        variant={TextValueVariant.body}
        enableMainHeader={!nodeValue?.isArrayItem}
        subheader={subheader}
        {...titleRowDiffProps}
      />
      {expanded && childrenProperties.map(childProperty => {
        const nextLevel = level + 1
        return (
          <LevelContext.Provider
            key={childProperty.id}
            value={nextLevel}
          >
            <JsoPropertyNodeWithDiffsViewer
              node={childProperty as JsoTreeNodeWithDiffs<typeof JsoTreeNodeKinds.PROPERTY>}
              forceYellowDescendantDiffs={shouldForceYellowForChildren}
              forceYellowObjectDescendantHeaders={shouldForceYellowObjectHeaderForChildren}
              hiddenLayoutSide={hiddenLayoutSideForChildren}
              hiddenLayoutSideLevelCap={hiddenLayoutSideLevelCapForChildren}
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
    ? { type: "object", properties: { [nodeKey]: nodeValue.value } }
    : undefined
}
