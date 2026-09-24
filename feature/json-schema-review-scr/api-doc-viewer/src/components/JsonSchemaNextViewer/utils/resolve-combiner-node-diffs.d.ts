import { SelectorOption } from '../../shared-components/Selector/Selector';
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
/**
 * A combiner variant can itself be a nested combiner (e.g. a `oneOf` branch that is itself
 * `{ oneOf: [...] }`). The plain type-label resolution drills straight through to that nested
 * combiner's own first variant (via `resolveCombinerBranchDisplayValue`'s `_fragment` proxy), so
 * without this suffix the option button reads as a leaf type when it actually opens another
 * selector. Applies recursively at any nesting depth - each option only reports its own
 * immediate nested-combiner kind, not the kind of combiners further down.
 */
export declare function resolveCombinerOptionTitleSuffix(nestedNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): string;
/**
 * `title` defaults to the plain type-label + combiner-kind-suffix string (used as-is by tests
 * and any non-UI caller); the view layer overrides it with a rich, diff-aware render function
 * built from the shared TypeValue component stack - see `CombinerNodeViewer.tsx` and
 * `TypeValue/JsonSchemaCombinerOptionTypeValue[WithDiffs].tsx`.
 */
export declare function buildCombinerSelectorOption<N extends JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs>(nestedNode: N, index: number, title?: SelectorOption<N>["title"]): SelectorOption<N>;
