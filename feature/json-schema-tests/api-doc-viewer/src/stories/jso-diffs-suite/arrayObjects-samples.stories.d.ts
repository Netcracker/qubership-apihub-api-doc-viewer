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
export declare const Case_10_1_arrayObjects_array_objects_to_string: Story;
export declare const Case_10_2_arrayObjects_array_objects_to_number: Story;
export declare const Case_10_3_arrayObjects_array_objects_to_boolean: Story;
export declare const Case_10_4_arrayObjects_array_objects_to_null: Story;
export declare const Case_10_5_arrayObjects_array_objects_to_object_primitive_props: Story;
export declare const Case_10_6_arrayObjects_array_objects_to_object_props_objects: Story;
export declare const Case_10_7_arrayObjects_array_objects_to_object_props_arrays: Story;
export declare const Case_10_8_arrayObjects_array_objects_to_object_all_prop_types: Story;
export declare const Case_10_9_arrayObjects_array_objects_to_array_primitives: Story;
export declare const Case_10_10_arrayObjects_array_objects_to_array_items_arrays: Story;
export declare const Case_10_11_arrayObjects_array_objects_to_array_all_item_types: Story;
