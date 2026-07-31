import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { isDefined } from "@apihub/utils/common/checkers"
import { takeDiffSideBorderShadowColor } from "@apihub/utils/diffs/take-diff-side-border-shadow-color"
import { takeDiffSideIsFontMuted } from "@apihub/utils/diffs/take-diff-side-is-font-muted"
import { takeDiffSideTextHighlighterColor } from "@apihub/utils/diffs/take-diff-side-text-highlighter-color"
import { takeColumnFlagDiffs, takeColumnForeignKeyTargetDiffs } from "@apihub/utils/ddlapi/column-row-badges"
import {
  buildDdlPropertyTitleRowDiffProps,
  takeNodeDiffIfPresent,
} from "@apihub/utils/ddlapi/node-level-diff"
import { LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { NODE_LEVEL_DIFF_KEY } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  isDdlPropertySubheaderVisible,
  resolveColumnEnumValueSideItems,
  takeColumnDescriptionDiff,
  takeColumnEnumValueDiffs,
  takeColumnEnumValuesRowColorizingDiff,
  takeColumnDefaultValueDiff,
  takeColumnDefaultValueRowColorizingDiff,
  takeColumnGeneratedExpressionDiff,
  resolveColumnDefaultValueSideDisplay,
} from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs"
import { DdlApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { FC, useCallback, useMemo } from "react"
import { DETAILED_DISPLAY_MODE } from "../../types/DisplayMode"
import { TextRow } from "../shared-components/TextRow/TextRow"
import { DEFAULT_LONG_TEXT_COLOR } from "../shared-components/TextRow/consts"
import { TextRowUsage } from "../shared-components/TextRow/types"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { TitleRowProps, TitleRowUsage } from "../shared-components/TitleRow/types"
import { ATTRIBUTE_DDL_LIST_LAST_ROW, ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { ColumnRowBadgesContent } from "./ColumnRowBadges/ColumnRowBadgesContent"
import {
  ADDITIONAL_INFO_LABEL_DEFAULT,
  ADDITIONAL_INFO_LABEL_GENERATED,
  ADDITIONAL_INFO_LABEL_VALUES,
} from "./consts"
import { ColumnTypeLabelWithDiffs } from "./ColumnTypeLabelWithDiffs/ColumnTypeLabelWithDiffs"
import { AdditionalInfoRow } from "./AdditionalInfoRow/AdditionalInfoRow"
import { AdditionalInfoPiece } from "./AdditionalInfoPiece/AdditionalInfoPiece"

type ColumnNodeViewerWithDiffsProps = WithPrecededByProps & {
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>
  additionalInfoPrecededBy?: PrecededBy
  isLastInList?: boolean
  hideLevelIndicatorWhenSideEmpty?: boolean
}

export const ColumnNodeViewerWithDiffs: FC<ColumnNodeViewerWithDiffsProps> = (props) => {
  const {
    node,
    additionalInfoPrecededBy = PrecededBy.DDL_COLUMN_ROW,
    isLastInList = false,
    hideLevelIndicatorWhenSideEmpty = false,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  const displayMode = useDisplayMode()
  const value = node.value()

  const nodeDiff = useMemo(() => takeNodeDiffIfPresent(node), [node])

  // TitleRow applies styles.before/after.backgroundColor from this `diff` prop
  // (see TitleRowContent) across the whole title row, including the subheader.
  const titleRowDiffProps: Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities" | "highlightingMode"> =
    useMemo(() => buildDdlPropertyTitleRowDiffProps(node), [node])

  const flagDiffs = useMemo(() => takeColumnFlagDiffs(node), [node])
  const foreignKeyTargetDiffs = useMemo(() => takeColumnForeignKeyTargetDiffs(node), [node])
  const descriptionDiff = useMemo(
    () => takeColumnDescriptionDiff(node),
    [node],
  )
  const generatedExpressionDiff = useMemo(
    () => takeColumnGeneratedExpressionDiff(node),
    [node],
  )
  const enumValueDiffs = useMemo(
    () => takeColumnEnumValueDiffs(node),
    [node],
  )
  const enumValuesRowColorizingDiff = useMemo(
    () => takeColumnEnumValuesRowColorizingDiff(node),
    [node],
  )
  const defaultValueDiff = useMemo(
    () => takeColumnDefaultValueDiff(node),
    [node],
  )
  const defaultValueRowColorizingDiff = useMemo(
    () => takeColumnDefaultValueRowColorizingDiff(node),
    [node],
  )

  const subheader = useCallback(
    (layoutSide: LayoutSide) => {
      if (!value) {
        return <></>
      }

      if (!isDdlPropertySubheaderVisible(nodeDiff, layoutSide)) {
        return <></>
      }

      return (
        <div className="flex flex-wrap items-center gap-2">
          <ColumnTypeLabelWithDiffs
            node={node}
            layoutSide={layoutSide}
          />
          <ColumnRowBadgesContent
            columnId={node.id}
            layoutSide={layoutSide}
            value={value}
            flagDiffs={flagDiffs}
            foreignKeyTargetDiffs={foreignKeyTargetDiffs}
          />
        </div>
      )
    },
    [flagDiffs, foreignKeyTargetDiffs, node, nodeDiff, value],
  )

  const defaultAdditionalInfoSubheader = useCallback(
    (layoutSide: LayoutSide) => {
      const defaultValue = resolveColumnDefaultValueSideDisplay(node, layoutSide)
      if (!isDefined(defaultValue)) {
        return <></>
      }

      return (
        <AdditionalInfoPiece
          isVisible={true}
          value={defaultValue}
          textHighlighterColor={takeDiffSideTextHighlighterColor(defaultValueDiff, layoutSide)}
          borderShadowColor={takeDiffSideBorderShadowColor(defaultValueDiff, layoutSide)}
        />
      )
    },
    [defaultValueDiff, node],
  )

  const generatedAdditionalInfoSubheader = useCallback(
    (layoutSide: LayoutSide) => {
      const generatedExpression = (() => {
        const diff = generatedExpressionDiff?.data
        if (!diff) {
          return value?.generatedExpression
        }
        if (layoutSide === ORIGIN_LAYOUT_SIDE) {
          return isDiffRemove(diff) || isDiffReplace(diff)
            ? diff.beforeValue
            : undefined
        }
        return isDiffAdd(diff) || isDiffReplace(diff)
          ? diff.afterValue
          : undefined
      })()
      if (!isDefined(generatedExpression)) {
        return <></>
      }

      return (
        <AdditionalInfoPiece
          isVisible={true}
          value={generatedExpression}
          textHighlighterColor={takeDiffSideTextHighlighterColor(generatedExpressionDiff, layoutSide)}
        />
      )
    },
    [generatedExpressionDiff, value],
  )

  const enumValuesAdditionalInfoSubheader = useCallback(
    (layoutSide: LayoutSide) => {
      const sideItems = resolveColumnEnumValueSideItems(node, layoutSide)
      if (sideItems.length === 0) {
        return <></>
      }

      return (
        <div className="flex flex-wrap items-center gap-2">
          {sideItems.map((sideItem, index) => (
            <AdditionalInfoPiece
              key={`${sideItem.literal}-${index}`}
              isVisible={true}
              value={sideItem.literal}
              textHighlighterColor={takeDiffSideTextHighlighterColor(sideItem.diff, layoutSide)}
              borderShadowColor={takeDiffSideBorderShadowColor(sideItem.diff, layoutSide)}
              isFontMuted={takeDiffSideIsFontMuted(sideItem.diff, layoutSide)}
            />
          ))}
        </div>
      )
    },
    [node],
  )

  const isAdditionalInfoDisplayed = displayMode === DETAILED_DISPLAY_MODE
  const isWholeNodeChanged = !!nodeDiff

  const hasDescription = isAdditionalInfoDisplayed && (
    !!value?.description || !!descriptionDiff
  )

  const hasEnumValues = !!(
    (value?.enumValues && value.enumValues.length > 0)
    || enumValueDiffs
  )
  const hasDefaultValue = !!(
    isDefined(value?.defaultValue)
    || defaultValueDiff
    || defaultValueRowColorizingDiff
  )
  const hasGeneratedExpression = isDefined(value?.generatedExpression) || !!generatedExpressionDiff
  const hasAdditionalInfoRows = isAdditionalInfoDisplayed && (
    hasEnumValues || hasDefaultValue || hasGeneratedExpression
  )

  const isTitleListLastRow = isLastInList && !hasDescription && !hasAdditionalInfoRows
  const isDescriptionListLastRow = isLastInList && hasDescription && !hasAdditionalInfoRows
  const isEnumAdditionalInfoListLastRow = isLastInList && hasEnumValues && !hasDefaultValue && !hasGeneratedExpression
  const isDefaultAdditionalInfoListLastRow = isLastInList && hasDefaultValue && !hasGeneratedExpression
  const isGeneratedAdditionalInfoListLastRow = isLastInList && hasGeneratedExpression

  if (!value) {
    return null
  }

  return (
    <div data-testid="ddl-column-node-viewer" className="flex flex-col ddlapi-property">
      <TitleRow
        data-precededby={precededBy}
        {...{ [ATTRIBUTE_DDL_LIST_LAST_ROW]: isTitleListLastRow || undefined }}
        value={value.columnName}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.body2}
        subheader={subheader}
        usage={TitleRowUsage.DdlApiProperty}
        hideLevelIndicatorWhenSideEmpty={hideLevelIndicatorWhenSideEmpty}
        {...titleRowDiffProps}
      />
      {hasDescription && (
        <TextRow
          data-precededby={PrecededBy.DDL_COLUMN_ROW}
          {...{ [ATTRIBUTE_DDL_LIST_LAST_ROW]: isDescriptionListLastRow || undefined }}
          value={value.description ?? ''}
          variant={TextValueVariant.body2}
          textFontWeight="normal"
          textColor={DEFAULT_LONG_TEXT_COLOR}
          usage={TextRowUsage.DdlApiProperty}
          diff={descriptionDiff}
          diffsSeverities={node.diffsSeverities}
          hideLevelIndicatorWhenSideEmpty={hideLevelIndicatorWhenSideEmpty}
        />
      )}
      {isAdditionalInfoDisplayed && hasEnumValues && (
        <AdditionalInfoRow
          data-precededby={additionalInfoPrecededBy}
          {...{ [ATTRIBUTE_DDL_LIST_LAST_ROW]: isEnumAdditionalInfoListLastRow || undefined }}
          label={ADDITIONAL_INFO_LABEL_VALUES}
          subheader={enumValuesAdditionalInfoSubheader}
          colorizingDiff={enumValuesRowColorizingDiff}
          diffsSeverities={enumValueDiffs ? node.diffsSeverities : undefined}
          hideLevelIndicatorWhenSideEmpty={hideLevelIndicatorWhenSideEmpty}
        />
      )}
      {isAdditionalInfoDisplayed && !isWholeNodeChanged && hasDefaultValue && (
        <AdditionalInfoRow
          data-precededby={
            hasEnumValues
              ? PrecededBy.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW
              : additionalInfoPrecededBy
          }
          {...{ [ATTRIBUTE_DDL_LIST_LAST_ROW]: isDefaultAdditionalInfoListLastRow || undefined }}
          label={ADDITIONAL_INFO_LABEL_DEFAULT}
          subheader={defaultAdditionalInfoSubheader}
          colorizingDiff={defaultValueRowColorizingDiff}
          diffsSeverities={defaultValueDiff || defaultValueRowColorizingDiff ? node.diffsSeverities : undefined}
          hideLevelIndicatorWhenSideEmpty={hideLevelIndicatorWhenSideEmpty}
        />
      )}
      {isAdditionalInfoDisplayed && hasGeneratedExpression && (
        <AdditionalInfoRow
          data-precededby={
            hasDefaultValue || hasEnumValues
              ? PrecededBy.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW
              : additionalInfoPrecededBy
          }
          {...{ [ATTRIBUTE_DDL_LIST_LAST_ROW]: isGeneratedAdditionalInfoListLastRow || undefined }}
          label={ADDITIONAL_INFO_LABEL_GENERATED}
          subheader={generatedAdditionalInfoSubheader}
          diff={generatedExpressionDiff}
          colorizingDiff={node.diffs[NODE_LEVEL_DIFF_KEY]}
          diffsSeverities={node.diffsSeverities}
          hideLevelIndicatorWhenSideEmpty={hideLevelIndicatorWhenSideEmpty}
        />
      )}
    </div>
  )
}
