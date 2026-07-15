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
export declare const Case_6_1_objectPropsObjects_object_props_objects_to_string: Story;
export declare const Case_6_2_objectPropsObjects_object_props_objects_to_number: Story;
export declare const Case_6_3_objectPropsObjects_object_props_objects_to_boolean: Story;
export declare const Case_6_4_objectPropsObjects_object_props_objects_to_null: Story;
export declare const Case_6_5_objectPropsObjects_object_props_objects_to_object_primitive_props: Story;
export declare const Case_6_6_objectPropsObjects_object_props_objects_to_object_props_arrays: Story;
export declare const Case_6_7_objectPropsObjects_object_props_objects_to_object_all_prop_types: Story;
export declare const Case_6_8_objectPropsObjects_object_props_objects_to_array_primitives: Story;
export declare const Case_6_9_objectPropsObjects_object_props_objects_to_array_objects: Story;
export declare const Case_6_10_objectPropsObjects_object_props_objects_to_array_items_arrays: Story;
export declare const Case_6_11_objectPropsObjects_object_props_objects_to_array_all_item_types: Story;
