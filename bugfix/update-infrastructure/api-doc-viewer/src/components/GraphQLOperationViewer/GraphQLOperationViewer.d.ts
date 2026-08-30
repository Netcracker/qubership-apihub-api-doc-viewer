import { graphApiNodeKind } from '../../../../api-data-model/src';
import { FC } from '../../../../../node_modules/react';
import { DisplayMode } from '../../types/DisplayMode';
export type GraphQLOperationViewerProps = {
    source: unknown;
    operationType?: string;
    operationName?: string;
    expandedDepth?: number;
    displayMode?: DisplayMode;
};
export declare const GraphQLOperationViewer: FC<GraphQLOperationViewerProps>;
export type SplitOperationPathResult = {
    operationType: keyof typeof graphApiNodeKind;
    operationName: string;
};
