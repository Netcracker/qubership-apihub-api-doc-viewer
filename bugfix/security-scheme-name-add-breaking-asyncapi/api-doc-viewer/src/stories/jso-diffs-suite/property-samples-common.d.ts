import type { Meta, StoryObj } from "@storybook/react";
import { type JsoCaseStoryComponentProps } from "./jso-diffs-utils";
export declare const JsoPropertySamplesStory: ({ beforeYaml, afterYaml, }: JsoCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
export type JsoPropertySamplesStoryMeta = Meta<typeof JsoPropertySamplesStory>;
export type JsoPropertySamplesStoryObj = StoryObj<JsoPropertySamplesStoryMeta>;
export declare const jsoPropertySamplesStoryMetaBase: {
    component: ({ beforeYaml, afterYaml, }: JsoCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
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
    };
};
export declare const createCaseStory: (caseId: string) => JsoPropertySamplesStoryObj;
