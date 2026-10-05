import { Diff } from '@netcracker/qubership-apihub-api-diff';
export type ValueRangeInitialData = Partial<{
    minimum: number;
    exclusiveMinimum: number | boolean;
    maximum: number;
    exclusiveMaximum: number | boolean;
}>;
export type ValueRangeDiffData = Partial<{
    minimum: Diff;
    exclusiveMinimum: Diff;
    maximum: Diff;
    exclusiveMaximum: Diff;
}>;
type ValueRange = Partial<{
    lower: string;
    upper: string;
}>;
type ValueRangeChange = Partial<{
    lower: Diff;
    upper: Diff;
}>;
type UseValueRangeValidationResult = {
    data: ValueRange;
    changes: ValueRangeChange;
    changesKeys: string[];
    visible: boolean;
};
export declare function useValueRangeValidation(data: ValueRangeInitialData, changes: ValueRangeDiffData, originalChangeKeys: string[]): UseValueRangeValidationResult;
export {};
