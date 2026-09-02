import{c as Tr}from"./diffs-samples-cases-1df1f3ae.js";import{c as Lr,J as Nr,j as zr,a as $r}from"./json-schema-diffs-utils-aa33b7cd.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-d707f5a9.js";import"./DiffBadge-ceca5443.js";import"./IndexesNodeViewer-45426e65.js";import"./DdlTableDiffsViewer-90eb36a6.js";/* empty css              */import"./DdlTableViewer-5fe64823.js";import"./GraphQLOperationDiffViewer-e3d9068d.js";import"./GraphPropNodeViewer-6b50c183.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-50742c46.js";import"./preprocess-b5de1a20.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const Dr=`type: object
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
      - type: array
        description: Tuple array with 0 indexed string item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

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

`,Er=`type: object
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

`,Vr=`type: object
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

`,kr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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
        description: Tuple array with 0 indexed number item schemas
        items: []
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

`,Wr=`type: object
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
        description: Tuple array with 0 indexed array item schemas
        items: []
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

`,Pa=`type: object
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

`,Aa=`type: object
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
        description: Tuple array with 0 indexed string item schemas
        items: []
        minItems: 0
        maxItems: 10
        uniqueItems: true

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
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

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

`,Ja=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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
        description: Tuple array with 0 indexed number item schemas
        items: []
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

`,Ha=`type: object
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

`,Ka=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

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

`,St=Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/001-array-variant-add-one-indexed-item-string/before.yaml":Dr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/002-array-variant-remove-one-indexed-item-string/before.yaml":Jr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/003-array-variant-add-two-indexed-items-string/before.yaml":Fr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/004-array-variant-remove-two-indexed-items-string/before.yaml":Br,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/005-array-variant-added-string/before.yaml":Er,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/006-array-variant-removed-string/before.yaml":Vr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/007-one-of-prop-added-string/before.yaml":kr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/008-one-of-prop-removed-string/before.yaml":Gr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/009-array-variant-add-one-indexed-item-number/before.yaml":Hr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/010-array-variant-remove-one-indexed-item-number/before.yaml":Kr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/011-array-variant-add-two-indexed-items-number/before.yaml":Mr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/012-array-variant-remove-two-indexed-items-number/before.yaml":Qr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/013-array-variant-added-number/before.yaml":Ur,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/014-array-variant-removed-number/before.yaml":Wr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/015-one-of-prop-added-number/before.yaml":Xr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/016-one-of-prop-removed-number/before.yaml":Yr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/017-array-variant-add-one-indexed-item-integer/before.yaml":Zr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/018-array-variant-remove-one-indexed-item-integer/before.yaml":ea,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/019-array-variant-add-two-indexed-items-integer/before.yaml":na,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/020-array-variant-remove-two-indexed-items-integer/before.yaml":ra,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/021-array-variant-added-integer/before.yaml":aa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/022-array-variant-removed-integer/before.yaml":ta,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/023-one-of-prop-added-integer/before.yaml":ia,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/024-one-of-prop-removed-integer/before.yaml":oa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/025-array-variant-add-one-indexed-item-boolean/before.yaml":sa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/026-array-variant-remove-one-indexed-item-boolean/before.yaml":pa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/027-array-variant-add-two-indexed-items-boolean/before.yaml":ma,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/028-array-variant-remove-two-indexed-items-boolean/before.yaml":da,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/029-array-variant-added-boolean/before.yaml":ca,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/030-array-variant-removed-boolean/before.yaml":ya,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/031-one-of-prop-added-boolean/before.yaml":la,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/032-one-of-prop-removed-boolean/before.yaml":_a,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/033-array-variant-add-one-indexed-item-array/before.yaml":ua,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/034-array-variant-remove-one-indexed-item-array/before.yaml":fa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/035-array-variant-add-two-indexed-items-array/before.yaml":ga,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/036-array-variant-remove-two-indexed-items-array/before.yaml":ha,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/037-array-variant-added-array/before.yaml":va,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/038-array-variant-removed-array/before.yaml":ba,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/039-one-of-prop-added-array/before.yaml":Oa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/040-one-of-prop-removed-array/before.yaml":xa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/041-array-variant-add-one-indexed-item-object/before.yaml":wa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/042-array-variant-remove-one-indexed-item-object/before.yaml":ja,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/043-array-variant-add-two-indexed-items-object/before.yaml":Sa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/044-array-variant-remove-two-indexed-items-object/before.yaml":Ia,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/045-array-variant-added-object/before.yaml":Pa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/046-array-variant-removed-object/before.yaml":Ca,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/047-one-of-prop-added-object/before.yaml":Aa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/048-one-of-prop-removed-object/before.yaml":Ra}),It=Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/001-array-variant-add-one-indexed-item-string/after.yaml":qa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/002-array-variant-remove-one-indexed-item-string/after.yaml":Na,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/003-array-variant-add-two-indexed-items-string/after.yaml":Ta,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/004-array-variant-remove-two-indexed-items-string/after.yaml":La,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/005-array-variant-added-string/after.yaml":za,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/006-array-variant-removed-string/after.yaml":$a,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/007-one-of-prop-added-string/after.yaml":Da,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/008-one-of-prop-removed-string/after.yaml":Ja,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/009-array-variant-add-one-indexed-item-number/after.yaml":Fa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/010-array-variant-remove-one-indexed-item-number/after.yaml":Ba,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/011-array-variant-add-two-indexed-items-number/after.yaml":Ea,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/012-array-variant-remove-two-indexed-items-number/after.yaml":Va,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/013-array-variant-added-number/after.yaml":ka,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/014-array-variant-removed-number/after.yaml":Ga,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/015-one-of-prop-added-number/after.yaml":Ha,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/016-one-of-prop-removed-number/after.yaml":Ka,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/017-array-variant-add-one-indexed-item-integer/after.yaml":Ma,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/018-array-variant-remove-one-indexed-item-integer/after.yaml":Qa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/019-array-variant-add-two-indexed-items-integer/after.yaml":Ua,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/020-array-variant-remove-two-indexed-items-integer/after.yaml":Wa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/021-array-variant-added-integer/after.yaml":Xa,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/022-array-variant-removed-integer/after.yaml":Ya,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/023-one-of-prop-added-integer/after.yaml":Za,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/024-one-of-prop-removed-integer/after.yaml":et,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/025-array-variant-add-one-indexed-item-boolean/after.yaml":nt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/026-array-variant-remove-one-indexed-item-boolean/after.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/027-array-variant-add-two-indexed-items-boolean/after.yaml":at,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/028-array-variant-remove-two-indexed-items-boolean/after.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/029-array-variant-added-boolean/after.yaml":it,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/030-array-variant-removed-boolean/after.yaml":ot,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/031-one-of-prop-added-boolean/after.yaml":st,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/032-one-of-prop-removed-boolean/after.yaml":pt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/033-array-variant-add-one-indexed-item-array/after.yaml":mt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/034-array-variant-remove-one-indexed-item-array/after.yaml":dt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/035-array-variant-add-two-indexed-items-array/after.yaml":ct,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/036-array-variant-remove-two-indexed-items-array/after.yaml":yt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/037-array-variant-added-array/after.yaml":lt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/038-array-variant-removed-array/after.yaml":_t,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/039-one-of-prop-added-array/after.yaml":ut,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/040-one-of-prop-removed-array/after.yaml":ft,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/041-array-variant-add-one-indexed-item-object/after.yaml":gt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/042-array-variant-remove-one-indexed-item-object/after.yaml":ht,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/043-array-variant-add-two-indexed-items-object/after.yaml":vt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/044-array-variant-remove-two-indexed-items-object/after.yaml":bt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/045-array-variant-added-object/after.yaml":Ot,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/046-array-variant-removed-object/after.yaml":xt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/047-one-of-prop-added-object/after.yaml":wt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/048-one-of-prop-removed-object/after.yaml":jt}),Pt=Tr(St,It),Ct=Lr(Pt),Kt={title:"JSON Schema Diffs Suite/OneOf Array Variant Samples",component:Nr,argTypes:zr},e=$r(Nr,Ct),n=e("001-array-variant-add-one-indexed-item-string"),r=e("002-array-variant-remove-one-indexed-item-string"),a=e("003-array-variant-add-two-indexed-items-string"),t=e("004-array-variant-remove-two-indexed-items-string"),i=e("005-array-variant-added-string"),o=e("006-array-variant-removed-string"),s=e("007-one-of-prop-added-string"),p=e("008-one-of-prop-removed-string"),m=e("009-array-variant-add-one-indexed-item-number"),d=e("010-array-variant-remove-one-indexed-item-number"),c=e("011-array-variant-add-two-indexed-items-number"),y=e("012-array-variant-remove-two-indexed-items-number"),l=e("013-array-variant-added-number"),_=e("014-array-variant-removed-number"),u=e("015-one-of-prop-added-number"),f=e("016-one-of-prop-removed-number"),g=e("017-array-variant-add-one-indexed-item-integer"),h=e("018-array-variant-remove-one-indexed-item-integer"),v=e("019-array-variant-add-two-indexed-items-integer"),b=e("020-array-variant-remove-two-indexed-items-integer"),O=e("021-array-variant-added-integer"),x=e("022-array-variant-removed-integer"),w=e("023-one-of-prop-added-integer"),j=e("024-one-of-prop-removed-integer"),S=e("025-array-variant-add-one-indexed-item-boolean"),I=e("026-array-variant-remove-one-indexed-item-boolean"),P=e("027-array-variant-add-two-indexed-items-boolean"),C=e("028-array-variant-remove-two-indexed-items-boolean"),A=e("029-array-variant-added-boolean"),R=e("030-array-variant-removed-boolean"),q=e("031-one-of-prop-added-boolean"),N=e("032-one-of-prop-removed-boolean"),T=e("033-array-variant-add-one-indexed-item-array"),L=e("034-array-variant-remove-one-indexed-item-array"),z=e("035-array-variant-add-two-indexed-items-array"),$=e("036-array-variant-remove-two-indexed-items-array"),D=e("037-array-variant-added-array"),J=e("038-array-variant-removed-array"),F=e("039-one-of-prop-added-array"),B=e("040-one-of-prop-removed-array"),E=e("041-array-variant-add-one-indexed-item-object"),V=e("042-array-variant-remove-one-indexed-item-object"),k=e("043-array-variant-add-two-indexed-items-object"),G=e("044-array-variant-remove-two-indexed-items-object"),H=e("045-array-variant-added-object"),K=e("046-array-variant-removed-object"),M=e("047-one-of-prop-added-object"),Q=e("048-one-of-prop-removed-object");var U,W,X;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("001-array-variant-add-one-indexed-item-string")',...(X=(W=n.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;r.parameters={...r.parameters,docs:{...(Y=r.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("002-array-variant-remove-one-indexed-item-string")',...(ee=(Z=r.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,ae;a.parameters={...a.parameters,docs:{...(ne=a.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("003-array-variant-add-two-indexed-items-string")',...(ae=(re=a.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,ie,oe;t.parameters={...t.parameters,docs:{...(te=t.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("004-array-variant-remove-two-indexed-items-string")',...(oe=(ie=t.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,pe,me;i.parameters={...i.parameters,docs:{...(se=i.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("005-array-variant-added-string")',...(me=(pe=i.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var de,ce,ye;o.parameters={...o.parameters,docs:{...(de=o.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("006-array-variant-removed-string")',...(ye=(ce=o.parameters)==null?void 0:ce.docs)==null?void 0:ye.source}}};var le,_e,ue;s.parameters={...s.parameters,docs:{...(le=s.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("007-one-of-prop-added-string")',...(ue=(_e=s.parameters)==null?void 0:_e.docs)==null?void 0:ue.source}}};var fe,ge,he;p.parameters={...p.parameters,docs:{...(fe=p.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("008-one-of-prop-removed-string")',...(he=(ge=p.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,be,Oe;m.parameters={...m.parameters,docs:{...(ve=m.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("009-array-variant-add-one-indexed-item-number")',...(Oe=(be=m.parameters)==null?void 0:be.docs)==null?void 0:Oe.source}}};var xe,we,je;d.parameters={...d.parameters,docs:{...(xe=d.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("010-array-variant-remove-one-indexed-item-number")',...(je=(we=d.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};var Se,Ie,Pe;c.parameters={...c.parameters,docs:{...(Se=c.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("011-array-variant-add-two-indexed-items-number")',...(Pe=(Ie=c.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Ce,Ae,Re;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("012-array-variant-remove-two-indexed-items-number")',...(Re=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var qe,Ne,Te;l.parameters={...l.parameters,docs:{...(qe=l.parameters)==null?void 0:qe.docs,source:{originalSource:'createCaseStory("013-array-variant-added-number")',...(Te=(Ne=l.parameters)==null?void 0:Ne.docs)==null?void 0:Te.source}}};var Le,ze,$e;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:'createCaseStory("014-array-variant-removed-number")',...($e=(ze=_.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var De,Je,Fe;u.parameters={...u.parameters,docs:{...(De=u.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("015-one-of-prop-added-number")',...(Fe=(Je=u.parameters)==null?void 0:Je.docs)==null?void 0:Fe.source}}};var Be,Ee,Ve;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:'createCaseStory("016-one-of-prop-removed-number")',...(Ve=(Ee=f.parameters)==null?void 0:Ee.docs)==null?void 0:Ve.source}}};var ke,Ge,He;g.parameters={...g.parameters,docs:{...(ke=g.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("017-array-variant-add-one-indexed-item-integer")',...(He=(Ge=g.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Ke,Me,Qe;h.parameters={...h.parameters,docs:{...(Ke=h.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("018-array-variant-remove-one-indexed-item-integer")',...(Qe=(Me=h.parameters)==null?void 0:Me.docs)==null?void 0:Qe.source}}};var Ue,We,Xe;v.parameters={...v.parameters,docs:{...(Ue=v.parameters)==null?void 0:Ue.docs,source:{originalSource:'createCaseStory("019-array-variant-add-two-indexed-items-integer")',...(Xe=(We=v.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;b.parameters={...b.parameters,docs:{...(Ye=b.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("020-array-variant-remove-two-indexed-items-integer")',...(en=(Ze=b.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,rn,an;O.parameters={...O.parameters,docs:{...(nn=O.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("021-array-variant-added-integer")',...(an=(rn=O.parameters)==null?void 0:rn.docs)==null?void 0:an.source}}};var tn,on,sn;x.parameters={...x.parameters,docs:{...(tn=x.parameters)==null?void 0:tn.docs,source:{originalSource:'createCaseStory("022-array-variant-removed-integer")',...(sn=(on=x.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var pn,mn,dn;w.parameters={...w.parameters,docs:{...(pn=w.parameters)==null?void 0:pn.docs,source:{originalSource:'createCaseStory("023-one-of-prop-added-integer")',...(dn=(mn=w.parameters)==null?void 0:mn.docs)==null?void 0:dn.source}}};var cn,yn,ln;j.parameters={...j.parameters,docs:{...(cn=j.parameters)==null?void 0:cn.docs,source:{originalSource:'createCaseStory("024-one-of-prop-removed-integer")',...(ln=(yn=j.parameters)==null?void 0:yn.docs)==null?void 0:ln.source}}};var _n,un,fn;S.parameters={...S.parameters,docs:{...(_n=S.parameters)==null?void 0:_n.docs,source:{originalSource:'createCaseStory("025-array-variant-add-one-indexed-item-boolean")',...(fn=(un=S.parameters)==null?void 0:un.docs)==null?void 0:fn.source}}};var gn,hn,vn;I.parameters={...I.parameters,docs:{...(gn=I.parameters)==null?void 0:gn.docs,source:{originalSource:'createCaseStory("026-array-variant-remove-one-indexed-item-boolean")',...(vn=(hn=I.parameters)==null?void 0:hn.docs)==null?void 0:vn.source}}};var bn,On,xn;P.parameters={...P.parameters,docs:{...(bn=P.parameters)==null?void 0:bn.docs,source:{originalSource:'createCaseStory("027-array-variant-add-two-indexed-items-boolean")',...(xn=(On=P.parameters)==null?void 0:On.docs)==null?void 0:xn.source}}};var wn,jn,Sn;C.parameters={...C.parameters,docs:{...(wn=C.parameters)==null?void 0:wn.docs,source:{originalSource:'createCaseStory("028-array-variant-remove-two-indexed-items-boolean")',...(Sn=(jn=C.parameters)==null?void 0:jn.docs)==null?void 0:Sn.source}}};var In,Pn,Cn;A.parameters={...A.parameters,docs:{...(In=A.parameters)==null?void 0:In.docs,source:{originalSource:'createCaseStory("029-array-variant-added-boolean")',...(Cn=(Pn=A.parameters)==null?void 0:Pn.docs)==null?void 0:Cn.source}}};var An,Rn,qn;R.parameters={...R.parameters,docs:{...(An=R.parameters)==null?void 0:An.docs,source:{originalSource:'createCaseStory("030-array-variant-removed-boolean")',...(qn=(Rn=R.parameters)==null?void 0:Rn.docs)==null?void 0:qn.source}}};var Nn,Tn,Ln;q.parameters={...q.parameters,docs:{...(Nn=q.parameters)==null?void 0:Nn.docs,source:{originalSource:'createCaseStory("031-one-of-prop-added-boolean")',...(Ln=(Tn=q.parameters)==null?void 0:Tn.docs)==null?void 0:Ln.source}}};var zn,$n,Dn;N.parameters={...N.parameters,docs:{...(zn=N.parameters)==null?void 0:zn.docs,source:{originalSource:'createCaseStory("032-one-of-prop-removed-boolean")',...(Dn=($n=N.parameters)==null?void 0:$n.docs)==null?void 0:Dn.source}}};var Jn,Fn,Bn;T.parameters={...T.parameters,docs:{...(Jn=T.parameters)==null?void 0:Jn.docs,source:{originalSource:'createCaseStory("033-array-variant-add-one-indexed-item-array")',...(Bn=(Fn=T.parameters)==null?void 0:Fn.docs)==null?void 0:Bn.source}}};var En,Vn,kn;L.parameters={...L.parameters,docs:{...(En=L.parameters)==null?void 0:En.docs,source:{originalSource:'createCaseStory("034-array-variant-remove-one-indexed-item-array")',...(kn=(Vn=L.parameters)==null?void 0:Vn.docs)==null?void 0:kn.source}}};var Gn,Hn,Kn;z.parameters={...z.parameters,docs:{...(Gn=z.parameters)==null?void 0:Gn.docs,source:{originalSource:'createCaseStory("035-array-variant-add-two-indexed-items-array")',...(Kn=(Hn=z.parameters)==null?void 0:Hn.docs)==null?void 0:Kn.source}}};var Mn,Qn,Un;$.parameters={...$.parameters,docs:{...(Mn=$.parameters)==null?void 0:Mn.docs,source:{originalSource:'createCaseStory("036-array-variant-remove-two-indexed-items-array")',...(Un=(Qn=$.parameters)==null?void 0:Qn.docs)==null?void 0:Un.source}}};var Wn,Xn,Yn;D.parameters={...D.parameters,docs:{...(Wn=D.parameters)==null?void 0:Wn.docs,source:{originalSource:'createCaseStory("037-array-variant-added-array")',...(Yn=(Xn=D.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Zn,er,nr;J.parameters={...J.parameters,docs:{...(Zn=J.parameters)==null?void 0:Zn.docs,source:{originalSource:'createCaseStory("038-array-variant-removed-array")',...(nr=(er=J.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,ar,tr;F.parameters={...F.parameters,docs:{...(rr=F.parameters)==null?void 0:rr.docs,source:{originalSource:'createCaseStory("039-one-of-prop-added-array")',...(tr=(ar=F.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var ir,or,sr;B.parameters={...B.parameters,docs:{...(ir=B.parameters)==null?void 0:ir.docs,source:{originalSource:'createCaseStory("040-one-of-prop-removed-array")',...(sr=(or=B.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var pr,mr,dr;E.parameters={...E.parameters,docs:{...(pr=E.parameters)==null?void 0:pr.docs,source:{originalSource:'createCaseStory("041-array-variant-add-one-indexed-item-object")',...(dr=(mr=E.parameters)==null?void 0:mr.docs)==null?void 0:dr.source}}};var cr,yr,lr;V.parameters={...V.parameters,docs:{...(cr=V.parameters)==null?void 0:cr.docs,source:{originalSource:'createCaseStory("042-array-variant-remove-one-indexed-item-object")',...(lr=(yr=V.parameters)==null?void 0:yr.docs)==null?void 0:lr.source}}};var _r,ur,fr;k.parameters={...k.parameters,docs:{...(_r=k.parameters)==null?void 0:_r.docs,source:{originalSource:'createCaseStory("043-array-variant-add-two-indexed-items-object")',...(fr=(ur=k.parameters)==null?void 0:ur.docs)==null?void 0:fr.source}}};var gr,hr,vr;G.parameters={...G.parameters,docs:{...(gr=G.parameters)==null?void 0:gr.docs,source:{originalSource:'createCaseStory("044-array-variant-remove-two-indexed-items-object")',...(vr=(hr=G.parameters)==null?void 0:hr.docs)==null?void 0:vr.source}}};var br,Or,xr;H.parameters={...H.parameters,docs:{...(br=H.parameters)==null?void 0:br.docs,source:{originalSource:'createCaseStory("045-array-variant-added-object")',...(xr=(Or=H.parameters)==null?void 0:Or.docs)==null?void 0:xr.source}}};var wr,jr,Sr;K.parameters={...K.parameters,docs:{...(wr=K.parameters)==null?void 0:wr.docs,source:{originalSource:'createCaseStory("046-array-variant-removed-object")',...(Sr=(jr=K.parameters)==null?void 0:jr.docs)==null?void 0:Sr.source}}};var Ir,Pr,Cr;M.parameters={...M.parameters,docs:{...(Ir=M.parameters)==null?void 0:Ir.docs,source:{originalSource:'createCaseStory("047-one-of-prop-added-object")',...(Cr=(Pr=M.parameters)==null?void 0:Pr.docs)==null?void 0:Cr.source}}};var Ar,Rr,qr;Q.parameters={...Q.parameters,docs:{...(Ar=Q.parameters)==null?void 0:Ar.docs,source:{originalSource:'createCaseStory("048-one-of-prop-removed-object")',...(qr=(Rr=Q.parameters)==null?void 0:Rr.docs)==null?void 0:qr.source}}};const Mt=["Case_001_array_variant_add_one_indexed_item_string","Case_002_array_variant_remove_one_indexed_item_string","Case_003_array_variant_add_two_indexed_items_string","Case_004_array_variant_remove_two_indexed_items_string","Case_005_array_variant_added_string","Case_006_array_variant_removed_string","Case_007_one_of_prop_added_string","Case_008_one_of_prop_removed_string","Case_009_array_variant_add_one_indexed_item_number","Case_010_array_variant_remove_one_indexed_item_number","Case_011_array_variant_add_two_indexed_items_number","Case_012_array_variant_remove_two_indexed_items_number","Case_013_array_variant_added_number","Case_014_array_variant_removed_number","Case_015_one_of_prop_added_number","Case_016_one_of_prop_removed_number","Case_017_array_variant_add_one_indexed_item_integer","Case_018_array_variant_remove_one_indexed_item_integer","Case_019_array_variant_add_two_indexed_items_integer","Case_020_array_variant_remove_two_indexed_items_integer","Case_021_array_variant_added_integer","Case_022_array_variant_removed_integer","Case_023_one_of_prop_added_integer","Case_024_one_of_prop_removed_integer","Case_025_array_variant_add_one_indexed_item_boolean","Case_026_array_variant_remove_one_indexed_item_boolean","Case_027_array_variant_add_two_indexed_items_boolean","Case_028_array_variant_remove_two_indexed_items_boolean","Case_029_array_variant_added_boolean","Case_030_array_variant_removed_boolean","Case_031_one_of_prop_added_boolean","Case_032_one_of_prop_removed_boolean","Case_033_array_variant_add_one_indexed_item_array","Case_034_array_variant_remove_one_indexed_item_array","Case_035_array_variant_add_two_indexed_items_array","Case_036_array_variant_remove_two_indexed_items_array","Case_037_array_variant_added_array","Case_038_array_variant_removed_array","Case_039_one_of_prop_added_array","Case_040_one_of_prop_removed_array","Case_041_array_variant_add_one_indexed_item_object","Case_042_array_variant_remove_one_indexed_item_object","Case_043_array_variant_add_two_indexed_items_object","Case_044_array_variant_remove_two_indexed_items_object","Case_045_array_variant_added_object","Case_046_array_variant_removed_object","Case_047_one_of_prop_added_object","Case_048_one_of_prop_removed_object"];export{n as Case_001_array_variant_add_one_indexed_item_string,r as Case_002_array_variant_remove_one_indexed_item_string,a as Case_003_array_variant_add_two_indexed_items_string,t as Case_004_array_variant_remove_two_indexed_items_string,i as Case_005_array_variant_added_string,o as Case_006_array_variant_removed_string,s as Case_007_one_of_prop_added_string,p as Case_008_one_of_prop_removed_string,m as Case_009_array_variant_add_one_indexed_item_number,d as Case_010_array_variant_remove_one_indexed_item_number,c as Case_011_array_variant_add_two_indexed_items_number,y as Case_012_array_variant_remove_two_indexed_items_number,l as Case_013_array_variant_added_number,_ as Case_014_array_variant_removed_number,u as Case_015_one_of_prop_added_number,f as Case_016_one_of_prop_removed_number,g as Case_017_array_variant_add_one_indexed_item_integer,h as Case_018_array_variant_remove_one_indexed_item_integer,v as Case_019_array_variant_add_two_indexed_items_integer,b as Case_020_array_variant_remove_two_indexed_items_integer,O as Case_021_array_variant_added_integer,x as Case_022_array_variant_removed_integer,w as Case_023_one_of_prop_added_integer,j as Case_024_one_of_prop_removed_integer,S as Case_025_array_variant_add_one_indexed_item_boolean,I as Case_026_array_variant_remove_one_indexed_item_boolean,P as Case_027_array_variant_add_two_indexed_items_boolean,C as Case_028_array_variant_remove_two_indexed_items_boolean,A as Case_029_array_variant_added_boolean,R as Case_030_array_variant_removed_boolean,q as Case_031_one_of_prop_added_boolean,N as Case_032_one_of_prop_removed_boolean,T as Case_033_array_variant_add_one_indexed_item_array,L as Case_034_array_variant_remove_one_indexed_item_array,z as Case_035_array_variant_add_two_indexed_items_array,$ as Case_036_array_variant_remove_two_indexed_items_array,D as Case_037_array_variant_added_array,J as Case_038_array_variant_removed_array,F as Case_039_one_of_prop_added_array,B as Case_040_one_of_prop_removed_array,E as Case_041_array_variant_add_one_indexed_item_object,V as Case_042_array_variant_remove_one_indexed_item_object,k as Case_043_array_variant_add_two_indexed_items_object,G as Case_044_array_variant_remove_two_indexed_items_object,H as Case_045_array_variant_added_object,K as Case_046_array_variant_removed_object,M as Case_047_one_of_prop_added_object,Q as Case_048_one_of_prop_removed_object,Mt as __namedExportsOrder,Kt as default};
