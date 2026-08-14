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
