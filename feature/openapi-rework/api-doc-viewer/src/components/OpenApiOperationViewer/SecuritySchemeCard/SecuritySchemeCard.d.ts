import { OpenApiTreeNode } from '../../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../../node_modules/react';
import { PrecededBy } from '../../shared-components/WithPrecededByProps';
type SchemeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY_SCHEME>;
type SecuritySchemeCardProps = {
    node: SchemeNode;
    /** What the card title row follows: the selector row for the first card, a card for the next ones. */
    precededBy: PrecededBy;
};
/** Framed card of one security scheme of the selected alternative. Design: entities/security.md -> "Scheme card". */
export declare const SecuritySchemeCard: FC<SecuritySchemeCardProps>;
export {};
