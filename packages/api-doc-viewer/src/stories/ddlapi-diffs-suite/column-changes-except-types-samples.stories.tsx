import type { Meta } from "@storybook/react";
import {
  DdlDiffSampleStory,
  collectDdlDiffSampleCases,
  createDdlDiffCaseStoryFactory,
  createDdlDiffSampleById,
  ddlDiffsSamplesStoryMetaBase,
  type DdlDiffsSamplesStoryObj,
} from "./ddlapi-diffs-utils";

const beforeFiles = import.meta.glob(
  "../../../../samples/ddlapi-diffs/column-changes-except-types/*/before.sql",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/ddlapi-diffs/column-changes-except-types/*/after.sql",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectDdlDiffSampleCases(beforeFiles, afterFiles);
const sampleById = createDdlDiffSampleById(sampleCases);

// eslint-disable-next-line storybook/story-exports
const meta = {
  ...ddlDiffsSamplesStoryMetaBase,
  title: "DDL API Diffs Suite/Column Changes Except Types Samples",
} satisfies Meta<typeof DdlDiffSampleStory>;

export default meta;

type Story = DdlDiffsSamplesStoryObj;

const createCaseStory = createDdlDiffCaseStoryFactory(sampleById);

export const Case_01_add_one_more_column_no_badges: Story = createCaseStory("01-add-one-more-column-no-badges");
export const Case_02_remove_one_more_column_no_badges: Story = createCaseStory("02-remove-one-more-column-no-badges");
export const Case_03_add_column_primary_key: Story = createCaseStory("03-add-column-primary-key");
export const Case_04_add_column_foreign_key: Story = createCaseStory("04-add-column-foreign-key");
export const Case_05_add_column_unique: Story = createCaseStory("05-add-column-unique");
export const Case_06_add_column_not_null: Story = createCaseStory("06-add-column-not-null");
export const Case_07_add_column_generated_identity: Story = createCaseStory("07-add-column-generated-identity");
export const Case_08_add_column_generated_expression: Story = createCaseStory("08-add-column-generated-expression");
export const Case_09_remove_column_primary_key: Story = createCaseStory("09-remove-column-primary-key");
export const Case_10_remove_column_foreign_key: Story = createCaseStory("10-remove-column-foreign-key");
export const Case_11_remove_column_unique: Story = createCaseStory("11-remove-column-unique");
export const Case_12_remove_column_not_null: Story = createCaseStory("12-remove-column-not-null");
export const Case_13_remove_column_generated_identity: Story = createCaseStory("13-remove-column-generated-identity");
export const Case_14_existing_column_became_primary_key: Story = createCaseStory("14-existing-column-became-primary-key");
export const Case_15_existing_column_became_foreign_key: Story = createCaseStory("15-existing-column-became-foreign-key");
export const Case_16_existing_column_became_unique: Story = createCaseStory("16-existing-column-became-unique");
export const Case_17_existing_column_became_generated_identity: Story = createCaseStory("17-existing-column-became-generated-identity");
export const Case_18_existing_column_became_generated_expression: Story = createCaseStory("18-existing-column-became-generated-expression");
export const Case_19_remove_column_generated_expression: Story = createCaseStory("19-remove-column-generated-expression");
export const Case_20_existing_column_became_not_null: Story = createCaseStory("20-existing-column-became-not-null");
export const Case_21_existing_column_lost_primary_key: Story = createCaseStory("21-existing-column-lost-primary-key");
export const Case_22_existing_column_lost_foreign_key: Story = createCaseStory("22-existing-column-lost-foreign-key");
export const Case_23_existing_column_lost_unique: Story = createCaseStory("23-existing-column-lost-unique");
export const Case_24_existing_column_lost_generated_identity: Story = createCaseStory("24-existing-column-lost-generated-identity");
export const Case_25_existing_column_lost_generated_expression: Story = createCaseStory("25-existing-column-lost-generated-expression");
export const Case_26_existing_column_lost_not_null: Story = createCaseStory("26-existing-column-lost-not-null");
