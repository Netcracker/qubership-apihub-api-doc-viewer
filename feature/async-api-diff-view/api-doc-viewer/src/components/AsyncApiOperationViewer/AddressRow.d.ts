import { ChangedPropertyMetaData } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../node_modules/react';
type AddressRowProps = {
    action: string;
    address: string;
    diff?: ChangedPropertyMetaData;
};
export declare const AddressRow: FC<AddressRowProps>;
export {};
