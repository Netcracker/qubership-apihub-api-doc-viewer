import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/shared-components/WithPrecededByProps').WithPrecededByProps & {
        source: object | null;
        displayMode?: import('../..').DisplayMode;
        layoutMode?: import('../..').LayoutMode;
        initialLevel?: number;
        supportJsonSchema?: boolean;
        devMode?: boolean;
    }>;
    parameters: {};
    argTypes: {
        source: {
            control: "object";
        };
        supportJsonSchema: {
            control: "boolean";
        };
    };
    args: {
        source: {};
        supportJsonSchema: true;
        initialLevel: number;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const PrimitiveProperties: Story;
export declare const PrimitiveObjectProperty: Story;
export declare const PrimitiveArrayProperty: Story;
export declare const NestedObjectProperty: Story;
export declare const NestedArrayProperty: Story;
export declare const AllKindsOfObjectProperties: Story;
export declare const AllKindsOfArrayItems: Story;
export declare const PrimitivePropAndPrimitiveSchema: Story;
export declare const PrimitivePropAndObjectSchema: Story;
export declare const PrimitivePropAndArraySchema: Story;
export declare const PrimitivePropAndCombinerSchema: Story;
export declare const ObjectPropAndPrimitiveSchema: Story;
export declare const ArrayPropAndPrimitiveSchema: Story;
export declare const SecondLevelPrimitivePropAndPrimitiveSchema: Story;
export declare const SecondLevelPrimitivePropAndObjectSchema: Story;
export declare const SecondLevelPrimitivePropAndArraySchema: Story;
export declare const SecondLevelPrimitivePropAndCombinerSchema: Story;
export declare const SecondLevelObjectPropAndPrimitiveSchema: Story;
export declare const SecondLevelArrayPropAndPrimitiveSchema: Story;
