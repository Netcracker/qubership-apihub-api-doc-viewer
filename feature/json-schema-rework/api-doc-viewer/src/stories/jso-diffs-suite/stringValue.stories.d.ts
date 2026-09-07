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
export declare const Case_1_1_stringValue_string_to_number: Story;
export declare const Case_1_2_stringValue_string_to_boolean: Story;
export declare const Case_1_3_stringValue_string_to_null: Story;
export declare const Case_1_4_stringValue_string_to_object_primitive_props: Story;
export declare const Case_1_5_stringValue_string_to_object_props_objects: Story;
export declare const Case_1_6_stringValue_string_to_object_props_arrays: Story;
export declare const Case_1_7_stringValue_string_to_object_all_prop_types: Story;
export declare const Case_1_8_stringValue_string_to_array_primitives: Story;
export declare const Case_1_9_stringValue_string_to_array_objects: Story;
export declare const Case_1_10_stringValue_string_to_array_items_arrays: Story;
export declare const Case_1_11_stringValue_string_to_array_all_item_types: Story;
