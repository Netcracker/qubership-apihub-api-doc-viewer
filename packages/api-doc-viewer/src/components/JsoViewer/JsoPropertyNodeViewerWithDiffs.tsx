import { useAsyncLevelContext } from "@apihub/contexts/AsyncLevelContext/AsyncLevelContext"
import { AsyncLevelContextProvider } from "@apihub/contexts/AsyncLevelContext/AsyncLevelContextProvider"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { JsoTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { JsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-value-type"
import { FC, useCallback, useMemo, useState } from "react"
import { TextValueVariant } from "../AsyncApiOperationViewer/TextValue/types"
import { TitleRow } from "../AsyncApiOperationViewer/TitleRow/TitleRow"
import { TitleRowProps, TitleRowUsage } from "../AsyncApiOperationViewer/TitleRow/types"
import { JsoValueWithDiffs } from "./JsoValue/JsoValueWithDiffs"

type JsoPropertyNodeViewerWithDiffsProps = {
  node: JsoTreeNodeWithDiffs
  supportJsonSchema?: boolean
}

export const JsoPropertyNodeViewerWithDiffs: FC<JsoPropertyNodeViewerWithDiffsProps> = (props) => {
  const {
    node,
    supportJsonSchema = false,
  } = props

  const { beforeLevel, afterLevel } = useAsyncLevelContext()!

  const [expanded, setExpanded] = useState(true)
  const onClickExpander = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded)
  }, [])

  const nodeValue = node.value()

  const nodeDiffs = node.diffs
  const nodeDescendantDiffs = node.descendantDiffs
  const nodeDiffsSeverities = node.diffsSeverities

  const nodeValueDiff = useMemo(() => nodeDiffs[''], [nodeDiffs])

  const subheader = useCallback(
    (layoutSide: LayoutSide) => {
      if (!nodeValue) {
        return <></>
      }

      if (!nodeValueDiff) {
        return (
          <JsoValueWithDiffs
            isVisible={nodeValue.after.isPrimitive}
            value={nodeValue.after.value}
            appearance={nodeValue.after.isPredefinedValueSet ? 'block' : 'text'}
          />
        )
      }

      const { styles } = nodeValueDiff

      if (layoutSide === ORIGIN_LAYOUT_SIDE) {
        return (
          <JsoValueWithDiffs
            isVisible={styles.before.isContentVisible}
            value={nodeValue.before.value}
            appearance={nodeValue.before.isPredefinedValueSet ? 'block' : 'text'}
            textHighlighterColor={styles.before.textHighlighterColor}
            borderShadowColor={styles.before.borderShadowColor}
          />
        )
      }

      if (layoutSide === CHANGED_LAYOUT_SIDE) {
        return (
          <JsoValueWithDiffs
            isVisible={styles.after.isContentVisible}
            value={nodeValue.after.value}
            appearance={nodeValue.after.isPredefinedValueSet ? 'block' : 'text'}
            textHighlighterColor={styles.after.textHighlighterColor}
            borderShadowColor={styles.after.borderShadowColor}
          />
        )
      }

      return <></>
    },
    [nodeValue, nodeValueDiff]
  )

  const titleRowDiffProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    return {
      diff: nodeValueDiff,
      descendantDiffs: nodeDescendantDiffs,
      diffsSeverities: nodeDiffsSeverities,
    }
  }, [nodeDescendantDiffs, nodeDiffsSeverities, nodeValueDiff])

  const childrenProperties = node.childrenNodes()

  // Flags

  const expandable = useMemo(() => {
    const hasValue = !!nodeValue
    // TODO 19.05.26 // In future may be moved to next-data-model
    const isBeforeValueExpandable = !nodeValue?.before.isPrimitive && nodeValue?.before.valueType !== JsoPropertyValueTypes.UNKNOWN
    const isAfterValueExpandable = !nodeValue?.after.isPrimitive && nodeValue?.after.valueType !== JsoPropertyValueTypes.UNKNOWN
    return hasValue && (isBeforeValueExpandable || isAfterValueExpandable)
  }, [nodeValue])

  const enableHeaderValue = useMemo(() => {
    return !nodeValue?.before.isArrayItem && !nodeValue?.after.isArrayItem
  }, [nodeValue])

  const allChildrenAreDiffs = useMemo(() => {
    return childrenProperties.every(childProperty => !!childProperty.diffs[''])
  }, [childrenProperties])

  // -----

  return (
    <div data-testid='jso-property-node-viewer' className="flex flex-col jso-property">
      <TitleRow
        value={`${node.key}`}
        expandable={expandable}
        expanded={expanded}
        onClickExpander={onClickExpander}
        variant={TextValueVariant.body}
        enableHeaderValue={enableHeaderValue}
        subheader={subheader}
        usage={TitleRowUsage.JsoProperty}
        highlightingMode={nodeValueDiff?.highlightingMode}
        // diffs
        {...titleRowDiffProps}
      />
      {expanded && childrenProperties.map(childProperty => {
        let nextBeforeLevel = beforeLevel + 1
        let nextAfterLevel = afterLevel + 1
        const childNodeValueDiff = childProperty.diffs['']
        if (childNodeValueDiff && allChildrenAreDiffs) {
          nextBeforeLevel = childNodeValueDiff.flags.before.increaseLevel ? beforeLevel + 1 : beforeLevel
          nextAfterLevel = childNodeValueDiff.flags.after.increaseLevel ? afterLevel + 1 : afterLevel
        }
        return (
          <AsyncLevelContextProvider
            key={childProperty.id}
            beforeLevel={nextBeforeLevel}
            afterLevel={nextAfterLevel}
          >
            <JsoPropertyNodeViewerWithDiffs
              node={childProperty}
              supportJsonSchema={supportJsonSchema}
            />
          </AsyncLevelContextProvider>
        )
      })}
    </div>
  )
}
