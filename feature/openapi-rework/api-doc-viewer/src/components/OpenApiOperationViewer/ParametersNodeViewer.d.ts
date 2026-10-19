import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { OpenApiBlock } from './OpenApiLayout';
type ParametersNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.PARAMETERS> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS>;
type ParametersNodeViewerProps = {
    node: ParametersNode;
    title: string;
    testId: string;
};
/**
 * A parameter group / response Headers as a layout block: its h3 title row, then the synthesized
 * object schema (a nested viewer) when there is one. Design: entities/parameters.md.
 */
export declare function buildParametersBlock(id: string, props: ParametersNodeViewerProps): OpenApiBlock;
export {};
