import { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import type { ReactElement } from '../../../../../../node_modules/react';
import { WithDdlListLastRowProps, WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type AdditionalInfoRowProps = WithPrecededByProps & WithDdlListLastRowProps & {
    label: string;
    subheader?: (layoutSide: LayoutSide) => ReactElement;
    diff?: ChangedPropertyMetaData;
    colorizingDiff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
};
export type AdditionalInfoRowContentProps = AdditionalInfoRowProps & {
    layoutSide: LayoutSide;
};
