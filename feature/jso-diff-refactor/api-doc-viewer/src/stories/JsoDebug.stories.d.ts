import { JsoViewer } from '../components/JsoViewer/JsoViewer';
import type { StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../../node_modules/react';
type StoryArgs = ComponentProps<typeof JsoViewer> & {
    jsoText: string;
    componentsText?: string;
};
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<{
        source: object | null;
        displayMode?: import("..").DisplayMode;
        layoutMode?: import("..").LayoutMode;
        initialLevel?: number;
        supportJsonSchema?: boolean;
    }>;
    parameters: {};
    argTypes: {
        jsoText: {
            control: "text";
        };
        componentsText: {
            control: "text";
        };
        source: {
            control: {
                disable: true;
            };
            table: {
                disable: true;
            };
        };
    };
    args: {
        jsoText: string;
    };
};
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const Debug: Story;
