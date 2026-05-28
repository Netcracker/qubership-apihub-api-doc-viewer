import { WithPrecededByProps } from '../../shared-components/WithPrecededByProps';
import { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
export type AddressRowProps = WithPrecededByProps & {
    action: string;
    address: string;
    diff?: ChangedPropertyMetaData;
    descendantDiffs?: NodeDescendantDiffs;
    diffsSeverities?: NodeDiffsSeverities;
};
export declare const AddressRow: FC<AddressRowProps>;
