import { FC } from '../../../../../../../node_modules/react';
import { PropsWithChanges } from '../../../../types/internal/PropsWithChanges';
import { PropsWithShift } from '../../../../types/internal/PropsWithShift';
import { JsonPropNodePropsWithState } from '../../../../types/internal/PropsWithState';
import { PropsWithoutChangesSummary } from '../../../../types/PropsWithoutChangesSummary';
export type ValidationsProps = PropsWithoutChangesSummary<PropsWithShift & JsonPropNodePropsWithState & PropsWithChanges>;
export declare const Validations: FC<ValidationsProps>;
