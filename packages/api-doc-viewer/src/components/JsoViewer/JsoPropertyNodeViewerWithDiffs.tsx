import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { HighlightVariant } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsoTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { FC, useCallback, useMemo, useState } from "react"
import { TextValueVariant } from "../AsyncApiOperationViewer/TextValue/types"
import { TitleRow } from "../AsyncApiOperationViewer/TitleRow/TitleRow"
import { TitleRowProps } from "../AsyncApiOperationViewer/TitleRow/types"
import { JsoValueWithDiffs } from "./JsoValue/JsoValueWithDiffs"
import {
  isDiffWithComplexValue,
  isPrimitiveComplexTransitionReplaceDiff,
  resolveHiddenDescendantsLayoutSide,
  resolveJsoSideState,
  withForcedBackgroundColor
} from "./resolve-jso-side-state"

type JsoPropertyNodeViewerWithDiffsProps = {
  node: JsoTreeNodeWithDiffs
  supportJsonSchema?: boolean
}

type JsoPropertyNodeViewerWithDiffsInnerProps = JsoPropertyNodeViewerWithDiffsProps & {
  forceYellowDescendantDiffs?: boolean
  forceYellowObjectDescendantHeaders?: boolean
  hiddenLayoutSide?: LayoutSide
  hiddenLayoutSideLevelCap?: number
}

export const JsoPropertyNodeViewerWithDiffs: FC<JsoPropertyNodeViewerWithDiffsProps> = (props) => {
  return <JsoPropertyNodeViewerWithDiffsInner {...props} />
}

const JsoPropertyNodeViewerWithDiffsInner: FC<JsoPropertyNodeViewerWithDiffsInnerProps> = (props) => {
  const {
    node,
    supportJsonSchema = false,
    forceYellowDescendantDiffs = false,
    forceYellowObjectDescendantHeaders = false,
    hiddenLayoutSide,
    hiddenLayoutSideLevelCap,
  } = props

  const level = useLevelContext()

  const [expanded, setExpanded] = useState(true)
  const onClickExpander = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded)
  }, [])

  const nodeValue = node.value()

  const nodeDiffs = node.diffs
  const nodeDescendantDiffs = node.descendantDiffs
  const nodeDiffsSeverities = node.diffsSeverities

  const nodeValueDiff = useMemo(() => nodeDiffs['value'] ?? nodeDiffs[''], [nodeDiffs])

  const nodeTitleDiff = useMemo(() => nodeDiffs[''], [nodeDiffs])

  const expandable = useMemo(() => {
    return Boolean((nodeValue && !nodeValue.after.isPrimitive) || isDiffWithComplexValue(nodeValueDiff))
  }, [nodeValue, nodeValueDiff])

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
        nodeValue: nodeValue?.after,
        diff: effectiveValueDiff,
        layoutSide,
      })
      if (hiddenLayoutSide === layoutSide) {
        return <></>
      }
      return (
        <JsoValueWithDiffs
          isVisible={sideState.showSubheader}
          value={sideState.resolvedValue}
          appearance={sideState.isPredefinedValueSet ? 'block' : 'text'}
          backgroundColor={shouldForceYellowForCurrentNode ? HighlightVariant.Yellow : sideState.sideStyles?.backgroundColor}
          textHighlighterColor={shouldForceYellowForCurrentNode ? HighlightVariant.Yellow : sideState.sideStyles?.textHighlighterColor}
          borderShadowColor={sideState.sideStyles?.borderShadowColor}
        />
      )
    },
    [effectiveValueDiff, hiddenLayoutSide, nodeValue, shouldForceYellowForCurrentNode]
  )

  const titleRowDiffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities' | 'forcedBackgroundColor' | 'forcedMainHeaderTextHighlighterColor' | 'hiddenLayoutSide' | 'hiddenLayoutSideLevelCap' | 'disableMainHeaderDiff'> = useMemo(() => {
    const forcedBackgroundColor = shouldForceYellowForCurrentNode ? HighlightVariant.Yellow : undefined
    const forcedMainHeaderTextHighlighterColor = shouldForceYellowObjectHeaderForCurrentNode && !nodeValue?.after.isArrayItem
      ? HighlightVariant.Yellow
      : undefined
    const disableMainHeaderDiff = Boolean(
      nodeDiffs[''] &&
      nodeDiffs[''] === effectiveTitleDiff &&
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
  }, [effectiveTitleDiff, hiddenLayoutSide, hiddenLayoutSideLevelCap, nodeDescendantDiffs, nodeDiffs, nodeDiffsSeverities, nodeValue?.after.isArrayItem, shouldForceYellowForCurrentNode, shouldForceYellowObjectHeaderForCurrentNode])

  const childrenProperties = node.childrenNodes()

  return (
    <div data-testid='jso-property-node-viewer' className="flex flex-col jso-property">
      <TitleRow
        value={`${node.key}`}
        expandable={expandable}
        expanded={expanded}
        onClickExpander={onClickExpander}
        variant={TextValueVariant.body}
        enableMainHeader={!nodeValue?.after.isArrayItem}
        subheader={subheader}
        // diffs
        {...titleRowDiffProps}
      />
      {expanded && childrenProperties.map(childProperty => {
        const nextLevel = level + 1
        return (
          <LevelContext.Provider
            key={childProperty.id}
            value={nextLevel}
          >
            <JsoPropertyNodeViewerWithDiffsInner
              node={childProperty}
              supportJsonSchema={supportJsonSchema}
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
