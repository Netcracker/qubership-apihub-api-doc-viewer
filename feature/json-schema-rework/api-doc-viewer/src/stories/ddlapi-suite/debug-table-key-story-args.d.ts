import type { DebugTableKeyControls } from "./resolve-debug-table-key";
export declare const DEBUG_TABLE_KEY_ARG_TYPES: {
    useCustomTableKey: {
        control: "boolean";
        description: string;
    };
    tableSchemaName: {
        control: "text";
        if: {
            arg: string;
        };
        description: string;
    };
    tableName: {
        control: "text";
        if: {
            arg: string;
        };
        description: string;
    };
};
export declare const DEBUG_TABLE_KEY_DEFAULT_ARGS: Required<DebugTableKeyControls>;
