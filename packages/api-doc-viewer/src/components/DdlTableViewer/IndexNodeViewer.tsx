import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { DdlApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { FC, useCallback, useMemo } from "react"
import { DETAILED_DISPLAY_MODE } from "../../types/DisplayMode"
import { TextRow } from "../shared-components/TextRow/TextRow"
import { DEFAULT_LONG_TEXT_COLOR } from "../shared-components/TextRow/consts"
import { TextRowUsage } from "../shared-components/TextRow/types"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { TitleRowUsage } from "../shared-components/TitleRow/types"
import { ATTRIBUTE_DDL_LIST_LAST_ROW, ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { ColumnRowBadgesContent } from "./ColumnRowBadges/ColumnRowBadgesContent"
import { DdlApiPropertyValue } from "./DdlApiPropertyValue/DdlApiPropertyValue"
import { formatIndexPartNames } from "./formatters"

export type IndexNodeViewerProps = WithPrecededByProps & {
  node: DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEX>
  isLastInList?: boolean
}

export const IndexNodeViewer: FC<IndexNodeViewerProps> = (props) => {
  const { node, isLastInList = false, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const displayMode = useDisplayMode()
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
    (layoutSide: LayoutSide) => {
      if (!value) {
        return <></>
      }

      return (
        <div className="flex flex-wrap items-center gap-2">
          {value.indexName && (
            <DdlApiPropertyValue
              isVisible={true}
              value={`(${formatIndexPartNames(value.partNames)})`}
              appearance="text"
            />
          )}
          <ColumnRowBadgesContent
            columnId={node.id}
            layoutSide={layoutSide}
            value={value}
          />
        </div>
      )
    },
    [node.id, value],
  )

  const isDescriptionDisplayed = useMemo(
    () => displayMode === DETAILED_DISPLAY_MODE && !!value?.description,
    [displayMode, value?.description],
  )

  const isTitleListLastRow = isLastInList

  if (!value) {
    return null
  }

  return (
    <div data-testid="ddl-index-node-viewer" className="flex flex-col ddlapi-property">
      <TitleRow
        data-precededby={precededBy}
        {...{ [ATTRIBUTE_DDL_LIST_LAST_ROW]: isTitleListLastRow || undefined }}
        value={indexTitle}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.body2}
        subheader={value.indexName || value.isUnique ? subheader : undefined}
        usage={TitleRowUsage.DdlApiProperty}
      />
      {isDescriptionDisplayed && (
        <TextRow
          data-precededby={PrecededBy.DDL_INDEX_ROW}
          value={value.description ?? ''}
          variant={TextValueVariant.body1}
          textFontWeight="normal"
          textColor={DEFAULT_LONG_TEXT_COLOR}
          usage={TextRowUsage.DdlApiProperty}
        />
      )}
    </div>
  )
}
