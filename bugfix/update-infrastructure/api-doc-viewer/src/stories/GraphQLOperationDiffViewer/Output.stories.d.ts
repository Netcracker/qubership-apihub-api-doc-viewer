import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<Omit<import('../..').GraphQLOperationDiffViewerProps, "source"> & import('../preprocess').GraphApiDiffSchemaOptions>;
    parameters: {};
    argTypes: {
        beforeSource: {
            control: "object";
        };
        afterSource: {
            control: "object";
        };
        layoutMode: {
            control: "radio";
            options: string[];
        };
        filters: {
            control: "check";
            options: string[];
        };
    };
    args: {
        layoutMode: "side-by-side-diffs";
        metaKeys: {
            diffsMetaKey: symbol;
            aggregatedDiffsMetaKey: symbol;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const QueryNoArgsChangedPrimitiveOutput: Story;
export declare const QueryNoArgsPrimitiveOutputMarkedAsNotNullable: Story;
export declare const QueryNoArgsPrimitiveOutputMarkedAsNullable: Story;
export declare const QueryPrimitiveOutputAddedArgs: Story;
export declare const QueryPrimitiveOutputRemovedArgs: Story;
export declare const QueryPrimitiveOutputAddedNewArg: Story;
export declare const QueryPrimitiveOutputRemovedExistingArg: Story;
export declare const QueryWithArgsChangedPrimitiveToObjectOutput: Story;
export declare const QueryWithArgsChangedObjectToPrimitiveOutput: Story;
export declare const QueryWithArgsChangedArrayOfPrimitiveToArrayOfObjectOutput: Story;
export declare const QueryWithArgsChangedArrayOfObjectOutputToArrayOfPrimitive: Story;
export declare const QueryWithArgsChangedArrayOfObjectOutputToObjectOutput: Story;
export declare const QueryWithArgsChangedObjectOutputToArrayOfObjectOutput: Story;
export declare const QueryNoArgsChangedObjectOutputToOneOfOutput: Story;
export declare const QueryNoArgsChangedOneOfOutputToObjectOutput: Story;
export declare const QueryNoArgsReturnsUtilityAdded1Method: Story;
export declare const QueryNoArgsReturnsUtilityRemoved1Method: Story;
export declare const QueryNoArgsReturnsUtility1MethodAdded1Arg: Story;
export declare const QueryNoArgsReturnsUtility1MethodRemoved1Arg: Story;
