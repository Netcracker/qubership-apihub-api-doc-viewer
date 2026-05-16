import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { JsoTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/aliases"
import { FC, useCallback, useMemo, useState } from "react"
import { TextValueVariant } from "../AsyncApiOperationViewer/TextValue/types"
import { TitleRow } from "../AsyncApiOperationViewer/TitleRow/TitleRow"
import { TitleRowUsage } from "../AsyncApiOperationViewer/TitleRow/types"
import { JsoValue } from "./JsoValue/JsoValue"

type JsoPropertyNodeViewerProps = {
  node: JsoTreeNode
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
    () => {
      if (!nodeValue) {
        return <></>
      }

      return (
        <JsoValue
          isVisible={true}
          value={nodeValue.value}
          appearance={nodeValue.isPredefinedValueSet ? 'block' : 'text'}
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
        enableHeaderValue={!nodeValue?.isArrayItem}
        subheader={subheader}
        usage={TitleRowUsage.JSO_PROPERTY}
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
