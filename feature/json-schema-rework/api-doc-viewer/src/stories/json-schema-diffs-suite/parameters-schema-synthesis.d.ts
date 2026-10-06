import { DiffMetaRecord, DIFF_META_KEY } from '@netcracker/qubership-apihub-api-diff';
type SynthesizedSchema = {
    type: "object";
    properties: Record<PropertyKey, unknown>;
    required: string[] & {
        [DIFF_META_KEY]?: DiffMetaRecord;
    };
};
export declare const synthesizeParametersSchema: (parameters: unknown) => SynthesizedSchema;
/** Merges two single-operation OpenAPI documents and synthesizes their parameters schema. */
export declare const createParametersSchemaFromOpenApiPair: (beforeYaml: string, afterYaml: string) => SynthesizedSchema;
export {};
