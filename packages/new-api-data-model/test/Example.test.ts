import { createModel } from "../json-schema/builders/model";
import { printJso, printJson } from "../utilities";

describe('Example test suite', () => {
  const jestConsole = console
  beforeEach(() => {
    global.console = require('console')
  })
  afterEach(() => {
    global.console = jestConsole
  })

  it('string', () => {
    const schema = {
      type: 'string',
      title: 'MyString',
      description: 'MyStringDescription',
      minLength: 1,
      maxLength: 10,
      pattern: '^[a-zA-Z0-9]+$',
      enum: ['a', 'b', 'c'],
      default: 'a',
      examples: ['a', 'b', 'c'],
    }
    const result = createModel(schema)
    printJso(result)
  })

  it('number', () => {
    const schema = {
      type: 'number',
      title: 'MyNumber',
      description: 'MyNumberDescription',
      minimum: 1,
      maximum: 10,
      exclusiveMinimum: false,
      exclusiveMaximum: true,
      multipleOf: 2,
      default: 1,
      examples: [1, 2, 3],
    }
    const result = createModel(schema)
    printJso(result)
  })

  it('boolean', () => {
    const schema = {
      type: 'boolean',
      title: 'MyBoolean',
      description: 'MyBooleanDescription',
      default: false,
      examples: [true, false],
    }
    const result = createModel(schema)
    printJso(result)
  })

  it('object', () => {
    const schema = {
      type: 'object',
      title: 'MyObject',
      description: 'MyObjectDescription',
      properties: {
        name: {
          type: 'string',
          title: 'Name',
          description: 'NameDescription',
        },
        age: {
          type: 'number',
          title: 'Age',
          description: 'AgeDescription',
        },
        isStudent: {
          type: 'boolean',
          title: 'IsStudent',
          description: 'IsStudentDescription',
        },
      },
      required: ['name', 'age'],
      default: {
        name: 'John',
        age: 20,
        isStudent: true,
      },
      examples: [
        {
          name: 'John',
          age: 20,
          isStudent: true,
        },
      ],
    }
    const result = createModel(schema)
    printJso(result)
  })

  it('array', () => {
    const schema = {
      type: 'array',
      title: 'MyArray',
      description: 'MyArrayDescription',
      items: {
        type: 'string',
        title: 'Item',
        description: 'ItemDescription',
      },
      uniqueItems: true,
      minItems: 1,
      maxItems: 10,
      default: ['a', 'b', 'c'],
      examples: [['a', 'b', 'c'], ['d', 'e', 'f']],
    }
    const result = createModel(schema)
    printJso(result)
  })

  it('complex case', () => {
    const schema = {
      type: 'object',
      title: 'MyObject',
      description: 'MyObjectDescription',
      properties: {
        name: {
          type: 'string',
          title: 'Name',
          description: 'NameDescription',
          minLength: 1,
          maxLength: 10,
          pattern: '^[a-zA-Z0-9]+$',
          enum: ['a', 'b', 'c'],
          default: 'a',
          examples: ['a', 'b', 'c'],
        },
        age: {
          type: 'number',
          title: 'Age',
          description: 'AgeDescription',
          minimum: 1,
          maximum: 10,
          exclusiveMinimum: false,
          exclusiveMaximum: true,
          multipleOf: 2,
          default: 1,
          examples: [1, 2, 3],
        },
        isStudent: {
          type: 'boolean',
          title: 'IsStudent',
          description: 'IsStudentDescription',
          default: false,
          examples: [true, false],
        },
        subjects: {
          type: 'array',
          title: 'Subjects',
          description: 'SubjectsDescription',
          items: {
            type: 'string',
            title: 'Subject',
            description: 'SubjectDescription',
          },
          uniqueItems: true,
          minItems: 1,
          maxItems: 10,
          default: ['Math', 'English'],
          examples: [['Math', 'English'], ['Science', 'History']],
        },
        class: {
          type: 'object',
          title: 'Class',
          description: 'ClassDescription',
          properties: {
            name: {
              type: 'string',
              title: 'Name',
              description: 'NameDescription',
            },
            students: {
              type: 'array',
              title: 'Students',
              description: 'StudentsDescription',
              items: {
                type: 'string',
                title: 'Student',
                description: 'StudentDescription',
              },
            },
          },
        },
        characteristics: {
          oneOf: [
            {
              type: 'object',
              title: 'Size',
              description: 'SizeDescription',
              properties: {
                height: {
                  type: 'number',
                },
                weight: {
                  type: 'number',
                },
              },
            },
            {
              type: 'object',
              title: 'SizeAndColor',
              description: 'SizeAndColorDescription',
              properties: {
                color: {
                  type: 'string',
                },
                size: {
                  type: 'string',
                },
              },
            }
          ]
        }
      },
      required: ['name', 'age', 'isStudent', 'subjects'],
      default: {
        name: 'John',
        age: 20,
      },
      examples: [
        {
          name: 'John',
          age: 20,
        },
      ],
    }
    const result = createModel(schema)
    printJson(result)
  })
})