import{c as Ft}from"./diffs-samples-cases-1df1f3ae.js";import{c as Bt,J as Jt,j as Tt,a as Et}from"./json-schema-diffs-utils-361af4d1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-2d7bd233.js";import"./DiffBadge-4d4a1c37.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-be584810.js";import"./GraphPropNodeViewer-1f5ff77a.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-3b42765c.js";import"./preprocess-c9227d17.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";const kt=`type: object
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

`,Ht=`type: object
description: Object with 0 string property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Kt=`type: object
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

`,Mt=`type: object
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

`,Qt=`type: object
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
description: Object with 0 number property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Vt=`type: object
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

`,Wt=`type: object
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

`,Xt=`type: object
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

`,Yt=`type: object
description: Object with 0 integer property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Zt=`type: object
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

`,en=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,tn=`type: object
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

`,nn=`type: object
description: Object with 0 boolean property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,rn=`type: object
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

`,on=`type: object
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

`,pn=`type: object
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

`,an=`type: object
description: Object with 0 array property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,sn=`type: object
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

`,cn=`type: object
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

`,mn=`type: object
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

`,_n=`type: object
description: Object with 0 object property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,dn=`type: object
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

`,ln=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,yn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,bn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,hn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,gn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,fn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,un=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,jn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,vn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,wn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,On=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,Pn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Sn=`type: object
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

`,xn=`type: object
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

`,Cn=`type: object
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

`,In=`type: object
description: Object with 0 string property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,An=`type: object
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

`,Nn=`type: object
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

`,Rn=`type: object
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

`,Ln=`type: object
description: Object with 0 number property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,qn=`type: object
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

`,zn=`type: object
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

`,$n=`type: object
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

`,Dn=`type: object
description: Object with 0 integer property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Jn=`type: object
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

`,Fn=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Bn=`type: object
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

`,Tn=`type: object
description: Object with 0 boolean property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,En=`type: object
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

`,kn=`type: object
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

`,Gn=`type: object
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

`,Hn=`type: object
description: Object with 0 array property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Kn=`type: object
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

`,Mn=`type: object
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

`,Qn=`type: object
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

`,Un=`type: object
description: Object with 0 object property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Vn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Wn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,Xn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Yn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,Zn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
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

`,ar=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`,ir=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-properties/001-add-one-property-string/before.yaml":kt,"../../../../samples/json-schema-diffs/type-changes/object-properties/002-remove-one-property-string/before.yaml":Gt,"../../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string/before.yaml":Ht,"../../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string/before.yaml":Kt,"../../../../samples/json-schema-diffs/type-changes/object-properties/005-add-one-property-number/before.yaml":Mt,"../../../../samples/json-schema-diffs/type-changes/object-properties/006-remove-one-property-number/before.yaml":Qt,"../../../../samples/json-schema-diffs/type-changes/object-properties/007-add-two-properties-number/before.yaml":Ut,"../../../../samples/json-schema-diffs/type-changes/object-properties/008-remove-two-properties-number/before.yaml":Vt,"../../../../samples/json-schema-diffs/type-changes/object-properties/009-add-one-property-integer/before.yaml":Wt,"../../../../samples/json-schema-diffs/type-changes/object-properties/010-remove-one-property-integer/before.yaml":Xt,"../../../../samples/json-schema-diffs/type-changes/object-properties/011-add-two-properties-integer/before.yaml":Yt,"../../../../samples/json-schema-diffs/type-changes/object-properties/012-remove-two-properties-integer/before.yaml":Zt,"../../../../samples/json-schema-diffs/type-changes/object-properties/013-add-one-property-boolean/before.yaml":en,"../../../../samples/json-schema-diffs/type-changes/object-properties/014-remove-one-property-boolean/before.yaml":tn,"../../../../samples/json-schema-diffs/type-changes/object-properties/015-add-two-properties-boolean/before.yaml":nn,"../../../../samples/json-schema-diffs/type-changes/object-properties/016-remove-two-properties-boolean/before.yaml":rn,"../../../../samples/json-schema-diffs/type-changes/object-properties/017-add-one-property-array/before.yaml":on,"../../../../samples/json-schema-diffs/type-changes/object-properties/018-remove-one-property-array/before.yaml":pn,"../../../../samples/json-schema-diffs/type-changes/object-properties/019-add-two-properties-array/before.yaml":an,"../../../../samples/json-schema-diffs/type-changes/object-properties/020-remove-two-properties-array/before.yaml":sn,"../../../../samples/json-schema-diffs/type-changes/object-properties/021-add-one-property-object/before.yaml":cn,"../../../../samples/json-schema-diffs/type-changes/object-properties/022-remove-one-property-object/before.yaml":mn,"../../../../samples/json-schema-diffs/type-changes/object-properties/023-add-two-properties-object/before.yaml":_n,"../../../../samples/json-schema-diffs/type-changes/object-properties/024-remove-two-properties-object/before.yaml":dn,"../../../../samples/json-schema-diffs/type-changes/object-properties/025-one-of-add-object-variant-with-prop-type-string/before.yaml":ln,"../../../../samples/json-schema-diffs/type-changes/object-properties/026-one-of-remove-object-variant-with-prop-type-string/before.yaml":yn,"../../../../samples/json-schema-diffs/type-changes/object-properties/027-one-of-add-object-variant-with-prop-type-number/before.yaml":bn,"../../../../samples/json-schema-diffs/type-changes/object-properties/028-one-of-remove-object-variant-with-prop-type-number/before.yaml":hn,"../../../../samples/json-schema-diffs/type-changes/object-properties/029-one-of-add-object-variant-with-prop-type-integer/before.yaml":gn,"../../../../samples/json-schema-diffs/type-changes/object-properties/030-one-of-remove-object-variant-with-prop-type-integer/before.yaml":fn,"../../../../samples/json-schema-diffs/type-changes/object-properties/031-one-of-add-object-variant-with-prop-type-boolean/before.yaml":un,"../../../../samples/json-schema-diffs/type-changes/object-properties/032-one-of-remove-object-variant-with-prop-type-boolean/before.yaml":jn,"../../../../samples/json-schema-diffs/type-changes/object-properties/033-one-of-add-object-variant-with-prop-type-array/before.yaml":vn,"../../../../samples/json-schema-diffs/type-changes/object-properties/034-one-of-remove-object-variant-with-prop-type-array/before.yaml":wn,"../../../../samples/json-schema-diffs/type-changes/object-properties/035-one-of-add-object-variant-with-prop-type-object/before.yaml":On,"../../../../samples/json-schema-diffs/type-changes/object-properties/036-one-of-remove-object-variant-with-prop-type-object/before.yaml":Pn}),sr=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-properties/001-add-one-property-string/after.yaml":Sn,"../../../../samples/json-schema-diffs/type-changes/object-properties/002-remove-one-property-string/after.yaml":xn,"../../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string/after.yaml":Cn,"../../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string/after.yaml":In,"../../../../samples/json-schema-diffs/type-changes/object-properties/005-add-one-property-number/after.yaml":An,"../../../../samples/json-schema-diffs/type-changes/object-properties/006-remove-one-property-number/after.yaml":Nn,"../../../../samples/json-schema-diffs/type-changes/object-properties/007-add-two-properties-number/after.yaml":Rn,"../../../../samples/json-schema-diffs/type-changes/object-properties/008-remove-two-properties-number/after.yaml":Ln,"../../../../samples/json-schema-diffs/type-changes/object-properties/009-add-one-property-integer/after.yaml":qn,"../../../../samples/json-schema-diffs/type-changes/object-properties/010-remove-one-property-integer/after.yaml":zn,"../../../../samples/json-schema-diffs/type-changes/object-properties/011-add-two-properties-integer/after.yaml":$n,"../../../../samples/json-schema-diffs/type-changes/object-properties/012-remove-two-properties-integer/after.yaml":Dn,"../../../../samples/json-schema-diffs/type-changes/object-properties/013-add-one-property-boolean/after.yaml":Jn,"../../../../samples/json-schema-diffs/type-changes/object-properties/014-remove-one-property-boolean/after.yaml":Fn,"../../../../samples/json-schema-diffs/type-changes/object-properties/015-add-two-properties-boolean/after.yaml":Bn,"../../../../samples/json-schema-diffs/type-changes/object-properties/016-remove-two-properties-boolean/after.yaml":Tn,"../../../../samples/json-schema-diffs/type-changes/object-properties/017-add-one-property-array/after.yaml":En,"../../../../samples/json-schema-diffs/type-changes/object-properties/018-remove-one-property-array/after.yaml":kn,"../../../../samples/json-schema-diffs/type-changes/object-properties/019-add-two-properties-array/after.yaml":Gn,"../../../../samples/json-schema-diffs/type-changes/object-properties/020-remove-two-properties-array/after.yaml":Hn,"../../../../samples/json-schema-diffs/type-changes/object-properties/021-add-one-property-object/after.yaml":Kn,"../../../../samples/json-schema-diffs/type-changes/object-properties/022-remove-one-property-object/after.yaml":Mn,"../../../../samples/json-schema-diffs/type-changes/object-properties/023-add-two-properties-object/after.yaml":Qn,"../../../../samples/json-schema-diffs/type-changes/object-properties/024-remove-two-properties-object/after.yaml":Un,"../../../../samples/json-schema-diffs/type-changes/object-properties/025-one-of-add-object-variant-with-prop-type-string/after.yaml":Vn,"../../../../samples/json-schema-diffs/type-changes/object-properties/026-one-of-remove-object-variant-with-prop-type-string/after.yaml":Wn,"../../../../samples/json-schema-diffs/type-changes/object-properties/027-one-of-add-object-variant-with-prop-type-number/after.yaml":Xn,"../../../../samples/json-schema-diffs/type-changes/object-properties/028-one-of-remove-object-variant-with-prop-type-number/after.yaml":Yn,"../../../../samples/json-schema-diffs/type-changes/object-properties/029-one-of-add-object-variant-with-prop-type-integer/after.yaml":Zn,"../../../../samples/json-schema-diffs/type-changes/object-properties/030-one-of-remove-object-variant-with-prop-type-integer/after.yaml":er,"../../../../samples/json-schema-diffs/type-changes/object-properties/031-one-of-add-object-variant-with-prop-type-boolean/after.yaml":tr,"../../../../samples/json-schema-diffs/type-changes/object-properties/032-one-of-remove-object-variant-with-prop-type-boolean/after.yaml":nr,"../../../../samples/json-schema-diffs/type-changes/object-properties/033-one-of-add-object-variant-with-prop-type-array/after.yaml":rr,"../../../../samples/json-schema-diffs/type-changes/object-properties/034-one-of-remove-object-variant-with-prop-type-array/after.yaml":or,"../../../../samples/json-schema-diffs/type-changes/object-properties/035-one-of-add-object-variant-with-prop-type-object/after.yaml":pr,"../../../../samples/json-schema-diffs/type-changes/object-properties/036-one-of-remove-object-variant-with-prop-type-object/after.yaml":ar}),cr=Ft(ir,sr),mr=Bt(cr),Ir={title:"JSON Schema Diffs Suite/Object Properties",component:Jt,argTypes:Tt},e=Et(Jt,mr),t=e("001-add-one-property-string"),n=e("002-remove-one-property-string"),r=e("003-add-two-properties-string"),o=e("004-remove-two-properties-string"),p=e("005-add-one-property-number"),a=e("006-remove-one-property-number"),i=e("007-add-two-properties-number"),s=e("008-remove-two-properties-number"),c=e("009-add-one-property-integer"),m=e("010-remove-one-property-integer"),_=e("011-add-two-properties-integer"),d=e("012-remove-two-properties-integer"),l=e("013-add-one-property-boolean"),y=e("014-remove-one-property-boolean"),b=e("015-add-two-properties-boolean"),h=e("016-remove-two-properties-boolean"),g=e("017-add-one-property-array"),f=e("018-remove-one-property-array"),u=e("019-add-two-properties-array"),j=e("020-remove-two-properties-array"),v=e("021-add-one-property-object"),w=e("022-remove-one-property-object"),O=e("023-add-two-properties-object"),P=e("024-remove-two-properties-object"),S=e("025-one-of-add-object-variant-with-prop-type-string"),x=e("026-one-of-remove-object-variant-with-prop-type-string"),C=e("027-one-of-add-object-variant-with-prop-type-number"),I=e("028-one-of-remove-object-variant-with-prop-type-number"),A=e("029-one-of-add-object-variant-with-prop-type-integer"),N=e("030-one-of-remove-object-variant-with-prop-type-integer"),R=e("031-one-of-add-object-variant-with-prop-type-boolean"),L=e("032-one-of-remove-object-variant-with-prop-type-boolean"),q=e("033-one-of-add-object-variant-with-prop-type-array"),z=e("034-one-of-remove-object-variant-with-prop-type-array"),$=e("035-one-of-add-object-variant-with-prop-type-object"),D=e("036-one-of-remove-object-variant-with-prop-type-object");var J,F,B;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("001-add-one-property-string")',...(B=(F=t.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var T,E,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("002-remove-one-property-string")',...(k=(E=n.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var G,H,K;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("003-add-two-properties-string")',...(K=(H=r.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var M,Q,U;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("004-remove-two-properties-string")',...(U=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,X;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("005-add-one-property-number")',...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("006-remove-one-property-number")',...(ee=(Z=a.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;i.parameters={...i.parameters,docs:{...(te=i.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("007-add-two-properties-number")',...(re=(ne=i.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,pe,ae;s.parameters={...s.parameters,docs:{...(oe=s.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("008-remove-two-properties-number")',...(ae=(pe=s.parameters)==null?void 0:pe.docs)==null?void 0:ae.source}}};var ie,se,ce;c.parameters={...c.parameters,docs:{...(ie=c.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("009-add-one-property-integer")',...(ce=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var me,_e,de;m.parameters={...m.parameters,docs:{...(me=m.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("010-remove-one-property-integer")',...(de=(_e=m.parameters)==null?void 0:_e.docs)==null?void 0:de.source}}};var le,ye,be;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("011-add-two-properties-integer")',...(be=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,ge,fe;d.parameters={...d.parameters,docs:{...(he=d.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("012-remove-two-properties-integer")',...(fe=(ge=d.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ue,je,ve;l.parameters={...l.parameters,docs:{...(ue=l.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("013-add-one-property-boolean")',...(ve=(je=l.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};var we,Oe,Pe;y.parameters={...y.parameters,docs:{...(we=y.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("014-remove-one-property-boolean")',...(Pe=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Se,xe,Ce;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("015-add-two-properties-boolean")',...(Ce=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Ie,Ae,Ne;h.parameters={...h.parameters,docs:{...(Ie=h.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("016-remove-two-properties-boolean")',...(Ne=(Ae=h.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var Re,Le,qe;g.parameters={...g.parameters,docs:{...(Re=g.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("017-add-one-property-array")',...(qe=(Le=g.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var ze,$e,De;f.parameters={...f.parameters,docs:{...(ze=f.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("018-remove-one-property-array")',...(De=($e=f.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var Je,Fe,Be;u.parameters={...u.parameters,docs:{...(Je=u.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("019-add-two-properties-array")',...(Be=(Fe=u.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Te,Ee,ke;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("020-remove-two-properties-array")',...(ke=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Ge,He,Ke;v.parameters={...v.parameters,docs:{...(Ge=v.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("021-add-one-property-object")',...(Ke=(He=v.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var Me,Qe,Ue;w.parameters={...w.parameters,docs:{...(Me=w.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("022-remove-one-property-object")',...(Ue=(Qe=w.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ve,We,Xe;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("023-add-two-properties-object")',...(Xe=(We=O.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ze,et;P.parameters={...P.parameters,docs:{...(Ye=P.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("024-remove-two-properties-object")',...(et=(Ze=P.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,rt;S.parameters={...S.parameters,docs:{...(tt=S.parameters)==null?void 0:tt.docs,source:{originalSource:'createCaseStory("025-one-of-add-object-variant-with-prop-type-string")',...(rt=(nt=S.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var ot,pt,at;x.parameters={...x.parameters,docs:{...(ot=x.parameters)==null?void 0:ot.docs,source:{originalSource:'createCaseStory("026-one-of-remove-object-variant-with-prop-type-string")',...(at=(pt=x.parameters)==null?void 0:pt.docs)==null?void 0:at.source}}};var it,st,ct;C.parameters={...C.parameters,docs:{...(it=C.parameters)==null?void 0:it.docs,source:{originalSource:'createCaseStory("027-one-of-add-object-variant-with-prop-type-number")',...(ct=(st=C.parameters)==null?void 0:st.docs)==null?void 0:ct.source}}};var mt,_t,dt;I.parameters={...I.parameters,docs:{...(mt=I.parameters)==null?void 0:mt.docs,source:{originalSource:'createCaseStory("028-one-of-remove-object-variant-with-prop-type-number")',...(dt=(_t=I.parameters)==null?void 0:_t.docs)==null?void 0:dt.source}}};var lt,yt,bt;A.parameters={...A.parameters,docs:{...(lt=A.parameters)==null?void 0:lt.docs,source:{originalSource:'createCaseStory("029-one-of-add-object-variant-with-prop-type-integer")',...(bt=(yt=A.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var ht,gt,ft;N.parameters={...N.parameters,docs:{...(ht=N.parameters)==null?void 0:ht.docs,source:{originalSource:'createCaseStory("030-one-of-remove-object-variant-with-prop-type-integer")',...(ft=(gt=N.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};var ut,jt,vt;R.parameters={...R.parameters,docs:{...(ut=R.parameters)==null?void 0:ut.docs,source:{originalSource:'createCaseStory("031-one-of-add-object-variant-with-prop-type-boolean")',...(vt=(jt=R.parameters)==null?void 0:jt.docs)==null?void 0:vt.source}}};var wt,Ot,Pt;L.parameters={...L.parameters,docs:{...(wt=L.parameters)==null?void 0:wt.docs,source:{originalSource:'createCaseStory("032-one-of-remove-object-variant-with-prop-type-boolean")',...(Pt=(Ot=L.parameters)==null?void 0:Ot.docs)==null?void 0:Pt.source}}};var St,xt,Ct;q.parameters={...q.parameters,docs:{...(St=q.parameters)==null?void 0:St.docs,source:{originalSource:'createCaseStory("033-one-of-add-object-variant-with-prop-type-array")',...(Ct=(xt=q.parameters)==null?void 0:xt.docs)==null?void 0:Ct.source}}};var It,At,Nt;z.parameters={...z.parameters,docs:{...(It=z.parameters)==null?void 0:It.docs,source:{originalSource:'createCaseStory("034-one-of-remove-object-variant-with-prop-type-array")',...(Nt=(At=z.parameters)==null?void 0:At.docs)==null?void 0:Nt.source}}};var Rt,Lt,qt;$.parameters={...$.parameters,docs:{...(Rt=$.parameters)==null?void 0:Rt.docs,source:{originalSource:'createCaseStory("035-one-of-add-object-variant-with-prop-type-object")',...(qt=(Lt=$.parameters)==null?void 0:Lt.docs)==null?void 0:qt.source}}};var zt,$t,Dt;D.parameters={...D.parameters,docs:{...(zt=D.parameters)==null?void 0:zt.docs,source:{originalSource:'createCaseStory("036-one-of-remove-object-variant-with-prop-type-object")',...(Dt=($t=D.parameters)==null?void 0:$t.docs)==null?void 0:Dt.source}}};const Ar=["Case_001_add_one_property_string","Case_002_remove_one_property_string","Case_003_add_two_properties_string","Case_004_remove_two_properties_string","Case_005_add_one_property_number","Case_006_remove_one_property_number","Case_007_add_two_properties_number","Case_008_remove_two_properties_number","Case_009_add_one_property_integer","Case_010_remove_one_property_integer","Case_011_add_two_properties_integer","Case_012_remove_two_properties_integer","Case_013_add_one_property_boolean","Case_014_remove_one_property_boolean","Case_015_add_two_properties_boolean","Case_016_remove_two_properties_boolean","Case_017_add_one_property_array","Case_018_remove_one_property_array","Case_019_add_two_properties_array","Case_020_remove_two_properties_array","Case_021_add_one_property_object","Case_022_remove_one_property_object","Case_023_add_two_properties_object","Case_024_remove_two_properties_object","Case_025_one_of_add_object_variant_with_prop_type_string","Case_026_one_of_remove_object_variant_with_prop_type_string","Case_027_one_of_add_object_variant_with_prop_type_number","Case_028_one_of_remove_object_variant_with_prop_type_number","Case_029_one_of_add_object_variant_with_prop_type_integer","Case_030_one_of_remove_object_variant_with_prop_type_integer","Case_031_one_of_add_object_variant_with_prop_type_boolean","Case_032_one_of_remove_object_variant_with_prop_type_boolean","Case_033_one_of_add_object_variant_with_prop_type_array","Case_034_one_of_remove_object_variant_with_prop_type_array","Case_035_one_of_add_object_variant_with_prop_type_object","Case_036_one_of_remove_object_variant_with_prop_type_object"];export{t as Case_001_add_one_property_string,n as Case_002_remove_one_property_string,r as Case_003_add_two_properties_string,o as Case_004_remove_two_properties_string,p as Case_005_add_one_property_number,a as Case_006_remove_one_property_number,i as Case_007_add_two_properties_number,s as Case_008_remove_two_properties_number,c as Case_009_add_one_property_integer,m as Case_010_remove_one_property_integer,_ as Case_011_add_two_properties_integer,d as Case_012_remove_two_properties_integer,l as Case_013_add_one_property_boolean,y as Case_014_remove_one_property_boolean,b as Case_015_add_two_properties_boolean,h as Case_016_remove_two_properties_boolean,g as Case_017_add_one_property_array,f as Case_018_remove_one_property_array,u as Case_019_add_two_properties_array,j as Case_020_remove_two_properties_array,v as Case_021_add_one_property_object,w as Case_022_remove_one_property_object,O as Case_023_add_two_properties_object,P as Case_024_remove_two_properties_object,S as Case_025_one_of_add_object_variant_with_prop_type_string,x as Case_026_one_of_remove_object_variant_with_prop_type_string,C as Case_027_one_of_add_object_variant_with_prop_type_number,I as Case_028_one_of_remove_object_variant_with_prop_type_number,A as Case_029_one_of_add_object_variant_with_prop_type_integer,N as Case_030_one_of_remove_object_variant_with_prop_type_integer,R as Case_031_one_of_add_object_variant_with_prop_type_boolean,L as Case_032_one_of_remove_object_variant_with_prop_type_boolean,q as Case_033_one_of_add_object_variant_with_prop_type_array,z as Case_034_one_of_remove_object_variant_with_prop_type_array,$ as Case_035_one_of_add_object_variant_with_prop_type_object,D as Case_036_one_of_remove_object_variant_with_prop_type_object,Ar as __namedExportsOrder,Ir as default};
