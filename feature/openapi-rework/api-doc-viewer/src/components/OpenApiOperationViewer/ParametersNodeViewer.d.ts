import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { OpenApiBlock } from './OpenApiLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
type ParametersNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.PARAMETERS> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS>;
type ParametersNodeViewerProps = {
    node: ParametersNode;
    title: string;
    testId: string;
};
/**
 * A parameter group / response Headers as a layout block: a collapsible section - its h3 title row
 * with the expander, then (expanded) the synthesized object schema (a nested viewer) when there is
 * one. Design: entities/parameters.md, features/collapsible-sections.md.
 */
export declare function buildParametersBlock(id: string, props: ParametersNodeViewerProps, view: OpenApiViewState): OpenApiBlock;
export {};
