/**
 * Programmatic value-range diff stories (see src/stories/json-schema-diffs-suite/value-range-diff-case-definitions.ts).
 * Regenerate: node --experimental-strip-types bin/generate-value-range-diff-stories.mjs
 */
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, }: import("./json-schema-diffs-utils").JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
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
type Story = StoryObj<typeof meta>;
export declare const Case_001_minimum_added: Story;
export declare const Case_002_minimum_added_with_exclusive_minimum_true: Story;
export declare const Case_003_minimum_removed: Story;
export declare const Case_004_minimum_with_exclusive_minimum_true_removed: Story;
export declare const Case_005_exclusive_minimum_false_to_true: Story;
export declare const Case_006_exclusive_minimum_true_to_false: Story;
export declare const Case_007_maximum_added: Story;
export declare const Case_008_maximum_added_with_exclusive_maximum_true: Story;
export declare const Case_009_maximum_removed: Story;
export declare const Case_010_maximum_with_exclusive_maximum_true_removed: Story;
export declare const Case_011_exclusive_maximum_false_to_true: Story;
export declare const Case_012_exclusive_maximum_true_to_false: Story;
export declare const Case_013_minimum_maximum_added: Story;
export declare const Case_014_minimum_inclusive_maximum_exclusive_added: Story;
export declare const Case_015_minimum_exclusive_maximum_inclusive_added: Story;
export declare const Case_016_minimum_maximum_both_exclusive_added: Story;
export declare const Case_017_minimum_maximum_removed: Story;
export declare const Case_018_minimum_inclusive_maximum_exclusive_removed: Story;
export declare const Case_019_minimum_exclusive_maximum_inclusive_removed: Story;
export declare const Case_020_minimum_maximum_both_exclusive_removed: Story;
export declare const Case_021_min_ex_max_in_min_ex_to_inclusive: Story;
export declare const Case_022_min_ex_max_in_max_in_to_exclusive: Story;
export declare const Case_023_min_in_max_ex_min_in_to_exclusive: Story;
export declare const Case_024_min_in_max_ex_max_ex_to_inclusive: Story;
export declare const Case_025_min_in_max_in_min_in_to_exclusive: Story;
export declare const Case_026_min_in_max_in_max_in_to_exclusive: Story;
export declare const Case_027_min_in_max_in_both_to_exclusive: Story;
export declare const Case_028_min_ex_max_ex_min_ex_to_inclusive: Story;
export declare const Case_029_min_ex_max_ex_max_ex_to_inclusive: Story;
export declare const Case_030_min_ex_max_ex_both_to_inclusive: Story;
export declare const Case_031_unchanged_minimum_inclusive: Story;
export declare const Case_032_unchanged_minimum_exclusive: Story;
export declare const Case_033_unchanged_maximum_inclusive: Story;
export declare const Case_034_unchanged_maximum_exclusive: Story;
export declare const Case_035_unchanged_min_max_inclusive: Story;
export declare const Case_036_unchanged_min_inclusive_max_exclusive: Story;
export declare const Case_037_unchanged_min_max_both_exclusive: Story;
export declare const Case_038_min_in_add_max_in: Story;
export declare const Case_039_min_in_add_max_ex: Story;
export declare const Case_040_min_ex_add_max_in: Story;
export declare const Case_041_min_ex_add_max_ex: Story;
export declare const Case_042_max_in_add_min_in: Story;
export declare const Case_043_max_in_add_min_ex: Story;
export declare const Case_044_max_ex_add_min_in: Story;
export declare const Case_045_max_ex_add_min_ex: Story;
export declare const Case_046_min_in_max_in_remove_minimum: Story;
export declare const Case_047_min_in_max_in_remove_maximum: Story;
export declare const Case_048_min_ex_max_ex_remove_minimum: Story;
export declare const Case_049_min_ex_max_ex_remove_maximum: Story;
export declare const Case_050_min_in_max_ex_remove_minimum: Story;
export declare const Case_051_min_in_max_ex_remove_maximum: Story;
export declare const Case_052_min_ex_max_in_remove_minimum: Story;
export declare const Case_053_min_ex_max_in_remove_maximum: Story;
