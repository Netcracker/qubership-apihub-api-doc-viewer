import { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffs, NodeDiffsSeverities, NodeDiffsSeverityPlacemennt } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
type NodeWithDiffState<V extends object = object> = {
    diffs: NodeDiffs<V>;
    descendantDiffs: NodeDescendantDiffs;
    diffsSeverities: NodeDiffsSeverities;
};
export type NodeDiffState<V extends object = object> = {
    nodeDiffs?: NodeDiffs<V>;
    nodeDescendantDiffs?: NodeDescendantDiffs;
    nodeDiffsSeverities?: NodeDiffsSeverities;
};
type BuildRowDiffPropsConfig<V extends object = object> = {
    diffKey?: keyof V;
    fallbackToNodeDiff?: boolean;
    includeDescendantDiffs?: boolean;
    diffsSeverityPlacement?: NodeDiffsSeverityPlacemennt;
    resolveDiff?: (diffs: NodeDiffs<V>, getDiffByKey: (key: keyof V) => ChangedPropertyMetaData | undefined) => ChangedPropertyMetaData | undefined;
};
export type RowDiffProps = {
    diff?: ChangedPropertyMetaData;
    descendantDiffs?: NodeDescendantDiffs;
    diffsSeverities?: NodeDiffsSeverities;
    diffsSeverityPlacement?: NodeDiffsSeverityPlacemennt;
};
export declare function useNodeDiffState<V extends object, N = unknown>(node: N, isNodeWithDiffs: (node: N) => node is N & NodeWithDiffState<V>): NodeDiffState<V>;
export declare function toNodeDiffState<V extends object>(node: NodeWithDiffState<V>): NodeDiffState<V>;
export declare function buildRowDiffProps<V extends object = object>(state: NodeDiffState<V>, config?: BuildRowDiffPropsConfig<V>): RowDiffProps;
export {};
