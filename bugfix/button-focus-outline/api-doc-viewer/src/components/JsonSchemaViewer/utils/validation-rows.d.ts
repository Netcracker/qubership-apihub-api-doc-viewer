import { JsonSchemaTreeNodeValue } from '../../../../../next-data-model/src/model/json-schema/types/node-value';
export declare const JsonSchemaValidationRowKeys: {
    readonly VALUE_LENGTH: "valueLength";
    readonly VALUE_PATTERN: "valuePattern";
    readonly VALUE_RANGE: "valueRange";
    readonly VALUE_MULTIPLE_OF: "valueMultipleOf";
    readonly PROPERTIES_COUNT: "propertiesCount";
    readonly ITEMS_COUNT: "itemsCount";
    readonly UNIQUE_ITEMS: "uniqueItems";
};
export type JsonSchemaValidationRowKey = typeof JsonSchemaValidationRowKeys[keyof typeof JsonSchemaValidationRowKeys];
export type JsonSchemaValidationRow = {
    key: JsonSchemaValidationRowKey;
    label: string;
    values: string[];
};
export declare class JsonSchemaValidationRows {
    private static formatBoundRangeChips;
    private static formatValueRangeChips;
    private static formatScalar;
    static resolve(value: JsonSchemaTreeNodeValue | null | undefined): JsonSchemaValidationRow[];
    static resolveListValues(values: unknown[]): string[];
    static sortByType(rows: JsonSchemaValidationRow[]): JsonSchemaValidationRow[];
}
