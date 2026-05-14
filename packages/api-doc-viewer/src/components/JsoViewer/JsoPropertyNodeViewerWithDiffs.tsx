import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { JsoTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { FC, useCallback, useMemo, useState } from "react"
import { TextValueVariant } from "../AsyncApiOperationViewer/TextValue/types"
import { TitleRow } from "../AsyncApiOperationViewer/TitleRow/TitleRow"
import { TitleRowProps } from "../AsyncApiOperationViewer/TitleRow/types"
import { JsoValueWithDiffs } from "./JsoValue/JsoValueWithDiffs"
import {
  isDiffWithComplexValue
} from "./resolve-jso-side-state"

type JsoPropertyNodeViewerWithDiffsProps = {
  node: JsoTreeNodeWithDiffs
  supportJsonSchema?: boolean
}

export const JsoPropertyNodeViewerWithDiffs: FC<JsoPropertyNodeViewerWithDiffsProps> = (props) => {
  const {
    node,
    supportJsonSchema = false,
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

  const nodeValueDiff = useMemo(() => nodeDiffs[''], [nodeDiffs])

  const expandable = useMemo(() => {
    return Boolean((nodeValue && !nodeValue.after.isPrimitive) || isDiffWithComplexValue(nodeValueDiff))
  }, [nodeValue, nodeValueDiff])

  const subheader = useCallback(
    (layoutSide: LayoutSide) => {
      if (!nodeValue) {
        return <></>
      }

      if (!nodeValueDiff) {
        return <></> // Return subheader with no changes!
      }

      const { styles } = nodeValueDiff

      if (layoutSide === ORIGIN_LAYOUT_SIDE) {
        return (
          <JsoValueWithDiffs
            isVisible={styles.before.isContentVisible}
            value={nodeValue.before.value}
            appearance={nodeValue.before.isPredefinedValueSet ? 'block' : 'text'}
            backgroundColor={styles.before.backgroundColor}
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
            backgroundColor={styles.after.backgroundColor}
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
            <JsoPropertyNodeViewerWithDiffs
              node={childProperty}
              supportJsonSchema={supportJsonSchema}
            />
          </LevelContext.Provider>
        )
      })}
    </div>
  )
}
