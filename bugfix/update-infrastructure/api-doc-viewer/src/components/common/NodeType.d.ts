import { FC } from '../../../../../node_modules/react';
import { NodeTypeData } from '../../types/NodeTypeData';
import { PropsWithoutChangesSummary } from '../../types/PropsWithoutChangesSummary';
import { LayoutSide } from '../../types/internal/LayoutSide';
import { PropsWithChanges } from '../../types/internal/PropsWithChanges';
export type NodeTypeProps = PropsWithoutChangesSummary<NodeTypeData & Partial<{
    layoutSide: LayoutSide;
    contentChangesColorizing: boolean;
    showNullable: boolean;
}> & PropsWithChanges>;
export declare const NodeType: FC<NodeTypeProps>;
