import { DiffNodeValue } from '../../../../../api-data-model/src';
import { FC } from '../../../../../../node_modules/react';
import { NodeId } from '../../../types/aliases/nodes';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { PropsWithNestedChangesSummary } from '../../../types/internal/PropsWithChangesSummary';
import { NodeTypeData } from '../../../types/NodeTypeData';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
export type SelectNestedNodeRowProps = PropsWithoutChangesSummary<{
    nodesTypeData: Record<NodeId, NodeTypeData & Pick<DiffNodeValue, '$changes'>>;
    selectedNodeId?: NodeId;
    combiner?: string;
    onSelect: (newSelectedNodeId?: NodeId) => void;
} & PropsWithChanges & PropsWithNestedChangesSummary>;
export declare const SelectNestedNodeRow: FC<SelectNestedNodeRowProps>;
