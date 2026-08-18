import { JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
import { JsonSchemaValidationRowKey } from "./validation-row-keys";
export type JsonSchemaValidationRow = {
    key: JsonSchemaValidationRowKey;
    label: string;
    values: string[];
};
export declare function resolveValidationRows(value: JsonSchemaTreeNodeValue | null | undefined): JsonSchemaValidationRow[];
export declare function resolveListValidationValues(values: unknown[]): string[];
