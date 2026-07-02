import { DdlTableDiffsViewer } from "@apihub/components/DdlTableViewer/DdlTableDiffsViewer";
import type { Meta, StoryObj } from "@storybook/react";
import {
  collectDdlDiffSampleCases,
  createDdlDiffCaseStoryFactory,
  createDdlDiffSampleById,
} from "./ddlapi-diffs-utils";

const beforeFiles = import.meta.glob(
  "../../../../samples/ddlapi-diffs/whole-table-changes/*/before.sql",
  { as: "raw", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/ddlapi-diffs/whole-table-changes/*/after.sql",
  { as: "raw", eager: true },
) as Record<string, string>;

const sampleCases = collectDdlDiffSampleCases(beforeFiles, afterFiles);
const sampleById = createDdlDiffSampleById(sampleCases);

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "DDL API Diffs Suite/Whole Table Changes Samples",
  component: DdlTableDiffsViewer,
} satisfies Meta<typeof DdlTableDiffsViewer>;

export default meta;

type Story = StoryObj<typeof DdlTableDiffsViewer>;

const createCaseStory = createDdlDiffCaseStoryFactory(sampleById);

export const Case_01_wholly_added_table: Story = createCaseStory("01-wholly-added-table");
export const Case_02_wholly_removed_table: Story = createCaseStory("02-wholly-removed-table");
export const Case_03_changed_schema_of_table: Story = createCaseStory("03-changed-schema-of-table");
