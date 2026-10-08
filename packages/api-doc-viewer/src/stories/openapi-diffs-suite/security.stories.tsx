import type { Meta, StoryObj } from "@storybook/react-vite";
import { collectSampleCases } from "../utils/diffs-samples-cases";
import { createSampleById } from "../utils/sample-cases";
import { OpenApiDiffSampleStory } from "./OpenApiDiffSampleStory";

const beforeFiles = import.meta.glob(
  "../../../../samples/openapi-diffs/security/*/before.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const afterFiles = import.meta.glob(
  "../../../../samples/openapi-diffs/security/*/after.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const sampleById = createSampleById(collectSampleCases(beforeFiles, afterFiles));

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "OpenAPI Operation Diffs Suite/Security Samples",
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

export const Case_01_alternative_added: Story = createCaseStory("01-alternative-added");
export const Case_02_scope_added: Story = createCaseStory("02-scope-added");
export const Case_03_scheme_added_to_alternative: Story = createCaseStory("03-scheme-added-to-alternative");
export const Case_04_scheme_definition_changed: Story = createCaseStory("04-scheme-definition-changed");
export const Case_05_root_security_overridden: Story = createCaseStory("05-root-security-overridden");
export const Case_06_security_removed: Story = createCaseStory("06-security-removed");
