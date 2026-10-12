import { FC } from '../../../../../../node_modules/react';
import { GraphCombinerNodePropsWithState } from '../../../types/internal/PropsWithState';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
export type GraphCombinerNodeViewerProps = PropsWithoutChangesSummary<GraphCombinerNodePropsWithState & {
    onGlobalSelectNestedNode: (nodeId: string) => void;
} & PropsWithChanges>;
export declare const GraphCombinerNodeViewer: FC<GraphCombinerNodeViewerProps>;
