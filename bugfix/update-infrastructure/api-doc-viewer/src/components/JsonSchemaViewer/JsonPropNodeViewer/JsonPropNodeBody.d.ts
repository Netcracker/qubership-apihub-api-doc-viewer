import { FC } from '../../../../../../node_modules/react';
import { ExpandingMode } from '../../../types/internal/ExpandingMode';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { JsonPropNodePropsWithState, PropsWithDisabledNestingIndicatorTitle } from '../../../types/internal/PropsWithState';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
export type JsonPropNodeBodyProps = PropsWithoutChangesSummary<JsonPropNodePropsWithState & PropsWithDisabledNestingIndicatorTitle & {
    onToggleExpander: (mode?: ExpandingMode) => void;
    onToggleSort: () => void;
} & PropsWithChanges>;
export declare const JsonPropNodeBody: FC<JsonPropNodeBodyProps>;
