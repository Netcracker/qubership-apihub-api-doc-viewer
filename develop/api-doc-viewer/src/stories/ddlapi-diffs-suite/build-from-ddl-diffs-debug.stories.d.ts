import { StoryObj } from '@storybook/react-vite';
import { ComponentProps } from '../../../../../node_modules/react';
import { BuildFromDdlDiffsDebug } from './BuildFromDdlDiffsDebug';
type StoryArgs = ComponentProps<typeof BuildFromDdlDiffsDebug>;
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./BuildFromDdlDiffsDebug').BuildFromDdlDiffsDebugProps>;
    argTypes: {
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
        beforeSql: string;
        afterSql: string;
        displayMode: "detailed";
    };
};
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const Debug: Story;
