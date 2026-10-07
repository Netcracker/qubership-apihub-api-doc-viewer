export type ValueRangeBounds = {
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
};
export type BuildValueRangeSchemaOptions = ValueRangeBounds & {
    type?: "integer" | "number";
    title?: string;
};
export declare const buildValueRangeSchema: ({ type, title, minimum, exclusiveMinimum, maximum, exclusiveMaximum, }?: BuildValueRangeSchemaOptions) => Record<string, unknown>;
export declare const formatValidationCaseTitle: (subset: string, label: string) => string;
export declare const formatValueRangeCaseTitle: (slug: string, label: string) => string;
