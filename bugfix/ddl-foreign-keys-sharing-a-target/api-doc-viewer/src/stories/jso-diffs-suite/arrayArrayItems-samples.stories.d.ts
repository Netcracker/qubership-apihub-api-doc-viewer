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
export declare const Case_11_1_arrayArrayItems_array_items_arrays_to_string: Story;
export declare const Case_11_2_arrayArrayItems_array_items_arrays_to_number: Story;
export declare const Case_11_3_arrayArrayItems_array_items_arrays_to_boolean: Story;
export declare const Case_11_4_arrayArrayItems_array_items_arrays_to_null: Story;
export declare const Case_11_5_arrayArrayItems_array_items_arrays_to_object_primitive_props: Story;
export declare const Case_11_6_arrayArrayItems_array_items_arrays_to_object_props_objects: Story;
export declare const Case_11_7_arrayArrayItems_array_items_arrays_to_object_props_arrays: Story;
export declare const Case_11_8_arrayArrayItems_array_items_arrays_to_object_all_prop_types: Story;
export declare const Case_11_9_arrayArrayItems_array_items_arrays_to_array_primitives: Story;
export declare const Case_11_10_arrayArrayItems_array_items_arrays_to_array_objects: Story;
export declare const Case_11_11_arrayArrayItems_array_items_arrays_to_array_all_item_types: Story;
