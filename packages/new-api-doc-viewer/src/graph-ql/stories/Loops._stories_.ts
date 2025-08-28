import type { Meta, StoryObj } from '@storybook/react';

import { createGraphApiModel } from '@netcracker/qubership-apihub-new-api-data-model';
import type { NormalizeOptions } from '@netcracker/qubership-apihub-api-unifier';
import { normalize } from '@netcracker/qubership-apihub-api-unifier';
import '../../App.css';
import '../../index.css';
import { Viewer } from '../components/Viewer';
import { buildGraphApi } from '../utilities/graph-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Graph API Viewer/Loops',
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

// function randomBoolean() {
//   return Math.random() > 0.5;
// }

const TEST_INLINE_REFS_FLAG = Symbol('testInlineRefsFlag')
const TEST_ORIGINS_FLAG = Symbol('testOriginsFlag')
const TEST_DEFAULTS_FLAG = Symbol('testDefaultsFlag')

const options = {
  inlineRefsFlag: TEST_INLINE_REFS_FLAG,
  originsFlag: TEST_ORIGINS_FLAG,
  defaultsFlag: TEST_DEFAULTS_FLAG,
  unify: true,
  validate: true
} satisfies NormalizeOptions

const SUBSCRIPTION_OUTPUT_REQUIRED_LIST_OF_NULLABLE_CYCLED_OBJECT = `
type Subscription {
  getEmployees: [Employee!]
}

type Employee {
  id: ID!
  organization: String!
  position: Position!
  manager: Employee
  subordinates: [Employee!]
}

scalar Position
`
const SUBSCRIPTION_API_OUTPUT_REQUIRED_LIST_OF_NULLABLE_CYCLED_OBJECT = normalize(buildGraphApi(SUBSCRIPTION_OUTPUT_REQUIRED_LIST_OF_NULLABLE_CYCLED_OBJECT), options)

export const SubscriptionOutputRequiredListOfNullableCycledObject: Story = {
  args: {
    model: createGraphApiModel(SUBSCRIPTION_API_OUTPUT_REQUIRED_LIST_OF_NULLABLE_CYCLED_OBJECT),
  },
};
