import { GraphApiNodeData, GraphSchemaNodeValue } from '../../../../../../api-data-model/src';
import { FC } from '../../../../../../../node_modules/react';
import { PropsWithChanges } from '../../../../types/internal/PropsWithChanges';
import { PropsWithNodeValue } from '../../../../types/internal/PropsWithNodeValue';
import { PropsWithShift } from '../../../../types/internal/PropsWithShift';
import { PropsWithoutChangesSummary } from '../../../../types/PropsWithoutChangesSummary';
export type ValidationsProps = PropsWithoutChangesSummary<PropsWithShift & PropsWithNodeValue<GraphSchemaNodeValue | GraphApiNodeData> & PropsWithChanges>;
export declare const Validations: FC<ValidationsProps>;
