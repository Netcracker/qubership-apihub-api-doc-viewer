import { Selector, SelectorOption } from "@apihub/components/shared-components/Selector/Selector"
import { SelectorVariant } from "@apihub/components/shared-components/Selector/types"
import { NestingIndicatorTitleRowContent } from "@apihub/components/shared-components/NestingIndicatorTitleRow/NestingIndicatorTitleRowContent"
import { NestingIndicatorTitleRowUsage } from "@apihub/components/shared-components/NestingIndicatorTitleRow/types"
import { X_AXIS_PADDING_ROWS_JSO } from "@apihub/components/shared-styles/tailwind-classnames"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { DOCUMENT_LAYOUT_MODE, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { buildDiffCauseByPathCausedAt } from "@apihub/utils/common/changes"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import {
  ChangedPropertyMetaData,
  NodeDiffsSeverities,
  NodeDiffsSeverityPlacemennt,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { memo, useMemo } from "react"
import { DiffFloatingBadgeWrapper } from "../../shared-components/DiffFloatingBadgeWrapper/DiffFloatingBadgeWrapper"
import { LevelIndicator } from "../../shared-components/LevelIndicator"
import { OneSideLayout } from "../../shared-components/Layout/OneSideLayout"
import { SideBySideLayout } from "../../shared-components/Layout/SideBySideLayout"
import { ATTRIBUTE_PRECEDED_BY, WithPrecededByProps } from "../../shared-components/WithPrecededByProps"

export type CombinerSelectorRowProps<N extends JsonSchemaTreeNode = JsonSchemaTreeNode> = WithPrecededByProps & {
  combinerKindLabel?: string
  showSelector?: boolean
  options: SelectorOption<N>[]
  selectedOption: SelectorOption<N> | null
  onSelectOption: (option: SelectorOption<N>) => void
  selectorRowDiff?: ChangedPropertyMetaData
  diffsSeverities?: NodeDiffsSeverities
}

type CombinerSelectorRowContentProps<N extends JsonSchemaTreeNode = JsonSchemaTreeNode> = CombinerSelectorRowProps<N> & {
  layoutSide: LayoutSide
}

function resolveRowBackgroundClass(
  selectorRowDiff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
): string {
  if (!selectorRowDiff) {
    return ""
  }
  const backgroundColor = layoutSide === ORIGIN_LAYOUT_SIDE
    ? selectorRowDiff.styles.before.backgroundColor
    : selectorRowDiff.styles.after.backgroundColor
  return DiffsClassesBuilder.background(backgroundColor)
}

const CombinerSelectorControlsRow = memo(<N extends JsonSchemaTreeNode>(props: CombinerSelectorRowContentProps<N>) => {
  const {
    options,
    selectedOption,
    onSelectOption,
    selectorRowDiff,
    layoutSide,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  const level = useLevelContext()
  const rowBackgroundClass = useMemo(
    () => resolveRowBackgroundClass(selectorRowDiff, layoutSide),
    [layoutSide, selectorRowDiff],
  )

  return (
    <div
      data-testid="json-schema-combiner-selector-row-content"
      data-precededby={precededBy}
      className={`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 py-1 ${X_AXIS_PADDING_ROWS_JSO} ${rowBackgroundClass}`.trim()}
    >
      <div data-precededby={precededBy} className="level-indicator-column flex items-stretch self-stretch">
        <LevelIndicator level={level} />
        <div className="w-4" aria-hidden="true" />
      </div>
      <Selector
        options={options}
        selectedOption={selectedOption}
        onSelectOption={onSelectOption}
        variant={SelectorVariant.Primary}
        layoutSide={layoutSide}
      />
    </div>
  )
}) as <N extends JsonSchemaTreeNode>(props: CombinerSelectorRowContentProps<N>) => JSX.Element

const CombinerSelectorRowContent = memo(<N extends JsonSchemaTreeNode>(props: CombinerSelectorRowContentProps<N>) => {
  const {
    combinerKindLabel,
    showSelector = true,
    selectorRowDiff,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  return (
    <div
      data-testid="json-schema-combiner-selector-row"
      data-precededby={precededBy}
      className="json-schema-combiner-selector-row flex w-full flex-col"
    >
      {combinerKindLabel && (
        <NestingIndicatorTitleRowContent
          data-precededby={precededBy}
          title={combinerKindLabel}
          usage={NestingIndicatorTitleRowUsage.JsonSchema}
          lastInvisible
          layoutSide={props.layoutSide}
          diff={selectorRowDiff}
        />
      )}
      {showSelector && (
        <CombinerSelectorControlsRow {...props} />
      )}
    </div>
  )
}) as <N extends JsonSchemaTreeNode>(props: CombinerSelectorRowContentProps<N>) => JSX.Element

export const CombinerSelectorRow = memo(<N extends JsonSchemaTreeNode>(props: CombinerSelectorRowProps<N>) => {
  const {
    combinerKindLabel,
    showSelector = true,
    diffsSeverities,
  } = props
  const layoutMode = useLayoutMode()

  const diffSeverityRecord = useMemo(
    () => diffsSeverities?.[NodeDiffsSeverityPlacemennt.TitleRow],
    [diffsSeverities],
  )
  const diffType = useMemo(() => diffSeverityRecord?.type, [diffSeverityRecord])
  const diffTypeCause = useMemo(
    () => buildDiffCauseByPathCausedAt(diffSeverityRecord?.causedAt),
    [diffSeverityRecord],
  )

  if (!showSelector && !combinerKindLabel) {
    return null
  }

  switch (layoutMode) {
    case SIDE_BY_SIDE_DIFFS_LAYOUT_MODE:
      return (
        <DiffFloatingBadgeWrapper
          diffType={diffType}
          diffTypeCause={diffTypeCause}
          hidden={false}
        >
          <SideBySideLayout
            left={<CombinerSelectorRowContent {...props} layoutSide={ORIGIN_LAYOUT_SIDE} />}
            right={<CombinerSelectorRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />}
          />
        </DiffFloatingBadgeWrapper>
      )
    case DOCUMENT_LAYOUT_MODE:
      return (
        <OneSideLayout
          content={<CombinerSelectorRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />}
        />
      )
  }

  return (
    <div style={{ fontSize: 12, marginTop: 4, marginBottom: 4 }}>
      This layout mode ({layoutMode}) is not supported.
    </div>
  )
}) as <N extends JsonSchemaTreeNode>(props: CombinerSelectorRowProps<N>) => JSX.Element
