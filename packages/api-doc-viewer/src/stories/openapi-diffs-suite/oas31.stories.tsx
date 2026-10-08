import type { Meta, StoryObj } from "@storybook/react-vite";
import { collectSampleCases } from "../utils/diffs-samples-cases";
import { createSampleById } from "../utils/sample-cases";
import { OpenApiDiffSampleStory } from "./OpenApiDiffSampleStory";

const beforeFiles = import.meta.glob(
  "../../../../samples/openapi-diffs/oas31/*/before.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/openapi-diffs/oas31/*/after.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const sampleById = createSampleById(collectSampleCases(beforeFiles, afterFiles));

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "OpenAPI Operation Diffs Suite/OAS 3.1 Samples",
  component: OpenApiDiffSampleStory,
} satisfies Meta<typeof OpenApiDiffSampleStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const createCaseStory = (caseId: string): Story => {
  const sample = sampleById[caseId];
  if (!sample) {
    throw new Error(`Sample case not found: ${caseId}`);
  }
  return { name: caseId, args: { caseId, beforeYaml: sample.beforeYaml, afterYaml: sample.afterYaml } };
};

export const Case_01_nullable_via_type_array: Story = createCaseStory("01-nullable-via-type-array");
export const Case_02_mutual_tls_alternative_added: Story = createCaseStory("02-mutual-tls-alternative-added");
export const Case_03_role_scopes_on_api_key: Story = createCaseStory("03-role-scopes-on-api-key");
