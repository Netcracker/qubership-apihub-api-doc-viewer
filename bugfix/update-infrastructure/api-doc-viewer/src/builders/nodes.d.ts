import { GraphNodeTitleDataOptions, JsonNodeTitleDataOptions, NodeTitleData } from '../types/NodeTitleData';
import { GraphNodeTypeDataOptions, JsonNodeTypeDataOptions, NodeTypeData } from '../types/NodeTypeData';
export declare function buildNodeTitleData(options: JsonNodeTitleDataOptions | GraphNodeTitleDataOptions): NodeTitleData;
export declare function buildNodeTypeData(options: JsonNodeTypeDataOptions | GraphNodeTypeDataOptions): NodeTypeData | null;
