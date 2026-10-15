import { OpenApiTreeNode } from '../../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../../node_modules/react';
type SchemeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY_SCHEME>;
type SecuritySchemeCardProps = {
    node: SchemeNode;
};
/** Framed card of one security scheme of the selected alternative. Design: entities/security.md -> "Scheme card". */
export declare const SecuritySchemeCard: FC<SecuritySchemeCardProps>;
export {};
