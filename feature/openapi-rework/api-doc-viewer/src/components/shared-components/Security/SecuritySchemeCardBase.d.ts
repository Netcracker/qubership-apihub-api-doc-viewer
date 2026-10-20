import { SecurityPresentation } from '../../../../../next-data-model/src/model/security/presentation';
import { SecurityTreeNode } from '../../../../../next-data-model/src/model/security/types/aliases';
import { SecurityTreeNodeKinds } from '../../../../../next-data-model/src/model/security/types/node-kind';
import { FC } from '../../../../../../node_modules/react';
import { TextValueVariant } from '../TextValue/types';
export type SecuritySchemeNode = SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_SCHEME>;
/** Props of the API-type cards (`OpenApiSecuritySchemeCard`, `AsyncApiSecuritySchemeCard`). */
export type SecuritySchemeCardProps = {
    node: SecuritySchemeNode;
};
type SecuritySchemeCardBaseProps = SecuritySchemeCardProps & {
    /** Labels and row visibility of the API type (data-layer instances). */
    presentation: SecurityPresentation;
    /** Scheme name size; smaller than the section title it sits under (default h4 under an h2 / h3 title). */
    titleVariant?: TextValueVariant;
};
/**
 * Framed card of one security scheme of the selected alternative, for every API type: an opening
 * frame row (border at its top), the content rows with the separators around them, a closing frame
 * row (border at its bottom); frame row heights and tones from `OpenApiLayoutPlanner.frameRow`. The
 * space outside the border is the card's own half-gap in the separators of the Security level.
 * Labels (scheme types, unresolved text) and which rows a scheme type has come from `presentation`.
 * Design: docs/design/openapi/entities/security.md -> "Scheme card", docs/design/async-api/features/security.md.
 */
export declare const SecuritySchemeCardBase: FC<SecuritySchemeCardBaseProps>;
export {};
