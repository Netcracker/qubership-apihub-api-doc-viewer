import type { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ChangedPropertyMetaData, NodeDiffsSeverities, NodeDiffsSeverityPlacemennt } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
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
};
export type NestingIndicatorTitleRowContentProps = NestingIndicatorTitleRowProps & {
    layoutSide: LayoutSide;
};
