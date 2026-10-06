import { IGraphSchemaEnumValueType } from '../../../../../../../api-data-model/src';
import { FC } from '../../../../../../../../node_modules/react';
import { PropsWithChanges } from '../../../../../types/internal/PropsWithChanges';
import { PropsWithShift } from '../../../../../types/internal/PropsWithShift';
import { PropsWithoutChangesSummary } from '../../../../../types/PropsWithoutChangesSummary';
export type AllowedValuesRowProps = PropsWithoutChangesSummary<PropsWithShift & {
    values?: Record<string, IGraphSchemaEnumValueType>;
} & PropsWithChanges>;
export declare const AllowedValuesRow: FC<AllowedValuesRowProps>;
