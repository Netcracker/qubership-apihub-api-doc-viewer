import { NodeChangesSummary } from '../../../../api-data-model/src';
import { NodeId } from '../aliases/nodes';
export type PropsWithNestedChangesSummary = {
    $nestedChangesSummary?: Record<NodeId, NodeChangesSummary>;
};
