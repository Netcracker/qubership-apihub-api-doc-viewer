export declare const ATTRIBUTE_PRECEDED_BY = "data-precededby";
export declare const ATTRIBUTE_DDL_LIST_LAST_ROW = "data-ddl-list-last-row";
/** OpenAPI: the row ends its block, so the gap below it is a block gap (see the `OPENAPI_*` members). */
export declare const ATTRIBUTE_BLOCK_LAST_ROW = "data-block-last-row";
export declare enum PrecededBy {
    ROOT = "root",
    ADDRESS_ROW = "address-row",
    DESCRIPTION_ROW = "description-row",
    SUMMARY_ROW = "summary-row",
    MESSAGE_SECTION_SELECTOR = "message-section-selector",
    MESSAGE_SECTION_HEADER_HIGH_LEVEL = "message-section-header-high-level",
    MESSAGE_SECTION_HEADER_LOW_LEVEL = "message-section-header-low-level",
    JSON_SCHEMA_VIEWER = "json-schema-viewer",
    JSON_SCHEMA_PROPERTY = "json-schema-property",
    JSO_VIEWER = "jso-viewer",
    JSO_PROPERTY = "jso-property",
    BINDING_VERSION_ROW = "binding-version-row",
    SERVER_BLOCK = "server-block",
    SERVER_ADDRESS_ROW = "server-address-row",
    DDL_TABLE_HEADER_ROW = "ddl-table-header-row",
    DDL_TABLE_SCHEMA_ROW = "ddl-table-schema-row",
    DDL_TABLE_DESCRIPTION_ROW = "ddl-table-description-row",
    DDL_SECTION_HEADER = "ddl-section-header",
    DDL_COLUMN_ROW = "ddl-column-row",
    /** Follows a sibling column block that ended with an additional-info row. */
    DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW = "ddl-column-after-additional-info-row",
    DDL_INDEX_ROW = "ddl-index-row",
    /** The first row of the viewer. */
    OPENAPI_VIEWER_START = "openapi-viewer-start",
    /** Follows a row of the same block. */
    OPENAPI_BLOCK_ROW = "openapi-block-row",
    /** Starts a block: follows the last row of the previous block. */
    OPENAPI_BLOCK_START = "openapi-block-start",
    /** Starts a block after a block that ended with a nested JSON Schema / JSO viewer. */
    OPENAPI_AFTER_NESTED_VIEWER = "openapi-after-nested-viewer",
    /** The first row of a nested JSON Schema / JSO viewer, under a row of the same block. */
    OPENAPI_NESTED_VIEWER_START = "openapi-nested-viewer-start"
}
export type WithPrecededByProps = {
    [ATTRIBUTE_PRECEDED_BY]?: PrecededBy;
};
export type WithBlockLastRowProps = {
    [ATTRIBUTE_BLOCK_LAST_ROW]?: boolean;
};
export type WithListLastRowProps = {
    [ATTRIBUTE_DDL_LIST_LAST_ROW]?: boolean;
};
/** @deprecated Use {@link WithListLastRowProps} */
export type WithDdlListLastRowProps = WithListLastRowProps;
