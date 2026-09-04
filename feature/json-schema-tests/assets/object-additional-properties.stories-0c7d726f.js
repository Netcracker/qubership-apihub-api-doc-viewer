import{c as va}from"./diffs-samples-cases-1df1f3ae.js";import{c as Pa,J as ja,j as Oa,a as Sa}from"./json-schema-diffs-utils-361af4d1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-2d7bd233.js";import"./DiffBadge-4d4a1c37.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-be584810.js";import"./GraphPropNodeViewer-1f5ff77a.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-3b42765c.js";import"./preprocess-c9227d17.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";const wa=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10

`,xa=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10
additionalProperties:
  type: string
  description: Sample string schema with all string validations
  default: alpha
  enum:
    - alpha
    - beta
    - gamma
  minLength: 1
  maxLength: 128
  pattern: ^[a-z]+$

`,Ca=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10

`,Ia=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Aa=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10
additionalProperties:
  type: string
  description: Sample string schema with all string validations
  default: alpha
  enum:
    - alpha
    - beta
    - gamma
  minLength: 1
  maxLength: 128
  pattern: ^[a-z]+$

`,Na=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Ra=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,La=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10
additionalProperties:
  type: number
  description: Sample number schema with all number validations
  default: 1.5
  minimum: 0
  maximum: 100
  multipleOf: 0.5

`,qa=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,za=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10
additionalProperties: false

`,$a=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10
additionalProperties:
  type: number
  description: Sample number schema with all number validations
  default: 1.5
  minimum: 0
  maximum: 100
  multipleOf: 0.5

`,Da=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Ja=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,Fa=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10
additionalProperties:
  type: integer
  description: Sample integer schema with all integer validations
  default: 1
  minimum: 0
  maximum: 100
  multipleOf: 1

`,Ba=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,Ta=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Ea=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10
additionalProperties:
  type: integer
  description: Sample integer schema with all integer validations
  default: 1
  minimum: 0
  maximum: 100
  multipleOf: 1

`,ka=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Ga=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Ha=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties:
  type: boolean
  description: Sample boolean schema
  default: false

`,Ka=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Ma=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Qa=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties:
  type: boolean
  description: Sample boolean schema
  default: false

`,Ua=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Va=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10

`,Wa=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10
additionalProperties:
  type: array
  description: Sample array schema with all array validations
  items:
    type: string
  default:
    - alpha
    - beta
  minItems: 1
  maxItems: 10
  uniqueItems: true

`,Xa=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10

`,Ya=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Za=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10
additionalProperties:
  type: array
  description: Sample array schema with all array validations
  items:
    type: string
  default:
    - alpha
    - beta
  minItems: 1
  maxItems: 10
  uniqueItems: true

`,ei=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10
additionalProperties: false

`,ni=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10

`,ti=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10
additionalProperties:
  type: object
  description: Sample object schema with all object validations
  properties:
    name:
      type: string
    id:
      type: integer
  default:
    name: sample
    id: 1
  minProperties: 1
  maxProperties: 5

`,ri=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10

`,ai=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10
additionalProperties: false

`,ii=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10
additionalProperties:
  type: object
  description: Sample object schema with all object validations
  properties:
    name:
      type: string
    id:
      type: integer
  default:
    name: sample
    id: 1
  minProperties: 1
  maxProperties: 5

`,oi=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10
additionalProperties: false

`,pi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10

`,si=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: string
          description: Sample string schema with all string validations
          default: alpha
          enum:
            - alpha
            - beta
            - gamma
          minLength: 1
          maxLength: 128
          pattern: ^[a-z]+$

`,li=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10

`,di=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,ci=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: string
          description: Sample string schema with all string validations
          default: alpha
          enum:
            - alpha
            - beta
            - gamma
          minLength: 1
          maxLength: 128
          pattern: ^[a-z]+$

`,mi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,_i=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10

`,fi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: number
          description: Sample number schema with all number validations
          default: 1.5
          minimum: 0
          maximum: 100
          multipleOf: 0.5

`,yi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10

`,bi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,hi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: number
          description: Sample number schema with all number validations
          default: 1.5
          minimum: 0
          maximum: 100
          multipleOf: 0.5

`,ui=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,gi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10

`,ji=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: integer
          description: Sample integer schema with all integer validations
          default: 1
          minimum: 0
          maximum: 100
          multipleOf: 1

`,vi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10

`,Pi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Oi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: integer
          description: Sample integer schema with all integer validations
          default: 1
          minimum: 0
          maximum: 100
          multipleOf: 1

`,Si=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,wi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10

`,xi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: boolean
          description: Sample boolean schema
          default: false

`,Ci=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10

`,Ii=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Ai=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: boolean
          description: Sample boolean schema
          default: false

`,Ni=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Ri=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10

`,Li=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: array
          description: Sample array schema with all array validations
          items:
            type: string
          default:
            - alpha
            - beta
          minItems: 1
          maxItems: 10
          uniqueItems: true

`,qi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10

`,zi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,$i=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: array
          description: Sample array schema with all array validations
          items:
            type: string
          default:
            - alpha
            - beta
          minItems: 1
          maxItems: 10
          uniqueItems: true

`,Di=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Ji=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10

`,Fi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: object
          description: Sample object schema with all object validations
          properties:
            name:
              type: string
            id:
              type: integer
          default:
            name: sample
            id: 1
          minProperties: 1
          maxProperties: 5

`,Bi=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10

`,Ti=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Ei=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: object
          description: Sample object schema with all object validations
          properties:
            name:
              type: string
            id:
              type: integer
          default:
            name: sample
            id: 1
          minProperties: 1
          maxProperties: 5

`,ki=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Gi=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10
additionalProperties:
  type: string
  description: Sample string schema with all string validations
  default: alpha
  enum:
    - alpha
    - beta
    - gamma
  minLength: 1
  maxLength: 128
  pattern: ^[a-z]+$

`,Hi=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10

`,Ki=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Mi=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10

`,Qi=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Ui=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10
additionalProperties:
  type: string
  description: Sample string schema with all string validations
  default: alpha
  enum:
    - alpha
    - beta
    - gamma
  minLength: 1
  maxLength: 128
  pattern: ^[a-z]+$

`,Vi=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10
additionalProperties:
  type: number
  description: Sample number schema with all number validations
  default: 1.5
  minimum: 0
  maximum: 100
  multipleOf: 0.5

`,Wi=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,Xi=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Yi=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,Zi=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10
additionalProperties: false

`,eo=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10
additionalProperties:
  type: number
  description: Sample number schema with all number validations
  default: 1.5
  minimum: 0
  maximum: 100
  multipleOf: 0.5

`,no=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10
additionalProperties:
  type: integer
  description: Sample integer schema with all integer validations
  default: 1
  minimum: 0
  maximum: 100
  multipleOf: 1

`,to=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,ro=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10
additionalProperties: false

`,ao=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,io=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10
additionalProperties: false

`,oo=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10
additionalProperties:
  type: integer
  description: Sample integer schema with all integer validations
  default: 1
  minimum: 0
  maximum: 100
  multipleOf: 1

`,po=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties:
  type: boolean
  description: Sample boolean schema
  default: false

`,so=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,lo=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,co=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,mo=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,_o=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties:
  type: boolean
  description: Sample boolean schema
  default: false

`,fo=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10
additionalProperties:
  type: array
  description: Sample array schema with all array validations
  items:
    type: string
  default:
    - alpha
    - beta
  minItems: 1
  maxItems: 10
  uniqueItems: true

`,yo=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10

`,bo=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10
additionalProperties: false

`,ho=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10

`,uo=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10
additionalProperties: false

`,go=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10
additionalProperties:
  type: array
  description: Sample array schema with all array validations
  items:
    type: string
  default:
    - alpha
    - beta
  minItems: 1
  maxItems: 10
  uniqueItems: true

`,jo=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10
additionalProperties:
  type: object
  description: Sample object schema with all object validations
  properties:
    name:
      type: string
    id:
      type: integer
  default:
    name: sample
    id: 1
  minProperties: 1
  maxProperties: 5

`,vo=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10

`,Po=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Oo=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10

`,So=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10
additionalProperties: false

`,wo=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10
additionalProperties:
  type: object
  description: Sample object schema with all object validations
  properties:
    name:
      type: string
    id:
      type: integer
  default:
    name: sample
    id: 1
  minProperties: 1
  maxProperties: 5

`,xo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: string
          description: Sample string schema with all string validations
          default: alpha
          enum:
            - alpha
            - beta
            - gamma
          minLength: 1
          maxLength: 128
          pattern: ^[a-z]+$

`,Co=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10

`,Io=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Ao=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10

`,No=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Ro=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 string property schema(s)
        properties:
          prop0:
            type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: string
          description: Sample string schema with all string validations
          default: alpha
          enum:
            - alpha
            - beta
            - gamma
          minLength: 1
          maxLength: 128
          pattern: ^[a-z]+$

`,Lo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: number
          description: Sample number schema with all number validations
          default: 1.5
          minimum: 0
          maximum: 100
          multipleOf: 0.5

`,qo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10

`,zo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,$o=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10

`,Do=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Jo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 number property schema(s)
        properties:
          prop0:
            type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: number
          description: Sample number schema with all number validations
          default: 1.5
          minimum: 0
          maximum: 100
          multipleOf: 0.5

`,Fo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: integer
          description: Sample integer schema with all integer validations
          default: 1
          minimum: 0
          maximum: 100
          multipleOf: 1

`,Bo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10

`,To=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Eo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10

`,ko=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Go=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 integer property schema(s)
        properties:
          prop0:
            type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: integer
          description: Sample integer schema with all integer validations
          default: 1
          minimum: 0
          maximum: 100
          multipleOf: 1

`,Ho=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: boolean
          description: Sample boolean schema
          default: false

`,Ko=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10

`,Mo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Qo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10

`,Uo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Vo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: boolean
          description: Sample boolean schema
          default: false

`,Wo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: array
          description: Sample array schema with all array validations
          items:
            type: string
          default:
            - alpha
            - beta
          minItems: 1
          maxItems: 10
          uniqueItems: true

`,Xo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10

`,Yo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Zo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10

`,ep=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,np=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 array property schema(s)
        properties:
          prop0:
            type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: array
          description: Sample array schema with all array validations
          items:
            type: string
          default:
            - alpha
            - beta
          minItems: 1
          maxItems: 10
          uniqueItems: true

`,tp=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: object
          description: Sample object schema with all object validations
          properties:
            name:
              type: string
            id:
              type: integer
          default:
            name: sample
            id: 1
          minProperties: 1
          maxProperties: 5

`,rp=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10

`,ap=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,ip=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10

`,op=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,pp=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: object
        description: Object with 1 object property schema(s)
        properties:
          prop0:
            type: object
            description: Sample object schema with all object validations
            properties:
              name:
                type: string
              id:
                type: integer
            default:
              name: sample
              id: 1
            minProperties: 1
            maxProperties: 5
        minProperties: 0
        maxProperties: 10
        additionalProperties:
          type: object
          description: Sample object schema with all object validations
          properties:
            name:
              type: string
            id:
              type: integer
          default:
            name: sample
            id: 1
          minProperties: 1
          maxProperties: 5

`,sp=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/001-add-additional-properties-rule1-string/before.yaml":wa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/002-remove-additional-properties-rule1-string/before.yaml":xa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/003-add-additional-properties-false-string/before.yaml":Ca,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/004-remove-additional-properties-false-string/before.yaml":Ia,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/005-change-additional-properties-rule1-to-false-string/before.yaml":Aa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/006-change-additional-properties-false-to-rule1-string/before.yaml":Na,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/007-add-additional-properties-rule1-number/before.yaml":Ra,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/008-remove-additional-properties-rule1-number/before.yaml":La,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/009-add-additional-properties-false-number/before.yaml":qa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/010-remove-additional-properties-false-number/before.yaml":za,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/011-change-additional-properties-rule1-to-false-number/before.yaml":$a,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/012-change-additional-properties-false-to-rule1-number/before.yaml":Da,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/013-add-additional-properties-rule1-integer/before.yaml":Ja,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/014-remove-additional-properties-rule1-integer/before.yaml":Fa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/015-add-additional-properties-false-integer/before.yaml":Ba,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/016-remove-additional-properties-false-integer/before.yaml":Ta,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/017-change-additional-properties-rule1-to-false-integer/before.yaml":Ea,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/018-change-additional-properties-false-to-rule1-integer/before.yaml":ka,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/019-add-additional-properties-rule1-boolean/before.yaml":Ga,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/020-remove-additional-properties-rule1-boolean/before.yaml":Ha,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/021-add-additional-properties-false-boolean/before.yaml":Ka,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/022-remove-additional-properties-false-boolean/before.yaml":Ma,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/023-change-additional-properties-rule1-to-false-boolean/before.yaml":Qa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/024-change-additional-properties-false-to-rule1-boolean/before.yaml":Ua,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/025-add-additional-properties-rule1-array/before.yaml":Va,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/026-remove-additional-properties-rule1-array/before.yaml":Wa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/027-add-additional-properties-false-array/before.yaml":Xa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/028-remove-additional-properties-false-array/before.yaml":Ya,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/029-change-additional-properties-rule1-to-false-array/before.yaml":Za,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/030-change-additional-properties-false-to-rule1-array/before.yaml":ei,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/031-add-additional-properties-rule1-object/before.yaml":ni,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/032-remove-additional-properties-rule1-object/before.yaml":ti,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/033-add-additional-properties-false-object/before.yaml":ri,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/034-remove-additional-properties-false-object/before.yaml":ai,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/035-change-additional-properties-rule1-to-false-object/before.yaml":ii,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/036-change-additional-properties-false-to-rule1-object/before.yaml":oi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/037-one-of-variant2-add-additional-properties-rule1-string/before.yaml":pi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/038-one-of-variant2-remove-additional-properties-rule1-string/before.yaml":si,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/039-one-of-variant2-add-additional-properties-false-string/before.yaml":li,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/040-one-of-variant2-remove-additional-properties-false-string/before.yaml":di,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/041-one-of-variant2-change-additional-properties-rule1-to-false-string/before.yaml":ci,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/042-one-of-variant2-change-additional-properties-false-to-rule1-string/before.yaml":mi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/043-one-of-variant2-add-additional-properties-rule1-number/before.yaml":_i,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/044-one-of-variant2-remove-additional-properties-rule1-number/before.yaml":fi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/045-one-of-variant2-add-additional-properties-false-number/before.yaml":yi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/046-one-of-variant2-remove-additional-properties-false-number/before.yaml":bi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/047-one-of-variant2-change-additional-properties-rule1-to-false-number/before.yaml":hi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/048-one-of-variant2-change-additional-properties-false-to-rule1-number/before.yaml":ui,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/049-one-of-variant2-add-additional-properties-rule1-integer/before.yaml":gi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/050-one-of-variant2-remove-additional-properties-rule1-integer/before.yaml":ji,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/051-one-of-variant2-add-additional-properties-false-integer/before.yaml":vi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/052-one-of-variant2-remove-additional-properties-false-integer/before.yaml":Pi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/053-one-of-variant2-change-additional-properties-rule1-to-false-integer/before.yaml":Oi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/054-one-of-variant2-change-additional-properties-false-to-rule1-integer/before.yaml":Si,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/055-one-of-variant2-add-additional-properties-rule1-boolean/before.yaml":wi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/056-one-of-variant2-remove-additional-properties-rule1-boolean/before.yaml":xi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/057-one-of-variant2-add-additional-properties-false-boolean/before.yaml":Ci,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/058-one-of-variant2-remove-additional-properties-false-boolean/before.yaml":Ii,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/059-one-of-variant2-change-additional-properties-rule1-to-false-boolean/before.yaml":Ai,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/060-one-of-variant2-change-additional-properties-false-to-rule1-boolean/before.yaml":Ni,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/061-one-of-variant2-add-additional-properties-rule1-array/before.yaml":Ri,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/062-one-of-variant2-remove-additional-properties-rule1-array/before.yaml":Li,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/063-one-of-variant2-add-additional-properties-false-array/before.yaml":qi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/064-one-of-variant2-remove-additional-properties-false-array/before.yaml":zi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/065-one-of-variant2-change-additional-properties-rule1-to-false-array/before.yaml":$i,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/066-one-of-variant2-change-additional-properties-false-to-rule1-array/before.yaml":Di,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/067-one-of-variant2-add-additional-properties-rule1-object/before.yaml":Ji,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/068-one-of-variant2-remove-additional-properties-rule1-object/before.yaml":Fi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/069-one-of-variant2-add-additional-properties-false-object/before.yaml":Bi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/070-one-of-variant2-remove-additional-properties-false-object/before.yaml":Ti,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/071-one-of-variant2-change-additional-properties-rule1-to-false-object/before.yaml":Ei,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/072-one-of-variant2-change-additional-properties-false-to-rule1-object/before.yaml":ki}),lp=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/001-add-additional-properties-rule1-string/after.yaml":Gi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/002-remove-additional-properties-rule1-string/after.yaml":Hi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/003-add-additional-properties-false-string/after.yaml":Ki,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/004-remove-additional-properties-false-string/after.yaml":Mi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/005-change-additional-properties-rule1-to-false-string/after.yaml":Qi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/006-change-additional-properties-false-to-rule1-string/after.yaml":Ui,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/007-add-additional-properties-rule1-number/after.yaml":Vi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/008-remove-additional-properties-rule1-number/after.yaml":Wi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/009-add-additional-properties-false-number/after.yaml":Xi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/010-remove-additional-properties-false-number/after.yaml":Yi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/011-change-additional-properties-rule1-to-false-number/after.yaml":Zi,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/012-change-additional-properties-false-to-rule1-number/after.yaml":eo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/013-add-additional-properties-rule1-integer/after.yaml":no,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/014-remove-additional-properties-rule1-integer/after.yaml":to,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/015-add-additional-properties-false-integer/after.yaml":ro,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/016-remove-additional-properties-false-integer/after.yaml":ao,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/017-change-additional-properties-rule1-to-false-integer/after.yaml":io,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/018-change-additional-properties-false-to-rule1-integer/after.yaml":oo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/019-add-additional-properties-rule1-boolean/after.yaml":po,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/020-remove-additional-properties-rule1-boolean/after.yaml":so,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/021-add-additional-properties-false-boolean/after.yaml":lo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/022-remove-additional-properties-false-boolean/after.yaml":co,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/023-change-additional-properties-rule1-to-false-boolean/after.yaml":mo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/024-change-additional-properties-false-to-rule1-boolean/after.yaml":_o,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/025-add-additional-properties-rule1-array/after.yaml":fo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/026-remove-additional-properties-rule1-array/after.yaml":yo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/027-add-additional-properties-false-array/after.yaml":bo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/028-remove-additional-properties-false-array/after.yaml":ho,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/029-change-additional-properties-rule1-to-false-array/after.yaml":uo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/030-change-additional-properties-false-to-rule1-array/after.yaml":go,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/031-add-additional-properties-rule1-object/after.yaml":jo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/032-remove-additional-properties-rule1-object/after.yaml":vo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/033-add-additional-properties-false-object/after.yaml":Po,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/034-remove-additional-properties-false-object/after.yaml":Oo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/035-change-additional-properties-rule1-to-false-object/after.yaml":So,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/036-change-additional-properties-false-to-rule1-object/after.yaml":wo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/037-one-of-variant2-add-additional-properties-rule1-string/after.yaml":xo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/038-one-of-variant2-remove-additional-properties-rule1-string/after.yaml":Co,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/039-one-of-variant2-add-additional-properties-false-string/after.yaml":Io,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/040-one-of-variant2-remove-additional-properties-false-string/after.yaml":Ao,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/041-one-of-variant2-change-additional-properties-rule1-to-false-string/after.yaml":No,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/042-one-of-variant2-change-additional-properties-false-to-rule1-string/after.yaml":Ro,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/043-one-of-variant2-add-additional-properties-rule1-number/after.yaml":Lo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/044-one-of-variant2-remove-additional-properties-rule1-number/after.yaml":qo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/045-one-of-variant2-add-additional-properties-false-number/after.yaml":zo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/046-one-of-variant2-remove-additional-properties-false-number/after.yaml":$o,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/047-one-of-variant2-change-additional-properties-rule1-to-false-number/after.yaml":Do,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/048-one-of-variant2-change-additional-properties-false-to-rule1-number/after.yaml":Jo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/049-one-of-variant2-add-additional-properties-rule1-integer/after.yaml":Fo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/050-one-of-variant2-remove-additional-properties-rule1-integer/after.yaml":Bo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/051-one-of-variant2-add-additional-properties-false-integer/after.yaml":To,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/052-one-of-variant2-remove-additional-properties-false-integer/after.yaml":Eo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/053-one-of-variant2-change-additional-properties-rule1-to-false-integer/after.yaml":ko,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/054-one-of-variant2-change-additional-properties-false-to-rule1-integer/after.yaml":Go,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/055-one-of-variant2-add-additional-properties-rule1-boolean/after.yaml":Ho,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/056-one-of-variant2-remove-additional-properties-rule1-boolean/after.yaml":Ko,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/057-one-of-variant2-add-additional-properties-false-boolean/after.yaml":Mo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/058-one-of-variant2-remove-additional-properties-false-boolean/after.yaml":Qo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/059-one-of-variant2-change-additional-properties-rule1-to-false-boolean/after.yaml":Uo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/060-one-of-variant2-change-additional-properties-false-to-rule1-boolean/after.yaml":Vo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/061-one-of-variant2-add-additional-properties-rule1-array/after.yaml":Wo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/062-one-of-variant2-remove-additional-properties-rule1-array/after.yaml":Xo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/063-one-of-variant2-add-additional-properties-false-array/after.yaml":Yo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/064-one-of-variant2-remove-additional-properties-false-array/after.yaml":Zo,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/065-one-of-variant2-change-additional-properties-rule1-to-false-array/after.yaml":ep,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/066-one-of-variant2-change-additional-properties-false-to-rule1-array/after.yaml":np,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/067-one-of-variant2-add-additional-properties-rule1-object/after.yaml":tp,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/068-one-of-variant2-remove-additional-properties-rule1-object/after.yaml":rp,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/069-one-of-variant2-add-additional-properties-false-object/after.yaml":ap,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/070-one-of-variant2-remove-additional-properties-false-object/after.yaml":ip,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/071-one-of-variant2-change-additional-properties-rule1-to-false-object/after.yaml":op,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/072-one-of-variant2-change-additional-properties-false-to-rule1-object/after.yaml":pp}),dp=va(sp,lp),cp=Pa(dp),Ap={title:"JSON Schema Diffs Suite/Object Additional Properties",component:ja,argTypes:Oa},e=Sa(ja,cp),n=e("001-add-additional-properties-rule1-string"),t=e("002-remove-additional-properties-rule1-string"),r=e("003-add-additional-properties-false-string"),a=e("004-remove-additional-properties-false-string"),i=e("005-change-additional-properties-rule1-to-false-string"),o=e("006-change-additional-properties-false-to-rule1-string"),p=e("007-add-additional-properties-rule1-number"),s=e("008-remove-additional-properties-rule1-number"),l=e("009-add-additional-properties-false-number"),d=e("010-remove-additional-properties-false-number"),c=e("011-change-additional-properties-rule1-to-false-number"),m=e("012-change-additional-properties-false-to-rule1-number"),_=e("013-add-additional-properties-rule1-integer"),f=e("014-remove-additional-properties-rule1-integer"),y=e("015-add-additional-properties-false-integer"),b=e("016-remove-additional-properties-false-integer"),h=e("017-change-additional-properties-rule1-to-false-integer"),u=e("018-change-additional-properties-false-to-rule1-integer"),g=e("019-add-additional-properties-rule1-boolean"),j=e("020-remove-additional-properties-rule1-boolean"),v=e("021-add-additional-properties-false-boolean"),P=e("022-remove-additional-properties-false-boolean"),O=e("023-change-additional-properties-rule1-to-false-boolean"),S=e("024-change-additional-properties-false-to-rule1-boolean"),w=e("025-add-additional-properties-rule1-array"),x=e("026-remove-additional-properties-rule1-array"),C=e("027-add-additional-properties-false-array"),I=e("028-remove-additional-properties-false-array"),A=e("029-change-additional-properties-rule1-to-false-array"),N=e("030-change-additional-properties-false-to-rule1-array"),R=e("031-add-additional-properties-rule1-object"),L=e("032-remove-additional-properties-rule1-object"),q=e("033-add-additional-properties-false-object"),z=e("034-remove-additional-properties-false-object"),$=e("035-change-additional-properties-rule1-to-false-object"),D=e("036-change-additional-properties-false-to-rule1-object"),J=e("037-one-of-variant2-add-additional-properties-rule1-string"),F=e("038-one-of-variant2-remove-additional-properties-rule1-string"),B=e("039-one-of-variant2-add-additional-properties-false-string"),T=e("040-one-of-variant2-remove-additional-properties-false-string"),E=e("041-one-of-variant2-change-additional-properties-rule1-to-false-string"),k=e("042-one-of-variant2-change-additional-properties-false-to-rule1-string"),G=e("043-one-of-variant2-add-additional-properties-rule1-number"),H=e("044-one-of-variant2-remove-additional-properties-rule1-number"),K=e("045-one-of-variant2-add-additional-properties-false-number"),M=e("046-one-of-variant2-remove-additional-properties-false-number"),Q=e("047-one-of-variant2-change-additional-properties-rule1-to-false-number"),U=e("048-one-of-variant2-change-additional-properties-false-to-rule1-number"),V=e("049-one-of-variant2-add-additional-properties-rule1-integer"),W=e("050-one-of-variant2-remove-additional-properties-rule1-integer"),X=e("051-one-of-variant2-add-additional-properties-false-integer"),Y=e("052-one-of-variant2-remove-additional-properties-false-integer"),Z=e("053-one-of-variant2-change-additional-properties-rule1-to-false-integer"),ee=e("054-one-of-variant2-change-additional-properties-false-to-rule1-integer"),ne=e("055-one-of-variant2-add-additional-properties-rule1-boolean"),te=e("056-one-of-variant2-remove-additional-properties-rule1-boolean"),re=e("057-one-of-variant2-add-additional-properties-false-boolean"),ae=e("058-one-of-variant2-remove-additional-properties-false-boolean"),ie=e("059-one-of-variant2-change-additional-properties-rule1-to-false-boolean"),oe=e("060-one-of-variant2-change-additional-properties-false-to-rule1-boolean"),pe=e("061-one-of-variant2-add-additional-properties-rule1-array"),se=e("062-one-of-variant2-remove-additional-properties-rule1-array"),le=e("063-one-of-variant2-add-additional-properties-false-array"),de=e("064-one-of-variant2-remove-additional-properties-false-array"),ce=e("065-one-of-variant2-change-additional-properties-rule1-to-false-array"),me=e("066-one-of-variant2-change-additional-properties-false-to-rule1-array"),_e=e("067-one-of-variant2-add-additional-properties-rule1-object"),fe=e("068-one-of-variant2-remove-additional-properties-rule1-object"),ye=e("069-one-of-variant2-add-additional-properties-false-object"),be=e("070-one-of-variant2-remove-additional-properties-false-object"),he=e("071-one-of-variant2-change-additional-properties-rule1-to-false-object"),ue=e("072-one-of-variant2-change-additional-properties-false-to-rule1-object");var ge,je,ve;n.parameters={...n.parameters,docs:{...(ge=n.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("001-add-additional-properties-rule1-string")',...(ve=(je=n.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};var Pe,Oe,Se;t.parameters={...t.parameters,docs:{...(Pe=t.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("002-remove-additional-properties-rule1-string")',...(Se=(Oe=t.parameters)==null?void 0:Oe.docs)==null?void 0:Se.source}}};var we,xe,Ce;r.parameters={...r.parameters,docs:{...(we=r.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("003-add-additional-properties-false-string")',...(Ce=(xe=r.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Ie,Ae,Ne;a.parameters={...a.parameters,docs:{...(Ie=a.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("004-remove-additional-properties-false-string")',...(Ne=(Ae=a.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var Re,Le,qe;i.parameters={...i.parameters,docs:{...(Re=i.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("005-change-additional-properties-rule1-to-false-string")',...(qe=(Le=i.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var ze,$e,De;o.parameters={...o.parameters,docs:{...(ze=o.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("006-change-additional-properties-false-to-rule1-string")',...(De=($e=o.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var Je,Fe,Be;p.parameters={...p.parameters,docs:{...(Je=p.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("007-add-additional-properties-rule1-number")',...(Be=(Fe=p.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Te,Ee,ke;s.parameters={...s.parameters,docs:{...(Te=s.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("008-remove-additional-properties-rule1-number")',...(ke=(Ee=s.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Ge,He,Ke;l.parameters={...l.parameters,docs:{...(Ge=l.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("009-add-additional-properties-false-number")',...(Ke=(He=l.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var Me,Qe,Ue;d.parameters={...d.parameters,docs:{...(Me=d.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("010-remove-additional-properties-false-number")',...(Ue=(Qe=d.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ve,We,Xe;c.parameters={...c.parameters,docs:{...(Ve=c.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("011-change-additional-properties-rule1-to-false-number")',...(Xe=(We=c.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;m.parameters={...m.parameters,docs:{...(Ye=m.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("012-change-additional-properties-false-to-rule1-number")',...(en=(Ze=m.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,tn,rn;_.parameters={..._.parameters,docs:{...(nn=_.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("013-add-additional-properties-rule1-integer")',...(rn=(tn=_.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var an,on,pn;f.parameters={...f.parameters,docs:{...(an=f.parameters)==null?void 0:an.docs,source:{originalSource:'createCaseStory("014-remove-additional-properties-rule1-integer")',...(pn=(on=f.parameters)==null?void 0:on.docs)==null?void 0:pn.source}}};var sn,ln,dn;y.parameters={...y.parameters,docs:{...(sn=y.parameters)==null?void 0:sn.docs,source:{originalSource:'createCaseStory("015-add-additional-properties-false-integer")',...(dn=(ln=y.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var cn,mn,_n;b.parameters={...b.parameters,docs:{...(cn=b.parameters)==null?void 0:cn.docs,source:{originalSource:'createCaseStory("016-remove-additional-properties-false-integer")',...(_n=(mn=b.parameters)==null?void 0:mn.docs)==null?void 0:_n.source}}};var fn,yn,bn;h.parameters={...h.parameters,docs:{...(fn=h.parameters)==null?void 0:fn.docs,source:{originalSource:'createCaseStory("017-change-additional-properties-rule1-to-false-integer")',...(bn=(yn=h.parameters)==null?void 0:yn.docs)==null?void 0:bn.source}}};var hn,un,gn;u.parameters={...u.parameters,docs:{...(hn=u.parameters)==null?void 0:hn.docs,source:{originalSource:'createCaseStory("018-change-additional-properties-false-to-rule1-integer")',...(gn=(un=u.parameters)==null?void 0:un.docs)==null?void 0:gn.source}}};var jn,vn,Pn;g.parameters={...g.parameters,docs:{...(jn=g.parameters)==null?void 0:jn.docs,source:{originalSource:'createCaseStory("019-add-additional-properties-rule1-boolean")',...(Pn=(vn=g.parameters)==null?void 0:vn.docs)==null?void 0:Pn.source}}};var On,Sn,wn;j.parameters={...j.parameters,docs:{...(On=j.parameters)==null?void 0:On.docs,source:{originalSource:'createCaseStory("020-remove-additional-properties-rule1-boolean")',...(wn=(Sn=j.parameters)==null?void 0:Sn.docs)==null?void 0:wn.source}}};var xn,Cn,In;v.parameters={...v.parameters,docs:{...(xn=v.parameters)==null?void 0:xn.docs,source:{originalSource:'createCaseStory("021-add-additional-properties-false-boolean")',...(In=(Cn=v.parameters)==null?void 0:Cn.docs)==null?void 0:In.source}}};var An,Nn,Rn;P.parameters={...P.parameters,docs:{...(An=P.parameters)==null?void 0:An.docs,source:{originalSource:'createCaseStory("022-remove-additional-properties-false-boolean")',...(Rn=(Nn=P.parameters)==null?void 0:Nn.docs)==null?void 0:Rn.source}}};var Ln,qn,zn;O.parameters={...O.parameters,docs:{...(Ln=O.parameters)==null?void 0:Ln.docs,source:{originalSource:'createCaseStory("023-change-additional-properties-rule1-to-false-boolean")',...(zn=(qn=O.parameters)==null?void 0:qn.docs)==null?void 0:zn.source}}};var $n,Dn,Jn;S.parameters={...S.parameters,docs:{...($n=S.parameters)==null?void 0:$n.docs,source:{originalSource:'createCaseStory("024-change-additional-properties-false-to-rule1-boolean")',...(Jn=(Dn=S.parameters)==null?void 0:Dn.docs)==null?void 0:Jn.source}}};var Fn,Bn,Tn;w.parameters={...w.parameters,docs:{...(Fn=w.parameters)==null?void 0:Fn.docs,source:{originalSource:'createCaseStory("025-add-additional-properties-rule1-array")',...(Tn=(Bn=w.parameters)==null?void 0:Bn.docs)==null?void 0:Tn.source}}};var En,kn,Gn;x.parameters={...x.parameters,docs:{...(En=x.parameters)==null?void 0:En.docs,source:{originalSource:'createCaseStory("026-remove-additional-properties-rule1-array")',...(Gn=(kn=x.parameters)==null?void 0:kn.docs)==null?void 0:Gn.source}}};var Hn,Kn,Mn;C.parameters={...C.parameters,docs:{...(Hn=C.parameters)==null?void 0:Hn.docs,source:{originalSource:'createCaseStory("027-add-additional-properties-false-array")',...(Mn=(Kn=C.parameters)==null?void 0:Kn.docs)==null?void 0:Mn.source}}};var Qn,Un,Vn;I.parameters={...I.parameters,docs:{...(Qn=I.parameters)==null?void 0:Qn.docs,source:{originalSource:'createCaseStory("028-remove-additional-properties-false-array")',...(Vn=(Un=I.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source}}};var Wn,Xn,Yn;A.parameters={...A.parameters,docs:{...(Wn=A.parameters)==null?void 0:Wn.docs,source:{originalSource:'createCaseStory("029-change-additional-properties-rule1-to-false-array")',...(Yn=(Xn=A.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Zn,et,nt;N.parameters={...N.parameters,docs:{...(Zn=N.parameters)==null?void 0:Zn.docs,source:{originalSource:'createCaseStory("030-change-additional-properties-false-to-rule1-array")',...(nt=(et=N.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var tt,rt,at;R.parameters={...R.parameters,docs:{...(tt=R.parameters)==null?void 0:tt.docs,source:{originalSource:'createCaseStory("031-add-additional-properties-rule1-object")',...(at=(rt=R.parameters)==null?void 0:rt.docs)==null?void 0:at.source}}};var it,ot,pt;L.parameters={...L.parameters,docs:{...(it=L.parameters)==null?void 0:it.docs,source:{originalSource:'createCaseStory("032-remove-additional-properties-rule1-object")',...(pt=(ot=L.parameters)==null?void 0:ot.docs)==null?void 0:pt.source}}};var st,lt,dt;q.parameters={...q.parameters,docs:{...(st=q.parameters)==null?void 0:st.docs,source:{originalSource:'createCaseStory("033-add-additional-properties-false-object")',...(dt=(lt=q.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ct,mt,_t;z.parameters={...z.parameters,docs:{...(ct=z.parameters)==null?void 0:ct.docs,source:{originalSource:'createCaseStory("034-remove-additional-properties-false-object")',...(_t=(mt=z.parameters)==null?void 0:mt.docs)==null?void 0:_t.source}}};var ft,yt,bt;$.parameters={...$.parameters,docs:{...(ft=$.parameters)==null?void 0:ft.docs,source:{originalSource:'createCaseStory("035-change-additional-properties-rule1-to-false-object")',...(bt=(yt=$.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var ht,ut,gt;D.parameters={...D.parameters,docs:{...(ht=D.parameters)==null?void 0:ht.docs,source:{originalSource:'createCaseStory("036-change-additional-properties-false-to-rule1-object")',...(gt=(ut=D.parameters)==null?void 0:ut.docs)==null?void 0:gt.source}}};var jt,vt,Pt;J.parameters={...J.parameters,docs:{...(jt=J.parameters)==null?void 0:jt.docs,source:{originalSource:'createCaseStory("037-one-of-variant2-add-additional-properties-rule1-string")',...(Pt=(vt=J.parameters)==null?void 0:vt.docs)==null?void 0:Pt.source}}};var Ot,St,wt;F.parameters={...F.parameters,docs:{...(Ot=F.parameters)==null?void 0:Ot.docs,source:{originalSource:'createCaseStory("038-one-of-variant2-remove-additional-properties-rule1-string")',...(wt=(St=F.parameters)==null?void 0:St.docs)==null?void 0:wt.source}}};var xt,Ct,It;B.parameters={...B.parameters,docs:{...(xt=B.parameters)==null?void 0:xt.docs,source:{originalSource:'createCaseStory("039-one-of-variant2-add-additional-properties-false-string")',...(It=(Ct=B.parameters)==null?void 0:Ct.docs)==null?void 0:It.source}}};var At,Nt,Rt;T.parameters={...T.parameters,docs:{...(At=T.parameters)==null?void 0:At.docs,source:{originalSource:'createCaseStory("040-one-of-variant2-remove-additional-properties-false-string")',...(Rt=(Nt=T.parameters)==null?void 0:Nt.docs)==null?void 0:Rt.source}}};var Lt,qt,zt;E.parameters={...E.parameters,docs:{...(Lt=E.parameters)==null?void 0:Lt.docs,source:{originalSource:'createCaseStory("041-one-of-variant2-change-additional-properties-rule1-to-false-string")',...(zt=(qt=E.parameters)==null?void 0:qt.docs)==null?void 0:zt.source}}};var $t,Dt,Jt;k.parameters={...k.parameters,docs:{...($t=k.parameters)==null?void 0:$t.docs,source:{originalSource:'createCaseStory("042-one-of-variant2-change-additional-properties-false-to-rule1-string")',...(Jt=(Dt=k.parameters)==null?void 0:Dt.docs)==null?void 0:Jt.source}}};var Ft,Bt,Tt;G.parameters={...G.parameters,docs:{...(Ft=G.parameters)==null?void 0:Ft.docs,source:{originalSource:'createCaseStory("043-one-of-variant2-add-additional-properties-rule1-number")',...(Tt=(Bt=G.parameters)==null?void 0:Bt.docs)==null?void 0:Tt.source}}};var Et,kt,Gt;H.parameters={...H.parameters,docs:{...(Et=H.parameters)==null?void 0:Et.docs,source:{originalSource:'createCaseStory("044-one-of-variant2-remove-additional-properties-rule1-number")',...(Gt=(kt=H.parameters)==null?void 0:kt.docs)==null?void 0:Gt.source}}};var Ht,Kt,Mt;K.parameters={...K.parameters,docs:{...(Ht=K.parameters)==null?void 0:Ht.docs,source:{originalSource:'createCaseStory("045-one-of-variant2-add-additional-properties-false-number")',...(Mt=(Kt=K.parameters)==null?void 0:Kt.docs)==null?void 0:Mt.source}}};var Qt,Ut,Vt;M.parameters={...M.parameters,docs:{...(Qt=M.parameters)==null?void 0:Qt.docs,source:{originalSource:'createCaseStory("046-one-of-variant2-remove-additional-properties-false-number")',...(Vt=(Ut=M.parameters)==null?void 0:Ut.docs)==null?void 0:Vt.source}}};var Wt,Xt,Yt;Q.parameters={...Q.parameters,docs:{...(Wt=Q.parameters)==null?void 0:Wt.docs,source:{originalSource:'createCaseStory("047-one-of-variant2-change-additional-properties-rule1-to-false-number")',...(Yt=(Xt=Q.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};var Zt,er,nr;U.parameters={...U.parameters,docs:{...(Zt=U.parameters)==null?void 0:Zt.docs,source:{originalSource:'createCaseStory("048-one-of-variant2-change-additional-properties-false-to-rule1-number")',...(nr=(er=U.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var tr,rr,ar;V.parameters={...V.parameters,docs:{...(tr=V.parameters)==null?void 0:tr.docs,source:{originalSource:'createCaseStory("049-one-of-variant2-add-additional-properties-rule1-integer")',...(ar=(rr=V.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var ir,or,pr;W.parameters={...W.parameters,docs:{...(ir=W.parameters)==null?void 0:ir.docs,source:{originalSource:'createCaseStory("050-one-of-variant2-remove-additional-properties-rule1-integer")',...(pr=(or=W.parameters)==null?void 0:or.docs)==null?void 0:pr.source}}};var sr,lr,dr;X.parameters={...X.parameters,docs:{...(sr=X.parameters)==null?void 0:sr.docs,source:{originalSource:'createCaseStory("051-one-of-variant2-add-additional-properties-false-integer")',...(dr=(lr=X.parameters)==null?void 0:lr.docs)==null?void 0:dr.source}}};var cr,mr,_r;Y.parameters={...Y.parameters,docs:{...(cr=Y.parameters)==null?void 0:cr.docs,source:{originalSource:'createCaseStory("052-one-of-variant2-remove-additional-properties-false-integer")',...(_r=(mr=Y.parameters)==null?void 0:mr.docs)==null?void 0:_r.source}}};var fr,yr,br;Z.parameters={...Z.parameters,docs:{...(fr=Z.parameters)==null?void 0:fr.docs,source:{originalSource:'createCaseStory("053-one-of-variant2-change-additional-properties-rule1-to-false-integer")',...(br=(yr=Z.parameters)==null?void 0:yr.docs)==null?void 0:br.source}}};var hr,ur,gr;ee.parameters={...ee.parameters,docs:{...(hr=ee.parameters)==null?void 0:hr.docs,source:{originalSource:'createCaseStory("054-one-of-variant2-change-additional-properties-false-to-rule1-integer")',...(gr=(ur=ee.parameters)==null?void 0:ur.docs)==null?void 0:gr.source}}};var jr,vr,Pr;ne.parameters={...ne.parameters,docs:{...(jr=ne.parameters)==null?void 0:jr.docs,source:{originalSource:'createCaseStory("055-one-of-variant2-add-additional-properties-rule1-boolean")',...(Pr=(vr=ne.parameters)==null?void 0:vr.docs)==null?void 0:Pr.source}}};var Or,Sr,wr;te.parameters={...te.parameters,docs:{...(Or=te.parameters)==null?void 0:Or.docs,source:{originalSource:'createCaseStory("056-one-of-variant2-remove-additional-properties-rule1-boolean")',...(wr=(Sr=te.parameters)==null?void 0:Sr.docs)==null?void 0:wr.source}}};var xr,Cr,Ir;re.parameters={...re.parameters,docs:{...(xr=re.parameters)==null?void 0:xr.docs,source:{originalSource:'createCaseStory("057-one-of-variant2-add-additional-properties-false-boolean")',...(Ir=(Cr=re.parameters)==null?void 0:Cr.docs)==null?void 0:Ir.source}}};var Ar,Nr,Rr;ae.parameters={...ae.parameters,docs:{...(Ar=ae.parameters)==null?void 0:Ar.docs,source:{originalSource:'createCaseStory("058-one-of-variant2-remove-additional-properties-false-boolean")',...(Rr=(Nr=ae.parameters)==null?void 0:Nr.docs)==null?void 0:Rr.source}}};var Lr,qr,zr;ie.parameters={...ie.parameters,docs:{...(Lr=ie.parameters)==null?void 0:Lr.docs,source:{originalSource:'createCaseStory("059-one-of-variant2-change-additional-properties-rule1-to-false-boolean")',...(zr=(qr=ie.parameters)==null?void 0:qr.docs)==null?void 0:zr.source}}};var $r,Dr,Jr;oe.parameters={...oe.parameters,docs:{...($r=oe.parameters)==null?void 0:$r.docs,source:{originalSource:'createCaseStory("060-one-of-variant2-change-additional-properties-false-to-rule1-boolean")',...(Jr=(Dr=oe.parameters)==null?void 0:Dr.docs)==null?void 0:Jr.source}}};var Fr,Br,Tr;pe.parameters={...pe.parameters,docs:{...(Fr=pe.parameters)==null?void 0:Fr.docs,source:{originalSource:'createCaseStory("061-one-of-variant2-add-additional-properties-rule1-array")',...(Tr=(Br=pe.parameters)==null?void 0:Br.docs)==null?void 0:Tr.source}}};var Er,kr,Gr;se.parameters={...se.parameters,docs:{...(Er=se.parameters)==null?void 0:Er.docs,source:{originalSource:'createCaseStory("062-one-of-variant2-remove-additional-properties-rule1-array")',...(Gr=(kr=se.parameters)==null?void 0:kr.docs)==null?void 0:Gr.source}}};var Hr,Kr,Mr;le.parameters={...le.parameters,docs:{...(Hr=le.parameters)==null?void 0:Hr.docs,source:{originalSource:'createCaseStory("063-one-of-variant2-add-additional-properties-false-array")',...(Mr=(Kr=le.parameters)==null?void 0:Kr.docs)==null?void 0:Mr.source}}};var Qr,Ur,Vr;de.parameters={...de.parameters,docs:{...(Qr=de.parameters)==null?void 0:Qr.docs,source:{originalSource:'createCaseStory("064-one-of-variant2-remove-additional-properties-false-array")',...(Vr=(Ur=de.parameters)==null?void 0:Ur.docs)==null?void 0:Vr.source}}};var Wr,Xr,Yr;ce.parameters={...ce.parameters,docs:{...(Wr=ce.parameters)==null?void 0:Wr.docs,source:{originalSource:'createCaseStory("065-one-of-variant2-change-additional-properties-rule1-to-false-array")',...(Yr=(Xr=ce.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.source}}};var Zr,ea,na;me.parameters={...me.parameters,docs:{...(Zr=me.parameters)==null?void 0:Zr.docs,source:{originalSource:'createCaseStory("066-one-of-variant2-change-additional-properties-false-to-rule1-array")',...(na=(ea=me.parameters)==null?void 0:ea.docs)==null?void 0:na.source}}};var ta,ra,aa;_e.parameters={..._e.parameters,docs:{...(ta=_e.parameters)==null?void 0:ta.docs,source:{originalSource:'createCaseStory("067-one-of-variant2-add-additional-properties-rule1-object")',...(aa=(ra=_e.parameters)==null?void 0:ra.docs)==null?void 0:aa.source}}};var ia,oa,pa;fe.parameters={...fe.parameters,docs:{...(ia=fe.parameters)==null?void 0:ia.docs,source:{originalSource:'createCaseStory("068-one-of-variant2-remove-additional-properties-rule1-object")',...(pa=(oa=fe.parameters)==null?void 0:oa.docs)==null?void 0:pa.source}}};var sa,la,da;ye.parameters={...ye.parameters,docs:{...(sa=ye.parameters)==null?void 0:sa.docs,source:{originalSource:'createCaseStory("069-one-of-variant2-add-additional-properties-false-object")',...(da=(la=ye.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};var ca,ma,_a;be.parameters={...be.parameters,docs:{...(ca=be.parameters)==null?void 0:ca.docs,source:{originalSource:'createCaseStory("070-one-of-variant2-remove-additional-properties-false-object")',...(_a=(ma=be.parameters)==null?void 0:ma.docs)==null?void 0:_a.source}}};var fa,ya,ba;he.parameters={...he.parameters,docs:{...(fa=he.parameters)==null?void 0:fa.docs,source:{originalSource:'createCaseStory("071-one-of-variant2-change-additional-properties-rule1-to-false-object")',...(ba=(ya=he.parameters)==null?void 0:ya.docs)==null?void 0:ba.source}}};var ha,ua,ga;ue.parameters={...ue.parameters,docs:{...(ha=ue.parameters)==null?void 0:ha.docs,source:{originalSource:'createCaseStory("072-one-of-variant2-change-additional-properties-false-to-rule1-object")',...(ga=(ua=ue.parameters)==null?void 0:ua.docs)==null?void 0:ga.source}}};const Np=["Case_001_add_additional_properties_rule1_string","Case_002_remove_additional_properties_rule1_string","Case_003_add_additional_properties_false_string","Case_004_remove_additional_properties_false_string","Case_005_change_additional_properties_rule1_to_false_string","Case_006_change_additional_properties_false_to_rule1_string","Case_007_add_additional_properties_rule1_number","Case_008_remove_additional_properties_rule1_number","Case_009_add_additional_properties_false_number","Case_010_remove_additional_properties_false_number","Case_011_change_additional_properties_rule1_to_false_number","Case_012_change_additional_properties_false_to_rule1_number","Case_013_add_additional_properties_rule1_integer","Case_014_remove_additional_properties_rule1_integer","Case_015_add_additional_properties_false_integer","Case_016_remove_additional_properties_false_integer","Case_017_change_additional_properties_rule1_to_false_integer","Case_018_change_additional_properties_false_to_rule1_integer","Case_019_add_additional_properties_rule1_boolean","Case_020_remove_additional_properties_rule1_boolean","Case_021_add_additional_properties_false_boolean","Case_022_remove_additional_properties_false_boolean","Case_023_change_additional_properties_rule1_to_false_boolean","Case_024_change_additional_properties_false_to_rule1_boolean","Case_025_add_additional_properties_rule1_array","Case_026_remove_additional_properties_rule1_array","Case_027_add_additional_properties_false_array","Case_028_remove_additional_properties_false_array","Case_029_change_additional_properties_rule1_to_false_array","Case_030_change_additional_properties_false_to_rule1_array","Case_031_add_additional_properties_rule1_object","Case_032_remove_additional_properties_rule1_object","Case_033_add_additional_properties_false_object","Case_034_remove_additional_properties_false_object","Case_035_change_additional_properties_rule1_to_false_object","Case_036_change_additional_properties_false_to_rule1_object","Case_037_one_of_variant2_add_additional_properties_rule1_string","Case_038_one_of_variant2_remove_additional_properties_rule1_string","Case_039_one_of_variant2_add_additional_properties_false_string","Case_040_one_of_variant2_remove_additional_properties_false_string","Case_041_one_of_variant2_change_additional_properties_rule1_to_false_string","Case_042_one_of_variant2_change_additional_properties_false_to_rule1_string","Case_043_one_of_variant2_add_additional_properties_rule1_number","Case_044_one_of_variant2_remove_additional_properties_rule1_number","Case_045_one_of_variant2_add_additional_properties_false_number","Case_046_one_of_variant2_remove_additional_properties_false_number","Case_047_one_of_variant2_change_additional_properties_rule1_to_false_number","Case_048_one_of_variant2_change_additional_properties_false_to_rule1_number","Case_049_one_of_variant2_add_additional_properties_rule1_integer","Case_050_one_of_variant2_remove_additional_properties_rule1_integer","Case_051_one_of_variant2_add_additional_properties_false_integer","Case_052_one_of_variant2_remove_additional_properties_false_integer","Case_053_one_of_variant2_change_additional_properties_rule1_to_false_integer","Case_054_one_of_variant2_change_additional_properties_false_to_rule1_integer","Case_055_one_of_variant2_add_additional_properties_rule1_boolean","Case_056_one_of_variant2_remove_additional_properties_rule1_boolean","Case_057_one_of_variant2_add_additional_properties_false_boolean","Case_058_one_of_variant2_remove_additional_properties_false_boolean","Case_059_one_of_variant2_change_additional_properties_rule1_to_false_boolean","Case_060_one_of_variant2_change_additional_properties_false_to_rule1_boolean","Case_061_one_of_variant2_add_additional_properties_rule1_array","Case_062_one_of_variant2_remove_additional_properties_rule1_array","Case_063_one_of_variant2_add_additional_properties_false_array","Case_064_one_of_variant2_remove_additional_properties_false_array","Case_065_one_of_variant2_change_additional_properties_rule1_to_false_array","Case_066_one_of_variant2_change_additional_properties_false_to_rule1_array","Case_067_one_of_variant2_add_additional_properties_rule1_object","Case_068_one_of_variant2_remove_additional_properties_rule1_object","Case_069_one_of_variant2_add_additional_properties_false_object","Case_070_one_of_variant2_remove_additional_properties_false_object","Case_071_one_of_variant2_change_additional_properties_rule1_to_false_object","Case_072_one_of_variant2_change_additional_properties_false_to_rule1_object"];export{n as Case_001_add_additional_properties_rule1_string,t as Case_002_remove_additional_properties_rule1_string,r as Case_003_add_additional_properties_false_string,a as Case_004_remove_additional_properties_false_string,i as Case_005_change_additional_properties_rule1_to_false_string,o as Case_006_change_additional_properties_false_to_rule1_string,p as Case_007_add_additional_properties_rule1_number,s as Case_008_remove_additional_properties_rule1_number,l as Case_009_add_additional_properties_false_number,d as Case_010_remove_additional_properties_false_number,c as Case_011_change_additional_properties_rule1_to_false_number,m as Case_012_change_additional_properties_false_to_rule1_number,_ as Case_013_add_additional_properties_rule1_integer,f as Case_014_remove_additional_properties_rule1_integer,y as Case_015_add_additional_properties_false_integer,b as Case_016_remove_additional_properties_false_integer,h as Case_017_change_additional_properties_rule1_to_false_integer,u as Case_018_change_additional_properties_false_to_rule1_integer,g as Case_019_add_additional_properties_rule1_boolean,j as Case_020_remove_additional_properties_rule1_boolean,v as Case_021_add_additional_properties_false_boolean,P as Case_022_remove_additional_properties_false_boolean,O as Case_023_change_additional_properties_rule1_to_false_boolean,S as Case_024_change_additional_properties_false_to_rule1_boolean,w as Case_025_add_additional_properties_rule1_array,x as Case_026_remove_additional_properties_rule1_array,C as Case_027_add_additional_properties_false_array,I as Case_028_remove_additional_properties_false_array,A as Case_029_change_additional_properties_rule1_to_false_array,N as Case_030_change_additional_properties_false_to_rule1_array,R as Case_031_add_additional_properties_rule1_object,L as Case_032_remove_additional_properties_rule1_object,q as Case_033_add_additional_properties_false_object,z as Case_034_remove_additional_properties_false_object,$ as Case_035_change_additional_properties_rule1_to_false_object,D as Case_036_change_additional_properties_false_to_rule1_object,J as Case_037_one_of_variant2_add_additional_properties_rule1_string,F as Case_038_one_of_variant2_remove_additional_properties_rule1_string,B as Case_039_one_of_variant2_add_additional_properties_false_string,T as Case_040_one_of_variant2_remove_additional_properties_false_string,E as Case_041_one_of_variant2_change_additional_properties_rule1_to_false_string,k as Case_042_one_of_variant2_change_additional_properties_false_to_rule1_string,G as Case_043_one_of_variant2_add_additional_properties_rule1_number,H as Case_044_one_of_variant2_remove_additional_properties_rule1_number,K as Case_045_one_of_variant2_add_additional_properties_false_number,M as Case_046_one_of_variant2_remove_additional_properties_false_number,Q as Case_047_one_of_variant2_change_additional_properties_rule1_to_false_number,U as Case_048_one_of_variant2_change_additional_properties_false_to_rule1_number,V as Case_049_one_of_variant2_add_additional_properties_rule1_integer,W as Case_050_one_of_variant2_remove_additional_properties_rule1_integer,X as Case_051_one_of_variant2_add_additional_properties_false_integer,Y as Case_052_one_of_variant2_remove_additional_properties_false_integer,Z as Case_053_one_of_variant2_change_additional_properties_rule1_to_false_integer,ee as Case_054_one_of_variant2_change_additional_properties_false_to_rule1_integer,ne as Case_055_one_of_variant2_add_additional_properties_rule1_boolean,te as Case_056_one_of_variant2_remove_additional_properties_rule1_boolean,re as Case_057_one_of_variant2_add_additional_properties_false_boolean,ae as Case_058_one_of_variant2_remove_additional_properties_false_boolean,ie as Case_059_one_of_variant2_change_additional_properties_rule1_to_false_boolean,oe as Case_060_one_of_variant2_change_additional_properties_false_to_rule1_boolean,pe as Case_061_one_of_variant2_add_additional_properties_rule1_array,se as Case_062_one_of_variant2_remove_additional_properties_rule1_array,le as Case_063_one_of_variant2_add_additional_properties_false_array,de as Case_064_one_of_variant2_remove_additional_properties_false_array,ce as Case_065_one_of_variant2_change_additional_properties_rule1_to_false_array,me as Case_066_one_of_variant2_change_additional_properties_false_to_rule1_array,_e as Case_067_one_of_variant2_add_additional_properties_rule1_object,fe as Case_068_one_of_variant2_remove_additional_properties_rule1_object,ye as Case_069_one_of_variant2_add_additional_properties_false_object,be as Case_070_one_of_variant2_remove_additional_properties_false_object,he as Case_071_one_of_variant2_change_additional_properties_rule1_to_false_object,ue as Case_072_one_of_variant2_change_additional_properties_false_to_rule1_object,Np as __namedExportsOrder,Ap as default};
