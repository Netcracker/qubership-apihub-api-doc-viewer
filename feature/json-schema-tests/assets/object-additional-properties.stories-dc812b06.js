import{c as Vt}from"./diffs-samples-cases-1df1f3ae.js";import{c as Wt,J as Ut,j as Xt,a as Yt}from"./json-schema-diffs-utils-361af4d1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-2d7bd233.js";import"./DiffBadge-4d4a1c37.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-be584810.js";import"./GraphPropNodeViewer-1f5ff77a.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-3b42765c.js";import"./preprocess-c9227d17.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";const Zt=`type: object
description: Object with no declared properties
minProperties: 0
maxProperties: 10

`,ea=`type: object
description: Object with no declared properties
minProperties: 0
maxProperties: 10
additionalProperties: false

`,na=`type: object
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

`,ta=`type: object
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

`,aa=`type: object
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

`,ra=`type: object
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

`,ia=`type: object
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

`,oa=`type: object
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

`,pa=`type: object
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

`,sa=`type: object
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

`,ca=`type: object
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

`,da=`type: object
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

`,ma=`type: object
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

`,la=`type: object
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

`,_a=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,ya=`type: object
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

`,ba=`type: object
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

`,fa=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,ha=`type: object
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

`,ga=`type: object
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

`,ua=`type: object
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

`,ja=`type: object
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

`,va=`type: object
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

`,Pa=`type: object
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

`,Oa=`type: object
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

`,Sa=`type: object
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

`,wa=`type: object
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
        description: Object with no declared properties
        minProperties: 0
        maxProperties: 10

`,xa=`type: object
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
        description: Object with no declared properties
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Ca=`type: object
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

`,Ia=`type: object
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

`,Aa=`type: object
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

`,Na=`type: object
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

`,Ra=`type: object
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

`,La=`type: object
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

`,qa=`type: object
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

`,za=`type: object
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

`,$a=`type: object
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

`,Da=`type: object
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

`,Ja=`type: object
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

`,Fa=`type: object
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

`,Ba=`type: object
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

`,Ta=`type: object
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

`,Ea=`type: object
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

`,ka=`type: object
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

`,Ga=`type: object
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

`,Ha=`type: object
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

`,Ka=`type: object
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

`,Ma=`type: object
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

`,Qa=`type: object
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

`,Ua=`type: object
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

`,Va=`type: object
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

`,Wa=`type: object
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

`,Xa=`type: object
description: Object with no declared properties
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Ya=`type: object
description: Object with no declared properties
minProperties: 0
maxProperties: 10

`,Za=`type: object
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

`,er=`type: object
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

`,nr=`type: object
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

`,tr=`type: object
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

`,ar=`type: object
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

`,rr=`type: object
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

`,ir=`type: object
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

`,or=`type: object
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

`,pr=`type: object
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

`,sr=`type: object
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

`,cr=`type: object
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

`,dr=`type: object
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

`,mr=`type: object
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

`,lr=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,_r=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,yr=`type: object
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

`,br=`type: object
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

`,fr=`type: object
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

`,hr=`type: object
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

`,gr=`type: object
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

`,ur=`type: object
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

`,jr=`type: object
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

`,vr=`type: object
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

`,Pr=`type: object
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

`,Or=`type: object
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
        description: Object with no declared properties
        minProperties: 0
        maxProperties: 10
        additionalProperties: false

`,Sr=`type: object
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
        description: Object with no declared properties
        minProperties: 0
        maxProperties: 10

`,wr=`type: object
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

`,xr=`type: object
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

`,Cr=`type: object
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

`,Ir=`type: object
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

`,Ar=`type: object
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

`,Nr=`type: object
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

`,Rr=`type: object
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

`,Lr=`type: object
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

`,qr=`type: object
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

`,zr=`type: object
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

`,$r=`type: object
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

`,Dr=`type: object
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

`,Jr=`type: object
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

`,Fr=`type: object
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

`,Br=`type: object
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

`,Tr=`type: object
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

`,Er=`type: object
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

`,kr=`type: object
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

`,Gr=`type: object
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

`,Hr=`type: object
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

`,Kr=`type: object
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

`,Mr=`type: object
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

`,Qr=`type: object
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

`,Ur=`type: object
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

`,Vr=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/001-add-additional-properties-false/before.yaml":Zt,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/002-remove-additional-properties-false/before.yaml":ea,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/003-add-additional-properties-type-string/before.yaml":na,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/004-remove-additional-properties-type-string/before.yaml":ta,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/005-change-additional-properties-string-to-false/before.yaml":aa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/006-change-additional-properties-false-to-string/before.yaml":ra,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/007-add-additional-properties-type-number/before.yaml":ia,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/008-remove-additional-properties-type-number/before.yaml":oa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/009-change-additional-properties-number-to-false/before.yaml":pa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/010-change-additional-properties-false-to-number/before.yaml":sa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/011-add-additional-properties-type-integer/before.yaml":ca,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/012-remove-additional-properties-type-integer/before.yaml":da,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/013-change-additional-properties-integer-to-false/before.yaml":ma,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/014-change-additional-properties-false-to-integer/before.yaml":la,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/015-add-additional-properties-type-boolean/before.yaml":_a,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/016-remove-additional-properties-type-boolean/before.yaml":ya,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/017-change-additional-properties-boolean-to-false/before.yaml":ba,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/018-change-additional-properties-false-to-boolean/before.yaml":fa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/019-add-additional-properties-type-array/before.yaml":ha,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/020-remove-additional-properties-type-array/before.yaml":ga,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/021-change-additional-properties-array-to-false/before.yaml":ua,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/022-change-additional-properties-false-to-array/before.yaml":ja,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/023-add-additional-properties-type-object/before.yaml":va,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/024-remove-additional-properties-type-object/before.yaml":Pa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/025-change-additional-properties-object-to-false/before.yaml":Oa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/026-change-additional-properties-false-to-object/before.yaml":Sa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/027-one-of-object-variant-add-additional-properties-false/before.yaml":wa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/028-one-of-object-variant-remove-additional-properties-false/before.yaml":xa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/029-one-of-object-variant-add-additional-properties-type-string/before.yaml":Ca,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/030-one-of-object-variant-remove-additional-properties-type-string/before.yaml":Ia,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/031-one-of-object-variant-change-additional-properties-string-to-false/before.yaml":Aa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/032-one-of-object-variant-change-additional-properties-false-to-string/before.yaml":Na,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/033-one-of-object-variant-add-additional-properties-type-number/before.yaml":Ra,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/034-one-of-object-variant-remove-additional-properties-type-number/before.yaml":La,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/035-one-of-object-variant-change-additional-properties-number-to-false/before.yaml":qa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/036-one-of-object-variant-change-additional-properties-false-to-number/before.yaml":za,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/037-one-of-object-variant-add-additional-properties-type-integer/before.yaml":$a,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/038-one-of-object-variant-remove-additional-properties-type-integer/before.yaml":Da,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/039-one-of-object-variant-change-additional-properties-integer-to-false/before.yaml":Ja,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/040-one-of-object-variant-change-additional-properties-false-to-integer/before.yaml":Fa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/041-one-of-object-variant-add-additional-properties-type-boolean/before.yaml":Ba,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/042-one-of-object-variant-remove-additional-properties-type-boolean/before.yaml":Ta,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/043-one-of-object-variant-change-additional-properties-boolean-to-false/before.yaml":Ea,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/044-one-of-object-variant-change-additional-properties-false-to-boolean/before.yaml":ka,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/045-one-of-object-variant-add-additional-properties-type-array/before.yaml":Ga,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/046-one-of-object-variant-remove-additional-properties-type-array/before.yaml":Ha,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/047-one-of-object-variant-change-additional-properties-array-to-false/before.yaml":Ka,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/048-one-of-object-variant-change-additional-properties-false-to-array/before.yaml":Ma,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/049-one-of-object-variant-add-additional-properties-type-object/before.yaml":Qa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/050-one-of-object-variant-remove-additional-properties-type-object/before.yaml":Ua,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/051-one-of-object-variant-change-additional-properties-object-to-false/before.yaml":Va,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/052-one-of-object-variant-change-additional-properties-false-to-object/before.yaml":Wa}),Wr=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/001-add-additional-properties-false/after.yaml":Xa,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/002-remove-additional-properties-false/after.yaml":Ya,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/003-add-additional-properties-type-string/after.yaml":Za,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/004-remove-additional-properties-type-string/after.yaml":er,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/005-change-additional-properties-string-to-false/after.yaml":nr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/006-change-additional-properties-false-to-string/after.yaml":tr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/007-add-additional-properties-type-number/after.yaml":ar,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/008-remove-additional-properties-type-number/after.yaml":rr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/009-change-additional-properties-number-to-false/after.yaml":ir,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/010-change-additional-properties-false-to-number/after.yaml":or,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/011-add-additional-properties-type-integer/after.yaml":pr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/012-remove-additional-properties-type-integer/after.yaml":sr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/013-change-additional-properties-integer-to-false/after.yaml":cr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/014-change-additional-properties-false-to-integer/after.yaml":dr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/015-add-additional-properties-type-boolean/after.yaml":mr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/016-remove-additional-properties-type-boolean/after.yaml":lr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/017-change-additional-properties-boolean-to-false/after.yaml":_r,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/018-change-additional-properties-false-to-boolean/after.yaml":yr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/019-add-additional-properties-type-array/after.yaml":br,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/020-remove-additional-properties-type-array/after.yaml":fr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/021-change-additional-properties-array-to-false/after.yaml":hr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/022-change-additional-properties-false-to-array/after.yaml":gr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/023-add-additional-properties-type-object/after.yaml":ur,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/024-remove-additional-properties-type-object/after.yaml":jr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/025-change-additional-properties-object-to-false/after.yaml":vr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/026-change-additional-properties-false-to-object/after.yaml":Pr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/027-one-of-object-variant-add-additional-properties-false/after.yaml":Or,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/028-one-of-object-variant-remove-additional-properties-false/after.yaml":Sr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/029-one-of-object-variant-add-additional-properties-type-string/after.yaml":wr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/030-one-of-object-variant-remove-additional-properties-type-string/after.yaml":xr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/031-one-of-object-variant-change-additional-properties-string-to-false/after.yaml":Cr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/032-one-of-object-variant-change-additional-properties-false-to-string/after.yaml":Ir,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/033-one-of-object-variant-add-additional-properties-type-number/after.yaml":Ar,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/034-one-of-object-variant-remove-additional-properties-type-number/after.yaml":Nr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/035-one-of-object-variant-change-additional-properties-number-to-false/after.yaml":Rr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/036-one-of-object-variant-change-additional-properties-false-to-number/after.yaml":Lr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/037-one-of-object-variant-add-additional-properties-type-integer/after.yaml":qr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/038-one-of-object-variant-remove-additional-properties-type-integer/after.yaml":zr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/039-one-of-object-variant-change-additional-properties-integer-to-false/after.yaml":$r,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/040-one-of-object-variant-change-additional-properties-false-to-integer/after.yaml":Dr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/041-one-of-object-variant-add-additional-properties-type-boolean/after.yaml":Jr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/042-one-of-object-variant-remove-additional-properties-type-boolean/after.yaml":Fr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/043-one-of-object-variant-change-additional-properties-boolean-to-false/after.yaml":Br,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/044-one-of-object-variant-change-additional-properties-false-to-boolean/after.yaml":Tr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/045-one-of-object-variant-add-additional-properties-type-array/after.yaml":Er,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/046-one-of-object-variant-remove-additional-properties-type-array/after.yaml":kr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/047-one-of-object-variant-change-additional-properties-array-to-false/after.yaml":Gr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/048-one-of-object-variant-change-additional-properties-false-to-array/after.yaml":Hr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/049-one-of-object-variant-add-additional-properties-type-object/after.yaml":Kr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/050-one-of-object-variant-remove-additional-properties-type-object/after.yaml":Mr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/051-one-of-object-variant-change-additional-properties-object-to-false/after.yaml":Qr,"../../../../samples/json-schema-diffs/type-changes/object-additional-properties/052-one-of-object-variant-change-additional-properties-false-to-object/after.yaml":Ur}),Xr=Vt(Vr,Wr),Yr=Wt(Xr),fi={title:"JSON Schema Diffs Suite/Object Additional Properties",component:Ut,argTypes:Xt},e=Yt(Ut,Yr),n=e("001-add-additional-properties-false"),t=e("002-remove-additional-properties-false"),a=e("003-add-additional-properties-type-string"),r=e("004-remove-additional-properties-type-string"),i=e("005-change-additional-properties-string-to-false"),o=e("006-change-additional-properties-false-to-string"),p=e("007-add-additional-properties-type-number"),s=e("008-remove-additional-properties-type-number"),c=e("009-change-additional-properties-number-to-false"),d=e("010-change-additional-properties-false-to-number"),m=e("011-add-additional-properties-type-integer"),l=e("012-remove-additional-properties-type-integer"),_=e("013-change-additional-properties-integer-to-false"),y=e("014-change-additional-properties-false-to-integer"),b=e("015-add-additional-properties-type-boolean"),f=e("016-remove-additional-properties-type-boolean"),h=e("017-change-additional-properties-boolean-to-false"),g=e("018-change-additional-properties-false-to-boolean"),u=e("019-add-additional-properties-type-array"),j=e("020-remove-additional-properties-type-array"),v=e("021-change-additional-properties-array-to-false"),P=e("022-change-additional-properties-false-to-array"),O=e("023-add-additional-properties-type-object"),S=e("024-remove-additional-properties-type-object"),w=e("025-change-additional-properties-object-to-false"),x=e("026-change-additional-properties-false-to-object"),C=e("027-one-of-object-variant-add-additional-properties-false"),I=e("028-one-of-object-variant-remove-additional-properties-false"),A=e("029-one-of-object-variant-add-additional-properties-type-string"),N=e("030-one-of-object-variant-remove-additional-properties-type-string"),R=e("031-one-of-object-variant-change-additional-properties-string-to-false"),L=e("032-one-of-object-variant-change-additional-properties-false-to-string"),q=e("033-one-of-object-variant-add-additional-properties-type-number"),z=e("034-one-of-object-variant-remove-additional-properties-type-number"),$=e("035-one-of-object-variant-change-additional-properties-number-to-false"),D=e("036-one-of-object-variant-change-additional-properties-false-to-number"),J=e("037-one-of-object-variant-add-additional-properties-type-integer"),F=e("038-one-of-object-variant-remove-additional-properties-type-integer"),B=e("039-one-of-object-variant-change-additional-properties-integer-to-false"),T=e("040-one-of-object-variant-change-additional-properties-false-to-integer"),E=e("041-one-of-object-variant-add-additional-properties-type-boolean"),k=e("042-one-of-object-variant-remove-additional-properties-type-boolean"),G=e("043-one-of-object-variant-change-additional-properties-boolean-to-false"),H=e("044-one-of-object-variant-change-additional-properties-false-to-boolean"),K=e("045-one-of-object-variant-add-additional-properties-type-array"),M=e("046-one-of-object-variant-remove-additional-properties-type-array"),Q=e("047-one-of-object-variant-change-additional-properties-array-to-false"),U=e("048-one-of-object-variant-change-additional-properties-false-to-array"),V=e("049-one-of-object-variant-add-additional-properties-type-object"),W=e("050-one-of-object-variant-remove-additional-properties-type-object"),X=e("051-one-of-object-variant-change-additional-properties-object-to-false"),Y=e("052-one-of-object-variant-change-additional-properties-false-to-object");var Z,ee,ne;n.parameters={...n.parameters,docs:{...(Z=n.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("001-add-additional-properties-false")',...(ne=(ee=n.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,re;t.parameters={...t.parameters,docs:{...(te=t.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("002-remove-additional-properties-false")',...(re=(ae=t.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,oe,pe;a.parameters={...a.parameters,docs:{...(ie=a.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("003-add-additional-properties-type-string")',...(pe=(oe=a.parameters)==null?void 0:oe.docs)==null?void 0:pe.source}}};var se,ce,de;r.parameters={...r.parameters,docs:{...(se=r.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("004-remove-additional-properties-type-string")',...(de=(ce=r.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,le,_e;i.parameters={...i.parameters,docs:{...(me=i.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("005-change-additional-properties-string-to-false")',...(_e=(le=i.parameters)==null?void 0:le.docs)==null?void 0:_e.source}}};var ye,be,fe;o.parameters={...o.parameters,docs:{...(ye=o.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("006-change-additional-properties-false-to-string")',...(fe=(be=o.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var he,ge,ue;p.parameters={...p.parameters,docs:{...(he=p.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("007-add-additional-properties-type-number")',...(ue=(ge=p.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var je,ve,Pe;s.parameters={...s.parameters,docs:{...(je=s.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("008-remove-additional-properties-type-number")',...(Pe=(ve=s.parameters)==null?void 0:ve.docs)==null?void 0:Pe.source}}};var Oe,Se,we;c.parameters={...c.parameters,docs:{...(Oe=c.parameters)==null?void 0:Oe.docs,source:{originalSource:'createCaseStory("009-change-additional-properties-number-to-false")',...(we=(Se=c.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var xe,Ce,Ie;d.parameters={...d.parameters,docs:{...(xe=d.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("010-change-additional-properties-false-to-number")',...(Ie=(Ce=d.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var Ae,Ne,Re;m.parameters={...m.parameters,docs:{...(Ae=m.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("011-add-additional-properties-type-integer")',...(Re=(Ne=m.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};var Le,qe,ze;l.parameters={...l.parameters,docs:{...(Le=l.parameters)==null?void 0:Le.docs,source:{originalSource:'createCaseStory("012-remove-additional-properties-type-integer")',...(ze=(qe=l.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var $e,De,Je;_.parameters={..._.parameters,docs:{...($e=_.parameters)==null?void 0:$e.docs,source:{originalSource:'createCaseStory("013-change-additional-properties-integer-to-false")',...(Je=(De=_.parameters)==null?void 0:De.docs)==null?void 0:Je.source}}};var Fe,Be,Te;y.parameters={...y.parameters,docs:{...(Fe=y.parameters)==null?void 0:Fe.docs,source:{originalSource:'createCaseStory("014-change-additional-properties-false-to-integer")',...(Te=(Be=y.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ee,ke,Ge;b.parameters={...b.parameters,docs:{...(Ee=b.parameters)==null?void 0:Ee.docs,source:{originalSource:'createCaseStory("015-add-additional-properties-type-boolean")',...(Ge=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:Ge.source}}};var He,Ke,Me;f.parameters={...f.parameters,docs:{...(He=f.parameters)==null?void 0:He.docs,source:{originalSource:'createCaseStory("016-remove-additional-properties-type-boolean")',...(Me=(Ke=f.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Qe,Ue,Ve;h.parameters={...h.parameters,docs:{...(Qe=h.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("017-change-additional-properties-boolean-to-false")',...(Ve=(Ue=h.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};var We,Xe,Ye;g.parameters={...g.parameters,docs:{...(We=g.parameters)==null?void 0:We.docs,source:{originalSource:'createCaseStory("018-change-additional-properties-false-to-boolean")',...(Ye=(Xe=g.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,en,nn;u.parameters={...u.parameters,docs:{...(Ze=u.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("019-add-additional-properties-type-array")',...(nn=(en=u.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,an,rn;j.parameters={...j.parameters,docs:{...(tn=j.parameters)==null?void 0:tn.docs,source:{originalSource:'createCaseStory("020-remove-additional-properties-type-array")',...(rn=(an=j.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var on,pn,sn;v.parameters={...v.parameters,docs:{...(on=v.parameters)==null?void 0:on.docs,source:{originalSource:'createCaseStory("021-change-additional-properties-array-to-false")',...(sn=(pn=v.parameters)==null?void 0:pn.docs)==null?void 0:sn.source}}};var cn,dn,mn;P.parameters={...P.parameters,docs:{...(cn=P.parameters)==null?void 0:cn.docs,source:{originalSource:'createCaseStory("022-change-additional-properties-false-to-array")',...(mn=(dn=P.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var ln,_n,yn;O.parameters={...O.parameters,docs:{...(ln=O.parameters)==null?void 0:ln.docs,source:{originalSource:'createCaseStory("023-add-additional-properties-type-object")',...(yn=(_n=O.parameters)==null?void 0:_n.docs)==null?void 0:yn.source}}};var bn,fn,hn;S.parameters={...S.parameters,docs:{...(bn=S.parameters)==null?void 0:bn.docs,source:{originalSource:'createCaseStory("024-remove-additional-properties-type-object")',...(hn=(fn=S.parameters)==null?void 0:fn.docs)==null?void 0:hn.source}}};var gn,un,jn;w.parameters={...w.parameters,docs:{...(gn=w.parameters)==null?void 0:gn.docs,source:{originalSource:'createCaseStory("025-change-additional-properties-object-to-false")',...(jn=(un=w.parameters)==null?void 0:un.docs)==null?void 0:jn.source}}};var vn,Pn,On;x.parameters={...x.parameters,docs:{...(vn=x.parameters)==null?void 0:vn.docs,source:{originalSource:'createCaseStory("026-change-additional-properties-false-to-object")',...(On=(Pn=x.parameters)==null?void 0:Pn.docs)==null?void 0:On.source}}};var Sn,wn,xn;C.parameters={...C.parameters,docs:{...(Sn=C.parameters)==null?void 0:Sn.docs,source:{originalSource:'createCaseStory("027-one-of-object-variant-add-additional-properties-false")',...(xn=(wn=C.parameters)==null?void 0:wn.docs)==null?void 0:xn.source}}};var Cn,In,An;I.parameters={...I.parameters,docs:{...(Cn=I.parameters)==null?void 0:Cn.docs,source:{originalSource:'createCaseStory("028-one-of-object-variant-remove-additional-properties-false")',...(An=(In=I.parameters)==null?void 0:In.docs)==null?void 0:An.source}}};var Nn,Rn,Ln;A.parameters={...A.parameters,docs:{...(Nn=A.parameters)==null?void 0:Nn.docs,source:{originalSource:'createCaseStory("029-one-of-object-variant-add-additional-properties-type-string")',...(Ln=(Rn=A.parameters)==null?void 0:Rn.docs)==null?void 0:Ln.source}}};var qn,zn,$n;N.parameters={...N.parameters,docs:{...(qn=N.parameters)==null?void 0:qn.docs,source:{originalSource:'createCaseStory("030-one-of-object-variant-remove-additional-properties-type-string")',...($n=(zn=N.parameters)==null?void 0:zn.docs)==null?void 0:$n.source}}};var Dn,Jn,Fn;R.parameters={...R.parameters,docs:{...(Dn=R.parameters)==null?void 0:Dn.docs,source:{originalSource:'createCaseStory("031-one-of-object-variant-change-additional-properties-string-to-false")',...(Fn=(Jn=R.parameters)==null?void 0:Jn.docs)==null?void 0:Fn.source}}};var Bn,Tn,En;L.parameters={...L.parameters,docs:{...(Bn=L.parameters)==null?void 0:Bn.docs,source:{originalSource:'createCaseStory("032-one-of-object-variant-change-additional-properties-false-to-string")',...(En=(Tn=L.parameters)==null?void 0:Tn.docs)==null?void 0:En.source}}};var kn,Gn,Hn;q.parameters={...q.parameters,docs:{...(kn=q.parameters)==null?void 0:kn.docs,source:{originalSource:'createCaseStory("033-one-of-object-variant-add-additional-properties-type-number")',...(Hn=(Gn=q.parameters)==null?void 0:Gn.docs)==null?void 0:Hn.source}}};var Kn,Mn,Qn;z.parameters={...z.parameters,docs:{...(Kn=z.parameters)==null?void 0:Kn.docs,source:{originalSource:'createCaseStory("034-one-of-object-variant-remove-additional-properties-type-number")',...(Qn=(Mn=z.parameters)==null?void 0:Mn.docs)==null?void 0:Qn.source}}};var Un,Vn,Wn;$.parameters={...$.parameters,docs:{...(Un=$.parameters)==null?void 0:Un.docs,source:{originalSource:'createCaseStory("035-one-of-object-variant-change-additional-properties-number-to-false")',...(Wn=(Vn=$.parameters)==null?void 0:Vn.docs)==null?void 0:Wn.source}}};var Xn,Yn,Zn;D.parameters={...D.parameters,docs:{...(Xn=D.parameters)==null?void 0:Xn.docs,source:{originalSource:'createCaseStory("036-one-of-object-variant-change-additional-properties-false-to-number")',...(Zn=(Yn=D.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var et,nt,tt;J.parameters={...J.parameters,docs:{...(et=J.parameters)==null?void 0:et.docs,source:{originalSource:'createCaseStory("037-one-of-object-variant-add-additional-properties-type-integer")',...(tt=(nt=J.parameters)==null?void 0:nt.docs)==null?void 0:tt.source}}};var at,rt,it;F.parameters={...F.parameters,docs:{...(at=F.parameters)==null?void 0:at.docs,source:{originalSource:'createCaseStory("038-one-of-object-variant-remove-additional-properties-type-integer")',...(it=(rt=F.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var ot,pt,st;B.parameters={...B.parameters,docs:{...(ot=B.parameters)==null?void 0:ot.docs,source:{originalSource:'createCaseStory("039-one-of-object-variant-change-additional-properties-integer-to-false")',...(st=(pt=B.parameters)==null?void 0:pt.docs)==null?void 0:st.source}}};var ct,dt,mt;T.parameters={...T.parameters,docs:{...(ct=T.parameters)==null?void 0:ct.docs,source:{originalSource:'createCaseStory("040-one-of-object-variant-change-additional-properties-false-to-integer")',...(mt=(dt=T.parameters)==null?void 0:dt.docs)==null?void 0:mt.source}}};var lt,_t,yt;E.parameters={...E.parameters,docs:{...(lt=E.parameters)==null?void 0:lt.docs,source:{originalSource:'createCaseStory("041-one-of-object-variant-add-additional-properties-type-boolean")',...(yt=(_t=E.parameters)==null?void 0:_t.docs)==null?void 0:yt.source}}};var bt,ft,ht;k.parameters={...k.parameters,docs:{...(bt=k.parameters)==null?void 0:bt.docs,source:{originalSource:'createCaseStory("042-one-of-object-variant-remove-additional-properties-type-boolean")',...(ht=(ft=k.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var gt,ut,jt;G.parameters={...G.parameters,docs:{...(gt=G.parameters)==null?void 0:gt.docs,source:{originalSource:'createCaseStory("043-one-of-object-variant-change-additional-properties-boolean-to-false")',...(jt=(ut=G.parameters)==null?void 0:ut.docs)==null?void 0:jt.source}}};var vt,Pt,Ot;H.parameters={...H.parameters,docs:{...(vt=H.parameters)==null?void 0:vt.docs,source:{originalSource:'createCaseStory("044-one-of-object-variant-change-additional-properties-false-to-boolean")',...(Ot=(Pt=H.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var St,wt,xt;K.parameters={...K.parameters,docs:{...(St=K.parameters)==null?void 0:St.docs,source:{originalSource:'createCaseStory("045-one-of-object-variant-add-additional-properties-type-array")',...(xt=(wt=K.parameters)==null?void 0:wt.docs)==null?void 0:xt.source}}};var Ct,It,At;M.parameters={...M.parameters,docs:{...(Ct=M.parameters)==null?void 0:Ct.docs,source:{originalSource:'createCaseStory("046-one-of-object-variant-remove-additional-properties-type-array")',...(At=(It=M.parameters)==null?void 0:It.docs)==null?void 0:At.source}}};var Nt,Rt,Lt;Q.parameters={...Q.parameters,docs:{...(Nt=Q.parameters)==null?void 0:Nt.docs,source:{originalSource:'createCaseStory("047-one-of-object-variant-change-additional-properties-array-to-false")',...(Lt=(Rt=Q.parameters)==null?void 0:Rt.docs)==null?void 0:Lt.source}}};var qt,zt,$t;U.parameters={...U.parameters,docs:{...(qt=U.parameters)==null?void 0:qt.docs,source:{originalSource:'createCaseStory("048-one-of-object-variant-change-additional-properties-false-to-array")',...($t=(zt=U.parameters)==null?void 0:zt.docs)==null?void 0:$t.source}}};var Dt,Jt,Ft;V.parameters={...V.parameters,docs:{...(Dt=V.parameters)==null?void 0:Dt.docs,source:{originalSource:'createCaseStory("049-one-of-object-variant-add-additional-properties-type-object")',...(Ft=(Jt=V.parameters)==null?void 0:Jt.docs)==null?void 0:Ft.source}}};var Bt,Tt,Et;W.parameters={...W.parameters,docs:{...(Bt=W.parameters)==null?void 0:Bt.docs,source:{originalSource:'createCaseStory("050-one-of-object-variant-remove-additional-properties-type-object")',...(Et=(Tt=W.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var kt,Gt,Ht;X.parameters={...X.parameters,docs:{...(kt=X.parameters)==null?void 0:kt.docs,source:{originalSource:'createCaseStory("051-one-of-object-variant-change-additional-properties-object-to-false")',...(Ht=(Gt=X.parameters)==null?void 0:Gt.docs)==null?void 0:Ht.source}}};var Kt,Mt,Qt;Y.parameters={...Y.parameters,docs:{...(Kt=Y.parameters)==null?void 0:Kt.docs,source:{originalSource:'createCaseStory("052-one-of-object-variant-change-additional-properties-false-to-object")',...(Qt=(Mt=Y.parameters)==null?void 0:Mt.docs)==null?void 0:Qt.source}}};const hi=["Case_001_add_additional_properties_false","Case_002_remove_additional_properties_false","Case_003_add_additional_properties_type_string","Case_004_remove_additional_properties_type_string","Case_005_change_additional_properties_string_to_false","Case_006_change_additional_properties_false_to_string","Case_007_add_additional_properties_type_number","Case_008_remove_additional_properties_type_number","Case_009_change_additional_properties_number_to_false","Case_010_change_additional_properties_false_to_number","Case_011_add_additional_properties_type_integer","Case_012_remove_additional_properties_type_integer","Case_013_change_additional_properties_integer_to_false","Case_014_change_additional_properties_false_to_integer","Case_015_add_additional_properties_type_boolean","Case_016_remove_additional_properties_type_boolean","Case_017_change_additional_properties_boolean_to_false","Case_018_change_additional_properties_false_to_boolean","Case_019_add_additional_properties_type_array","Case_020_remove_additional_properties_type_array","Case_021_change_additional_properties_array_to_false","Case_022_change_additional_properties_false_to_array","Case_023_add_additional_properties_type_object","Case_024_remove_additional_properties_type_object","Case_025_change_additional_properties_object_to_false","Case_026_change_additional_properties_false_to_object","Case_027_one_of_object_variant_add_additional_properties_false","Case_028_one_of_object_variant_remove_additional_properties_false","Case_029_one_of_object_variant_add_additional_properties_type_string","Case_030_one_of_object_variant_remove_additional_properties_type_string","Case_031_one_of_object_variant_change_additional_properties_string_to_false","Case_032_one_of_object_variant_change_additional_properties_false_to_string","Case_033_one_of_object_variant_add_additional_properties_type_number","Case_034_one_of_object_variant_remove_additional_properties_type_number","Case_035_one_of_object_variant_change_additional_properties_number_to_false","Case_036_one_of_object_variant_change_additional_properties_false_to_number","Case_037_one_of_object_variant_add_additional_properties_type_integer","Case_038_one_of_object_variant_remove_additional_properties_type_integer","Case_039_one_of_object_variant_change_additional_properties_integer_to_false","Case_040_one_of_object_variant_change_additional_properties_false_to_integer","Case_041_one_of_object_variant_add_additional_properties_type_boolean","Case_042_one_of_object_variant_remove_additional_properties_type_boolean","Case_043_one_of_object_variant_change_additional_properties_boolean_to_false","Case_044_one_of_object_variant_change_additional_properties_false_to_boolean","Case_045_one_of_object_variant_add_additional_properties_type_array","Case_046_one_of_object_variant_remove_additional_properties_type_array","Case_047_one_of_object_variant_change_additional_properties_array_to_false","Case_048_one_of_object_variant_change_additional_properties_false_to_array","Case_049_one_of_object_variant_add_additional_properties_type_object","Case_050_one_of_object_variant_remove_additional_properties_type_object","Case_051_one_of_object_variant_change_additional_properties_object_to_false","Case_052_one_of_object_variant_change_additional_properties_false_to_object"];export{n as Case_001_add_additional_properties_false,t as Case_002_remove_additional_properties_false,a as Case_003_add_additional_properties_type_string,r as Case_004_remove_additional_properties_type_string,i as Case_005_change_additional_properties_string_to_false,o as Case_006_change_additional_properties_false_to_string,p as Case_007_add_additional_properties_type_number,s as Case_008_remove_additional_properties_type_number,c as Case_009_change_additional_properties_number_to_false,d as Case_010_change_additional_properties_false_to_number,m as Case_011_add_additional_properties_type_integer,l as Case_012_remove_additional_properties_type_integer,_ as Case_013_change_additional_properties_integer_to_false,y as Case_014_change_additional_properties_false_to_integer,b as Case_015_add_additional_properties_type_boolean,f as Case_016_remove_additional_properties_type_boolean,h as Case_017_change_additional_properties_boolean_to_false,g as Case_018_change_additional_properties_false_to_boolean,u as Case_019_add_additional_properties_type_array,j as Case_020_remove_additional_properties_type_array,v as Case_021_change_additional_properties_array_to_false,P as Case_022_change_additional_properties_false_to_array,O as Case_023_add_additional_properties_type_object,S as Case_024_remove_additional_properties_type_object,w as Case_025_change_additional_properties_object_to_false,x as Case_026_change_additional_properties_false_to_object,C as Case_027_one_of_object_variant_add_additional_properties_false,I as Case_028_one_of_object_variant_remove_additional_properties_false,A as Case_029_one_of_object_variant_add_additional_properties_type_string,N as Case_030_one_of_object_variant_remove_additional_properties_type_string,R as Case_031_one_of_object_variant_change_additional_properties_string_to_false,L as Case_032_one_of_object_variant_change_additional_properties_false_to_string,q as Case_033_one_of_object_variant_add_additional_properties_type_number,z as Case_034_one_of_object_variant_remove_additional_properties_type_number,$ as Case_035_one_of_object_variant_change_additional_properties_number_to_false,D as Case_036_one_of_object_variant_change_additional_properties_false_to_number,J as Case_037_one_of_object_variant_add_additional_properties_type_integer,F as Case_038_one_of_object_variant_remove_additional_properties_type_integer,B as Case_039_one_of_object_variant_change_additional_properties_integer_to_false,T as Case_040_one_of_object_variant_change_additional_properties_false_to_integer,E as Case_041_one_of_object_variant_add_additional_properties_type_boolean,k as Case_042_one_of_object_variant_remove_additional_properties_type_boolean,G as Case_043_one_of_object_variant_change_additional_properties_boolean_to_false,H as Case_044_one_of_object_variant_change_additional_properties_false_to_boolean,K as Case_045_one_of_object_variant_add_additional_properties_type_array,M as Case_046_one_of_object_variant_remove_additional_properties_type_array,Q as Case_047_one_of_object_variant_change_additional_properties_array_to_false,U as Case_048_one_of_object_variant_change_additional_properties_false_to_array,V as Case_049_one_of_object_variant_add_additional_properties_type_object,W as Case_050_one_of_object_variant_remove_additional_properties_type_object,X as Case_051_one_of_object_variant_change_additional_properties_object_to_false,Y as Case_052_one_of_object_variant_change_additional_properties_false_to_object,hi as __namedExportsOrder,fi as default};
