import { LayoutSide } from '../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffsSeverities } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC, ReactElement } from '../../../../../node_modules/react';
export type RenderFunction = (layoutSide: LayoutSide) => ReactElement | null;
export type ServerAddressRowProps = {
    renderAddress: RenderFunction;
    diff?: ChangedPropertyMetaData;
    descendantDiffs?: NodeDescendantDiffs;
    diffsSeverities?: NodeDiffsSeverities;
};
export declare const ServerAddressRow: FC<ServerAddressRowProps>;
