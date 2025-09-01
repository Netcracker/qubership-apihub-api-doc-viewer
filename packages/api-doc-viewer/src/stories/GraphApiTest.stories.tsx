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

import type { Meta, StoryObj } from '@storybook/react';
import { GraphQLOperationViewer } from '../components/GraphQLOperationViewer/GraphQLOperationViewer';
import { prepareGraphApiSchema } from './preprocess';
import { buildGraphApi, graphapi } from './utils/helpers';

import largeGraphQl from '../mocks/graphql/large/1.graphql?raw';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Graph Api Viewer',
  component: GraphQLOperationViewer,
  parameters: {},
  argTypes: {
    source: {
      control: 'object'
    },
  },
  args: {
    source: {}
  }
} satisfies Meta<typeof GraphQLOperationViewer>;

export default meta;

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    source: {},
    expandedDepth: 100
  }
}

export const Union: Story = {
  args: {
    source: prepareGraphApiSchema({
      source: graphapi`
        type Query {
          test: Union
        }
        union Union = String | ID | MyType
        type MyType {
          id: ID!
        }
      `
    }),
  }
}

export const SelfCycled: Story = {
  args: {
    source: prepareGraphApiSchema({
      source: graphapi`
        type Query {
          test: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `,
      circular: true
    }),
  }
}

// Store the complex circular object outside of args
const large1Source = prepareGraphApiSchema({
  source: buildGraphApi(largeGraphQl),
  circular: true
});

export const Large1: Story = {
  args: {
    source: 'large1Source' // Use a key instead of the actual object
  },
  argTypes: {
    source: {
      control: 'select',
      options: ['large1Source'],
      mapping: {
        large1Source: large1Source // Map the key to the actual object
      }
    }
  }
}
