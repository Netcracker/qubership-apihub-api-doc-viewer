import { FC } from '../../../../../../node_modules/react';
import { ExpandingMode } from '../../../types/internal/ExpandingMode';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { GraphPropNodePropsWithState } from '../../../types/internal/PropsWithState';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
export type GraphPropNodeBodyProps = PropsWithoutChangesSummary<GraphPropNodePropsWithState & {
    onToggleExpander: (mode?: ExpandingMode) => void;
    onToggleSort: () => void;
} & PropsWithChanges>;
export declare const GraphPropNodeBody: FC<GraphPropNodeBodyProps>;
