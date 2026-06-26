import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { DdlApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { FC, useCallback, useMemo } from "react"
import { DETAILED_DISPLAY_MODE } from "../../types/DisplayMode"
import { TextRow } from "../shared-components/TextRow/TextRow"
import { DEFAULT_LONG_TEXT_COLOR } from "../shared-components/TextRow/consts"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_DDL_LIST_LAST_ROW, ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { ColumnRowBadges } from "./ColumnRowBadges"
import {
  ADDITIONAL_INFO_LABEL_DEFAULT,
  ADDITIONAL_INFO_LABEL_GENERATED,
  ADDITIONAL_INFO_LABEL_VALUES,
} from "./conts"
import { DdlApiPropertyValue } from "./DdlApiPropertyValue/DdlApiPropertyValue"
import { TitleRowUsage } from "../shared-components/TitleRow/types"
import { AdditionalInfoRow } from "./AdditionalInfoRow/AdditionalInfoRow"
import { AdditionalInfoPiece } from "./AdditionalInfoPiece/AdditionalInfoPiece"

type ColumnNodeViewerProps = WithPrecededByProps & {
  node: DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMN>
  additionalInfoPrecededBy?: PrecededBy
  isLastInList?: boolean
}

export const ColumnNodeViewer: FC<ColumnNodeViewerProps> = (props) => {
  const {
    node,
    additionalInfoPrecededBy = PrecededBy.DDL_COLUMN_ROW,
    isLastInList = false,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

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
          <DdlApiPropertyValue
            isVisible={true}
            value={value.columnType.label}
            appearance="text"
          />
          <ColumnRowBadges value={value} />
        </div>
      )
    },
    [value],
  )

  const defaultAdditionalInfoSubheader = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_layoutSide: LayoutSide) => {
      if (!value?.defaultValue) {
        return <></>
      }

      return (
        <AdditionalInfoPiece
          isVisible={true}
          value={value.defaultValue}
        />
      )
    },
    [value],
  )

  const generatedAdditionalInfoSubheader = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_layoutSide: LayoutSide) => {
      if (!value?.generatedExpression) {
        return <></>
      }

      return (
        <AdditionalInfoPiece
          isVisible={true}
          value={value.generatedExpression}
        />
      )
    },
    [value],
  )

  const enumValuesAdditionalInfoSubheader = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_layoutSide: LayoutSide) => {
      if (!value?.enumValues?.length) {
        return <></>
      }

      return (
        <div className="flex flex-wrap items-center gap-2">
          {value.enumValues.map((enumValue, index) => (
            <AdditionalInfoPiece
              key={`${enumValue}-${index}`}
              isVisible={true}
              value={enumValue}
            />
          ))}
        </div>
      )
    },
    [value],
  )

  const isDescriptionDisplayed = useMemo(
    () => displayMode === DETAILED_DISPLAY_MODE && !!value?.description,
    [displayMode, value?.description],
  )

  const hasEnumValues = !!(value?.enumValues && value.enumValues.length > 0)
  const hasDefaultValue = !!value?.defaultValue
  const hasGeneratedExpression = !!value?.generatedExpression
  const hasAdditionalInfoRows = hasEnumValues || hasDefaultValue || hasGeneratedExpression

  const isTitleListLastRow = isLastInList && !hasAdditionalInfoRows
  const isEnumAdditionalInfoListLastRow = isLastInList && hasEnumValues && !hasDefaultValue && !hasGeneratedExpression
  const isDefaultAdditionalInfoListLastRow = isLastInList && hasDefaultValue && !hasGeneratedExpression
  const isGeneratedAdditionalInfoListLastRow = isLastInList && hasGeneratedExpression

  if (!value) {
    return null
  }

  return (
    <div data-testid="ddl-column-node-viewer" className="flex flex-col ddl-api-property">
      <TitleRow
        data-precededby={precededBy}
        {...{ [ATTRIBUTE_DDL_LIST_LAST_ROW]: isTitleListLastRow || undefined }}
        value={value.columnName}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.body2}
        subheader={subheader}
        usage={TitleRowUsage.DdlApiProperty}
      />
      {isDescriptionDisplayed && (
        <TextRow
          data-precededby={PrecededBy.DDL_COLUMN_ROW}
          value={value.description ?? ''}
          variant={TextValueVariant.body2}
          textFontWeight="normal"
          textColor={DEFAULT_LONG_TEXT_COLOR}
        />
      )}
      {hasEnumValues && (
        <AdditionalInfoRow
          data-precededby={additionalInfoPrecededBy}
          {...{ [ATTRIBUTE_DDL_LIST_LAST_ROW]: isEnumAdditionalInfoListLastRow || undefined }}
          label={ADDITIONAL_INFO_LABEL_VALUES}
          subheader={enumValuesAdditionalInfoSubheader}
        />
      )}
      {value.defaultValue && (
        <AdditionalInfoRow
          data-precededby={
            hasEnumValues
              ? PrecededBy.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW
              : additionalInfoPrecededBy
          }
          {...{ [ATTRIBUTE_DDL_LIST_LAST_ROW]: isDefaultAdditionalInfoListLastRow || undefined }}
          label={ADDITIONAL_INFO_LABEL_DEFAULT}
          subheader={defaultAdditionalInfoSubheader}
        />
      )}
      {value.generatedExpression && (
        <AdditionalInfoRow
          data-precededby={
            hasDefaultValue || hasEnumValues
              ? PrecededBy.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW
              : additionalInfoPrecededBy
          }
          {...{ [ATTRIBUTE_DDL_LIST_LAST_ROW]: isGeneratedAdditionalInfoListLastRow || undefined }}
          label={ADDITIONAL_INFO_LABEL_GENERATED}
          subheader={generatedAdditionalInfoSubheader}
        />
      )}
    </div>
  )
}
