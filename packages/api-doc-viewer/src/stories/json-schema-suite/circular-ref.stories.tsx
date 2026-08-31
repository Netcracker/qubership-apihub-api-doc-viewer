import type { Meta, StoryObj } from "@storybook/react"
import { JsonSchemaViewer } from "@apihub/components/JsonSchemaViewer/JsonSchemaViewer"
import { prepareJsonSchema, REQUEST_BODY_TARGET } from "../preprocess"

const JSON_SCHEMA_SUITE_EXPANDED_DEPTH = 5

const cycledSchema = prepareJsonSchema({
  schema: {
    type: "object",
    properties: {
      a: { $ref: "#/components/schemas/A" },
      b: { $ref: "#/components/schemas/A" },
      c: { type: "string" },
      d: {
        type: "object",
        properties: {
          e: { type: "number" },
        },
      },
    },
  },
  target: REQUEST_BODY_TARGET,
  additionalComponents: {
    schemas: {
      A: {
        type: "object",
        properties: {
          c: { $ref: "#/components/schemas/A" },
        },
      },
    },
  },
  circular: true,
})

// eslint-disable-next-line storybook/story-exports
const meta = {
  id: "json-schema-suite-circular-ref",
  title: "JSON Schema Suite/Circular Ref",
  component: JsonSchemaViewer,
  parameters: {},
  argTypes: {},
  args: {
    schema: cycledSchema,
    expandedDepth: JSON_SCHEMA_SUITE_EXPANDED_DEPTH,
  },
} satisfies Meta<typeof JsonSchemaViewer>

export default meta

type Story = StoryObj<typeof meta>

export const Cycled: Story = {}
