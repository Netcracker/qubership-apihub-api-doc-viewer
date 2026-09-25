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
export declare const Case_13_2_objectJsonSchema_add_complex_json_schema: Story;
export declare const Case_13_4_objectJsonSchema_remove_complex_json_schema: Story;
export declare const Case_15_1_objectJsonSchema_description_changed: Story;
export declare const Case_15_2_objectJsonSchema_title_changed: Story;
export declare const Case_15_3_objectJsonSchema_title_added: Story;
export declare const Case_15_4_objectJsonSchema_title_removed: Story;
export declare const Case_15_5_objectJsonSchema_examples_changed: Story;
export declare const Case_15_6_objectJsonSchema_property_added: Story;
export declare const Case_15_7_objectJsonSchema_property_removed: Story;
export declare const Case_15_8_objectJsonSchema_required_changed: Story;
