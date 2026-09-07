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
export declare const Case_8_1_objectAllPropTypes_object_all_prop_types_to_string: Story;
export declare const Case_8_2_objectAllPropTypes_object_all_prop_types_to_number: Story;
export declare const Case_8_3_objectAllPropTypes_object_all_prop_types_to_boolean: Story;
export declare const Case_8_4_objectAllPropTypes_object_all_prop_types_to_null: Story;
export declare const Case_8_5_objectAllPropTypes_object_all_prop_types_to_object_primitive_props: Story;
export declare const Case_8_6_objectAllPropTypes_object_all_prop_types_to_object_props_objects: Story;
export declare const Case_8_7_objectAllPropTypes_object_all_prop_types_to_object_props_arrays: Story;
export declare const Case_8_8_objectAllPropTypes_object_all_prop_types_to_array_primitives: Story;
export declare const Case_8_9_objectAllPropTypes_object_all_prop_types_to_array_objects: Story;
export declare const Case_8_10_objectAllPropTypes_object_all_prop_types_to_array_items_arrays: Story;
export declare const Case_8_11_objectAllPropTypes_object_all_prop_types_to_array_all_item_types: Story;
