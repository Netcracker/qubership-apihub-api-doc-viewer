import type { Meta, StoryObj } from "@storybook/react"
import {
  collectJsonSchemaSampleCases,
  createJsonSchemaSampleById,
} from "../utils/json-schema-samples-cases"
import {
  JsonSchemaSampleStory,
  createCaseStoryFactory,
  jsonSchemaSamplesStoryMetaBase,
  type JsonSchemaSamplesStoryObj,
} from "./json-schema-samples-common"

const sampleFiles = import.meta.glob(
  "../../../../samples/json-schema/combiner/*/sample.yaml",
  { as: "raw", eager: true },
) as Record<string, string>

const sampleCases = collectJsonSchemaSampleCases(sampleFiles)
const sampleById = createJsonSchemaSampleById(sampleCases)
const createCaseStory = createCaseStoryFactory(sampleById)

// eslint-disable-next-line storybook/story-exports
const meta = {
  ...jsonSchemaSamplesStoryMetaBase,
  id: "json-schema-suite-combiner",
  title: "JSON Schema Suite/Combiner",
} satisfies Meta<typeof JsonSchemaSampleStory>

export default meta

type Story = JsonSchemaSamplesStoryObj

export const Case_001_oneof_nested_anyof: Story = createCaseStory("001-oneof-nested-anyof")
