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
export declare const Case_7_1_objectPropsArrays_object_props_arrays_to_string: Story;
export declare const Case_7_2_objectPropsArrays_object_props_arrays_to_number: Story;
export declare const Case_7_3_objectPropsArrays_object_props_arrays_to_boolean: Story;
export declare const Case_7_4_objectPropsArrays_object_props_arrays_to_null: Story;
export declare const Case_7_5_objectPropsArrays_object_props_arrays_to_object_primitive_props: Story;
export declare const Case_7_6_objectPropsArrays_object_props_arrays_to_object_props_objects: Story;
export declare const Case_7_7_objectPropsArrays_object_props_arrays_to_object_all_prop_types: Story;
export declare const Case_7_8_objectPropsArrays_object_props_arrays_to_array_primitives: Story;
export declare const Case_7_9_objectPropsArrays_object_props_arrays_to_array_objects: Story;
export declare const Case_7_10_objectPropsArrays_object_props_arrays_to_array_items_arrays: Story;
export declare const Case_7_11_objectPropsArrays_object_props_arrays_to_array_all_item_types: Story;
