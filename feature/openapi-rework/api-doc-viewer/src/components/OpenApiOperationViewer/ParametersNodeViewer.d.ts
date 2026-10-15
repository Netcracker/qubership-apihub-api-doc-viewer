import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { OpenApiBlock } from './OpenApiLayout';
type ParametersNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.PARAMETERS> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS>;
type ParametersNodeViewerProps = {
    node: ParametersNode;
    title: string;
    testId: string;
};
/** A parameter group / response Headers as a layout block (title row + synthesized schema). */
export declare function buildParametersBlock(id: string, props: ParametersNodeViewerProps): OpenApiBlock;
/** A parameter group or response headers: h3 title + the synthesized object schema. Design: entities/parameters.md. */
export declare const ParametersNodeViewer: FC<ParametersNodeViewerProps>;
export {};
