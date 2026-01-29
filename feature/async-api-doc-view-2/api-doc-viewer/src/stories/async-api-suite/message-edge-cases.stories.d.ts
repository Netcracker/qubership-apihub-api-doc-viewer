/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/AsyncApiOperationViewer/AsyncApiOperationViewer').AsyncApiOperationViewerProps>;
    parameters: {};
    argTypes: {
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
        source: {};
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BindingWithRef: Story;
export declare const BindingWithCircularRefKindA: Story;
export declare const BindingWithCircularRefKindB: Story;
export declare const HeadersWithRef: Story;
export declare const HeadersWithCircularRefKindA: Story;
export declare const HeadersWithCircularRefKindB: Story;
export declare const PayloadWithRef: Story;
export declare const PayloadWithCircularRefKindA: Story;
export declare const PayloadWithCircularRefKindB: Story;
export declare const HeadersMultiformatWithRef: Story;
export declare const HeadersMultiformatWithCircularRefKindA: Story;
export declare const HeadersMultiformatWithCircularRefKindB: Story;
export declare const PayloadMultiformatWithRef: Story;
export declare const PayloadMultiformatWithCircularRefKindA: Story;
export declare const PayloadMultiformatWithCircularRefKindB: Story;
export declare const JsonSchemaInExtensions: Story;
