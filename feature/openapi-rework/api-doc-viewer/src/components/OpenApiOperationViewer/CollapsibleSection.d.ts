import { TitleRowProps } from '../shared-components/TitleRow/types';
import { StackBlock } from '../shared-components/Layout/StackLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
/** The title-row props of a collapsible 2nd-level section: its fixed expander column and the toggle. */
export type OpenApiSectionTitleRowProps = Pick<TitleRowProps, 'usage' | 'expandable' | 'expanded' | 'onClickExpander'>;
/**
 * The expander of a collapsible section, read from the operation view state: expanded by default,
 * the title text and the caret both toggle it.
 */
export declare function useOpenApiSectionTitleRowProps(sectionNodeId: string): OpenApiSectionTitleRowProps;
/**
 * The elements of a collapsible section: its title row, then - while expanded - its content
 * elements, each indented past the expander column (`openapi-section-content`). Collapsed, the
 * section is its title row alone, so its tail edge is the title row.
 */
export declare function buildCollapsibleSectionElements(title: StackBlock, content: readonly StackBlock[], view: OpenApiViewState, sectionNodeId: string): [StackBlock, ...StackBlock[]];
/**
 * A content element under the section's title text: rows shifted by the expander column + row gap.
 * For sections whose elements are already decided (the Body: `OpenApiBlockEdges.bodyElements`).
 */
export declare function indentSectionContent(block: StackBlock): StackBlock;
