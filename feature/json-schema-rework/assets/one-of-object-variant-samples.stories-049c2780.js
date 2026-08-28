import{c as qt}from"./diffs-samples-cases-1df1f3ae.js";import{c as zt,J as Lt,j as $t,a as Dt}from"./json-schema-diffs-utils-91655df0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-41da122b.js";import"./DiffBadge-636b527d.js";import"./IndexesNodeViewer-7234b4ff.js";import"./DdlTableDiffsViewer-956a7783.js";/* empty css              */import"./DdlTableViewer-82237eef.js";import"./GraphQLOperationDiffViewer-ad5e8f40.js";import"./GraphPropNodeViewer-47a3eb3c.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-5f3933cf.js";import"./preprocess-6c565c6a.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const Jt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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
      - type: object
        description: Object with 0 string property schema(s)
        properties: {}
        minProperties: 0
        maxProperties: 10

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

`,Et=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,Vt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,kt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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
        description: Object with 0 number property schema(s)
        properties: {}
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

`,Wt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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
        description: Object with 0 array property schema(s)
        properties: {}
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

`,Rr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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
        description: Object with 0 string property schema(s)
        properties: {}
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
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

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

`,Fr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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
        description: Object with 0 number property schema(s)
        properties: {}
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

`,Kr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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

`,go=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,ho=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Co=Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/001-object-variant-add-one-property-string/before.yaml":Jt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/002-object-variant-remove-one-property-string/before.yaml":Ft,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/003-object-variant-add-two-properties-string/before.yaml":Bt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/004-object-variant-remove-two-properties-string/before.yaml":Tt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/005-object-variant-added-string/before.yaml":Et,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/006-object-variant-removed-string/before.yaml":Vt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/007-one-of-prop-added-string/before.yaml":kt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/008-one-of-prop-removed-string/before.yaml":Gt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/009-object-variant-add-one-property-number/before.yaml":Ht,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/010-object-variant-remove-one-property-number/before.yaml":Kt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/011-object-variant-add-two-properties-number/before.yaml":Mt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/012-object-variant-remove-two-properties-number/before.yaml":Qt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/013-object-variant-added-number/before.yaml":Ut,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/014-object-variant-removed-number/before.yaml":Wt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/015-one-of-prop-added-number/before.yaml":Xt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/016-one-of-prop-removed-number/before.yaml":Yt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/017-object-variant-add-one-property-integer/before.yaml":Zt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/018-object-variant-remove-one-property-integer/before.yaml":er,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/019-object-variant-add-two-properties-integer/before.yaml":nr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/020-object-variant-remove-two-properties-integer/before.yaml":tr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/021-object-variant-added-integer/before.yaml":rr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/022-object-variant-removed-integer/before.yaml":or,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/023-one-of-prop-added-integer/before.yaml":ar,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/024-one-of-prop-removed-integer/before.yaml":ir,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/025-object-variant-add-one-property-boolean/before.yaml":pr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/026-object-variant-remove-one-property-boolean/before.yaml":sr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/027-object-variant-add-two-properties-boolean/before.yaml":cr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/028-object-variant-remove-two-properties-boolean/before.yaml":mr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/029-object-variant-added-boolean/before.yaml":dr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/030-object-variant-removed-boolean/before.yaml":br,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/031-one-of-prop-added-boolean/before.yaml":yr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/032-one-of-prop-removed-boolean/before.yaml":lr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/033-object-variant-add-one-property-array/before.yaml":_r,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/034-object-variant-remove-one-property-array/before.yaml":fr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/035-object-variant-add-two-properties-array/before.yaml":gr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/036-object-variant-remove-two-properties-array/before.yaml":hr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/037-object-variant-added-array/before.yaml":vr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/038-object-variant-removed-array/before.yaml":jr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/039-one-of-prop-added-array/before.yaml":ur,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/040-one-of-prop-removed-array/before.yaml":Or,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/041-object-variant-add-one-property-object/before.yaml":Pr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/042-object-variant-remove-one-property-object/before.yaml":wr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/043-object-variant-add-two-properties-object/before.yaml":Sr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/044-object-variant-remove-two-properties-object/before.yaml":Cr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/045-object-variant-added-object/before.yaml":xr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/046-object-variant-removed-object/before.yaml":Ar,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/047-one-of-prop-added-object/before.yaml":Rr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/048-one-of-prop-removed-object/before.yaml":Nr}),xo=Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/001-object-variant-add-one-property-string/after.yaml":Ir,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/002-object-variant-remove-one-property-string/after.yaml":Lr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/003-object-variant-add-two-properties-string/after.yaml":qr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/004-object-variant-remove-two-properties-string/after.yaml":zr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/005-object-variant-added-string/after.yaml":$r,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/006-object-variant-removed-string/after.yaml":Dr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/007-one-of-prop-added-string/after.yaml":Jr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/008-one-of-prop-removed-string/after.yaml":Fr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/009-object-variant-add-one-property-number/after.yaml":Br,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/010-object-variant-remove-one-property-number/after.yaml":Tr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/011-object-variant-add-two-properties-number/after.yaml":Er,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/012-object-variant-remove-two-properties-number/after.yaml":Vr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/013-object-variant-added-number/after.yaml":kr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/014-object-variant-removed-number/after.yaml":Gr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/015-one-of-prop-added-number/after.yaml":Hr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/016-one-of-prop-removed-number/after.yaml":Kr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/017-object-variant-add-one-property-integer/after.yaml":Mr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/018-object-variant-remove-one-property-integer/after.yaml":Qr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/019-object-variant-add-two-properties-integer/after.yaml":Ur,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/020-object-variant-remove-two-properties-integer/after.yaml":Wr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/021-object-variant-added-integer/after.yaml":Xr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/022-object-variant-removed-integer/after.yaml":Yr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/023-one-of-prop-added-integer/after.yaml":Zr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/024-one-of-prop-removed-integer/after.yaml":eo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/025-object-variant-add-one-property-boolean/after.yaml":no,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/026-object-variant-remove-one-property-boolean/after.yaml":to,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/027-object-variant-add-two-properties-boolean/after.yaml":ro,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/028-object-variant-remove-two-properties-boolean/after.yaml":oo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/029-object-variant-added-boolean/after.yaml":ao,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/030-object-variant-removed-boolean/after.yaml":io,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/031-one-of-prop-added-boolean/after.yaml":po,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/032-one-of-prop-removed-boolean/after.yaml":so,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/033-object-variant-add-one-property-array/after.yaml":co,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/034-object-variant-remove-one-property-array/after.yaml":mo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/035-object-variant-add-two-properties-array/after.yaml":bo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/036-object-variant-remove-two-properties-array/after.yaml":yo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/037-object-variant-added-array/after.yaml":lo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/038-object-variant-removed-array/after.yaml":_o,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/039-one-of-prop-added-array/after.yaml":fo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/040-one-of-prop-removed-array/after.yaml":go,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/041-object-variant-add-one-property-object/after.yaml":ho,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/042-object-variant-remove-one-property-object/after.yaml":vo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/043-object-variant-add-two-properties-object/after.yaml":jo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/044-object-variant-remove-two-properties-object/after.yaml":uo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/045-object-variant-added-object/after.yaml":Oo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/046-object-variant-removed-object/after.yaml":Po,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/047-one-of-prop-added-object/after.yaml":wo,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/048-one-of-prop-removed-object/after.yaml":So}),Ao=qt(Co,xo),Ro=zt(Ao),Mo={title:"JSON Schema Diffs Suite/OneOf Object Variant Samples",component:Lt,argTypes:$t},e=Dt(Lt,Ro),n=e("001-object-variant-add-one-property-string"),t=e("002-object-variant-remove-one-property-string"),r=e("003-object-variant-add-two-properties-string"),o=e("004-object-variant-remove-two-properties-string"),a=e("005-object-variant-added-string"),i=e("006-object-variant-removed-string"),p=e("007-one-of-prop-added-string"),s=e("008-one-of-prop-removed-string"),c=e("009-object-variant-add-one-property-number"),m=e("010-object-variant-remove-one-property-number"),d=e("011-object-variant-add-two-properties-number"),b=e("012-object-variant-remove-two-properties-number"),y=e("013-object-variant-added-number"),l=e("014-object-variant-removed-number"),_=e("015-one-of-prop-added-number"),f=e("016-one-of-prop-removed-number"),g=e("017-object-variant-add-one-property-integer"),h=e("018-object-variant-remove-one-property-integer"),v=e("019-object-variant-add-two-properties-integer"),j=e("020-object-variant-remove-two-properties-integer"),u=e("021-object-variant-added-integer"),O=e("022-object-variant-removed-integer"),P=e("023-one-of-prop-added-integer"),w=e("024-one-of-prop-removed-integer"),S=e("025-object-variant-add-one-property-boolean"),C=e("026-object-variant-remove-one-property-boolean"),x=e("027-object-variant-add-two-properties-boolean"),A=e("028-object-variant-remove-two-properties-boolean"),R=e("029-object-variant-added-boolean"),N=e("030-object-variant-removed-boolean"),I=e("031-one-of-prop-added-boolean"),L=e("032-one-of-prop-removed-boolean"),q=e("033-object-variant-add-one-property-array"),z=e("034-object-variant-remove-one-property-array"),$=e("035-object-variant-add-two-properties-array"),D=e("036-object-variant-remove-two-properties-array"),J=e("037-object-variant-added-array"),F=e("038-object-variant-removed-array"),B=e("039-one-of-prop-added-array"),T=e("040-one-of-prop-removed-array"),E=e("041-object-variant-add-one-property-object"),V=e("042-object-variant-remove-one-property-object"),k=e("043-object-variant-add-two-properties-object"),G=e("044-object-variant-remove-two-properties-object"),H=e("045-object-variant-added-object"),K=e("046-object-variant-removed-object"),M=e("047-one-of-prop-added-object"),Q=e("048-one-of-prop-removed-object");var U,W,X;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("001-object-variant-add-one-property-string")',...(X=(W=n.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("002-object-variant-remove-one-property-string")',...(ee=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,re;r.parameters={...r.parameters,docs:{...(ne=r.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("003-object-variant-add-two-properties-string")',...(re=(te=r.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ae,ie;o.parameters={...o.parameters,docs:{...(oe=o.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("004-object-variant-remove-two-properties-string")',...(ie=(ae=o.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var pe,se,ce;a.parameters={...a.parameters,docs:{...(pe=a.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("005-object-variant-added-string")',...(ce=(se=a.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var me,de,be;i.parameters={...i.parameters,docs:{...(me=i.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("006-object-variant-removed-string")',...(be=(de=i.parameters)==null?void 0:de.docs)==null?void 0:be.source}}};var ye,le,_e;p.parameters={...p.parameters,docs:{...(ye=p.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("007-one-of-prop-added-string")',...(_e=(le=p.parameters)==null?void 0:le.docs)==null?void 0:_e.source}}};var fe,ge,he;s.parameters={...s.parameters,docs:{...(fe=s.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("008-one-of-prop-removed-string")',...(he=(ge=s.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,je,ue;c.parameters={...c.parameters,docs:{...(ve=c.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("009-object-variant-add-one-property-number")',...(ue=(je=c.parameters)==null?void 0:je.docs)==null?void 0:ue.source}}};var Oe,Pe,we;m.parameters={...m.parameters,docs:{...(Oe=m.parameters)==null?void 0:Oe.docs,source:{originalSource:'createCaseStory("010-object-variant-remove-one-property-number")',...(we=(Pe=m.parameters)==null?void 0:Pe.docs)==null?void 0:we.source}}};var Se,Ce,xe;d.parameters={...d.parameters,docs:{...(Se=d.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("011-object-variant-add-two-properties-number")',...(xe=(Ce=d.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Ae,Re,Ne;b.parameters={...b.parameters,docs:{...(Ae=b.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("012-object-variant-remove-two-properties-number")',...(Ne=(Re=b.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var Ie,Le,qe;y.parameters={...y.parameters,docs:{...(Ie=y.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("013-object-variant-added-number")',...(qe=(Le=y.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var ze,$e,De;l.parameters={...l.parameters,docs:{...(ze=l.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("014-object-variant-removed-number")',...(De=($e=l.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var Je,Fe,Be;_.parameters={..._.parameters,docs:{...(Je=_.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("015-one-of-prop-added-number")',...(Be=(Fe=_.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Te,Ee,Ve;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("016-one-of-prop-removed-number")',...(Ve=(Ee=f.parameters)==null?void 0:Ee.docs)==null?void 0:Ve.source}}};var ke,Ge,He;g.parameters={...g.parameters,docs:{...(ke=g.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("017-object-variant-add-one-property-integer")',...(He=(Ge=g.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Ke,Me,Qe;h.parameters={...h.parameters,docs:{...(Ke=h.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("018-object-variant-remove-one-property-integer")',...(Qe=(Me=h.parameters)==null?void 0:Me.docs)==null?void 0:Qe.source}}};var Ue,We,Xe;v.parameters={...v.parameters,docs:{...(Ue=v.parameters)==null?void 0:Ue.docs,source:{originalSource:'createCaseStory("019-object-variant-add-two-properties-integer")',...(Xe=(We=v.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;j.parameters={...j.parameters,docs:{...(Ye=j.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("020-object-variant-remove-two-properties-integer")',...(en=(Ze=j.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,tn,rn;u.parameters={...u.parameters,docs:{...(nn=u.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("021-object-variant-added-integer")',...(rn=(tn=u.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var on,an,pn;O.parameters={...O.parameters,docs:{...(on=O.parameters)==null?void 0:on.docs,source:{originalSource:'createCaseStory("022-object-variant-removed-integer")',...(pn=(an=O.parameters)==null?void 0:an.docs)==null?void 0:pn.source}}};var sn,cn,mn;P.parameters={...P.parameters,docs:{...(sn=P.parameters)==null?void 0:sn.docs,source:{originalSource:'createCaseStory("023-one-of-prop-added-integer")',...(mn=(cn=P.parameters)==null?void 0:cn.docs)==null?void 0:mn.source}}};var dn,bn,yn;w.parameters={...w.parameters,docs:{...(dn=w.parameters)==null?void 0:dn.docs,source:{originalSource:'createCaseStory("024-one-of-prop-removed-integer")',...(yn=(bn=w.parameters)==null?void 0:bn.docs)==null?void 0:yn.source}}};var ln,_n,fn;S.parameters={...S.parameters,docs:{...(ln=S.parameters)==null?void 0:ln.docs,source:{originalSource:'createCaseStory("025-object-variant-add-one-property-boolean")',...(fn=(_n=S.parameters)==null?void 0:_n.docs)==null?void 0:fn.source}}};var gn,hn,vn;C.parameters={...C.parameters,docs:{...(gn=C.parameters)==null?void 0:gn.docs,source:{originalSource:'createCaseStory("026-object-variant-remove-one-property-boolean")',...(vn=(hn=C.parameters)==null?void 0:hn.docs)==null?void 0:vn.source}}};var jn,un,On;x.parameters={...x.parameters,docs:{...(jn=x.parameters)==null?void 0:jn.docs,source:{originalSource:'createCaseStory("027-object-variant-add-two-properties-boolean")',...(On=(un=x.parameters)==null?void 0:un.docs)==null?void 0:On.source}}};var Pn,wn,Sn;A.parameters={...A.parameters,docs:{...(Pn=A.parameters)==null?void 0:Pn.docs,source:{originalSource:'createCaseStory("028-object-variant-remove-two-properties-boolean")',...(Sn=(wn=A.parameters)==null?void 0:wn.docs)==null?void 0:Sn.source}}};var Cn,xn,An;R.parameters={...R.parameters,docs:{...(Cn=R.parameters)==null?void 0:Cn.docs,source:{originalSource:'createCaseStory("029-object-variant-added-boolean")',...(An=(xn=R.parameters)==null?void 0:xn.docs)==null?void 0:An.source}}};var Rn,Nn,In;N.parameters={...N.parameters,docs:{...(Rn=N.parameters)==null?void 0:Rn.docs,source:{originalSource:'createCaseStory("030-object-variant-removed-boolean")',...(In=(Nn=N.parameters)==null?void 0:Nn.docs)==null?void 0:In.source}}};var Ln,qn,zn;I.parameters={...I.parameters,docs:{...(Ln=I.parameters)==null?void 0:Ln.docs,source:{originalSource:'createCaseStory("031-one-of-prop-added-boolean")',...(zn=(qn=I.parameters)==null?void 0:qn.docs)==null?void 0:zn.source}}};var $n,Dn,Jn;L.parameters={...L.parameters,docs:{...($n=L.parameters)==null?void 0:$n.docs,source:{originalSource:'createCaseStory("032-one-of-prop-removed-boolean")',...(Jn=(Dn=L.parameters)==null?void 0:Dn.docs)==null?void 0:Jn.source}}};var Fn,Bn,Tn;q.parameters={...q.parameters,docs:{...(Fn=q.parameters)==null?void 0:Fn.docs,source:{originalSource:'createCaseStory("033-object-variant-add-one-property-array")',...(Tn=(Bn=q.parameters)==null?void 0:Bn.docs)==null?void 0:Tn.source}}};var En,Vn,kn;z.parameters={...z.parameters,docs:{...(En=z.parameters)==null?void 0:En.docs,source:{originalSource:'createCaseStory("034-object-variant-remove-one-property-array")',...(kn=(Vn=z.parameters)==null?void 0:Vn.docs)==null?void 0:kn.source}}};var Gn,Hn,Kn;$.parameters={...$.parameters,docs:{...(Gn=$.parameters)==null?void 0:Gn.docs,source:{originalSource:'createCaseStory("035-object-variant-add-two-properties-array")',...(Kn=(Hn=$.parameters)==null?void 0:Hn.docs)==null?void 0:Kn.source}}};var Mn,Qn,Un;D.parameters={...D.parameters,docs:{...(Mn=D.parameters)==null?void 0:Mn.docs,source:{originalSource:'createCaseStory("036-object-variant-remove-two-properties-array")',...(Un=(Qn=D.parameters)==null?void 0:Qn.docs)==null?void 0:Un.source}}};var Wn,Xn,Yn;J.parameters={...J.parameters,docs:{...(Wn=J.parameters)==null?void 0:Wn.docs,source:{originalSource:'createCaseStory("037-object-variant-added-array")',...(Yn=(Xn=J.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Zn,et,nt;F.parameters={...F.parameters,docs:{...(Zn=F.parameters)==null?void 0:Zn.docs,source:{originalSource:'createCaseStory("038-object-variant-removed-array")',...(nt=(et=F.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var tt,rt,ot;B.parameters={...B.parameters,docs:{...(tt=B.parameters)==null?void 0:tt.docs,source:{originalSource:'createCaseStory("039-one-of-prop-added-array")',...(ot=(rt=B.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var at,it,pt;T.parameters={...T.parameters,docs:{...(at=T.parameters)==null?void 0:at.docs,source:{originalSource:'createCaseStory("040-one-of-prop-removed-array")',...(pt=(it=T.parameters)==null?void 0:it.docs)==null?void 0:pt.source}}};var st,ct,mt;E.parameters={...E.parameters,docs:{...(st=E.parameters)==null?void 0:st.docs,source:{originalSource:'createCaseStory("041-object-variant-add-one-property-object")',...(mt=(ct=E.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};var dt,bt,yt;V.parameters={...V.parameters,docs:{...(dt=V.parameters)==null?void 0:dt.docs,source:{originalSource:'createCaseStory("042-object-variant-remove-one-property-object")',...(yt=(bt=V.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};var lt,_t,ft;k.parameters={...k.parameters,docs:{...(lt=k.parameters)==null?void 0:lt.docs,source:{originalSource:'createCaseStory("043-object-variant-add-two-properties-object")',...(ft=(_t=k.parameters)==null?void 0:_t.docs)==null?void 0:ft.source}}};var gt,ht,vt;G.parameters={...G.parameters,docs:{...(gt=G.parameters)==null?void 0:gt.docs,source:{originalSource:'createCaseStory("044-object-variant-remove-two-properties-object")',...(vt=(ht=G.parameters)==null?void 0:ht.docs)==null?void 0:vt.source}}};var jt,ut,Ot;H.parameters={...H.parameters,docs:{...(jt=H.parameters)==null?void 0:jt.docs,source:{originalSource:'createCaseStory("045-object-variant-added-object")',...(Ot=(ut=H.parameters)==null?void 0:ut.docs)==null?void 0:Ot.source}}};var Pt,wt,St;K.parameters={...K.parameters,docs:{...(Pt=K.parameters)==null?void 0:Pt.docs,source:{originalSource:'createCaseStory("046-object-variant-removed-object")',...(St=(wt=K.parameters)==null?void 0:wt.docs)==null?void 0:St.source}}};var Ct,xt,At;M.parameters={...M.parameters,docs:{...(Ct=M.parameters)==null?void 0:Ct.docs,source:{originalSource:'createCaseStory("047-one-of-prop-added-object")',...(At=(xt=M.parameters)==null?void 0:xt.docs)==null?void 0:At.source}}};var Rt,Nt,It;Q.parameters={...Q.parameters,docs:{...(Rt=Q.parameters)==null?void 0:Rt.docs,source:{originalSource:'createCaseStory("048-one-of-prop-removed-object")',...(It=(Nt=Q.parameters)==null?void 0:Nt.docs)==null?void 0:It.source}}};const Qo=["Case_001_object_variant_add_one_property_string","Case_002_object_variant_remove_one_property_string","Case_003_object_variant_add_two_properties_string","Case_004_object_variant_remove_two_properties_string","Case_005_object_variant_added_string","Case_006_object_variant_removed_string","Case_007_one_of_prop_added_string","Case_008_one_of_prop_removed_string","Case_009_object_variant_add_one_property_number","Case_010_object_variant_remove_one_property_number","Case_011_object_variant_add_two_properties_number","Case_012_object_variant_remove_two_properties_number","Case_013_object_variant_added_number","Case_014_object_variant_removed_number","Case_015_one_of_prop_added_number","Case_016_one_of_prop_removed_number","Case_017_object_variant_add_one_property_integer","Case_018_object_variant_remove_one_property_integer","Case_019_object_variant_add_two_properties_integer","Case_020_object_variant_remove_two_properties_integer","Case_021_object_variant_added_integer","Case_022_object_variant_removed_integer","Case_023_one_of_prop_added_integer","Case_024_one_of_prop_removed_integer","Case_025_object_variant_add_one_property_boolean","Case_026_object_variant_remove_one_property_boolean","Case_027_object_variant_add_two_properties_boolean","Case_028_object_variant_remove_two_properties_boolean","Case_029_object_variant_added_boolean","Case_030_object_variant_removed_boolean","Case_031_one_of_prop_added_boolean","Case_032_one_of_prop_removed_boolean","Case_033_object_variant_add_one_property_array","Case_034_object_variant_remove_one_property_array","Case_035_object_variant_add_two_properties_array","Case_036_object_variant_remove_two_properties_array","Case_037_object_variant_added_array","Case_038_object_variant_removed_array","Case_039_one_of_prop_added_array","Case_040_one_of_prop_removed_array","Case_041_object_variant_add_one_property_object","Case_042_object_variant_remove_one_property_object","Case_043_object_variant_add_two_properties_object","Case_044_object_variant_remove_two_properties_object","Case_045_object_variant_added_object","Case_046_object_variant_removed_object","Case_047_one_of_prop_added_object","Case_048_one_of_prop_removed_object"];export{n as Case_001_object_variant_add_one_property_string,t as Case_002_object_variant_remove_one_property_string,r as Case_003_object_variant_add_two_properties_string,o as Case_004_object_variant_remove_two_properties_string,a as Case_005_object_variant_added_string,i as Case_006_object_variant_removed_string,p as Case_007_one_of_prop_added_string,s as Case_008_one_of_prop_removed_string,c as Case_009_object_variant_add_one_property_number,m as Case_010_object_variant_remove_one_property_number,d as Case_011_object_variant_add_two_properties_number,b as Case_012_object_variant_remove_two_properties_number,y as Case_013_object_variant_added_number,l as Case_014_object_variant_removed_number,_ as Case_015_one_of_prop_added_number,f as Case_016_one_of_prop_removed_number,g as Case_017_object_variant_add_one_property_integer,h as Case_018_object_variant_remove_one_property_integer,v as Case_019_object_variant_add_two_properties_integer,j as Case_020_object_variant_remove_two_properties_integer,u as Case_021_object_variant_added_integer,O as Case_022_object_variant_removed_integer,P as Case_023_one_of_prop_added_integer,w as Case_024_one_of_prop_removed_integer,S as Case_025_object_variant_add_one_property_boolean,C as Case_026_object_variant_remove_one_property_boolean,x as Case_027_object_variant_add_two_properties_boolean,A as Case_028_object_variant_remove_two_properties_boolean,R as Case_029_object_variant_added_boolean,N as Case_030_object_variant_removed_boolean,I as Case_031_one_of_prop_added_boolean,L as Case_032_one_of_prop_removed_boolean,q as Case_033_object_variant_add_one_property_array,z as Case_034_object_variant_remove_one_property_array,$ as Case_035_object_variant_add_two_properties_array,D as Case_036_object_variant_remove_two_properties_array,J as Case_037_object_variant_added_array,F as Case_038_object_variant_removed_array,B as Case_039_one_of_prop_added_array,T as Case_040_one_of_prop_removed_array,E as Case_041_object_variant_add_one_property_object,V as Case_042_object_variant_remove_one_property_object,k as Case_043_object_variant_add_two_properties_object,G as Case_044_object_variant_remove_two_properties_object,H as Case_045_object_variant_added_object,K as Case_046_object_variant_removed_object,M as Case_047_one_of_prop_added_object,Q as Case_048_one_of_prop_removed_object,Qo as __namedExportsOrder,Mo as default};
