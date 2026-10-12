import { DiffRecord } from '../../../../api-data-model/src';
import { Diff } from '@netcracker/qubership-apihub-api-diff';
import { FC } from '../../../../../node_modules/react';
import { LayoutSide } from '../../types/internal/LayoutSide';
import { LayoutMode } from '../../types/LayoutMode';
import { NodeTitleData } from '../../types/NodeTitleData';
export type NodeTitleProps = NodeTitleData & {
    showRequired?: boolean;
    showNullable?: boolean;
    layoutMode?: LayoutMode;
    layoutSide?: LayoutSide;
    requiredChange?: Diff | DiffRecord;
    nullableChange?: Diff | DiffRecord;
    titleChange?: Diff;
};
export declare const NodeTitle: FC<NodeTitleProps>;
