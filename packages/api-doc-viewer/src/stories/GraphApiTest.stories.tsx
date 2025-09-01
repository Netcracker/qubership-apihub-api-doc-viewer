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
import largeGraphQl4 from '../mocks/graphql/large/4.graphql?raw';
import largeGraphQl8 from '../mocks/graphql/large/8.graphql?raw';

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

export const SelfCycledLong: Story = {
  args: {
    source: prepareGraphApiSchema({
      source: graphapi`
        type Query {
          test: Cycled1
        }
        type Cycled1 {
          c1: Cycled2
          f1(arg11: String, arg12: Int = 42): Cycled3!
        }

        type Cycled2 {
          c2: Cycled3
          f2(arg21: String, arg22: Int = 42): Cycled4!
        }

        type Cycled3 {
          c3: Cycled4
          f3(arg31: String, arg32: Int = 42): Cycled5!
        }

        type Cycled4 {
          c4: Cycled5
          f4(arg41: String, arg42: Int = 42): Cycled6!
        }

        type Cycled5 {
          c5: Cycled6
          f5(arg51: String, arg52: Int = 42): Cycled7!
        }
        

        type Cycled6 {
          c6: Cycled7
          f6(arg61: String, arg62: Int = 42): Cycled8!
        }
        

        type Cycled7 {
          c7: Cycled8
          f7(arg71: String, arg72: Int = 42): Cycled9!
        }
        

        type Cycled8 {
          c8: Cycled9
          f8(arg81: String, arg82: Int = 42): Cycled10!
        }
        

        type Cycled9 {
          c9: Cycled1
          f9(arg91: String, arg92: Int = 42): Cycled2!
        }
        

        type Cycled10 {
          c10: Cycled3
          f10(arg101: String, arg102: Int = 42): Cycled4!
        }
        
      `,
      circular: true
    }),
  }
}

export const SameEntityDifferentUsages: Story = {
  args: {
    source: prepareGraphApiSchema({
      source: graphapi`
        type Query {
          test: SomeEntity
        }

        type SomeEntity {
          value: String
          int: Int!
          method_A(arg: SomeEntity!): SomeEntity!
          method_B(arg: Int = 42): String
          method_C(arg: String): String
          method_D(arg: String = "Test"): Boolean
          method_E(arg: String!): Float!
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

// Store the complex circular object outside of args
const large4Source = prepareGraphApiSchema({
  source: buildGraphApi(largeGraphQl4),
  circular: true
});

// Store the complex circular object outside of args
const large8Source = prepareGraphApiSchema({
  source: buildGraphApi(largeGraphQl8),
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

export const Large4: Story = {
  args: {
    source: 'large4Source' // Use a key instead of the actual object
  },
  argTypes: {
    source: {
      control: 'select',
      options: ['large4Source'],
      mapping: {
        large4Source: large4Source // Map the key to the actual object
      }
    }
  }
}

export const Large8: Story = {
  args: {
    source: 'large8Source' // Use a key instead of the actual object
  },
  argTypes: {
    source: {
      control: 'select',
      options: ['large8Source'],
      mapping: {
        large8Source: large8Source // Map the key to the actual object
      }
    }
  }
}