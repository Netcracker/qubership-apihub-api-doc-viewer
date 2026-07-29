import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { takeIndexFlagDiffs } from "@apihub/utils/ddlapi/column-row-badges"
import {
  buildDdlPropertyTitleRowDiffProps,
  takeNodeDiffIfPresent,
} from "@apihub/utils/ddlapi/node-level-diff"
import {
  isDdlPropertySubheaderVisible,
  resolveIndexPartNamesSideDisplay,
} from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs"
import { DdlApiTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
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
import { DdlCommaSeparatedListWithDiffs } from "./DdlCommaSeparatedListWithDiffs/DdlCommaSeparatedListWithDiffs"

type IndexNodeViewerWithDiffsProps = WithPrecededByProps & {
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>
  isLastInList?: boolean
}

export const IndexNodeViewerWithDiffs: FC<IndexNodeViewerWithDiffsProps> = (props) => {
  const { node, isLastInList = false, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const displayMode = useDisplayMode()
  const value = node.value()

  const nodeDiff = useMemo(() => takeNodeDiffIfPresent(node), [node])

  const titleRowDiffProps: Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities" | "highlightingMode"> =
    useMemo(() => buildDdlPropertyTitleRowDiffProps(node), [node])

  const flagDiffs = useMemo(() => takeIndexFlagDiffs(node), [node])

  const indexTitle = value?.indexName ?? ''

  const renderPartNames = useCallback(
    (layoutSide: LayoutSide) => {
      const display = resolveIndexPartNamesSideDisplay(node, layoutSide)
      return (
        <DdlCommaSeparatedListWithDiffs
          layoutSide={layoutSide}
          display={display}
        />
      )
    },
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

      const shouldRenderPartNames = value.partNames.length > 0

      return (
        <div className="flex flex-wrap items-center gap-2">
          {shouldRenderPartNames && renderPartNames(layoutSide)}
          <ColumnRowBadgesContent
            columnId={node.id}
            layoutSide={layoutSide}
            value={value}
            flagDiffs={flagDiffs}
          />
        </div>
      )
    },
    [flagDiffs, node.id, nodeDiff, renderPartNames, value],
  )

  const isDescriptionDisplayed = useMemo(
    () => displayMode === DETAILED_DISPLAY_MODE && !!value?.description,
    [displayMode, value?.description],
  )

  const isWholeNodeChanged = !!nodeDiff
  const isTitleListLastRow = isLastInList

  const hasSubheaderContent = !!value && (
    value.partNames.length > 0
    || value.isUnique
    || !!flagDiffs?.isUnique
  )

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
        subheader={hasSubheaderContent ? subheader : undefined}
        usage={TitleRowUsage.DdlApiProperty}
        {...titleRowDiffProps}
      />
      {isDescriptionDisplayed && !isWholeNodeChanged && (
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
