import { SelectorOption } from '../../shared-components/Selector/Selector';
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeKind } from '../../../../../next-data-model/src/model/json-schema/types/node-kind';
import { JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
import { NodeId } from '../../../../../next-data-model/src/utility-types';
export type CombinerSelections = ReadonlyMap<NodeId, NodeId>;
export type CombinerSelectorLevel<N extends JsonSchemaTreeNode = JsonSchemaTreeNode> = {
    combinerNode: N;
    nestedNodes: N[];
    selectedNestedNode: N;
    showSelector: boolean;
    combinerKindLabel: string | undefined;
};
/**
 * Shared combiner-node reads used by every sub-domain class below. All three members here are
 * `public` (not `protected`) because they are also genuine external entry points in their own
 * right - `JsonSchemaNodeViewer[WithDiffs]` call `isOwnerNode` directly to decide whether to
 * render a combiner or a plain schema node, and `resolveNestingIndicatorTitle` has its own
 * dedicated unit test - so `JsonSchemaCombiner` itself extends this base to re-expose them at the
 * top level alongside the nested `Display`/`Selection`/`NodeDiffs` sub-domains.
 */
declare abstract class JsonSchemaCombinerBase {
    static isOwnerNode(node: JsonSchemaTreeNode): boolean;
    static isNestedKind(kind: JsonSchemaTreeNodeKind): boolean;
    static resolveNestingIndicatorTitle(node: JsonSchemaTreeNode): string | undefined;
}
declare class Display extends JsonSchemaCombinerBase {
    static resolveBranchValue(node: JsonSchemaTreeNode): JsonSchemaTreeNodeValue | null;
    /**
     * `N`'s own `childrenNodes()`/`nestedNodes()` always return nodes of that same concrete type at
     * runtime (a same-kind tree), but `ITreeNode` cannot express "returns `this`'s own type" for
     * these methods - {@link Selection.resolveActiveLeafNode} bridges the same way, for the same
     * reason.
     */
    static resolveLeafStructuralChildren<N extends JsonSchemaTreeNode>(node: N): N[];
}
declare class Selection extends JsonSchemaCombinerBase {
    private static resolveSelectedNestedNode;
    static resolveSelectorLevels<N extends JsonSchemaTreeNode>(complexNode: N, selections: CombinerSelections): CombinerSelectorLevel<N>[];
    static resolveActiveLeafNode<N extends JsonSchemaTreeNode>(complexNode: N, selections: CombinerSelections): N;
    private static readonly EMPTY_SELECTIONS;
    /**
     * The leaf reached from `node` by always taking the first nested-combiner variant at every
     * level (ignoring any live user selection) - i.e. what an as-yet-unselected combiner option's
     * own type value would resolve to, recursively through nested combiners. Reuses
     * {@link resolveActiveLeafNode} with an empty selections map, since `resolveSelectedNestedNode`
     * already falls back to `nestedNodes[0]` when no selection is recorded for a given combiner id.
     */
    static resolveOptionLeafNode<N extends JsonSchemaTreeNode>(node: N): N;
    static applySelection(complexNode: JsonSchemaTreeNode, selections: CombinerSelections, combinerNodeId: NodeId, selectedNestedNodeId: NodeId): CombinerSelections;
}
declare class NodeDiffs extends JsonSchemaCombinerBase {
    /**
     * A combiner variant can itself be a nested combiner (e.g. a `oneOf` branch that is itself
     * `{ oneOf: [...] }`). The plain type-label resolution drills straight through to that nested
     * combiner's own first variant (via `Display.resolveBranchValue`'s `_fragment` proxy), so
     * without this suffix the option button reads as a leaf type when it actually opens another
     * selector. Applies recursively at any nesting depth - each option only reports its own
     * immediate nested-combiner kind, not the kind of combiners further down.
     */
    static resolveOptionTitleSuffix(nestedNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): string;
    /**
     * `title` defaults to the plain type-label + combiner-kind-suffix string (used as-is by tests
     * and any non-UI caller); the view layer overrides it with a rich, diff-aware render function
     * built from the shared TypeValue component stack - see `CombinerNodeViewer.tsx` and
     * `TypeValue/JsonSchemaCombinerOptionTypeValue[WithDiffs].tsx`.
     */
    static buildSelectorOption<N extends JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs>(nestedNode: N, index: number, title?: SelectorOption<N>["title"]): SelectorOption<N>;
}
/**
 * Palette of every combiner-domain (`oneOf`/`anyOf`/`allOf`) view helper, grouped two levels
 * deep like `JsonSchemaRowDiffs`: `isOwnerNode`/`isNestedKind` are top-level (inherited from
 * {@link JsonSchemaCombinerBase}, which this class also extends) since they are called directly
 * by `JsonSchemaNodeViewer[WithDiffs]`, while `Display`/`Selection`/`NodeDiffs` scope their own
 * sub-domain (e.g. `JsonSchemaCombiner.Selection.resolveSelectorLevels(...)`).
 */
export declare class JsonSchemaCombiner extends JsonSchemaCombinerBase {
    static readonly Display: typeof Display;
    static readonly Selection: typeof Selection;
    static readonly NodeDiffs: typeof NodeDiffs;
}
export {};
