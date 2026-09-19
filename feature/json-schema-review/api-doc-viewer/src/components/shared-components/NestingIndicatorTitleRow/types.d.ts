import type { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ChangedPropertyMetaData, NodeDiffsSeverities, NodeDiffsSeverityPlacemennt } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import type { DiffAction } from "@netcracker/qubership-apihub-api-diff";
import type { ReactNode } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from "../WithPrecededByProps";
export declare enum NestingIndicatorTitleRowUsage {
    Default = "default",
    JsonSchema = "json-schema"
}
export type NestingIndicatorTitleRowProps = WithPrecededByProps & {
    title: ReactNode | ((layoutSide: LayoutSide) => ReactNode);
    usage?: NestingIndicatorTitleRowUsage;
    lastInvisible?: boolean;
    diff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
    diffsSeverityPlacement?: NodeDiffsSeverityPlacemennt;
    /** JSON Schema combiner-selector-row level reduction only; unset for every other row/usage. */
    levelReductionAction?: typeof DiffAction.add | typeof DiffAction.remove;
};
export type NestingIndicatorTitleRowContentProps = NestingIndicatorTitleRowProps & {
    layoutSide: LayoutSide;
};
