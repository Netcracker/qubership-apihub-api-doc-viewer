import { GraphApiDiffTreeNode, GraphApiNodeData, GraphApiTreeNode, GraphSchemaDiffNodeValue, JsonSchemaDiffNodeValue, JsonSchemaDiffTreeNode } from '../../../api-data-model/src';
import { GraphPropNodePropsWithState, JsonPropNodePropsWithState } from './internal/PropsWithState';
import { CustomizationOptions } from '../contexts/CustomizationOptionsContext';
export type NodeTypeData = Partial<{
    brokenRef: string;
    type: string;
    nullable: boolean;
    title: string;
    qualifier: string;
    combiner: string;
}>;
export type NodeTypeDataOptions<S, N, V> = Partial<S> & {
    node: N | null;
    nodeValue?: V | null;
    customizationOptions?: CustomizationOptions;
};
export type JsonNodeTypeDataOptions = NodeTypeDataOptions<JsonPropNodePropsWithState, JsonSchemaDiffTreeNode, JsonSchemaDiffNodeValue | any>;
export type GraphNodeTypeDataOptions = NodeTypeDataOptions<GraphPropNodePropsWithState, GraphApiDiffTreeNode | GraphApiTreeNode, GraphSchemaDiffNodeValue | GraphApiNodeData>;
