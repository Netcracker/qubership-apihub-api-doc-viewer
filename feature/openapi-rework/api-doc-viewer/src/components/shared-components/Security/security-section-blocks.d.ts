import { ReactElement } from '../../../../../../node_modules/react';
import { StackBlock } from '../Layout/StackLayout';
import { SecuritySchemeNode } from './SecuritySchemeCardBase';
import { SecurityAlternativeNode, SecuritySectionNode } from './SecuritySectionBase';
/**
 * Layout elements of a Security section, shared by the API types: the toolbar row (alternatives, OR,
 * shown whenever there is an alternative) and the selected alternative's framed scheme cards (AND).
 * Each API type composes them with its own title row, card and selection state (`SecuritySectionBase`).
 */
/** The toolbar row as a layout element; `render` draws the API type's `SecurityToolbarRow` (it owns the selection). */
export declare function buildSecurityToolbarBlock(node: SecuritySectionNode, render: () => ReactElement): StackBlock;
/**
 * The selected alternative's content as layout elements: one element per card (4px outside its
 * border). `renderCard` draws the API type's card (keyed by the scheme id).
 */
export declare function buildSecurityContentBlocks(selected: SecurityAlternativeNode | undefined, renderCard: (scheme: SecuritySchemeNode) => ReactElement): StackBlock[];
