import type { Meta, StoryObj } from '@storybook/react';

import { createJsonSchemaModel } from '@netcracker/qubership-apihub-new-api-data-model';
import '../../App.css';
import { Viewer } from '../components/Viewer';
import '../../index.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'JSON Schema Viewer/Loops',
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

const A_TO_B_TO_A = {
  type: 'object',
  properties: {
    a: {
      type: 'array',
      items: null as any // b
    },
    b: {
      type: 'object',
      properties: {
        c: null as any // a
      }
    }
  }
}
A_TO_B_TO_A.properties.a.items = A_TO_B_TO_A.properties.b
A_TO_B_TO_A.properties.b.properties.c = A_TO_B_TO_A.properties.a

export const AtoBtoA: Story = {
  args: {
    model: createJsonSchemaModel(A_TO_B_TO_A),
  },
};
AtoBtoA.storyName = 'A -> B -> A'
