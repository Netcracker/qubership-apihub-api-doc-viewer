/**
 * Programmatic combiner (oneOf) stories.
 * See src/stories/json-schema-suite/combiner-plain-case-definitions.ts and ../../../samples/combiners-cases.md.
 * Regenerate: node --experimental-strip-types bin/generate-combiner-suite-stories.mjs
 */
import type { Meta, StoryObj } from "@storybook/react";
import { JsonSchemaViewer } from "@apihub/components/JsonSchemaViewer/JsonSchemaViewer";
import {
  JsonSchemaSampleStory,
  jsonSchemaSamplesStoryMetaBase,
  type JsonSchemaSamplesStoryObj,
} from "./json-schema-samples-common";
import {
  buildCombinerPlainProgrammaticSampleCases,
  type CombinerPlainProgrammaticSampleCase,
} from "./combiner-plain-samples";

const sampleCases = buildCombinerPlainProgrammaticSampleCases("oneOf");
const sampleById = sampleCases.reduce<Record<string, CombinerPlainProgrammaticSampleCase>>(
  (accumulator, sampleCase) => {
    accumulator[sampleCase.caseId] = sampleCase;
    return accumulator;
  },
  {},
);

const createCaseStory = (caseId: string): JsonSchemaSamplesStoryObj => {
  const sampleCase = sampleById[caseId];
  if (!sampleCase) {
    throw new Error(`Sample case not found: ${caseId}`);
  }

  return {
    name: caseId,
    args: { caseId },
    render: (args) => {
      const resolvedSample = sampleById[args.caseId];
      return (
        <JsonSchemaViewer schema={resolvedSample.schema} expandedDepth={5} />
      );
    },
  };
};

// eslint-disable-next-line storybook/story-exports
const meta = {
  ...jsonSchemaSamplesStoryMetaBase,
  id: "json-schema-suite-one-of-combiner-suite",
  title: "JSON Schema Suite/One Of Combiner Suite",
} satisfies Meta<typeof JsonSchemaSampleStory>;

export default meta;

type Story = JsonSchemaSamplesStoryObj;

export const Case_001_string_schema: Story = createCaseStory("001-string-schema");
export const Case_002_number_schema: Story = createCaseStory("002-number-schema");
export const Case_003_integer_schema: Story = createCaseStory("003-integer-schema");
export const Case_004_boolean_schema: Story = createCaseStory("004-boolean-schema");
export const Case_005_array_schema: Story = createCaseStory("005-array-schema");
export const Case_006_object_schema: Story = createCaseStory("006-object-schema");
export const Case_007_all_types_schema: Story = createCaseStory("007-all-types-schema");
export const Case_008_string_MyString_NULL_schema: Story = createCaseStory("008-string-MyString-NULL-schema");
export const Case_009_string_NULL_ISODateTime_schema: Story = createCaseStory("009-string-NULL-ISODateTime-schema");
export const Case_010_string_MyString_ISODateTime_schema: Story = createCaseStory("010-string-MyString-ISODateTime-schema");
export const Case_011_number_MyNumber_NULL_schema: Story = createCaseStory("011-number-MyNumber-NULL-schema");
export const Case_012_number_NULL_ISODateTime_schema: Story = createCaseStory("012-number-NULL-ISODateTime-schema");
export const Case_013_number_MyNumber_ISODateTime_schema: Story = createCaseStory("013-number-MyNumber-ISODateTime-schema");
export const Case_014_integer_MyInteger_NULL_schema: Story = createCaseStory("014-integer-MyInteger-NULL-schema");
export const Case_015_integer_NULL_ISODateTime_schema: Story = createCaseStory("015-integer-NULL-ISODateTime-schema");
export const Case_016_integer_MyInteger_ISODateTime_schema: Story = createCaseStory("016-integer-MyInteger-ISODateTime-schema");
export const Case_017_boolean_MyBoolean_NULL_schema: Story = createCaseStory("017-boolean-MyBoolean-NULL-schema");
export const Case_018_boolean_NULL_ISODateTime_schema: Story = createCaseStory("018-boolean-NULL-ISODateTime-schema");
export const Case_019_boolean_MyBoolean_ISODateTime_schema: Story = createCaseStory("019-boolean-MyBoolean-ISODateTime-schema");
export const Case_020_array_MyArray_NULL_schema: Story = createCaseStory("020-array-MyArray-NULL-schema");
export const Case_021_array_NULL_ISODateTime_schema: Story = createCaseStory("021-array-NULL-ISODateTime-schema");
export const Case_022_array_MyArray_ISODateTime_schema: Story = createCaseStory("022-array-MyArray-ISODateTime-schema");
export const Case_023_object_MyObject_NULL_schema: Story = createCaseStory("023-object-MyObject-NULL-schema");
export const Case_024_object_NULL_ISODateTime_schema: Story = createCaseStory("024-object-NULL-ISODateTime-schema");
export const Case_025_object_MyObject_ISODateTime_schema: Story = createCaseStory("025-object-MyObject-ISODateTime-schema");
export const Case_026_string_schema_one_of: Story = createCaseStory("026-string-schema-one-of");
export const Case_027_number_schema_one_of: Story = createCaseStory("027-number-schema-one-of");
export const Case_028_integer_schema_one_of: Story = createCaseStory("028-integer-schema-one-of");
export const Case_029_boolean_schema_one_of: Story = createCaseStory("029-boolean-schema-one-of");
export const Case_030_array_schema_one_of: Story = createCaseStory("030-array-schema-one-of");
export const Case_031_object_schema_one_of: Story = createCaseStory("031-object-schema-one-of");
export const Case_032_string_schema_one_of_one_of: Story = createCaseStory("032-string-schema-one-of-one-of");
export const Case_033_number_schema_one_of_one_of: Story = createCaseStory("033-number-schema-one-of-one-of");
export const Case_034_integer_schema_one_of_one_of: Story = createCaseStory("034-integer-schema-one-of-one-of");
export const Case_035_boolean_schema_one_of_one_of: Story = createCaseStory("035-boolean-schema-one-of-one-of");
export const Case_036_array_schema_one_of_one_of: Story = createCaseStory("036-array-schema-one-of-one-of");
export const Case_037_object_schema_one_of_one_of: Story = createCaseStory("037-object-schema-one-of-one-of");
export const Case_038_string_schema_one_of_any_of: Story = createCaseStory("038-string-schema-one-of-any-of");
export const Case_039_number_schema_one_of_any_of: Story = createCaseStory("039-number-schema-one-of-any-of");
export const Case_040_integer_schema_one_of_any_of: Story = createCaseStory("040-integer-schema-one-of-any-of");
export const Case_041_boolean_schema_one_of_any_of: Story = createCaseStory("041-boolean-schema-one-of-any-of");
export const Case_042_array_schema_one_of_any_of: Story = createCaseStory("042-array-schema-one-of-any-of");
export const Case_043_object_schema_one_of_any_of: Story = createCaseStory("043-object-schema-one-of-any-of");
export const Case_044_string_schema_one_of_all_of: Story = createCaseStory("044-string-schema-one-of-all-of");
export const Case_045_number_schema_one_of_all_of: Story = createCaseStory("045-number-schema-one-of-all-of");
export const Case_046_integer_schema_one_of_all_of: Story = createCaseStory("046-integer-schema-one-of-all-of");
export const Case_047_boolean_schema_one_of_all_of: Story = createCaseStory("047-boolean-schema-one-of-all-of");
export const Case_048_array_schema_one_of_all_of: Story = createCaseStory("048-array-schema-one-of-all-of");
export const Case_049_object_schema_one_of_all_of: Story = createCaseStory("049-object-schema-one-of-all-of");
