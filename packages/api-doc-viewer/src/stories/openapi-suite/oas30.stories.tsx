import type { Meta, StoryObj } from "@storybook/react-vite";
import { OpenApiSampleStory } from "./OpenApiSampleStory";
import { collectOpenApiSamples, takeOpenApiSample } from "./openapi-suite-utils";

const sampleFiles = import.meta.glob(
  "../../../../samples/openapi/oas30/*/sample.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const samples = collectOpenApiSamples(sampleFiles);

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "OpenAPI Operation Suite/OAS 3.0",
  component: OpenApiSampleStory,
} satisfies Meta<typeof OpenApiSampleStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const createCaseStory = (caseId: string, path: string, method: string, extra: Partial<Story["args"]> = {}, nameSuffix = ""): Story => ({
  name: `${caseId} ${method.toUpperCase()}${nameSuffix}`,
  args: { caseId, sampleYaml: takeOpenApiSample(samples, caseId), path, method, ...extra },
});

export const Case_01_full_operation: Story = createCaseStory("01-full-operation", "/pets/{petId}/photos", "post");
export const Case_01_full_operation_simple_mode: Story = createCaseStory("01-full-operation", "/pets/{petId}/photos", "post", { displayMode: "simple" }, " (simple mode)");
export const Case_01_full_operation_no_heading: Story = createCaseStory("01-full-operation", "/pets/{petId}/photos", "post", { noHeading: true }, " (no heading)");
export const Case_02_minimal_operation: Story = createCaseStory("02-minimal-operation", "/health", "get");
export const Case_03_security_inherited_from_document: Story = createCaseStory("03-security-alternatives", "/reports", "get");
export const Case_03_security_three_alternatives: Story = createCaseStory("03-security-alternatives", "/reports", "post");
export const Case_03_security_disabled_deprecated: Story = createCaseStory("03-security-alternatives", "/reports", "delete");
export const Case_04_parameters_sources: Story = createCaseStory("04-parameters-sources", "/orders/{orderId}", "get");
export const Case_05_response_codes_palette: Story = createCaseStory("05-response-codes-palette", "/palette", "get");
