import { SecurityDisplayLabels } from '../../../../../next-data-model/src/model/security/display/labels';
import { SecurityTreeNode } from '../../../../../next-data-model/src/model/security/types/aliases';
import { SecurityTreeNodeKinds } from '../../../../../next-data-model/src/model/security/types/node-kind';
import { FC, ReactElement } from '../../../../../../node_modules/react';
import { OpenApiBlock } from '../../OpenApiOperationViewer/OpenApiLayout';
import { SecuritySchemeNode } from './SecuritySchemeCardBase';
/** The Security section title of every API type. */
export declare const SECURITY_SECTION_TITLE = "Security";
export type SecuritySectionNode = SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY>;
export type SecurityAlternativeNode = SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_REQUIREMENT>;
/**
 * Building blocks of a Security section, shared by the API types: the toolbar row (alternatives, OR,
 * always shown), the selected alternative's content ("No authentication" text or its framed scheme
 * cards, AND) as layout elements. Each API type composes them with its own title row, card
 * (`OpenApiSecuritySchemeCard` / `AsyncApiSecuritySchemeCard`) and selection state.
 * Design: docs/design/openapi/entities/security.md, docs/design/async-api/features/security.md.
 */
/** The toolbar row as a layout element; `render` draws the API type's `SecurityToolbarRow` (it owns the selection). */
export declare function buildSecurityToolbarBlock(node: SecuritySectionNode, render: () => ReactElement): OpenApiBlock;
/**
 * The selected alternative's content as layout elements: its "No authentication" row or one element
 * per card (4px outside its border). `renderCard` draws the API type's card (keyed by the scheme id).
 */
export declare function buildSecurityContentBlocks(selected: SecurityAlternativeNode | undefined, renderCard: (scheme: SecuritySchemeNode) => ReactElement): OpenApiBlock[];
export type SecurityToolbarRowProps = {
    node: SecuritySectionNode;
    labels: SecurityDisplayLabels;
    /** The shown alternative (`resolveSelectedSecurityAlternative`). */
    selected: SecurityAlternativeNode | undefined;
    onSelect: (alternative: SecurityAlternativeNode) => void;
};
/** The alternatives toolbar; the selection lives with the API type's viewer. */
export declare const SecurityToolbarRow: FC<SecurityToolbarRowProps>;
