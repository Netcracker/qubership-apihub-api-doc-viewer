import { DdlApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { CHANGED_LAYOUT_SIDE, LayoutSide } from "@apihub/types/internal/LayoutSide"
import { FC, useCallback, useMemo } from "react"
import { UxBadge } from "../kit/ux/UxBadge/UxBadge"
import { BADGE_KIND_DEFAULT_OUTLINE } from "../kit/ux/UxBadge/types"
import { TextValue } from "../shared-components/TextValue/TextValue"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { WithPrecededByProps, ATTRIBUTE_PRECEDED_BY } from "../shared-components/WithPrecededByProps"
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
            <UxBadge kind={BADGE_KIND_DEFAULT_OUTLINE} text="unique" inline />
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
    <div data-testid="ddl-index-node-viewer" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        value={indexTitle}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.body}
        subheader={value.indexName || value.isUnique ? subheader : undefined}
      />
    </div>
  )
}
