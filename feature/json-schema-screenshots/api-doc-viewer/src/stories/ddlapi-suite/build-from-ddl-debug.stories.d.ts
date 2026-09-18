import type { StoryObj } from "@storybook/react";
import { BuildFromDdlDebug } from "./BuildFromDdlDebug";
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import("./BuildFromDdlDebug").BuildFromDdlDebugProps>;
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
        ddlText: {
            control: "text";
        };
    };
    args: {
        tableName: string;
        useCustomTableKey: boolean;
        tableSchemaName: string;
        ddlText: string;
    };
};
export default meta;
type Story = StoryObj<typeof BuildFromDdlDebug>;
export declare const Debug: Story;
