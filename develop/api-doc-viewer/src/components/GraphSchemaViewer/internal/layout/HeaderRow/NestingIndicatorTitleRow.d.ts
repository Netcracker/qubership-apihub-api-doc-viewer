import { DiffNodeMeta, DiffNodeValue } from '../../../../../../../api-data-model/src';
import { FC } from '../../../../../../../../node_modules/react';
import { PropsWithShift } from '../../../../../types/internal/PropsWithShift';
import { LayoutMode } from '../../../../../types/LayoutMode';
import { NodeTypeData } from '../../../../../types/NodeTypeData';
import { NodeTypeProps } from '../../../../common/NodeType';
export type NestingIndicatorTitleRowProps = PropsWithShift & {
    layoutMode: LayoutMode;
    depth: number;
    NodeType: FC<NodeTypeProps>;
    nodeTypeData: NodeTypeData;
    $nodeChange: DiffNodeMeta['$nodeChange'];
    $changes: DiffNodeValue['$changes'];
};
export declare const NestingIndicatorTitleRow: FC<NestingIndicatorTitleRowProps>;
