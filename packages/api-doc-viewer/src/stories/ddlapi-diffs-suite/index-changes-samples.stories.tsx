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
  "../../../../samples/ddlapi-diffs/index-changes/*/before.sql",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/ddlapi-diffs/index-changes/*/after.sql",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectDdlDiffSampleCases(beforeFiles, afterFiles);
const sampleById = createDdlDiffSampleById(sampleCases);

// eslint-disable-next-line storybook/story-exports
const meta = {
  ...ddlDiffsSamplesStoryMetaBase,
  title: "DDL API Diffs Suite/Index Changes Samples",
} satisfies Meta<typeof DdlDiffSampleStory>;

export default meta;

type Story = DdlDiffsSamplesStoryObj;

const createCaseStory = createDdlDiffCaseStoryFactory(sampleById);

export const Case_01_add_index_when_none_present: Story = createCaseStory("01-add-index-when-none-present");
export const Case_02_add_index_unique_when_none_present: Story = createCaseStory("02-add-index-unique-when-none-present");
export const Case_03_remove_index_when_none_present: Story = createCaseStory("03-remove-index-when-none-present");
export const Case_04_remove_index_unique_when_none_present: Story = createCaseStory("04-remove-index-unique-when-none-present");
export const Case_05_add_one_more_index_without_unique: Story = createCaseStory("05-add-one-more-index-without-unique");
export const Case_06_add_one_more_index_with_unique: Story = createCaseStory("06-add-one-more-index-with-unique");
export const Case_07_remove_one_more_index_without_unique: Story = createCaseStory("07-remove-one-more-index-without-unique");
export const Case_08_remove_one_more_index_with_unique: Story = createCaseStory("08-remove-one-more-index-with-unique");
export const Case_09_append_new_column_in_index: Story = createCaseStory("09-append-new-column-in-index");
export const Case_10_remove_new_column_in_index: Story = createCaseStory("10-remove-new-column-in-index");
export const Case_11_replaced_column_in_index: Story = createCaseStory("11-replaced-column-in-index");
export const Case_12_index_became_unique: Story = createCaseStory("12-index-became-unique");
export const Case_13_index_not_unique: Story = createCaseStory("13-index-not-unique");
export const Case_14_remove_one_more_index_without_unique: Story = createCaseStory("14-remove-one-more-index-without-unique");
export const Case_15_remove_one_more_index_with_unique: Story = createCaseStory("15-remove-one-more-index-with-unique");
export const Case_16_remove_new_column_in_index: Story = createCaseStory("16-remove-new-column-in-index");
export const Case_17_restore_replaced_column_in_index: Story = createCaseStory("17-restore-replaced-column-in-index");
export const Case_18_index_not_unique: Story = createCaseStory("18-index-not-unique");
