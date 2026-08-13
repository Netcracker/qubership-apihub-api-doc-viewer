import { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import type { ReactElement } from '../../../../../../node_modules/react';
import { WithListLastRowProps, WithPrecededByProps } from "../WithPrecededByProps";
export declare enum AdditionalInfoRowUsage {
    Default = "default",
    DdlApiProperty = "ddlapi-property",
    JsonSchemaValidation = "json-schema-validation"
}
export type AdditionalInfoRowLayoutOverrides = {
    xPaddingClass?: string;
    bodyClass?: string;
    minHeightClass?: string;
};
export type AdditionalInfoRowProps = WithPrecededByProps & WithListLastRowProps & AdditionalInfoRowLayoutOverrides & {
    label: string;
    subheader?: (layoutSide: LayoutSide) => ReactElement;
    diff?: ChangedPropertyMetaData;
    colorizingDiff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
    hideLevelIndicatorWhenSideEmpty?: boolean;
    usage?: AdditionalInfoRowUsage;
};
export type AdditionalInfoRowContentProps = AdditionalInfoRowProps & {
    layoutSide: LayoutSide;
};
