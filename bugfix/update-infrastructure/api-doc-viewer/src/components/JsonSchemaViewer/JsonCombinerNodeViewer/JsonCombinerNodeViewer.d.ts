import { FC } from '../../../../../../node_modules/react';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { JsonCombinerNodePropsWithState } from '../../../types/internal/PropsWithState';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
export type JsonCombinerNodeViewerProps = PropsWithoutChangesSummary<JsonCombinerNodePropsWithState & {
    onGlobalSelectNestedNode: (nodeId?: string) => void;
} & PropsWithChanges>;
export declare const JsonCombinerNodeViewer: FC<JsonCombinerNodeViewerProps>;
