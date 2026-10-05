import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import('..').JsonSchemaViewerProps>;
    parameters: {};
    argTypes: {};
    args: {
        schema: {};
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Cycled: Story;
export declare const ExtensionsFirstLevel: Story;
export declare const ExtensionsSecondLevel: Story;
export declare const MultiLevelExtensionsFirstLevel: Story;
export declare const MultiLevelExtensionsSecondLevel: Story;
export declare const CombinationOfDifferentExtensionsSecondLevel: Story;
export declare const AdditionalPropertiesFalse: Story;
export declare const AdditionalItemsFalse: Story;
export declare const NewLineCharacterInEnum: Story;
export declare const NonAsciiCharactersInEnum: Story;
export declare const JsonSchemaInExtensions: Story;
