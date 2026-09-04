import{c as Nr}from"./diffs-samples-cases-1df1f3ae.js";import{c as Tr,J as qr,j as Lr,a as Wr}from"./json-schema-diffs-utils-361af4d1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-2d7bd233.js";import"./DiffBadge-4d4a1c37.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-be584810.js";import"./GraphPropNodeViewer-1f5ff77a.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-3b42765c.js";import"./preprocess-c9227d17.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";const zr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed string item schema(s)
        items:
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,$r=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed string item schema(s)
        items:
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Dr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed string item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Jr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed string item schema(s)
        items:
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Fr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,Br=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed string item schema(s)
        items:
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Er=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,kr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed string item schema(s)
        items:
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Gr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed number item schema(s)
        items:
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Hr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed number item schema(s)
        items:
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Kr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed number item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Mr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed number item schema(s)
        items:
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Qr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,Ur=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed number item schema(s)
        items:
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Xr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,Yr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed number item schema(s)
        items:
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Zr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed integer item schema(s)
        items:
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ea=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed integer item schema(s)
        items:
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,na=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed integer item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ra=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed integer item schema(s)
        items:
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,aa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,ta=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed integer item schema(s)
        items:
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ia=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,oa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed integer item schema(s)
        items:
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,sa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed boolean item schema(s)
        items:
          - type: boolean
            description: Sample boolean schema
            default: false
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,pa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed boolean item schema(s)
        items:
          - type: boolean
            description: Sample boolean schema
            default: false
          - type: boolean
            description: Sample boolean schema
            default: false
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ma=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed boolean item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,da=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed boolean item schema(s)
        items:
          - type: boolean
            description: Sample boolean schema
            default: false
          - type: boolean
            description: Sample boolean schema
            default: false
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ya=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,ca=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed boolean item schema(s)
        items:
          - type: boolean
            description: Sample boolean schema
            default: false
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,la=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,_a=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed boolean item schema(s)
        items:
          - type: boolean
            description: Sample boolean schema
            default: false
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ua=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed array item schema(s)
        items:
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,fa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed array item schema(s)
        items:
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ha=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed array item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ga=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed array item schema(s)
        items:
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,va=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,ba=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed array item schema(s)
        items:
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Oa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,xa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed array item schema(s)
        items:
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,wa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed object item schema(s)
        items:
          - type: object
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
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ja=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed object item schema(s)
        items:
          - type: object
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
          - type: object
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
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Sa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed object item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ia=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed object item schema(s)
        items:
          - type: object
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
          - type: object
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
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ca=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,Aa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed object item schema(s)
        items:
          - type: object
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
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Pa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,Ra=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed object item schema(s)
        items:
          - type: object
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
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Va=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed string item schema(s)
        items:
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,qa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed string item schema(s)
        items:
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Na=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed string item schema(s)
        items:
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ta=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed string item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,La=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed string item schema(s)
        items:
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Wa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,za=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed string item schema(s)
        items:
          - type: string
            description: Sample string schema with all string validations
            default: alpha
            enum:
              - alpha
              - beta
              - gamma
            minLength: 1
            maxLength: 128
            pattern: ^[a-z]+$
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,$a=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,Da=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed number item schema(s)
        items:
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ja=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed number item schema(s)
        items:
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Fa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed number item schema(s)
        items:
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ba=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed number item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ea=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed number item schema(s)
        items:
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ka=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,Ga=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed number item schema(s)
        items:
          - type: number
            description: Sample number schema with all number validations
            default: 1.5
            minimum: 0
            maximum: 100
            multipleOf: 0.5
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ha=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,Ka=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed integer item schema(s)
        items:
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ma=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed integer item schema(s)
        items:
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Qa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed integer item schema(s)
        items:
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ua=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed integer item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Xa=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed integer item schema(s)
        items:
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ya=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,Za=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed integer item schema(s)
        items:
          - type: integer
            description: Sample integer schema with all integer validations
            default: 1
            minimum: 0
            maximum: 100
            multipleOf: 1
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,et=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,nt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed boolean item schema(s)
        items:
          - type: boolean
            description: Sample boolean schema
            default: false
          - type: boolean
            description: Sample boolean schema
            default: false
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,rt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed boolean item schema(s)
        items:
          - type: boolean
            description: Sample boolean schema
            default: false
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,at=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed boolean item schema(s)
        items:
          - type: boolean
            description: Sample boolean schema
            default: false
          - type: boolean
            description: Sample boolean schema
            default: false
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,tt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed boolean item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,it=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed boolean item schema(s)
        items:
          - type: boolean
            description: Sample boolean schema
            default: false
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ot=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,st=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed boolean item schema(s)
        items:
          - type: boolean
            description: Sample boolean schema
            default: false
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,pt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,mt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed array item schema(s)
        items:
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,dt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed array item schema(s)
        items:
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,yt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed array item schema(s)
        items:
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ct=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed array item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,lt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed array item schema(s)
        items:
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,_t=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,ut=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed array item schema(s)
        items:
          - type: array
            description: Sample array schema with all array validations
            items:
              type: string
            default:
              - alpha
              - beta
            minItems: 1
            maxItems: 10
            uniqueItems: true
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,ft=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,ht=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed object item schema(s)
        items:
          - type: object
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
          - type: object
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
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,gt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed object item schema(s)
        items:
          - type: object
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
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,vt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 2 indexed object item schema(s)
        items:
          - type: object
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
          - type: object
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
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,bt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 0 indexed object item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,Ot=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed object item schema(s)
        items:
          - type: object
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
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,xt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,wt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)
      - type: array
        description: Tuple array with 1 indexed object item schema(s)
        items:
          - type: object
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
        minItems: 0
        maxItems: 10
        uniqueItems: true

`,jt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`,St=Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/001-array-variant-add-one-indexed-item-string/before.yaml":zr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/002-array-variant-remove-one-indexed-item-string/before.yaml":$r,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/003-array-variant-add-two-indexed-items-string/before.yaml":Dr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/004-array-variant-remove-two-indexed-items-string/before.yaml":Jr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/005-array-variant-added-string/before.yaml":Fr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/006-array-variant-removed-string/before.yaml":Br,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/007-one-of-prop-added-string/before.yaml":Er,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/008-one-of-prop-removed-string/before.yaml":kr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/009-array-variant-add-one-indexed-item-number/before.yaml":Gr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/010-array-variant-remove-one-indexed-item-number/before.yaml":Hr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/011-array-variant-add-two-indexed-items-number/before.yaml":Kr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/012-array-variant-remove-two-indexed-items-number/before.yaml":Mr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/013-array-variant-added-number/before.yaml":Qr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/014-array-variant-removed-number/before.yaml":Ur,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/015-one-of-prop-added-number/before.yaml":Xr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/016-one-of-prop-removed-number/before.yaml":Yr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/017-array-variant-add-one-indexed-item-integer/before.yaml":Zr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/018-array-variant-remove-one-indexed-item-integer/before.yaml":ea,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/019-array-variant-add-two-indexed-items-integer/before.yaml":na,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/020-array-variant-remove-two-indexed-items-integer/before.yaml":ra,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/021-array-variant-added-integer/before.yaml":aa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/022-array-variant-removed-integer/before.yaml":ta,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/023-one-of-prop-added-integer/before.yaml":ia,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/024-one-of-prop-removed-integer/before.yaml":oa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/025-array-variant-add-one-indexed-item-boolean/before.yaml":sa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/026-array-variant-remove-one-indexed-item-boolean/before.yaml":pa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/027-array-variant-add-two-indexed-items-boolean/before.yaml":ma,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/028-array-variant-remove-two-indexed-items-boolean/before.yaml":da,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/029-array-variant-added-boolean/before.yaml":ya,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/030-array-variant-removed-boolean/before.yaml":ca,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/031-one-of-prop-added-boolean/before.yaml":la,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/032-one-of-prop-removed-boolean/before.yaml":_a,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/033-array-variant-add-one-indexed-item-array/before.yaml":ua,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/034-array-variant-remove-one-indexed-item-array/before.yaml":fa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/035-array-variant-add-two-indexed-items-array/before.yaml":ha,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/036-array-variant-remove-two-indexed-items-array/before.yaml":ga,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/037-array-variant-added-array/before.yaml":va,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/038-array-variant-removed-array/before.yaml":ba,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/039-one-of-prop-added-array/before.yaml":Oa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/040-one-of-prop-removed-array/before.yaml":xa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/041-array-variant-add-one-indexed-item-object/before.yaml":wa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/042-array-variant-remove-one-indexed-item-object/before.yaml":ja,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/043-array-variant-add-two-indexed-items-object/before.yaml":Sa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/044-array-variant-remove-two-indexed-items-object/before.yaml":Ia,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/045-array-variant-added-object/before.yaml":Ca,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/046-array-variant-removed-object/before.yaml":Aa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/047-one-of-prop-added-object/before.yaml":Pa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/048-one-of-prop-removed-object/before.yaml":Ra}),It=Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/001-array-variant-add-one-indexed-item-string/after.yaml":Va,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/002-array-variant-remove-one-indexed-item-string/after.yaml":qa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/003-array-variant-add-two-indexed-items-string/after.yaml":Na,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/004-array-variant-remove-two-indexed-items-string/after.yaml":Ta,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/005-array-variant-added-string/after.yaml":La,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/006-array-variant-removed-string/after.yaml":Wa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/007-one-of-prop-added-string/after.yaml":za,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/008-one-of-prop-removed-string/after.yaml":$a,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/009-array-variant-add-one-indexed-item-number/after.yaml":Da,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/010-array-variant-remove-one-indexed-item-number/after.yaml":Ja,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/011-array-variant-add-two-indexed-items-number/after.yaml":Fa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/012-array-variant-remove-two-indexed-items-number/after.yaml":Ba,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/013-array-variant-added-number/after.yaml":Ea,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/014-array-variant-removed-number/after.yaml":ka,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/015-one-of-prop-added-number/after.yaml":Ga,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/016-one-of-prop-removed-number/after.yaml":Ha,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/017-array-variant-add-one-indexed-item-integer/after.yaml":Ka,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/018-array-variant-remove-one-indexed-item-integer/after.yaml":Ma,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/019-array-variant-add-two-indexed-items-integer/after.yaml":Qa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/020-array-variant-remove-two-indexed-items-integer/after.yaml":Ua,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/021-array-variant-added-integer/after.yaml":Xa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/022-array-variant-removed-integer/after.yaml":Ya,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/023-one-of-prop-added-integer/after.yaml":Za,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/024-one-of-prop-removed-integer/after.yaml":et,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/025-array-variant-add-one-indexed-item-boolean/after.yaml":nt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/026-array-variant-remove-one-indexed-item-boolean/after.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/027-array-variant-add-two-indexed-items-boolean/after.yaml":at,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/028-array-variant-remove-two-indexed-items-boolean/after.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/029-array-variant-added-boolean/after.yaml":it,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/030-array-variant-removed-boolean/after.yaml":ot,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/031-one-of-prop-added-boolean/after.yaml":st,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/032-one-of-prop-removed-boolean/after.yaml":pt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/033-array-variant-add-one-indexed-item-array/after.yaml":mt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/034-array-variant-remove-one-indexed-item-array/after.yaml":dt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/035-array-variant-add-two-indexed-items-array/after.yaml":yt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/036-array-variant-remove-two-indexed-items-array/after.yaml":ct,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/037-array-variant-added-array/after.yaml":lt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/038-array-variant-removed-array/after.yaml":_t,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/039-one-of-prop-added-array/after.yaml":ut,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/040-one-of-prop-removed-array/after.yaml":ft,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/041-array-variant-add-one-indexed-item-object/after.yaml":ht,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/042-array-variant-remove-one-indexed-item-object/after.yaml":gt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/043-array-variant-add-two-indexed-items-object/after.yaml":vt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/044-array-variant-remove-two-indexed-items-object/after.yaml":bt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/045-array-variant-added-object/after.yaml":Ot,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/046-array-variant-removed-object/after.yaml":xt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/047-one-of-prop-added-object/after.yaml":wt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/048-one-of-prop-removed-object/after.yaml":jt}),Ct=Nr(St,It),At=Tr(Ct),Ht={title:"JSON Schema Diffs Suite/OneOf Array Variant",component:qr,argTypes:Lr},e=Wr(qr,At),n={...e("001-array-variant-add-one-indexed-item-string"),name:"Case 001 - [Array Variant] - Added 1 indexed item with type = string"},r={...e("002-array-variant-remove-one-indexed-item-string"),name:"Case 002 - [Array Variant] - Removed 1 indexed item with type = string"},a={...e("003-array-variant-add-two-indexed-items-string"),name:"Case 003 - [Array Variant] - Added 2 indexed items with type = string"},t={...e("004-array-variant-remove-two-indexed-items-string"),name:"Case 004 - [Array Variant] - Removed 2 indexed items with type = string"},i={...e("005-array-variant-added-string"),name:"Case 005 - [Array Variant] - Added, items = string"},o={...e("006-array-variant-removed-string"),name:"Case 006 - [Array Variant] - Removed, items = string"},s={...e("007-one-of-prop-added-string"),name:"Case 007 - [Whole OneOf] - Added with Array Variant, items = string"},p={...e("008-one-of-prop-removed-string"),name:"Case 008 - [Whole OneOf] - Removed with Array Variant, items = string"},m={...e("009-array-variant-add-one-indexed-item-number"),name:"Case 009 - [Array Variant] - Added 1 indexed item with type = number"},d={...e("010-array-variant-remove-one-indexed-item-number"),name:"Case 010 - [Array Variant] - Removed 1 indexed item with type = number"},y={...e("011-array-variant-add-two-indexed-items-number"),name:"Case 011 - [Array Variant] - Added 2 indexed items with type = number"},c={...e("012-array-variant-remove-two-indexed-items-number"),name:"Case 012 - [Array Variant] - Removed 2 indexed items with type = number"},l={...e("013-array-variant-added-number"),name:"Case 013 - [Array Variant] - Added, items = number"},_={...e("014-array-variant-removed-number"),name:"Case 014 - [Array Variant] - Removed, items = number"},u={...e("015-one-of-prop-added-number"),name:"Case 015 - [Whole OneOf] - Added with Array Variant, items = number"},f={...e("016-one-of-prop-removed-number"),name:"Case 016 - [Whole OneOf] - Removed with Array Variant, items = number"},h={...e("017-array-variant-add-one-indexed-item-integer"),name:"Case 017 - [Array Variant] - Added 1 indexed item with type = integer"},g={...e("018-array-variant-remove-one-indexed-item-integer"),name:"Case 018 - [Array Variant] - Removed 1 indexed item with type = integer"},v={...e("019-array-variant-add-two-indexed-items-integer"),name:"Case 019 - [Array Variant] - Added 2 indexed items with type = integer"},b={...e("020-array-variant-remove-two-indexed-items-integer"),name:"Case 020 - [Array Variant] - Removed 2 indexed items with type = integer"},O={...e("021-array-variant-added-integer"),name:"Case 021 - [Array Variant] - Added, items = integer"},x={...e("022-array-variant-removed-integer"),name:"Case 022 - [Array Variant] - Removed, items = integer"},w={...e("023-one-of-prop-added-integer"),name:"Case 023 - [Whole OneOf] - Added with Array Variant, items = integer"},j={...e("024-one-of-prop-removed-integer"),name:"Case 024 - [Whole OneOf] - Removed with Array Variant, items = integer"},S={...e("025-array-variant-add-one-indexed-item-boolean"),name:"Case 025 - [Array Variant] - Added 1 indexed item with type = boolean"},I={...e("026-array-variant-remove-one-indexed-item-boolean"),name:"Case 026 - [Array Variant] - Removed 1 indexed item with type = boolean"},C={...e("027-array-variant-add-two-indexed-items-boolean"),name:"Case 027 - [Array Variant] - Added 2 indexed items with type = boolean"},A={...e("028-array-variant-remove-two-indexed-items-boolean"),name:"Case 028 - [Array Variant] - Removed 2 indexed items with type = boolean"},P={...e("029-array-variant-added-boolean"),name:"Case 029 - [Array Variant] - Added, items = boolean"},R={...e("030-array-variant-removed-boolean"),name:"Case 030 - [Array Variant] - Removed, items = boolean"},V={...e("031-one-of-prop-added-boolean"),name:"Case 031 - [Whole OneOf] - Added with Array Variant, items = boolean"},q={...e("032-one-of-prop-removed-boolean"),name:"Case 032 - [Whole OneOf] - Removed with Array Variant, items = boolean"},N={...e("033-array-variant-add-one-indexed-item-array"),name:"Case 033 - [Array Variant] - Added 1 indexed item with type = array"},T={...e("034-array-variant-remove-one-indexed-item-array"),name:"Case 034 - [Array Variant] - Removed 1 indexed item with type = array"},L={...e("035-array-variant-add-two-indexed-items-array"),name:"Case 035 - [Array Variant] - Added 2 indexed items with type = array"},W={...e("036-array-variant-remove-two-indexed-items-array"),name:"Case 036 - [Array Variant] - Removed 2 indexed items with type = array"},z={...e("037-array-variant-added-array"),name:"Case 037 - [Array Variant] - Added, items = array"},$={...e("038-array-variant-removed-array"),name:"Case 038 - [Array Variant] - Removed, items = array"},D={...e("039-one-of-prop-added-array"),name:"Case 039 - [Whole OneOf] - Added with Array Variant, items = array"},J={...e("040-one-of-prop-removed-array"),name:"Case 040 - [Whole OneOf] - Removed with Array Variant, items = array"},F={...e("041-array-variant-add-one-indexed-item-object"),name:"Case 041 - [Array Variant] - Added 1 indexed item with type = object"},B={...e("042-array-variant-remove-one-indexed-item-object"),name:"Case 042 - [Array Variant] - Removed 1 indexed item with type = object"},E={...e("043-array-variant-add-two-indexed-items-object"),name:"Case 043 - [Array Variant] - Added 2 indexed items with type = object"},k={...e("044-array-variant-remove-two-indexed-items-object"),name:"Case 044 - [Array Variant] - Removed 2 indexed items with type = object"},G={...e("045-array-variant-added-object"),name:"Case 045 - [Array Variant] - Added, items = object"},H={...e("046-array-variant-removed-object"),name:"Case 046 - [Array Variant] - Removed, items = object"},K={...e("047-one-of-prop-added-object"),name:"Case 047 - [Whole OneOf] - Added with Array Variant, items = object"},M={...e("048-one-of-prop-removed-object"),name:"Case 048 - [Whole OneOf] - Removed with Array Variant, items = object"};var Q,U,X;n.parameters={...n.parameters,docs:{...(Q=n.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...createCaseStory("001-array-variant-add-one-indexed-item-string"),
  name: "Case 001 - [Array Variant] - Added 1 indexed item with type = string"
}`,...(X=(U=n.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;r.parameters={...r.parameters,docs:{...(Y=r.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...createCaseStory("002-array-variant-remove-one-indexed-item-string"),
  name: "Case 002 - [Array Variant] - Removed 1 indexed item with type = string"
}`,...(ee=(Z=r.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,ae;a.parameters={...a.parameters,docs:{...(ne=a.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...createCaseStory("003-array-variant-add-two-indexed-items-string"),
  name: "Case 003 - [Array Variant] - Added 2 indexed items with type = string"
}`,...(ae=(re=a.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,ie,oe;t.parameters={...t.parameters,docs:{...(te=t.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...createCaseStory("004-array-variant-remove-two-indexed-items-string"),
  name: "Case 004 - [Array Variant] - Removed 2 indexed items with type = string"
}`,...(oe=(ie=t.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,pe,me;i.parameters={...i.parameters,docs:{...(se=i.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...createCaseStory("005-array-variant-added-string"),
  name: "Case 005 - [Array Variant] - Added, items = string"
}`,...(me=(pe=i.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var de,ye,ce;o.parameters={...o.parameters,docs:{...(de=o.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...createCaseStory("006-array-variant-removed-string"),
  name: "Case 006 - [Array Variant] - Removed, items = string"
}`,...(ce=(ye=o.parameters)==null?void 0:ye.docs)==null?void 0:ce.source}}};var le,_e,ue;s.parameters={...s.parameters,docs:{...(le=s.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...createCaseStory("007-one-of-prop-added-string"),
  name: "Case 007 - [Whole OneOf] - Added with Array Variant, items = string"
}`,...(ue=(_e=s.parameters)==null?void 0:_e.docs)==null?void 0:ue.source}}};var fe,he,ge;p.parameters={...p.parameters,docs:{...(fe=p.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...createCaseStory("008-one-of-prop-removed-string"),
  name: "Case 008 - [Whole OneOf] - Removed with Array Variant, items = string"
}`,...(ge=(he=p.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,be,Oe;m.parameters={...m.parameters,docs:{...(ve=m.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  ...createCaseStory("009-array-variant-add-one-indexed-item-number"),
  name: "Case 009 - [Array Variant] - Added 1 indexed item with type = number"
}`,...(Oe=(be=m.parameters)==null?void 0:be.docs)==null?void 0:Oe.source}}};var xe,we,je;d.parameters={...d.parameters,docs:{...(xe=d.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...createCaseStory("010-array-variant-remove-one-indexed-item-number"),
  name: "Case 010 - [Array Variant] - Removed 1 indexed item with type = number"
}`,...(je=(we=d.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};var Se,Ie,Ce;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  ...createCaseStory("011-array-variant-add-two-indexed-items-number"),
  name: "Case 011 - [Array Variant] - Added 2 indexed items with type = number"
}`,...(Ce=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var Ae,Pe,Re;c.parameters={...c.parameters,docs:{...(Ae=c.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  ...createCaseStory("012-array-variant-remove-two-indexed-items-number"),
  name: "Case 012 - [Array Variant] - Removed 2 indexed items with type = number"
}`,...(Re=(Pe=c.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Ve,qe,Ne;l.parameters={...l.parameters,docs:{...(Ve=l.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  ...createCaseStory("013-array-variant-added-number"),
  name: "Case 013 - [Array Variant] - Added, items = number"
}`,...(Ne=(qe=l.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var Te,Le,We;_.parameters={..._.parameters,docs:{...(Te=_.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  ...createCaseStory("014-array-variant-removed-number"),
  name: "Case 014 - [Array Variant] - Removed, items = number"
}`,...(We=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:We.source}}};var ze,$e,De;u.parameters={...u.parameters,docs:{...(ze=u.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  ...createCaseStory("015-one-of-prop-added-number"),
  name: "Case 015 - [Whole OneOf] - Added with Array Variant, items = number"
}`,...(De=($e=u.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var Je,Fe,Be;f.parameters={...f.parameters,docs:{...(Je=f.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  ...createCaseStory("016-one-of-prop-removed-number"),
  name: "Case 016 - [Whole OneOf] - Removed with Array Variant, items = number"
}`,...(Be=(Fe=f.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Ee,ke,Ge;h.parameters={...h.parameters,docs:{...(Ee=h.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  ...createCaseStory("017-array-variant-add-one-indexed-item-integer"),
  name: "Case 017 - [Array Variant] - Added 1 indexed item with type = integer"
}`,...(Ge=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:Ge.source}}};var He,Ke,Me;g.parameters={...g.parameters,docs:{...(He=g.parameters)==null?void 0:He.docs,source:{originalSource:`{
  ...createCaseStory("018-array-variant-remove-one-indexed-item-integer"),
  name: "Case 018 - [Array Variant] - Removed 1 indexed item with type = integer"
}`,...(Me=(Ke=g.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Qe,Ue,Xe;v.parameters={...v.parameters,docs:{...(Qe=v.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  ...createCaseStory("019-array-variant-add-two-indexed-items-integer"),
  name: "Case 019 - [Array Variant] - Added 2 indexed items with type = integer"
}`,...(Xe=(Ue=v.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;b.parameters={...b.parameters,docs:{...(Ye=b.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  ...createCaseStory("020-array-variant-remove-two-indexed-items-integer"),
  name: "Case 020 - [Array Variant] - Removed 2 indexed items with type = integer"
}`,...(en=(Ze=b.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,rn,an;O.parameters={...O.parameters,docs:{...(nn=O.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  ...createCaseStory("021-array-variant-added-integer"),
  name: "Case 021 - [Array Variant] - Added, items = integer"
}`,...(an=(rn=O.parameters)==null?void 0:rn.docs)==null?void 0:an.source}}};var tn,on,sn;x.parameters={...x.parameters,docs:{...(tn=x.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  ...createCaseStory("022-array-variant-removed-integer"),
  name: "Case 022 - [Array Variant] - Removed, items = integer"
}`,...(sn=(on=x.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var pn,mn,dn;w.parameters={...w.parameters,docs:{...(pn=w.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  ...createCaseStory("023-one-of-prop-added-integer"),
  name: "Case 023 - [Whole OneOf] - Added with Array Variant, items = integer"
}`,...(dn=(mn=w.parameters)==null?void 0:mn.docs)==null?void 0:dn.source}}};var yn,cn,ln;j.parameters={...j.parameters,docs:{...(yn=j.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  ...createCaseStory("024-one-of-prop-removed-integer"),
  name: "Case 024 - [Whole OneOf] - Removed with Array Variant, items = integer"
}`,...(ln=(cn=j.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var _n,un,fn;S.parameters={...S.parameters,docs:{...(_n=S.parameters)==null?void 0:_n.docs,source:{originalSource:`{
  ...createCaseStory("025-array-variant-add-one-indexed-item-boolean"),
  name: "Case 025 - [Array Variant] - Added 1 indexed item with type = boolean"
}`,...(fn=(un=S.parameters)==null?void 0:un.docs)==null?void 0:fn.source}}};var hn,gn,vn;I.parameters={...I.parameters,docs:{...(hn=I.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  ...createCaseStory("026-array-variant-remove-one-indexed-item-boolean"),
  name: "Case 026 - [Array Variant] - Removed 1 indexed item with type = boolean"
}`,...(vn=(gn=I.parameters)==null?void 0:gn.docs)==null?void 0:vn.source}}};var bn,On,xn;C.parameters={...C.parameters,docs:{...(bn=C.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  ...createCaseStory("027-array-variant-add-two-indexed-items-boolean"),
  name: "Case 027 - [Array Variant] - Added 2 indexed items with type = boolean"
}`,...(xn=(On=C.parameters)==null?void 0:On.docs)==null?void 0:xn.source}}};var wn,jn,Sn;A.parameters={...A.parameters,docs:{...(wn=A.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  ...createCaseStory("028-array-variant-remove-two-indexed-items-boolean"),
  name: "Case 028 - [Array Variant] - Removed 2 indexed items with type = boolean"
}`,...(Sn=(jn=A.parameters)==null?void 0:jn.docs)==null?void 0:Sn.source}}};var In,Cn,An;P.parameters={...P.parameters,docs:{...(In=P.parameters)==null?void 0:In.docs,source:{originalSource:`{
  ...createCaseStory("029-array-variant-added-boolean"),
  name: "Case 029 - [Array Variant] - Added, items = boolean"
}`,...(An=(Cn=P.parameters)==null?void 0:Cn.docs)==null?void 0:An.source}}};var Pn,Rn,Vn;R.parameters={...R.parameters,docs:{...(Pn=R.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
  ...createCaseStory("030-array-variant-removed-boolean"),
  name: "Case 030 - [Array Variant] - Removed, items = boolean"
}`,...(Vn=(Rn=R.parameters)==null?void 0:Rn.docs)==null?void 0:Vn.source}}};var qn,Nn,Tn;V.parameters={...V.parameters,docs:{...(qn=V.parameters)==null?void 0:qn.docs,source:{originalSource:`{
  ...createCaseStory("031-one-of-prop-added-boolean"),
  name: "Case 031 - [Whole OneOf] - Added with Array Variant, items = boolean"
}`,...(Tn=(Nn=V.parameters)==null?void 0:Nn.docs)==null?void 0:Tn.source}}};var Ln,Wn,zn;q.parameters={...q.parameters,docs:{...(Ln=q.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
  ...createCaseStory("032-one-of-prop-removed-boolean"),
  name: "Case 032 - [Whole OneOf] - Removed with Array Variant, items = boolean"
}`,...(zn=(Wn=q.parameters)==null?void 0:Wn.docs)==null?void 0:zn.source}}};var $n,Dn,Jn;N.parameters={...N.parameters,docs:{...($n=N.parameters)==null?void 0:$n.docs,source:{originalSource:`{
  ...createCaseStory("033-array-variant-add-one-indexed-item-array"),
  name: "Case 033 - [Array Variant] - Added 1 indexed item with type = array"
}`,...(Jn=(Dn=N.parameters)==null?void 0:Dn.docs)==null?void 0:Jn.source}}};var Fn,Bn,En;T.parameters={...T.parameters,docs:{...(Fn=T.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  ...createCaseStory("034-array-variant-remove-one-indexed-item-array"),
  name: "Case 034 - [Array Variant] - Removed 1 indexed item with type = array"
}`,...(En=(Bn=T.parameters)==null?void 0:Bn.docs)==null?void 0:En.source}}};var kn,Gn,Hn;L.parameters={...L.parameters,docs:{...(kn=L.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  ...createCaseStory("035-array-variant-add-two-indexed-items-array"),
  name: "Case 035 - [Array Variant] - Added 2 indexed items with type = array"
}`,...(Hn=(Gn=L.parameters)==null?void 0:Gn.docs)==null?void 0:Hn.source}}};var Kn,Mn,Qn;W.parameters={...W.parameters,docs:{...(Kn=W.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
  ...createCaseStory("036-array-variant-remove-two-indexed-items-array"),
  name: "Case 036 - [Array Variant] - Removed 2 indexed items with type = array"
}`,...(Qn=(Mn=W.parameters)==null?void 0:Mn.docs)==null?void 0:Qn.source}}};var Un,Xn,Yn;z.parameters={...z.parameters,docs:{...(Un=z.parameters)==null?void 0:Un.docs,source:{originalSource:`{
  ...createCaseStory("037-array-variant-added-array"),
  name: "Case 037 - [Array Variant] - Added, items = array"
}`,...(Yn=(Xn=z.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Zn,er,nr;$.parameters={...$.parameters,docs:{...(Zn=$.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
  ...createCaseStory("038-array-variant-removed-array"),
  name: "Case 038 - [Array Variant] - Removed, items = array"
}`,...(nr=(er=$.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,ar,tr;D.parameters={...D.parameters,docs:{...(rr=D.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  ...createCaseStory("039-one-of-prop-added-array"),
  name: "Case 039 - [Whole OneOf] - Added with Array Variant, items = array"
}`,...(tr=(ar=D.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var ir,or,sr;J.parameters={...J.parameters,docs:{...(ir=J.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  ...createCaseStory("040-one-of-prop-removed-array"),
  name: "Case 040 - [Whole OneOf] - Removed with Array Variant, items = array"
}`,...(sr=(or=J.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var pr,mr,dr;F.parameters={...F.parameters,docs:{...(pr=F.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  ...createCaseStory("041-array-variant-add-one-indexed-item-object"),
  name: "Case 041 - [Array Variant] - Added 1 indexed item with type = object"
}`,...(dr=(mr=F.parameters)==null?void 0:mr.docs)==null?void 0:dr.source}}};var yr,cr,lr;B.parameters={...B.parameters,docs:{...(yr=B.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  ...createCaseStory("042-array-variant-remove-one-indexed-item-object"),
  name: "Case 042 - [Array Variant] - Removed 1 indexed item with type = object"
}`,...(lr=(cr=B.parameters)==null?void 0:cr.docs)==null?void 0:lr.source}}};var _r,ur,fr;E.parameters={...E.parameters,docs:{...(_r=E.parameters)==null?void 0:_r.docs,source:{originalSource:`{
  ...createCaseStory("043-array-variant-add-two-indexed-items-object"),
  name: "Case 043 - [Array Variant] - Added 2 indexed items with type = object"
}`,...(fr=(ur=E.parameters)==null?void 0:ur.docs)==null?void 0:fr.source}}};var hr,gr,vr;k.parameters={...k.parameters,docs:{...(hr=k.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  ...createCaseStory("044-array-variant-remove-two-indexed-items-object"),
  name: "Case 044 - [Array Variant] - Removed 2 indexed items with type = object"
}`,...(vr=(gr=k.parameters)==null?void 0:gr.docs)==null?void 0:vr.source}}};var br,Or,xr;G.parameters={...G.parameters,docs:{...(br=G.parameters)==null?void 0:br.docs,source:{originalSource:`{
  ...createCaseStory("045-array-variant-added-object"),
  name: "Case 045 - [Array Variant] - Added, items = object"
}`,...(xr=(Or=G.parameters)==null?void 0:Or.docs)==null?void 0:xr.source}}};var wr,jr,Sr;H.parameters={...H.parameters,docs:{...(wr=H.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  ...createCaseStory("046-array-variant-removed-object"),
  name: "Case 046 - [Array Variant] - Removed, items = object"
}`,...(Sr=(jr=H.parameters)==null?void 0:jr.docs)==null?void 0:Sr.source}}};var Ir,Cr,Ar;K.parameters={...K.parameters,docs:{...(Ir=K.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  ...createCaseStory("047-one-of-prop-added-object"),
  name: "Case 047 - [Whole OneOf] - Added with Array Variant, items = object"
}`,...(Ar=(Cr=K.parameters)==null?void 0:Cr.docs)==null?void 0:Ar.source}}};var Pr,Rr,Vr;M.parameters={...M.parameters,docs:{...(Pr=M.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  ...createCaseStory("048-one-of-prop-removed-object"),
  name: "Case 048 - [Whole OneOf] - Removed with Array Variant, items = object"
}`,...(Vr=(Rr=M.parameters)==null?void 0:Rr.docs)==null?void 0:Vr.source}}};const Kt=["Case_001_array_variant_add_one_indexed_item_string","Case_002_array_variant_remove_one_indexed_item_string","Case_003_array_variant_add_two_indexed_items_string","Case_004_array_variant_remove_two_indexed_items_string","Case_005_array_variant_added_string","Case_006_array_variant_removed_string","Case_007_one_of_prop_added_string","Case_008_one_of_prop_removed_string","Case_009_array_variant_add_one_indexed_item_number","Case_010_array_variant_remove_one_indexed_item_number","Case_011_array_variant_add_two_indexed_items_number","Case_012_array_variant_remove_two_indexed_items_number","Case_013_array_variant_added_number","Case_014_array_variant_removed_number","Case_015_one_of_prop_added_number","Case_016_one_of_prop_removed_number","Case_017_array_variant_add_one_indexed_item_integer","Case_018_array_variant_remove_one_indexed_item_integer","Case_019_array_variant_add_two_indexed_items_integer","Case_020_array_variant_remove_two_indexed_items_integer","Case_021_array_variant_added_integer","Case_022_array_variant_removed_integer","Case_023_one_of_prop_added_integer","Case_024_one_of_prop_removed_integer","Case_025_array_variant_add_one_indexed_item_boolean","Case_026_array_variant_remove_one_indexed_item_boolean","Case_027_array_variant_add_two_indexed_items_boolean","Case_028_array_variant_remove_two_indexed_items_boolean","Case_029_array_variant_added_boolean","Case_030_array_variant_removed_boolean","Case_031_one_of_prop_added_boolean","Case_032_one_of_prop_removed_boolean","Case_033_array_variant_add_one_indexed_item_array","Case_034_array_variant_remove_one_indexed_item_array","Case_035_array_variant_add_two_indexed_items_array","Case_036_array_variant_remove_two_indexed_items_array","Case_037_array_variant_added_array","Case_038_array_variant_removed_array","Case_039_one_of_prop_added_array","Case_040_one_of_prop_removed_array","Case_041_array_variant_add_one_indexed_item_object","Case_042_array_variant_remove_one_indexed_item_object","Case_043_array_variant_add_two_indexed_items_object","Case_044_array_variant_remove_two_indexed_items_object","Case_045_array_variant_added_object","Case_046_array_variant_removed_object","Case_047_one_of_prop_added_object","Case_048_one_of_prop_removed_object"];export{n as Case_001_array_variant_add_one_indexed_item_string,r as Case_002_array_variant_remove_one_indexed_item_string,a as Case_003_array_variant_add_two_indexed_items_string,t as Case_004_array_variant_remove_two_indexed_items_string,i as Case_005_array_variant_added_string,o as Case_006_array_variant_removed_string,s as Case_007_one_of_prop_added_string,p as Case_008_one_of_prop_removed_string,m as Case_009_array_variant_add_one_indexed_item_number,d as Case_010_array_variant_remove_one_indexed_item_number,y as Case_011_array_variant_add_two_indexed_items_number,c as Case_012_array_variant_remove_two_indexed_items_number,l as Case_013_array_variant_added_number,_ as Case_014_array_variant_removed_number,u as Case_015_one_of_prop_added_number,f as Case_016_one_of_prop_removed_number,h as Case_017_array_variant_add_one_indexed_item_integer,g as Case_018_array_variant_remove_one_indexed_item_integer,v as Case_019_array_variant_add_two_indexed_items_integer,b as Case_020_array_variant_remove_two_indexed_items_integer,O as Case_021_array_variant_added_integer,x as Case_022_array_variant_removed_integer,w as Case_023_one_of_prop_added_integer,j as Case_024_one_of_prop_removed_integer,S as Case_025_array_variant_add_one_indexed_item_boolean,I as Case_026_array_variant_remove_one_indexed_item_boolean,C as Case_027_array_variant_add_two_indexed_items_boolean,A as Case_028_array_variant_remove_two_indexed_items_boolean,P as Case_029_array_variant_added_boolean,R as Case_030_array_variant_removed_boolean,V as Case_031_one_of_prop_added_boolean,q as Case_032_one_of_prop_removed_boolean,N as Case_033_array_variant_add_one_indexed_item_array,T as Case_034_array_variant_remove_one_indexed_item_array,L as Case_035_array_variant_add_two_indexed_items_array,W as Case_036_array_variant_remove_two_indexed_items_array,z as Case_037_array_variant_added_array,$ as Case_038_array_variant_removed_array,D as Case_039_one_of_prop_added_array,J as Case_040_one_of_prop_removed_array,F as Case_041_array_variant_add_one_indexed_item_object,B as Case_042_array_variant_remove_one_indexed_item_object,E as Case_043_array_variant_add_two_indexed_items_object,k as Case_044_array_variant_remove_two_indexed_items_object,G as Case_045_array_variant_added_object,H as Case_046_array_variant_removed_object,K as Case_047_one_of_prop_added_object,M as Case_048_one_of_prop_removed_object,Kt as __namedExportsOrder,Ht as default};
