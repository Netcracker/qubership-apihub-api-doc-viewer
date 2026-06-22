import { CHANGED_LAYOUT_SIDE, LayoutSide } from "@apihub/types/internal/LayoutSide"
import { DdlApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { FC, useCallback, useMemo } from "react"
import { UxBadge } from "../kit/ux/UxBadge/UxBadge"
import { TextValue } from "../shared-components/TextValue/TextValue"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { TitleRowUsage } from "../shared-components/TitleRow/types"
import { ATTRIBUTE_PRECEDED_BY, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { DDL_API_UNIQUE_BADGE_COLOR_SCHEMA } from "./conts"
import { formatIndexPartNames } from "./formatters"

type IndexNodeViewerProps = WithPrecededByProps & {
  node: DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEX>
}

export const IndexNodeViewer: FC<IndexNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const value = node.value()

  const indexTitle = useMemo(() => {
    if (!value) {
      return ''
    }
    if (value.indexName) {
      return value.indexName
    }
    return formatIndexPartNames(value.partNames)
  }, [value])

  const subheader = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_layoutSide: LayoutSide) => {
      if (!value) {
        return <></>
      }

      return (
        <div className="flex flex-wrap items-center gap-2">
          {value.indexName && (
            <TextValue
              value={`(${formatIndexPartNames(value.partNames)})`}
              variant={TextValueVariant.body}
              layoutSide={CHANGED_LAYOUT_SIDE}
              textFontWeight="normal"
            />
          )}
          {value.isUnique && (
            <UxBadge text="unique" colorSchema={DDL_API_UNIQUE_BADGE_COLOR_SCHEMA} inline />
          )}
        </div>
      )
    },
    [value],
  )

  if (!value) {
    return null
  }

  return (
    <div data-testid="ddl-index-node-viewer" className="flex flex-col ddl-api-property">
      <TitleRow
        data-precededby={precededBy}
        value={indexTitle}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.body}
        subheader={value.indexName || value.isUnique ? subheader : undefined}
        usage={TitleRowUsage.DdlApiProperty}
      />
    </div>
  )
}
