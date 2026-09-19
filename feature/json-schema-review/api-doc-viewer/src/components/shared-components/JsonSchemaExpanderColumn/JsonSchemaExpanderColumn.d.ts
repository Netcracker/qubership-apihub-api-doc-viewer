import { FC } from '../../../../../../node_modules/react';
export declare const JSON_SCHEMA_EXPANDER_COLUMN_WIDTH_CLASS = "w-4 min-w-[16px] shrink-0 flex-none";
export declare const JsonSchemaRootExpanderOffset: FC;
export type JsonSchemaExpanderColumnProps = {
    isRoot: boolean;
    expandable: boolean;
    expanded?: boolean;
    onClick?: () => void;
};
export declare const JsonSchemaExpanderColumn: FC<JsonSchemaExpanderColumnProps>;
