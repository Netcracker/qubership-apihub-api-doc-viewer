import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { DdlApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { CHANGED_LAYOUT_SIDE, LayoutSide } from "@apihub/types/internal/LayoutSide"
import { FC, useCallback, useMemo } from "react"
import { DETAILED_DISPLAY_MODE } from "../../types/DisplayMode"
import { TextRow } from "../shared-components/TextRow/TextRow"
import { DEFAULT_LONG_TEXT_COLOR } from "../shared-components/TextRow/consts"
import { TextValue } from "../shared-components/TextValue/TextValue"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { ColumnRowBadges } from "./ColumnRowBadges"
import { TitleRowUsage } from "../shared-components/TitleRow/types"

type ColumnNodeViewerProps = WithPrecededByProps & {
  node: DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMN>
}

export const ColumnNodeViewer: FC<ColumnNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const displayMode = useDisplayMode()
  const value = node.value()

  const subheader = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_layoutSide: LayoutSide) => {
      if (!value) {
        return <></>
      }

      return (
        <div className="flex flex-wrap items-center gap-2">
          <TextValue
            value={value.columnType.label}
            variant={TextValueVariant.body}
            layoutSide={CHANGED_LAYOUT_SIDE}
            textFontWeight="normal"
          />
          <ColumnRowBadges value={value} />
        </div>
      )
    },
    [value],
  )

  const isDescriptionDisplayed = useMemo(
    () => displayMode === DETAILED_DISPLAY_MODE && !!value?.description,
    [displayMode, value?.description],
  )

  if (!value) {
    return null
  }

  return (
    <div data-testid="ddl-column-node-viewer" className="flex flex-col ddl-api-property">
      <TitleRow
        data-precededby={precededBy}
        value={value.columnName}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.body}
        subheader={subheader}
        usage={TitleRowUsage.DdlApiProperty}
      />
      {isDescriptionDisplayed && (
        <TextRow
          data-precededby={PrecededBy.DDL_COLUMN_ROW}
          value={value.description ?? ''}
          variant={TextValueVariant.h4}
          textFontWeight="normal"
          textColor={DEFAULT_LONG_TEXT_COLOR}
        />
      )}
    </div>
  )
}
