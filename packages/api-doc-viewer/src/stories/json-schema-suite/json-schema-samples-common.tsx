import { JsonSchemaNextViewer } from "@apihub/components/JsonSchemaNextViewer/JsonSchemaNextViewer"
import type { Meta, StoryObj } from "@storybook/react"
import type { JsonSchemaSampleCase } from "../utils/json-schema-samples-cases"

const JSON_SCHEMA_SUITE_EXPANDED_DEPTH = 5

export type JsonSchemaCaseStoryComponentProps = {
  caseId: string
}

export const JsonSchemaSampleStory = (_props: JsonSchemaCaseStoryComponentProps) => null

export type JsonSchemaSamplesStoryMeta = Meta<typeof JsonSchemaSampleStory>
export type JsonSchemaSamplesStoryObj = StoryObj<JsonSchemaSamplesStoryMeta>

export const jsonSchemaSamplesStoryMetaBase = {
  component: JsonSchemaSampleStory,
  argTypes: {
    caseId: {
      control: { disable: true },
      table: { disable: true },
    },
  },
} satisfies Pick<JsonSchemaSamplesStoryMeta, "component" | "argTypes">

export const createCaseStoryFactory = (
  sampleById: Record<string, JsonSchemaSampleCase>,
) => {
  return (caseId: string): JsonSchemaSamplesStoryObj => {
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
            expandedDepth={JSON_SCHEMA_SUITE_EXPANDED_DEPTH}
          />
        )
      },
    }
  }
}
