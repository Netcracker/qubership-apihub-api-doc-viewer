import { DisplayMode } from '../types/DisplayMode';
import { StoryObj } from '@storybook/react-vite';
type StoryArgs = {
    /** OpenAPI 3.0 / 3.1 document, YAML or JSON. */
    sourceText: string;
    /** `paths` key of the operation; empty = the first operation of the document. */
    path: string;
    /** HTTP method of the operation; empty = the first operation of the document. */
    method: string;
    displayMode: DisplayMode;
    devMode: boolean;
};
declare const meta: {
    title: string;
    component: ({ sourceText, path, method, displayMode, devMode }: StoryArgs) => import("react").JSX.Element;
    argTypes: {
        sourceText: {
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
        sourceText: string;
        path: string;
        method: string;
        displayMode: "detailed";
        devMode: true;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Debug: Story;
