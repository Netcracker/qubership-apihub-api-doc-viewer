/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { StoryObj } from '@storybook/react';
import type { ComponentProps } from '../../../../node_modules/react';
import { JsonSchemaDiffViewer } from '../components/JsonSchemaViewer/JsonSchemaDiffViewer';
type StoryArgs = ComponentProps<typeof JsonSchemaDiffViewer> & {
    beforeSchemaText: string;
    afterSchemaText: string;
    beforeComponentsText?: string;
    afterComponentsText?: string;
};
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import("..").JsonSchemaDiffViewerProps>;
    parameters: {};
    argTypes: {
        beforeSchemaText: {
            control: "text";
        };
        afterSchemaText: {
            control: "text";
        };
        beforeComponentsText: {
            control: "text";
        };
        afterComponentsText: {
            control: "text";
        };
        schema: {
            control: {
                disable: true;
            };
            table: {
                disable: true;
            };
        };
        metaKeys: {
            control: {
                disable: true;
            };
            table: {
                disable: true;
            };
        };
    };
    args: {
        beforeSchemaText: string;
        afterSchemaText: string;
        beforeComponentsText: string;
        afterComponentsText: string;
        layoutMode: "side-by-side-diffs";
        metaKeys: {
            diffsMetaKey: symbol;
            aggregatedDiffsMetaKey: symbol;
        };
    };
};
export default meta;
type Story = StoryObj<StoryArgs>;
export declare const Debug: Story;
