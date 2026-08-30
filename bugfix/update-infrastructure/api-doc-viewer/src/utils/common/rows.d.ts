import { IModelTreeNode } from '../../../../api-data-model/src';
export type StringifyItemOptions = {
    /** Show string values as-is (e.g. JSON Schema regex patterns). */
    literal?: boolean;
};
export declare function isLiteralDisplayItemKey(key: string | number): boolean;
export declare function stringifyItem(item: unknown | undefined, options?: StringifyItemOptions): string | undefined;
export declare function handleSeriesItem(key: string, item: unknown | undefined): string | undefined;
export declare function isSeriesItemEmpty(item: unknown, replacedItem: unknown): boolean;
export declare function listContainsNodeKind(node: IModelTreeNode<unknown, string, unknown> | null | undefined, ...kinds: string[]): boolean;
export declare function listContainsNodeParentKind(node: IModelTreeNode<unknown, string, unknown> | null | undefined, ...kinds: string[]): boolean;
