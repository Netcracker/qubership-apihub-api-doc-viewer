import { Selector, SelectorOption } from "@apihub/components/shared-components/Selector/Selector"
import { SelectorVariant } from "@apihub/components/shared-components/Selector/types"
import { X_AXIS_PADDING_ROWS_JSO } from "@apihub/components/shared-styles/tailwind-classnames"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { DOCUMENT_LAYOUT_MODE, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { FC, memo } from "react"
import { LevelIndicator } from "../../shared-components/LevelIndicator"
import { OneSideLayout } from "../../shared-components/Layout/OneSideLayout"
import { SideBySideLayout } from "../../shared-components/Layout/SideBySideLayout"
import { ATTRIBUTE_PRECEDED_BY, WithPrecededByProps } from "../../shared-components/WithPrecededByProps"

export type CombinerSelectorRowProps<N extends JsonSchemaTreeNode = JsonSchemaTreeNode> = WithPrecededByProps & {
  options: SelectorOption<N>[]
  selectedOption: SelectorOption<N> | null
  onSelectOption: (option: SelectorOption<N>) => void
}

type CombinerSelectorRowContentProps<N extends JsonSchemaTreeNode = JsonSchemaTreeNode> = CombinerSelectorRowProps<N> & {
  layoutSide: LayoutSide
}

const CombinerSelectorRowContent = memo(<N extends JsonSchemaTreeNode>(props: CombinerSelectorRowContentProps<N>) => {
  const {
    options,
    selectedOption,
    onSelectOption,
    layoutSide,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  const level = useLevelContext()

  return (
    <div
      data-testid="json-schema-combiner-selector-row-content"
      data-precededby={precededBy}
      className={`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 py-1 ${X_AXIS_PADDING_ROWS_JSO}`.trim()}
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

export const CombinerSelectorRow = memo(<N extends JsonSchemaTreeNode>(props: CombinerSelectorRowProps<N>) => {
  const layoutMode = useLayoutMode()

  switch (layoutMode) {
    case SIDE_BY_SIDE_DIFFS_LAYOUT_MODE:
      return (
        <SideBySideLayout
          left={<CombinerSelectorRowContent {...props} layoutSide={ORIGIN_LAYOUT_SIDE} />}
          right={<CombinerSelectorRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />}
        />
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
