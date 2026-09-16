const n=`type: object
description: Object with no declared properties
minProperties: 0
maxProperties: 10

`,e=`type: object
description: Object with no declared properties
minProperties: 0
maxProperties: 10
additionalProperties: false

`,t=`type: object
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

`,i=`type: object
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

`,r=`type: object
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

`,p=`type: object
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

`,a=`type: object
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

`,o=`type: object
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

`,s=`type: object
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

`,m=`type: object
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

`,c=`type: object
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

`,l=`type: object
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

`,d=`type: object
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

`,y=`type: object
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

`,b=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,h=`type: object
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

`,g=`type: object
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

`,u=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,_=`type: object
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

`,f=`type: object
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

`,P=`type: object
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

`,j=`type: object
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

`,O=`type: object
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

`,v=`type: object
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

`,w=`type: object
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

`,x=`type: object
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

`,S=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,N=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,I=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,A=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,R=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,L=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,q=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,z=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,$=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,k=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,B=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,C=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,D=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,E=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,F=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,G=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,H=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,J=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,K=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,M=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Q=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,T=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,U=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,V=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,W=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,X=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Y=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema

`,Z=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,nn=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,en=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,tn=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,rn=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,pn=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,an=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,on=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,sn=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,mn=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,cn=`type: object
description: Object with no declared properties
minProperties: 0
maxProperties: 10
additionalProperties: false

`,ln=`type: object
description: Object with no declared properties
minProperties: 0
maxProperties: 10

`,dn=`type: object
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

`,yn=`type: object
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

`,hn=`type: object
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

`,gn=`type: object
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

`,un=`type: object
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

`,_n=`type: object
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

`,fn=`type: object
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

`,Pn=`type: object
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

`,jn=`type: object
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

`,On=`type: object
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

`,vn=`type: object
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

`,wn=`type: object
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

`,xn=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Sn=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10
additionalProperties: false

`,Nn=`type: object
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

`,In=`type: object
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

`,An=`type: object
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

`,Rn=`type: object
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

`,Ln=`type: object
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

`,qn=`type: object
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

`,zn=`type: object
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

`,$n=`type: object
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

`,kn=`type: object
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

`,Bn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Cn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Dn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,En=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Fn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Gn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Hn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Jn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Kn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Mn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Qn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Tn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,Un=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
            type: boolean
            description: Sample boolean schema
            default: false
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

`,ne=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,ee=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,te=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,ie=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,re=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,pe=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,ae=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,oe=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`,se=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`,me=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema

`,ce=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta
    - gamma

`,le=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha

`,de=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - gamma

`,ye=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - gamma
    - delta

`,be=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - gamma

`,he=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - beta
    - gamma

`,ge=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - gamma
    - delta

`,ue=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - beta
    - alpha

`,_e=`type: object
description: Object with additionalProperties schema and propertyNames restriction
additionalProperties:
  type: string
  description: Simple additional property schema
propertyNames:
  enum:
    - alpha
    - beta

`;export{Z as $,N as A,I as B,A as C,R as D,L as E,q as F,z as G,$ as H,k as I,B as J,C as K,D as L,E as M,F as N,G as O,H as P,J as Q,K as R,M as S,Q as T,T as U,U as V,V as W,W as X,X as Y,Y as Z,n as _,e as a,ce as a$,nn as a0,en as a1,tn as a2,rn as a3,pn as a4,an as a5,on as a6,sn as a7,mn as a8,cn as a9,Cn as aA,Dn as aB,En as aC,Fn as aD,Gn as aE,Hn as aF,Jn as aG,Kn as aH,Mn as aI,Qn as aJ,Tn as aK,Un as aL,Vn as aM,Wn as aN,Xn as aO,Yn as aP,Zn as aQ,ne as aR,ee as aS,te as aT,ie as aU,re as aV,pe as aW,ae as aX,oe as aY,se as aZ,me as a_,ln as aa,dn as ab,yn as ac,bn as ad,hn as ae,gn as af,un as ag,_n as ah,fn as ai,Pn as aj,jn as ak,On as al,vn as am,wn as an,xn as ao,Sn as ap,Nn as aq,In as ar,An as as,Rn as at,Ln as au,qn as av,zn as aw,$n as ax,kn as ay,Bn as az,t as b,le as b0,de as b1,ye as b2,be as b3,he as b4,ge as b5,ue as b6,_e as b7,i as c,r as d,p as e,a as f,o as g,s as h,m as i,c as j,l as k,d as l,y as m,b as n,h as o,g as p,u as q,_ as r,f as s,P as t,j as u,O as v,v as w,w as x,x as y,S as z};
