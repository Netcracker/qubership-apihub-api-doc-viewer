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

import { JsonSchemaNextDiffsViewer } from '@apihub/components/JsonSchemaNextViewer/JsonSchemaNextDiffsViewer';
import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY } from '@netcracker/qubership-apihub-api-diff';
import { isObject } from '@netcracker/qubership-apihub-json-crawl';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { parse } from 'yaml';
import { prepareJsonDiffSchema, REQUEST_BODY_TARGET } from './preprocess';

type StoryArgs = ComponentProps<typeof JsonSchemaNextDiffsViewer> & {
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
  component: JsonSchemaNextDiffsViewer,
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
    diffMetaKeys: {
      control: { disable: true },
      table: { disable: true },
    },
  },
  args: {
    beforeSchemaText: '',
    afterSchemaText: '',
    beforeComponentsText: '',
    afterComponentsText: '',
    diffMetaKeys: DIFF_META_KEYS,
    hideUnchangedNodes: false,
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
    diffMetaKeys: DIFF_META_KEYS,
    hideUnchangedNodes: false,
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

    return <JsonSchemaNextDiffsViewer {...viewerArgs} schema={schema} />
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
