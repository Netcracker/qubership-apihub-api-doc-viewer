import{c as Lt}from"./diffs-samples-cases-1df1f3ae.js";import{c as Wt,J as It,j as qt,a as zt}from"./json-schema-diffs-utils-361af4d1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-2d7bd233.js";import"./DiffBadge-4d4a1c37.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-be584810.js";import"./GraphPropNodeViewer-1f5ff77a.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-3b42765c.js";import"./preprocess-c9227d17.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";const $t=`type: object
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

`,Dt=`type: object
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

`,Jt=`type: object
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
        description: Object with 0 string property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

`,Ft=`type: object
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

`,Bt=`type: object
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

`,Tt=`type: object
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

`,Et=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,kt=`type: object
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

`,Gt=`type: object
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

`,Ht=`type: object
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

`,Kt=`type: object
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
        description: Object with 0 number property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

`,Mt=`type: object
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

`,Qt=`type: object
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

`,Ut=`type: object
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

`,Xt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,Yt=`type: object
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

`,Zt=`type: object
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

`,er=`type: object
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
        description: Object with 0 integer property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

`,tr=`type: object
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

`,rr=`type: object
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

`,or=`type: object
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

`,ar=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,ir=`type: object
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

`,pr=`type: object
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

`,sr=`type: object
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

`,cr=`type: object
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
        description: Object with 0 boolean property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

`,mr=`type: object
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

`,dr=`type: object
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
      - type: object
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
        minProperties: 0
        maxProperties: 10

`,yr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,lr=`type: object
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
        description: Object with 0 array property schema(s)
        properties: {}
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
      - type: object
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

`,ur=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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
        description: Object with 0 object property schema(s)
        properties: {}
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

`,xr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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
      - type: object
        description: Object with 0 string property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

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

`,Dr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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
        description: Object with 0 number property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

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

`,Hr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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
        description: Object with 0 integer property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

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

`,eo=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,no=`type: object
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

`,to=`type: object
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

`,ro=`type: object
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

`,oo=`type: object
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
        description: Object with 0 boolean property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

`,ao=`type: object
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

`,io=`type: object
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

`,po=`type: object
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

`,so=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,co=`type: object
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

`,mo=`type: object
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

`,bo=`type: object
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

`,yo=`type: object
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
        description: Object with 0 array property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

`,lo=`type: object
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

`,_o=`type: object
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

`,fo=`type: object
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

`,ho=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,go=`type: object
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

`,jo=`type: object
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

`,vo=`type: object
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

`,uo=`type: object
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
        description: Object with 0 object property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

`,Oo=`type: object
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

`,wo=`type: object
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

`,Po=`type: object
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

`,So=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,Co=Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/001-object-variant-add-one-property-string/before.yaml":$t,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/002-object-variant-remove-one-property-string/before.yaml":Dt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/003-object-variant-add-two-properties-string/before.yaml":Jt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/004-object-variant-remove-two-properties-string/before.yaml":Ft,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/005-object-variant-added-string/before.yaml":Bt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/006-object-variant-removed-string/before.yaml":Tt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/007-one-of-prop-added-string/before.yaml":Et,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/008-one-of-prop-removed-string/before.yaml":kt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/009-object-variant-add-one-property-number/before.yaml":Gt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/010-object-variant-remove-one-property-number/before.yaml":Ht,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/011-object-variant-add-two-properties-number/before.yaml":Kt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/012-object-variant-remove-two-properties-number/before.yaml":Mt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/013-object-variant-added-number/before.yaml":Qt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/014-object-variant-removed-number/before.yaml":Ut,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/015-one-of-prop-added-number/before.yaml":Xt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/016-one-of-prop-removed-number/before.yaml":Yt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/017-object-variant-add-one-property-integer/before.yaml":Zt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/018-object-variant-remove-one-property-integer/before.yaml":er,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/019-object-variant-add-two-properties-integer/before.yaml":nr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/020-object-variant-remove-two-properties-integer/before.yaml":tr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/021-object-variant-added-integer/before.yaml":rr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/022-object-variant-removed-integer/before.yaml":or,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/023-one-of-prop-added-integer/before.yaml":ar,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/024-one-of-prop-removed-integer/before.yaml":ir,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/025-object-variant-add-one-property-boolean/before.yaml":pr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/026-object-variant-remove-one-property-boolean/before.yaml":sr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/027-object-variant-add-two-properties-boolean/before.yaml":cr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/028-object-variant-remove-two-properties-boolean/before.yaml":mr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/029-object-variant-added-boolean/before.yaml":dr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/030-object-variant-removed-boolean/before.yaml":br,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/031-one-of-prop-added-boolean/before.yaml":yr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/032-one-of-prop-removed-boolean/before.yaml":lr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/033-object-variant-add-one-property-array/before.yaml":_r,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/034-object-variant-remove-one-property-array/before.yaml":fr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/035-object-variant-add-two-properties-array/before.yaml":hr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/036-object-variant-remove-two-properties-array/before.yaml":gr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/037-object-variant-added-array/before.yaml":jr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/038-object-variant-removed-array/before.yaml":vr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/039-one-of-prop-added-array/before.yaml":ur,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/040-one-of-prop-removed-array/before.yaml":Or,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/041-object-variant-add-one-property-object/before.yaml":wr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/042-object-variant-remove-one-property-object/before.yaml":Pr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/043-object-variant-add-two-properties-object/before.yaml":Sr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/044-object-variant-remove-two-properties-object/before.yaml":Cr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/045-object-variant-added-object/before.yaml":Ar,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/046-object-variant-removed-object/before.yaml":Rr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/047-one-of-prop-added-object/before.yaml":xr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/048-one-of-prop-removed-object/before.yaml":Vr}),Ao=Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/001-object-variant-add-one-property-string/after.yaml":Nr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/002-object-variant-remove-one-property-string/after.yaml":Ir,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/003-object-variant-add-two-properties-string/after.yaml":Lr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/004-object-variant-remove-two-properties-string/after.yaml":Wr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/005-object-variant-added-string/after.yaml":qr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/006-object-variant-removed-string/after.yaml":zr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/007-one-of-prop-added-string/after.yaml":$r,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/008-one-of-prop-removed-string/after.yaml":Dr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/009-object-variant-add-one-property-number/after.yaml":Jr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/010-object-variant-remove-one-property-number/after.yaml":Fr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/011-object-variant-add-two-properties-number/after.yaml":Br,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/012-object-variant-remove-two-properties-number/after.yaml":Tr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/013-object-variant-added-number/after.yaml":Er,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/014-object-variant-removed-number/after.yaml":kr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/015-one-of-prop-added-number/after.yaml":Gr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/016-one-of-prop-removed-number/after.yaml":Hr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/017-object-variant-add-one-property-integer/after.yaml":Kr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/018-object-variant-remove-one-property-integer/after.yaml":Mr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/019-object-variant-add-two-properties-integer/after.yaml":Qr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/020-object-variant-remove-two-properties-integer/after.yaml":Ur,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/021-object-variant-added-integer/after.yaml":Xr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/022-object-variant-removed-integer/after.yaml":Yr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/023-one-of-prop-added-integer/after.yaml":Zr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/024-one-of-prop-removed-integer/after.yaml":eo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/025-object-variant-add-one-property-boolean/after.yaml":no,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/026-object-variant-remove-one-property-boolean/after.yaml":to,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/027-object-variant-add-two-properties-boolean/after.yaml":ro,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/028-object-variant-remove-two-properties-boolean/after.yaml":oo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/029-object-variant-added-boolean/after.yaml":ao,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/030-object-variant-removed-boolean/after.yaml":io,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/031-one-of-prop-added-boolean/after.yaml":po,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/032-one-of-prop-removed-boolean/after.yaml":so,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/033-object-variant-add-one-property-array/after.yaml":co,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/034-object-variant-remove-one-property-array/after.yaml":mo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/035-object-variant-add-two-properties-array/after.yaml":bo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/036-object-variant-remove-two-properties-array/after.yaml":yo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/037-object-variant-added-array/after.yaml":lo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/038-object-variant-removed-array/after.yaml":_o,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/039-one-of-prop-added-array/after.yaml":fo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/040-one-of-prop-removed-array/after.yaml":ho,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/041-object-variant-add-one-property-object/after.yaml":go,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/042-object-variant-remove-one-property-object/after.yaml":jo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/043-object-variant-add-two-properties-object/after.yaml":vo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/044-object-variant-remove-two-properties-object/after.yaml":uo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/045-object-variant-added-object/after.yaml":Oo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/046-object-variant-removed-object/after.yaml":wo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/047-one-of-prop-added-object/after.yaml":Po,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/048-one-of-prop-removed-object/after.yaml":So}),Ro=Lt(Co,Ao),xo=Wt(Ro),Ko={title:"JSON Schema Diffs Suite/OneOf Object Variant",component:It,argTypes:qt},e=zt(It,xo),n={...e("001-object-variant-add-one-property-string"),name:"Case 001 - [Object Variant] - Added 1 property with type = string"},t={...e("002-object-variant-remove-one-property-string"),name:"Case 002 - [Object Variant] - Removed 1 property with type = string"},r={...e("003-object-variant-add-two-properties-string"),name:"Case 003 - [Object Variant] - Added 2 properties with type = string"},o={...e("004-object-variant-remove-two-properties-string"),name:"Case 004 - [Object Variant] - Removed 2 properties with type = string"},a={...e("005-object-variant-added-string"),name:"Case 005 - [Object Variant] - Added, property = string"},i={...e("006-object-variant-removed-string"),name:"Case 006 - [Object Variant] - Removed, property = string"},p={...e("007-one-of-prop-added-string"),name:"Case 007 - [Whole OneOf] - Added with Object Variant, property = string"},s={...e("008-one-of-prop-removed-string"),name:"Case 008 - [Whole OneOf] - Removed with Object Variant, property = string"},c={...e("009-object-variant-add-one-property-number"),name:"Case 009 - [Object Variant] - Added 1 property with type = number"},m={...e("010-object-variant-remove-one-property-number"),name:"Case 010 - [Object Variant] - Removed 1 property with type = number"},d={...e("011-object-variant-add-two-properties-number"),name:"Case 011 - [Object Variant] - Added 2 properties with type = number"},b={...e("012-object-variant-remove-two-properties-number"),name:"Case 012 - [Object Variant] - Removed 2 properties with type = number"},y={...e("013-object-variant-added-number"),name:"Case 013 - [Object Variant] - Added, property = number"},l={...e("014-object-variant-removed-number"),name:"Case 014 - [Object Variant] - Removed, property = number"},_={...e("015-one-of-prop-added-number"),name:"Case 015 - [Whole OneOf] - Added with Object Variant, property = number"},f={...e("016-one-of-prop-removed-number"),name:"Case 016 - [Whole OneOf] - Removed with Object Variant, property = number"},h={...e("017-object-variant-add-one-property-integer"),name:"Case 017 - [Object Variant] - Added 1 property with type = integer"},g={...e("018-object-variant-remove-one-property-integer"),name:"Case 018 - [Object Variant] - Removed 1 property with type = integer"},j={...e("019-object-variant-add-two-properties-integer"),name:"Case 019 - [Object Variant] - Added 2 properties with type = integer"},v={...e("020-object-variant-remove-two-properties-integer"),name:"Case 020 - [Object Variant] - Removed 2 properties with type = integer"},u={...e("021-object-variant-added-integer"),name:"Case 021 - [Object Variant] - Added, property = integer"},O={...e("022-object-variant-removed-integer"),name:"Case 022 - [Object Variant] - Removed, property = integer"},w={...e("023-one-of-prop-added-integer"),name:"Case 023 - [Whole OneOf] - Added with Object Variant, property = integer"},P={...e("024-one-of-prop-removed-integer"),name:"Case 024 - [Whole OneOf] - Removed with Object Variant, property = integer"},S={...e("025-object-variant-add-one-property-boolean"),name:"Case 025 - [Object Variant] - Added 1 property with type = boolean"},C={...e("026-object-variant-remove-one-property-boolean"),name:"Case 026 - [Object Variant] - Removed 1 property with type = boolean"},A={...e("027-object-variant-add-two-properties-boolean"),name:"Case 027 - [Object Variant] - Added 2 properties with type = boolean"},R={...e("028-object-variant-remove-two-properties-boolean"),name:"Case 028 - [Object Variant] - Removed 2 properties with type = boolean"},x={...e("029-object-variant-added-boolean"),name:"Case 029 - [Object Variant] - Added, property = boolean"},V={...e("030-object-variant-removed-boolean"),name:"Case 030 - [Object Variant] - Removed, property = boolean"},N={...e("031-one-of-prop-added-boolean"),name:"Case 031 - [Whole OneOf] - Added with Object Variant, property = boolean"},I={...e("032-one-of-prop-removed-boolean"),name:"Case 032 - [Whole OneOf] - Removed with Object Variant, property = boolean"},L={...e("033-object-variant-add-one-property-array"),name:"Case 033 - [Object Variant] - Added 1 property with type = array"},W={...e("034-object-variant-remove-one-property-array"),name:"Case 034 - [Object Variant] - Removed 1 property with type = array"},q={...e("035-object-variant-add-two-properties-array"),name:"Case 035 - [Object Variant] - Added 2 properties with type = array"},z={...e("036-object-variant-remove-two-properties-array"),name:"Case 036 - [Object Variant] - Removed 2 properties with type = array"},$={...e("037-object-variant-added-array"),name:"Case 037 - [Object Variant] - Added, property = array"},D={...e("038-object-variant-removed-array"),name:"Case 038 - [Object Variant] - Removed, property = array"},J={...e("039-one-of-prop-added-array"),name:"Case 039 - [Whole OneOf] - Added with Object Variant, property = array"},F={...e("040-one-of-prop-removed-array"),name:"Case 040 - [Whole OneOf] - Removed with Object Variant, property = array"},B={...e("041-object-variant-add-one-property-object"),name:"Case 041 - [Object Variant] - Added 1 property with type = object"},T={...e("042-object-variant-remove-one-property-object"),name:"Case 042 - [Object Variant] - Removed 1 property with type = object"},E={...e("043-object-variant-add-two-properties-object"),name:"Case 043 - [Object Variant] - Added 2 properties with type = object"},k={...e("044-object-variant-remove-two-properties-object"),name:"Case 044 - [Object Variant] - Removed 2 properties with type = object"},G={...e("045-object-variant-added-object"),name:"Case 045 - [Object Variant] - Added, property = object"},H={...e("046-object-variant-removed-object"),name:"Case 046 - [Object Variant] - Removed, property = object"},K={...e("047-one-of-prop-added-object"),name:"Case 047 - [Whole OneOf] - Added with Object Variant, property = object"},M={...e("048-one-of-prop-removed-object"),name:"Case 048 - [Whole OneOf] - Removed with Object Variant, property = object"};var Q,U,X;n.parameters={...n.parameters,docs:{...(Q=n.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...createCaseStory("001-object-variant-add-one-property-string"),
  name: "Case 001 - [Object Variant] - Added 1 property with type = string"
}`,...(X=(U=n.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...createCaseStory("002-object-variant-remove-one-property-string"),
  name: "Case 002 - [Object Variant] - Removed 1 property with type = string"
}`,...(ee=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,re;r.parameters={...r.parameters,docs:{...(ne=r.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...createCaseStory("003-object-variant-add-two-properties-string"),
  name: "Case 003 - [Object Variant] - Added 2 properties with type = string"
}`,...(re=(te=r.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ae,ie;o.parameters={...o.parameters,docs:{...(oe=o.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...createCaseStory("004-object-variant-remove-two-properties-string"),
  name: "Case 004 - [Object Variant] - Removed 2 properties with type = string"
}`,...(ie=(ae=o.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var pe,se,ce;a.parameters={...a.parameters,docs:{...(pe=a.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  ...createCaseStory("005-object-variant-added-string"),
  name: "Case 005 - [Object Variant] - Added, property = string"
}`,...(ce=(se=a.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var me,de,be;i.parameters={...i.parameters,docs:{...(me=i.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...createCaseStory("006-object-variant-removed-string"),
  name: "Case 006 - [Object Variant] - Removed, property = string"
}`,...(be=(de=i.parameters)==null?void 0:de.docs)==null?void 0:be.source}}};var ye,le,_e;p.parameters={...p.parameters,docs:{...(ye=p.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...createCaseStory("007-one-of-prop-added-string"),
  name: "Case 007 - [Whole OneOf] - Added with Object Variant, property = string"
}`,...(_e=(le=p.parameters)==null?void 0:le.docs)==null?void 0:_e.source}}};var fe,he,ge;s.parameters={...s.parameters,docs:{...(fe=s.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...createCaseStory("008-one-of-prop-removed-string"),
  name: "Case 008 - [Whole OneOf] - Removed with Object Variant, property = string"
}`,...(ge=(he=s.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var je,ve,ue;c.parameters={...c.parameters,docs:{...(je=c.parameters)==null?void 0:je.docs,source:{originalSource:`{
  ...createCaseStory("009-object-variant-add-one-property-number"),
  name: "Case 009 - [Object Variant] - Added 1 property with type = number"
}`,...(ue=(ve=c.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var Oe,we,Pe;m.parameters={...m.parameters,docs:{...(Oe=m.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  ...createCaseStory("010-object-variant-remove-one-property-number"),
  name: "Case 010 - [Object Variant] - Removed 1 property with type = number"
}`,...(Pe=(we=m.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};var Se,Ce,Ae;d.parameters={...d.parameters,docs:{...(Se=d.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  ...createCaseStory("011-object-variant-add-two-properties-number"),
  name: "Case 011 - [Object Variant] - Added 2 properties with type = number"
}`,...(Ae=(Ce=d.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source}}};var Re,xe,Ve;b.parameters={...b.parameters,docs:{...(Re=b.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  ...createCaseStory("012-object-variant-remove-two-properties-number"),
  name: "Case 012 - [Object Variant] - Removed 2 properties with type = number"
}`,...(Ve=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:Ve.source}}};var Ne,Ie,Le;y.parameters={...y.parameters,docs:{...(Ne=y.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  ...createCaseStory("013-object-variant-added-number"),
  name: "Case 013 - [Object Variant] - Added, property = number"
}`,...(Le=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var We,qe,ze;l.parameters={...l.parameters,docs:{...(We=l.parameters)==null?void 0:We.docs,source:{originalSource:`{
  ...createCaseStory("014-object-variant-removed-number"),
  name: "Case 014 - [Object Variant] - Removed, property = number"
}`,...(ze=(qe=l.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var $e,De,Je;_.parameters={..._.parameters,docs:{...($e=_.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  ...createCaseStory("015-one-of-prop-added-number"),
  name: "Case 015 - [Whole OneOf] - Added with Object Variant, property = number"
}`,...(Je=(De=_.parameters)==null?void 0:De.docs)==null?void 0:Je.source}}};var Fe,Be,Te;f.parameters={...f.parameters,docs:{...(Fe=f.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  ...createCaseStory("016-one-of-prop-removed-number"),
  name: "Case 016 - [Whole OneOf] - Removed with Object Variant, property = number"
}`,...(Te=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ee,ke,Ge;h.parameters={...h.parameters,docs:{...(Ee=h.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  ...createCaseStory("017-object-variant-add-one-property-integer"),
  name: "Case 017 - [Object Variant] - Added 1 property with type = integer"
}`,...(Ge=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:Ge.source}}};var He,Ke,Me;g.parameters={...g.parameters,docs:{...(He=g.parameters)==null?void 0:He.docs,source:{originalSource:`{
  ...createCaseStory("018-object-variant-remove-one-property-integer"),
  name: "Case 018 - [Object Variant] - Removed 1 property with type = integer"
}`,...(Me=(Ke=g.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Qe,Ue,Xe;j.parameters={...j.parameters,docs:{...(Qe=j.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  ...createCaseStory("019-object-variant-add-two-properties-integer"),
  name: "Case 019 - [Object Variant] - Added 2 properties with type = integer"
}`,...(Xe=(Ue=j.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;v.parameters={...v.parameters,docs:{...(Ye=v.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  ...createCaseStory("020-object-variant-remove-two-properties-integer"),
  name: "Case 020 - [Object Variant] - Removed 2 properties with type = integer"
}`,...(en=(Ze=v.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,tn,rn;u.parameters={...u.parameters,docs:{...(nn=u.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  ...createCaseStory("021-object-variant-added-integer"),
  name: "Case 021 - [Object Variant] - Added, property = integer"
}`,...(rn=(tn=u.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var on,an,pn;O.parameters={...O.parameters,docs:{...(on=O.parameters)==null?void 0:on.docs,source:{originalSource:`{
  ...createCaseStory("022-object-variant-removed-integer"),
  name: "Case 022 - [Object Variant] - Removed, property = integer"
}`,...(pn=(an=O.parameters)==null?void 0:an.docs)==null?void 0:pn.source}}};var sn,cn,mn;w.parameters={...w.parameters,docs:{...(sn=w.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  ...createCaseStory("023-one-of-prop-added-integer"),
  name: "Case 023 - [Whole OneOf] - Added with Object Variant, property = integer"
}`,...(mn=(cn=w.parameters)==null?void 0:cn.docs)==null?void 0:mn.source}}};var dn,bn,yn;P.parameters={...P.parameters,docs:{...(dn=P.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  ...createCaseStory("024-one-of-prop-removed-integer"),
  name: "Case 024 - [Whole OneOf] - Removed with Object Variant, property = integer"
}`,...(yn=(bn=P.parameters)==null?void 0:bn.docs)==null?void 0:yn.source}}};var ln,_n,fn;S.parameters={...S.parameters,docs:{...(ln=S.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  ...createCaseStory("025-object-variant-add-one-property-boolean"),
  name: "Case 025 - [Object Variant] - Added 1 property with type = boolean"
}`,...(fn=(_n=S.parameters)==null?void 0:_n.docs)==null?void 0:fn.source}}};var hn,gn,jn;C.parameters={...C.parameters,docs:{...(hn=C.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  ...createCaseStory("026-object-variant-remove-one-property-boolean"),
  name: "Case 026 - [Object Variant] - Removed 1 property with type = boolean"
}`,...(jn=(gn=C.parameters)==null?void 0:gn.docs)==null?void 0:jn.source}}};var vn,un,On;A.parameters={...A.parameters,docs:{...(vn=A.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  ...createCaseStory("027-object-variant-add-two-properties-boolean"),
  name: "Case 027 - [Object Variant] - Added 2 properties with type = boolean"
}`,...(On=(un=A.parameters)==null?void 0:un.docs)==null?void 0:On.source}}};var wn,Pn,Sn;R.parameters={...R.parameters,docs:{...(wn=R.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  ...createCaseStory("028-object-variant-remove-two-properties-boolean"),
  name: "Case 028 - [Object Variant] - Removed 2 properties with type = boolean"
}`,...(Sn=(Pn=R.parameters)==null?void 0:Pn.docs)==null?void 0:Sn.source}}};var Cn,An,Rn;x.parameters={...x.parameters,docs:{...(Cn=x.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  ...createCaseStory("029-object-variant-added-boolean"),
  name: "Case 029 - [Object Variant] - Added, property = boolean"
}`,...(Rn=(An=x.parameters)==null?void 0:An.docs)==null?void 0:Rn.source}}};var xn,Vn,Nn;V.parameters={...V.parameters,docs:{...(xn=V.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  ...createCaseStory("030-object-variant-removed-boolean"),
  name: "Case 030 - [Object Variant] - Removed, property = boolean"
}`,...(Nn=(Vn=V.parameters)==null?void 0:Vn.docs)==null?void 0:Nn.source}}};var In,Ln,Wn;N.parameters={...N.parameters,docs:{...(In=N.parameters)==null?void 0:In.docs,source:{originalSource:`{
  ...createCaseStory("031-one-of-prop-added-boolean"),
  name: "Case 031 - [Whole OneOf] - Added with Object Variant, property = boolean"
}`,...(Wn=(Ln=N.parameters)==null?void 0:Ln.docs)==null?void 0:Wn.source}}};var qn,zn,$n;I.parameters={...I.parameters,docs:{...(qn=I.parameters)==null?void 0:qn.docs,source:{originalSource:`{
  ...createCaseStory("032-one-of-prop-removed-boolean"),
  name: "Case 032 - [Whole OneOf] - Removed with Object Variant, property = boolean"
}`,...($n=(zn=I.parameters)==null?void 0:zn.docs)==null?void 0:$n.source}}};var Dn,Jn,Fn;L.parameters={...L.parameters,docs:{...(Dn=L.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
  ...createCaseStory("033-object-variant-add-one-property-array"),
  name: "Case 033 - [Object Variant] - Added 1 property with type = array"
}`,...(Fn=(Jn=L.parameters)==null?void 0:Jn.docs)==null?void 0:Fn.source}}};var Bn,Tn,En;W.parameters={...W.parameters,docs:{...(Bn=W.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
  ...createCaseStory("034-object-variant-remove-one-property-array"),
  name: "Case 034 - [Object Variant] - Removed 1 property with type = array"
}`,...(En=(Tn=W.parameters)==null?void 0:Tn.docs)==null?void 0:En.source}}};var kn,Gn,Hn;q.parameters={...q.parameters,docs:{...(kn=q.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  ...createCaseStory("035-object-variant-add-two-properties-array"),
  name: "Case 035 - [Object Variant] - Added 2 properties with type = array"
}`,...(Hn=(Gn=q.parameters)==null?void 0:Gn.docs)==null?void 0:Hn.source}}};var Kn,Mn,Qn;z.parameters={...z.parameters,docs:{...(Kn=z.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
  ...createCaseStory("036-object-variant-remove-two-properties-array"),
  name: "Case 036 - [Object Variant] - Removed 2 properties with type = array"
}`,...(Qn=(Mn=z.parameters)==null?void 0:Mn.docs)==null?void 0:Qn.source}}};var Un,Xn,Yn;$.parameters={...$.parameters,docs:{...(Un=$.parameters)==null?void 0:Un.docs,source:{originalSource:`{
  ...createCaseStory("037-object-variant-added-array"),
  name: "Case 037 - [Object Variant] - Added, property = array"
}`,...(Yn=(Xn=$.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Zn,et,nt;D.parameters={...D.parameters,docs:{...(Zn=D.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
  ...createCaseStory("038-object-variant-removed-array"),
  name: "Case 038 - [Object Variant] - Removed, property = array"
}`,...(nt=(et=D.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var tt,rt,ot;J.parameters={...J.parameters,docs:{...(tt=J.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  ...createCaseStory("039-one-of-prop-added-array"),
  name: "Case 039 - [Whole OneOf] - Added with Object Variant, property = array"
}`,...(ot=(rt=J.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var at,it,pt;F.parameters={...F.parameters,docs:{...(at=F.parameters)==null?void 0:at.docs,source:{originalSource:`{
  ...createCaseStory("040-one-of-prop-removed-array"),
  name: "Case 040 - [Whole OneOf] - Removed with Object Variant, property = array"
}`,...(pt=(it=F.parameters)==null?void 0:it.docs)==null?void 0:pt.source}}};var st,ct,mt;B.parameters={...B.parameters,docs:{...(st=B.parameters)==null?void 0:st.docs,source:{originalSource:`{
  ...createCaseStory("041-object-variant-add-one-property-object"),
  name: "Case 041 - [Object Variant] - Added 1 property with type = object"
}`,...(mt=(ct=B.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};var dt,bt,yt;T.parameters={...T.parameters,docs:{...(dt=T.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  ...createCaseStory("042-object-variant-remove-one-property-object"),
  name: "Case 042 - [Object Variant] - Removed 1 property with type = object"
}`,...(yt=(bt=T.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};var lt,_t,ft;E.parameters={...E.parameters,docs:{...(lt=E.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  ...createCaseStory("043-object-variant-add-two-properties-object"),
  name: "Case 043 - [Object Variant] - Added 2 properties with type = object"
}`,...(ft=(_t=E.parameters)==null?void 0:_t.docs)==null?void 0:ft.source}}};var ht,gt,jt;k.parameters={...k.parameters,docs:{...(ht=k.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  ...createCaseStory("044-object-variant-remove-two-properties-object"),
  name: "Case 044 - [Object Variant] - Removed 2 properties with type = object"
}`,...(jt=(gt=k.parameters)==null?void 0:gt.docs)==null?void 0:jt.source}}};var vt,ut,Ot;G.parameters={...G.parameters,docs:{...(vt=G.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  ...createCaseStory("045-object-variant-added-object"),
  name: "Case 045 - [Object Variant] - Added, property = object"
}`,...(Ot=(ut=G.parameters)==null?void 0:ut.docs)==null?void 0:Ot.source}}};var wt,Pt,St;H.parameters={...H.parameters,docs:{...(wt=H.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  ...createCaseStory("046-object-variant-removed-object"),
  name: "Case 046 - [Object Variant] - Removed, property = object"
}`,...(St=(Pt=H.parameters)==null?void 0:Pt.docs)==null?void 0:St.source}}};var Ct,At,Rt;K.parameters={...K.parameters,docs:{...(Ct=K.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  ...createCaseStory("047-one-of-prop-added-object"),
  name: "Case 047 - [Whole OneOf] - Added with Object Variant, property = object"
}`,...(Rt=(At=K.parameters)==null?void 0:At.docs)==null?void 0:Rt.source}}};var xt,Vt,Nt;M.parameters={...M.parameters,docs:{...(xt=M.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  ...createCaseStory("048-one-of-prop-removed-object"),
  name: "Case 048 - [Whole OneOf] - Removed with Object Variant, property = object"
}`,...(Nt=(Vt=M.parameters)==null?void 0:Vt.docs)==null?void 0:Nt.source}}};const Mo=["Case_001_object_variant_add_one_property_string","Case_002_object_variant_remove_one_property_string","Case_003_object_variant_add_two_properties_string","Case_004_object_variant_remove_two_properties_string","Case_005_object_variant_added_string","Case_006_object_variant_removed_string","Case_007_one_of_prop_added_string","Case_008_one_of_prop_removed_string","Case_009_object_variant_add_one_property_number","Case_010_object_variant_remove_one_property_number","Case_011_object_variant_add_two_properties_number","Case_012_object_variant_remove_two_properties_number","Case_013_object_variant_added_number","Case_014_object_variant_removed_number","Case_015_one_of_prop_added_number","Case_016_one_of_prop_removed_number","Case_017_object_variant_add_one_property_integer","Case_018_object_variant_remove_one_property_integer","Case_019_object_variant_add_two_properties_integer","Case_020_object_variant_remove_two_properties_integer","Case_021_object_variant_added_integer","Case_022_object_variant_removed_integer","Case_023_one_of_prop_added_integer","Case_024_one_of_prop_removed_integer","Case_025_object_variant_add_one_property_boolean","Case_026_object_variant_remove_one_property_boolean","Case_027_object_variant_add_two_properties_boolean","Case_028_object_variant_remove_two_properties_boolean","Case_029_object_variant_added_boolean","Case_030_object_variant_removed_boolean","Case_031_one_of_prop_added_boolean","Case_032_one_of_prop_removed_boolean","Case_033_object_variant_add_one_property_array","Case_034_object_variant_remove_one_property_array","Case_035_object_variant_add_two_properties_array","Case_036_object_variant_remove_two_properties_array","Case_037_object_variant_added_array","Case_038_object_variant_removed_array","Case_039_one_of_prop_added_array","Case_040_one_of_prop_removed_array","Case_041_object_variant_add_one_property_object","Case_042_object_variant_remove_one_property_object","Case_043_object_variant_add_two_properties_object","Case_044_object_variant_remove_two_properties_object","Case_045_object_variant_added_object","Case_046_object_variant_removed_object","Case_047_one_of_prop_added_object","Case_048_one_of_prop_removed_object"];export{n as Case_001_object_variant_add_one_property_string,t as Case_002_object_variant_remove_one_property_string,r as Case_003_object_variant_add_two_properties_string,o as Case_004_object_variant_remove_two_properties_string,a as Case_005_object_variant_added_string,i as Case_006_object_variant_removed_string,p as Case_007_one_of_prop_added_string,s as Case_008_one_of_prop_removed_string,c as Case_009_object_variant_add_one_property_number,m as Case_010_object_variant_remove_one_property_number,d as Case_011_object_variant_add_two_properties_number,b as Case_012_object_variant_remove_two_properties_number,y as Case_013_object_variant_added_number,l as Case_014_object_variant_removed_number,_ as Case_015_one_of_prop_added_number,f as Case_016_one_of_prop_removed_number,h as Case_017_object_variant_add_one_property_integer,g as Case_018_object_variant_remove_one_property_integer,j as Case_019_object_variant_add_two_properties_integer,v as Case_020_object_variant_remove_two_properties_integer,u as Case_021_object_variant_added_integer,O as Case_022_object_variant_removed_integer,w as Case_023_one_of_prop_added_integer,P as Case_024_one_of_prop_removed_integer,S as Case_025_object_variant_add_one_property_boolean,C as Case_026_object_variant_remove_one_property_boolean,A as Case_027_object_variant_add_two_properties_boolean,R as Case_028_object_variant_remove_two_properties_boolean,x as Case_029_object_variant_added_boolean,V as Case_030_object_variant_removed_boolean,N as Case_031_one_of_prop_added_boolean,I as Case_032_one_of_prop_removed_boolean,L as Case_033_object_variant_add_one_property_array,W as Case_034_object_variant_remove_one_property_array,q as Case_035_object_variant_add_two_properties_array,z as Case_036_object_variant_remove_two_properties_array,$ as Case_037_object_variant_added_array,D as Case_038_object_variant_removed_array,J as Case_039_one_of_prop_added_array,F as Case_040_one_of_prop_removed_array,B as Case_041_object_variant_add_one_property_object,T as Case_042_object_variant_remove_one_property_object,E as Case_043_object_variant_add_two_properties_object,k as Case_044_object_variant_remove_two_properties_object,G as Case_045_object_variant_added_object,H as Case_046_object_variant_removed_object,K as Case_047_one_of_prop_added_object,M as Case_048_one_of_prop_removed_object,Mo as __namedExportsOrder,Ko as default};
