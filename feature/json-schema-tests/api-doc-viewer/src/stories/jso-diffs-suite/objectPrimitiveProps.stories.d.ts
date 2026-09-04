import { type JsoPropertySamplesStoryObj } from "./property-samples-common";
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, }: import("./jso-diffs-utils").JsoCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
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
export default meta;
type Story = JsoPropertySamplesStoryObj;
export declare const Case_5_1_objectPrimitiveProps_object_primitive_props_to_string: Story;
export declare const Case_5_2_objectPrimitiveProps_object_primitive_props_to_number: Story;
export declare const Case_5_3_objectPrimitiveProps_object_primitive_props_to_boolean: Story;
export declare const Case_5_4_objectPrimitiveProps_object_primitive_props_to_null: Story;
export declare const Case_5_5_objectPrimitiveProps_object_primitive_props_to_object_props_objects: Story;
export declare const Case_5_6_objectPrimitiveProps_object_primitive_props_to_object_props_arrays: Story;
export declare const Case_5_7_objectPrimitiveProps_object_primitive_props_to_object_all_prop_types: Story;
export declare const Case_5_8_objectPrimitiveProps_object_primitive_props_to_array_primitives: Story;
export declare const Case_5_9_objectPrimitiveProps_object_primitive_props_to_array_objects: Story;
export declare const Case_5_10_objectPrimitiveProps_object_primitive_props_to_array_items_arrays: Story;
export declare const Case_5_11_objectPrimitiveProps_object_primitive_props_to_array_all_item_types: Story;
