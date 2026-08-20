import { NodeId } from '../../../../next-data-model/src/utility-types';
export type UnchangedBlocksContextValue = {
    hideUnchangedNodes: boolean;
    revealedBlockIds: ReadonlySet<NodeId>;
    revealBlock: (unchangedBlockId: NodeId) => void;
};
export declare const UnchangedBlocksContext: import('../../../../../node_modules/react').Context<UnchangedBlocksContextValue | null>;
export declare function useUnchangedBlocksContext(): UnchangedBlocksContextValue;
export declare function useOptionalUnchangedBlocksContext(): UnchangedBlocksContextValue | null;
export declare function useUnchangedBlocksContextValue(hideUnchangedNodes: boolean): UnchangedBlocksContextValue;
