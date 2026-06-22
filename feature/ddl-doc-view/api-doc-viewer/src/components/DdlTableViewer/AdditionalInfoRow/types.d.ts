import { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ReactElement } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type AdditionalInfoRowProps = WithPrecededByProps & {
    label: string;
    subheader?: (layoutSide: LayoutSide) => ReactElement;
};
export type AdditionalInfoRowContentProps = AdditionalInfoRowProps & {
    layoutSide: LayoutSide;
};
