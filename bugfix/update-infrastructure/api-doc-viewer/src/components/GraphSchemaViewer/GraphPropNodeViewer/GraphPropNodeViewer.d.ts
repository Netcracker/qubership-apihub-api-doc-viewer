import { FC } from '../../../../../../node_modules/react';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { GraphPropNodePropsWithState } from '../../../types/internal/PropsWithState';
export type GraphPropNodeViewerProps = PropsWithoutChangesSummary<GraphPropNodePropsWithState & PropsWithChanges>;
export declare const GraphPropNodeViewer: FC<GraphPropNodeViewerProps>;
