import { SecurityDisplayLabels } from '../../../../../next-data-model/src/model/security/display/labels';
import { SecurityTreeNode } from '../../../../../next-data-model/src/model/security/types/aliases';
import { SecurityTreeNodeKinds } from '../../../../../next-data-model/src/model/security/types/node-kind';
import { FC } from '../../../../../../node_modules/react';
export type SecuritySectionNode = SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY>;
/** The toolbar's complex container; its nested nodes are the alternatives. */
export type SecurityAlternativesNode = SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_ALTERNATIVES>;
export type SecurityAlternativeNode = SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_REQUIREMENT>;
/**
 * Pieces of a Security section, shared by the API types: the alternatives toolbar row here, the
 * section's layout elements in `security-section-blocks.ts`. Anonymous access (OpenAPI `{}`) is no
 * alternative: the API type's title row shows it. Each API type composes them with its own title
 * row, card (`OpenApiSecuritySchemeCard` / `AsyncApiSecuritySchemeCard`) and selection state.
 * Design: docs/design/openapi/entities/security.md, docs/design/async-api/features/security.md.
 */
export type SecurityToolbarRowProps = {
    /** The section's `securityAlternatives` container (`findSecurityAlternatives`): options, row diff and badge. */
    toolbar: SecurityAlternativesNode;
    labels: SecurityDisplayLabels;
    /** The shown alternative (`resolveSelectedSecurityAlternative`). */
    selected: SecurityAlternativeNode | undefined;
    onSelect: (alternative: SecurityAlternativeNode) => void;
};
/** The alternatives toolbar; the selection lives with the API type's viewer. */
export declare const SecurityToolbarRow: FC<SecurityToolbarRowProps>;
