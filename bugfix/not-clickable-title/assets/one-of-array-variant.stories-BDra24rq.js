import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as ee,r as te}from"./sample-cases-DDoAHGgD.js";import{n as ne,t as re}from"./diffs-samples-cases-Bp0vvMWA.js";import{c as ie,l as ae,n as oe,o as se}from"./json-schema-diffs-utils-aaxW2OKD.js";var ce;function le(){return(le=e((()=>{ce=`type: object
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

`})))()}var ue;function de(){return(de=e((()=>{ue=`type: object
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

`})))()}var fe;function pe(){return(pe=e((()=>{fe=`type: object
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

`})))()}var me;function he(){return(he=e((()=>{me=`type: object
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

`})))()}var ge;function _e(){return(_e=e((()=>{ge=`type: object
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

`})))()}var ve;function ye(){return(ye=e((()=>{ve=`type: object
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

`})))()}var be;function xe(){return(xe=e((()=>{be=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`type: object
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

`})))()}var we;function Te(){return(Te=e((()=>{we=`type: object
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

`})))()}var Ee;function De(){return(De=e((()=>{Ee=`type: object
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

`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`type: object
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

`})))()}var Ae;function je(){return(je=e((()=>{Ae=`type: object
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

`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`type: object
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

`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`type: object
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

`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Re;function ze(){return(ze=e((()=>{Re=`type: object
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

`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`type: object
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

`})))()}var He;function Ue(){return(Ue=e((()=>{He=`type: object
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

`})))()}var We;function Ge(){return(Ge=e((()=>{We=`type: object
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

`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`type: object
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

`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`type: object
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

`})))()}var Xe;function t(){return(t=e((()=>{Xe=`type: object
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

`})))()}var n;function r(){return(r=e((()=>{n=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`type: object
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

`})))()}var $e;function et(){return(et=e((()=>{$e=`type: object
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

`})))()}var tt;function nt(){return(nt=e((()=>{tt=`type: object
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

`})))()}var rt;function it(){return(it=e((()=>{rt=`type: object
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

`})))()}var at;function ot(){return(ot=e((()=>{at=`type: object
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

`})))()}var st;function ct(){return(ct=e((()=>{st=`type: object
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

`})))()}var lt;function ut(){return(ut=e((()=>{lt=`type: object
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

`})))()}var dt;function ft(){return(ft=e((()=>{dt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var pt;function mt(){return(mt=e((()=>{pt=`type: object
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

`})))()}var ht;function gt(){return(gt=e((()=>{ht=`type: object
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

`})))()}var _t;function vt(){return(vt=e((()=>{_t=`type: object
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

`})))()}var yt;function bt(){return(bt=e((()=>{yt=`type: object
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

`})))()}var xt;function St(){return(St=e((()=>{xt=`type: object
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

`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`type: object
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

`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`type: object
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

`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var kt;function At(){return(At=e((()=>{kt=`type: object
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

`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`type: object
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

`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`type: object
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

`})))()}var Ft;function It(){return(It=e((()=>{Ft=`type: object
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

`})))()}var Lt;function Rt(){return(Rt=e((()=>{Lt=`type: object
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

`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`type: object
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

`})))()}var Vt;function Ht(){return(Ht=e((()=>{Vt=`type: object
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

`})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=`type: object
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

`})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`type: object
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

`})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`type: object
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

`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`type: object
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

`})))()}var $t;function en(){return(en=e((()=>{$t=`type: object
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

`})))()}var tn;function nn(){return(nn=e((()=>{tn=`type: object
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

`})))()}var rn;function an(){return(an=e((()=>{rn=`type: object
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

`})))()}var on;function sn(){return(sn=e((()=>{on=`type: object
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

`})))()}var cn;function ln(){return(ln=e((()=>{cn=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var un;function dn(){return(dn=e((()=>{un=`type: object
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

`})))()}var fn;function pn(){return(pn=e((()=>{fn=`type: object
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

`})))()}var mn;function hn(){return(hn=e((()=>{mn=`type: object
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

`})))()}var gn;function _n(){return(_n=e((()=>{gn=`type: object
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

`})))()}var vn;function yn(){return(yn=e((()=>{vn=`type: object
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

`})))()}var bn;function xn(){return(xn=e((()=>{bn=`type: object
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

`})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=`type: object
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

`})))()}var wn;function i(){return(i=e((()=>{wn=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Tn;function En(){return(En=e((()=>{Tn=`type: object
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

`})))()}var Dn;function On(){return(On=e((()=>{Dn=`type: object
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

`})))()}var kn;function An(){return(An=e((()=>{kn=`type: object
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

`})))()}var jn;function Mn(){return(Mn=e((()=>{jn=`type: object
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

`})))()}var Nn;function Pn(){return(Pn=e((()=>{Nn=`type: object
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

`})))()}var Fn;function In(){return(In=e((()=>{Fn=`type: object
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

`})))()}var Ln;function Rn(){return(Rn=e((()=>{Ln=`type: object
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

`})))()}var zn;function Bn(){return(Bn=e((()=>{zn=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Vn;function Hn(){return(Hn=e((()=>{Vn=`type: object
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

`})))()}var Un;function Wn(){return(Wn=e((()=>{Un=`type: object
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

`})))()}var Gn;function Kn(){return(Kn=e((()=>{Gn=`type: object
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

`})))()}var qn;function Jn(){return(Jn=e((()=>{qn=`type: object
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

`})))()}var Yn;function Xn(){return(Xn=e((()=>{Yn=`type: object
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

`})))()}var Zn;function Qn(){return(Qn=e((()=>{Zn=`type: object
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

`})))()}var $n;function er(){return(er=e((()=>{$n=`type: object
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

`})))()}var tr;function nr(){return(nr=e((()=>{tr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var rr;function ir(){return(ir=e((()=>{rr=`type: object
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

`})))()}var ar;function or(){return(or=e((()=>{ar=`type: object
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

`})))()}var sr;function cr(){return(cr=e((()=>{sr=`type: object
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

`})))()}var lr;function ur(){return(ur=e((()=>{lr=`type: object
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

`})))()}var dr;function fr(){return(fr=e((()=>{dr=`type: object
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

`})))()}var pr;function mr(){return(mr=e((()=>{pr=`type: object
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

`})))()}var hr;function gr(){return(gr=e((()=>{hr=`type: object
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

`})))()}var _r;function vr(){return(vr=e((()=>{_r=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var yr;function br(){return(br=e((()=>{yr=`type: object
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

`})))()}var xr;function Sr(){return(Sr=e((()=>{xr=`type: object
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

`})))()}var Cr;function wr(){return(wr=e((()=>{Cr=`type: object
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

`})))()}var Tr;function Er(){return(Er=e((()=>{Tr=`type: object
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

`})))()}var Dr;function Or(){return(Or=e((()=>{Dr=`type: object
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

`})))()}var kr;function Ar(){return(Ar=e((()=>{kr=`type: object
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

`})))()}var jr;function Mr(){return(Mr=e((()=>{jr=`type: object
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

`})))()}var Nr;function Pr(){return(Pr=e((()=>{Nr=`type: object
description: Root schema with oneOf array variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Fr,Ir,Lr,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Rr;function zr(){return(zr=e((()=>{le(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),t(),r(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),Pt(),It(),Rt(),Bt(),Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),i(),En(),On(),An(),Mn(),Pn(),In(),Rn(),Bn(),Hn(),Wn(),Kn(),Jn(),Xn(),Qn(),er(),nr(),ir(),or(),cr(),ur(),fr(),mr(),gr(),vr(),br(),Sr(),wr(),Er(),Or(),Ar(),Mr(),Pr(),ne(),ie(),ee(),Fr=re(Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/001-array-variant-add-one-indexed-item-string/before.yaml":ce,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/002-array-variant-remove-one-indexed-item-string/before.yaml":ue,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/003-array-variant-add-two-indexed-items-string/before.yaml":fe,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/004-array-variant-remove-two-indexed-items-string/before.yaml":me,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/005-array-variant-added-string/before.yaml":ge,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/006-array-variant-removed-string/before.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/007-one-of-prop-added-string/before.yaml":be,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/008-one-of-prop-removed-string/before.yaml":Se,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/009-array-variant-add-one-indexed-item-number/before.yaml":we,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/010-array-variant-remove-one-indexed-item-number/before.yaml":Ee,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/011-array-variant-add-two-indexed-items-number/before.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/012-array-variant-remove-two-indexed-items-number/before.yaml":Ae,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/013-array-variant-added-number/before.yaml":Me,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/014-array-variant-removed-number/before.yaml":Pe,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/015-one-of-prop-added-number/before.yaml":Ie,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/016-one-of-prop-removed-number/before.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/017-array-variant-add-one-indexed-item-integer/before.yaml":Be,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/018-array-variant-remove-one-indexed-item-integer/before.yaml":He,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/019-array-variant-add-two-indexed-items-integer/before.yaml":We,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/020-array-variant-remove-two-indexed-items-integer/before.yaml":Ke,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/021-array-variant-added-integer/before.yaml":Je,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/022-array-variant-removed-integer/before.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/023-one-of-prop-added-integer/before.yaml":n,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/024-one-of-prop-removed-integer/before.yaml":Ze,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/025-array-variant-add-one-indexed-item-boolean/before.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/026-array-variant-remove-one-indexed-item-boolean/before.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/027-array-variant-add-two-indexed-items-boolean/before.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/028-array-variant-remove-two-indexed-items-boolean/before.yaml":at,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/029-array-variant-added-boolean/before.yaml":st,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/030-array-variant-removed-boolean/before.yaml":lt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/031-one-of-prop-added-boolean/before.yaml":dt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/032-one-of-prop-removed-boolean/before.yaml":pt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/033-array-variant-add-one-indexed-item-array/before.yaml":ht,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/034-array-variant-remove-one-indexed-item-array/before.yaml":_t,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/035-array-variant-add-two-indexed-items-array/before.yaml":yt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/036-array-variant-remove-two-indexed-items-array/before.yaml":xt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/037-array-variant-added-array/before.yaml":Ct,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/038-array-variant-removed-array/before.yaml":Tt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/039-one-of-prop-added-array/before.yaml":Dt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/040-one-of-prop-removed-array/before.yaml":kt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/041-array-variant-add-one-indexed-item-object/before.yaml":jt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/042-array-variant-remove-one-indexed-item-object/before.yaml":Nt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/043-array-variant-add-two-indexed-items-object/before.yaml":Ft,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/044-array-variant-remove-two-indexed-items-object/before.yaml":Lt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/045-array-variant-added-object/before.yaml":zt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/046-array-variant-removed-object/before.yaml":Vt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/047-one-of-prop-added-object/before.yaml":Ut,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/048-one-of-prop-removed-object/before.yaml":Gt}),Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/001-array-variant-add-one-indexed-item-string/after.yaml":qt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/002-array-variant-remove-one-indexed-item-string/after.yaml":Yt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/003-array-variant-add-two-indexed-items-string/after.yaml":Zt,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/004-array-variant-remove-two-indexed-items-string/after.yaml":$t,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/005-array-variant-added-string/after.yaml":tn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/006-array-variant-removed-string/after.yaml":rn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/007-one-of-prop-added-string/after.yaml":on,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/008-one-of-prop-removed-string/after.yaml":cn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/009-array-variant-add-one-indexed-item-number/after.yaml":un,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/010-array-variant-remove-one-indexed-item-number/after.yaml":fn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/011-array-variant-add-two-indexed-items-number/after.yaml":mn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/012-array-variant-remove-two-indexed-items-number/after.yaml":gn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/013-array-variant-added-number/after.yaml":vn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/014-array-variant-removed-number/after.yaml":bn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/015-one-of-prop-added-number/after.yaml":Sn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/016-one-of-prop-removed-number/after.yaml":wn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/017-array-variant-add-one-indexed-item-integer/after.yaml":Tn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/018-array-variant-remove-one-indexed-item-integer/after.yaml":Dn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/019-array-variant-add-two-indexed-items-integer/after.yaml":kn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/020-array-variant-remove-two-indexed-items-integer/after.yaml":jn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/021-array-variant-added-integer/after.yaml":Nn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/022-array-variant-removed-integer/after.yaml":Fn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/023-one-of-prop-added-integer/after.yaml":Ln,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/024-one-of-prop-removed-integer/after.yaml":zn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/025-array-variant-add-one-indexed-item-boolean/after.yaml":Vn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/026-array-variant-remove-one-indexed-item-boolean/after.yaml":Un,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/027-array-variant-add-two-indexed-items-boolean/after.yaml":Gn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/028-array-variant-remove-two-indexed-items-boolean/after.yaml":qn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/029-array-variant-added-boolean/after.yaml":Yn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/030-array-variant-removed-boolean/after.yaml":Zn,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/031-one-of-prop-added-boolean/after.yaml":$n,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/032-one-of-prop-removed-boolean/after.yaml":tr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/033-array-variant-add-one-indexed-item-array/after.yaml":rr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/034-array-variant-remove-one-indexed-item-array/after.yaml":ar,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/035-array-variant-add-two-indexed-items-array/after.yaml":sr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/036-array-variant-remove-two-indexed-items-array/after.yaml":lr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/037-array-variant-added-array/after.yaml":dr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/038-array-variant-removed-array/after.yaml":pr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/039-one-of-prop-added-array/after.yaml":hr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/040-one-of-prop-removed-array/after.yaml":_r,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/041-array-variant-add-one-indexed-item-object/after.yaml":yr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/042-array-variant-remove-one-indexed-item-object/after.yaml":xr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/043-array-variant-add-two-indexed-items-object/after.yaml":Cr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/044-array-variant-remove-two-indexed-items-object/after.yaml":Tr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/045-array-variant-added-object/after.yaml":Dr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/046-array-variant-removed-object/after.yaml":kr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/047-one-of-prop-added-object/after.yaml":jr,"../../../../samples/json-schema-diffs/type-changes/one-of-array-variant/048-one-of-prop-removed-object/after.yaml":Nr})),Ir=te(Fr),Lr={title:`JSON Schema Diffs Suite/Combiners/OneOf Array Variant`,component:oe,argTypes:ae},a=se(oe,Ir),o={...a(`001-array-variant-add-one-indexed-item-string`),name:`Case 001 - [Array Variant] - Added 1 indexed item with type = string`},s={...a(`002-array-variant-remove-one-indexed-item-string`),name:`Case 002 - [Array Variant] - Removed 1 indexed item with type = string`},c={...a(`003-array-variant-add-two-indexed-items-string`),name:`Case 003 - [Array Variant] - Added 2 indexed items with type = string`},l={...a(`004-array-variant-remove-two-indexed-items-string`),name:`Case 004 - [Array Variant] - Removed 2 indexed items with type = string`},u={...a(`005-array-variant-added-string`),name:`Case 005 - [Array Variant] - Added, items = string`},d={...a(`006-array-variant-removed-string`),name:`Case 006 - [Array Variant] - Removed, items = string`},f={...a(`007-one-of-prop-added-string`),name:`Case 007 - [Whole OneOf] - Added with Array Variant, items = string`},p={...a(`008-one-of-prop-removed-string`),name:`Case 008 - [Whole OneOf] - Removed with Array Variant, items = string`},m={...a(`009-array-variant-add-one-indexed-item-number`),name:`Case 009 - [Array Variant] - Added 1 indexed item with type = number`},h={...a(`010-array-variant-remove-one-indexed-item-number`),name:`Case 010 - [Array Variant] - Removed 1 indexed item with type = number`},g={...a(`011-array-variant-add-two-indexed-items-number`),name:`Case 011 - [Array Variant] - Added 2 indexed items with type = number`},_={...a(`012-array-variant-remove-two-indexed-items-number`),name:`Case 012 - [Array Variant] - Removed 2 indexed items with type = number`},v={...a(`013-array-variant-added-number`),name:`Case 013 - [Array Variant] - Added, items = number`},y={...a(`014-array-variant-removed-number`),name:`Case 014 - [Array Variant] - Removed, items = number`},b={...a(`015-one-of-prop-added-number`),name:`Case 015 - [Whole OneOf] - Added with Array Variant, items = number`},x={...a(`016-one-of-prop-removed-number`),name:`Case 016 - [Whole OneOf] - Removed with Array Variant, items = number`},S={...a(`017-array-variant-add-one-indexed-item-integer`),name:`Case 017 - [Array Variant] - Added 1 indexed item with type = integer`},C={...a(`018-array-variant-remove-one-indexed-item-integer`),name:`Case 018 - [Array Variant] - Removed 1 indexed item with type = integer`},w={...a(`019-array-variant-add-two-indexed-items-integer`),name:`Case 019 - [Array Variant] - Added 2 indexed items with type = integer`},T={...a(`020-array-variant-remove-two-indexed-items-integer`),name:`Case 020 - [Array Variant] - Removed 2 indexed items with type = integer`},E={...a(`021-array-variant-added-integer`),name:`Case 021 - [Array Variant] - Added, items = integer`},D={...a(`022-array-variant-removed-integer`),name:`Case 022 - [Array Variant] - Removed, items = integer`},O={...a(`023-one-of-prop-added-integer`),name:`Case 023 - [Whole OneOf] - Added with Array Variant, items = integer`},k={...a(`024-one-of-prop-removed-integer`),name:`Case 024 - [Whole OneOf] - Removed with Array Variant, items = integer`},A={...a(`025-array-variant-add-one-indexed-item-boolean`),name:`Case 025 - [Array Variant] - Added 1 indexed item with type = boolean`},j={...a(`026-array-variant-remove-one-indexed-item-boolean`),name:`Case 026 - [Array Variant] - Removed 1 indexed item with type = boolean`},M={...a(`027-array-variant-add-two-indexed-items-boolean`),name:`Case 027 - [Array Variant] - Added 2 indexed items with type = boolean`},N={...a(`028-array-variant-remove-two-indexed-items-boolean`),name:`Case 028 - [Array Variant] - Removed 2 indexed items with type = boolean`},P={...a(`029-array-variant-added-boolean`),name:`Case 029 - [Array Variant] - Added, items = boolean`},F={...a(`030-array-variant-removed-boolean`),name:`Case 030 - [Array Variant] - Removed, items = boolean`},I={...a(`031-one-of-prop-added-boolean`),name:`Case 031 - [Whole OneOf] - Added with Array Variant, items = boolean`},L={...a(`032-one-of-prop-removed-boolean`),name:`Case 032 - [Whole OneOf] - Removed with Array Variant, items = boolean`},R={...a(`033-array-variant-add-one-indexed-item-array`),name:`Case 033 - [Array Variant] - Added 1 indexed item with type = array`},z={...a(`034-array-variant-remove-one-indexed-item-array`),name:`Case 034 - [Array Variant] - Removed 1 indexed item with type = array`},B={...a(`035-array-variant-add-two-indexed-items-array`),name:`Case 035 - [Array Variant] - Added 2 indexed items with type = array`},V={...a(`036-array-variant-remove-two-indexed-items-array`),name:`Case 036 - [Array Variant] - Removed 2 indexed items with type = array`},H={...a(`037-array-variant-added-array`),name:`Case 037 - [Array Variant] - Added, items = array`},U={...a(`038-array-variant-removed-array`),name:`Case 038 - [Array Variant] - Removed, items = array`},W={...a(`039-one-of-prop-added-array`),name:`Case 039 - [Whole OneOf] - Added with Array Variant, items = array`},G={...a(`040-one-of-prop-removed-array`),name:`Case 040 - [Whole OneOf] - Removed with Array Variant, items = array`},K={...a(`041-array-variant-add-one-indexed-item-object`),name:`Case 041 - [Array Variant] - Added 1 indexed item with type = object`},q={...a(`042-array-variant-remove-one-indexed-item-object`),name:`Case 042 - [Array Variant] - Removed 1 indexed item with type = object`},J={...a(`043-array-variant-add-two-indexed-items-object`),name:`Case 043 - [Array Variant] - Added 2 indexed items with type = object`},Y={...a(`044-array-variant-remove-two-indexed-items-object`),name:`Case 044 - [Array Variant] - Removed 2 indexed items with type = object`},X={...a(`045-array-variant-added-object`),name:`Case 045 - [Array Variant] - Added, items = object`},Z={...a(`046-array-variant-removed-object`),name:`Case 046 - [Array Variant] - Removed, items = object`},Q={...a(`047-one-of-prop-added-object`),name:`Case 047 - [Whole OneOf] - Added with Array Variant, items = object`},$={...a(`048-one-of-prop-removed-object`),name:`Case 048 - [Whole OneOf] - Removed with Array Variant, items = object`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("001-array-variant-add-one-indexed-item-string"),
  name: "Case 001 - [Array Variant] - Added 1 indexed item with type = string"
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("002-array-variant-remove-one-indexed-item-string"),
  name: "Case 002 - [Array Variant] - Removed 1 indexed item with type = string"
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("003-array-variant-add-two-indexed-items-string"),
  name: "Case 003 - [Array Variant] - Added 2 indexed items with type = string"
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("004-array-variant-remove-two-indexed-items-string"),
  name: "Case 004 - [Array Variant] - Removed 2 indexed items with type = string"
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("005-array-variant-added-string"),
  name: "Case 005 - [Array Variant] - Added, items = string"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("006-array-variant-removed-string"),
  name: "Case 006 - [Array Variant] - Removed, items = string"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("007-one-of-prop-added-string"),
  name: "Case 007 - [Whole OneOf] - Added with Array Variant, items = string"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("008-one-of-prop-removed-string"),
  name: "Case 008 - [Whole OneOf] - Removed with Array Variant, items = string"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("009-array-variant-add-one-indexed-item-number"),
  name: "Case 009 - [Array Variant] - Added 1 indexed item with type = number"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("010-array-variant-remove-one-indexed-item-number"),
  name: "Case 010 - [Array Variant] - Removed 1 indexed item with type = number"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("011-array-variant-add-two-indexed-items-number"),
  name: "Case 011 - [Array Variant] - Added 2 indexed items with type = number"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("012-array-variant-remove-two-indexed-items-number"),
  name: "Case 012 - [Array Variant] - Removed 2 indexed items with type = number"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("013-array-variant-added-number"),
  name: "Case 013 - [Array Variant] - Added, items = number"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("014-array-variant-removed-number"),
  name: "Case 014 - [Array Variant] - Removed, items = number"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("015-one-of-prop-added-number"),
  name: "Case 015 - [Whole OneOf] - Added with Array Variant, items = number"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("016-one-of-prop-removed-number"),
  name: "Case 016 - [Whole OneOf] - Removed with Array Variant, items = number"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("017-array-variant-add-one-indexed-item-integer"),
  name: "Case 017 - [Array Variant] - Added 1 indexed item with type = integer"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("018-array-variant-remove-one-indexed-item-integer"),
  name: "Case 018 - [Array Variant] - Removed 1 indexed item with type = integer"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("019-array-variant-add-two-indexed-items-integer"),
  name: "Case 019 - [Array Variant] - Added 2 indexed items with type = integer"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("020-array-variant-remove-two-indexed-items-integer"),
  name: "Case 020 - [Array Variant] - Removed 2 indexed items with type = integer"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("021-array-variant-added-integer"),
  name: "Case 021 - [Array Variant] - Added, items = integer"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("022-array-variant-removed-integer"),
  name: "Case 022 - [Array Variant] - Removed, items = integer"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("023-one-of-prop-added-integer"),
  name: "Case 023 - [Whole OneOf] - Added with Array Variant, items = integer"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("024-one-of-prop-removed-integer"),
  name: "Case 024 - [Whole OneOf] - Removed with Array Variant, items = integer"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("025-array-variant-add-one-indexed-item-boolean"),
  name: "Case 025 - [Array Variant] - Added 1 indexed item with type = boolean"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("026-array-variant-remove-one-indexed-item-boolean"),
  name: "Case 026 - [Array Variant] - Removed 1 indexed item with type = boolean"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("027-array-variant-add-two-indexed-items-boolean"),
  name: "Case 027 - [Array Variant] - Added 2 indexed items with type = boolean"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("028-array-variant-remove-two-indexed-items-boolean"),
  name: "Case 028 - [Array Variant] - Removed 2 indexed items with type = boolean"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("029-array-variant-added-boolean"),
  name: "Case 029 - [Array Variant] - Added, items = boolean"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("030-array-variant-removed-boolean"),
  name: "Case 030 - [Array Variant] - Removed, items = boolean"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("031-one-of-prop-added-boolean"),
  name: "Case 031 - [Whole OneOf] - Added with Array Variant, items = boolean"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("032-one-of-prop-removed-boolean"),
  name: "Case 032 - [Whole OneOf] - Removed with Array Variant, items = boolean"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("033-array-variant-add-one-indexed-item-array"),
  name: "Case 033 - [Array Variant] - Added 1 indexed item with type = array"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("034-array-variant-remove-one-indexed-item-array"),
  name: "Case 034 - [Array Variant] - Removed 1 indexed item with type = array"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("035-array-variant-add-two-indexed-items-array"),
  name: "Case 035 - [Array Variant] - Added 2 indexed items with type = array"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("036-array-variant-remove-two-indexed-items-array"),
  name: "Case 036 - [Array Variant] - Removed 2 indexed items with type = array"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("037-array-variant-added-array"),
  name: "Case 037 - [Array Variant] - Added, items = array"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("038-array-variant-removed-array"),
  name: "Case 038 - [Array Variant] - Removed, items = array"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("039-one-of-prop-added-array"),
  name: "Case 039 - [Whole OneOf] - Added with Array Variant, items = array"
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("040-one-of-prop-removed-array"),
  name: "Case 040 - [Whole OneOf] - Removed with Array Variant, items = array"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("041-array-variant-add-one-indexed-item-object"),
  name: "Case 041 - [Array Variant] - Added 1 indexed item with type = object"
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("042-array-variant-remove-one-indexed-item-object"),
  name: "Case 042 - [Array Variant] - Removed 1 indexed item with type = object"
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("043-array-variant-add-two-indexed-items-object"),
  name: "Case 043 - [Array Variant] - Added 2 indexed items with type = object"
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("044-array-variant-remove-two-indexed-items-object"),
  name: "Case 044 - [Array Variant] - Removed 2 indexed items with type = object"
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("045-array-variant-added-object"),
  name: "Case 045 - [Array Variant] - Added, items = object"
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("046-array-variant-removed-object"),
  name: "Case 046 - [Array Variant] - Removed, items = object"
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("047-one-of-prop-added-object"),
  name: "Case 047 - [Whole OneOf] - Added with Array Variant, items = object"
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("048-one-of-prop-removed-object"),
  name: "Case 048 - [Whole OneOf] - Removed with Array Variant, items = object"
}`,...$.parameters?.docs?.source}}},Rr=`Case_001_array_variant_add_one_indexed_item_string.Case_002_array_variant_remove_one_indexed_item_string.Case_003_array_variant_add_two_indexed_items_string.Case_004_array_variant_remove_two_indexed_items_string.Case_005_array_variant_added_string.Case_006_array_variant_removed_string.Case_007_one_of_prop_added_string.Case_008_one_of_prop_removed_string.Case_009_array_variant_add_one_indexed_item_number.Case_010_array_variant_remove_one_indexed_item_number.Case_011_array_variant_add_two_indexed_items_number.Case_012_array_variant_remove_two_indexed_items_number.Case_013_array_variant_added_number.Case_014_array_variant_removed_number.Case_015_one_of_prop_added_number.Case_016_one_of_prop_removed_number.Case_017_array_variant_add_one_indexed_item_integer.Case_018_array_variant_remove_one_indexed_item_integer.Case_019_array_variant_add_two_indexed_items_integer.Case_020_array_variant_remove_two_indexed_items_integer.Case_021_array_variant_added_integer.Case_022_array_variant_removed_integer.Case_023_one_of_prop_added_integer.Case_024_one_of_prop_removed_integer.Case_025_array_variant_add_one_indexed_item_boolean.Case_026_array_variant_remove_one_indexed_item_boolean.Case_027_array_variant_add_two_indexed_items_boolean.Case_028_array_variant_remove_two_indexed_items_boolean.Case_029_array_variant_added_boolean.Case_030_array_variant_removed_boolean.Case_031_one_of_prop_added_boolean.Case_032_one_of_prop_removed_boolean.Case_033_array_variant_add_one_indexed_item_array.Case_034_array_variant_remove_one_indexed_item_array.Case_035_array_variant_add_two_indexed_items_array.Case_036_array_variant_remove_two_indexed_items_array.Case_037_array_variant_added_array.Case_038_array_variant_removed_array.Case_039_one_of_prop_added_array.Case_040_one_of_prop_removed_array.Case_041_array_variant_add_one_indexed_item_object.Case_042_array_variant_remove_one_indexed_item_object.Case_043_array_variant_add_two_indexed_items_object.Case_044_array_variant_remove_two_indexed_items_object.Case_045_array_variant_added_object.Case_046_array_variant_removed_object.Case_047_one_of_prop_added_object.Case_048_one_of_prop_removed_object`.split(`.`)})))()}zr();export{o as Case_001_array_variant_add_one_indexed_item_string,s as Case_002_array_variant_remove_one_indexed_item_string,c as Case_003_array_variant_add_two_indexed_items_string,l as Case_004_array_variant_remove_two_indexed_items_string,u as Case_005_array_variant_added_string,d as Case_006_array_variant_removed_string,f as Case_007_one_of_prop_added_string,p as Case_008_one_of_prop_removed_string,m as Case_009_array_variant_add_one_indexed_item_number,h as Case_010_array_variant_remove_one_indexed_item_number,g as Case_011_array_variant_add_two_indexed_items_number,_ as Case_012_array_variant_remove_two_indexed_items_number,v as Case_013_array_variant_added_number,y as Case_014_array_variant_removed_number,b as Case_015_one_of_prop_added_number,x as Case_016_one_of_prop_removed_number,S as Case_017_array_variant_add_one_indexed_item_integer,C as Case_018_array_variant_remove_one_indexed_item_integer,w as Case_019_array_variant_add_two_indexed_items_integer,T as Case_020_array_variant_remove_two_indexed_items_integer,E as Case_021_array_variant_added_integer,D as Case_022_array_variant_removed_integer,O as Case_023_one_of_prop_added_integer,k as Case_024_one_of_prop_removed_integer,A as Case_025_array_variant_add_one_indexed_item_boolean,j as Case_026_array_variant_remove_one_indexed_item_boolean,M as Case_027_array_variant_add_two_indexed_items_boolean,N as Case_028_array_variant_remove_two_indexed_items_boolean,P as Case_029_array_variant_added_boolean,F as Case_030_array_variant_removed_boolean,I as Case_031_one_of_prop_added_boolean,L as Case_032_one_of_prop_removed_boolean,R as Case_033_array_variant_add_one_indexed_item_array,z as Case_034_array_variant_remove_one_indexed_item_array,B as Case_035_array_variant_add_two_indexed_items_array,V as Case_036_array_variant_remove_two_indexed_items_array,H as Case_037_array_variant_added_array,U as Case_038_array_variant_removed_array,W as Case_039_one_of_prop_added_array,G as Case_040_one_of_prop_removed_array,K as Case_041_array_variant_add_one_indexed_item_object,q as Case_042_array_variant_remove_one_indexed_item_object,J as Case_043_array_variant_add_two_indexed_items_object,Y as Case_044_array_variant_remove_two_indexed_items_object,X as Case_045_array_variant_added_object,Z as Case_046_array_variant_removed_object,Q as Case_047_one_of_prop_added_object,$ as Case_048_one_of_prop_removed_object,Rr as __namedExportsOrder,Lr as default};