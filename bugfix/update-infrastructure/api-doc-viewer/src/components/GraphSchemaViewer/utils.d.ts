import { DiffMetaRecord, Diff } from '@netcracker/qubership-apihub-api-diff';
export declare function changesToChange(valuesLength: number, changes: DiffMetaRecord): Diff | undefined;
export declare function isObjectWithoutPayload(value: unknown): boolean;
export declare function isDefaultDeprecationReason(value?: string): boolean;
