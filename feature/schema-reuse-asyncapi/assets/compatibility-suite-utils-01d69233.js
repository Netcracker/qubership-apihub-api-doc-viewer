import{j as q}from"./_commonjs-dynamic-modules-6308e768.js";import{x as fe,y as le,D as L,w as de,S as ye,a as W}from"./GraphPropNodeViewer-28195d99.js";import{g as he,r as Y}from"./index-f46741a2.js";import{j as X}from"./js-yaml-38530ef5.js";import{G as ge}from"./GraphQLOperationDiffViewer-781ce75b.js";import{b as k}from"./graph-api-transformers-14a7db95.js";const z=new Map([["graphql/directives/add-argument-default-value-for-schema-directive",{before:`directive @limit (offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/add-argument-default-value-of-executable-directive-with-no-usage",{before:`directive @limit(offset: Int) on FIELD 

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int = 0) on FIELD 

type Query {
  fruits: [String]
}`}],["graphql/directives/add-argument-default-value-of-schema-directive-with-no-usage",{before:`directive @limit(offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`}],["graphql/directives/add-argument-for-executable-directive-with-no-usage",{before:`directive @limit on FIELD 

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int) on FIELD 

type Query {
  fruits: [String]
}
`}],["graphql/directives/add-argument-for-schema-directive",{before:`directive @limit on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/add-argument-for-schema-directive-with-no-usage",{before:`directive @mock on FIELD_DEFINITION

scalar JSON

type Query {
  fruits: [String]
}`,after:`directive @mock(value: JSON) on FIELD_DEFINITION

scalar JSON

type Query {
  fruits: [String]
}`}],["graphql/directives/add-default-deprecated-directive-for-enum-value",{before:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple
  banana
}`,after:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated
  banana
}`}],["graphql/directives/add-default-deprecated-directive-for-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated
}`}],["graphql/directives/add-deprecated-directive-with-reason-for-enum-value",{before:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple
  banana
}`,after:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated (reason: "No longer supported")
  banana
}`}],["graphql/directives/add-deprecated-directive-with-reason-for-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated (reason: "No longer supported")
} `}],["graphql/directives/add-executable-directive-with-no-usage",{before:`type Query {
  fruits: [String]
}`,after:`directive @limit on FIELD

type Query {
  fruits: [String]
}`}],["graphql/directives/add-executable-location-to-directive",{before:"directive @limit (offset: Int = 0) on FRAGMENT_DEFINITION",after:"directive @limit (offset: Int = 0) on FRAGMENT_DEFINITION | FIELD"}],["graphql/directives/add-new-schema-location-to-directive",{before:`directive @limit (offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int = 0) on FIELD_DEFINITION | ENUM_VALUE

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/add-reason-for-deprecated-directive",{before:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated
  banana
}`,after:`type Query {
    fruits: [FruitType]
}
enum FruitType {
    apple @deprecated (reason: "Use Huawei instead")
    banana
}
`}],["graphql/directives/add-reason-of-deprecated-directive-in-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated (reason: "Use Huawei instead")
}`}],["graphql/directives/add-schema-directive-with-no-usage",{before:`type Query {
  fruits: [String]
}`,after:`directive @mock on FIELD_DEFINITION

type Query {
  fruits: [String]
}`}],["graphql/directives/apply-schema-directive-to-argument-definition",{before:`directive @sort on ARGUMENT_DEFINITION

type Query {
  fruits(id: ID): [String]
}`,after:`directive @sort on ARGUMENT_DEFINITION

type Query {
  fruits(id: ID @sort): [String]
}
`}],["graphql/directives/apply-schema-directive-to-enum",{before:`directive @sort on ENUM

type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}`,after:`directive @sort on ENUM

type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season @sort{
  FALL
  WINTER
  SPRING
}`}],["graphql/directives/apply-schema-directive-to-enum-value",{before:`directive @sort on ENUM_VALUE

type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}`,after:`directive @sort on ENUM_VALUE

type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL @sort
  WINTER
  SPRING
}`}],["graphql/directives/apply-schema-directive-to-field-definition",{before:`directive @sort on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID
  name: String
}`,after:`directive @sort on FIELD_DEFINITION
type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @sort
  name: String
}`}],["graphql/directives/apply-schema-directive-to-input-field-definition",{before:`directive @sort on INPUT_FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

input Fruit {
  id: ID
  name: String
} `,after:`directive @sort on INPUT_FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

input Fruit {
  id: ID @sort
  name: String
} `}],["graphql/directives/apply-schema-directive-to-input-object",{before:`directive @sort on INPUT_OBJECT

type Query {
  fruits(in: Fruit): String
}

input Fruit {
  id: ID
  name: String
} `,after:`directive @sort on INPUT_OBJECT

type Query {
  fruits(in: Fruit): String
}

input Fruit @sort {
  id: ID
  name: String
} `}],["graphql/directives/apply-schema-directive-to-interface",{before:`directive @sort on INTERFACE

type Query {
  fruits: [Fruit]
}

interface Fruit {
  id: ID
  name: String
}`,after:`directive @sort on INTERFACE

type Query {
  fruits: [Fruit]
}  

interface Fruit @sort {
  id: ID
  name: String
}`}],["graphql/directives/apply-schema-directive-to-object",{before:`directive @sort on OBJECT

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID
  name: String
}`,after:`directive @sort on OBJECT

type Query {
  fruits: [Fruit]
}

type Fruit @sort {
  id: ID
  name: String
}`}],["graphql/directives/apply-schema-directive-to-scalar",{before:`type Query {
  fruitsNumber: Count
}

scalar Count `,after:`directive @multipleOf on SCALAR

type Query {
  fruitsNumber: Count
}

scalar Count @multipleOf`}],["graphql/directives/apply-schema-directive-to-union",{before:`directive @sort on UNION 

type Apple {
  name: String
  variety: String
}

type Banana {
  name: String
  length: Int
}

union Fruit = Apple | Banana

type Query {
  fruits: [Fruit]
}
 `,after:`directive @sort on UNION 

type Apple {
  name: String
  variety: String
}

type Banana {
  name: String
  length: Int
}

union Fruit @sort = Apple | Banana

type Query {
  fruits: [Fruit]
}`}],["graphql/directives/delete-argument-default-value-for-schema-directive",{before:`directive @limit (offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/delete-argument-default-value-of-executable-directive-with-no-usage",{before:`directive @limit(offset: Int = 0) on FIELD 

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int) on FIELD 

type Query {
  fruits: [String]
}`}],["graphql/directives/delete-argument-default-value-of-schema-directive-with-no-usage",{before:`directive @limit(offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`}],["graphql/directives/delete-argument-for-schema-directive",{before:`directive @limit (offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/delete-argument-for-schema-directive-with-no-usage",{before:`directive @mock(value: JSON) on FIELD_DEFINITION

scalar JSON

type Query {
  fruits: [String]
}`,after:`directive @mock on FIELD_DEFINITION

scalar JSON

type Query {
  fruits: [String]
}`}],["graphql/directives/delete-argument-in-executable-directive-with-no-usage",{before:`directive @limit(offset: Int) on FIELD 

type Query {
  fruits: [String]
}`,after:`directive @limit on FIELD 

type Query {
  fruits: [String]
}`}],["graphql/directives/delete-executable-directive-with-no-usage",{before:`directive @limit on FIELD 

type Query {
  fruits: [String]
}`,after:`type Query {
  fruits: [String]
}`}],["graphql/directives/delete-executable-location-to-directive",{before:"directive @limit (offset: Int = 0) on FRAGMENT_DEFINITION | FIELD",after:"directive @limit (offset: Int = 0) on FRAGMENT_DEFINITION"}],["graphql/directives/delete-schema-directive-with-no-usage",{before:`directive @mock on FIELD_DEFINITION

type Query {
  fruits: [String]
}`,after:`type Query {
  fruits: [String]
}`}],["graphql/directives/delete-schema-location-in-directive",{before:`directive @limit (offset: Int = 0) on FIELD_DEFINITION | ENUM_VALUE

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/remove-default-deprecated-directive-for-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`}],["graphql/directives/remove-deprecated-directive-from-enum-value",{before:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated
  banana
}`,after:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple
  banana
}`}],["graphql/directives/remove-deprecated-directive-with-reason-from-enum-value",{before:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated (reason: "No longer supported")
  banana
}`,after:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple
  banana
}`}],["graphql/directives/remove-deprecated-directive-with-reason-in-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated (reason: "No longer supported")
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`}],["graphql/directives/remove-reason-for-deprecated-directive",{before:`type Query {
    fruits: [FruitType]
}
enum FruitType {
    apple @deprecated (reason: "No longer supported")
    banana @deprecated (reason: "Not fresh")
}
`,after:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated
  banana @deprecated
}`}],["graphql/directives/remove-reason-of-deprecated-directive-in-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID @deprecated (reason: "No longer supported")
  name: String @deprecated (reason: "Do not use")
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID @deprecated
  name: String @deprecated
}`}],["graphql/directives/update-argument-default-value-for-schema-directive",{before:`directive @limit (offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int = 1) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/update-argument-default-value-of-executable-directive-with-no-usage",{before:`directive @limit(offset: Int = 0) on FIELD 

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int = 1) on FIELD 

type Query {
  fruits: [String]
}`}],["graphql/directives/update-argument-default-value-of-schema-directive-with-no-usage",{before:`directive @limit(offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int = 1) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`}],["graphql/directives/update-reason-for-deprecated-directive",{before:`type Query {
    fruits: [FruitType]
}
enum FruitType {
    apple @deprecated (reason: "No longer supported")
    banana
}
`,after:`type Query {
    fruits: [FruitType]
}
enum FruitType {
    apple @deprecated (reason: "was deleted")
    banana
}
`}],["graphql/directives/update-reason-for-deprecated-directive-in-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated (reason: "Do not use")
} `,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated (reason: "It shall not be used")
} `}],["graphql/input-type-argument-of-root-type/add-description-for-field-of-input-type-argument",{before:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`,after:`input MessageInput {
  """
  The content of the message.
  """
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/input-type-argument-of-root-type/add-enum-value-of-field-in-input-type-argument",{before:`input MessageInput {
  content: Content
  author: String
  createTimestamp: String
}
enum Content {
  text
  image
}
type Mutation {
  createMessage(input: MessageInput): String
}`,after:`input MessageInput {
  content: Content
  author: String
  createTimestamp: String
}
enum Content {
  text
  image
  video
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/input-type-argument-of-root-type/add-input-type-argument",{before:`type Mutation {
  createMessage: String
}
 
`,after:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/input-type-argument-of-root-type/add-new-field-in-input-type-argument",{before:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `,after:`input MessageInput {
  content: String
  author: String
  likes: Int
}
type Mutation {
  createMessage(input: MessageInput): String
} `}],["graphql/input-type-argument-of-root-type/change-type-of-field-in-input-type-argument",{before:`input MessageInput {
  content: String
  author: String
  createTimestamp: String
}
type Mutation {
  createMessage(input: MessageInput): String
}
`,after:`input MessageInput {
  content: String
  author: String
    createTimestamp: Int
}
type Mutation {
  createMessage(input: MessageInput): String
}
`}],["graphql/input-type-argument-of-root-type/delete-description-for-field-of-input-type-argument",{before:`input MessageInput {
  """
  The content of the message.
  """
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`,after:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/input-type-argument-of-root-type/mark-mandatory-field-of-input-type-argument-as-optional",{before:`input MessageInput {
  content: String!
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `,after:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `}],["graphql/input-type-argument-of-root-type/mark-optional-field-of-input-type-argument-as-mandatory",{before:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `,after:`input MessageInput {
  content: String!
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `}],["graphql/input-type-argument-of-root-type/remove-enum-value-of-field-in-input-type-argument",{before:`input MessageInput {
  content: Content
  author: String
  createTimestamp: String
}
enum Content {
  text
  image
  video
}
type Mutation {
  createMessage(input: MessageInput): String
}`,after:`input MessageInput {
  content: Content
  author: String
  createTimestamp: String
}
enum Content {
  text
  image
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/input-type-argument-of-root-type/remove-field-from-input-type-argument",{before:`input MessageInput {
  content: String
  author: String
  likes: Int
}
type Mutation {
  createMessage(input: MessageInput): String
} `,after:`input MessageInput {
  content: String
  likes: Int
}
type Mutation {
  createMessage(input: MessageInput): String
} `}],["graphql/input-type-argument-of-root-type/remove-input-type-argument",{before:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `,after:`type Mutation {
  createMessage: String
}
`}],["graphql/input-type-argument-of-root-type/update-description-for-field-of-input-type-argument",{before:`input MessageInput {
  """
  The content of the message.
  """
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`,after:`input MessageInput {
  """
  Details of message.
  """
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/interface-output-type-of-root-type/add-description-for-field-of-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}
`}],["graphql/interface-output-type-of-root-type/add-description-for-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
"""Fruit object details"""
interface Fruit {
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/add-enum-value-of-field-in-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
  banana
}`}],["graphql/interface-output-type-of-root-type/add-new-field-in-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/change-field-type-of-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: Int
  name: String
}`}],["graphql/interface-output-type-of-root-type/change-field-type-of-output-interface-from-enum-to-string",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  name: FruitType
}
enum FruitType {
  apple
  mango
}
`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  name: String
}
`}],["graphql/interface-output-type-of-root-type/delete-description-for-field-of-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit { 
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/delete-description-of-output-interface",{before:`type Query {
  fruits: Fruit
}
  """Fruit object details"""
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/mark-mandatory-field-of-output-interface-as-optional",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID!
  name: String
}
`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/mark-optional-field-of-output-interface-as-mandatory",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID!
  name: String
}`}],["graphql/interface-output-type-of-root-type/remove-enum-value-of-field-in-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
  banana
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
}`}],["graphql/interface-output-type-of-root-type/remove-field-from-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
}`}],["graphql/interface-output-type-of-root-type/update-description-for-field-of-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  """ 
  fruit id
  """
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/update-description-of-output-interface",{before:`type Query {
  fruits: Fruit
}
"""Fruit object details"""
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
"""Fruit fields"""
interface Fruit {
  id: ID
  name: String
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/add-description-for-field-of-interface-type",{before:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name of the Apple."""  
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
""" Unique ID of the Fruit."""
  id: ID
""" Name of the Fruit."""  
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name of the Apple."""  
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/add-description-for-interface-type",{before:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`""" Common properties"""
interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/add-interface-for-object-type",{before:`interface Fruit {
  id: ID
  name: String
}
type Apple {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`,after:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat implements Animal {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/add-new-field-in-interface-type",{before:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/change-field-type-of-interface-type",{before:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
  id: Int
  name: String
  color: String
}
type Apple implements Fruit {
  id: Int
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/change-interface-for-object-type",{before:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat implements Animal {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`,after:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Animal {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat implements Fruit {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/delete-description-for-field-of-interface-type",{before:`interface Fruit {
""" Unique ID of the Fruit."""
  id: ID
""" Name of the Fruit."""  
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name of the Apple."""
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`,after:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name of the Apple."""  
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/delete-description-for-interface-type",{before:`""" Common properties""" 
interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/delete-interface-for-object-type",{before:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat implements Animal {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`,after:`interface Fruit {
  id: ID
  name: String
}
type Apple {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/mark-mandatory-field-of-interface-type-as-optional",{before:`interface Fruit {
  id: ID!
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID!
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/mark-optional-field-of-interface-type-as-mandatory",{before:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`,after:`interface Fruit {
  id: ID!
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID!
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/remove-field-from-interface-type",{before:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/update-description-for-field-of-interface-type",{before:`interface Fruit {
""" Unique ID of the Fruit."""
  id: ID
""" Name of the Fruit."""  
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name"""  
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`,after:`interface Fruit {
""" Fruit ID"""
  id: ID
""" Name"""  
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name"""  
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/update-description-for-interface-type",{before:`""" Common properties""" 
interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`""" Fruit Interface properties""" 
interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type/add-description-for-field-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}
`}],["graphql/object-output-type-of-root-type/add-description-for-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
"""Fruit object details"""
type Fruit {
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/add-enum-value-of-field-in-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
  banana
}`}],["graphql/object-output-type-of-root-type/add-new-field-in-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/change-field-type-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: Int
  name: String
}`}],["graphql/object-output-type-of-root-type/change-field-type-of-output-object-type-from-enum-to-string",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  name: FruitType
}
enum FruitType {
  apple
  mango
}
`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  name: String
}
`}],["graphql/object-output-type-of-root-type/delete-description-for-field-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit { 
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/delete-description-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
  """Fruit object details"""
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/mark-mandatory-field-of-output-object-type-as-optional",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID!
  name: String
}
`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/mark-optional-field-of-output-object-type-as-mandatory",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID!
  name: String
}`}],["graphql/object-output-type-of-root-type/remove-enum-value-of-field-in-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
  banana
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
}`}],["graphql/object-output-type-of-root-type/remove-field-from-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
}`}],["graphql/object-output-type-of-root-type/update-description-for-field-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  """ 
  fruit id
  """
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/update-description-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
"""Fruit object details"""
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
"""Fruit fields"""
type Fruit {
  id: ID
  name: String
}
`}],["graphql/root-type-general/add-description-for-root-type",{before:`type Query {
  fruits: String
}`,after:`type Query {
  """
  The root query for fetching fruit data
  """
  fruits: String
}
`}],["graphql/root-type-general/add-new-root-type",{before:`type Query {
  fruits: String
}`,after:`type Query {
  fruits: String
    fruitsByColor: String
}
`}],["graphql/root-type-general/change-description-for-root-type",{before:`type Query {
  """
  The root query for fetching fruit data
  """
  fruits: String
}
`,after:`type Query {
  """
  fruit data
  """
  fruits: String
}
`}],["graphql/root-type-general/delete-description-for-root-type",{before:`type Query {
  """
  The root query for fetching fruit data
  """
  fruits: String
}
`,after:`type Query {
  fruits: String
}`}],["graphql/root-type-general/delete-root-type",{before:`type Query {
  fruits: String
    fruitsByColor: String
}
`,after:`type Query {
  fruits: String
}`}],["graphql/scalar-output-type-of-root-type/add-description-for-enum-value-in-output-type",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
  orange
}`,after:`type Query {
  fruits: Fruit
}
enum Fruit {
  """
  fruit apple
  """
  apple
  mango
  orange
}`}],["graphql/scalar-output-type-of-root-type/add-enum-value-in-output-type",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
}`,after:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
  orange
}`}],["graphql/scalar-output-type-of-root-type/add-list-type-for-output-type",{before:`type Query {
  fruits: String
}`,after:`type Query {
  fruits: [String]
}`}],["graphql/scalar-output-type-of-root-type/change-description-for-enum-value-in-output-type",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  """
  representing fruit apple
  """
  apple
  mango
  orange
}`,after:`type Query {
  fruits: Fruit
}
enum Fruit {
  """
  fruit details of apple
  """
  apple
  mango
  orange
}`}],["graphql/scalar-output-type-of-root-type/change-output-type",{before:`type Query {
  fruits: String
}`,after:`type Query {
  fruits: Int
}`}],["graphql/scalar-output-type-of-root-type/change-output-type-from-enum-to-string",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
  orange
}
`,after:`type Query {
  fruits: String
}
`}],["graphql/scalar-output-type-of-root-type/delete-description-for-enum-value-in-output-type",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  """
  representing fruit apple
  """
  apple
  mango
  orange
}`,after:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
  orange
}`}],["graphql/scalar-output-type-of-root-type/mark-mandatory-output-type-as-optional",{before:`type Query {
  fruits: String!
}`,after:`type Query {
  fruits: String
}`}],["graphql/scalar-output-type-of-root-type/mark-optional-output-type-as-mandatory",{before:`type Query {
  fruits: String
}`,after:`type Query {
  fruits: String!
}`}],["graphql/scalar-output-type-of-root-type/remove-enum-value-in-output-type",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
  orange
}`,after:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
}`}],["graphql/scalar-type-argument-of-root-type/add-default-value-of-argument",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits(id: ID = "F4"): String
}`}],["graphql/scalar-type-argument-of-root-type/add-default-value-of-required-argument",{before:`type Query {
  fruits(id: ID!): String
}`,after:`type Query {
  fruits(id: ID! = "F4"): String
}
`}],["graphql/scalar-type-argument-of-root-type/add-description-for-argument",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits(
  """
  Unique identifier of fruit.
  """ 
  id: ID): String
}
`}],["graphql/scalar-type-argument-of-root-type/add-description-for-enum-type",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}
`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
"""
enum representing different seasons.
"""
enum Season {
  FALL
  WINTER
  SPRING
}
`}],["graphql/scalar-type-argument-of-root-type/add-description-for-enum-value",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  """
  Represents Fall season.
  """
  FALL
  WINTER
  SPRING
}`}],["graphql/scalar-type-argument-of-root-type/add-enum-value-in-enum-argument",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}
`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
  SUMMER
}`}],["graphql/scalar-type-argument-of-root-type/add-optional-argument",{before:`type Query {
  fruits: String
}
`,after:`type Query {
  fruits(id: ID): String
}
`}],["graphql/scalar-type-argument-of-root-type/add-second-argument",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits(id: ID, hasEdibleSeeds: Boolean): String
}`}],["graphql/scalar-type-argument-of-root-type/change-default-value-of-argument",{before:`type Query {
  fruits(id: ID = "F4"): String
}`,after:`type Query {
  fruits(id: ID = "F8"): String
}`}],["graphql/scalar-type-argument-of-root-type/change-default-value-of-required-argument",{before:`type Query {
  fruits(id: ID! = "F4"): String
}`,after:`type Query {
  fruits(id: ID! = "F8"): String
}
`}],["graphql/scalar-type-argument-of-root-type/change-description-for-enum-type",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
"""
enum representing different seasons.
"""
enum Season {
  FALL
  WINTER
  SPRING
}
`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
"""
different season values.
"""
enum Season {
  FALL
  WINTER
  SPRING
}
`}],["graphql/scalar-type-argument-of-root-type/change-description-for-enum-value",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  """
  Represents Fall season.
  """
  FALL
  WINTER
  SPRING
}`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  """
  Fall season.
  """
  FALL
  WINTER
  SPRING
}`}],["graphql/scalar-type-argument-of-root-type/change-type-of-argument",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits(id: Int): String
}
`}],["graphql/scalar-type-argument-of-root-type/delete-description-for-enum-type",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
"""
enum representing different seasons.
"""
enum Season {
  FALL
  WINTER
  SPRING
}
`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}
`}],["graphql/scalar-type-argument-of-root-type/delete-description-for-enum-value",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  """
  Represents Fall season.
  """
  FALL
  WINTER
  SPRING
}`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}`}],["graphql/scalar-type-argument-of-root-type/delete-description-of-argument",{before:`type Query {
  fruits(
  """
  Unique identifier of fruit.
  """ 
  id: ID): String
}
`,after:`type Query {
  fruits(id: ID): String
}`}],["graphql/scalar-type-argument-of-root-type/mark-mandatory-argument-as-optional",{before:`type Query {
  fruits(id: ID!): String
}`,after:`type Query {
  fruits(id: ID): String
}`}],["graphql/scalar-type-argument-of-root-type/mark-optional-argument-as-mandatory",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits(id: ID!): String
}`}],["graphql/scalar-type-argument-of-root-type/remove-argument",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits: String
}`}],["graphql/scalar-type-argument-of-root-type/remove-default-value-of-argument",{before:`type Query {
  fruits(id: ID = "F4"): String
}`,after:`type Query {
  fruits(id: ID): String
}`}],["graphql/scalar-type-argument-of-root-type/remove-default-value-of-required-argument",{before:`type Query {
  fruits(id: ID! = "F4"): String
}`,after:`type Query {
  fruits(id: ID!): String
}
`}],["graphql/scalar-type-argument-of-root-type/remove-enum-value-in-enum-argument",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season { 
  FALL
  WINTER
  SPRING
  SUMMER
}`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season { 
  FALL
  WINTER
  SPRING
}`}],["graphql/scalar-type-argument-of-root-type/remove-one-argument",{before:`type Query {
  fruits(id: ID, hasEdibleSeeds: Boolean): String
}`,after:`type Query {
  fruits(id: ID): String
}`}],["graphql/scalar-type-argument-of-root-type/update-description-of-argument",{before:`type Query {
  fruits(
  """
  Unique identifier of fruit.
  """ 
  id: ID): String
}
`,after:`type Query {
  fruits(
  """
  Unique id of fruit.
  """ 
  id: ID): String
}
`}],["graphql/union-output-type-of-root-type/add-field-description-in-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
"""
The unique identifier for the Apple.
"""
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/add-new-field-in-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
  origin: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/add-object-type-in-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Apple | Grapes | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/change-field-type-in-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: Int
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/change-object-type-in-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Grapes | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/delete-field-description-in-object-type-from-union-type",{before:`type Apple {
"""
The unique identifier for the Apple.
"""
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/mark-mandatory-field-as-optional-in-object-type-from-union-type",{before:`type Apple {
  id: ID!
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/mark-optional-field-as-mandatory-in-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID!
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/remove-field-in-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
  origin: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/remove-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Apple | Banana | Grapes
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/update-field-description-in-object-type-from-union-type",{before:`type Apple {
"""
The unique identifier for the Apple.
"""
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
"""
The Apple ID.
"""
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["openapi/general-operation-parameters/add-alternative-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
        - ApiKeyAuth2: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`}],["openapi/general-operation-parameters/add-custom-property-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use: false
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/add-custom-property-in-path",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    x-feature-flag: "v2-release"
    get:
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/add-custom-property-in-security-schemes",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
      x-security-level: high
`}],["openapi/general-operation-parameters/add-deprecated-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      deprecated: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-description-of-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-mandatory-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
          ApiKeyAuth2: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`}],["openapi/general-operation-parameters/add-method-in-path-item",{before:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    $ref: '#/components/pathItems/UserOps'
components:
  pathItems:
    UserOps:
      get:
        summary: Get users
        responses:
          '200': { description: OK }
`,after:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    $ref: '#/components/pathItems/UserOps'
components:
  pathItems:
    UserOps:
      get:
        summary: Get users
        responses:
          '200': { description: OK }
      post:
        summary: Create a user
        requestBody:
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  name:
                    type: string
        responses:
          '201':
            description: Created
`}],["openapi/general-operation-parameters/add-new-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
    post:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-new-object-custom-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/add-new-path",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }

  /path2:
    get:
      responses:
        '200':
          description: OK
          content: { }

`}],["openapi/general-operation-parameters/add-objects-custom-property-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
        release: 2022.1
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/add-operation-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      description: It is a description.
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-operationId-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      operationId: someGetOperation
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-scope-for-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample:
            - read_pets
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`}],["openapi/general-operation-parameters/add-security-with-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - basicAuth: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
`}],["openapi/general-operation-parameters/add-server-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a description of server
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-server-url",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-server-variable-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
              description: It is a description value of username variable.
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-tag",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
tags:
  - name: tag1
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
tags:
  - name: tag1
paths:
  /path1:
    get:
      tags:
        - tag1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-unused-method-in-path-item",{before:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    $ref: '#/components/pathItems/UserOps'
components:
  pathItems:
    UserOps:
      get:
        summary: Get users
        responses:
          '200': { description: OK }
`,after:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    $ref: '#/components/pathItems/UserOps'
components:
  pathItems:
    UserOps:
      get:
        summary: Get users
        responses:
          '200': { description: OK }
    UserCreate:
      post:
        summary: Create a user
        requestBody:
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  name:
                    type: string
        responses:
          '201':
            description: Created
`}],["openapi/general-operation-parameters/add-variable",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a description of server
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-variable-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
              enum:
                - "some-name-1"
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-alternative-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
        - ApiKeyAuth2: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`}],["openapi/general-operation-parameters/remove-custom-property-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use: false
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/remove-custom-property-in-path",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    x-feature-flag: "v2-release"
    get:
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/remove-custom-property-in-security-schemes",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
      x-security-level: high
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
`}],["openapi/general-operation-parameters/remove-deprecated-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      deprecated: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-description-of-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-mandatory-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
          ApiKeyAuth2: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`}],["openapi/general-operation-parameters/remove-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
    post:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-method-in-path-item",{before:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    $ref: '#/components/pathItems/UserOps'
components:
  pathItems:
    UserOps:
      get:
        summary: Get users
        responses:
          '200': { description: OK }
      post:
        summary: Create a user
        requestBody:
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  name:
                    type: string
        responses:
          '201':
            description: Created
`,after:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    $ref: '#/components/pathItems/UserOps'
components:
  pathItems:
    UserOps:
      get:
        summary: Get users
        responses:
          '200': { description: OK }
`}],["openapi/general-operation-parameters/remove-objects-custom-property-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
        release: 2022.1
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/remove-operation-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      description: It is a description.
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-operationId-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      operationId: someGetOperation
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-path",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }

  /path2:
    get:
      responses:
        '200':
          description: OK
          content: { }

`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-scope-for-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample:
            - write_pets
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`}],["openapi/general-operation-parameters/remove-security-with-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - BasicAuth: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
`}],["openapi/general-operation-parameters/remove-server-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a description of server
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-server-url",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-server-variable-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
              description: It is a description value of username variable.
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-tag",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
tags:
  - name: tag1
paths:
  /path1:
    get:
      tags:
        - tag1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-unused-method-in-path-item",{before:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    $ref: '#/components/pathItems/UserOps'
components:
  pathItems:
    UserOps:
      get:
        summary: Get users
        responses:
          '200': { description: OK }
    UserCreate:
      post:
        summary: Create a user
        requestBody:
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  name:
                    type: string
        responses:
          '201':
            description: Created
`,after:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    $ref: '#/components/pathItems/UserOps'
components:
  pathItems:
    UserOps:
      get:
        summary: Get users
        responses:
          '200': { description: OK }`}],["openapi/general-operation-parameters/remove-variable",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a description of server
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-variable-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
              enum:
                - "some-name-1"
                - "some-name-2"
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/replace-inline-path-item-to-ref",{before:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get users
      responses:
        '200':
          description: OK
`,after:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    $ref: '#/components/pathItems/UserPathItem'
components:
  pathItems:
    UserPathItem:
      get:
        summary: Get users
        responses:
          '200':
            description: OK
`}],["openapi/general-operation-parameters/replace-ref-path-item-to-inline",{before:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    $ref: '#/components/pathItems/UserPathItem'
components:
  pathItems:
    UserPathItem:
      get:
        summary: Get users
        responses:
          '200':
            description: OK
`,after:`openapi: 3.1.0
info:
  title: test
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get users
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/update-custom-property-value-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use: false
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use: true
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/update-custom-property-value-in-path",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    x-feature-flag: "v2-release"
    get:
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    x-feature-flag: "v3-release"
    get:
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/update-custom-property-value-in-security-schemes",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
      x-security-level: medium
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
      x-security-level: high
`}],["openapi/general-operation-parameters/update-deprecated-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      deprecated: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      deprecated: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-description-of-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: NEW External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-objects-custom-property-value-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: no usages
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/update-operation-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      description: It is a description.
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      description: It is a NEW description.
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-operation-summary",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a NEW summary
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-operationId-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      operationId: someGetOperation
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      operationId: newGetOperation
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-scope-for-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample:
            - write_pets
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample:
            - read_pets
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`}],["openapi/general-operation-parameters/update-server-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a description of server
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a  NEW  description of server
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-server-url",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://new-example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-server-variable-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
              description: It is a description value of username variable.
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
              description: It is a description  NEW  value of username variable.
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-url-of-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://clientdomain.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-variable-default-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: new-default-name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-variable-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
              enum:
                - "some-name-1"
                - "some-name-2"
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
              enum:
                - "some-name-1"
                - "some-name-2"
                - "some-name-3"
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/headers/add-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      summary: Logs user into the system.
      description: Log into the system.
      operationId: loginUser
      responses:
        '200':
          description: successful operation
          headers:
            X-Rate-Limit:
              $ref: '#/components/headers/X-Rate-Limit'
          content:
            application/json:
              schema:
                type: string
components:
  headers:
    X-Rate-Limit:
      description: header description from components
      schema:
        type: integer
        format: int32`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      summary: Logs user into the system.
      description: Log into the system.
      operationId: loginUser
      responses:
        '200':
          description: successful operation
          headers:
            X-Rate-Limit:
              $ref: '#/components/headers/X-Rate-Limit'
              description: header description override
          content:
            application/json:
              schema:
                type: string
components:
  headers:
    X-Rate-Limit:
      description: header description from components
      schema:
        type: integer
        format: int32`}],["openapi/headers/change-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      summary: Logs user into the system.
      description: Log into the system.
      operationId: loginUser
      responses:
        '200':
          description: successful operation
          headers:
            X-Rate-Limit:
              $ref: '#/components/headers/X-Rate-Limit'
              description: Old header description override
          content:
            application/json:
              schema:
                type: string
components:
  headers:
    X-Rate-Limit:
      description: header description from components
      schema:
        type: integer
        format: int32`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      summary: Logs user into the system.
      description: Log into the system.
      operationId: loginUser
      responses:
        '200':
          description: successful operation
          headers:
            X-Rate-Limit:
              $ref: '#/components/headers/X-Rate-Limit'
              description: New header description override
          content:
            application/json:
              schema:
                type: string
components:
  headers:
    X-Rate-Limit:
      description: header description from components
      schema:
        type: integer
        format: int32`}],["openapi/headers/change-referenced-description-when-overridden-exists",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      summary: Logs user into the system.
      description: Log into the system.
      operationId: loginUser
      responses:
        '200':
          description: successful operation
          headers:
            X-Rate-Limit:
              $ref: '#/components/headers/X-Rate-Limit'
              description: header description override
          content:
            application/json:
              schema:
                type: string
components:
  headers:
    X-Rate-Limit:
      description: header description from components
      schema:
        type: integer
        format: int32`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      summary: Logs user into the system.
      description: Log into the system.
      operationId: loginUser
      responses:
        '200':
          description: successful operation
          headers:
            X-Rate-Limit:
              $ref: '#/components/headers/X-Rate-Limit'
              description: header description override
          content:
            application/json:
              schema:
                type: string
components:
  headers:
    X-Rate-Limit:
      description: some changes in header description from components
      schema:
        type: integer
        format: int32`}],["openapi/headers/remove-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      summary: Logs user into the system.
      description: Log into the system.
      operationId: loginUser
      responses:
        '200':
          description: successful operation
          headers:
            X-Rate-Limit:
              $ref: '#/components/headers/X-Rate-Limit'
              description: header description override
          content:
            application/json:
              schema:
                type: string
components:
  headers:
    X-Rate-Limit:
      description: header description from components
      schema:
        type: integer
        format: int32`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      summary: Logs user into the system.
      description: Log into the system.
      operationId: loginUser
      responses:
        '200':
          description: successful operation
          headers:
            X-Rate-Limit:
              $ref: '#/components/headers/X-Rate-Limit'
          content:
            application/json:
              schema:
                type: string
components:
  headers:
    X-Rate-Limit:
      description: header description from components
      schema:
        type: integer
        format: int32`}],["openapi/human-readable/encoding-object-allow-reserved",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                allowReserved: true
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                allowReserved: false
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/encoding-object-content-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                profileImage: {}
            encoding:
              profileImage:
                contentType: image/png
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                profileImage: {}
            encoding:
              profileImage:
                contentType: image/png, image/jpeg
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/encoding-object-encoding",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/encoding-object-explode",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                explode: true
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                explode: false
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/encoding-object-headers",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                profileImage: {}
            encoding:
              profileImage:
                contentType: image/png
                headers:
                  X-Rate-Limit-Limit:
                    description: The number of allowed requests in the current period
                    schema:
                      type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                profileImage: {}
            encoding:
              profileImage:
                contentType: image/png
                headers:
                  X-Rate-Limit-Limit:
                    description: The number of allowed requests in the current period
                    schema:
                      type: integer
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/encoding-object-style",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                style: form
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: Offset value
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              description: Example for minimum value
              value: 0
              summary: Offset value
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: Offset value
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      description: Example for minimum value
      value: 0
      summary: Offset value
`}],["openapi/human-readable/examples-object-examples-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: A sample offset value
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-examples-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: A sample offset value
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
`}],["openapi/human-readable/examples-object-external-value-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: Offset value
              externalValue: 'https://example.org/examples/address-example.xml'
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: Offset value
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-external-value-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: Offset value
      externalValue: 'https://example.org/examples/address-example.xml'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: Offset value
`}],["openapi/human-readable/examples-object-summary-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: Offset value
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: A sample offset value
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-summary-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: Offset value
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: A sample offset value
`}],["openapi/human-readable/examples-object-value-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: Offset value
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 1
              summary: Offset value
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-value-object-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value:
                prop1:
                  prop11: value0
                prop2: value2
              summary: Offset value
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value:
                prop1:
                  prop11: value1
                prop2: value2
              summary: Offset value
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-value-object-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value:
        prop1:
          prop11:  value0
        prop2: value2
      summary: Offset value
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value:
        prop1:
          prop11:  value1
        prop2: value2
      summary: Offset value
`}],["openapi/human-readable/examples-object-value-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: Offset value
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 1
      summary: Offset value
`}],["openapi/human-readable/header-object-allow-empty-value-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              allowEmptyValue: true
              schema:
                type: integer
                description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              schema:
                type: integer
                description: Request limit
`}],["openapi/human-readable/header-object-allow-empty-value-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      allowEmptyValue: true
      schema:
        type: integer
        description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      schema:
        type: integer
        description: Request limit
`}],["openapi/human-readable/header-object-allow-reserved-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              allowReserved: true
              schema:
                type: array
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              allowReserved: false
              schema:
                type: array
                items:
                  type: string
`}],["openapi/human-readable/header-object-allow-reserved-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      allowReserved: true
      schema:
        type: array
        items:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      allowReserved: false
      schema:
        type: array
        items:
          type: string
`}],["openapi/human-readable/header-object-deprecated-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              deprecated: true
              schema:
                type: integer
                description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              deprecated: false
              schema:
                type: integer
                description: Request limit
`}],["openapi/human-readable/header-object-deprecated-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      deprecated: true
      schema:
        type: integer
        description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      deprecated: false
      schema:
        type: integer
        description: Request limit
`}],["openapi/human-readable/header-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              description: Request limit
              schema:
                type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              description: The number of allowed requests in the current period
              schema:
                type: integer
`}],["openapi/human-readable/header-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      description: Request limit
      schema:
        type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      description: The number of allowed requests in the current period
      schema:
        type: integer
`}],["openapi/human-readable/header-object-example-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              example:
                prop1:
                  prop11: value1
              schema:
                type: array
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              example:
                prop1:
                  prop11: value2
              schema:
                type: array
                items:
                  type: string
`}],["openapi/human-readable/header-object-example-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      example:
        prop1:
          prop11: value1
      schema:
        type: array
        items:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      example:
        prop1:
          prop11: value2
      schema:
        type: array
        items:
          type: string
`}],["openapi/human-readable/header-object-example-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              example: abc
              schema:
                type: array
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              example: bcd
              schema:
                type: array
                items:
                  type: string
`}],["openapi/human-readable/header-object-example-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      example: abc
      schema:
        type: array
        items:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      example: bcd
      schema:
        type: array
        items:
          type: string
`}],["openapi/human-readable/header-object-explode-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              schema:
                type: array
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              explode: true
              schema:
                type: array
                items:
                  type: string
`}],["openapi/human-readable/header-object-explode-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      schema:
        type: array
        items:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      explode: true
      schema:
        type: array
        items:
          type: string
`}],["openapi/human-readable/header-object-header-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              description: Request limit
              schema:
                type: integer
`}],["openapi/human-readable/header-object-header-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      description: Request limit
      schema:
        type: integer
`}],["openapi/human-readable/header-object-required-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              required: false
              schema:
                type: integer
                description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              required: true
              schema:
                type: integer
                description: Request limit
`}],["openapi/human-readable/header-object-required-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      required: false
      schema:
        type: integer
        description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      required: true
      schema:
        type: integer
        description: Request limit
`}],["openapi/human-readable/header-object-style-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              style: simple
              schema:
                type: integer
                description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              style: form
              schema:
                type: integer
                description: Request limit
`}],["openapi/human-readable/header-object-style-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      style: simple
      schema:
        type: integer
        description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      style: form
      schema:
        type: integer
        description: Request limit
`}],["openapi/human-readable/parameter-object-allow-empty-value-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          allowEmptyValue: true
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-allow-empty-value-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      allowEmptyValue: true
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-allow-reserved-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: header
          name: offset
          schema:
            type: integer
            minimum: 0
        - in: header
          name: offset2
          allowReserved: false
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: header
          name: offset
          allowReserved: true
          schema:
            type: integer
            minimum: 0
        - in: header
          name: offset2
          allowReserved: true
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-allow-reserved-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: header
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: header
      name: offset
      allowReserved: true
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-deprecated-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          deprecated: true
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-deprecated-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      deprecated: true
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          description: abc
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      description: abc
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-example-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          example:
            prop1: test
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          example:
            prop1: test2
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-example-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      example:
        prop1: test
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      example:
        prop1: test2
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-example-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          example: 1
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          example: 2
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-example-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      example: 1
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      example: 2
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-explode-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          explode: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-explode-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      explode: false
      schema:
        type: array
        items:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      explode: true
      schema:
        type: array
        items:
          type: string
`}],["openapi/human-readable/parameter-object-in-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: header
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-in-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: header
      name: offset
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-name-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: header
          name: offset2
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-name-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: header
      name: offset2
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-parameter-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
        - in: query
          name: limit
          required: false
          schema:
            type: integer
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-parameter-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
        - $ref: '#/components/parameters/limitParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
    limitParam:
      in: query
      name: limit
      required: false
      schema:
        type: integer
`}],["openapi/human-readable/parameter-object-required-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          required: true
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-required-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      required: true
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-style-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          style: form
          schema:
            type: integer
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          style: simple
          schema:
            type: integer
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-style-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      style: form
      schema:
        type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      style: simple
      schema:
        type: integer
`}],["openapi/human-readable/request-body-object-content-example-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: object
              properties:
                prop1:
                  type: string
                prop2:
                  type: string
            example:
              prop1: value1
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: object
              properties:
                prop1:
                  type: string
                prop2:
                  type: string
            example:
              prop1: value2
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-content-example-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: string
          example:
            prop1: value1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: string
          example:
            prop1: value2
`}],["openapi/human-readable/request-body-object-content-example-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: object
              properties:
                prop1:
                  type: string
                prop2:
                  type: string
            example: abc
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: object
              properties:
                prop1:
                  type: string
                prop2:
                  type: string
            example: cba
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-content-example-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: string
          example: abc
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: string
          example: cba
`}],["openapi/human-readable/request-body-object-content-media-type-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: string
          application/xml:
            schema:
              type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-content-media-type-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: string
        application/xml:
          schema:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/request-body-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: A JSON object containing pet information
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: A JSON object containing pet information
      content:
        application/json:
          schema:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/request-body-object-request-body-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: A JSON object containing pet information
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-request-body-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: A JSON object containing pet information
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/request-body-object-required-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        required: true
        content:
          application/json:
            schema:
              type: string

      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-required-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      required: true
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/response-object-content-example-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
              example:
                prop1:
                  prop11: value1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
              example:
                prop1:
                  prop11: value2
`}],["openapi/human-readable/response-object-content-example-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
          example:
            prop1:
              prop11: value1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
          example:
            prop1:
              prop11: value2
`}],["openapi/human-readable/response-object-content-example-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
              example: abc
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
              example: cde
`}],["openapi/human-readable/response-object-content-example-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
          example: abc
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
          example: cde
`}],["openapi/human-readable/response-object-content-media-type-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
            application/xml:
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
`}],["openapi/human-readable/response-object-content-media-type-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
        application/xml:
          schema:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/response-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: Resource was not found
          content:
            application/json:
              schema:
                type: string
`}],["openapi/human-readable/response-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: Resource was not found
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/response-object-response-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
`}],["openapi/human-readable/response-object-response-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/schema-object-any-of-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
                - type: object
                  properties:
                    prop3:
                      type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-any-of-array-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: object
            properties:
              prop1:
                type: object
                properties:
                  prop11:
                    anyOf:
                      - type: object
                        properties:
                          prop1:
                            type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: object
            properties:
              prop1:
                type: object
                properties:
                  prop11:
                    anyOf:
                      - type: object
                        properties:
                          prop1:
                            type: string
                      - type: object
                        properties:
                          prop2:
                            type: number
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-any-of-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      anyOf:
        - type: object
          properties:
            prop1:
              type: string
        - type: object
          properties:
            prop2:
              type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      anyOf:
        - type: object
          properties:
            prop1:
              type: string
        - type: object
          properties:
            prop2:
              type: number
        - type: object
          properties:
            prop3:
              type: string
`}],["openapi/human-readable/schema-object-attribute-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        writeOnly: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
`}],["openapi/human-readable/schema-object-attribute-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
          description: 'desc'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    required:
                      - prop11
                    properties:
                      prop11:
                        type: string
          description: 'desc'
`}],["openapi/human-readable/schema-object-attribute-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      writeOnly: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
`}],["openapi/human-readable/schema-object-default-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        default: 1
`}],["openapi/human-readable/schema-object-default-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
          description: 'desc'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
                        default: abc
          description: 'desc'
`}],["openapi/human-readable/schema-object-default-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      default: 1
`}],["openapi/human-readable/schema-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      type: object
      properties:
        prop1:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
`}],["openapi/human-readable/schema-object-enum-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        enum:
          - 1
          - 2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        enum:
          - 1
          - 2
          - 3
`}],["openapi/human-readable/schema-object-enum-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: 'desc'
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
                        enum:
                          - abc
                          - bcd
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: 'desc'
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
                        enum:
                          - abc
                          - bcd
                          - cde
`}],["openapi/human-readable/schema-object-enum-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      enum:
        - 1
        - 2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      enum:
        - 1
        - 2
        - 3
`}],["openapi/human-readable/schema-object-example-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                prop1:
                  type: string
              example:
                prop1: "dog"
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-example-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        prop1:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        prop1:
          type: string
      example:
        prop1: "dog"
`}],["openapi/human-readable/schema-object-external-docs-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
              externalDocs:
                description: Find more info about the Pet schema
                url: https://example.com/docs/pet-schema
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
              externalDocs:
                description: More info about the Pet schema
                url: https://example.com/docs/pet-schema
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-external-docs-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
      externalDocs:
        description: Find more info about the Pet schema
        url: https://example.com/docs/pet-schema
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
      externalDocs:
        description: More info about the Pet schema
        url: https://example.com/docs/pet-schema
`}],["openapi/human-readable/schema-object-external-docs-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
              externalDocs:
                description: Find more info about the Pet schema
                url: https://example.com/docs/pet-schema
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-external-docs-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
      externalDocs:
        description: Find more info about the Pet schema
        url: https://example.com/docs/pet-schema
`}],["openapi/human-readable/schema-object-external-docs-url-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
              externalDocs:
                description: Find more info about the Pet schema
                url: https://example.com/docs/schema
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
              externalDocs:
                description: Find more info about the Pet schema
                url: https://example.com/docs/pet-schema
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-external-docs-url-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
      externalDocs:
        description: Find more info about the Pet schema
        url: https://example.com/docs/pet
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
      externalDocs:
        description: Find more info about the Pet schema
        url: https://example.com/docs/pet-schema
`}],["openapi/human-readable/schema-object-format-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        format: int32
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        format: int64
`}],["openapi/human-readable/schema-object-format-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
          description: 'desc'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
                        format: email
          description: 'desc'
`}],["openapi/human-readable/schema-object-format-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      format: int32
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      format: int64
`}],["openapi/human-readable/schema-object-one-of-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
                - type: object
                  properties:
                    prop3:
                      type: string

      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-one-of-array-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        properties:
          prop1:
            type: object
            properties:
              prop11:
                oneOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        properties:
          prop1:
            type: object
            properties:
              prop11:
                oneOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`}],["openapi/human-readable/schema-object-one-of-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      oneOf:
        - type: object
          properties:
            prop1:
              type: string
        - type: object
          properties:
            prop2:
              type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      oneOf:
        - type: object
          properties:
            prop1:
              type: string
        - type: object
          properties:
            prop2:
              type: number
        - type: object
          properties:
            prop3:
              type: string
`}],["openapi/human-readable/schema-object-properties-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        properties:
          prop1:
            type: object
            properties:
              prop2:
                type: object
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        properties:
          prop1:
            type: object
            properties:
              prop2:
                type: object
                properties:
                  prop3:
                    type: string
`}],["openapi/human-readable/schema-object-properties-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: object
            properties:
              prop1:
                type: object
                properties:
                  prop2:
                    type: object
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: object
            properties:
              prop1:
                type: object
                properties:
                  prop2:
                    type: object
                    properties:
                      prop3:
                        type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-properties-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        prop1:
          type: string
        prop2:
          type: object
          properties:
            prop21:
              type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        prop1:
          type: string
        prop2:
          type: object
          properties:
            prop21:
              type: string
            prop22:
              type: string
`}],["openapi/human-readable/schema-object-required-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        properties:
          prop1:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        required:
          - prop1
        properties:
          prop1:
            type: string
`}],["openapi/human-readable/schema-object-required-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: object
      properties:
        prop1:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: object
      required:
        - prop1
      properties:
        prop1:
          type: string
`}],["openapi/human-readable/schema-object-schema-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            example: abc
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            example: abc
            schema:
              type: integer
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-schema-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            example: abc
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            example: abc
            schema:
              $ref: '#/components/schemas/offsetSchema'
      responses:
        '200':
          description: OK
components:
  schemas:
    offsetSchema:
      type: integer
`}],["openapi/human-readable/schema-object-title-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-title-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        prop1:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      type: object
      properties:
        prop1:
          type: string
`}],["openapi/human-readable/schema-object-type-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: string
`}],["openapi/human-readable/schema-object-type-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
          description: 'response description'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: number
          description: 'response description'
`}],["openapi/human-readable/schema-object-type-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: string
`}],["openapi/human-readable/schema-object-validator-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        multipleOf: 2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        multipleOf: 4
`}],["openapi/human-readable/schema-object-validator-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
          description: 'response description'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
                        maxLength: 10
          description: 'response description'
`}],["openapi/human-readable/schema-object-validator-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      multipleOf: 2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      multipleOf: 4
`}],["openapi/operation-parameters/add-allowEmptyValue-attribute-with-default-value-for-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          allowEmptyValue: false
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/add-allowReserved-attribute-with-default-value-for-query-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/add-custom-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          x-custom-prop: some value
          schema:
            type: string
      responses:
        '200':
          description: OK
`}],["openapi/operation-parameters/add-default-style-for-cookie-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: cookie
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: cookie
          schema:
            type: string
          style: form
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/add-default-style-for-header-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: header
          schema:
            type: string
          style: simple
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/add-default-style-for-path-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets/{param1}:
    post:
      parameters:
        - name: param1
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets/{param1}:
    post:
      parameters:
        - name: param1
          in: path
          required: true          
          schema:
            type: string
          style: simple
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/add-default-style-for-query-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
          style: form
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/add-deprecated-attribute-with-default-value-for-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          deprecated: false
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/add-header-parameter-with-name-accept",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Accept
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-header-parameter-with-name-authorization",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Authorization
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-header-parameter-with-name-content-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Content-Type
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-operation-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      tags:
        - pet
      summary: Finds Pets by status.
      description: Multiple status values can be provided with comma separated strings.
      operationId: findPetsByStatus
      parameters:
        - $ref: '#/components/parameters/status'
      responses:
        '200':
          description: successful operation
components:
  parameters:
    status:
      name: status
      in: query
      description: parameter description from components
      schema:
        type: string`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      tags:
        - pet
      summary: Finds Pets by status.
      description: Multiple status values can be provided with comma separated strings.
      operationId: findPetsByStatus
      parameters:
        - $ref: '#/components/parameters/status'
          description: parameter description override
      responses:
        '200':
          description: successful operation
components:
  parameters:
    status:
      name: status
      in: query
      description: parameter description from components
      schema:
        type: string`}],["openapi/operation-parameters/add-parameter-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          description: It is param1 description.
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-parameter-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
          example: someExampleValue
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-required-attribute-with-default-value-for-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/allow-empty-value-for-not-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          schema:
            type: string
        - name: param2
          in: path
          allowEmptyValue: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          allowEmptyValue: true
          schema:
            type: string
        - name: param2
          in: path
          allowEmptyValue: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/allow-empty-value-for-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          allowEmptyValue: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          allowEmptyValue: true
          schema:
            type: string
        - name: param2
          in: query
          allowEmptyValue: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/allow-reserved-characters-for-not-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          schema:
            type: string
        - name: param2
          in: path
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          allowReserved: true
          schema:
            type: string
        - name: param2
          in: path
          allowReserved: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/allow-reserved-characters-for-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          allowReserved: true
          schema:
            type: string
        - name: param2
          in: query
          allowReserved: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/change-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      tags:
        - pet
      summary: Finds Pets by status.
      description: Multiple status values can be provided with comma separated strings.
      operationId: findPetsByStatus
      parameters:
        - $ref: '#/components/parameters/status'
          description: Old parameter description override
      responses:
        '200':
          description: successful operation
components:
  parameters:
    status:
      name: status
      in: query
      description: parameter description from components
      schema:
        type: string`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      tags:
        - pet
      summary: Finds Pets by status.
      description: Multiple status values can be provided with comma separated strings.
      operationId: findPetsByStatus
      parameters:
        - $ref: '#/components/parameters/status'
          description: New parameter description override
      responses:
        '200':
          description: successful operation
components:
  parameters:
    status:
      name: status
      in: query
      description: parameter description from components
      schema:
        type: string`}],["openapi/operation-parameters/change-referenced-description-when-overridden-exists",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      tags:
        - pet
      summary: Finds Pets by status.
      description: Multiple status values can be provided with comma separated strings.
      operationId: findPetsByStatus
      parameters:
        - $ref: '#/components/parameters/status'
          description: parameter description override
      responses:
        '200':
          description: successful operation
components:
  parameters:
    status:
      name: status
      in: query
      description: parameter description from components
      schema:
        type: string`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      tags:
        - pet
      summary: Finds Pets by status.
      description: Multiple status values can be provided with comma separated strings.
      operationId: findPetsByStatus
      parameters:
        - $ref: '#/components/parameters/status'
          description: parameter description override
      responses:
        '200':
          description: successful operation
components:
  parameters:
    status:
      name: status
      in: query
      description: some changes in parameter description from components
      schema:
        type: string`}],["openapi/operation-parameters/mark-array-parameter-with-form-style-as-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: form
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: form
          explode: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: form
          explode: true
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: form
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-array-parameter-with-form-style-as-not-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: form
          explode: true
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: form
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: form
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: form
          explode: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-array-parameter-with-not-form-style-as-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: spaceDelimited
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: spaceDelimited
          explode: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: spaceDelimited
          explode: true
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: spaceDelimited
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-array-parameter-with-not-form-style-as-not-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: spaceDelimited
          explode: true
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: spaceDelimited
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: spaceDelimited
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: spaceDelimited
          explode: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-parameter-as-deprecated",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          deprecated: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          deprecated: true
          schema:
            type: string
        - name: param2
          in: query
          deprecated: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-parameter-as-optional",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          required: true
          schema:
            type: string
        - name: param2
          in: query
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-parameter-as-required",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          required: true
          schema:
            type: string
        - name: param2
          in: query
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-primitive-parameter-as-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          explode: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          explode: true
          schema:
            type: string
        - name: param2
          in: query
          explode: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-primitive-parameter-as-not-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          explode: true
          schema:
            type: string
        - name: param2
          in: query
          explode: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          explode: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/prohibit-empty-value-for-not-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          allowEmptyValue: true
          schema:
            type: string
        - name: param2
          in: path
          allowEmptyValue: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          schema:
            type: string
        - name: param2
          in: path
          allowEmptyValue: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/prohibit-empty-value-for-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          allowEmptyValue: true
          schema:
            type: string
        - name: param2
          in: query
          allowEmptyValue: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          allowEmptyValue: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/prohibit-reserved-characters-for-not-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          allowReserved: true
          schema:
            type: string
        - name: param2
          in: path
          allowReserved: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          schema:
            type: string
        - name: param2
          in: path
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/prohibit-reserved-characters-for-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          allowReserved: true
          schema:
            type: string
        - name: param2
          in: query
          allowReserved: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-allowEmptyValue-attribute-with-default-value-from-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          allowEmptyValue: false
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/remove-allowReserved-attribute-with-default-value-from-query-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/remove-custom-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          x-custom-prop: some value 1
          schema:
            type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
`}],["openapi/operation-parameters/remove-default-style-from-cookie-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: cookie
          schema:
            type: string
          style: form
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: cookie
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/remove-default-style-from-header-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: header
          schema:
            type: string
          style: simple
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/remove-default-style-from-path-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets/{param1}:
    post:
      parameters:
        - name: param1
          in: path
          required: true          
          schema:
            type: string
          style: simple
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets/{param1}:
    post:
      parameters:
        - name: param1
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/remove-default-style-from-query-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
          style: form
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/remove-deprecated-attribute-with-default-value-from-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          deprecated: false
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/remove-deprecated-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          deprecated: true
          schema:
            type: string
        - name: param2
          in: query
          deprecated: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          deprecated: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-header-parameter-with-name-accept",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Accept
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-header-parameter-with-name-authorization",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Authorization
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-header-parameter-with-name-content-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Content-Type
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-operation-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      tags:
        - pet
      summary: Finds Pets by status.
      description: Multiple status values can be provided with comma separated strings.
      operationId: findPetsByStatus
      parameters:
        - $ref: '#/components/parameters/status'
          description: parameter description override
      responses:
        '200':
          description: successful operation
components:
  parameters:
    status:
      name: status
      in: query
      description: parameter description from components
      schema:
        type: string`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    get:
      tags:
        - pet
      summary: Finds Pets by status.
      description: Multiple status values can be provided with comma separated strings.
      operationId: findPetsByStatus
      parameters:
        - $ref: '#/components/parameters/status'
      responses:
        '200':
          description: successful operation
components:
  parameters:
    status:
      name: status
      in: query
      description: parameter description from components
      schema:
        type: string`}],["openapi/operation-parameters/remove-parameter-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          description: It is param1 description.
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-parameter-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
          example: someExampleValue
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-required-attribute-with-default-value-from-parameter",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      parameters:
        - name: userId
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK`}],["openapi/operation-parameters/update-custom-property-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          x-custom-prop: some value 1
          schema:
            type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          x-custom-prop: some value 2
          schema:
            type: string
      responses:
        '200':
          description: OK
`}],["openapi/operation-parameters/update-parameter-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          description: It is param1 description.
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          description: It is a  NEW  param1 description.
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/update-parameter-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
          example: someExampleValue
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
          example: someExampleValue222
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/update-parameter-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: cookie
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/update-style-for-path-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1/{param1}:
    get:
      parameters:
        - name: param1
          in: path
          style: simple
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1/{param1}:
    get:
      parameters:
        - name: param1
          in: path
          style: matrix
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/add-additional-examples-object",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
            example2:
              value: name2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/add-example-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              description: Long description for the example.
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/add-example-summary",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              summary: short summary
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/add-examples-object-for-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/add-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              description: example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/parameters-examples/add-overriden-summary",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              summary: example summary override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/parameters-examples/change-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              description: Old example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              description: New example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/parameters-examples/change-overriden-summary",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              summary: Old example summary override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              summary: New example summary override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/parameters-examples/change-referenced-description-when-overridden-exists",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              description: example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              description: example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: some changes in example description from components 
      value: petpet`}],["openapi/parameters-examples/change-referenced-summary-when-overridden-exists",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              summary: example summary override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              summary: example summary override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: some changes in example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/parameters-examples/remove-example-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              description: Long description for the example.
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/remove-example-summary",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              summary: short summary
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/remove-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
              externalValue: 'https://example.org/examples/address-example.xml'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/remove-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              description: example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/parameters-examples/remove-overriden-summary",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
              summary: example summary override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Finds Pets by tags.
      description: Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
      operationId: findPetsByTags
      parameters:
        - name: tags
          in: query
          description: Tags to filter by
          schema:
            type: string
          examples:
            ex1: 
              $ref: "#/components/examples/ex1"
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/parameters-examples/update-example-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              description: Long description for the example.
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              description: Changed description.
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/update-example-summary",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              summary: short summary
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              summary: changed summary
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/update-example-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/update-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
              externalValue: 'https://example.org/examples/address-example.xml'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
              externalValue: 'https://foo.bar/examples/address-example.txt'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/update-name-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example0:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-sibling-description-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      parameters:
        - name: param1
          in: query
          schema:
            $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Pet:
      description: schema description from components
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      parameters:
        - name: param1
          in: query
          schema:
            $ref: '#/components/schemas/Pet'
            description: schema description override
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Pet:
      description: schema description from components
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`}],["openapi/parameters-schema/change-referenced-enum-when-sibling-exists-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      parameters:
        - name: param1
          in: query
          schema:
            $ref: '#/components/schemas/Color'
            enum:
              - black
              - white
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      enum:
        - black`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      parameters:
        - name: param1
          in: query
          schema:
            $ref: '#/components/schemas/Color'
            enum:
              - black
              - white
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      enum:
        - black
        - white
        - gold`}],["openapi/parameters-schema/change-sibling-enum-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      parameters:
        - name: param1
          in: query
          schema:
            $ref: '#/components/schemas/Color'
            enum:
              - black
              - white
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      enum:
        - black`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      parameters:
        - name: param1
          in: query
          schema:
            $ref: '#/components/schemas/Color'
            enum:
              - black
              - white
              - gray
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      enum:
        - black`}],["openapi/parameters-schema/remove-sibling-maxLength-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      parameters:
        - name: param1
          in: query
          schema:
            $ref: "#/components/schemas/Color"
            maxLength: 10
      responses:
        "200":
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      maxLength: 20
`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      parameters:
        - name: param1
          in: query
          schema:
            $ref: "#/components/schemas/Color"
      responses:
        "200":
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      maxLength: 20
`}],["openapi/request-body-examples/add-additional-examples-object",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
              example2:
                value: name2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/add-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                description: Long description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/add-examples-object-for-request-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/add-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: string
            examples:
              ex1: 
                $ref: "#/components/examples/ex1"
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: string
            examples:
              ex1: 
                $ref: "#/components/examples/ex1"
                description: example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/request-body-examples/add-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                summary: short description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/change-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: string
            examples:
              ex1: 
                $ref: "#/components/examples/ex1"
                description: Old example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: string
            examples:
              ex1: 
                $ref: "#/components/examples/ex1"
                description: New example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/request-body-examples/change-referenced-description-when-overridden-exists",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: string
            examples:
              ex1: 
                $ref: "#/components/examples/ex1"
                description: example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: string
            examples:
              ex1: 
                $ref: "#/components/examples/ex1"
                description: example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: some changes in example description from components 
      value: petpet`}],["openapi/request-body-examples/remove-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                description: Long description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/remove-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
                externalValue: 'https://example.org/examples/address-example.xml'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/remove-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: string
            examples:
              ex1: 
                $ref: "#/components/examples/ex1"
                description: example description override
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: string
            examples:
              ex1: 
                $ref: "#/components/examples/ex1"
      responses:
        '200':
          description: successful operation
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/request-body-examples/remove-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                summary: short description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/update-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                description: Long description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                description: changed description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/update-example-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/update-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
                externalValue: 'https://example.org/examples/address-example.xml'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
                externalValue: 'https://foo.bar/examples/address-example.txt'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/update-name-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example0:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/update-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                summary: short description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                summary: changed description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-sibling-description-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create a pet.
      description: Create a pet.
      operationId: postPet
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Pet:
      description: schema description from components
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create a pet.
      description: Create a pet.
      operationId: postPet
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Pet'
              description: schema description override
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Pet:
      description: schema description from components
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`}],["openapi/request-body-schema/change-referenced-enum-when-sibling-exists-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create a pet.
      description: Create a pet.
      operationId: postPet
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Color'
              enum:
                - black
                - white
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      enum:
        - black`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create a pet.
      description: Create a pet.
      operationId: postPet
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Color'
              enum:
                - black
                - white
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      enum:
        - black
        - white
        - gold`}],["openapi/request-body-schema/change-sibling-enum-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create a pet.
      description: Create a pet.
      operationId: postPet
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Color'
              enum:
                - black
                - white
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      enum:
        - black`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create a pet.
      description: Create a pet.
      operationId: postPet
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Color'
              enum:
                - black
                - white
                - gray
      responses:
        '200':
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      enum:
        - black`}],["openapi/request-body-schema/remove-sibling-maxLength-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create a pet.
      description: Create a pet.
      operationId: postPet
      requestBody:
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/Color"
              maxLength: 10
      responses:
        "200":
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      maxLength: 20
`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create a pet.
      description: Create a pet.
      operationId: postPet
      requestBody:
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/Color"
      responses:
        "200":
          description: Successful operation
components:
  schemas:
    Color:
      type: string
      maxLength: 20
`}],["openapi/request-body/add-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Place an order for a pet. (requestBodies)
      description: Place a new order in the store.
      operationId: placeOrder
      requestBody:
        $ref: '#/components/requestBodies/rb1'
      responses:
        '200':
          description: successful operation
components:
  requestBodies:
    rb1:
      description: requestBody description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
              petId:
                type: integer
                format: int64`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Place an order for a pet. (requestBodies)
      description: Place a new order in the store.
      operationId: placeOrder
      requestBody:
        $ref: '#/components/requestBodies/rb1'
        description: requestBody description override
      responses:
        '200':
          description: successful operation
components:
  requestBodies:
    rb1:
      description: requestBody description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
              petId:
                type: integer
                format: int64`}],["openapi/request-body/change-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Place an order for a pet. (requestBodies)
      description: Place a new order in the store.
      operationId: placeOrder
      requestBody:
        $ref: '#/components/requestBodies/rb1'
        description: Old requestBody description override
      responses:
        '200':
          description: successful operation
components:
  requestBodies:
    rb1:
      description: requestBody description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
                example: 10
              petId:
                type: integer
                format: int64
                example: 198772`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Place an order for a pet. (requestBodies)
      description: Place a new order in the store.
      operationId: placeOrder
      requestBody:
        $ref: '#/components/requestBodies/rb1'
        description: New requestBody description override
      responses:
        '200':
          description: successful operation
components:
  requestBodies:
    rb1:
      description: requestBody description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
                example: 10
              petId:
                type: integer
                format: int64
                example: 198772`}],["openapi/request-body/change-referenced-description-when-overridden-exists",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Place an order for a pet. (requestBodies)
      description: Place a new order in the store.
      operationId: placeOrder
      requestBody:
        $ref: '#/components/requestBodies/rb1'
        description: requestBody description override
      responses:
        '200':
          description: successful operation
components:
  requestBodies:
    rb1:
      description: requestBody description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
                example: 10
              petId:
                type: integer
                format: int64
                example: 198772`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Place an order for a pet. (requestBodies)
      description: Place a new order in the store.
      operationId: placeOrder
      requestBody:
        $ref: '#/components/requestBodies/rb1'
        description: requestBody description override
      responses:
        '200':
          description: successful operation
components:
  requestBodies:
    rb1:
      description: some changes in requestBody description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
                example: 10
              petId:
                type: integer
                format: int64
                example: 198772`}],["openapi/request-body/remove-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Place an order for a pet. (requestBodies)
      description: Place a new order in the store.
      operationId: placeOrder
      requestBody:
        $ref: '#/components/requestBodies/rb1'
        description: requestBody description override
      responses:
        '200':
          description: successful operation
components:
  requestBodies:
    rb1:
      description: requestBody description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
              petId:
                type: integer
                format: int64`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Place an order for a pet. (requestBodies)
      description: Place a new order in the store.
      operationId: placeOrder
      requestBody:
        $ref: '#/components/requestBodies/rb1'
      responses:
        '200':
          description: successful operation
components:
  requestBodies:
    rb1:
      description: requestBody description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
              petId:
                type: integer
                format: int64`}],["openapi/request/add-allowReserved-with-default-value-for-requestBody-parameter-encoding",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
      responses:
        '201':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                allowReserved: false
      responses:
        '201':
          description: OK`}],["openapi/request/add-example-of-request-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
            example: value1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/add-request-body-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        description: This is description of request body
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/add-required-attribute-with-default-value-for-requestBody",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      requestBody:
        required: false
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK`}],["openapi/request/mark-request-body-as-optional-option-1",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: true
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/mark-request-body-as-optional-option-2",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: true
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: false
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/mark-request-body-as-required-option-1",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: true
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/mark-request-body-as-required-option-2",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: false
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: true
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/remove-allowReserved-with-default-value-from-requestBody-parameter-encoding",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                allowReserved: false
      responses:
        '201':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
      responses:
        '201':
          description: OK`}],["openapi/request/remove-example-of-request-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
            example: value1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/remove-request-body-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        description: The BillingAccount to be created
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/remove-required-attribute-with-default-value-from-requestBody",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      requestBody:
        required: false
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK`}],["openapi/request/update-example-of-request-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
            example: value1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
            example: value2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/update-media-type-of-request-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/xml:
            schema: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/update-request-body-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        description: This is description of request body
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        description: Some changes are made in request body
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/response-body-examples/add-additional-examples-object",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
                example2:
                  value: name2
`}],["openapi/response-body-examples/add-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  description: Long description
                  value: name
`}],["openapi/response-body-examples/add-examples-object-for-response-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`}],["openapi/response-body-examples/add-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: string
              examples:
                ex1: 
                  $ref: "#/components/examples/ex1"
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: string
              examples:
                ex1: 
                  $ref: "#/components/examples/ex1"
                  description: example description override
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/response-body-examples/add-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  summary: short description
                  value: name
`}],["openapi/response-body-examples/change-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: string
              examples:
                ex1: 
                  $ref: "#/components/examples/ex1"
                  description: Old example description override
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: string
              examples:
                ex1: 
                  $ref: "#/components/examples/ex1"
                  description: New example description override
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/response-body-examples/change-referenced-description-when-overridden-exists",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: string
              examples:
                ex1: 
                  $ref: "#/components/examples/ex1"
                  description: example description override
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: string
              examples:
                ex1: 
                  $ref: "#/components/examples/ex1"
                  description: example description override
components:
  examples:
    ex1:
      summary: example summary from components 
      description: some changes in example description from components 
      value: petpet`}],["openapi/response-body-examples/remove-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  description: Long description
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`}],["openapi/response-body-examples/remove-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
                  externalValue: 'https://example.org/examples/address-example.xml'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`}],["openapi/response-body-examples/remove-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: string
              examples:
                ex1: 
                  $ref: "#/components/examples/ex1"
                  description: example description override
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Create pet
      description: Pet creation
      operationId: createPet
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: string
              examples:
                ex1: 
                  $ref: "#/components/examples/ex1"
components:
  examples:
    ex1:
      summary: example summary from components 
      description: example description from components 
      value: petpet`}],["openapi/response-body-examples/remove-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  summary: short description
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`}],["openapi/response-body-examples/update-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  description: Long description
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  description: changed description
                  value: name
`}],["openapi/response-body-examples/update-example-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name2
`}],["openapi/response-body-examples/update-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
                  externalValue: 'https://example.org/examples/address-example.xml'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
                  externalValue: 'https://foo.bar/examples/address-example.txt'
`}],["openapi/response-body-examples/update-name-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example0:
                  value: name
`}],["openapi/response-body-examples/update-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  summary: short description
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  summary: changed description
                  value: name
`}],["openapi/response-body-schema/add-sibling-description-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
components:
  schemas:
    Pet:
      description: schema description from components
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
                description: schema description override
components:
  schemas:
    Pet:
      description: schema description from components
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`}],["openapi/response-body-schema/change-referenced-enum-when-sibling-exists-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Color'
                enum:
                  - black
                  - white
components:
  schemas:
    Color:
      type: string
      enum:
        - black`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Color'
                enum:
                  - black
                  - white

components:
  schemas:
    Color:
      type: string
      enum:
        - black
        - white
        - gold`}],["openapi/response-body-schema/change-sibling-enum-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Color'
                enum:
                  - black
                  - white
components:
  schemas:
    Color:
      type: string
      enum:
        - black`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Color'
                enum:
                  - black
                  - white
                  - gray
components:
  schemas:
    Color:
      type: string
      enum:
        - black`}],["openapi/response-body-schema/remove-sibling-maxLength-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        "200":
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Color"
                maxLength: 10
components:
  schemas:
    Color:
      type: string
      maxLength: 20
`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        "200":
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Color"
components:
  schemas:
    Color:
      type: string
      maxLength: 20
`}],["openapi/response-headers-schema/add-sibling-description-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          headers:
            X-Header-1:
              schema:
                $ref: '#/components/schemas/Pet'
components:
  schemas:
    Pet:
      description: schema description from components
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          headers:
            X-Header-1:
              schema:
                $ref: '#/components/schemas/Pet'
                description: schema description override
components:
  schemas:
    Pet:
      description: schema description from components
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`}],["openapi/response-headers-schema/change-referenced-enum-when-sibling-exists-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          headers:
            X-Header-1:
              schema:
                $ref: '#/components/schemas/Color'
                enum:
                  - black
                  - white
components:
  schemas:
    Color:
      type: string
      enum:
        - black`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          headers:
            X-Header-1:
              schema:
                $ref: '#/components/schemas/Color'
                enum:
                  - black
                  - white
components:
  schemas:
    Color:
      type: string
      enum:
        - black
        - white
        - gold`}],["openapi/response-headers-schema/change-sibling-enum-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          headers:
            X-Header-1:
              schema:
                $ref: '#/components/schemas/Color'
                enum:
                  - black
                  - white
components:
  schemas:
    Color:
      type: string
      enum:
        - black`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        '200':
          description: Successful operation
          headers:
            X-Header-1:
              schema:
                $ref: '#/components/schemas/Color'
                enum:
                  - black
                  - white
                  - gray
components:
  schemas:
    Color:
      type: string
      enum:
        - black`}],["openapi/response-headers-schema/remove-sibling-maxLength-for-ref",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        "200":
          description: Successful operation
          headers:
            X-Header-1:
              schema:
                $ref: "#/components/schemas/Color"
                maxLength: 10
components:
  schemas:
    Color:
      type: string
      maxLength: 20
`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Get an existing pet.
      description: Get an existing pet by Id.
      operationId: getPet
      responses:
        "200":
          description: Successful operation
          headers:
            X-Header-1:
              schema:
                $ref: "#/components/schemas/Color"
components:
  schemas:
    Color:
      type: string
      maxLength: 20
`}],["openapi/response/add-allowEmptyValue-attribute-with-default-value-for-header",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              schema:
                type: string`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              allowEmptyValue: false
              schema:
                type: string`}],["openapi/response/add-allowReserved-attribute-with-default-value-for-header",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              schema:
                type: string`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              allowReserved: false
              schema:
                type: string`}],["openapi/response/add-allowReserved-attribute-with-default-value-for-response-parameter-encoding",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: some value
          content:
            application/json:
              schema:
                type: object
                properties:
                  historyMetadata:
                    type: object
                    properties: {}
              encoding:
                historyMetadata:
                  contentType: application/xml; charset=utf-8`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: some value
          content:
            application/json:
              schema:
                type: object
                properties:
                  historyMetadata:
                    type: object
                    properties: {}
              encoding:
                historyMetadata:
                  contentType: application/xml; charset=utf-8
                  allowReserved: false`}],["openapi/response/add-custom-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
          x-cacheable: true
`}],["openapi/response/add-deprecated-attribute-with-default-value-for-header",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              schema:
                type: string`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              deprecated: false
              schema:
                type: string`}],["openapi/response/add-header-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              schema:
                type: integer`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              description: some description
              schema:
                type: integer
`}],["openapi/response/add-new-response",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
        '202':
          description: OK
          content: { }
`}],["openapi/response/add-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Add a new pet to the store.
      description: Add a new pet to the store.
      operationId: addPet
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              type: object
        required: true
      responses:
        '200':
          $ref: '#/components/responses/response200'
components:
  responses:
    response200:
      description: response description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
              name:
                type: string`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Add a new pet to the store.
      description: Add a new pet to the store.
      operationId: addPet
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              type: object
        required: true
      responses:
        '200':
          $ref: '#/components/responses/response200'
          description: response description override
components:
  responses:
    response200:
      description: response description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
              name:
                type: string`}],["openapi/response/add-required-attribute-with-default-value-for-header",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              schema:
                type: string`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              required: false
              schema:
                type: string`}],["openapi/response/add-response-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/response/add-response-header",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              schema:
                type: integer
`}],["openapi/response/change-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Add a new pet to the store.
      description: Add a new pet to the store.
      operationId: addPet
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              type: object
        required: true
      responses:
        '200':
          $ref: '#/components/responses/response200'
          description: Old response description override
components:
  responses:
    response200:
      description: response description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
                example: 10
              name:
                type: string
                example: doggie`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Add a new pet to the store.
      description: Add a new pet to the store.
      operationId: addPet
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              type: object
        required: true
      responses:
        '200':
          $ref: '#/components/responses/response200'
          description: New response description override
components:
  responses:
    response200:
      description: response description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
                example: 10
              name:
                type: string
                example: doggie`}],["openapi/response/change-referenced-description-when-overridden-exists",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Add a new pet to the store.
      description: Add a new pet to the store.
      operationId: addPet
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              type: object
        required: true
      responses:
        '200':
          $ref: '#/components/responses/response200'
          description: response description override
components:
  responses:
    response200:
      description: response description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
                example: 10
              name:
                type: string
                example: doggie`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Add a new pet to the store.
      description: Add a new pet to the store.
      operationId: addPet
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              type: object
        required: true
      responses:
        '200':
          $ref: '#/components/responses/response200'
          description: response description override
components:
  responses:
    response200:
      description: Some changes are made in response description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
                example: 10
              name:
                type: string
                example: doggie`}],["openapi/response/remove-allowEmptyValue-attribute-with-default-value-from-header",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              allowEmptyValue: false
              schema:
                type: string`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              schema:
                type: string`}],["openapi/response/remove-allowReserved-attribute-with-default-value-from-header",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              allowReserved: false
              schema:
                type: string`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              schema:
                type: string`}],["openapi/response/remove-allowReserved-attribute-with-default-value-from-response-parameter-encoding",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: some value
          content:
            application/json:
              schema:
                type: object
                properties:
                  historyMetadata:
                    type: object
                    properties: {}
              encoding:
                historyMetadata:
                  contentType: application/xml; charset=utf-8
                  allowReserved: false`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: some value
          content:
            application/json:
              schema:
                type: object
                properties:
                  historyMetadata:
                    type: object
                    properties: {}
              encoding:
                historyMetadata:
                  contentType: application/xml; charset=utf-8`}],["openapi/response/remove-custom-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
          x-cacheable: false
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
`}],["openapi/response/remove-deprecated-attribute-with-default-value-from-header",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              deprecated: false
              schema:
                type: string`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              schema:
                type: string`}],["openapi/response/remove-header-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              description: some description
              schema:
                type: integer`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              schema:
                type: integer
`}],["openapi/response/remove-overriden-description",{before:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Add a new pet to the store.
      description: Add a new pet to the store.
      operationId: addPet
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              type: object
        required: true
      responses:
        '200':
          $ref: '#/components/responses/response200'
          description: response description override
components:
  responses:
    response200:
      description: response description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
              name:
                type: string`,after:`openapi: 3.1.0
info:
  title: Swagger Petstore - OpenAPI 3.1
  version: 1.0.12
paths:
  /path1:
    post:
      summary: Add a new pet to the store.
      description: Add a new pet to the store.
      operationId: addPet
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              type: object
        required: true
      responses:
        '200':
          $ref: '#/components/responses/response200'
components:
  responses:
    response200:
      description: response description from components
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int64
              name:
                type: string`}],["openapi/response/remove-required-attribute-with-default-value-from-header",{before:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              required: false
              schema:
                type: string`,after:`openapi: 3.0.0
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: Successful response
          headers:
            X-Example-Header:
              schema:
                type: string`}],["openapi/response/remove-response",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
        '202':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }`}],["openapi/response/remove-response-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: some value
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          content: { }
`}],["openapi/response/remove-response-header",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              schema:
                type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/response/update-custom-property-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
          x-cacheable: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
          x-cacheable: false
`}],["openapi/response/update-header-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              description: some description
              schema:
                type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              description: changed description
              schema:
                type: integer
`}],["openapi/response/update-header-name",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              schema:
                type: integer`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Remaining:
              schema:
                type: integer
`}],["openapi/response/update-response-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: some value
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: changed value
          content: { }
`}]]),be=new Map([["openapi/general-operation-parameters/add-method-in-path-item",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/general-operation-parameters/add-unused-method-in-path-item",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/general-operation-parameters/remove-method-in-path-item",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/general-operation-parameters/remove-unused-method-in-path-item",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/general-operation-parameters/replace-inline-path-item-to-ref",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/general-operation-parameters/replace-ref-path-item-to-inline",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/headers/add-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/headers/change-overriden-description",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/headers/change-referenced-description-when-overridden-exists",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/headers/remove-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/operation-parameters/add-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/operation-parameters/change-overriden-description",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/operation-parameters/change-referenced-description-when-overridden-exists",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/operation-parameters/remove-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/parameters-examples/add-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/parameters-examples/add-overriden-summary",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/parameters-examples/change-overriden-description",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/parameters-examples/change-overriden-summary",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/parameters-examples/change-referenced-description-when-overridden-exists",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/parameters-examples/change-referenced-summary-when-overridden-exists",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/parameters-examples/remove-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/parameters-examples/remove-overriden-summary",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/parameters-schema/add-null-to-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/parameters-schema/add-sibling-description-for-ref",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/parameters-schema/add-union-type",{versionPairs:[["3.0.0","3.1.0"],["3.1.0","3.1.0"]]}],["openapi/parameters-schema/change-referenced-enum-when-sibling-exists-for-ref",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/parameters-schema/change-sibling-enum-for-ref",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/parameters-schema/mark-schema-value-as-non-nullable",{versionPairs:[["3.0.0","3.0.0"]]}],["openapi/parameters-schema/mark-schema-value-as-nullable",{versionPairs:[["3.0.0","3.0.0"]]}],["openapi/parameters-schema/nullable-equivalent-to-null",{versionPairs:[["3.0.0","3.1.0"]]}],["openapi/parameters-schema/remove-null-from-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/parameters-schema/remove-sibling-maxLength-for-ref",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/parameters-schema/remove-union-type",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/parameters-schema/reorder-types-in-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/parameters-schema/union-type-equivalent-to-any-of",{versionPairs:[["3.0.0","3.1.0"],["3.1.0","3.1.0"]]}],["openapi/request-body-examples/add-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/request-body-examples/change-overriden-description",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/request-body-examples/change-referenced-description-when-overridden-exists",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/request-body-examples/remove-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/request-body-schema/add-null-to-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/request-body-schema/add-sibling-description-for-ref",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/request-body-schema/add-union-type",{versionPairs:[["3.0.0","3.1.0"],["3.1.0","3.1.0"]]}],["openapi/request-body-schema/change-referenced-enum-when-sibling-exists-for-ref",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/request-body-schema/change-sibling-enum-for-ref",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/request-body-schema/mark-schema-value-as-non-nullable",{versionPairs:[["3.0.0","3.0.0"]]}],["openapi/request-body-schema/mark-schema-value-as-nullable",{versionPairs:[["3.0.0","3.0.0"]]}],["openapi/request-body-schema/nullable-equivalent-to-null",{versionPairs:[["3.0.0","3.1.0"]]}],["openapi/request-body-schema/remove-null-from-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/request-body-schema/remove-sibling-maxLength-for-ref",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/request-body-schema/remove-union-type",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/request-body-schema/reorder-types-in-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/request-body-schema/union-type-equivalent-to-any-of",{versionPairs:[["3.0.0","3.1.0"],["3.1.0","3.1.0"]]}],["openapi/request-body/add-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/request-body/change-overriden-description",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/request-body/change-referenced-description-when-overridden-exists",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/request-body/remove-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/response-body-examples/add-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/response-body-examples/change-overriden-description",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-body-examples/change-referenced-description-when-overridden-exists",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-body-examples/remove-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/response-body-schema/add-null-to-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-body-schema/add-sibling-description-for-ref",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/response-body-schema/add-union-type",{versionPairs:[["3.0.0","3.1.0"],["3.1.0","3.1.0"]]}],["openapi/response-body-schema/change-referenced-enum-when-sibling-exists-for-ref",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-body-schema/change-sibling-enum-for-ref",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-body-schema/mark-schema-value-as-non-nullable",{versionPairs:[["3.0.0","3.0.0"]]}],["openapi/response-body-schema/mark-schema-value-as-nullable",{versionPairs:[["3.0.0","3.0.0"]]}],["openapi/response-body-schema/nullable-equivalent-to-null",{versionPairs:[["3.0.0","3.1.0"]]}],["openapi/response-body-schema/remove-null-from-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-body-schema/remove-sibling-maxLength-for-ref",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/response-body-schema/remove-union-type",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/response-body-schema/reorder-types-in-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-body-schema/union-type-equivalent-to-any-of",{versionPairs:[["3.0.0","3.1.0"],["3.1.0","3.1.0"]]}],["openapi/response-headers-schema/add-null-to-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-headers-schema/add-sibling-description-for-ref",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/response-headers-schema/add-union-type",{versionPairs:[["3.0.0","3.1.0"],["3.1.0","3.1.0"]]}],["openapi/response-headers-schema/change-referenced-enum-when-sibling-exists-for-ref",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-headers-schema/change-sibling-enum-for-ref",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-headers-schema/mark-schema-value-as-non-nullable",{versionPairs:[["3.0.0","3.0.0"]]}],["openapi/response-headers-schema/mark-schema-value-as-nullable",{versionPairs:[["3.0.0","3.0.0"]]}],["openapi/response-headers-schema/nullable-equivalent-to-null",{versionPairs:[["3.0.0","3.1.0"]]}],["openapi/response-headers-schema/remove-null-from-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-headers-schema/remove-sibling-maxLength-for-ref",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/response-headers-schema/remove-union-type",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}],["openapi/response-headers-schema/reorder-types-in-union-type",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response-headers-schema/union-type-equivalent-to-any-of",{versionPairs:[["3.0.0","3.1.0"],["3.1.0","3.1.0"]]}],["openapi/response/add-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.0.0","3.1.0"]]}],["openapi/response/change-overriden-description",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response/change-referenced-description-when-overridden-exists",{versionPairs:[["3.1.0","3.1.0"]]}],["openapi/response/remove-overriden-description",{versionPairs:[["3.1.0","3.1.0"],["3.1.0","3.0.0"]]}]]),$=new Map([["add-all-of",{before:{schema:`type: object
properties:
  prop1:
    type: string
`},after:{schema:`allOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`}}],["add-all-of-option",{before:{schema:`allOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`},after:{schema:`allOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
  - type: object
    properties:
      prop3:
        type: number
`}}],["add-any-of",{before:{schema:`type: object
properties:
  prop1:
    type: string
`},after:{schema:`anyOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`}}],["add-any-of-option",{before:{schema:`anyOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`},after:{schema:`anyOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
  - type: object
    properties:
      prop3:
        type: boolean
`}}],["add-attribute-with-default-value-for-xml",{before:{schema:`type: object
properties:
  id:
    type: integer
`},after:{schema:`type: object
properties:
  id:
    type: integer
xml:
  attribute: false
`}}],["add-discriminator-for-any-of",{before:{schema:`anyOf:
  - type: object
    title: simpleObject
    required:
      - objectType
    properties:
      objectType:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
    properties:
      objectType:
        type: string
`},after:{schema:`anyOf:
  - type: object
    title: simpleObject
    required:
      - objectType
    properties:
      objectType:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
    properties:
      objectType:
        type: string
discriminator:
  propertyName: objectType
`}}],["add-discriminator-for-one-of",{before:{schema:`oneOf:
  - type: object
    title: simpleObject
    required:
      - objectType
    properties:
      objectType:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
    properties:
      objectType:
        type: string
`},after:{schema:`oneOf:
  - type: object
    title: simpleObject
    required:
      - objectType
    properties:
      objectType:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
    properties:
      objectType:
        type: string
discriminator:
  propertyName: objectType
`}}],["add-enum",{before:{schema:`type: string
`},after:{schema:`type: string
enum:
  - val1
`}}],["add-enum-value",{before:{schema:`type: string
enum:
  - val1
  - val2
`},after:{schema:`type: string
enum:
  - val1
  - val2
  - val3
`}}],["add-format-for-number-property",{before:{schema:`type: number
`},after:{schema:`type: number
format: float
`}}],["add-format-for-string-property",{before:{schema:`type: string
`},after:{schema:`type: string
format: email
`}}],["add-max-items-for-array-property",{before:{schema:`type: array
items:
  type: string
`},after:{schema:`type: array
maxItems: 5
items:
  type: string
`}}],["add-max-length-for-string-property",{before:{schema:`type: string
`},after:{schema:`type: string
maxLength: 11
`}}],["add-max-properties-for-object-property",{before:{schema:`type: object
properties:
  prop1:
    type: string
`},after:{schema:`type: object
maxProperties: 10
properties:
  prop1:
    type: string
`}}],["add-maximum-for-number-property",{before:{schema:`type: number
`},after:{schema:`type: number
maximum: 99
`}}],["add-min-items-for-array-property",{before:{schema:`type: array
items:
  type: string
`},after:{schema:`type: array
minItems: 1
items:
  type: string
`}}],["add-min-length-for-string-property",{before:{schema:`properties:
  option1:
    type: string
    minLength: 0
  option2:
    type: string
`},after:{schema:`properties:
  option1:
    type: string
    minLength: 1
  option2:
    type: string
    minLength: 1
`}}],["add-min-properties-for-object-property",{before:{schema:`type: object
properties:
  prop1:
    type: string
`},after:{schema:`type: object
minProperties: 1
properties:
  prop1:
    type: string
`}}],["add-minimum-for-number-property",{before:{schema:`type: number
`},after:{schema:`type: number
minimum: 1
`}}],["add-minItems-with-default-value-for-array-property",{before:{schema:`type: array
items:
  type: string
`},after:{schema:`type: array
minItems: 0
items:
  type: string
`}}],["add-minProperties-with-default-value-for-object-property",{before:{schema:`type: object
properties:
  prop1:
    type: string
`},after:{schema:`type: object
minProperties: 0
properties:
  prop1:
    type: string
`}}],["add-multiple-of-for-number-property",{before:{schema:`type: number
`},after:{schema:`type: number
multipleOf: 2
`}}],["add-new-property-compliance",{before:{schema:`type: object
properties:
  prop1:
    type: string
`},after:{schema:`type: object
properties:
  prop1:
    type: string
  prop2:
    type: number
`}}],["add-non-boolean-additional-properties",{before:{schema:`type: object
`},after:{schema:`type: object
additionalProperties:
  type: string
`}}],["add-null-to-union-type",{before:{schema:`type: [string, integer] # Before - Union type with string and integer only
`},after:{schema:`type: [string, integer, "null"] # After - Union type with string, integer, and boolean
`}}],["add-one-of",{before:{schema:`type: object
properties:
  prop1:
    type: string
`},after:{schema:`oneOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`}}],["add-one-of-option",{before:{schema:`oneOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`},after:{schema:`oneOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
  - type: object
    properties:
      prop3:
        type: boolean
`}}],["add-pattern-for-string-property",{before:{schema:`type: string
`},after:{schema:`type: string
pattern: "^[A-Za-z0-9_-]+$"
`}}],["add-required-property",{before:{schema:`type: object
properties:
  prop1:
    type: string
  prop2:
    type: number
`},after:{schema:`type: object
required:
  - prop1
  - prop2
properties:
  prop1:
    type: string
  prop2:
    type: number
`}}],["add-required-property-with-default",{before:{schema:`type: object
properties:
  prop1:
    type: string
    default: "Sample"
  prop2:
    type: number
    default: 5
`},after:{schema:`type: object
required:
  - prop1
  - prop2
properties:
  prop1:
    type: string
    default: "Sample"
  prop2:
    type: number
    default: 5
`}}],["add-schema-title",{before:{schema:`type: string
`},after:{schema:`title: added schema title
type: string
`}}],["add-union-type",{before:{schema:`type: string
`},after:{schema:`type: [string, integer]
`}}],["add-uniqueItems-with-default-value-for-array-property",{before:{schema:`type: array
items:
  type: string
`},after:{schema:`type: array
uniqueItems: false
items:
  type: string
`}}],["add-xml-name-replacement-for-property",{before:{schema:`type: object
properties:
  id:
    type: integer
`},after:{schema:`type: object
properties:
  id:
    type: integer
    xml:
      name: "xml-id"
`}}],["add-xml-name-replacement-for-schema",{before:{schema:`type: object
properties:
  id:
    type: integer
  title:
    type: string
  author:
    type: string
`},after:{schema:`type: object
properties:
  id:
    type: integer
  title:
    type: string
  author:
    type: string
xml:
  name: "xml-book"
`}}],["add-xml-prefix-and-namespace-for-schema",{before:{schema:`type: object
properties:
  id:
    type: integer
`},after:{schema:`type: object
properties:
  id:
    type: integer
xml:
  prefix: "p1"
  namespace: "http://example.com/schema"
`}}],["add-xml-wrapped-for-array-property",{before:{schema:`type: array
items:
  type: string
`},after:{schema:`type: array
items:
  type: string
xml:
  wrapped: true
`}}],["add-xml-wrapped-with-default-value-for-array-property",{before:{schema:`type: array
items:
  type: string
`},after:{schema:`type: array
items:
  type: string
xml:
  wrapped: false
`}}],["allow-non-unique-items-for-array-property",{before:{schema:`properties:
  option1:
    type: array
    uniqueItems: true
  option2:
    type: array
    uniqueItems: true
`},after:{schema:`properties:
  option1:
    type: array
  option2:
    type: array
    uniqueItems: false
`}}],["decrease-max-items-for-array-property",{before:{schema:`type: array
maxItems: 10
items:
  type: string
`},after:{schema:`type: array
maxItems: 5
items:
  type: string
`}}],["decrease-max-length-for-string-property",{before:{schema:`type: string
maxLength: 22
`},after:{schema:`type: string
maxLength: 11
`}}],["decrease-max-properties-for-object-property",{before:{schema:`type: object
maxProperties: 20
properties:
  prop1:
    type: string
`},after:{schema:`type: object
maxProperties: 10
properties:
  prop1:
    type: string
`}}],["decrease-maximum-for-number-property",{before:{schema:`type: number
maximum: 199
`},after:{schema:`type: number
maximum: 99
`}}],["decrease-min-items-for-array-property",{before:{schema:`type: array
minItems: 3
items:
  type: string
`},after:{schema:`type: array
minItems: 1
items:
  type: string
`}}],["decrease-min-length-for-string-property",{before:{schema:`type: string
minLength: 3
`},after:{schema:`type: string
minLength: 1
`}}],["decrease-min-properties-for-object-property",{before:{schema:`type: object
minProperties: 2
properties:
  prop1:
    type: string
`},after:{schema:`type: object
minProperties: 1
properties:
  prop1:
    type: string
`}}],["decrease-minimum-for-number-property",{before:{schema:`type: number
minimum: 11
`},after:{schema:`type: number
minimum: 1
`}}],["increase-max-items-for-array-property",{before:{schema:`type: array
maxItems: 5
items:
  type: string
`},after:{schema:`type: array
maxItems: 10
items:
  type: string
`}}],["increase-max-length-for-string-property",{before:{schema:`type: string
maxLength: 11
`},after:{schema:`type: string
maxLength: 22
`}}],["increase-max-properties-for-object-property",{before:{schema:`type: object
maxProperties: 10
properties:
  prop1:
    type: string
`},after:{schema:`type: object
maxProperties: 20
properties:
  prop1:
    type: string
`}}],["increase-maximum-for-number-property",{before:{schema:`type: number
maximum: 99
`},after:{schema:`type: number
maximum: 199
`}}],["increase-min-items-for-array-property",{before:{schema:`type: array
minItems: 1
items:
  type: string
`},after:{schema:`type: array
minItems: 3
items:
  type: string
`}}],["increase-min-length-for-string-property",{before:{schema:`type: string
minLength: 1
`},after:{schema:`type: string
minLength: 5
`}}],["increase-min-properties-for-object-property",{before:{schema:`type: object
minProperties: 1
properties:
  prop1:
    type: string
`},after:{schema:`type: object
minProperties: 2
properties:
  prop1:
    type: string
`}}],["increase-minimum-for-number-property",{before:{schema:`type: number
minimum: 1
`},after:{schema:`type: number
minimum: 11
`}}],["mark-maximum-value-as-exclusive-for-number-property",{before:{schema:`properties:
  option1:
    type: number
    maximum: 99
  option2:
    type: number
    maximum: 99
    exclusiveMaximum: false
`},after:{schema:`properties:
  option1:
    type: number
    maximum: 99
    exclusiveMaximum: true
  option2:
    type: number
    maximum: 99
    exclusiveMaximum: true
`}}],["mark-maximum-value-as-inclusive-for-number-property",{before:{schema:`properties:
  option1:
    type: number
    maximum: 99
    exclusiveMaximum: true
  option2:
    type: number
    maximum: 99
    exclusiveMaximum: true
`},after:{schema:`properties:
  option1:
    type: number
    maximum: 99
  option2:
    type: number
    maximum: 99
    exclusiveMaximum: false
`}}],["mark-minimum-value-as-exclusive-for-number-property",{before:{schema:`properties:
  option1:
    type: number
    minimum: 1
  option2:
    type: number
    minimum: 1
    exclusiveMinimum: false
`},after:{schema:`properties:
  option1:
    type: number
    minimum: 1
    exclusiveMinimum: true
  option2:
    type: number
    minimum: 1
    exclusiveMinimum: true
`}}],["mark-minimum-value-as-inclusive-for-number-property",{before:{schema:`properties:
  option1:
    type: number
    minimum: 1
    exclusiveMinimum: true
  option2:
    type: number
    minimum: 1
    exclusiveMinimum: true
`},after:{schema:`properties:
  option1:
    type: number
    minimum: 1
  option2:
    type: number
    minimum: 1
    exclusiveMinimum: false
`}}],["mark-object-property-as-not-read-only",{before:{schema:`properties:
  option1:
    type: string
    readOnly: true
  option2:
    type: string
    readOnly: true
`},after:{schema:`properties:
  option1:
    type: string
    readOnly: false
  option2:
    type: string
`}}],["mark-object-property-as-not-write-only",{before:{schema:`properties:
  option1:
    type: string
    writeOnly: true
  option2:
    type: number
    writeOnly: true
`},after:{schema:`properties:
  option1:
    type: string
  option2:
    type: number
    writeOnly: false
`}}],["mark-object-property-as-read-only",{before:{schema:`properties:
  option1:
    type: string
    readOnly: false
  option2:
    type: string
`},after:{schema:`properties:
  option1:
    type: string
    readOnly: true
  option2:
    type: string
    readOnly: true
`}}],["mark-object-property-as-write-only",{before:{schema:`properties:
  option1:
    type: string
  option2:
    type: number
    writeOnly: false
`},after:{schema:`properties:
  option1:
    type: string
    writeOnly: true
  option2:
    type: number
    writeOnly: true
`}}],["mark-property-as-xml-attribute",{before:{schema:`properties:
  option1:
    type: integer
  option2:
    type: string
    xml:
      attribute: false
`},after:{schema:`properties:
  option1:
    type: integer
    xml:
      attribute: true
  option2:
    type: string
    xml:
      attribute: true
`}}],["mark-property-as-xml-element",{before:{schema:`properties:
  option1:
    type: integer
    xml:
      attribute: true
  option2:
    type: string
    xml:
      attribute: true
`},after:{schema:`properties:
  option1:
    type: integer
  option2:
    type: string
    xml:
      attribute: false
`}}],["mark-schema-value-as-non-nullable",{before:{schema:`properties:
  option1:
    type: string
    nullable: true
  option2:
    type: string
    nullable: true
`},after:{schema:`properties:
  option1:
    type: string
  option2:
    type: string
    nullable: false
`}}],["mark-schema-value-as-nullable",{before:{schema:`properties:
  option1:
    type: string
  option2:
    type: string
    nullable: false
`},after:{schema:`properties:
  option1:
    type: string
    nullable: true
  option2:
    type: string
    nullable: true
`}}],["nullable-equivalent-to-null",{before:{schema:`type: string
nullable: true
`},after:{schema:`type: [string, "null"]
`}}],["prohibit-non-unique-items-for-array-property",{before:{schema:`properties:
  option1:
    type: array
  option2:
    type: array
    uniqueItems: false
`},after:{schema:`properties:
  option1:
    type: array
    uniqueItems: true
  option2:
    type: array
    uniqueItems: true
`}}],["remove-additional-properties",{before:{schema:`type: object
additionalProperties:
  type: string
`},after:{schema:`type: object
`}}],["remove-all-of",{before:{schema:`allOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`},after:{schema:`type: object
properties:
  prop1:
    type: string
`}}],["remove-all-of-option",{before:{schema:`allOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
  - type: object
    properties:
      prop3:
        type: number
`},after:{schema:`allOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`}}],["remove-any-of",{before:{schema:`anyOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`},after:{schema:`type: object
properties:
  prop1:
    type: string
`}}],["remove-any-of-option",{before:{schema:`anyOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
  - type: object
    properties:
      prop3:
        type: boolean
`},after:{schema:`anyOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`}}],["remove-attribute-with-default-value-for-xml",{before:{schema:`type: object
properties:
  id:
    type: integer
xml:
  attribute: false
`},after:{schema:`type: object
properties:
  id:
    type: integer
`}}],["remove-discriminator-for-any-of",{before:{schema:`anyOf:
  - type: object
    title: simpleObject
    required:
      - objectType
    properties:
      objectType:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
    properties:
      objectType:
        type: string
discriminator:
  propertyName: objectType
`},after:{schema:`anyOf:
  - type: object
    title: simpleObject
    required:
      - objectType
    properties:
      objectType:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
    properties:
      objectType:
        type: string
`}}],["remove-discriminator-for-one-of",{before:{schema:`oneOf:
  - type: object
    title: simpleObject
    required:
      - objectType
    properties:
      objectType:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
    properties:
      objectType:
        type: string
discriminator:
  propertyName: objectType
`},after:{schema:`oneOf:
  - type: object
    title: simpleObject
    required:
      - objectType
    properties:
      objectType:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
    properties:
      objectType:
        type: string
`}}],["remove-enum",{before:{schema:`type: string
enum:
  - val1
`},after:{schema:`type: string
`}}],["remove-enum-value",{before:{schema:`type: string
enum:
  - val1
  - val2
  - val3
`},after:{schema:`type: string
enum:
  - val1
  - val2
`}}],["remove-format-for-number-property",{before:{schema:`type: number
format: float
`},after:{schema:`type: number
`}}],["remove-format-for-string-property",{before:{schema:`type: string
format: email
`},after:{schema:`type: string
`}}],["remove-max-items-for-array-property",{before:{schema:`type: array
maxItems: 5
items:
  type: string
`},after:{schema:`type: array
items:
  type: string
`}}],["remove-max-length-for-string-property",{before:{schema:`type: string
maxLength: 22
`},after:{schema:`type: string
`}}],["remove-max-properties-for-object-property",{before:{schema:`type: object
maxProperties: 10
properties:
  prop1:
    type: string
`},after:{schema:`type: object
properties:
  prop1:
    type: string
`}}],["remove-maximum-for-number-property",{before:{schema:`type: number
maximum: 99
`},after:{schema:`type: number
`}}],["remove-min-items-for-array-property",{before:{schema:`type: array
minItems: 1
items:
  type: string
`},after:{schema:`type: array
items:
  type: string
`}}],["remove-min-length-for-string-property",{before:{schema:`properties:
  option1:
    type: string
    minLength: 1
  option2:
    type: string
    minLength: 1
`},after:{schema:`properties:
  option1:
    type: string
    minLength: 0
  option2:
    type: string
`}}],["remove-min-properties-for-object-property",{before:{schema:`type: object
minProperties: 1
properties:
  prop1:
    type: string
`},after:{schema:`type: object
properties:
  prop1:
    type: string
`}}],["remove-minimum-for-number-property",{before:{schema:`type: number
minimum: 1
`},after:{schema:`type: number
`}}],["remove-minItems-with-default-value-for-array-property",{before:{schema:`type: array
minItems: 0
items:
  type: string
`},after:{schema:`type: array
items:
  type: string
`}}],["remove-minProperties-with-default-value-for-object-property",{before:{schema:`type: object
minProperties: 0
properties:
  prop1:
    type: string
`},after:{schema:`type: object
properties:
  prop1:
    type: string
`}}],["remove-multiple-of-for-number-property",{before:{schema:`type: number
multipleOf: 2
`},after:{schema:`type: number
`}}],["remove-null-from-union-type",{before:{schema:`type: [string, integer, "null"] # Union of three types
`},after:{schema:`type: [string, integer] # Union of two types
`}}],["remove-one-of",{before:{schema:`oneOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`},after:{schema:`type: object
properties:
  prop1:
    type: string
`}}],["remove-one-of-option",{before:{schema:`oneOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
  - type: object
    properties:
      prop3:
        type: boolean
`},after:{schema:`oneOf:
  - type: object
    properties:
      prop1:
        type: string
  - type: object
    properties:
      prop2:
        type: number
`}}],["remove-pattern-for-string-property",{before:{schema:`type: string
pattern: "^[A-Za-z0-9_-]+$"
`},after:{schema:`type: string
`}}],["remove-property-compliance",{before:{schema:`type: object
properties:
  prop1:
    type: string
  prop2:
    type: number
`},after:{schema:`type: object
properties:
  prop1:
    type: string
`}}],["remove-required-property",{before:{schema:`type: object
required:
  - prop1
  - prop2
properties:
  prop1:
    type: string
  prop2:
    type: number
`},after:{schema:`type: object
required:
  - prop2
properties:
  prop1:
    type: string
  prop2:
    type: number
`}}],["remove-schema-title",{before:{schema:`title: schema title
type: string
`},after:{schema:`type: string
`}}],["remove-union-type",{before:{schema:`type: [string, integer]
`},after:{schema:`type: string
`}}],["remove-uniqueItems-with-default-value-for-array-property",{before:{schema:`type: array
uniqueItems: false
items:
  type: string
`},after:{schema:`type: array
items:
  type: string
`}}],["remove-xml-name-replacement-for-property",{before:{schema:`type: object
properties:
  id:
    type: integer
    xml:
      name: "xml-id"
`},after:{schema:`type: object
properties:
  id:
    type: integer
`}}],["remove-xml-name-replacement-for-schema",{before:{schema:`type: object
properties:
  id:
    type: integer
  title:
    type: string
  author:
    type: string
xml:
  name: "xml-book"
`},after:{schema:`type: object
properties:
  id:
    type: integer
  title:
    type: string
  author:
    type: string
`}}],["remove-xml-prefix-and-namespace-for-schema",{before:{schema:`type: object
properties:
  id:
    type: integer
xml:
  prefix: "p1"
  namespace: "http://example.com/schema"
`},after:{schema:`type: object
properties:
  id:
    type: integer
`}}],["remove-xml-wrapped-for-array-property",{before:{schema:`type: array
items:
  type: string
xml:
  wrapped: true
`},after:{schema:`type: array
items:
  type: string
`}}],["remove-xml-wrapped-with-default-value-for-array-property",{before:{schema:`type: array
items:
  type: string
xml:
  wrapped: false
`},after:{schema:`type: array
items:
  type: string
`}}],["reorder-types-in-union-type",{before:{schema:`type: ["null", string]
`},after:{schema:`type: [string, "null"]
`}}],["union-type-equivalent-to-any-of",{before:{schema:`anyOf:
  - type: string
  - type: integer
`},after:{schema:`type: [string, integer]
`}}],["update-definition-of-free-form-object",{before:{schema:`properties:
  option1:
    type: object
  option2:
    type: object
`},after:{schema:`properties:
  option1:
    type: object
    additionalProperties: true
  option2:
    type: object
    additionalProperties: {}
`}}],["update-discriminator-for-any-of",{before:{schema:`anyOf:
  - type: object
    title: simpleObject
    required:
      - objectType
      - attribute
    properties:
      objectType:
        type: string
      attribute:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
      - attribute
    properties:
      objectType:
        type: string
      attribute:
        type: string
discriminator:
  propertyName: objectType
`},after:{schema:`anyOf:
  - type: object
    title: simpleObject
    required:
      - objectType
      - attribute
    properties:
      objectType:
        type: string
      attribute:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
      - attribute
    properties:
      objectType:
        type: string
      attribute:
        type: string
discriminator:
  propertyName: attribute
`}}],["update-discriminator-for-one-of",{before:{schema:`oneOf:
  - type: object
    title: simpleObject
    required:
      - objectType
      - attribute
    properties:
      objectType:
        type: string
      attribute:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
      - attribute
    properties:
      objectType:
        type: string
      attribute:
        type: string
discriminator:
  propertyName: objectType
`},after:{schema:`oneOf:
  - type: object
    title: simpleObject
    required:
      - objectType
      - attribute
    properties:
      objectType:
        type: string
      attribute:
        type: string
  - type: object
    title: complexObject
    required:
      - objectType
      - attribute
    properties:
      objectType:
        type: string
      attribute:
        type: string
discriminator:
  propertyName: attribute
`}}],["update-enum-value",{before:{schema:`type: string
enum:
  - val1
  - val2
`},after:{schema:`type: string
enum:
  - val1
  - val3
`}}],["update-format-for-number-property",{before:{schema:`type: number
format: float
`},after:{schema:`type: number
format: double
`}}],["update-format-for-string-property",{before:{schema:`type: string
format: email
`},after:{schema:`type: string
format: date-time
`}}],["update-multiple-of-for-number-property",{before:{schema:`type: number
multipleOf: 2
`},after:{schema:`type: number
multipleOf: 5
`}}],["update-pattern-for-string-property",{before:{schema:`type: string
pattern: "^[A-Za-z0-9_-]+$"
`},after:{schema:`type: string
pattern: '^\\d{3}-\\d{2}-\\d{4}$'
`}}],["update-required-property",{before:{schema:`type: object
required:
  - prop1
properties:
  prop1:
    type: string
  prop2:
    type: number
`},after:{schema:`type: object
required:
  - prop2
properties:
  prop1:
    type: string
  prop2:
    type: number
`}}],["update-schema-title",{before:{schema:`title: schema title
type: string
`},after:{schema:`title: updated schema title
type: string
`}}],["update-schema-type",{before:{schema:`type: string
`},after:{schema:`type: number
`}}],["update-schema-type-from-any-type-to-specific-type",{before:{schema:`description: any to specific
`},after:{schema:`description: any to specific
type: string
`}}],["update-schema-type-from-nothing-to-specific-type",{before:{schema:`allOf:
  - type: object
  - type: string
`},after:{schema:`description: nothing to specific
type: string
`}}],["update-schema-type-from-specific-type-to-any-type",{before:{schema:`description: specific to any
type: string
`},after:{schema:`description: specific to any
`}}],["update-schema-type-from-specific-type-to-nothing",{before:{schema:`description: specific to nothing
type: string
`},after:{schema:`allOf:
  - type: object
  - type: string
`}}],["update-schema-type-to-an-equivalent-value",{before:{schema:`description: to an equivalent
`},after:{schema:`description: to an equivalent
anyOf:
  - type: string
  - type: number
  - type: integer
  - type: boolean
  - type: array
    items: {}
  - type: object
`}}],["update-specific-type-to-number-with-exclusive-value",{before:{schema:`description: specific to number with exclusive value
type: string
`},after:{schema:`description: specific to number with exclusive value
type: number
exclusiveMaximum: true
exclusiveMinimum: true
`}}],["update-type-of-additional-properties",{before:{schema:`type: object
additionalProperties:
  type: string
`},after:{schema:`type: object
additionalProperties:
  type: number
`}}],["update-xml-name-replacement-for-property",{before:{schema:`type: object
properties:
  id:
    type: integer
    xml:
      name: "xml-id"
`},after:{schema:`type: object
properties:
  id:
    type: integer
    xml:
      name: "xml-id-2"
`}}],["update-xml-name-replacement-for-schema",{before:{schema:`type: object
properties:
  id:
    type: integer
  title:
    type: string
  author:
    type: string
xml:
  name: "xml-book"
`},after:{schema:`type: object
properties:
  id:
    type: integer
  title:
    type: string
  author:
    type: string
xml:
  name: "xml-book-1"
`}}],["update-xml-prefix-for-schema",{before:{schema:`type: object
properties:
  id:
    type: integer
xml:
  prefix: "p1"
  namespace: "http://example.com/schema"
`},after:{schema:`type: object
properties:
  id:
    type: integer
xml:
  prefix: "p2"
  namespace: "http://example.com/schema"
`}}]]),H=new Map([["asyncapi/operation-message-headers-receive",`asyncapi: 3.0.0
info:
  title: asyncapi schema case (generated)
  version: 1.0.0
channels:
  requestChannel:
    address: test/request
    messages:
      requestMessage:
        headers:
          type: object
          properties:
            header1:
              __SCHEMA__
        payload:
          type: object
operations:
  operation1:
    action: receive
    channel:
      $ref: "#/channels/requestChannel"
    messages:
      - $ref: "#/channels/requestChannel/messages/requestMessage"
`],["asyncapi/operation-message-headers-send",`asyncapi: 3.0.0
info:
  title: asyncapi schema case (generated)
  version: 1.0.0
channels:
  requestChannel:
    address: test/request
    messages:
      requestMessage:
        headers:
          type: object
          properties:
            header1:
              __SCHEMA__
        payload:
          type: object
operations:
  operation1:
    action: send
    channel:
      $ref: "#/channels/requestChannel"
    messages:
      - $ref: "#/channels/requestChannel/messages/requestMessage"
`],["asyncapi/operation-message-payload-receive",`asyncapi: 3.0.0
info:
  title: asyncapi schema case (generated)
  version: 1.0.0
channels:
  requestChannel:
    address: test/request
    messages:
      requestMessage:
        payload:
          __SCHEMA__
operations:
  operation1:
    action: receive
    channel:
      $ref: "#/channels/requestChannel"
    messages:
      - $ref: "#/channels/requestChannel/messages/requestMessage"
`],["asyncapi/operation-message-payload-send",`asyncapi: 3.0.0
info:
  title: asyncapi schema case (generated)
  version: 1.0.0
channels:
  requestChannel:
    address: test/request
    messages:
      requestMessage:
        payload:
          __SCHEMA__
operations:
  operation1:
    action: send
    channel:
      $ref: "#/channels/requestChannel"
    messages:
      - $ref: "#/channels/requestChannel/messages/requestMessage"
`],["asyncapi/operation-reply-object-message-headers-receive",`asyncapi: 3.0.0
info:
  title: asyncapi schema case (generated)
  version: 1.0.0
channels:
  requestChannel:
    address: test/request
    messages:
      requestMessage:
        payload:
          type: object
  replyChannel:
    address: test/reply
    messages:
      replyMessage:
        headers:
          type: object
          properties:
            header1:
              __SCHEMA__
        payload:
          type: object
operations:
  operation1:
    action: receive
    channel:
      $ref: "#/channels/requestChannel"
    messages:
      - $ref: "#/channels/requestChannel/messages/requestMessage"
    reply:
      channel:
        $ref: "#/channels/replyChannel"
      messages:
        - $ref: "#/channels/replyChannel/messages/replyMessage"
`],["asyncapi/operation-reply-object-message-headers-send",`asyncapi: 3.0.0
info:
  title: asyncapi schema case (generated)
  version: 1.0.0
channels:
  requestChannel:
    address: test/request
    messages:
      requestMessage:
        payload:
          type: object
  replyChannel:
    address: test/reply
    messages:
      replyMessage:
        headers:
          type: object
          properties:
            header1:
              __SCHEMA__
        payload:
          type: object
operations:
  operation1:
    action: send
    channel:
      $ref: "#/channels/requestChannel"
    messages:
      - $ref: "#/channels/requestChannel/messages/requestMessage"
    reply:
      channel:
        $ref: "#/channels/replyChannel"
      messages:
        - $ref: "#/channels/replyChannel/messages/replyMessage"
`],["asyncapi/operation-reply-object-message-payload-receive",`asyncapi: 3.0.0
info:
  title: asyncapi schema case (generated)
  version: 1.0.0
channels:
  requestChannel:
    address: test/request
    messages:
      requestMessage:
        payload:
          type: object
  replyChannel:
    address: test/reply
    messages:
      replyMessage:
        payload:
          __SCHEMA__
operations:
  operation1:
    action: receive
    channel:
      $ref: "#/channels/requestChannel"
    messages:
      - $ref: "#/channels/requestChannel/messages/requestMessage"
    reply:
      channel:
        $ref: "#/channels/replyChannel"
      messages:
        - $ref: "#/channels/replyChannel/messages/replyMessage"
`],["asyncapi/operation-reply-object-message-payload-send",`asyncapi: 3.0.0
info:
  title: asyncapi schema case (generated)
  version: 1.0.0
channels:
  requestChannel:
    address: test/request
    messages:
      requestMessage:
        payload:
          type: object
  replyChannel:
    address: test/reply
    messages:
      replyMessage:
        payload:
          __SCHEMA__
operations:
  operation1:
    action: send
    channel:
      $ref: "#/channels/requestChannel"
    messages:
      - $ref: "#/channels/requestChannel/messages/requestMessage"
    reply:
      channel:
        $ref: "#/channels/replyChannel"
      messages:
        - $ref: "#/channels/replyChannel/messages/replyMessage"
`],["openapi/parameters-schema",`openapi: 3.0.4
info:
  title: openapi schema case (generated)
  version: 1.0.0
paths:
  /path1:
    post:
      parameters:
        - name: param1
          in: query
          schema:
            __SCHEMA__
      responses:
        "200":
          description: OK
`],["openapi/request-body-schema",`openapi: 3.0.4
info:
  title: openapi schema case (generated)
  version: 1.0.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              __SCHEMA__
      responses:
        "200":
          description: OK
`],["openapi/response-body-schema",`openapi: 3.0.4
info:
  title: openapi schema case (generated)
  version: 1.0.0
paths:
  /path1:
    post:
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                __SCHEMA__
`],["openapi/response-headers-schema",`openapi: 3.0.4
info:
  title: openapi schema case (generated)
  version: 1.0.0
paths:
  /path1:
    post:
      responses:
        "200":
          description: OK
          headers:
            X-Header-1:
              schema:
                __SCHEMA__
`]]),ve=["3.0.0","3.0.0"],U=(e,n)=>{const t=/^openapi:\s*.*$/m;if(!t.test(e))throw new Error(`Invalid OpenAPI sample: missing root "openapi" field. Sample start: ${e.slice(0,100)}...`);return e.replace(t,`openapi: ${n}`)},G="openapi",J="graphql",Z="asyncapi",ee="/",Q=(e,n,t)=>[e,n,t].join(ee),ne=(e,n)=>[e,n].join(ee),xe=["parameters-schema","request-body-schema","response-body-schema","response-headers-schema"],qe=["operation-message-headers-receive","operation-message-headers-send","operation-message-payload-receive","operation-message-payload-send","operation-reply-object-message-headers-receive","operation-reply-object-message-headers-send","operation-reply-object-message-payload-receive","operation-reply-object-message-payload-send"],Ie={[G]:xe,[J]:[],[Z]:qe},Se=(e,n)=>Ie[e].includes(n),E="__SCHEMA__",R=e=>e.replace(/\r\n/g,`
`),Oe=(e,n)=>{const t=R(e).trimEnd();return t?n?n+t.replace(/\n(?=.)/g,`
${n}`):t:""},je=(e,n)=>{var I;const t=R(e),p=t.split(`
`),r=p.map((d,S)=>d.trim()===E?S:-1).filter(d=>d!==-1);if(r.length===0)throw new Error(`Template placeholder '${E}' not found. Template start: ${t.slice(0,120)}...`);if(r.length>1)throw new Error(`Template placeholder '${E}' must appear only once. Found ${r.length} occurrences. Template start: ${t.slice(0,120)}...`);const m=r[0],c=((I=p[m].match(/^\s*/))==null?void 0:I[0])??"",l=Oe(n,c);return l?(p.splice(m,1,...l.split(`
`)),p.join(`
`)):(p.splice(m,1),p.join(`
`))},Pe=(e,n)=>{const t=je(e,n.schema);return`${R(t).trimEnd()}
`},te=(e,n)=>Se(e,n)?H.has(ne(e,n)):!1,V=(e,n,t,p)=>{const r=ne(e,n),m=H.get(r);if(!m)throw new Error(`Schema-scope template not found: ${r}`);const c=$.get(t);if(!c)throw new Error(`JSON schema case not found: ${t}`);const l=c[p];return Pe(m,l)},Ke=["3.0.0","3.0.0"],Fe=["unversioned","unversioned"],Ae=(e,n,t)=>te(e,n)&&$.has(t),we=(e,n,t)=>{const p=Q(e,n,t),r=z.get(p);if(r)return[r.before,r.after];if(!te(e,n))throw new Error(`Unknown compatibility suite case: (${e}, ${n}, ${t})`);if(!$.has(t))throw new Error(`Unknown JSON schema case '${t}' for schema scope (${e}, ${n})`);const m=V(e,n,t,"before"),c=V(e,n,t,"after");return[m,c]},De={[G]:{defaultPair:ve,patchSamples:(e,n,t)=>[U(e,t[0]),U(n,t[1])]},[J]:{defaultPair:Fe},[Z]:{defaultPair:Ke}},se=e=>{const n=De[e];if(!n)throw new Error(`Unknown suiteType for VersionPairPolicy lookup: ${e}`);return n},re=(e,n)=>{var t;if(e===G)return(t=be.get(n))==null?void 0:t.versionPairs},Be=(e,n,t)=>{const p=Q(e,n,t);if(!z.has(p)&&!Ae(e,n,t))throw new Error(`Unknown compatibility suite case: (${e}, ${n}, ${t})`);const r=se(e);return re(e,p)??[r.defaultPair]},pe=(e,n,t,p)=>{const r=we(e,n,t);if(p===void 0)return r;const m=se(e),[c,l]=p;if(!Be(e,n,t).some(w=>w[0]===c&&w[1]===l))throw new Error(`Unsupported specificationVersionPair [${c}, ${l}] for case (${e}, ${n}, ${t})`);if(!m.patchSamples)return r;const S=Q(e,n,t);return re(e,S)?m.patchSamples(r[0],r[1],p):r};var oe={exports:{}};(function(e){(function(){function n(s,a){document.addEventListener?s.addEventListener("scroll",a,!1):s.attachEvent("scroll",a)}function t(s){document.body?s():document.addEventListener?document.addEventListener("DOMContentLoaded",function a(){document.removeEventListener("DOMContentLoaded",a),s()}):document.attachEvent("onreadystatechange",function a(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",a),s())})}function p(s){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(s)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function r(s,a){s.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+a+";"}function m(s){var a=s.g.offsetWidth,o=a+100;return s.j.style.width=o+"px",s.i.scrollLeft=o,s.h.scrollLeft=s.h.scrollWidth+100,s.l!==a?(s.l=a,!0):!1}function c(s,a){function o(){var u=v;m(u)&&u.g.parentNode!==null&&a(u.l)}var v=s;n(s.h,o),n(s.i,o),m(s)}function l(s,a,o){a=a||{},o=o||window,this.family=s,this.style=a.style||"normal",this.weight=a.weight||"normal",this.stretch=a.stretch||"normal",this.context=o}var I=null,d=null,S=null,A=null;function w(s){return d===null&&(M(s)&&/Apple/.test(window.navigator.vendor)?(s=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),d=!!s&&603>parseInt(s[1],10)):d=!1),d}function M(s){return A===null&&(A=!!s.document.fonts),A}function O(s,a){var o=s.style,v=s.weight;if(S===null){var u=document.createElement("div");try{u.style.font="condensed 100px sans-serif"}catch{}S=u.style.font!==""}return[o,v,S?s.stretch:"","100px",a].join(" ")}l.prototype.load=function(s,a){var o=this,v=s||"BESbswy",u=0,j=a||3e3,N=new Date().getTime();return new Promise(function(C,_){if(M(o.context)&&!w(o.context)){var ce=new Promise(function(P,K){function y(){new Date().getTime()-N>=j?K(Error(""+j+"ms timeout exceeded")):o.context.document.fonts.load(O(o,'"'+o.family+'"'),v).then(function(x){1<=x.length?P():setTimeout(y,25)},K)}y()}),ue=new Promise(function(P,K){u=setTimeout(function(){K(Error(""+j+"ms timeout exceeded"))},j)});Promise.race([ue,ce]).then(function(){clearTimeout(u),C(o)},_)}else t(function(){function P(){var i;(i=h!=-1&&g!=-1||h!=-1&&b!=-1||g!=-1&&b!=-1)&&((i=h!=g&&h!=b&&g!=b)||(I===null&&(i=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),I=!!i&&(536>parseInt(i[1],10)||parseInt(i[1],10)===536&&11>=parseInt(i[2],10))),i=I&&(h==D&&g==D&&b==D||h==B&&g==B&&b==B||h==T&&g==T&&b==T)),i=!i),i&&(f.parentNode!==null&&f.parentNode.removeChild(f),clearTimeout(u),C(o))}function K(){if(new Date().getTime()-N>=j)f.parentNode!==null&&f.parentNode.removeChild(f),_(Error(""+j+"ms timeout exceeded"));else{var i=o.context.document.hidden;(i===!0||i===void 0)&&(h=y.g.offsetWidth,g=x.g.offsetWidth,b=F.g.offsetWidth,P()),u=setTimeout(K,50)}}var y=new p(v),x=new p(v),F=new p(v),h=-1,g=-1,b=-1,D=-1,B=-1,T=-1,f=document.createElement("div");f.dir="ltr",r(y,O(o,"sans-serif")),r(x,O(o,"serif")),r(F,O(o,"monospace")),f.appendChild(y.g),f.appendChild(x.g),f.appendChild(F.g),o.context.document.body.appendChild(f),D=y.g.offsetWidth,B=x.g.offsetWidth,T=F.g.offsetWidth,K(),c(y,function(i){h=i,P()}),r(y,O(o,'"'+o.family+'",sans-serif')),c(x,function(i){g=i,P()}),r(x,O(o,'"'+o.family+'",serif')),c(F,function(i){b=i,P()}),r(F,O(o,'"'+o.family+'",monospace'))})})},e.exports=l})()})(oe);var Te=oe.exports;const Ee=he(Te),ae=Y.memo(e=>q.jsx("div",{children:q.jsx("h1",{children:"Async API Operation Diff Viewer"})}));ae.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationType:{required:!1,tsType:{name:"string"},description:""},operationKey:{required:!1,tsType:{name:"string"},description:""},messageKey:{required:!1,tsType:{name:"string"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},metaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  entityKeyMetaKey: symbol;
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"entityKeyMetaKey",value:{name:"symbol",required:!0}},{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},displayedDiffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const Le=Symbol("synthetic-title"),$e={validate:!0,liftCombiners:!0,syntheticTitleFlag:Le,unify:!0,allowNotValidSyntheticChanges:!0},ie=(e,n)=>{const r=fe(e,n,{...$e,beforeSource:e,afterSource:n,mode:le,metaKey:L});return Ge(r.merged)&&(r.merged.toJSON=()=>de(r.merged)),r};function Ge(e){return e!=null&&typeof e=="object"}const Qe=["Inter"];function me(){const[e,n]=Y.useState(!1),t=Qe.map(p=>new Ee(p).load(null,1e4));return Promise.all(t).then(()=>{n(!0)}),e}const Re={diffsMetaKey:L,aggregatedDiffsMetaKey:W};function Me({before:e,after:n}){const{merged:t}=ie(k(e),k(n));return me()?q.jsx(ge,{layoutMode:ye,metaKeys:Re,source:t}):q.jsx(q.Fragment,{})}function ze(e,n,t){const[p,r]=pe(e,n,t);return{before:p,after:r}}const Ne=Symbol("entity-key"),Ce={diffsMetaKey:L,aggregatedDiffsMetaKey:W,entityKeyMetaKey:Ne};function _e({before:e,after:n}){if(!me())return q.jsx(q.Fragment,{});const p=X.load(e),r=X.load(n),{merged:m}=ie(p,r);return q.jsx(ae,{source:m,metaKeys:Ce})}function He(e,n,t){const[p,r]=pe(e,n,t);return{before:p,after:r}}Me.__docgenInfo={description:"",methods:[],displayName:"GraphQLStoryComponent",props:{before:{required:!0,tsType:{name:"string"},description:""},after:{required:!0,tsType:{name:"string"},description:""}}};_e.__docgenInfo={description:"",methods:[],displayName:"AsyncApiStoryComponent",props:{before:{required:!0,tsType:{name:"string"},description:""},after:{required:!0,tsType:{name:"string"},description:""}}};export{_e as A,Me as G,Z as T,ze as a,J as b,He as g};
