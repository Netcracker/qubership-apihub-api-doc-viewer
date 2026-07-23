export type AsyncLevelContextValue = {
    beforeLevel: number;
    afterLevel: number;
};
export declare const AsyncLevelContext: import('../../../../../node_modules/react').Context<AsyncLevelContextValue | undefined>;
export declare function useAsyncLevelContext(): AsyncLevelContextValue | undefined;
