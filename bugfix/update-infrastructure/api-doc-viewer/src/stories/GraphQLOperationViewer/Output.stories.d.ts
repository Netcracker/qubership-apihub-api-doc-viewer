import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<Omit<import('../..').GraphQLOperationViewerProps, "source"> & import('../preprocess').GraphApiSchemaOptions>;
    parameters: {};
    argTypes: {
        source: {
            control: "object";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const QueryNoArgsPrimitiveNullableOutput: Story;
export declare const MutationNoArgsPrimitiveNullableOutput: Story;
export declare const QueryWithUnionInOutput: Story;
export declare const MethodWithUnionInOutput: Story;
