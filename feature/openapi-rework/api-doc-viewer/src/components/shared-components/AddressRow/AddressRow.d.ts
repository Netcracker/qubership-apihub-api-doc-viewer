import { WithPrecededByProps } from '../WithPrecededByProps';
import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC, ReactElement } from '../../../../../../node_modules/react';
/** Badge before the address: AsyncAPI action (SEND / RECEIVE), OpenAPI HTTP method. */
export type AddressRowBadge = {
    text: string;
    /** Tailwind background class (must be a literal class name in the caller's source). */
    colorClass: string;
};
export type AddressRowProps = WithPrecededByProps & {
    badge: AddressRowBadge | null;
    address: string;
    /** Content after the address, per side (OpenAPI: the deprecated tag when there is no title row). */
    trailing?: (layoutSide: LayoutSide) => ReactElement | null;
    diff?: ChangedPropertyMetaData;
    descendantDiffs?: NodeDescendantDiffs;
    diffsSeverities?: NodeDiffsSeverities;
};
export declare const AddressRow: FC<AddressRowProps>;
