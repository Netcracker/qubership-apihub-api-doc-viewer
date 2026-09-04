import{c as Bn}from"./diffs-samples-cases-1df1f3ae.js";import{c as Tn,J as Fn,j as En,a as kn}from"./json-schema-diffs-utils-361af4d1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-2d7bd233.js";import"./DiffBadge-4d4a1c37.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-be584810.js";import"./GraphPropNodeViewer-1f5ff77a.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-3b42765c.js";import"./preprocess-c9227d17.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";const Gn=`type: object
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

`,Hn=`type: object
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

`,Kn=`type: object
description: Object with 0 string property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Mn=`type: object
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

`,Qn=`type: object
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

`,Un=`type: object
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

`,Vn=`type: object
description: Object with 0 number property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Wn=`type: object
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

`,Xn=`type: object
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

`,Yn=`type: object
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

`,Zn=`type: object
description: Object with 0 integer property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,er=`type: object
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

`,nr=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,rr=`type: object
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

`,tr=`type: object
description: Object with 0 boolean property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,or=`type: object
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

`,ar=`type: object
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

`,pr=`type: object
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

`,sr=`type: object
description: Object with 0 array property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,ir=`type: object
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

`,mr=`type: object
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

`,cr=`type: object
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

`,dr=`type: object
description: Object with 0 object property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,lr=`type: object
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

`,_r=`type: object
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

`,yr=`type: object
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

`,br=`type: object
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

`,hr=`type: object
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

`,gr=`type: object
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

`,fr=`type: object
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

`,ur=`type: object
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

`,jr=`type: object
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

`,vr=`type: object
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

`,Pr=`type: object
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

`,Sr=`type: object
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

`,xr=`type: object
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

`,Ir=`type: object
description: Object with 0 string property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Ar=`type: object
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

`,Nr=`type: object
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

`,Lr=`type: object
description: Object with 0 number property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,qr=`type: object
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

`,zr=`type: object
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

`,Dr=`type: object
description: Object with 0 integer property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Jr=`type: object
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

`,Fr=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Br=`type: object
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

`,Tr=`type: object
description: Object with 0 boolean property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Er=`type: object
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

`,kr=`type: object
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

`,Hr=`type: object
description: Object with 0 array property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Kr=`type: object
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

`,Mr=`type: object
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

`,Ur=`type: object
description: Object with 0 object property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Vr=`type: object
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

`,Wr=`type: object
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

`,Xr=`type: object
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

`,Yr=`type: object
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

`,Zr=`type: object
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

`,et=`type: object
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

`,nt=`type: object
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

`,rt=`type: object
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

`,tt=`type: object
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

`,ot=`type: object
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

`,at=`type: object
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

`,pt=`type: object
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

`,st=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-properties/001-add-one-property-string/before.yaml":Gn,"../../../../samples/json-schema-diffs/type-changes/object-properties/002-remove-one-property-string/before.yaml":Hn,"../../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string/before.yaml":Kn,"../../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string/before.yaml":Mn,"../../../../samples/json-schema-diffs/type-changes/object-properties/005-add-one-property-number/before.yaml":Qn,"../../../../samples/json-schema-diffs/type-changes/object-properties/006-remove-one-property-number/before.yaml":Un,"../../../../samples/json-schema-diffs/type-changes/object-properties/007-add-two-properties-number/before.yaml":Vn,"../../../../samples/json-schema-diffs/type-changes/object-properties/008-remove-two-properties-number/before.yaml":Wn,"../../../../samples/json-schema-diffs/type-changes/object-properties/009-add-one-property-integer/before.yaml":Xn,"../../../../samples/json-schema-diffs/type-changes/object-properties/010-remove-one-property-integer/before.yaml":Yn,"../../../../samples/json-schema-diffs/type-changes/object-properties/011-add-two-properties-integer/before.yaml":Zn,"../../../../samples/json-schema-diffs/type-changes/object-properties/012-remove-two-properties-integer/before.yaml":er,"../../../../samples/json-schema-diffs/type-changes/object-properties/013-add-one-property-boolean/before.yaml":nr,"../../../../samples/json-schema-diffs/type-changes/object-properties/014-remove-one-property-boolean/before.yaml":rr,"../../../../samples/json-schema-diffs/type-changes/object-properties/015-add-two-properties-boolean/before.yaml":tr,"../../../../samples/json-schema-diffs/type-changes/object-properties/016-remove-two-properties-boolean/before.yaml":or,"../../../../samples/json-schema-diffs/type-changes/object-properties/017-add-one-property-array/before.yaml":ar,"../../../../samples/json-schema-diffs/type-changes/object-properties/018-remove-one-property-array/before.yaml":pr,"../../../../samples/json-schema-diffs/type-changes/object-properties/019-add-two-properties-array/before.yaml":sr,"../../../../samples/json-schema-diffs/type-changes/object-properties/020-remove-two-properties-array/before.yaml":ir,"../../../../samples/json-schema-diffs/type-changes/object-properties/021-add-one-property-object/before.yaml":mr,"../../../../samples/json-schema-diffs/type-changes/object-properties/022-remove-one-property-object/before.yaml":cr,"../../../../samples/json-schema-diffs/type-changes/object-properties/023-add-two-properties-object/before.yaml":dr,"../../../../samples/json-schema-diffs/type-changes/object-properties/024-remove-two-properties-object/before.yaml":lr,"../../../../samples/json-schema-diffs/type-changes/object-properties/025-one-of-variant2-added-string/before.yaml":_r,"../../../../samples/json-schema-diffs/type-changes/object-properties/026-one-of-variant2-removed-string/before.yaml":yr,"../../../../samples/json-schema-diffs/type-changes/object-properties/027-one-of-variant2-added-number/before.yaml":br,"../../../../samples/json-schema-diffs/type-changes/object-properties/028-one-of-variant2-removed-number/before.yaml":hr,"../../../../samples/json-schema-diffs/type-changes/object-properties/029-one-of-variant2-added-integer/before.yaml":gr,"../../../../samples/json-schema-diffs/type-changes/object-properties/030-one-of-variant2-removed-integer/before.yaml":fr,"../../../../samples/json-schema-diffs/type-changes/object-properties/031-one-of-variant2-added-boolean/before.yaml":ur,"../../../../samples/json-schema-diffs/type-changes/object-properties/032-one-of-variant2-removed-boolean/before.yaml":jr,"../../../../samples/json-schema-diffs/type-changes/object-properties/033-one-of-variant2-added-array/before.yaml":vr,"../../../../samples/json-schema-diffs/type-changes/object-properties/034-one-of-variant2-removed-array/before.yaml":wr,"../../../../samples/json-schema-diffs/type-changes/object-properties/035-one-of-variant2-added-object/before.yaml":Or,"../../../../samples/json-schema-diffs/type-changes/object-properties/036-one-of-variant2-removed-object/before.yaml":Pr}),it=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-properties/001-add-one-property-string/after.yaml":Sr,"../../../../samples/json-schema-diffs/type-changes/object-properties/002-remove-one-property-string/after.yaml":xr,"../../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string/after.yaml":Cr,"../../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string/after.yaml":Ir,"../../../../samples/json-schema-diffs/type-changes/object-properties/005-add-one-property-number/after.yaml":Ar,"../../../../samples/json-schema-diffs/type-changes/object-properties/006-remove-one-property-number/after.yaml":Nr,"../../../../samples/json-schema-diffs/type-changes/object-properties/007-add-two-properties-number/after.yaml":Rr,"../../../../samples/json-schema-diffs/type-changes/object-properties/008-remove-two-properties-number/after.yaml":Lr,"../../../../samples/json-schema-diffs/type-changes/object-properties/009-add-one-property-integer/after.yaml":qr,"../../../../samples/json-schema-diffs/type-changes/object-properties/010-remove-one-property-integer/after.yaml":zr,"../../../../samples/json-schema-diffs/type-changes/object-properties/011-add-two-properties-integer/after.yaml":$r,"../../../../samples/json-schema-diffs/type-changes/object-properties/012-remove-two-properties-integer/after.yaml":Dr,"../../../../samples/json-schema-diffs/type-changes/object-properties/013-add-one-property-boolean/after.yaml":Jr,"../../../../samples/json-schema-diffs/type-changes/object-properties/014-remove-one-property-boolean/after.yaml":Fr,"../../../../samples/json-schema-diffs/type-changes/object-properties/015-add-two-properties-boolean/after.yaml":Br,"../../../../samples/json-schema-diffs/type-changes/object-properties/016-remove-two-properties-boolean/after.yaml":Tr,"../../../../samples/json-schema-diffs/type-changes/object-properties/017-add-one-property-array/after.yaml":Er,"../../../../samples/json-schema-diffs/type-changes/object-properties/018-remove-one-property-array/after.yaml":kr,"../../../../samples/json-schema-diffs/type-changes/object-properties/019-add-two-properties-array/after.yaml":Gr,"../../../../samples/json-schema-diffs/type-changes/object-properties/020-remove-two-properties-array/after.yaml":Hr,"../../../../samples/json-schema-diffs/type-changes/object-properties/021-add-one-property-object/after.yaml":Kr,"../../../../samples/json-schema-diffs/type-changes/object-properties/022-remove-one-property-object/after.yaml":Mr,"../../../../samples/json-schema-diffs/type-changes/object-properties/023-add-two-properties-object/after.yaml":Qr,"../../../../samples/json-schema-diffs/type-changes/object-properties/024-remove-two-properties-object/after.yaml":Ur,"../../../../samples/json-schema-diffs/type-changes/object-properties/025-one-of-variant2-added-string/after.yaml":Vr,"../../../../samples/json-schema-diffs/type-changes/object-properties/026-one-of-variant2-removed-string/after.yaml":Wr,"../../../../samples/json-schema-diffs/type-changes/object-properties/027-one-of-variant2-added-number/after.yaml":Xr,"../../../../samples/json-schema-diffs/type-changes/object-properties/028-one-of-variant2-removed-number/after.yaml":Yr,"../../../../samples/json-schema-diffs/type-changes/object-properties/029-one-of-variant2-added-integer/after.yaml":Zr,"../../../../samples/json-schema-diffs/type-changes/object-properties/030-one-of-variant2-removed-integer/after.yaml":et,"../../../../samples/json-schema-diffs/type-changes/object-properties/031-one-of-variant2-added-boolean/after.yaml":nt,"../../../../samples/json-schema-diffs/type-changes/object-properties/032-one-of-variant2-removed-boolean/after.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/object-properties/033-one-of-variant2-added-array/after.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/object-properties/034-one-of-variant2-removed-array/after.yaml":ot,"../../../../samples/json-schema-diffs/type-changes/object-properties/035-one-of-variant2-added-object/after.yaml":at,"../../../../samples/json-schema-diffs/type-changes/object-properties/036-one-of-variant2-removed-object/after.yaml":pt}),mt=Bn(st,it),ct=Tn(mt),It={title:"JSON Schema Diffs Suite/Object Properties",component:Fn,argTypes:En},e=kn(Fn,ct),n=e("001-add-one-property-string"),r=e("002-remove-one-property-string"),t=e("003-add-two-properties-string"),o=e("004-remove-two-properties-string"),a=e("005-add-one-property-number"),p=e("006-remove-one-property-number"),s=e("007-add-two-properties-number"),i=e("008-remove-two-properties-number"),m=e("009-add-one-property-integer"),c=e("010-remove-one-property-integer"),d=e("011-add-two-properties-integer"),l=e("012-remove-two-properties-integer"),_=e("013-add-one-property-boolean"),y=e("014-remove-one-property-boolean"),b=e("015-add-two-properties-boolean"),h=e("016-remove-two-properties-boolean"),g=e("017-add-one-property-array"),f=e("018-remove-one-property-array"),u=e("019-add-two-properties-array"),j=e("020-remove-two-properties-array"),v=e("021-add-one-property-object"),w=e("022-remove-one-property-object"),O=e("023-add-two-properties-object"),P=e("024-remove-two-properties-object"),S=e("025-one-of-variant2-added-string"),x=e("026-one-of-variant2-removed-string"),C=e("027-one-of-variant2-added-number"),I=e("028-one-of-variant2-removed-number"),A=e("029-one-of-variant2-added-integer"),N=e("030-one-of-variant2-removed-integer"),R=e("031-one-of-variant2-added-boolean"),L=e("032-one-of-variant2-removed-boolean"),q=e("033-one-of-variant2-added-array"),z=e("034-one-of-variant2-removed-array"),$=e("035-one-of-variant2-added-object"),D=e("036-one-of-variant2-removed-object");var J,F,B;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("001-add-one-property-string")',...(B=(F=n.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var T,E,k;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("002-remove-one-property-string")',...(k=(E=r.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var G,H,K;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("003-add-two-properties-string")',...(K=(H=t.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var M,Q,U;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("004-remove-two-properties-string")',...(U=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,X;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("005-add-one-property-number")',...(X=(W=a.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("006-remove-one-property-number")',...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,te;s.parameters={...s.parameters,docs:{...(ne=s.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("007-add-two-properties-number")',...(te=(re=s.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ae,pe;i.parameters={...i.parameters,docs:{...(oe=i.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("008-remove-two-properties-number")',...(pe=(ae=i.parameters)==null?void 0:ae.docs)==null?void 0:pe.source}}};var se,ie,me;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("009-add-one-property-integer")',...(me=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var ce,de,le;c.parameters={...c.parameters,docs:{...(ce=c.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("010-remove-one-property-integer")',...(le=(de=c.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var _e,ye,be;d.parameters={...d.parameters,docs:{...(_e=d.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("011-add-two-properties-integer")',...(be=(ye=d.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,ge,fe;l.parameters={...l.parameters,docs:{...(he=l.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("012-remove-two-properties-integer")',...(fe=(ge=l.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ue,je,ve;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("013-add-one-property-boolean")',...(ve=(je=_.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};var we,Oe,Pe;y.parameters={...y.parameters,docs:{...(we=y.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("014-remove-one-property-boolean")',...(Pe=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Se,xe,Ce;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("015-add-two-properties-boolean")',...(Ce=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Ie,Ae,Ne;h.parameters={...h.parameters,docs:{...(Ie=h.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("016-remove-two-properties-boolean")',...(Ne=(Ae=h.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var Re,Le,qe;g.parameters={...g.parameters,docs:{...(Re=g.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("017-add-one-property-array")',...(qe=(Le=g.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var ze,$e,De;f.parameters={...f.parameters,docs:{...(ze=f.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("018-remove-one-property-array")',...(De=($e=f.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var Je,Fe,Be;u.parameters={...u.parameters,docs:{...(Je=u.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("019-add-two-properties-array")',...(Be=(Fe=u.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Te,Ee,ke;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("020-remove-two-properties-array")',...(ke=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Ge,He,Ke;v.parameters={...v.parameters,docs:{...(Ge=v.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("021-add-one-property-object")',...(Ke=(He=v.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var Me,Qe,Ue;w.parameters={...w.parameters,docs:{...(Me=w.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("022-remove-one-property-object")',...(Ue=(Qe=w.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ve,We,Xe;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("023-add-two-properties-object")',...(Xe=(We=O.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;P.parameters={...P.parameters,docs:{...(Ye=P.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("024-remove-two-properties-object")',...(en=(Ze=P.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,rn,tn;S.parameters={...S.parameters,docs:{...(nn=S.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("025-one-of-variant2-added-string")',...(tn=(rn=S.parameters)==null?void 0:rn.docs)==null?void 0:tn.source}}};var on,an,pn;x.parameters={...x.parameters,docs:{...(on=x.parameters)==null?void 0:on.docs,source:{originalSource:'createCaseStory("026-one-of-variant2-removed-string")',...(pn=(an=x.parameters)==null?void 0:an.docs)==null?void 0:pn.source}}};var sn,mn,cn;C.parameters={...C.parameters,docs:{...(sn=C.parameters)==null?void 0:sn.docs,source:{originalSource:'createCaseStory("027-one-of-variant2-added-number")',...(cn=(mn=C.parameters)==null?void 0:mn.docs)==null?void 0:cn.source}}};var dn,ln,_n;I.parameters={...I.parameters,docs:{...(dn=I.parameters)==null?void 0:dn.docs,source:{originalSource:'createCaseStory("028-one-of-variant2-removed-number")',...(_n=(ln=I.parameters)==null?void 0:ln.docs)==null?void 0:_n.source}}};var yn,bn,hn;A.parameters={...A.parameters,docs:{...(yn=A.parameters)==null?void 0:yn.docs,source:{originalSource:'createCaseStory("029-one-of-variant2-added-integer")',...(hn=(bn=A.parameters)==null?void 0:bn.docs)==null?void 0:hn.source}}};var gn,fn,un;N.parameters={...N.parameters,docs:{...(gn=N.parameters)==null?void 0:gn.docs,source:{originalSource:'createCaseStory("030-one-of-variant2-removed-integer")',...(un=(fn=N.parameters)==null?void 0:fn.docs)==null?void 0:un.source}}};var jn,vn,wn;R.parameters={...R.parameters,docs:{...(jn=R.parameters)==null?void 0:jn.docs,source:{originalSource:'createCaseStory("031-one-of-variant2-added-boolean")',...(wn=(vn=R.parameters)==null?void 0:vn.docs)==null?void 0:wn.source}}};var On,Pn,Sn;L.parameters={...L.parameters,docs:{...(On=L.parameters)==null?void 0:On.docs,source:{originalSource:'createCaseStory("032-one-of-variant2-removed-boolean")',...(Sn=(Pn=L.parameters)==null?void 0:Pn.docs)==null?void 0:Sn.source}}};var xn,Cn,In;q.parameters={...q.parameters,docs:{...(xn=q.parameters)==null?void 0:xn.docs,source:{originalSource:'createCaseStory("033-one-of-variant2-added-array")',...(In=(Cn=q.parameters)==null?void 0:Cn.docs)==null?void 0:In.source}}};var An,Nn,Rn;z.parameters={...z.parameters,docs:{...(An=z.parameters)==null?void 0:An.docs,source:{originalSource:'createCaseStory("034-one-of-variant2-removed-array")',...(Rn=(Nn=z.parameters)==null?void 0:Nn.docs)==null?void 0:Rn.source}}};var Ln,qn,zn;$.parameters={...$.parameters,docs:{...(Ln=$.parameters)==null?void 0:Ln.docs,source:{originalSource:'createCaseStory("035-one-of-variant2-added-object")',...(zn=(qn=$.parameters)==null?void 0:qn.docs)==null?void 0:zn.source}}};var $n,Dn,Jn;D.parameters={...D.parameters,docs:{...($n=D.parameters)==null?void 0:$n.docs,source:{originalSource:'createCaseStory("036-one-of-variant2-removed-object")',...(Jn=(Dn=D.parameters)==null?void 0:Dn.docs)==null?void 0:Jn.source}}};const At=["Case_001_add_one_property_string","Case_002_remove_one_property_string","Case_003_add_two_properties_string","Case_004_remove_two_properties_string","Case_005_add_one_property_number","Case_006_remove_one_property_number","Case_007_add_two_properties_number","Case_008_remove_two_properties_number","Case_009_add_one_property_integer","Case_010_remove_one_property_integer","Case_011_add_two_properties_integer","Case_012_remove_two_properties_integer","Case_013_add_one_property_boolean","Case_014_remove_one_property_boolean","Case_015_add_two_properties_boolean","Case_016_remove_two_properties_boolean","Case_017_add_one_property_array","Case_018_remove_one_property_array","Case_019_add_two_properties_array","Case_020_remove_two_properties_array","Case_021_add_one_property_object","Case_022_remove_one_property_object","Case_023_add_two_properties_object","Case_024_remove_two_properties_object","Case_025_one_of_variant2_added_string","Case_026_one_of_variant2_removed_string","Case_027_one_of_variant2_added_number","Case_028_one_of_variant2_removed_number","Case_029_one_of_variant2_added_integer","Case_030_one_of_variant2_removed_integer","Case_031_one_of_variant2_added_boolean","Case_032_one_of_variant2_removed_boolean","Case_033_one_of_variant2_added_array","Case_034_one_of_variant2_removed_array","Case_035_one_of_variant2_added_object","Case_036_one_of_variant2_removed_object"];export{n as Case_001_add_one_property_string,r as Case_002_remove_one_property_string,t as Case_003_add_two_properties_string,o as Case_004_remove_two_properties_string,a as Case_005_add_one_property_number,p as Case_006_remove_one_property_number,s as Case_007_add_two_properties_number,i as Case_008_remove_two_properties_number,m as Case_009_add_one_property_integer,c as Case_010_remove_one_property_integer,d as Case_011_add_two_properties_integer,l as Case_012_remove_two_properties_integer,_ as Case_013_add_one_property_boolean,y as Case_014_remove_one_property_boolean,b as Case_015_add_two_properties_boolean,h as Case_016_remove_two_properties_boolean,g as Case_017_add_one_property_array,f as Case_018_remove_one_property_array,u as Case_019_add_two_properties_array,j as Case_020_remove_two_properties_array,v as Case_021_add_one_property_object,w as Case_022_remove_one_property_object,O as Case_023_add_two_properties_object,P as Case_024_remove_two_properties_object,S as Case_025_one_of_variant2_added_string,x as Case_026_one_of_variant2_removed_string,C as Case_027_one_of_variant2_added_number,I as Case_028_one_of_variant2_removed_number,A as Case_029_one_of_variant2_added_integer,N as Case_030_one_of_variant2_removed_integer,R as Case_031_one_of_variant2_added_boolean,L as Case_032_one_of_variant2_removed_boolean,q as Case_033_one_of_variant2_added_array,z as Case_034_one_of_variant2_removed_array,$ as Case_035_one_of_variant2_added_object,D as Case_036_one_of_variant2_removed_object,At as __namedExportsOrder,It as default};
