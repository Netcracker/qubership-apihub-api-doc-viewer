import { NodeTypeData } from '../NodeTypeData';
import { DiffNodeMeta, DiffNodeValue } from '../../../../api-data-model/src';
export interface NestingIndicatorTitleData {
    nodeTypeData: NodeTypeData;
    nodeDepth: number;
    $nodeChange: DiffNodeMeta['$nodeChange'];
    $changes: DiffNodeValue['$changes'];
}
export interface GraphSchemaNestingIndicatorTitleData extends NestingIndicatorTitleData {
    $argsChange: DiffNodeMeta['$nodeChange'];
}
