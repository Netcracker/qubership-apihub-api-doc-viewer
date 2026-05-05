import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { JsoTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { JsoTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-kind"
import { FC, useCallback, useMemo, useState } from "react"
import { JsoValue } from "./JsoValue/JsoValue"
import { TextValueVariant } from "../AsyncApiOperationViewer/TextValue/types"
import { TitleRow } from "../AsyncApiOperationViewer/TitleRow/TitleRow"
import { resolveJsoSideState } from "./resolve-jso-side-state"

type JsoPropertyNodeViewerProps = {
  node: JsoTreeNode<typeof JsoTreeNodeKinds.PROPERTY>
  supportJsonSchema?: boolean
}

export const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps> = (props) => {
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

  const expandable = useMemo(() => {
    return Boolean(nodeValue && !nodeValue.isPrimitive)
  }, [nodeValue])

  const subheader = useCallback(
    (layoutSide: LayoutSide) => {
      if (!nodeValue) {
        return <></>
      }

      const sideState = resolveJsoSideState({
        nodeValue,
        layoutSide,
      })
      return (
        <JsoValue
          isVisible={sideState.showSubheader}
          value={sideState.resolvedValue}
          appearance={sideState.isPredefinedValueSet ? 'block' : 'text'}
        />
      )
    },
    [nodeValue],
  )

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
      />
      {expanded && childrenProperties.map(childProperty => {
        const nextLevel = level + 1
        return (
          <LevelContext.Provider
            key={childProperty.id}
            value={nextLevel}
          >
            <JsoPropertyNodeViewer
              node={childProperty}
              supportJsonSchema={supportJsonSchema}
            />
          </LevelContext.Provider>
        )
      })}
    </div>
  )
}
