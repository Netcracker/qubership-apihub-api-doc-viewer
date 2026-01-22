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
import { AsyncApiOperationViewer } from '../components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { StoryObj } from '@storybook/react';
import type { ComponentProps } from '../../../../node_modules/react';
type StoryArgs = ComponentProps<typeof AsyncApiOperationViewer> & {
    sourceText: string;
    operationType?: string;
};
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import('../components/AsyncApiOperationViewer/AsyncApiOperationViewer').AsyncApiOperationViewerProps>;
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
        operationType: {
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
