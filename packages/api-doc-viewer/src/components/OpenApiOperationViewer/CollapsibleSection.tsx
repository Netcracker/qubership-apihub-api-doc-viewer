import { TitleRowProps, TitleRowUsage } from "../shared-components/TitleRow/types"
import { OpenApiBlock } from "./OpenApiLayout"
import { isOpenApiSectionExpanded, OpenApiViewState, useOpenApiViewState } from "./OpenApiViewStateContext"
import "./CollapsibleSection.css"

/** The title-row props of a collapsible 2nd-level section: its fixed expander column and the toggle. */
export type OpenApiSectionTitleRowProps = Pick<TitleRowProps, 'usage' | 'expandable' | 'expanded' | 'onClickExpander'>

/**
 * The expander of a collapsible section, read from the operation view state: expanded by default,
 * the title text and the caret both toggle it.
 */
export function useOpenApiSectionTitleRowProps(sectionNodeId: string): OpenApiSectionTitleRowProps {
  const view = useOpenApiViewState()
  return {
    usage: TitleRowUsage.OpenApiSection,
    expandable: true,
    expanded: isOpenApiSectionExpanded(view, sectionNodeId),
    onClickExpander: () => view.toggleCollapsed(sectionNodeId),
  }
}

/**
 * The elements of a collapsible section: its title row, then - while expanded - its content
 * elements, each indented past the expander column (`openapi-section-content`). Collapsed, the
 * section is its title row alone, so its tail edge is the title row.
 */
export function buildCollapsibleSectionElements(
  title: OpenApiBlock,
  content: readonly OpenApiBlock[],
  view: OpenApiViewState,
  sectionNodeId: string,
): [OpenApiBlock, ...OpenApiBlock[]] {
  return isOpenApiSectionExpanded(view, sectionNodeId) ? [title, ...content.map(indented)] : [title]
}

/** A content element under the section's title text: rows shifted by the expander column + row gap. */
function indented(block: OpenApiBlock): OpenApiBlock {
  return {
    ...block,
    payload: () => (
      <div key={block.id} className="openapi-section-content flex flex-col">
        {block.payload()}
      </div>
    ),
  }
}
