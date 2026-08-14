import { JsonSchemaNextViewer } from "@apihub/components/JsonSchemaNextViewer/JsonSchemaNextViewer"
import type { Meta, StoryObj } from "@storybook/react"
import type { JsonSchemaSampleCase } from "../utils/json-schema-samples-cases"

const JSON_SCHEMA_NEXT_SUITE_EXPANDED_DEPTH = 5

export type JsonSchemaNextCaseStoryComponentProps = {
  caseId: string
}

export const JsonSchemaNextSampleStory = (_props: JsonSchemaNextCaseStoryComponentProps) => null

export type JsonSchemaNextSamplesStoryMeta = Meta<typeof JsonSchemaNextSampleStory>
export type JsonSchemaNextSamplesStoryObj = StoryObj<JsonSchemaNextSamplesStoryMeta>

export const jsonSchemaNextSamplesStoryMetaBase = {
  component: JsonSchemaNextSampleStory,
  argTypes: {
    caseId: {
      control: { disable: true },
      table: { disable: true },
    },
  },
} satisfies Pick<JsonSchemaNextSamplesStoryMeta, "component" | "argTypes">

export const createNextCaseStoryFactory = (
  sampleById: Record<string, JsonSchemaSampleCase>,
) => {
  return (caseId: string): JsonSchemaNextSamplesStoryObj => {
    const sample = sampleById[caseId]
    if (!sample) {
      throw new Error(`Sample case not found: ${caseId}`)
    }

    return {
      name: caseId,
      args: { caseId },
      render: (args) => {
        const resolvedSample = sampleById[args.caseId]
        return (
          <JsonSchemaNextViewer
            schema={resolvedSample.schema}
            expandedDepth={JSON_SCHEMA_NEXT_SUITE_EXPANDED_DEPTH}
          />
        )
      },
    }
  }
}
