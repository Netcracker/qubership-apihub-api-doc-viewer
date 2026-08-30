import { AsyncApiOperationViewer } from '../components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import { StoryObj } from '@storybook/react-vite';
import { ComponentProps } from '../../../../node_modules/react';
type StoryArgs = ComponentProps<typeof AsyncApiOperationViewer> & {
    sourceText: string;
};
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import('..').AsyncApiOperationViewerProps>;
    argTypes: {
        source: {
            control: {
                disable: true;
            };
            table: {
                disable: true;
            };
        };
        sourceText: {
            control: "text";
        };
        displayMode: {
            control: "select";
            options: string[];
            defaultValue: string;
        };
    };
    args: {
        sourceText: string;
    };
};
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const Debug: Story;
