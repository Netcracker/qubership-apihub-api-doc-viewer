import { ActionType } from '@netcracker/qubership-apihub-api-diff';
type ReplaceAliasCondition = {
    actualReplacedValue?: unknown;
    expectedReplacedValue?: unknown;
};
export type ReplaceAliases = Partial<Record<ActionType, ReplaceAliasCondition>>;
export declare function useItemChangedFlags($action: ActionType | undefined, replaceAlias?: ReplaceAliases): {
    itemAdded: boolean;
    itemRemoved: boolean;
    itemReplaced: boolean;
};
export {};
