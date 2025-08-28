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
  title: 'Graph API Viewer/Viewer',
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

const QUERY_OUTPUT_NULLABLE_STRING = `
type Query {
  nullableString: String
}
`
const QUERY_API_OUTPUT_NULLABLE_STRING = buildGraphApi(QUERY_OUTPUT_NULLABLE_STRING)

const MUTATION_ARG_NULLABLE_INT_OUTPUT_NULLABLE_STRING = `
type Mutation {
  nullableString(id: Int): String
}
`
const MUTATION_API_ARG_NULLABLE_INT_OUTPUT_NULLABLE_STRING = buildGraphApi(MUTATION_ARG_NULLABLE_INT_OUTPUT_NULLABLE_STRING)

const SUBSCRIPTION_ARG_NULLABLE_ID_OUTPUT_NULLABLE_STRING = `
type Subscription {
  nullableString(id: ID): String
}
`
const SUBSCRIPTION_API_ARG_NULLABLE_ID_OUTPUT_NULLABLE_STRING = buildGraphApi(SUBSCRIPTION_ARG_NULLABLE_ID_OUTPUT_NULLABLE_STRING)

export const QueryOutputNullableString: Story = {
  args: {
    model: createGraphApiModel(QUERY_API_OUTPUT_NULLABLE_STRING),
  },
};

export const MutationOutputNullableString: Story = {
  args: {
    model: createGraphApiModel(MUTATION_API_ARG_NULLABLE_INT_OUTPUT_NULLABLE_STRING),
  },
};

export const SubscriptionOutputNullableString: Story = {
  args: {
    model: createGraphApiModel(SUBSCRIPTION_API_ARG_NULLABLE_ID_OUTPUT_NULLABLE_STRING),
  },
};

const QUERY_DESCRIPTION_ARG_REQUIRED_STRING_ARG_OPTIONAL_INT_OUTPUT_NULLABLE_STRING = `
type Query {
  """
  Description of the query
  """
  todo(name: String!, age: Int): String
}
`

const QUERY_API_DESCRIPTION_ARG_REQUIRED_STRING_ARG_OPTIONAL_INT_OUTPUT_NULLABLE_STRING = buildGraphApi(QUERY_DESCRIPTION_ARG_REQUIRED_STRING_ARG_OPTIONAL_INT_OUTPUT_NULLABLE_STRING)

export const QueryDescriptionArgRequiredStringArgOptionalIntOutputNullableString: Story = {
  args: {
    model: createGraphApiModel(QUERY_API_DESCRIPTION_ARG_REQUIRED_STRING_ARG_OPTIONAL_INT_OUTPUT_NULLABLE_STRING),
  },
};

const QUERY_OUTPUT_NULLABLE_ENUM = `
type Query {
  getFruit: Fruit
}

enum Fruit {
  APPLE
  BANANA
  ORANGE
}
`

const QUERY_API_OUTPUT_NULLABLE_ENUM = normalize(buildGraphApi(QUERY_OUTPUT_NULLABLE_ENUM), options)

export const QueryOutputNullableEnum: Story = {
  args: {
    model: createGraphApiModel(QUERY_API_OUTPUT_NULLABLE_ENUM),
  },
};

const QUERY_OUTPUT_NULLABLE_OBJECT = `
directive @myDir1 on FIELD_DEFINITION
directive @myDir2 on FIELD_DEFINITION | ENUM_VALUE
"Some directive with 3 arguments, appiable on field definition and enum value"
directive @myDir3(arg1: ID!, arg2: String, arg3: Int = 42) on FIELD_DEFINITION | ENUM_VALUE

type Query {
  getFruit(name: String!): Fruit
}

type Fruit {
  name: String!
  color: String
  weight: Int!
  size: Int @myDir3(arg1: "123", arg2: "456", arg3: 789)
  price: Float! @myDir3(arg1: "123", arg2: "456")
  sugarPercent: Float @myDir2
  isEatable: Boolean!
  isExotic: Boolean @myDir1 @myDir2
  pretty(indent: Int = 2): String!
}
`

const QUERY_API_OUTPUT_NULLABLE_OBJECT = normalize(buildGraphApi(QUERY_OUTPUT_NULLABLE_OBJECT), options)

export const QueryOutputNullableObject: Story = {
  args: {
    model: createGraphApiModel(QUERY_API_OUTPUT_NULLABLE_OBJECT),
  },
};

const MUTATION_OUTPUT_NULLABLE_UNION = `
type Mutation {
  createProfession(
    "Name of specialist"
    name: String!,
    "Specialty of specialist"
    specialty: String!,
    "Patients of doctor"
    patients: [String!],
    "Projects of engineer"
    projects: [String!],
    "Students of teacher"
    students: [String!],
    "Subjects of teacher"
    subjects: [String!]
  ): Profession
}

"Profession in general is one of specific professions"
union Profession = Doctor | Engineer | Teacher

"""
Doctor is a specialist in medicine who can treat patients.

They have a list of their patients.
"""
type Doctor {
  name: String!
  specialty: String!
  patients: [String!]
}

"""
Engineer is a specialist in engineering who can work on projects.

They have a list of their projects.
"""
type Engineer {
  name: String!
  specialty: String!
  projects: [String!]
}

"""
Teacher is a specialist in education who can teach students.

They have a list of their students and subjects.
"""
type Teacher {
  name: String!
  specialty: String!
  students: [String!]
  subjects: [String!]
}
`

const MUTATION_API_OUTPUT_NULLABLE_UNION = normalize(buildGraphApi(MUTATION_OUTPUT_NULLABLE_UNION), options)

export const MutationOutputNullableUnion: Story = {
  args: {
    model: createGraphApiModel(MUTATION_API_OUTPUT_NULLABLE_UNION),
  },
};
