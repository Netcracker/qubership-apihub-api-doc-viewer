import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
export type ParametersNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.PARAMETERS> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS>;
type ParametersTitleRowProps = {
    node: ParametersNode;
    title: string;
};
/** A parameter group / response Headers title (h3) with the section expander. Layout block: `parameters-blocks.tsx`. */
export declare const ParametersTitleRow: FC<ParametersTitleRowProps>;
export {};
