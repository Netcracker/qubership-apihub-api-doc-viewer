/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY } from '@netcracker/qubership-apihub-api-diff';
import { isObject } from '@netcracker/qubership-apihub-json-crawl';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { parse } from 'yaml';
import { JsonSchemaDiffViewer } from '../components/JsonSchemaViewer/JsonSchemaDiffViewer';
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from '../types/LayoutMode';
import { prepareJsonDiffSchema, REQUEST_BODY_TARGET } from './preprocess';

type StoryArgs = ComponentProps<typeof JsonSchemaDiffViewer> & {
  beforeSchemaText: string
  afterSchemaText: string
  beforeComponentsText?: string
  afterComponentsText?: string
}

const DIFF_META_KEYS = {
  diffsMetaKey: DIFF_META_KEY,
  aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY,
}

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Debug/Json Schema Diff Viewer',
  component: JsonSchemaDiffViewer,
  parameters: {},
  argTypes: {
    beforeSchemaText: {
      control: 'text',
    },
    afterSchemaText: {
      control: 'text',
    },
    beforeComponentsText: {
      control: 'text',
    },
    afterComponentsText: {
      control: 'text',
    },
    schema: {
      control: { disable: true },
      table: { disable: true },
    },
    metaKeys: {
      control: { disable: true },
      table: { disable: true },
    },
  },
  args: {
    beforeSchemaText: '',
    afterSchemaText: '',
    beforeComponentsText: '',
    afterComponentsText: '',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS,
  },
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<StoryArgs>

export const Debug: Story = {
  args: {
    beforeSchemaText: '',
    afterSchemaText: '',
    beforeComponentsText: '',
    afterComponentsText: '',
    expandedDepth: 2,
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS,
  },
  render: (args) => {
    const {
      beforeSchemaText,
      afterSchemaText,
      beforeComponentsText,
      afterComponentsText,
      ...viewerArgs
    } = args

    const beforeSchema = parseJsonOrYaml(beforeSchemaText)
    const afterSchema = parseJsonOrYaml(afterSchemaText)
    const beforeComponents = beforeComponentsText ? parseJsonOrYaml(beforeComponentsText) : undefined
    const afterComponents = afterComponentsText ? parseJsonOrYaml(afterComponentsText) : undefined

    const schema = prepareJsonDiffSchema({
      beforeSchema,
      afterSchema,
      beforeAdditionalComponents: isObject(beforeComponents) ? beforeComponents : undefined,
      afterAdditionalComponents: isObject(afterComponents) ? afterComponents : undefined,
      target: REQUEST_BODY_TARGET,
    })

    console.log(beforeSchemaText)
    console.log(afterSchemaText)
    console.debug('Prepared diff schema:', schema)

    return <JsonSchemaDiffViewer {...viewerArgs} schema={schema} />
  },
}

function parseJsonOrYaml(text: string): unknown {
  let parsed: unknown = undefined
  try {
    parsed = JSON.parse(text)
  } catch (error) {
    console.warn('Cannot parse JSON:', error)
    parsed = undefined
  }
  try {
    if (!parsed) {
      parsed = parse(text)
    }
  } catch (error) {
    console.warn('Cannot parse YAML:', error)
    parsed = undefined
  }
  if (!parsed || typeof parsed !== 'object') {
    parsed = {}
  }
  console.debug('Parsed source:', parsed)
  return parsed
}
