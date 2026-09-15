import { LayoutSide } from '../../../types/internal/LayoutSide';
import { Diff } from "@netcracker/qubership-apihub-api-diff";
import { FC } from '../../../../../../node_modules/react';
export type JsonSchemaRequiredDiffIndicatorProps = {
    required: boolean;
    requiredDiff?: Diff;
    layoutSide?: LayoutSide;
};
export declare const JsonSchemaRequiredDiffIndicator: FC<JsonSchemaRequiredDiffIndicatorProps>;
