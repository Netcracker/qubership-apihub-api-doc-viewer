import { SelectorOption } from '../../shared-components/Selector/Selector';
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { DiffAction } from "@netcracker/qubership-apihub-api-diff";
export type CombinerSelectorRowPresentation = {
    selectorRowDiff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
};
/**
 * Level-reduction action for one `CombinerSelectorRow` instance (one `selectorLevels` entry,
 * evaluated independently per level - so a nested combiner-in-combiner chain gets its own correct
 * answer per level). `undefined` means no reduction: either nothing qualifies, or
 * `CombinerNodeViewer`'s outer level-freeze wrap (case 1 applied to this same owner node, via
 * `takeJsonSchemaNestingIndicatorRowColorizingDiff`) already pins the ambient level at the owner's
 * own level, so an additional reduction here would go one level too low - hence the
 * `isNestedNodeWhollyAddedOrRemoved` guard below.
 */
export declare function resolveCombinerSelectorLevelReductionAction(combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): typeof DiffAction.add | typeof DiffAction.remove | undefined;
export declare function hasCombinerOwnerChanges(ownerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): boolean;
/**
 * Fallback for a combiner row that changed but was not itself wholly added/removed (e.g. a
 * description/type edit on an existing variant) - always a yellow "replace" indication.
 * Whole add/remove is handled upstream by {@link buildCombinerSelectorRowPresentation} via the
 * precomputed `nestingIndicatorRowColorizingDiff` from next-data-model.
 */
export declare function buildCombinerSelectorRowDiff(combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): ChangedPropertyMetaData | undefined;
export declare function buildCombinerSelectorRowDiffsSeverities(combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): NodeDiffsSeverities | undefined;
/**
 * A combiner variant can itself be a nested combiner (`oneOf`/`anyOf`/`allOf` inside a
 * variant). When that nested combiner node was wholly added or removed, next-data-model already
 * computes the correct single-side-only add/remove colorizing diff and matching severity for it
 * (`nestingIndicatorRowColorizingDiff` / `diffsSeverities[NestingIndicatorRow]` - the same fields
 * `NestingIndicatorTitleRow` consumes elsewhere), via the generic parent/container diff-inheritance
 * cascade in `JsonSchemaNodeDiffsAggregatorKindAny` - this applies recursively at any nesting
 * depth without extra wiring. Prefer that precomputed data over the ad-hoc yellow "replace"
 * fallback below, which is reserved for partial (non whole-node) changes.
 */
export declare function buildCombinerSelectorRowPresentation(combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): CombinerSelectorRowPresentation;
export declare function buildCombinerSelectorOption(nestedNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs, index: number): SelectorOption<JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs>;
