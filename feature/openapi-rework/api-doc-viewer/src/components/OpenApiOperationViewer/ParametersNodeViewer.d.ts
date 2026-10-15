import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
import { OpenApiSectionTail } from './section-preceded-by';
type ParametersNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.PARAMETERS> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS>;
type ParametersNodeViewerProps = WithPrecededByProps & {
    node: ParametersNode;
    /** What the row after the section assumes about its end (see `OpenApiSectionEntry`). */
    closing: OpenApiSectionTail;
    title: string;
    testId: string;
};
/** How a parameter group / response headers section ends: with its schema, or with its title row. */
export declare function resolveParametersTail(node: ParametersNode): OpenApiSectionTail;
/** A parameter group or response headers: h3 title + the synthesized object schema. Design: entities/parameters.md. */
export declare const ParametersNodeViewer: FC<ParametersNodeViewerProps>;
export {};
