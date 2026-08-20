import type { StoryObj } from "@storybook/react";
import type { ComponentProps } from '../../../../../node_modules/react';
import { BuildFromDdlDiffsDebug } from "./BuildFromDdlDiffsDebug";
type StoryArgs = ComponentProps<typeof BuildFromDdlDiffsDebug>;
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import("./BuildFromDdlDiffsDebug").BuildFromDdlDiffsDebugProps>;
    argTypes: {
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
        beforeSql: {
            control: "text";
        };
        afterSql: {
            control: "text";
        };
        displayMode: {
            control: "select";
            options: string[];
            defaultValue: string;
        };
    };
    args: {
        useCustomTableKey: boolean;
        tableSchemaName: string;
        tableName: string;
        beforeSql: string;
        afterSql: string;
        displayMode: "detailed";
    };
};
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const Debug: Story;
