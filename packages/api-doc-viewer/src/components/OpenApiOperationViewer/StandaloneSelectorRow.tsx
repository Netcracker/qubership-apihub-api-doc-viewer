import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { buildDiffCauseByPathCausedAt } from "@apihub/utils/common/changes"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { ITreeNode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import {
  ChangedPropertyMetaData,
  NodeDiffsSeverities,
  NodeDiffsSeverityPlacemennt,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { ReactElement } from "react"
import { DiffFloatingBadgeWrapper } from "../shared-components/DiffFloatingBadgeWrapper/DiffFloatingBadgeWrapper"
import { OneSideLayout } from "../shared-components/Layout/OneSideLayout"
import { SideBySideLayout } from "../shared-components/Layout/SideBySideLayout"
import { Selector, SelectorOption } from "../shared-components/Selector/Selector"
import { SelectorVariant } from "../shared-components/Selector/types"
import { ATTRIBUTE_PRECEDED_BY, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { X_AXIS_PADDING_ROWS_ASYNC_API } from "../shared-styles/tailwind-classnames"

type StandaloneSelectorRowProps<N extends ITreeNode> = WithPrecededByProps & {
  options: SelectorOption<N>[]
  selectedOption: SelectorOption<N> | null
  onSelectOption: (option: SelectorOption<N>) => void
  /** Whole-section diff painting the row background. */
  diff?: ChangedPropertyMetaData
  diffsSeverities?: NodeDiffsSeverities
}

/**
 * A selector on its own row (security alternatives) - the `MessageSectionsViewer` row pattern.
 * Media-type and response-code selectors sit in title subheaders instead.
 */
export function StandaloneSelectorRow<N extends ITreeNode>(props: StandaloneSelectorRowProps<N>): ReactElement {
  const { options, selectedOption, onSelectOption, diff, diffsSeverities, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const layoutMode = useLayoutMode()
  const severity = diffsSeverities?.[NodeDiffsSeverityPlacemennt.SelectorRow]

  const renderSide = (layoutSide: LayoutSide): ReactElement => {
    const styles = diff ? (layoutSide === ORIGIN_LAYOUT_SIDE ? diff.styles.before : diff.styles.after) : undefined
    return (
      <div
        data-precededby={precededBy}
        className={`message-sections-selector flex w-full h-full ${X_AXIS_PADDING_ROWS_ASYNC_API} ${styles ? DiffsClassesBuilder.background(styles.backgroundColor) : ''}`}
      >
        <Selector
          options={options}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
          variant={SelectorVariant.Secondary}
          layoutSide={layoutSide}
        />
      </div>
    )
  }

  if (layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE) {
    return (
      <DiffFloatingBadgeWrapper diffType={severity?.type} diffTypeCause={buildDiffCauseByPathCausedAt(severity?.causedAt)} hidden={false}>
        <SideBySideLayout left={renderSide(ORIGIN_LAYOUT_SIDE)} right={renderSide(CHANGED_LAYOUT_SIDE)} />
      </DiffFloatingBadgeWrapper>
    )
  }
  return <OneSideLayout content={renderSide(CHANGED_LAYOUT_SIDE)} />
}
