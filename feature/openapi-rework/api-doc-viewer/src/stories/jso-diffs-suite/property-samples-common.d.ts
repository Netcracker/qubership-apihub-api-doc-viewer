import { Meta, StoryObj } from '@storybook/react-vite';
import { JsoCaseStoryComponentProps } from './jso-diffs-utils';
export declare const JsoPropertySamplesStory: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: JsoCaseStoryComponentProps) => import("react").JSX.Element;
export type JsoPropertySamplesStoryMeta = Meta<typeof JsoPropertySamplesStory>;
export type JsoPropertySamplesStoryObj = StoryObj<JsoPropertySamplesStoryMeta>;
export declare const jsoPropertySamplesStoryMetaBase: {
    component: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: JsoCaseStoryComponentProps) => import("react").JSX.Element;
    argTypes: {
        beforeYaml: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        afterYaml: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        hideUnchangedNodes: {
            control: {
                type: "boolean";
            };
            table: {
                category: string;
            };
            description: string;
        };
    };
};
export declare const createCaseStory: (caseId: string) => JsoPropertySamplesStoryObj;
