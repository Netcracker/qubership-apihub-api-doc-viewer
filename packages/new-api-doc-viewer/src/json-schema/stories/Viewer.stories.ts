import type { Meta, StoryObj } from '@storybook/react';

import { createJsonSchemaModel } from '@netcracker/qubership-apihub-new-api-data-model';
import '../../App.css';
import { Viewer } from '../components/Viewer';
import '../../index.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'JSON Schema Viewer/Viewer',
  component: Viewer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    model: { control: 'object' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { model: [] },
} satisfies Meta<typeof Viewer>;

export default meta;
type Story = StoryObj<typeof meta>;

function randomBoolean() {
  return Math.random() > 0.5;
}

const SCHEMA_STRING = {
  type: 'string',
  title: 'MyString',
  format: 'MYID',
  description: 'A string',
  minLength: 1,
  maxLength: 10,
  pattern: '^[a-z]+$',
  enum: ['a', 'b', 'c'],
  default: 'a',
  readOnly: false,
  writeOnly: false,
  deprecated: false,
  examples: ['a', 'b', 'c'],
}

const SCHEMA_NUMBER = {
  type: 'number',
  title: 'MyNumber',
  format: 'MYID',
  description: 'A number',
  minimum: 1,
  exclusiveMinimum: randomBoolean(),
  maximum: 10,
  exclusiveMaximum: randomBoolean(),
  multipleOf: 1,
  default: 1,
  readOnly: randomBoolean(),
  writeOnly: randomBoolean(),
  deprecated: randomBoolean(),
  examples: [1, 2, 3],
}

const SCHEMA_BOOLEAN = {
  type: 'boolean',
  title: 'MyBoolean',
  description: 'A boolean',
  default: true,
  readOnly: randomBoolean(),
  writeOnly: randomBoolean(),
  deprecated: randomBoolean(),
  examples: [true, false],
}

const SCHEMA_OBJECT = {
  type: 'object',
  title: 'MyObject',
  description: 'A object',
  properties: {
    name: SCHEMA_STRING,
    age: SCHEMA_NUMBER,
    isStudent: SCHEMA_BOOLEAN,
    partnerStudent: {
      type: 'object',
      title: 'PartnerStudent',
      description: 'A partner student',
      properties: {
        name: SCHEMA_STRING,
        age: SCHEMA_NUMBER,
      },
    },
  },
}

const SCHEMA_COMBINER = {
  oneOf: [
    SCHEMA_STRING,
    SCHEMA_NUMBER,
    SCHEMA_OBJECT,
  ]
}

const SCHEMA_COMBINER_2 = {
  type: 'object',
  title: 'MyObject',
  description: 'A object',
  properties: {
    combiner: SCHEMA_COMBINER,
    notCombiner: SCHEMA_STRING,
  },
}

const SCHEMA_COMBINER_3 = {
  oneOf: [
    { type: 'string', title: 'String', description: 'A string' },
    {
      oneOf: [
        { type: 'boolean', title: 'Boolean', description: 'A boolean' },
        { type: 'integer', title: 'Integer', description: 'A integer' },
      ]
    },
  ]
}

const SCHEMA_COMBINER_4 = {
  oneOf: [
    { type: 'string', title: 'String', description: 'A string' },
    {
      type: 'object',
      title: 'Object',
      description: 'A object',
      properties: {
        combiner: {
          oneOf: [
            { type: 'boolean', title: 'Boolean', description: 'A boolean' },
            { type: 'integer', title: 'Integer', description: 'A integer' },
          ]
        },
        notCombiner: { type: 'number', title: 'Number', description: 'A number' },
      },
    },
  ]
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const String: Story = {
  args: {
    model: createJsonSchemaModel(SCHEMA_STRING),
  },
};

export const Number: Story = {
  args: {
    model: createJsonSchemaModel(SCHEMA_NUMBER),
  },
};

export const Boolean: Story = {
  args: {
    model: createJsonSchemaModel(SCHEMA_BOOLEAN),
  },
};

export const Object: Story = {
  args: {
    model: createJsonSchemaModel(SCHEMA_OBJECT),
  },
};

export const Combiner: Story = {
  args: {
    model: createJsonSchemaModel(SCHEMA_COMBINER),
  },
};

export const Combiner2: Story = {
  args: {
    model: createJsonSchemaModel(SCHEMA_COMBINER_2),
  },
};

export const Combiner3: Story = {
  args: {
    model: createJsonSchemaModel(SCHEMA_COMBINER_3),
  },
};

export const Combiner4: Story = {
  args: {
    model: createJsonSchemaModel(SCHEMA_COMBINER_4),
  },
};

export const Depth: Story = {
  args: {
    model: createJsonSchemaModel({
      type: 'object',
      title: 'Parent',
      description: 'A parent object',
      properties: {
        name: SCHEMA_STRING,
        age: SCHEMA_NUMBER,
        child: {
          type: 'object',
          title: 'Child',
          description: 'A child object',
          properties: {
            name: SCHEMA_STRING,
            age: SCHEMA_NUMBER,
            grandChild: {
              type: 'object',
              title: 'GrandChild',
              description: 'A grand child object',
              properties: {
                name: SCHEMA_STRING,
                age: SCHEMA_NUMBER,
              },
            },
          },
        }
      },
    }),
  },
};
