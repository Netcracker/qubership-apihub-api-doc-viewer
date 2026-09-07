import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
export type LevelPair = {
    beforeLevel: number;
    afterLevel: number;
};
/**
 * Next per-side nesting level for a node's children, given the current per-side level and this
 * node's own "whole node / uniformly-changed children" colorizing diff
 * (`takeJsonSchemaNestingIndicatorRowColorizingDiff`). Simply reads the pre-computed
 * `flags.before/after.increaseLevel` off that diff (set in next-data-model's
 * `JsonSchemaNodeDiffsAggregatorKindAny.withNestingLevelFlags`) - mirrors exactly how
 * `JsoPropertyNodeViewerWithDiffs` reads the same field for the same purpose. No
 * `undefined`/add/remove/replace branching here: the data layer already resolved that into a
 * plain boolean per side (increment vs. stay flat), including the "no diff at all" case
 * (`increaseLevel` absent -> treated as "increment", via `?? true`).
 */
export declare function resolveNextLevelPair(currentBeforeLevel: number, currentAfterLevel: number, colorizingDiff: ChangedPropertyMetaData | undefined): LevelPair;
