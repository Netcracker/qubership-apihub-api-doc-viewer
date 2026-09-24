import type { StoryObj } from "@storybook/react";
import { BuildFromDdlDebug } from "./BuildFromDdlDebug";
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import("./BuildFromDdlDebug").BuildFromDdlDebugProps>;
    argTypes: {
        ddlText: {
            control: "text";
        };
    };
    args: {
        ddlText: string;
    };
};
export default meta;
type Story = StoryObj<typeof BuildFromDdlDebug>;
export declare const Debug: Story;
