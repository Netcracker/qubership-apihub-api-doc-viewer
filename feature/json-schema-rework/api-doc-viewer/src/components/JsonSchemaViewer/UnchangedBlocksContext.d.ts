import { NodeId } from '../../../../next-data-model/src/utility-types';
import { JsonSchemaDiffsNodesVisibilityMode } from "./JsonSchemaDiffsNodesVisibilityMode";
export type UnchangedBlocksContextValue = {
    /** Source of truth - see JsonSchemaDiffsNodesVisibilityMode.ts for why this is a mode, not a bare boolean. */
    mode: JsonSchemaDiffsNodesVisibilityMode;
    /** Derived from `mode` (`mode !== "show-all"`) - kept as a plain boolean for the existing
     * consumers (SchemaNodeViewer, CombinerNodeViewer, SchemaNodeChildrenListWithDiffs) that only
     * ever needed the binary "collapse unchanged content or not" answer, and for the next-data-model
     * calls that still take a boolean. Stays correct without touching those call sites once a third
     * mode is added, since every non-"show-all" mode collapses unchanged content the same way. */
    hideUnchangedNodes: boolean;
    revealedBlockIds: ReadonlySet<NodeId>;
    revealBlock: (unchangedBlockId: NodeId) => void;
};
export declare const UnchangedBlocksContext: import('../../../../../node_modules/react').Context<UnchangedBlocksContextValue | null>;
export declare function useUnchangedBlocksContext(): UnchangedBlocksContextValue;
export declare function useOptionalUnchangedBlocksContext(): UnchangedBlocksContextValue | null;
export declare function useUnchangedBlocksContextValue(mode: JsonSchemaDiffsNodesVisibilityMode): UnchangedBlocksContextValue;
