export type AsyncLevelContextValue = {
    beforeLevel: number;
    afterLevel: number;
};
export declare const AsyncLevelContext: import('../../../../../node_modules/react').Context<AsyncLevelContextValue>;
export declare function useAsyncLevelContext(): AsyncLevelContextValue;
