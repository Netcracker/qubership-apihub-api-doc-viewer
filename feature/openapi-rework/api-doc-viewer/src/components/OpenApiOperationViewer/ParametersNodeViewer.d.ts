import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
type ParametersNodeViewerProps = WithPrecededByProps & {
    node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.PARAMETERS> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS>;
    title: string;
    testId: string;
};
/** A parameter group or response headers: h3 title + the synthesized object schema. Design: entities/parameters.md. */
export declare const ParametersNodeViewer: FC<ParametersNodeViewerProps>;
export {};
