import { FC } from '../../../../../../node_modules/react';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { PropsWithShift } from '../../../types/internal/PropsWithShift';
import { AnyNodePropsWithState } from '../../../types/internal/PropsWithState';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
export type AnnotationsProps = PropsWithoutChangesSummary<PropsWithShift & AnyNodePropsWithState & PropsWithChanges>;
export declare const Annotations: FC<AnnotationsProps>;
