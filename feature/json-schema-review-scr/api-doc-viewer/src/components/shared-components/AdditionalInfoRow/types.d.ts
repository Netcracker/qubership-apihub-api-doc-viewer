import { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ChangedPropertyMetaData, NodeDiffsSeverities, NodeDiffsSeverityPlacemennt } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
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
    /** Defaults to `NodeDiffsSeverityPlacemennt.AdditionalInfoRow`. Pass a dedicated placement when
     * a viewer renders several `AdditionalInfoRow`s for one node (e.g. JSON Schema's Default /
     * Examples / Allowed values / validation-constraint rows) so each row's floating badge reflects
     * only its own diff, not the node's overall max severity. */
    diffsSeverityPlacement?: NodeDiffsSeverityPlacemennt;
    hideLevelIndicatorWhenSideEmpty?: boolean;
    usage?: AdditionalInfoRowUsage;
};
export type AdditionalInfoRowContentProps = AdditionalInfoRowProps & {
    layoutSide: LayoutSide;
};
