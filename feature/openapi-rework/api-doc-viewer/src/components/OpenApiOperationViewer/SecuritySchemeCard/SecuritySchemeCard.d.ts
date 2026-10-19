import { OpenApiTreeNode } from '../../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../../node_modules/react';
type SchemeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY_SCHEME>;
type SecuritySchemeCardProps = {
    node: SchemeNode;
};
/**
 * Framed card of one security scheme of the selected alternative: an opening frame row (border at its
 * top), the content rows with the separators around them, a closing frame row (border at its
 * bottom); frame row heights and tones from `OpenApiLayoutPlanner.frameRow`. The space outside the
 * border is the card's own half-gap in the separators of the Security level.
 * Design: entities/security.md -> "Scheme card", features/vertical-gaps.md.
 */
export declare const SecuritySchemeCard: FC<SecuritySchemeCardProps>;
export {};
