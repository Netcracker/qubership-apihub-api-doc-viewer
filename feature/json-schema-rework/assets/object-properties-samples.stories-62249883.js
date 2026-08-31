import{c as ap}from"./diffs-samples-cases-1df1f3ae.js";import{c as op,J as tp,j as ip,a as pp}from"./json-schema-diffs-utils-d4d3f6eb.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-d419f785.js";import"./DiffBadge-636b527d.js";import"./IndexesNodeViewer-4998c03c.js";import"./DdlTableDiffsViewer-013fb4a5.js";/* empty css              */import"./DdlTableViewer-07ef28f2.js";import"./GraphQLOperationDiffViewer-ad5e8f40.js";import"./GraphPropNodeViewer-47a3eb3c.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-5f3933cf.js";import"./preprocess-6c565c6a.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const sp=`type: object
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

`,mp=`type: object
description: Object with 2 string property schema(s)
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
  prop1:
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

`,cp=`type: object
description: Object with 0 string property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,lp=`type: object
description: Object with 2 string property schema(s)
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
  prop1:
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

`,dp=`type: object
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

`,_p=`type: object
description: Object with 2 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  prop1:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,yp=`type: object
description: Object with 0 number property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,bp=`type: object
description: Object with 2 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  prop1:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,fp=`type: object
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

`,hp=`type: object
description: Object with 2 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  prop1:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,gp=`type: object
description: Object with 0 integer property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,up=`type: object
description: Object with 2 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  prop1:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,jp=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,vp=`type: object
description: Object with 2 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
  prop1:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Pp=`type: object
description: Object with 0 boolean property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Op=`type: object
description: Object with 2 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
  prop1:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,wp=`type: object
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

`,Sp=`type: object
description: Object with 2 array property schema(s)
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
  prop1:
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

`,xp=`type: object
description: Object with 0 array property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Cp=`type: object
description: Object with 2 array property schema(s)
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
  prop1:
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

`,Ip=`type: object
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

`,Ap=`type: object
description: Object with 2 object property schema(s)
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
  prop1:
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

`,Np=`type: object
description: Object with 0 object property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Rp=`type: object
description: Object with 2 object property schema(s)
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
  prop1:
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

`,Lp=`type: object
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

`,qp=`type: object
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

`,zp=`type: object
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

`,$p=`type: object
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

`,Dp=`type: object
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

`,Jp=`type: object
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

`,Fp=`type: object
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

`,Bp=`type: object
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

`,Tp=`type: object
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

`,Ep=`type: object
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

`,kp=`type: object
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

`,Gp=`type: object
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

`,Hp=`type: object
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

`,Kp=`type: object
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

`,Mp=`type: object
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

`,Qp=`type: object
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

`,Up=`type: object
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

`,Vp=`type: object
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

`,Wp=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Xp=`type: object
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

`,Yp=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Zp=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,es=`type: object
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

`,ns=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,rs=`type: object
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

`,ts=`type: object
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

`,as=`type: object
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

`,os=`type: object
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

`,is=`type: object
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

`,ps=`type: object
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

`,ss=`type: object
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

`,ms=`type: object
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

`,cs=`type: object
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

`,ls=`type: object
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

`,ds=`type: object
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

`,_s=`type: object
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

`,ys=`type: object
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

`,bs=`type: object
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

`,fs=`type: object
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

`,hs=`type: object
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

`,gs=`type: object
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

`,us=`type: object
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

`,js=`type: object
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

`,vs=`type: object
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

`,Ps=`type: object
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

`,Os=`type: object
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

`,ws=`type: object
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

`,Ss=`type: object
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

`,xs=`type: object
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

`,Cs=`type: object
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

`,Is=`type: object
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

`,As=`type: object
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

`,Ns=`type: object
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

`,Rs=`type: object
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

`,Ls=`type: object
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

`,qs=`type: object
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

`,zs=`type: object
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

`,$s=`type: object
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

`,Ds=`type: object
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

`,Js=`type: object
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

`,Fs=`type: object
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

`,Bs=`type: object
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

`,Ts=`type: object
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

`,Es=`type: object
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

`,ks=`type: object
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

`,Gs=`type: object
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

`,Hs=`type: object
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

`,Ks=`type: object
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

`,Ms=`type: object
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

`,Qs=`type: object
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

`,Us=`type: object
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

`,Vs=`type: object
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

`,Ws=`type: object
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

`,Xs=`type: object
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

`,Ys=`type: object
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

`,Zs=`type: object
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

`,em=`type: object
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

`,nm=`type: object
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

`,rm=`type: object
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

`,tm=`type: object
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

`,am=`type: object
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

`,om=`type: object
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

`,im=`type: object
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

`,pm=`type: object
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

`,sm=`type: object
description: Object with 2 string property schema(s)
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
  prop1:
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

`,mm=`type: object
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

`,cm=`type: object
description: Object with 2 string property schema(s)
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
  prop1:
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

`,lm=`type: object
description: Object with 0 string property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,dm=`type: object
description: Object with 2 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  prop1:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,_m=`type: object
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

`,ym=`type: object
description: Object with 2 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  prop1:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,bm=`type: object
description: Object with 0 number property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,fm=`type: object
description: Object with 2 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  prop1:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,hm=`type: object
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

`,gm=`type: object
description: Object with 2 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  prop1:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,um=`type: object
description: Object with 0 integer property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,jm=`type: object
description: Object with 2 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
  prop1:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,vm=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Pm=`type: object
description: Object with 2 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
  prop1:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Om=`type: object
description: Object with 0 boolean property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,wm=`type: object
description: Object with 2 array property schema(s)
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
  prop1:
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

`,Sm=`type: object
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

`,xm=`type: object
description: Object with 2 array property schema(s)
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
  prop1:
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

`,Cm=`type: object
description: Object with 0 array property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Im=`type: object
description: Object with 2 object property schema(s)
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
  prop1:
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

`,Am=`type: object
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

`,Nm=`type: object
description: Object with 2 object property schema(s)
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
  prop1:
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

`,Rm=`type: object
description: Object with 0 object property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Lm=`type: object
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

`,qm=`type: object
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

`,zm=`type: object
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

`,$m=`type: object
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

`,Dm=`type: object
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

`,Jm=`type: object
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

`,Fm=`type: object
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

`,Bm=`type: object
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

`,Tm=`type: object
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

`,Em=`type: object
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

`,km=`type: object
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

`,Gm=`type: object
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

`,Hm=`type: object
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

`,Km=`type: object
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

`,Mm=`type: object
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

`,Qm=`type: object
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

`,Um=`type: object
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

`,Vm=`type: object
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

`,Wm=`type: object
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

`,Xm=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Ym=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Zm=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,ec=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,nc=`type: object
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

`,rc=`type: object
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

`,tc=`type: object
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

`,ac=`type: object
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

`,oc=`type: object
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

`,ic=`type: object
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

`,pc=`type: object
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

`,sc=`type: object
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

`,mc=`type: object
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

`,cc=`type: object
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

`,lc=`type: object
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

`,dc=`type: object
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

`,_c=`type: object
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

`,yc=`type: object
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

`,bc=`type: object
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

`,fc=`type: object
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

`,hc=`type: object
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

`,gc=`type: object
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

`,uc=`type: object
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

`,jc=`type: object
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

`,vc=`type: object
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

`,Pc=`type: object
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

`,Oc=`type: object
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

`,wc=`type: object
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

`,Sc=`type: object
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

`,xc=`type: object
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

`,Cc=`type: object
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

`,Ic=`type: object
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

`,Ac=`type: object
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

`,Nc=`type: object
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

`,Rc=`type: object
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

`,Lc=`type: object
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

`,qc=`type: object
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

`,zc=`type: object
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

`,$c=`type: object
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

`,Dc=`type: object
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

`,Jc=`type: object
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

`,Fc=`type: object
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

`,Bc=`type: object
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

`,Tc=`type: object
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

`,Ec=`type: object
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

`,kc=`type: object
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

`,Gc=`type: object
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

`,Hc=`type: object
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

`,Kc=`type: object
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

`,Mc=`type: object
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

`,Qc=`type: object
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

`,Uc=`type: object
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

`,Vc=`type: object
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

`,Wc=`type: object
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

`,Xc=`type: object
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

`,Yc=`type: object
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

`,Zc=`type: object
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

`,el=`type: object
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

`,nl=`type: object
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

`,rl=`type: object
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

`,tl=`type: object
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

`,al=`type: object
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

`,ol=`type: object
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

`,il=`type: object
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

`,pl=`type: object
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

`,sl=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-properties/001-add-one-property-string/before.yaml":sp,"../../../../samples/json-schema-diffs/type-changes/object-properties/002-remove-one-property-string/before.yaml":mp,"../../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string/before.yaml":cp,"../../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string/before.yaml":lp,"../../../../samples/json-schema-diffs/type-changes/object-properties/005-add-one-property-number/before.yaml":dp,"../../../../samples/json-schema-diffs/type-changes/object-properties/006-remove-one-property-number/before.yaml":_p,"../../../../samples/json-schema-diffs/type-changes/object-properties/007-add-two-properties-number/before.yaml":yp,"../../../../samples/json-schema-diffs/type-changes/object-properties/008-remove-two-properties-number/before.yaml":bp,"../../../../samples/json-schema-diffs/type-changes/object-properties/009-add-one-property-integer/before.yaml":fp,"../../../../samples/json-schema-diffs/type-changes/object-properties/010-remove-one-property-integer/before.yaml":hp,"../../../../samples/json-schema-diffs/type-changes/object-properties/011-add-two-properties-integer/before.yaml":gp,"../../../../samples/json-schema-diffs/type-changes/object-properties/012-remove-two-properties-integer/before.yaml":up,"../../../../samples/json-schema-diffs/type-changes/object-properties/013-add-one-property-boolean/before.yaml":jp,"../../../../samples/json-schema-diffs/type-changes/object-properties/014-remove-one-property-boolean/before.yaml":vp,"../../../../samples/json-schema-diffs/type-changes/object-properties/015-add-two-properties-boolean/before.yaml":Pp,"../../../../samples/json-schema-diffs/type-changes/object-properties/016-remove-two-properties-boolean/before.yaml":Op,"../../../../samples/json-schema-diffs/type-changes/object-properties/017-add-one-property-array/before.yaml":wp,"../../../../samples/json-schema-diffs/type-changes/object-properties/018-remove-one-property-array/before.yaml":Sp,"../../../../samples/json-schema-diffs/type-changes/object-properties/019-add-two-properties-array/before.yaml":xp,"../../../../samples/json-schema-diffs/type-changes/object-properties/020-remove-two-properties-array/before.yaml":Cp,"../../../../samples/json-schema-diffs/type-changes/object-properties/021-add-one-property-object/before.yaml":Ip,"../../../../samples/json-schema-diffs/type-changes/object-properties/022-remove-one-property-object/before.yaml":Ap,"../../../../samples/json-schema-diffs/type-changes/object-properties/023-add-two-properties-object/before.yaml":Np,"../../../../samples/json-schema-diffs/type-changes/object-properties/024-remove-two-properties-object/before.yaml":Rp,"../../../../samples/json-schema-diffs/type-changes/object-properties/025-add-additional-properties-rule1-string/before.yaml":Lp,"../../../../samples/json-schema-diffs/type-changes/object-properties/026-remove-additional-properties-rule1-string/before.yaml":qp,"../../../../samples/json-schema-diffs/type-changes/object-properties/027-add-additional-properties-false-string/before.yaml":zp,"../../../../samples/json-schema-diffs/type-changes/object-properties/028-remove-additional-properties-false-string/before.yaml":$p,"../../../../samples/json-schema-diffs/type-changes/object-properties/029-change-additional-properties-rule1-to-false-string/before.yaml":Dp,"../../../../samples/json-schema-diffs/type-changes/object-properties/030-change-additional-properties-false-to-rule1-string/before.yaml":Jp,"../../../../samples/json-schema-diffs/type-changes/object-properties/031-add-additional-properties-rule1-number/before.yaml":Fp,"../../../../samples/json-schema-diffs/type-changes/object-properties/032-remove-additional-properties-rule1-number/before.yaml":Bp,"../../../../samples/json-schema-diffs/type-changes/object-properties/033-add-additional-properties-false-number/before.yaml":Tp,"../../../../samples/json-schema-diffs/type-changes/object-properties/034-remove-additional-properties-false-number/before.yaml":Ep,"../../../../samples/json-schema-diffs/type-changes/object-properties/035-change-additional-properties-rule1-to-false-number/before.yaml":kp,"../../../../samples/json-schema-diffs/type-changes/object-properties/036-change-additional-properties-false-to-rule1-number/before.yaml":Gp,"../../../../samples/json-schema-diffs/type-changes/object-properties/037-add-additional-properties-rule1-integer/before.yaml":Hp,"../../../../samples/json-schema-diffs/type-changes/object-properties/038-remove-additional-properties-rule1-integer/before.yaml":Kp,"../../../../samples/json-schema-diffs/type-changes/object-properties/039-add-additional-properties-false-integer/before.yaml":Mp,"../../../../samples/json-schema-diffs/type-changes/object-properties/040-remove-additional-properties-false-integer/before.yaml":Qp,"../../../../samples/json-schema-diffs/type-changes/object-properties/041-change-additional-properties-rule1-to-false-integer/before.yaml":Up,"../../../../samples/json-schema-diffs/type-changes/object-properties/042-change-additional-properties-false-to-rule1-integer/before.yaml":Vp,"../../../../samples/json-schema-diffs/type-changes/object-properties/043-add-additional-properties-rule1-boolean/before.yaml":Wp,"../../../../samples/json-schema-diffs/type-changes/object-properties/044-remove-additional-properties-rule1-boolean/before.yaml":Xp,"../../../../samples/json-schema-diffs/type-changes/object-properties/045-add-additional-properties-false-boolean/before.yaml":Yp,"../../../../samples/json-schema-diffs/type-changes/object-properties/046-remove-additional-properties-false-boolean/before.yaml":Zp,"../../../../samples/json-schema-diffs/type-changes/object-properties/047-change-additional-properties-rule1-to-false-boolean/before.yaml":es,"../../../../samples/json-schema-diffs/type-changes/object-properties/048-change-additional-properties-false-to-rule1-boolean/before.yaml":ns,"../../../../samples/json-schema-diffs/type-changes/object-properties/049-add-additional-properties-rule1-array/before.yaml":rs,"../../../../samples/json-schema-diffs/type-changes/object-properties/050-remove-additional-properties-rule1-array/before.yaml":ts,"../../../../samples/json-schema-diffs/type-changes/object-properties/051-add-additional-properties-false-array/before.yaml":as,"../../../../samples/json-schema-diffs/type-changes/object-properties/052-remove-additional-properties-false-array/before.yaml":os,"../../../../samples/json-schema-diffs/type-changes/object-properties/053-change-additional-properties-rule1-to-false-array/before.yaml":is,"../../../../samples/json-schema-diffs/type-changes/object-properties/054-change-additional-properties-false-to-rule1-array/before.yaml":ps,"../../../../samples/json-schema-diffs/type-changes/object-properties/055-add-additional-properties-rule1-object/before.yaml":ss,"../../../../samples/json-schema-diffs/type-changes/object-properties/056-remove-additional-properties-rule1-object/before.yaml":ms,"../../../../samples/json-schema-diffs/type-changes/object-properties/057-add-additional-properties-false-object/before.yaml":cs,"../../../../samples/json-schema-diffs/type-changes/object-properties/058-remove-additional-properties-false-object/before.yaml":ls,"../../../../samples/json-schema-diffs/type-changes/object-properties/059-change-additional-properties-rule1-to-false-object/before.yaml":ds,"../../../../samples/json-schema-diffs/type-changes/object-properties/060-change-additional-properties-false-to-rule1-object/before.yaml":_s,"../../../../samples/json-schema-diffs/type-changes/object-properties/061-one-of-variant2-added-string/before.yaml":ys,"../../../../samples/json-schema-diffs/type-changes/object-properties/062-one-of-variant2-removed-string/before.yaml":bs,"../../../../samples/json-schema-diffs/type-changes/object-properties/063-one-of-variant2-add-additional-properties-rule1-string/before.yaml":fs,"../../../../samples/json-schema-diffs/type-changes/object-properties/064-one-of-variant2-remove-additional-properties-rule1-string/before.yaml":hs,"../../../../samples/json-schema-diffs/type-changes/object-properties/065-one-of-variant2-add-additional-properties-false-string/before.yaml":gs,"../../../../samples/json-schema-diffs/type-changes/object-properties/066-one-of-variant2-remove-additional-properties-false-string/before.yaml":us,"../../../../samples/json-schema-diffs/type-changes/object-properties/067-one-of-variant2-change-additional-properties-rule1-to-false-string/before.yaml":js,"../../../../samples/json-schema-diffs/type-changes/object-properties/068-one-of-variant2-change-additional-properties-false-to-rule1-string/before.yaml":vs,"../../../../samples/json-schema-diffs/type-changes/object-properties/069-one-of-variant2-added-number/before.yaml":Ps,"../../../../samples/json-schema-diffs/type-changes/object-properties/070-one-of-variant2-removed-number/before.yaml":Os,"../../../../samples/json-schema-diffs/type-changes/object-properties/071-one-of-variant2-add-additional-properties-rule1-number/before.yaml":ws,"../../../../samples/json-schema-diffs/type-changes/object-properties/072-one-of-variant2-remove-additional-properties-rule1-number/before.yaml":Ss,"../../../../samples/json-schema-diffs/type-changes/object-properties/073-one-of-variant2-add-additional-properties-false-number/before.yaml":xs,"../../../../samples/json-schema-diffs/type-changes/object-properties/074-one-of-variant2-remove-additional-properties-false-number/before.yaml":Cs,"../../../../samples/json-schema-diffs/type-changes/object-properties/075-one-of-variant2-change-additional-properties-rule1-to-false-number/before.yaml":Is,"../../../../samples/json-schema-diffs/type-changes/object-properties/076-one-of-variant2-change-additional-properties-false-to-rule1-number/before.yaml":As,"../../../../samples/json-schema-diffs/type-changes/object-properties/077-one-of-variant2-added-integer/before.yaml":Ns,"../../../../samples/json-schema-diffs/type-changes/object-properties/078-one-of-variant2-removed-integer/before.yaml":Rs,"../../../../samples/json-schema-diffs/type-changes/object-properties/079-one-of-variant2-add-additional-properties-rule1-integer/before.yaml":Ls,"../../../../samples/json-schema-diffs/type-changes/object-properties/080-one-of-variant2-remove-additional-properties-rule1-integer/before.yaml":qs,"../../../../samples/json-schema-diffs/type-changes/object-properties/081-one-of-variant2-add-additional-properties-false-integer/before.yaml":zs,"../../../../samples/json-schema-diffs/type-changes/object-properties/082-one-of-variant2-remove-additional-properties-false-integer/before.yaml":$s,"../../../../samples/json-schema-diffs/type-changes/object-properties/083-one-of-variant2-change-additional-properties-rule1-to-false-integer/before.yaml":Ds,"../../../../samples/json-schema-diffs/type-changes/object-properties/084-one-of-variant2-change-additional-properties-false-to-rule1-integer/before.yaml":Js,"../../../../samples/json-schema-diffs/type-changes/object-properties/085-one-of-variant2-added-boolean/before.yaml":Fs,"../../../../samples/json-schema-diffs/type-changes/object-properties/086-one-of-variant2-removed-boolean/before.yaml":Bs,"../../../../samples/json-schema-diffs/type-changes/object-properties/087-one-of-variant2-add-additional-properties-rule1-boolean/before.yaml":Ts,"../../../../samples/json-schema-diffs/type-changes/object-properties/088-one-of-variant2-remove-additional-properties-rule1-boolean/before.yaml":Es,"../../../../samples/json-schema-diffs/type-changes/object-properties/089-one-of-variant2-add-additional-properties-false-boolean/before.yaml":ks,"../../../../samples/json-schema-diffs/type-changes/object-properties/090-one-of-variant2-remove-additional-properties-false-boolean/before.yaml":Gs,"../../../../samples/json-schema-diffs/type-changes/object-properties/091-one-of-variant2-change-additional-properties-rule1-to-false-boolean/before.yaml":Hs,"../../../../samples/json-schema-diffs/type-changes/object-properties/092-one-of-variant2-change-additional-properties-false-to-rule1-boolean/before.yaml":Ks,"../../../../samples/json-schema-diffs/type-changes/object-properties/093-one-of-variant2-added-array/before.yaml":Ms,"../../../../samples/json-schema-diffs/type-changes/object-properties/094-one-of-variant2-removed-array/before.yaml":Qs,"../../../../samples/json-schema-diffs/type-changes/object-properties/095-one-of-variant2-add-additional-properties-rule1-array/before.yaml":Us,"../../../../samples/json-schema-diffs/type-changes/object-properties/096-one-of-variant2-remove-additional-properties-rule1-array/before.yaml":Vs,"../../../../samples/json-schema-diffs/type-changes/object-properties/097-one-of-variant2-add-additional-properties-false-array/before.yaml":Ws,"../../../../samples/json-schema-diffs/type-changes/object-properties/098-one-of-variant2-remove-additional-properties-false-array/before.yaml":Xs,"../../../../samples/json-schema-diffs/type-changes/object-properties/099-one-of-variant2-change-additional-properties-rule1-to-false-array/before.yaml":Ys,"../../../../samples/json-schema-diffs/type-changes/object-properties/100-one-of-variant2-change-additional-properties-false-to-rule1-array/before.yaml":Zs,"../../../../samples/json-schema-diffs/type-changes/object-properties/101-one-of-variant2-added-object/before.yaml":em,"../../../../samples/json-schema-diffs/type-changes/object-properties/102-one-of-variant2-removed-object/before.yaml":nm,"../../../../samples/json-schema-diffs/type-changes/object-properties/103-one-of-variant2-add-additional-properties-rule1-object/before.yaml":rm,"../../../../samples/json-schema-diffs/type-changes/object-properties/104-one-of-variant2-remove-additional-properties-rule1-object/before.yaml":tm,"../../../../samples/json-schema-diffs/type-changes/object-properties/105-one-of-variant2-add-additional-properties-false-object/before.yaml":am,"../../../../samples/json-schema-diffs/type-changes/object-properties/106-one-of-variant2-remove-additional-properties-false-object/before.yaml":om,"../../../../samples/json-schema-diffs/type-changes/object-properties/107-one-of-variant2-change-additional-properties-rule1-to-false-object/before.yaml":im,"../../../../samples/json-schema-diffs/type-changes/object-properties/108-one-of-variant2-change-additional-properties-false-to-rule1-object/before.yaml":pm}),ml=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-properties/001-add-one-property-string/after.yaml":sm,"../../../../samples/json-schema-diffs/type-changes/object-properties/002-remove-one-property-string/after.yaml":mm,"../../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string/after.yaml":cm,"../../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string/after.yaml":lm,"../../../../samples/json-schema-diffs/type-changes/object-properties/005-add-one-property-number/after.yaml":dm,"../../../../samples/json-schema-diffs/type-changes/object-properties/006-remove-one-property-number/after.yaml":_m,"../../../../samples/json-schema-diffs/type-changes/object-properties/007-add-two-properties-number/after.yaml":ym,"../../../../samples/json-schema-diffs/type-changes/object-properties/008-remove-two-properties-number/after.yaml":bm,"../../../../samples/json-schema-diffs/type-changes/object-properties/009-add-one-property-integer/after.yaml":fm,"../../../../samples/json-schema-diffs/type-changes/object-properties/010-remove-one-property-integer/after.yaml":hm,"../../../../samples/json-schema-diffs/type-changes/object-properties/011-add-two-properties-integer/after.yaml":gm,"../../../../samples/json-schema-diffs/type-changes/object-properties/012-remove-two-properties-integer/after.yaml":um,"../../../../samples/json-schema-diffs/type-changes/object-properties/013-add-one-property-boolean/after.yaml":jm,"../../../../samples/json-schema-diffs/type-changes/object-properties/014-remove-one-property-boolean/after.yaml":vm,"../../../../samples/json-schema-diffs/type-changes/object-properties/015-add-two-properties-boolean/after.yaml":Pm,"../../../../samples/json-schema-diffs/type-changes/object-properties/016-remove-two-properties-boolean/after.yaml":Om,"../../../../samples/json-schema-diffs/type-changes/object-properties/017-add-one-property-array/after.yaml":wm,"../../../../samples/json-schema-diffs/type-changes/object-properties/018-remove-one-property-array/after.yaml":Sm,"../../../../samples/json-schema-diffs/type-changes/object-properties/019-add-two-properties-array/after.yaml":xm,"../../../../samples/json-schema-diffs/type-changes/object-properties/020-remove-two-properties-array/after.yaml":Cm,"../../../../samples/json-schema-diffs/type-changes/object-properties/021-add-one-property-object/after.yaml":Im,"../../../../samples/json-schema-diffs/type-changes/object-properties/022-remove-one-property-object/after.yaml":Am,"../../../../samples/json-schema-diffs/type-changes/object-properties/023-add-two-properties-object/after.yaml":Nm,"../../../../samples/json-schema-diffs/type-changes/object-properties/024-remove-two-properties-object/after.yaml":Rm,"../../../../samples/json-schema-diffs/type-changes/object-properties/025-add-additional-properties-rule1-string/after.yaml":Lm,"../../../../samples/json-schema-diffs/type-changes/object-properties/026-remove-additional-properties-rule1-string/after.yaml":qm,"../../../../samples/json-schema-diffs/type-changes/object-properties/027-add-additional-properties-false-string/after.yaml":zm,"../../../../samples/json-schema-diffs/type-changes/object-properties/028-remove-additional-properties-false-string/after.yaml":$m,"../../../../samples/json-schema-diffs/type-changes/object-properties/029-change-additional-properties-rule1-to-false-string/after.yaml":Dm,"../../../../samples/json-schema-diffs/type-changes/object-properties/030-change-additional-properties-false-to-rule1-string/after.yaml":Jm,"../../../../samples/json-schema-diffs/type-changes/object-properties/031-add-additional-properties-rule1-number/after.yaml":Fm,"../../../../samples/json-schema-diffs/type-changes/object-properties/032-remove-additional-properties-rule1-number/after.yaml":Bm,"../../../../samples/json-schema-diffs/type-changes/object-properties/033-add-additional-properties-false-number/after.yaml":Tm,"../../../../samples/json-schema-diffs/type-changes/object-properties/034-remove-additional-properties-false-number/after.yaml":Em,"../../../../samples/json-schema-diffs/type-changes/object-properties/035-change-additional-properties-rule1-to-false-number/after.yaml":km,"../../../../samples/json-schema-diffs/type-changes/object-properties/036-change-additional-properties-false-to-rule1-number/after.yaml":Gm,"../../../../samples/json-schema-diffs/type-changes/object-properties/037-add-additional-properties-rule1-integer/after.yaml":Hm,"../../../../samples/json-schema-diffs/type-changes/object-properties/038-remove-additional-properties-rule1-integer/after.yaml":Km,"../../../../samples/json-schema-diffs/type-changes/object-properties/039-add-additional-properties-false-integer/after.yaml":Mm,"../../../../samples/json-schema-diffs/type-changes/object-properties/040-remove-additional-properties-false-integer/after.yaml":Qm,"../../../../samples/json-schema-diffs/type-changes/object-properties/041-change-additional-properties-rule1-to-false-integer/after.yaml":Um,"../../../../samples/json-schema-diffs/type-changes/object-properties/042-change-additional-properties-false-to-rule1-integer/after.yaml":Vm,"../../../../samples/json-schema-diffs/type-changes/object-properties/043-add-additional-properties-rule1-boolean/after.yaml":Wm,"../../../../samples/json-schema-diffs/type-changes/object-properties/044-remove-additional-properties-rule1-boolean/after.yaml":Xm,"../../../../samples/json-schema-diffs/type-changes/object-properties/045-add-additional-properties-false-boolean/after.yaml":Ym,"../../../../samples/json-schema-diffs/type-changes/object-properties/046-remove-additional-properties-false-boolean/after.yaml":Zm,"../../../../samples/json-schema-diffs/type-changes/object-properties/047-change-additional-properties-rule1-to-false-boolean/after.yaml":ec,"../../../../samples/json-schema-diffs/type-changes/object-properties/048-change-additional-properties-false-to-rule1-boolean/after.yaml":nc,"../../../../samples/json-schema-diffs/type-changes/object-properties/049-add-additional-properties-rule1-array/after.yaml":rc,"../../../../samples/json-schema-diffs/type-changes/object-properties/050-remove-additional-properties-rule1-array/after.yaml":tc,"../../../../samples/json-schema-diffs/type-changes/object-properties/051-add-additional-properties-false-array/after.yaml":ac,"../../../../samples/json-schema-diffs/type-changes/object-properties/052-remove-additional-properties-false-array/after.yaml":oc,"../../../../samples/json-schema-diffs/type-changes/object-properties/053-change-additional-properties-rule1-to-false-array/after.yaml":ic,"../../../../samples/json-schema-diffs/type-changes/object-properties/054-change-additional-properties-false-to-rule1-array/after.yaml":pc,"../../../../samples/json-schema-diffs/type-changes/object-properties/055-add-additional-properties-rule1-object/after.yaml":sc,"../../../../samples/json-schema-diffs/type-changes/object-properties/056-remove-additional-properties-rule1-object/after.yaml":mc,"../../../../samples/json-schema-diffs/type-changes/object-properties/057-add-additional-properties-false-object/after.yaml":cc,"../../../../samples/json-schema-diffs/type-changes/object-properties/058-remove-additional-properties-false-object/after.yaml":lc,"../../../../samples/json-schema-diffs/type-changes/object-properties/059-change-additional-properties-rule1-to-false-object/after.yaml":dc,"../../../../samples/json-schema-diffs/type-changes/object-properties/060-change-additional-properties-false-to-rule1-object/after.yaml":_c,"../../../../samples/json-schema-diffs/type-changes/object-properties/061-one-of-variant2-added-string/after.yaml":yc,"../../../../samples/json-schema-diffs/type-changes/object-properties/062-one-of-variant2-removed-string/after.yaml":bc,"../../../../samples/json-schema-diffs/type-changes/object-properties/063-one-of-variant2-add-additional-properties-rule1-string/after.yaml":fc,"../../../../samples/json-schema-diffs/type-changes/object-properties/064-one-of-variant2-remove-additional-properties-rule1-string/after.yaml":hc,"../../../../samples/json-schema-diffs/type-changes/object-properties/065-one-of-variant2-add-additional-properties-false-string/after.yaml":gc,"../../../../samples/json-schema-diffs/type-changes/object-properties/066-one-of-variant2-remove-additional-properties-false-string/after.yaml":uc,"../../../../samples/json-schema-diffs/type-changes/object-properties/067-one-of-variant2-change-additional-properties-rule1-to-false-string/after.yaml":jc,"../../../../samples/json-schema-diffs/type-changes/object-properties/068-one-of-variant2-change-additional-properties-false-to-rule1-string/after.yaml":vc,"../../../../samples/json-schema-diffs/type-changes/object-properties/069-one-of-variant2-added-number/after.yaml":Pc,"../../../../samples/json-schema-diffs/type-changes/object-properties/070-one-of-variant2-removed-number/after.yaml":Oc,"../../../../samples/json-schema-diffs/type-changes/object-properties/071-one-of-variant2-add-additional-properties-rule1-number/after.yaml":wc,"../../../../samples/json-schema-diffs/type-changes/object-properties/072-one-of-variant2-remove-additional-properties-rule1-number/after.yaml":Sc,"../../../../samples/json-schema-diffs/type-changes/object-properties/073-one-of-variant2-add-additional-properties-false-number/after.yaml":xc,"../../../../samples/json-schema-diffs/type-changes/object-properties/074-one-of-variant2-remove-additional-properties-false-number/after.yaml":Cc,"../../../../samples/json-schema-diffs/type-changes/object-properties/075-one-of-variant2-change-additional-properties-rule1-to-false-number/after.yaml":Ic,"../../../../samples/json-schema-diffs/type-changes/object-properties/076-one-of-variant2-change-additional-properties-false-to-rule1-number/after.yaml":Ac,"../../../../samples/json-schema-diffs/type-changes/object-properties/077-one-of-variant2-added-integer/after.yaml":Nc,"../../../../samples/json-schema-diffs/type-changes/object-properties/078-one-of-variant2-removed-integer/after.yaml":Rc,"../../../../samples/json-schema-diffs/type-changes/object-properties/079-one-of-variant2-add-additional-properties-rule1-integer/after.yaml":Lc,"../../../../samples/json-schema-diffs/type-changes/object-properties/080-one-of-variant2-remove-additional-properties-rule1-integer/after.yaml":qc,"../../../../samples/json-schema-diffs/type-changes/object-properties/081-one-of-variant2-add-additional-properties-false-integer/after.yaml":zc,"../../../../samples/json-schema-diffs/type-changes/object-properties/082-one-of-variant2-remove-additional-properties-false-integer/after.yaml":$c,"../../../../samples/json-schema-diffs/type-changes/object-properties/083-one-of-variant2-change-additional-properties-rule1-to-false-integer/after.yaml":Dc,"../../../../samples/json-schema-diffs/type-changes/object-properties/084-one-of-variant2-change-additional-properties-false-to-rule1-integer/after.yaml":Jc,"../../../../samples/json-schema-diffs/type-changes/object-properties/085-one-of-variant2-added-boolean/after.yaml":Fc,"../../../../samples/json-schema-diffs/type-changes/object-properties/086-one-of-variant2-removed-boolean/after.yaml":Bc,"../../../../samples/json-schema-diffs/type-changes/object-properties/087-one-of-variant2-add-additional-properties-rule1-boolean/after.yaml":Tc,"../../../../samples/json-schema-diffs/type-changes/object-properties/088-one-of-variant2-remove-additional-properties-rule1-boolean/after.yaml":Ec,"../../../../samples/json-schema-diffs/type-changes/object-properties/089-one-of-variant2-add-additional-properties-false-boolean/after.yaml":kc,"../../../../samples/json-schema-diffs/type-changes/object-properties/090-one-of-variant2-remove-additional-properties-false-boolean/after.yaml":Gc,"../../../../samples/json-schema-diffs/type-changes/object-properties/091-one-of-variant2-change-additional-properties-rule1-to-false-boolean/after.yaml":Hc,"../../../../samples/json-schema-diffs/type-changes/object-properties/092-one-of-variant2-change-additional-properties-false-to-rule1-boolean/after.yaml":Kc,"../../../../samples/json-schema-diffs/type-changes/object-properties/093-one-of-variant2-added-array/after.yaml":Mc,"../../../../samples/json-schema-diffs/type-changes/object-properties/094-one-of-variant2-removed-array/after.yaml":Qc,"../../../../samples/json-schema-diffs/type-changes/object-properties/095-one-of-variant2-add-additional-properties-rule1-array/after.yaml":Uc,"../../../../samples/json-schema-diffs/type-changes/object-properties/096-one-of-variant2-remove-additional-properties-rule1-array/after.yaml":Vc,"../../../../samples/json-schema-diffs/type-changes/object-properties/097-one-of-variant2-add-additional-properties-false-array/after.yaml":Wc,"../../../../samples/json-schema-diffs/type-changes/object-properties/098-one-of-variant2-remove-additional-properties-false-array/after.yaml":Xc,"../../../../samples/json-schema-diffs/type-changes/object-properties/099-one-of-variant2-change-additional-properties-rule1-to-false-array/after.yaml":Yc,"../../../../samples/json-schema-diffs/type-changes/object-properties/100-one-of-variant2-change-additional-properties-false-to-rule1-array/after.yaml":Zc,"../../../../samples/json-schema-diffs/type-changes/object-properties/101-one-of-variant2-added-object/after.yaml":el,"../../../../samples/json-schema-diffs/type-changes/object-properties/102-one-of-variant2-removed-object/after.yaml":nl,"../../../../samples/json-schema-diffs/type-changes/object-properties/103-one-of-variant2-add-additional-properties-rule1-object/after.yaml":rl,"../../../../samples/json-schema-diffs/type-changes/object-properties/104-one-of-variant2-remove-additional-properties-rule1-object/after.yaml":tl,"../../../../samples/json-schema-diffs/type-changes/object-properties/105-one-of-variant2-add-additional-properties-false-object/after.yaml":al,"../../../../samples/json-schema-diffs/type-changes/object-properties/106-one-of-variant2-remove-additional-properties-false-object/after.yaml":ol,"../../../../samples/json-schema-diffs/type-changes/object-properties/107-one-of-variant2-change-additional-properties-rule1-to-false-object/after.yaml":il,"../../../../samples/json-schema-diffs/type-changes/object-properties/108-one-of-variant2-change-additional-properties-false-to-rule1-object/after.yaml":pl}),cl=ap(sl,ml),ll=op(cl),Al={title:"JSON Schema Diffs Suite/Object Properties Samples",component:tp,argTypes:ip},e=pp(tp,ll),n=e("001-add-one-property-string"),r=e("002-remove-one-property-string"),t=e("003-add-two-properties-string"),a=e("004-remove-two-properties-string"),o=e("005-add-one-property-number"),i=e("006-remove-one-property-number"),p=e("007-add-two-properties-number"),s=e("008-remove-two-properties-number"),m=e("009-add-one-property-integer"),c=e("010-remove-one-property-integer"),l=e("011-add-two-properties-integer"),d=e("012-remove-two-properties-integer"),_=e("013-add-one-property-boolean"),y=e("014-remove-one-property-boolean"),b=e("015-add-two-properties-boolean"),f=e("016-remove-two-properties-boolean"),h=e("017-add-one-property-array"),g=e("018-remove-one-property-array"),u=e("019-add-two-properties-array"),j=e("020-remove-two-properties-array"),v=e("021-add-one-property-object"),P=e("022-remove-one-property-object"),O=e("023-add-two-properties-object"),w=e("024-remove-two-properties-object"),S=e("025-add-additional-properties-rule1-string"),x=e("026-remove-additional-properties-rule1-string"),C=e("027-add-additional-properties-false-string"),I=e("028-remove-additional-properties-false-string"),A=e("029-change-additional-properties-rule1-to-false-string"),N=e("030-change-additional-properties-false-to-rule1-string"),R=e("031-add-additional-properties-rule1-number"),L=e("032-remove-additional-properties-rule1-number"),q=e("033-add-additional-properties-false-number"),z=e("034-remove-additional-properties-false-number"),$=e("035-change-additional-properties-rule1-to-false-number"),D=e("036-change-additional-properties-false-to-rule1-number"),J=e("037-add-additional-properties-rule1-integer"),F=e("038-remove-additional-properties-rule1-integer"),B=e("039-add-additional-properties-false-integer"),T=e("040-remove-additional-properties-false-integer"),E=e("041-change-additional-properties-rule1-to-false-integer"),k=e("042-change-additional-properties-false-to-rule1-integer"),G=e("043-add-additional-properties-rule1-boolean"),H=e("044-remove-additional-properties-rule1-boolean"),K=e("045-add-additional-properties-false-boolean"),M=e("046-remove-additional-properties-false-boolean"),Q=e("047-change-additional-properties-rule1-to-false-boolean"),U=e("048-change-additional-properties-false-to-rule1-boolean"),V=e("049-add-additional-properties-rule1-array"),W=e("050-remove-additional-properties-rule1-array"),X=e("051-add-additional-properties-false-array"),Y=e("052-remove-additional-properties-false-array"),Z=e("053-change-additional-properties-rule1-to-false-array"),ee=e("054-change-additional-properties-false-to-rule1-array"),ne=e("055-add-additional-properties-rule1-object"),re=e("056-remove-additional-properties-rule1-object"),te=e("057-add-additional-properties-false-object"),ae=e("058-remove-additional-properties-false-object"),oe=e("059-change-additional-properties-rule1-to-false-object"),ie=e("060-change-additional-properties-false-to-rule1-object"),pe=e("061-one-of-variant2-added-string"),se=e("062-one-of-variant2-removed-string"),me=e("063-one-of-variant2-add-additional-properties-rule1-string"),ce=e("064-one-of-variant2-remove-additional-properties-rule1-string"),le=e("065-one-of-variant2-add-additional-properties-false-string"),de=e("066-one-of-variant2-remove-additional-properties-false-string"),_e=e("067-one-of-variant2-change-additional-properties-rule1-to-false-string"),ye=e("068-one-of-variant2-change-additional-properties-false-to-rule1-string"),be=e("069-one-of-variant2-added-number"),fe=e("070-one-of-variant2-removed-number"),he=e("071-one-of-variant2-add-additional-properties-rule1-number"),ge=e("072-one-of-variant2-remove-additional-properties-rule1-number"),ue=e("073-one-of-variant2-add-additional-properties-false-number"),je=e("074-one-of-variant2-remove-additional-properties-false-number"),ve=e("075-one-of-variant2-change-additional-properties-rule1-to-false-number"),Pe=e("076-one-of-variant2-change-additional-properties-false-to-rule1-number"),Oe=e("077-one-of-variant2-added-integer"),we=e("078-one-of-variant2-removed-integer"),Se=e("079-one-of-variant2-add-additional-properties-rule1-integer"),xe=e("080-one-of-variant2-remove-additional-properties-rule1-integer"),Ce=e("081-one-of-variant2-add-additional-properties-false-integer"),Ie=e("082-one-of-variant2-remove-additional-properties-false-integer"),Ae=e("083-one-of-variant2-change-additional-properties-rule1-to-false-integer"),Ne=e("084-one-of-variant2-change-additional-properties-false-to-rule1-integer"),Re=e("085-one-of-variant2-added-boolean"),Le=e("086-one-of-variant2-removed-boolean"),qe=e("087-one-of-variant2-add-additional-properties-rule1-boolean"),ze=e("088-one-of-variant2-remove-additional-properties-rule1-boolean"),$e=e("089-one-of-variant2-add-additional-properties-false-boolean"),De=e("090-one-of-variant2-remove-additional-properties-false-boolean"),Je=e("091-one-of-variant2-change-additional-properties-rule1-to-false-boolean"),Fe=e("092-one-of-variant2-change-additional-properties-false-to-rule1-boolean"),Be=e("093-one-of-variant2-added-array"),Te=e("094-one-of-variant2-removed-array"),Ee=e("095-one-of-variant2-add-additional-properties-rule1-array"),ke=e("096-one-of-variant2-remove-additional-properties-rule1-array"),Ge=e("097-one-of-variant2-add-additional-properties-false-array"),He=e("098-one-of-variant2-remove-additional-properties-false-array"),Ke=e("099-one-of-variant2-change-additional-properties-rule1-to-false-array"),Me=e("100-one-of-variant2-change-additional-properties-false-to-rule1-array"),Qe=e("101-one-of-variant2-added-object"),Ue=e("102-one-of-variant2-removed-object"),Ve=e("103-one-of-variant2-add-additional-properties-rule1-object"),We=e("104-one-of-variant2-remove-additional-properties-rule1-object"),Xe=e("105-one-of-variant2-add-additional-properties-false-object"),Ye=e("106-one-of-variant2-remove-additional-properties-false-object"),Ze=e("107-one-of-variant2-change-additional-properties-rule1-to-false-object"),en=e("108-one-of-variant2-change-additional-properties-false-to-rule1-object");var nn,rn,tn;n.parameters={...n.parameters,docs:{...(nn=n.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("001-add-one-property-string")',...(tn=(rn=n.parameters)==null?void 0:rn.docs)==null?void 0:tn.source}}};var an,on,pn;r.parameters={...r.parameters,docs:{...(an=r.parameters)==null?void 0:an.docs,source:{originalSource:'createCaseStory("002-remove-one-property-string")',...(pn=(on=r.parameters)==null?void 0:on.docs)==null?void 0:pn.source}}};var sn,mn,cn;t.parameters={...t.parameters,docs:{...(sn=t.parameters)==null?void 0:sn.docs,source:{originalSource:'createCaseStory("003-add-two-properties-string")',...(cn=(mn=t.parameters)==null?void 0:mn.docs)==null?void 0:cn.source}}};var ln,dn,_n;a.parameters={...a.parameters,docs:{...(ln=a.parameters)==null?void 0:ln.docs,source:{originalSource:'createCaseStory("004-remove-two-properties-string")',...(_n=(dn=a.parameters)==null?void 0:dn.docs)==null?void 0:_n.source}}};var yn,bn,fn;o.parameters={...o.parameters,docs:{...(yn=o.parameters)==null?void 0:yn.docs,source:{originalSource:'createCaseStory("005-add-one-property-number")',...(fn=(bn=o.parameters)==null?void 0:bn.docs)==null?void 0:fn.source}}};var hn,gn,un;i.parameters={...i.parameters,docs:{...(hn=i.parameters)==null?void 0:hn.docs,source:{originalSource:'createCaseStory("006-remove-one-property-number")',...(un=(gn=i.parameters)==null?void 0:gn.docs)==null?void 0:un.source}}};var jn,vn,Pn;p.parameters={...p.parameters,docs:{...(jn=p.parameters)==null?void 0:jn.docs,source:{originalSource:'createCaseStory("007-add-two-properties-number")',...(Pn=(vn=p.parameters)==null?void 0:vn.docs)==null?void 0:Pn.source}}};var On,wn,Sn;s.parameters={...s.parameters,docs:{...(On=s.parameters)==null?void 0:On.docs,source:{originalSource:'createCaseStory("008-remove-two-properties-number")',...(Sn=(wn=s.parameters)==null?void 0:wn.docs)==null?void 0:Sn.source}}};var xn,Cn,In;m.parameters={...m.parameters,docs:{...(xn=m.parameters)==null?void 0:xn.docs,source:{originalSource:'createCaseStory("009-add-one-property-integer")',...(In=(Cn=m.parameters)==null?void 0:Cn.docs)==null?void 0:In.source}}};var An,Nn,Rn;c.parameters={...c.parameters,docs:{...(An=c.parameters)==null?void 0:An.docs,source:{originalSource:'createCaseStory("010-remove-one-property-integer")',...(Rn=(Nn=c.parameters)==null?void 0:Nn.docs)==null?void 0:Rn.source}}};var Ln,qn,zn;l.parameters={...l.parameters,docs:{...(Ln=l.parameters)==null?void 0:Ln.docs,source:{originalSource:'createCaseStory("011-add-two-properties-integer")',...(zn=(qn=l.parameters)==null?void 0:qn.docs)==null?void 0:zn.source}}};var $n,Dn,Jn;d.parameters={...d.parameters,docs:{...($n=d.parameters)==null?void 0:$n.docs,source:{originalSource:'createCaseStory("012-remove-two-properties-integer")',...(Jn=(Dn=d.parameters)==null?void 0:Dn.docs)==null?void 0:Jn.source}}};var Fn,Bn,Tn;_.parameters={..._.parameters,docs:{...(Fn=_.parameters)==null?void 0:Fn.docs,source:{originalSource:'createCaseStory("013-add-one-property-boolean")',...(Tn=(Bn=_.parameters)==null?void 0:Bn.docs)==null?void 0:Tn.source}}};var En,kn,Gn;y.parameters={...y.parameters,docs:{...(En=y.parameters)==null?void 0:En.docs,source:{originalSource:'createCaseStory("014-remove-one-property-boolean")',...(Gn=(kn=y.parameters)==null?void 0:kn.docs)==null?void 0:Gn.source}}};var Hn,Kn,Mn;b.parameters={...b.parameters,docs:{...(Hn=b.parameters)==null?void 0:Hn.docs,source:{originalSource:'createCaseStory("015-add-two-properties-boolean")',...(Mn=(Kn=b.parameters)==null?void 0:Kn.docs)==null?void 0:Mn.source}}};var Qn,Un,Vn;f.parameters={...f.parameters,docs:{...(Qn=f.parameters)==null?void 0:Qn.docs,source:{originalSource:'createCaseStory("016-remove-two-properties-boolean")',...(Vn=(Un=f.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source}}};var Wn,Xn,Yn;h.parameters={...h.parameters,docs:{...(Wn=h.parameters)==null?void 0:Wn.docs,source:{originalSource:'createCaseStory("017-add-one-property-array")',...(Yn=(Xn=h.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Zn,er,nr;g.parameters={...g.parameters,docs:{...(Zn=g.parameters)==null?void 0:Zn.docs,source:{originalSource:'createCaseStory("018-remove-one-property-array")',...(nr=(er=g.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,tr,ar;u.parameters={...u.parameters,docs:{...(rr=u.parameters)==null?void 0:rr.docs,source:{originalSource:'createCaseStory("019-add-two-properties-array")',...(ar=(tr=u.parameters)==null?void 0:tr.docs)==null?void 0:ar.source}}};var or,ir,pr;j.parameters={...j.parameters,docs:{...(or=j.parameters)==null?void 0:or.docs,source:{originalSource:'createCaseStory("020-remove-two-properties-array")',...(pr=(ir=j.parameters)==null?void 0:ir.docs)==null?void 0:pr.source}}};var sr,mr,cr;v.parameters={...v.parameters,docs:{...(sr=v.parameters)==null?void 0:sr.docs,source:{originalSource:'createCaseStory("021-add-one-property-object")',...(cr=(mr=v.parameters)==null?void 0:mr.docs)==null?void 0:cr.source}}};var lr,dr,_r;P.parameters={...P.parameters,docs:{...(lr=P.parameters)==null?void 0:lr.docs,source:{originalSource:'createCaseStory("022-remove-one-property-object")',...(_r=(dr=P.parameters)==null?void 0:dr.docs)==null?void 0:_r.source}}};var yr,br,fr;O.parameters={...O.parameters,docs:{...(yr=O.parameters)==null?void 0:yr.docs,source:{originalSource:'createCaseStory("023-add-two-properties-object")',...(fr=(br=O.parameters)==null?void 0:br.docs)==null?void 0:fr.source}}};var hr,gr,ur;w.parameters={...w.parameters,docs:{...(hr=w.parameters)==null?void 0:hr.docs,source:{originalSource:'createCaseStory("024-remove-two-properties-object")',...(ur=(gr=w.parameters)==null?void 0:gr.docs)==null?void 0:ur.source}}};var jr,vr,Pr;S.parameters={...S.parameters,docs:{...(jr=S.parameters)==null?void 0:jr.docs,source:{originalSource:'createCaseStory("025-add-additional-properties-rule1-string")',...(Pr=(vr=S.parameters)==null?void 0:vr.docs)==null?void 0:Pr.source}}};var Or,wr,Sr;x.parameters={...x.parameters,docs:{...(Or=x.parameters)==null?void 0:Or.docs,source:{originalSource:'createCaseStory("026-remove-additional-properties-rule1-string")',...(Sr=(wr=x.parameters)==null?void 0:wr.docs)==null?void 0:Sr.source}}};var xr,Cr,Ir;C.parameters={...C.parameters,docs:{...(xr=C.parameters)==null?void 0:xr.docs,source:{originalSource:'createCaseStory("027-add-additional-properties-false-string")',...(Ir=(Cr=C.parameters)==null?void 0:Cr.docs)==null?void 0:Ir.source}}};var Ar,Nr,Rr;I.parameters={...I.parameters,docs:{...(Ar=I.parameters)==null?void 0:Ar.docs,source:{originalSource:'createCaseStory("028-remove-additional-properties-false-string")',...(Rr=(Nr=I.parameters)==null?void 0:Nr.docs)==null?void 0:Rr.source}}};var Lr,qr,zr;A.parameters={...A.parameters,docs:{...(Lr=A.parameters)==null?void 0:Lr.docs,source:{originalSource:'createCaseStory("029-change-additional-properties-rule1-to-false-string")',...(zr=(qr=A.parameters)==null?void 0:qr.docs)==null?void 0:zr.source}}};var $r,Dr,Jr;N.parameters={...N.parameters,docs:{...($r=N.parameters)==null?void 0:$r.docs,source:{originalSource:'createCaseStory("030-change-additional-properties-false-to-rule1-string")',...(Jr=(Dr=N.parameters)==null?void 0:Dr.docs)==null?void 0:Jr.source}}};var Fr,Br,Tr;R.parameters={...R.parameters,docs:{...(Fr=R.parameters)==null?void 0:Fr.docs,source:{originalSource:'createCaseStory("031-add-additional-properties-rule1-number")',...(Tr=(Br=R.parameters)==null?void 0:Br.docs)==null?void 0:Tr.source}}};var Er,kr,Gr;L.parameters={...L.parameters,docs:{...(Er=L.parameters)==null?void 0:Er.docs,source:{originalSource:'createCaseStory("032-remove-additional-properties-rule1-number")',...(Gr=(kr=L.parameters)==null?void 0:kr.docs)==null?void 0:Gr.source}}};var Hr,Kr,Mr;q.parameters={...q.parameters,docs:{...(Hr=q.parameters)==null?void 0:Hr.docs,source:{originalSource:'createCaseStory("033-add-additional-properties-false-number")',...(Mr=(Kr=q.parameters)==null?void 0:Kr.docs)==null?void 0:Mr.source}}};var Qr,Ur,Vr;z.parameters={...z.parameters,docs:{...(Qr=z.parameters)==null?void 0:Qr.docs,source:{originalSource:'createCaseStory("034-remove-additional-properties-false-number")',...(Vr=(Ur=z.parameters)==null?void 0:Ur.docs)==null?void 0:Vr.source}}};var Wr,Xr,Yr;$.parameters={...$.parameters,docs:{...(Wr=$.parameters)==null?void 0:Wr.docs,source:{originalSource:'createCaseStory("035-change-additional-properties-rule1-to-false-number")',...(Yr=(Xr=$.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.source}}};var Zr,et,nt;D.parameters={...D.parameters,docs:{...(Zr=D.parameters)==null?void 0:Zr.docs,source:{originalSource:'createCaseStory("036-change-additional-properties-false-to-rule1-number")',...(nt=(et=D.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var rt,tt,at;J.parameters={...J.parameters,docs:{...(rt=J.parameters)==null?void 0:rt.docs,source:{originalSource:'createCaseStory("037-add-additional-properties-rule1-integer")',...(at=(tt=J.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var ot,it,pt;F.parameters={...F.parameters,docs:{...(ot=F.parameters)==null?void 0:ot.docs,source:{originalSource:'createCaseStory("038-remove-additional-properties-rule1-integer")',...(pt=(it=F.parameters)==null?void 0:it.docs)==null?void 0:pt.source}}};var st,mt,ct;B.parameters={...B.parameters,docs:{...(st=B.parameters)==null?void 0:st.docs,source:{originalSource:'createCaseStory("039-add-additional-properties-false-integer")',...(ct=(mt=B.parameters)==null?void 0:mt.docs)==null?void 0:ct.source}}};var lt,dt,_t;T.parameters={...T.parameters,docs:{...(lt=T.parameters)==null?void 0:lt.docs,source:{originalSource:'createCaseStory("040-remove-additional-properties-false-integer")',...(_t=(dt=T.parameters)==null?void 0:dt.docs)==null?void 0:_t.source}}};var yt,bt,ft;E.parameters={...E.parameters,docs:{...(yt=E.parameters)==null?void 0:yt.docs,source:{originalSource:'createCaseStory("041-change-additional-properties-rule1-to-false-integer")',...(ft=(bt=E.parameters)==null?void 0:bt.docs)==null?void 0:ft.source}}};var ht,gt,ut;k.parameters={...k.parameters,docs:{...(ht=k.parameters)==null?void 0:ht.docs,source:{originalSource:'createCaseStory("042-change-additional-properties-false-to-rule1-integer")',...(ut=(gt=k.parameters)==null?void 0:gt.docs)==null?void 0:ut.source}}};var jt,vt,Pt;G.parameters={...G.parameters,docs:{...(jt=G.parameters)==null?void 0:jt.docs,source:{originalSource:'createCaseStory("043-add-additional-properties-rule1-boolean")',...(Pt=(vt=G.parameters)==null?void 0:vt.docs)==null?void 0:Pt.source}}};var Ot,wt,St;H.parameters={...H.parameters,docs:{...(Ot=H.parameters)==null?void 0:Ot.docs,source:{originalSource:'createCaseStory("044-remove-additional-properties-rule1-boolean")',...(St=(wt=H.parameters)==null?void 0:wt.docs)==null?void 0:St.source}}};var xt,Ct,It;K.parameters={...K.parameters,docs:{...(xt=K.parameters)==null?void 0:xt.docs,source:{originalSource:'createCaseStory("045-add-additional-properties-false-boolean")',...(It=(Ct=K.parameters)==null?void 0:Ct.docs)==null?void 0:It.source}}};var At,Nt,Rt;M.parameters={...M.parameters,docs:{...(At=M.parameters)==null?void 0:At.docs,source:{originalSource:'createCaseStory("046-remove-additional-properties-false-boolean")',...(Rt=(Nt=M.parameters)==null?void 0:Nt.docs)==null?void 0:Rt.source}}};var Lt,qt,zt;Q.parameters={...Q.parameters,docs:{...(Lt=Q.parameters)==null?void 0:Lt.docs,source:{originalSource:'createCaseStory("047-change-additional-properties-rule1-to-false-boolean")',...(zt=(qt=Q.parameters)==null?void 0:qt.docs)==null?void 0:zt.source}}};var $t,Dt,Jt;U.parameters={...U.parameters,docs:{...($t=U.parameters)==null?void 0:$t.docs,source:{originalSource:'createCaseStory("048-change-additional-properties-false-to-rule1-boolean")',...(Jt=(Dt=U.parameters)==null?void 0:Dt.docs)==null?void 0:Jt.source}}};var Ft,Bt,Tt;V.parameters={...V.parameters,docs:{...(Ft=V.parameters)==null?void 0:Ft.docs,source:{originalSource:'createCaseStory("049-add-additional-properties-rule1-array")',...(Tt=(Bt=V.parameters)==null?void 0:Bt.docs)==null?void 0:Tt.source}}};var Et,kt,Gt;W.parameters={...W.parameters,docs:{...(Et=W.parameters)==null?void 0:Et.docs,source:{originalSource:'createCaseStory("050-remove-additional-properties-rule1-array")',...(Gt=(kt=W.parameters)==null?void 0:kt.docs)==null?void 0:Gt.source}}};var Ht,Kt,Mt;X.parameters={...X.parameters,docs:{...(Ht=X.parameters)==null?void 0:Ht.docs,source:{originalSource:'createCaseStory("051-add-additional-properties-false-array")',...(Mt=(Kt=X.parameters)==null?void 0:Kt.docs)==null?void 0:Mt.source}}};var Qt,Ut,Vt;Y.parameters={...Y.parameters,docs:{...(Qt=Y.parameters)==null?void 0:Qt.docs,source:{originalSource:'createCaseStory("052-remove-additional-properties-false-array")',...(Vt=(Ut=Y.parameters)==null?void 0:Ut.docs)==null?void 0:Vt.source}}};var Wt,Xt,Yt;Z.parameters={...Z.parameters,docs:{...(Wt=Z.parameters)==null?void 0:Wt.docs,source:{originalSource:'createCaseStory("053-change-additional-properties-rule1-to-false-array")',...(Yt=(Xt=Z.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};var Zt,ea,na;ee.parameters={...ee.parameters,docs:{...(Zt=ee.parameters)==null?void 0:Zt.docs,source:{originalSource:'createCaseStory("054-change-additional-properties-false-to-rule1-array")',...(na=(ea=ee.parameters)==null?void 0:ea.docs)==null?void 0:na.source}}};var ra,ta,aa;ne.parameters={...ne.parameters,docs:{...(ra=ne.parameters)==null?void 0:ra.docs,source:{originalSource:'createCaseStory("055-add-additional-properties-rule1-object")',...(aa=(ta=ne.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var oa,ia,pa;re.parameters={...re.parameters,docs:{...(oa=re.parameters)==null?void 0:oa.docs,source:{originalSource:'createCaseStory("056-remove-additional-properties-rule1-object")',...(pa=(ia=re.parameters)==null?void 0:ia.docs)==null?void 0:pa.source}}};var sa,ma,ca;te.parameters={...te.parameters,docs:{...(sa=te.parameters)==null?void 0:sa.docs,source:{originalSource:'createCaseStory("057-add-additional-properties-false-object")',...(ca=(ma=te.parameters)==null?void 0:ma.docs)==null?void 0:ca.source}}};var la,da,_a;ae.parameters={...ae.parameters,docs:{...(la=ae.parameters)==null?void 0:la.docs,source:{originalSource:'createCaseStory("058-remove-additional-properties-false-object")',...(_a=(da=ae.parameters)==null?void 0:da.docs)==null?void 0:_a.source}}};var ya,ba,fa;oe.parameters={...oe.parameters,docs:{...(ya=oe.parameters)==null?void 0:ya.docs,source:{originalSource:'createCaseStory("059-change-additional-properties-rule1-to-false-object")',...(fa=(ba=oe.parameters)==null?void 0:ba.docs)==null?void 0:fa.source}}};var ha,ga,ua;ie.parameters={...ie.parameters,docs:{...(ha=ie.parameters)==null?void 0:ha.docs,source:{originalSource:'createCaseStory("060-change-additional-properties-false-to-rule1-object")',...(ua=(ga=ie.parameters)==null?void 0:ga.docs)==null?void 0:ua.source}}};var ja,va,Pa;pe.parameters={...pe.parameters,docs:{...(ja=pe.parameters)==null?void 0:ja.docs,source:{originalSource:'createCaseStory("061-one-of-variant2-added-string")',...(Pa=(va=pe.parameters)==null?void 0:va.docs)==null?void 0:Pa.source}}};var Oa,wa,Sa;se.parameters={...se.parameters,docs:{...(Oa=se.parameters)==null?void 0:Oa.docs,source:{originalSource:'createCaseStory("062-one-of-variant2-removed-string")',...(Sa=(wa=se.parameters)==null?void 0:wa.docs)==null?void 0:Sa.source}}};var xa,Ca,Ia;me.parameters={...me.parameters,docs:{...(xa=me.parameters)==null?void 0:xa.docs,source:{originalSource:'createCaseStory("063-one-of-variant2-add-additional-properties-rule1-string")',...(Ia=(Ca=me.parameters)==null?void 0:Ca.docs)==null?void 0:Ia.source}}};var Aa,Na,Ra;ce.parameters={...ce.parameters,docs:{...(Aa=ce.parameters)==null?void 0:Aa.docs,source:{originalSource:'createCaseStory("064-one-of-variant2-remove-additional-properties-rule1-string")',...(Ra=(Na=ce.parameters)==null?void 0:Na.docs)==null?void 0:Ra.source}}};var La,qa,za;le.parameters={...le.parameters,docs:{...(La=le.parameters)==null?void 0:La.docs,source:{originalSource:'createCaseStory("065-one-of-variant2-add-additional-properties-false-string")',...(za=(qa=le.parameters)==null?void 0:qa.docs)==null?void 0:za.source}}};var $a,Da,Ja;de.parameters={...de.parameters,docs:{...($a=de.parameters)==null?void 0:$a.docs,source:{originalSource:'createCaseStory("066-one-of-variant2-remove-additional-properties-false-string")',...(Ja=(Da=de.parameters)==null?void 0:Da.docs)==null?void 0:Ja.source}}};var Fa,Ba,Ta;_e.parameters={..._e.parameters,docs:{...(Fa=_e.parameters)==null?void 0:Fa.docs,source:{originalSource:'createCaseStory("067-one-of-variant2-change-additional-properties-rule1-to-false-string")',...(Ta=(Ba=_e.parameters)==null?void 0:Ba.docs)==null?void 0:Ta.source}}};var Ea,ka,Ga;ye.parameters={...ye.parameters,docs:{...(Ea=ye.parameters)==null?void 0:Ea.docs,source:{originalSource:'createCaseStory("068-one-of-variant2-change-additional-properties-false-to-rule1-string")',...(Ga=(ka=ye.parameters)==null?void 0:ka.docs)==null?void 0:Ga.source}}};var Ha,Ka,Ma;be.parameters={...be.parameters,docs:{...(Ha=be.parameters)==null?void 0:Ha.docs,source:{originalSource:'createCaseStory("069-one-of-variant2-added-number")',...(Ma=(Ka=be.parameters)==null?void 0:Ka.docs)==null?void 0:Ma.source}}};var Qa,Ua,Va;fe.parameters={...fe.parameters,docs:{...(Qa=fe.parameters)==null?void 0:Qa.docs,source:{originalSource:'createCaseStory("070-one-of-variant2-removed-number")',...(Va=(Ua=fe.parameters)==null?void 0:Ua.docs)==null?void 0:Va.source}}};var Wa,Xa,Ya;he.parameters={...he.parameters,docs:{...(Wa=he.parameters)==null?void 0:Wa.docs,source:{originalSource:'createCaseStory("071-one-of-variant2-add-additional-properties-rule1-number")',...(Ya=(Xa=he.parameters)==null?void 0:Xa.docs)==null?void 0:Ya.source}}};var Za,eo,no;ge.parameters={...ge.parameters,docs:{...(Za=ge.parameters)==null?void 0:Za.docs,source:{originalSource:'createCaseStory("072-one-of-variant2-remove-additional-properties-rule1-number")',...(no=(eo=ge.parameters)==null?void 0:eo.docs)==null?void 0:no.source}}};var ro,to,ao;ue.parameters={...ue.parameters,docs:{...(ro=ue.parameters)==null?void 0:ro.docs,source:{originalSource:'createCaseStory("073-one-of-variant2-add-additional-properties-false-number")',...(ao=(to=ue.parameters)==null?void 0:to.docs)==null?void 0:ao.source}}};var oo,io,po;je.parameters={...je.parameters,docs:{...(oo=je.parameters)==null?void 0:oo.docs,source:{originalSource:'createCaseStory("074-one-of-variant2-remove-additional-properties-false-number")',...(po=(io=je.parameters)==null?void 0:io.docs)==null?void 0:po.source}}};var so,mo,co;ve.parameters={...ve.parameters,docs:{...(so=ve.parameters)==null?void 0:so.docs,source:{originalSource:'createCaseStory("075-one-of-variant2-change-additional-properties-rule1-to-false-number")',...(co=(mo=ve.parameters)==null?void 0:mo.docs)==null?void 0:co.source}}};var lo,_o,yo;Pe.parameters={...Pe.parameters,docs:{...(lo=Pe.parameters)==null?void 0:lo.docs,source:{originalSource:'createCaseStory("076-one-of-variant2-change-additional-properties-false-to-rule1-number")',...(yo=(_o=Pe.parameters)==null?void 0:_o.docs)==null?void 0:yo.source}}};var bo,fo,ho;Oe.parameters={...Oe.parameters,docs:{...(bo=Oe.parameters)==null?void 0:bo.docs,source:{originalSource:'createCaseStory("077-one-of-variant2-added-integer")',...(ho=(fo=Oe.parameters)==null?void 0:fo.docs)==null?void 0:ho.source}}};var go,uo,jo;we.parameters={...we.parameters,docs:{...(go=we.parameters)==null?void 0:go.docs,source:{originalSource:'createCaseStory("078-one-of-variant2-removed-integer")',...(jo=(uo=we.parameters)==null?void 0:uo.docs)==null?void 0:jo.source}}};var vo,Po,Oo;Se.parameters={...Se.parameters,docs:{...(vo=Se.parameters)==null?void 0:vo.docs,source:{originalSource:'createCaseStory("079-one-of-variant2-add-additional-properties-rule1-integer")',...(Oo=(Po=Se.parameters)==null?void 0:Po.docs)==null?void 0:Oo.source}}};var wo,So,xo;xe.parameters={...xe.parameters,docs:{...(wo=xe.parameters)==null?void 0:wo.docs,source:{originalSource:'createCaseStory("080-one-of-variant2-remove-additional-properties-rule1-integer")',...(xo=(So=xe.parameters)==null?void 0:So.docs)==null?void 0:xo.source}}};var Co,Io,Ao;Ce.parameters={...Ce.parameters,docs:{...(Co=Ce.parameters)==null?void 0:Co.docs,source:{originalSource:'createCaseStory("081-one-of-variant2-add-additional-properties-false-integer")',...(Ao=(Io=Ce.parameters)==null?void 0:Io.docs)==null?void 0:Ao.source}}};var No,Ro,Lo;Ie.parameters={...Ie.parameters,docs:{...(No=Ie.parameters)==null?void 0:No.docs,source:{originalSource:'createCaseStory("082-one-of-variant2-remove-additional-properties-false-integer")',...(Lo=(Ro=Ie.parameters)==null?void 0:Ro.docs)==null?void 0:Lo.source}}};var qo,zo,$o;Ae.parameters={...Ae.parameters,docs:{...(qo=Ae.parameters)==null?void 0:qo.docs,source:{originalSource:'createCaseStory("083-one-of-variant2-change-additional-properties-rule1-to-false-integer")',...($o=(zo=Ae.parameters)==null?void 0:zo.docs)==null?void 0:$o.source}}};var Do,Jo,Fo;Ne.parameters={...Ne.parameters,docs:{...(Do=Ne.parameters)==null?void 0:Do.docs,source:{originalSource:'createCaseStory("084-one-of-variant2-change-additional-properties-false-to-rule1-integer")',...(Fo=(Jo=Ne.parameters)==null?void 0:Jo.docs)==null?void 0:Fo.source}}};var Bo,To,Eo;Re.parameters={...Re.parameters,docs:{...(Bo=Re.parameters)==null?void 0:Bo.docs,source:{originalSource:'createCaseStory("085-one-of-variant2-added-boolean")',...(Eo=(To=Re.parameters)==null?void 0:To.docs)==null?void 0:Eo.source}}};var ko,Go,Ho;Le.parameters={...Le.parameters,docs:{...(ko=Le.parameters)==null?void 0:ko.docs,source:{originalSource:'createCaseStory("086-one-of-variant2-removed-boolean")',...(Ho=(Go=Le.parameters)==null?void 0:Go.docs)==null?void 0:Ho.source}}};var Ko,Mo,Qo;qe.parameters={...qe.parameters,docs:{...(Ko=qe.parameters)==null?void 0:Ko.docs,source:{originalSource:'createCaseStory("087-one-of-variant2-add-additional-properties-rule1-boolean")',...(Qo=(Mo=qe.parameters)==null?void 0:Mo.docs)==null?void 0:Qo.source}}};var Uo,Vo,Wo;ze.parameters={...ze.parameters,docs:{...(Uo=ze.parameters)==null?void 0:Uo.docs,source:{originalSource:'createCaseStory("088-one-of-variant2-remove-additional-properties-rule1-boolean")',...(Wo=(Vo=ze.parameters)==null?void 0:Vo.docs)==null?void 0:Wo.source}}};var Xo,Yo,Zo;$e.parameters={...$e.parameters,docs:{...(Xo=$e.parameters)==null?void 0:Xo.docs,source:{originalSource:'createCaseStory("089-one-of-variant2-add-additional-properties-false-boolean")',...(Zo=(Yo=$e.parameters)==null?void 0:Yo.docs)==null?void 0:Zo.source}}};var ei,ni,ri;De.parameters={...De.parameters,docs:{...(ei=De.parameters)==null?void 0:ei.docs,source:{originalSource:'createCaseStory("090-one-of-variant2-remove-additional-properties-false-boolean")',...(ri=(ni=De.parameters)==null?void 0:ni.docs)==null?void 0:ri.source}}};var ti,ai,oi;Je.parameters={...Je.parameters,docs:{...(ti=Je.parameters)==null?void 0:ti.docs,source:{originalSource:'createCaseStory("091-one-of-variant2-change-additional-properties-rule1-to-false-boolean")',...(oi=(ai=Je.parameters)==null?void 0:ai.docs)==null?void 0:oi.source}}};var ii,pi,si;Fe.parameters={...Fe.parameters,docs:{...(ii=Fe.parameters)==null?void 0:ii.docs,source:{originalSource:'createCaseStory("092-one-of-variant2-change-additional-properties-false-to-rule1-boolean")',...(si=(pi=Fe.parameters)==null?void 0:pi.docs)==null?void 0:si.source}}};var mi,ci,li;Be.parameters={...Be.parameters,docs:{...(mi=Be.parameters)==null?void 0:mi.docs,source:{originalSource:'createCaseStory("093-one-of-variant2-added-array")',...(li=(ci=Be.parameters)==null?void 0:ci.docs)==null?void 0:li.source}}};var di,_i,yi;Te.parameters={...Te.parameters,docs:{...(di=Te.parameters)==null?void 0:di.docs,source:{originalSource:'createCaseStory("094-one-of-variant2-removed-array")',...(yi=(_i=Te.parameters)==null?void 0:_i.docs)==null?void 0:yi.source}}};var bi,fi,hi;Ee.parameters={...Ee.parameters,docs:{...(bi=Ee.parameters)==null?void 0:bi.docs,source:{originalSource:'createCaseStory("095-one-of-variant2-add-additional-properties-rule1-array")',...(hi=(fi=Ee.parameters)==null?void 0:fi.docs)==null?void 0:hi.source}}};var gi,ui,ji;ke.parameters={...ke.parameters,docs:{...(gi=ke.parameters)==null?void 0:gi.docs,source:{originalSource:'createCaseStory("096-one-of-variant2-remove-additional-properties-rule1-array")',...(ji=(ui=ke.parameters)==null?void 0:ui.docs)==null?void 0:ji.source}}};var vi,Pi,Oi;Ge.parameters={...Ge.parameters,docs:{...(vi=Ge.parameters)==null?void 0:vi.docs,source:{originalSource:'createCaseStory("097-one-of-variant2-add-additional-properties-false-array")',...(Oi=(Pi=Ge.parameters)==null?void 0:Pi.docs)==null?void 0:Oi.source}}};var wi,Si,xi;He.parameters={...He.parameters,docs:{...(wi=He.parameters)==null?void 0:wi.docs,source:{originalSource:'createCaseStory("098-one-of-variant2-remove-additional-properties-false-array")',...(xi=(Si=He.parameters)==null?void 0:Si.docs)==null?void 0:xi.source}}};var Ci,Ii,Ai;Ke.parameters={...Ke.parameters,docs:{...(Ci=Ke.parameters)==null?void 0:Ci.docs,source:{originalSource:'createCaseStory("099-one-of-variant2-change-additional-properties-rule1-to-false-array")',...(Ai=(Ii=Ke.parameters)==null?void 0:Ii.docs)==null?void 0:Ai.source}}};var Ni,Ri,Li;Me.parameters={...Me.parameters,docs:{...(Ni=Me.parameters)==null?void 0:Ni.docs,source:{originalSource:'createCaseStory("100-one-of-variant2-change-additional-properties-false-to-rule1-array")',...(Li=(Ri=Me.parameters)==null?void 0:Ri.docs)==null?void 0:Li.source}}};var qi,zi,$i;Qe.parameters={...Qe.parameters,docs:{...(qi=Qe.parameters)==null?void 0:qi.docs,source:{originalSource:'createCaseStory("101-one-of-variant2-added-object")',...($i=(zi=Qe.parameters)==null?void 0:zi.docs)==null?void 0:$i.source}}};var Di,Ji,Fi;Ue.parameters={...Ue.parameters,docs:{...(Di=Ue.parameters)==null?void 0:Di.docs,source:{originalSource:'createCaseStory("102-one-of-variant2-removed-object")',...(Fi=(Ji=Ue.parameters)==null?void 0:Ji.docs)==null?void 0:Fi.source}}};var Bi,Ti,Ei;Ve.parameters={...Ve.parameters,docs:{...(Bi=Ve.parameters)==null?void 0:Bi.docs,source:{originalSource:'createCaseStory("103-one-of-variant2-add-additional-properties-rule1-object")',...(Ei=(Ti=Ve.parameters)==null?void 0:Ti.docs)==null?void 0:Ei.source}}};var ki,Gi,Hi;We.parameters={...We.parameters,docs:{...(ki=We.parameters)==null?void 0:ki.docs,source:{originalSource:'createCaseStory("104-one-of-variant2-remove-additional-properties-rule1-object")',...(Hi=(Gi=We.parameters)==null?void 0:Gi.docs)==null?void 0:Hi.source}}};var Ki,Mi,Qi;Xe.parameters={...Xe.parameters,docs:{...(Ki=Xe.parameters)==null?void 0:Ki.docs,source:{originalSource:'createCaseStory("105-one-of-variant2-add-additional-properties-false-object")',...(Qi=(Mi=Xe.parameters)==null?void 0:Mi.docs)==null?void 0:Qi.source}}};var Ui,Vi,Wi;Ye.parameters={...Ye.parameters,docs:{...(Ui=Ye.parameters)==null?void 0:Ui.docs,source:{originalSource:'createCaseStory("106-one-of-variant2-remove-additional-properties-false-object")',...(Wi=(Vi=Ye.parameters)==null?void 0:Vi.docs)==null?void 0:Wi.source}}};var Xi,Yi,Zi;Ze.parameters={...Ze.parameters,docs:{...(Xi=Ze.parameters)==null?void 0:Xi.docs,source:{originalSource:'createCaseStory("107-one-of-variant2-change-additional-properties-rule1-to-false-object")',...(Zi=(Yi=Ze.parameters)==null?void 0:Yi.docs)==null?void 0:Zi.source}}};var ep,np,rp;en.parameters={...en.parameters,docs:{...(ep=en.parameters)==null?void 0:ep.docs,source:{originalSource:'createCaseStory("108-one-of-variant2-change-additional-properties-false-to-rule1-object")',...(rp=(np=en.parameters)==null?void 0:np.docs)==null?void 0:rp.source}}};const Nl=["Case_001_add_one_property_string","Case_002_remove_one_property_string","Case_003_add_two_properties_string","Case_004_remove_two_properties_string","Case_005_add_one_property_number","Case_006_remove_one_property_number","Case_007_add_two_properties_number","Case_008_remove_two_properties_number","Case_009_add_one_property_integer","Case_010_remove_one_property_integer","Case_011_add_two_properties_integer","Case_012_remove_two_properties_integer","Case_013_add_one_property_boolean","Case_014_remove_one_property_boolean","Case_015_add_two_properties_boolean","Case_016_remove_two_properties_boolean","Case_017_add_one_property_array","Case_018_remove_one_property_array","Case_019_add_two_properties_array","Case_020_remove_two_properties_array","Case_021_add_one_property_object","Case_022_remove_one_property_object","Case_023_add_two_properties_object","Case_024_remove_two_properties_object","Case_025_add_additional_properties_rule1_string","Case_026_remove_additional_properties_rule1_string","Case_027_add_additional_properties_false_string","Case_028_remove_additional_properties_false_string","Case_029_change_additional_properties_rule1_to_false_string","Case_030_change_additional_properties_false_to_rule1_string","Case_031_add_additional_properties_rule1_number","Case_032_remove_additional_properties_rule1_number","Case_033_add_additional_properties_false_number","Case_034_remove_additional_properties_false_number","Case_035_change_additional_properties_rule1_to_false_number","Case_036_change_additional_properties_false_to_rule1_number","Case_037_add_additional_properties_rule1_integer","Case_038_remove_additional_properties_rule1_integer","Case_039_add_additional_properties_false_integer","Case_040_remove_additional_properties_false_integer","Case_041_change_additional_properties_rule1_to_false_integer","Case_042_change_additional_properties_false_to_rule1_integer","Case_043_add_additional_properties_rule1_boolean","Case_044_remove_additional_properties_rule1_boolean","Case_045_add_additional_properties_false_boolean","Case_046_remove_additional_properties_false_boolean","Case_047_change_additional_properties_rule1_to_false_boolean","Case_048_change_additional_properties_false_to_rule1_boolean","Case_049_add_additional_properties_rule1_array","Case_050_remove_additional_properties_rule1_array","Case_051_add_additional_properties_false_array","Case_052_remove_additional_properties_false_array","Case_053_change_additional_properties_rule1_to_false_array","Case_054_change_additional_properties_false_to_rule1_array","Case_055_add_additional_properties_rule1_object","Case_056_remove_additional_properties_rule1_object","Case_057_add_additional_properties_false_object","Case_058_remove_additional_properties_false_object","Case_059_change_additional_properties_rule1_to_false_object","Case_060_change_additional_properties_false_to_rule1_object","Case_061_one_of_variant2_added_string","Case_062_one_of_variant2_removed_string","Case_063_one_of_variant2_add_additional_properties_rule1_string","Case_064_one_of_variant2_remove_additional_properties_rule1_string","Case_065_one_of_variant2_add_additional_properties_false_string","Case_066_one_of_variant2_remove_additional_properties_false_string","Case_067_one_of_variant2_change_additional_properties_rule1_to_false_string","Case_068_one_of_variant2_change_additional_properties_false_to_rule1_string","Case_069_one_of_variant2_added_number","Case_070_one_of_variant2_removed_number","Case_071_one_of_variant2_add_additional_properties_rule1_number","Case_072_one_of_variant2_remove_additional_properties_rule1_number","Case_073_one_of_variant2_add_additional_properties_false_number","Case_074_one_of_variant2_remove_additional_properties_false_number","Case_075_one_of_variant2_change_additional_properties_rule1_to_false_number","Case_076_one_of_variant2_change_additional_properties_false_to_rule1_number","Case_077_one_of_variant2_added_integer","Case_078_one_of_variant2_removed_integer","Case_079_one_of_variant2_add_additional_properties_rule1_integer","Case_080_one_of_variant2_remove_additional_properties_rule1_integer","Case_081_one_of_variant2_add_additional_properties_false_integer","Case_082_one_of_variant2_remove_additional_properties_false_integer","Case_083_one_of_variant2_change_additional_properties_rule1_to_false_integer","Case_084_one_of_variant2_change_additional_properties_false_to_rule1_integer","Case_085_one_of_variant2_added_boolean","Case_086_one_of_variant2_removed_boolean","Case_087_one_of_variant2_add_additional_properties_rule1_boolean","Case_088_one_of_variant2_remove_additional_properties_rule1_boolean","Case_089_one_of_variant2_add_additional_properties_false_boolean","Case_090_one_of_variant2_remove_additional_properties_false_boolean","Case_091_one_of_variant2_change_additional_properties_rule1_to_false_boolean","Case_092_one_of_variant2_change_additional_properties_false_to_rule1_boolean","Case_093_one_of_variant2_added_array","Case_094_one_of_variant2_removed_array","Case_095_one_of_variant2_add_additional_properties_rule1_array","Case_096_one_of_variant2_remove_additional_properties_rule1_array","Case_097_one_of_variant2_add_additional_properties_false_array","Case_098_one_of_variant2_remove_additional_properties_false_array","Case_099_one_of_variant2_change_additional_properties_rule1_to_false_array","Case_100_one_of_variant2_change_additional_properties_false_to_rule1_array","Case_101_one_of_variant2_added_object","Case_102_one_of_variant2_removed_object","Case_103_one_of_variant2_add_additional_properties_rule1_object","Case_104_one_of_variant2_remove_additional_properties_rule1_object","Case_105_one_of_variant2_add_additional_properties_false_object","Case_106_one_of_variant2_remove_additional_properties_false_object","Case_107_one_of_variant2_change_additional_properties_rule1_to_false_object","Case_108_one_of_variant2_change_additional_properties_false_to_rule1_object"];export{n as Case_001_add_one_property_string,r as Case_002_remove_one_property_string,t as Case_003_add_two_properties_string,a as Case_004_remove_two_properties_string,o as Case_005_add_one_property_number,i as Case_006_remove_one_property_number,p as Case_007_add_two_properties_number,s as Case_008_remove_two_properties_number,m as Case_009_add_one_property_integer,c as Case_010_remove_one_property_integer,l as Case_011_add_two_properties_integer,d as Case_012_remove_two_properties_integer,_ as Case_013_add_one_property_boolean,y as Case_014_remove_one_property_boolean,b as Case_015_add_two_properties_boolean,f as Case_016_remove_two_properties_boolean,h as Case_017_add_one_property_array,g as Case_018_remove_one_property_array,u as Case_019_add_two_properties_array,j as Case_020_remove_two_properties_array,v as Case_021_add_one_property_object,P as Case_022_remove_one_property_object,O as Case_023_add_two_properties_object,w as Case_024_remove_two_properties_object,S as Case_025_add_additional_properties_rule1_string,x as Case_026_remove_additional_properties_rule1_string,C as Case_027_add_additional_properties_false_string,I as Case_028_remove_additional_properties_false_string,A as Case_029_change_additional_properties_rule1_to_false_string,N as Case_030_change_additional_properties_false_to_rule1_string,R as Case_031_add_additional_properties_rule1_number,L as Case_032_remove_additional_properties_rule1_number,q as Case_033_add_additional_properties_false_number,z as Case_034_remove_additional_properties_false_number,$ as Case_035_change_additional_properties_rule1_to_false_number,D as Case_036_change_additional_properties_false_to_rule1_number,J as Case_037_add_additional_properties_rule1_integer,F as Case_038_remove_additional_properties_rule1_integer,B as Case_039_add_additional_properties_false_integer,T as Case_040_remove_additional_properties_false_integer,E as Case_041_change_additional_properties_rule1_to_false_integer,k as Case_042_change_additional_properties_false_to_rule1_integer,G as Case_043_add_additional_properties_rule1_boolean,H as Case_044_remove_additional_properties_rule1_boolean,K as Case_045_add_additional_properties_false_boolean,M as Case_046_remove_additional_properties_false_boolean,Q as Case_047_change_additional_properties_rule1_to_false_boolean,U as Case_048_change_additional_properties_false_to_rule1_boolean,V as Case_049_add_additional_properties_rule1_array,W as Case_050_remove_additional_properties_rule1_array,X as Case_051_add_additional_properties_false_array,Y as Case_052_remove_additional_properties_false_array,Z as Case_053_change_additional_properties_rule1_to_false_array,ee as Case_054_change_additional_properties_false_to_rule1_array,ne as Case_055_add_additional_properties_rule1_object,re as Case_056_remove_additional_properties_rule1_object,te as Case_057_add_additional_properties_false_object,ae as Case_058_remove_additional_properties_false_object,oe as Case_059_change_additional_properties_rule1_to_false_object,ie as Case_060_change_additional_properties_false_to_rule1_object,pe as Case_061_one_of_variant2_added_string,se as Case_062_one_of_variant2_removed_string,me as Case_063_one_of_variant2_add_additional_properties_rule1_string,ce as Case_064_one_of_variant2_remove_additional_properties_rule1_string,le as Case_065_one_of_variant2_add_additional_properties_false_string,de as Case_066_one_of_variant2_remove_additional_properties_false_string,_e as Case_067_one_of_variant2_change_additional_properties_rule1_to_false_string,ye as Case_068_one_of_variant2_change_additional_properties_false_to_rule1_string,be as Case_069_one_of_variant2_added_number,fe as Case_070_one_of_variant2_removed_number,he as Case_071_one_of_variant2_add_additional_properties_rule1_number,ge as Case_072_one_of_variant2_remove_additional_properties_rule1_number,ue as Case_073_one_of_variant2_add_additional_properties_false_number,je as Case_074_one_of_variant2_remove_additional_properties_false_number,ve as Case_075_one_of_variant2_change_additional_properties_rule1_to_false_number,Pe as Case_076_one_of_variant2_change_additional_properties_false_to_rule1_number,Oe as Case_077_one_of_variant2_added_integer,we as Case_078_one_of_variant2_removed_integer,Se as Case_079_one_of_variant2_add_additional_properties_rule1_integer,xe as Case_080_one_of_variant2_remove_additional_properties_rule1_integer,Ce as Case_081_one_of_variant2_add_additional_properties_false_integer,Ie as Case_082_one_of_variant2_remove_additional_properties_false_integer,Ae as Case_083_one_of_variant2_change_additional_properties_rule1_to_false_integer,Ne as Case_084_one_of_variant2_change_additional_properties_false_to_rule1_integer,Re as Case_085_one_of_variant2_added_boolean,Le as Case_086_one_of_variant2_removed_boolean,qe as Case_087_one_of_variant2_add_additional_properties_rule1_boolean,ze as Case_088_one_of_variant2_remove_additional_properties_rule1_boolean,$e as Case_089_one_of_variant2_add_additional_properties_false_boolean,De as Case_090_one_of_variant2_remove_additional_properties_false_boolean,Je as Case_091_one_of_variant2_change_additional_properties_rule1_to_false_boolean,Fe as Case_092_one_of_variant2_change_additional_properties_false_to_rule1_boolean,Be as Case_093_one_of_variant2_added_array,Te as Case_094_one_of_variant2_removed_array,Ee as Case_095_one_of_variant2_add_additional_properties_rule1_array,ke as Case_096_one_of_variant2_remove_additional_properties_rule1_array,Ge as Case_097_one_of_variant2_add_additional_properties_false_array,He as Case_098_one_of_variant2_remove_additional_properties_false_array,Ke as Case_099_one_of_variant2_change_additional_properties_rule1_to_false_array,Me as Case_100_one_of_variant2_change_additional_properties_false_to_rule1_array,Qe as Case_101_one_of_variant2_added_object,Ue as Case_102_one_of_variant2_removed_object,Ve as Case_103_one_of_variant2_add_additional_properties_rule1_object,We as Case_104_one_of_variant2_remove_additional_properties_rule1_object,Xe as Case_105_one_of_variant2_add_additional_properties_false_object,Ye as Case_106_one_of_variant2_remove_additional_properties_false_object,Ze as Case_107_one_of_variant2_change_additional_properties_rule1_to_false_object,en as Case_108_one_of_variant2_change_additional_properties_false_to_rule1_object,Nl as __namedExportsOrder,Al as default};
