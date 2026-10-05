import { FC } from '../../../../../../node_modules/react';
import { JsonPropNodePropsWithState, PropsWithOverriddenKind } from '../../../types/internal/PropsWithState';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
export type JsonPropNodeViewerProps = PropsWithoutChangesSummary<JsonPropNodePropsWithState & PropsWithOverriddenKind & PropsWithChanges>;
export declare const JsonPropNodeViewer: FC<JsonPropNodeViewerProps>;
