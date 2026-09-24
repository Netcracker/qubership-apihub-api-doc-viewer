import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
export declare function resolveCombinerBranchDisplayValue(node: JsonSchemaTreeNode): JsonSchemaTreeNodeValue | null;
/**
 * `N`'s own `childrenNodes()`/`nestedNodes()` always return nodes of that same concrete type at
 * runtime (a same-kind tree), but `ITreeNode` cannot express "returns `this`'s own type" for these
 * methods - same limitation `resolveActiveLeafNode` (this package's `resolve-combiner-selection.ts`)
 * already bridges the same way, for the same reason.
 */
export declare function resolveCombinerLeafStructuralChildren<N extends JsonSchemaTreeNode>(node: N): N[];
