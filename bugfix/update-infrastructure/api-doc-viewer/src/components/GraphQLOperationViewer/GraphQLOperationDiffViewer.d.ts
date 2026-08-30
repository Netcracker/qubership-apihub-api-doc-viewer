import { DiffMetaKeys } from '../../../../api-data-model/src';
import { DiffType } from '@netcracker/qubership-apihub-api-diff';
import { FC } from '../../../../../node_modules/react';
import { DisplayMode } from '../../types/DisplayMode';
import { LayoutMode } from '../../types/LayoutMode';
export type GraphQLOperationDiffViewerProps = {
    source: unknown;
    operationType?: string;
    operationName?: string;
    expandedDepth?: number;
    displayMode?: DisplayMode;
    layoutMode?: LayoutMode;
    filters?: ReadonlyArray<DiffType>;
    metaKeys: DiffMetaKeys;
};
export declare const GraphQLOperationDiffViewer: FC<GraphQLOperationDiffViewerProps>;
