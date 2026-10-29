import { DisplayMode } from '../types/DisplayMode';
import { StoryObj } from '@storybook/react-vite';
type StoryArgs = {
    /** OpenAPI 3.0 / 3.1 documents, YAML or JSON; merged with `apiDiff`. */
    beforeSourceText: string;
    afterSourceText: string;
    /** `paths` key of the operation in the merged document (the after path of a renamed path); empty = the first operation. */
    path: string;
    /** HTTP method of the operation; empty = the first operation. */
    method: string;
    displayMode: DisplayMode;
    hideUnchangedNodes: boolean;
    devMode: boolean;
};
declare const meta: {
    title: string;
    component: (args: StoryArgs) => import("react").JSX.Element;
    argTypes: {
        beforeSourceText: {
            control: "text";
        };
        afterSourceText: {
            control: "text";
        };
        path: {
            control: "text";
        };
        method: {
            control: "text";
        };
        devMode: {
            control: "boolean";
        };
        hideUnchangedNodes: {
            readonly control: {
                readonly type: "boolean";
            };
            readonly table: {
                readonly category: "Viewer";
            };
        };
        displayMode: {
            readonly control: {
                readonly type: "select";
            };
            readonly options: readonly DisplayMode[];
            readonly table: {
                readonly category: "Viewer";
            };
        };
    };
    args: {
        beforeSourceText: string;
        afterSourceText: string;
        path: string;
        method: string;
        displayMode: "detailed";
        hideUnchangedNodes: false;
        devMode: true;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Debug: Story;
