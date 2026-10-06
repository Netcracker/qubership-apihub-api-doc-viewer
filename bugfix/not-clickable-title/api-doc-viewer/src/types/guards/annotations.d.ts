import { Diff, DiffMetaRecord } from '@netcracker/qubership-apihub-api-diff';
type DeprecatedWithReason = {
    reason: string;
};
export declare function hasDeprecationReason(deprecated?: boolean | Record<string, string> | DeprecatedWithReason, deprecatedChanges?: Diff | DiffMetaRecord): deprecated is DeprecatedWithReason;
export {};
