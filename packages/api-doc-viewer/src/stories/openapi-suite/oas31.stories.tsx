import type { Meta, StoryObj } from "@storybook/react-vite";
import { OpenApiSampleStory } from "./OpenApiSampleStory";
import { collectOpenApiSamples, takeOpenApiSample } from "./openapi-suite-utils";

const sampleFiles = import.meta.glob(
  "../../../../samples/openapi/oas31/*/sample.yaml",
  { query: "?raw", import: "default", eager: true },
) as Record<string, string>;

const samples = collectOpenApiSamples(sampleFiles);

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "OpenAPI Operation Suite/OAS 3.1",
  component: OpenApiSampleStory,
} satisfies Meta<typeof OpenApiSampleStory>;

export default meta;

type Story = StoryObj<typeof meta>;

const createCaseStory = (caseId: string, path: string, method: string, extra: Partial<Story["args"]> = {}, nameSuffix = ""): Story => ({
  name: `${caseId} ${method.toUpperCase()}${nameSuffix}`,
  args: { caseId, sampleYaml: takeOpenApiSample(samples, caseId), path, method, ...extra },
});

export const Case_01_full_operation: Story = createCaseStory("01-full-operation", "/pets/{petId}", "patch");
export const Case_02_no_responses: Story = createCaseStory("02-no-responses", "/events", "post");
export const Case_03_security_mutual_tls_and_roles: Story = createCaseStory("03-security-mutual-tls-and-roles", "/admin/keys", "post");
export const Case_04_reference_overrides_and_path_items: Story = createCaseStory("04-reference-overrides-and-path-items", "/invoices/{invoiceId}", "get");
