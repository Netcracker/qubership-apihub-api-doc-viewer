import { JsonSchemaDiffNodeValue, JsonSchemaDiffTreeNode } from '../../../../../../api-data-model/src';
export type UseValidationsReturnType = Partial<{
    any: {
        allowedValues?: unknown[];
    };
    string: {
        minLength?: number;
        maxLength?: number;
        pattern?: string;
    };
    number: {
        minimum?: number;
        maximum?: number;
        exclusiveMinimum?: number;
        exclusiveMaximum?: number;
        multipleOf?: number;
    };
    object: {
        allowedPropertyNames?: unknown[];
        minProperties?: number;
        maxProperties?: number;
    };
    array: {
        uniqueItems?: boolean;
        minItems?: number;
        maxItems?: number;
    };
}>;
export declare function useValidations(node?: JsonSchemaDiffTreeNode | null, nodeValue?: JsonSchemaDiffNodeValue | any | null): UseValidationsReturnType;
