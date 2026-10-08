import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as ee,r as te}from"./sample-cases-DDoAHGgD.js";import{n as ne,t as re}from"./diffs-samples-cases-Bp0vvMWA.js";import{c as ie,l as ae,n as oe,o as se}from"./json-schema-diffs-utils-f2qGJeOS.js";var ce;function le(){return(le=e((()=>{ce=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var ue;function de(){return(de=e((()=>{ue=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var fe;function pe(){return(pe=e((()=>{fe=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var me;function he(){return(he=e((()=>{me=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var ge;function _e(){return(_e=e((()=>{ge=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var be;function xe(){return(xe=e((()=>{be=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var we;function Te(){return(Te=e((()=>{we=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Ee;function De(){return(De=e((()=>{Ee=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Ae;function je(){return(je=e((()=>{Ae=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Re;function ze(){return(ze=e((()=>{Re=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var He;function Ue(){return(Ue=e((()=>{He=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var We;function Ge(){return(Ge=e((()=>{We=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var n;function r(){return(r=e((()=>{n=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var $e;function et(){return(et=e((()=>{$e=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var tt;function nt(){return(nt=e((()=>{tt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var rt;function it(){return(it=e((()=>{rt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var at;function ot(){return(ot=e((()=>{at=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var st;function ct(){return(ct=e((()=>{st=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var dt;function ft(){return(ft=e((()=>{dt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var pt;function mt(){return(mt=e((()=>{pt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var ht;function gt(){return(gt=e((()=>{ht=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var _t;function vt(){return(vt=e((()=>{_t=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var yt;function bt(){return(bt=e((()=>{yt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var xt;function St(){return(St=e((()=>{xt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var kt;function At(){return(At=e((()=>{kt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Ft;function It(){return(It=e((()=>{Ft=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Lt;function Rt(){return(Rt=e((()=>{Lt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var $t;function en(){return(en=e((()=>{$t=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var tn;function nn(){return(nn=e((()=>{tn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var rn;function an(){return(an=e((()=>{rn=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var cn;function ln(){return(ln=e((()=>{cn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var un;function dn(){return(dn=e((()=>{un=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var fn;function pn(){return(pn=e((()=>{fn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var mn;function hn(){return(hn=e((()=>{mn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var gn;function _n(){return(_n=e((()=>{gn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var vn;function yn(){return(yn=e((()=>{vn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var bn;function xn(){return(xn=e((()=>{bn=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var wn;function i(){return(i=e((()=>{wn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Tn;function En(){return(En=e((()=>{Tn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Dn;function On(){return(On=e((()=>{Dn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var kn;function An(){return(An=e((()=>{kn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var jn;function Mn(){return(Mn=e((()=>{jn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Nn;function Pn(){return(Pn=e((()=>{Nn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Fn;function In(){return(In=e((()=>{Fn=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var zn;function Bn(){return(Bn=e((()=>{zn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Vn;function Hn(){return(Hn=e((()=>{Vn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Un;function Wn(){return(Wn=e((()=>{Un=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Gn;function Kn(){return(Kn=e((()=>{Gn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var qn;function Jn(){return(Jn=e((()=>{qn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Yn;function Xn(){return(Xn=e((()=>{Yn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Zn;function Qn(){return(Qn=e((()=>{Zn=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var tr;function nr(){return(nr=e((()=>{tr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var rr;function ir(){return(ir=e((()=>{rr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var ar;function or(){return(or=e((()=>{ar=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var sr;function cr(){return(cr=e((()=>{sr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var lr;function ur(){return(ur=e((()=>{lr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var dr;function fr(){return(fr=e((()=>{dr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var pr;function mr(){return(mr=e((()=>{pr=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var _r;function vr(){return(vr=e((()=>{_r=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var yr;function br(){return(br=e((()=>{yr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var xr;function Sr(){return(Sr=e((()=>{xr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Cr;function wr(){return(wr=e((()=>{Cr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Tr;function Er(){return(Er=e((()=>{Tr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Dr;function Or(){return(Or=e((()=>{Dr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var kr;function Ar(){return(Ar=e((()=>{kr=`type: object
description: Root schema with oneOf object variant property
properties:
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
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Nr;function Pr(){return(Pr=e((()=>{Nr=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property

`})))()}var Fr,Ir,Lr,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Rr;function zr(){return(zr=e((()=>{le(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),t(),r(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),Pt(),It(),Rt(),Bt(),Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),i(),En(),On(),An(),Mn(),Pn(),In(),Rn(),Bn(),Hn(),Wn(),Kn(),Jn(),Xn(),Qn(),er(),nr(),ir(),or(),cr(),ur(),fr(),mr(),gr(),vr(),br(),Sr(),wr(),Er(),Or(),Ar(),Mr(),Pr(),ne(),ie(),ee(),Fr=re(Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/001-object-variant-add-one-property-string/before.yaml":ce,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/002-object-variant-remove-one-property-string/before.yaml":ue,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/003-object-variant-add-two-properties-string/before.yaml":fe,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/004-object-variant-remove-two-properties-string/before.yaml":me,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/005-object-variant-added-string/before.yaml":ge,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/006-object-variant-removed-string/before.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/007-one-of-prop-added-string/before.yaml":be,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/008-one-of-prop-removed-string/before.yaml":Se,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/009-object-variant-add-one-property-number/before.yaml":we,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/010-object-variant-remove-one-property-number/before.yaml":Ee,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/011-object-variant-add-two-properties-number/before.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/012-object-variant-remove-two-properties-number/before.yaml":Ae,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/013-object-variant-added-number/before.yaml":Me,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/014-object-variant-removed-number/before.yaml":Pe,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/015-one-of-prop-added-number/before.yaml":Ie,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/016-one-of-prop-removed-number/before.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/017-object-variant-add-one-property-integer/before.yaml":Be,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/018-object-variant-remove-one-property-integer/before.yaml":He,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/019-object-variant-add-two-properties-integer/before.yaml":We,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/020-object-variant-remove-two-properties-integer/before.yaml":Ke,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/021-object-variant-added-integer/before.yaml":Je,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/022-object-variant-removed-integer/before.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/023-one-of-prop-added-integer/before.yaml":n,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/024-one-of-prop-removed-integer/before.yaml":Ze,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/025-object-variant-add-one-property-boolean/before.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/026-object-variant-remove-one-property-boolean/before.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/027-object-variant-add-two-properties-boolean/before.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/028-object-variant-remove-two-properties-boolean/before.yaml":at,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/029-object-variant-added-boolean/before.yaml":st,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/030-object-variant-removed-boolean/before.yaml":lt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/031-one-of-prop-added-boolean/before.yaml":dt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/032-one-of-prop-removed-boolean/before.yaml":pt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/033-object-variant-add-one-property-array/before.yaml":ht,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/034-object-variant-remove-one-property-array/before.yaml":_t,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/035-object-variant-add-two-properties-array/before.yaml":yt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/036-object-variant-remove-two-properties-array/before.yaml":xt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/037-object-variant-added-array/before.yaml":Ct,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/038-object-variant-removed-array/before.yaml":Tt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/039-one-of-prop-added-array/before.yaml":Dt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/040-one-of-prop-removed-array/before.yaml":kt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/041-object-variant-add-one-property-object/before.yaml":jt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/042-object-variant-remove-one-property-object/before.yaml":Nt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/043-object-variant-add-two-properties-object/before.yaml":Ft,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/044-object-variant-remove-two-properties-object/before.yaml":Lt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/045-object-variant-added-object/before.yaml":zt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/046-object-variant-removed-object/before.yaml":Vt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/047-one-of-prop-added-object/before.yaml":Ut,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/048-one-of-prop-removed-object/before.yaml":Gt}),Object.assign({"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/001-object-variant-add-one-property-string/after.yaml":qt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/002-object-variant-remove-one-property-string/after.yaml":Yt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/003-object-variant-add-two-properties-string/after.yaml":Zt,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/004-object-variant-remove-two-properties-string/after.yaml":$t,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/005-object-variant-added-string/after.yaml":tn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/006-object-variant-removed-string/after.yaml":rn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/007-one-of-prop-added-string/after.yaml":on,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/008-one-of-prop-removed-string/after.yaml":cn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/009-object-variant-add-one-property-number/after.yaml":un,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/010-object-variant-remove-one-property-number/after.yaml":fn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/011-object-variant-add-two-properties-number/after.yaml":mn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/012-object-variant-remove-two-properties-number/after.yaml":gn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/013-object-variant-added-number/after.yaml":vn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/014-object-variant-removed-number/after.yaml":bn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/015-one-of-prop-added-number/after.yaml":Sn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/016-one-of-prop-removed-number/after.yaml":wn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/017-object-variant-add-one-property-integer/after.yaml":Tn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/018-object-variant-remove-one-property-integer/after.yaml":Dn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/019-object-variant-add-two-properties-integer/after.yaml":kn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/020-object-variant-remove-two-properties-integer/after.yaml":jn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/021-object-variant-added-integer/after.yaml":Nn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/022-object-variant-removed-integer/after.yaml":Fn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/023-one-of-prop-added-integer/after.yaml":Ln,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/024-one-of-prop-removed-integer/after.yaml":zn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/025-object-variant-add-one-property-boolean/after.yaml":Vn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/026-object-variant-remove-one-property-boolean/after.yaml":Un,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/027-object-variant-add-two-properties-boolean/after.yaml":Gn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/028-object-variant-remove-two-properties-boolean/after.yaml":qn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/029-object-variant-added-boolean/after.yaml":Yn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/030-object-variant-removed-boolean/after.yaml":Zn,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/031-one-of-prop-added-boolean/after.yaml":$n,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/032-one-of-prop-removed-boolean/after.yaml":tr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/033-object-variant-add-one-property-array/after.yaml":rr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/034-object-variant-remove-one-property-array/after.yaml":ar,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/035-object-variant-add-two-properties-array/after.yaml":sr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/036-object-variant-remove-two-properties-array/after.yaml":lr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/037-object-variant-added-array/after.yaml":dr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/038-object-variant-removed-array/after.yaml":pr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/039-one-of-prop-added-array/after.yaml":hr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/040-one-of-prop-removed-array/after.yaml":_r,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/041-object-variant-add-one-property-object/after.yaml":yr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/042-object-variant-remove-one-property-object/after.yaml":xr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/043-object-variant-add-two-properties-object/after.yaml":Cr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/044-object-variant-remove-two-properties-object/after.yaml":Tr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/045-object-variant-added-object/after.yaml":Dr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/046-object-variant-removed-object/after.yaml":kr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/047-one-of-prop-added-object/after.yaml":jr,"../../../../samples/json-schema-diffs/type-changes/one-of-object-variant/048-one-of-prop-removed-object/after.yaml":Nr})),Ir=te(Fr),Lr={title:`JSON Schema Diffs Suite/Combiners/OneOf Object Variant`,component:oe,argTypes:ae},a=se(oe,Ir),o={...a(`001-object-variant-add-one-property-string`),name:`Case 001 - [Object Variant] - Added 1 property with type = string`},s={...a(`002-object-variant-remove-one-property-string`),name:`Case 002 - [Object Variant] - Removed 1 property with type = string`},c={...a(`003-object-variant-add-two-properties-string`),name:`Case 003 - [Object Variant] - Added 2 properties with type = string`},l={...a(`004-object-variant-remove-two-properties-string`),name:`Case 004 - [Object Variant] - Removed 2 properties with type = string`},u={...a(`005-object-variant-added-string`),name:`Case 005 - [Object Variant] - Added, property = string`},d={...a(`006-object-variant-removed-string`),name:`Case 006 - [Object Variant] - Removed, property = string`},f={...a(`007-one-of-prop-added-string`),name:`Case 007 - [Whole OneOf] - Added with Object Variant, property = string`},p={...a(`008-one-of-prop-removed-string`),name:`Case 008 - [Whole OneOf] - Removed with Object Variant, property = string`},m={...a(`009-object-variant-add-one-property-number`),name:`Case 009 - [Object Variant] - Added 1 property with type = number`},h={...a(`010-object-variant-remove-one-property-number`),name:`Case 010 - [Object Variant] - Removed 1 property with type = number`},g={...a(`011-object-variant-add-two-properties-number`),name:`Case 011 - [Object Variant] - Added 2 properties with type = number`},_={...a(`012-object-variant-remove-two-properties-number`),name:`Case 012 - [Object Variant] - Removed 2 properties with type = number`},v={...a(`013-object-variant-added-number`),name:`Case 013 - [Object Variant] - Added, property = number`},y={...a(`014-object-variant-removed-number`),name:`Case 014 - [Object Variant] - Removed, property = number`},b={...a(`015-one-of-prop-added-number`),name:`Case 015 - [Whole OneOf] - Added with Object Variant, property = number`},x={...a(`016-one-of-prop-removed-number`),name:`Case 016 - [Whole OneOf] - Removed with Object Variant, property = number`},S={...a(`017-object-variant-add-one-property-integer`),name:`Case 017 - [Object Variant] - Added 1 property with type = integer`},C={...a(`018-object-variant-remove-one-property-integer`),name:`Case 018 - [Object Variant] - Removed 1 property with type = integer`},w={...a(`019-object-variant-add-two-properties-integer`),name:`Case 019 - [Object Variant] - Added 2 properties with type = integer`},T={...a(`020-object-variant-remove-two-properties-integer`),name:`Case 020 - [Object Variant] - Removed 2 properties with type = integer`},E={...a(`021-object-variant-added-integer`),name:`Case 021 - [Object Variant] - Added, property = integer`},D={...a(`022-object-variant-removed-integer`),name:`Case 022 - [Object Variant] - Removed, property = integer`},O={...a(`023-one-of-prop-added-integer`),name:`Case 023 - [Whole OneOf] - Added with Object Variant, property = integer`},k={...a(`024-one-of-prop-removed-integer`),name:`Case 024 - [Whole OneOf] - Removed with Object Variant, property = integer`},A={...a(`025-object-variant-add-one-property-boolean`),name:`Case 025 - [Object Variant] - Added 1 property with type = boolean`},j={...a(`026-object-variant-remove-one-property-boolean`),name:`Case 026 - [Object Variant] - Removed 1 property with type = boolean`},M={...a(`027-object-variant-add-two-properties-boolean`),name:`Case 027 - [Object Variant] - Added 2 properties with type = boolean`},N={...a(`028-object-variant-remove-two-properties-boolean`),name:`Case 028 - [Object Variant] - Removed 2 properties with type = boolean`},P={...a(`029-object-variant-added-boolean`),name:`Case 029 - [Object Variant] - Added, property = boolean`},F={...a(`030-object-variant-removed-boolean`),name:`Case 030 - [Object Variant] - Removed, property = boolean`},I={...a(`031-one-of-prop-added-boolean`),name:`Case 031 - [Whole OneOf] - Added with Object Variant, property = boolean`},L={...a(`032-one-of-prop-removed-boolean`),name:`Case 032 - [Whole OneOf] - Removed with Object Variant, property = boolean`},R={...a(`033-object-variant-add-one-property-array`),name:`Case 033 - [Object Variant] - Added 1 property with type = array`},z={...a(`034-object-variant-remove-one-property-array`),name:`Case 034 - [Object Variant] - Removed 1 property with type = array`},B={...a(`035-object-variant-add-two-properties-array`),name:`Case 035 - [Object Variant] - Added 2 properties with type = array`},V={...a(`036-object-variant-remove-two-properties-array`),name:`Case 036 - [Object Variant] - Removed 2 properties with type = array`},H={...a(`037-object-variant-added-array`),name:`Case 037 - [Object Variant] - Added, property = array`},U={...a(`038-object-variant-removed-array`),name:`Case 038 - [Object Variant] - Removed, property = array`},W={...a(`039-one-of-prop-added-array`),name:`Case 039 - [Whole OneOf] - Added with Object Variant, property = array`},G={...a(`040-one-of-prop-removed-array`),name:`Case 040 - [Whole OneOf] - Removed with Object Variant, property = array`},K={...a(`041-object-variant-add-one-property-object`),name:`Case 041 - [Object Variant] - Added 1 property with type = object`},q={...a(`042-object-variant-remove-one-property-object`),name:`Case 042 - [Object Variant] - Removed 1 property with type = object`},J={...a(`043-object-variant-add-two-properties-object`),name:`Case 043 - [Object Variant] - Added 2 properties with type = object`},Y={...a(`044-object-variant-remove-two-properties-object`),name:`Case 044 - [Object Variant] - Removed 2 properties with type = object`},X={...a(`045-object-variant-added-object`),name:`Case 045 - [Object Variant] - Added, property = object`},Z={...a(`046-object-variant-removed-object`),name:`Case 046 - [Object Variant] - Removed, property = object`},Q={...a(`047-one-of-prop-added-object`),name:`Case 047 - [Whole OneOf] - Added with Object Variant, property = object`},$={...a(`048-one-of-prop-removed-object`),name:`Case 048 - [Whole OneOf] - Removed with Object Variant, property = object`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("001-object-variant-add-one-property-string"),
  name: "Case 001 - [Object Variant] - Added 1 property with type = string"
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("002-object-variant-remove-one-property-string"),
  name: "Case 002 - [Object Variant] - Removed 1 property with type = string"
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("003-object-variant-add-two-properties-string"),
  name: "Case 003 - [Object Variant] - Added 2 properties with type = string"
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("004-object-variant-remove-two-properties-string"),
  name: "Case 004 - [Object Variant] - Removed 2 properties with type = string"
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("005-object-variant-added-string"),
  name: "Case 005 - [Object Variant] - Added, property = string"
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("006-object-variant-removed-string"),
  name: "Case 006 - [Object Variant] - Removed, property = string"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("007-one-of-prop-added-string"),
  name: "Case 007 - [Whole OneOf] - Added with Object Variant, property = string"
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("008-one-of-prop-removed-string"),
  name: "Case 008 - [Whole OneOf] - Removed with Object Variant, property = string"
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("009-object-variant-add-one-property-number"),
  name: "Case 009 - [Object Variant] - Added 1 property with type = number"
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("010-object-variant-remove-one-property-number"),
  name: "Case 010 - [Object Variant] - Removed 1 property with type = number"
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("011-object-variant-add-two-properties-number"),
  name: "Case 011 - [Object Variant] - Added 2 properties with type = number"
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("012-object-variant-remove-two-properties-number"),
  name: "Case 012 - [Object Variant] - Removed 2 properties with type = number"
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("013-object-variant-added-number"),
  name: "Case 013 - [Object Variant] - Added, property = number"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("014-object-variant-removed-number"),
  name: "Case 014 - [Object Variant] - Removed, property = number"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("015-one-of-prop-added-number"),
  name: "Case 015 - [Whole OneOf] - Added with Object Variant, property = number"
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("016-one-of-prop-removed-number"),
  name: "Case 016 - [Whole OneOf] - Removed with Object Variant, property = number"
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("017-object-variant-add-one-property-integer"),
  name: "Case 017 - [Object Variant] - Added 1 property with type = integer"
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("018-object-variant-remove-one-property-integer"),
  name: "Case 018 - [Object Variant] - Removed 1 property with type = integer"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("019-object-variant-add-two-properties-integer"),
  name: "Case 019 - [Object Variant] - Added 2 properties with type = integer"
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("020-object-variant-remove-two-properties-integer"),
  name: "Case 020 - [Object Variant] - Removed 2 properties with type = integer"
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("021-object-variant-added-integer"),
  name: "Case 021 - [Object Variant] - Added, property = integer"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("022-object-variant-removed-integer"),
  name: "Case 022 - [Object Variant] - Removed, property = integer"
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("023-one-of-prop-added-integer"),
  name: "Case 023 - [Whole OneOf] - Added with Object Variant, property = integer"
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("024-one-of-prop-removed-integer"),
  name: "Case 024 - [Whole OneOf] - Removed with Object Variant, property = integer"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("025-object-variant-add-one-property-boolean"),
  name: "Case 025 - [Object Variant] - Added 1 property with type = boolean"
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("026-object-variant-remove-one-property-boolean"),
  name: "Case 026 - [Object Variant] - Removed 1 property with type = boolean"
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("027-object-variant-add-two-properties-boolean"),
  name: "Case 027 - [Object Variant] - Added 2 properties with type = boolean"
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("028-object-variant-remove-two-properties-boolean"),
  name: "Case 028 - [Object Variant] - Removed 2 properties with type = boolean"
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("029-object-variant-added-boolean"),
  name: "Case 029 - [Object Variant] - Added, property = boolean"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("030-object-variant-removed-boolean"),
  name: "Case 030 - [Object Variant] - Removed, property = boolean"
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("031-one-of-prop-added-boolean"),
  name: "Case 031 - [Whole OneOf] - Added with Object Variant, property = boolean"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("032-one-of-prop-removed-boolean"),
  name: "Case 032 - [Whole OneOf] - Removed with Object Variant, property = boolean"
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("033-object-variant-add-one-property-array"),
  name: "Case 033 - [Object Variant] - Added 1 property with type = array"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("034-object-variant-remove-one-property-array"),
  name: "Case 034 - [Object Variant] - Removed 1 property with type = array"
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("035-object-variant-add-two-properties-array"),
  name: "Case 035 - [Object Variant] - Added 2 properties with type = array"
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("036-object-variant-remove-two-properties-array"),
  name: "Case 036 - [Object Variant] - Removed 2 properties with type = array"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("037-object-variant-added-array"),
  name: "Case 037 - [Object Variant] - Added, property = array"
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("038-object-variant-removed-array"),
  name: "Case 038 - [Object Variant] - Removed, property = array"
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("039-one-of-prop-added-array"),
  name: "Case 039 - [Whole OneOf] - Added with Object Variant, property = array"
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("040-one-of-prop-removed-array"),
  name: "Case 040 - [Whole OneOf] - Removed with Object Variant, property = array"
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("041-object-variant-add-one-property-object"),
  name: "Case 041 - [Object Variant] - Added 1 property with type = object"
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("042-object-variant-remove-one-property-object"),
  name: "Case 042 - [Object Variant] - Removed 1 property with type = object"
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("043-object-variant-add-two-properties-object"),
  name: "Case 043 - [Object Variant] - Added 2 properties with type = object"
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("044-object-variant-remove-two-properties-object"),
  name: "Case 044 - [Object Variant] - Removed 2 properties with type = object"
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("045-object-variant-added-object"),
  name: "Case 045 - [Object Variant] - Added, property = object"
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("046-object-variant-removed-object"),
  name: "Case 046 - [Object Variant] - Removed, property = object"
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("047-one-of-prop-added-object"),
  name: "Case 047 - [Whole OneOf] - Added with Object Variant, property = object"
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  ...createCaseStory("048-one-of-prop-removed-object"),
  name: "Case 048 - [Whole OneOf] - Removed with Object Variant, property = object"
}`,...$.parameters?.docs?.source}}},Rr=`Case_001_object_variant_add_one_property_string.Case_002_object_variant_remove_one_property_string.Case_003_object_variant_add_two_properties_string.Case_004_object_variant_remove_two_properties_string.Case_005_object_variant_added_string.Case_006_object_variant_removed_string.Case_007_one_of_prop_added_string.Case_008_one_of_prop_removed_string.Case_009_object_variant_add_one_property_number.Case_010_object_variant_remove_one_property_number.Case_011_object_variant_add_two_properties_number.Case_012_object_variant_remove_two_properties_number.Case_013_object_variant_added_number.Case_014_object_variant_removed_number.Case_015_one_of_prop_added_number.Case_016_one_of_prop_removed_number.Case_017_object_variant_add_one_property_integer.Case_018_object_variant_remove_one_property_integer.Case_019_object_variant_add_two_properties_integer.Case_020_object_variant_remove_two_properties_integer.Case_021_object_variant_added_integer.Case_022_object_variant_removed_integer.Case_023_one_of_prop_added_integer.Case_024_one_of_prop_removed_integer.Case_025_object_variant_add_one_property_boolean.Case_026_object_variant_remove_one_property_boolean.Case_027_object_variant_add_two_properties_boolean.Case_028_object_variant_remove_two_properties_boolean.Case_029_object_variant_added_boolean.Case_030_object_variant_removed_boolean.Case_031_one_of_prop_added_boolean.Case_032_one_of_prop_removed_boolean.Case_033_object_variant_add_one_property_array.Case_034_object_variant_remove_one_property_array.Case_035_object_variant_add_two_properties_array.Case_036_object_variant_remove_two_properties_array.Case_037_object_variant_added_array.Case_038_object_variant_removed_array.Case_039_one_of_prop_added_array.Case_040_one_of_prop_removed_array.Case_041_object_variant_add_one_property_object.Case_042_object_variant_remove_one_property_object.Case_043_object_variant_add_two_properties_object.Case_044_object_variant_remove_two_properties_object.Case_045_object_variant_added_object.Case_046_object_variant_removed_object.Case_047_one_of_prop_added_object.Case_048_one_of_prop_removed_object`.split(`.`)})))()}zr();export{o as Case_001_object_variant_add_one_property_string,s as Case_002_object_variant_remove_one_property_string,c as Case_003_object_variant_add_two_properties_string,l as Case_004_object_variant_remove_two_properties_string,u as Case_005_object_variant_added_string,d as Case_006_object_variant_removed_string,f as Case_007_one_of_prop_added_string,p as Case_008_one_of_prop_removed_string,m as Case_009_object_variant_add_one_property_number,h as Case_010_object_variant_remove_one_property_number,g as Case_011_object_variant_add_two_properties_number,_ as Case_012_object_variant_remove_two_properties_number,v as Case_013_object_variant_added_number,y as Case_014_object_variant_removed_number,b as Case_015_one_of_prop_added_number,x as Case_016_one_of_prop_removed_number,S as Case_017_object_variant_add_one_property_integer,C as Case_018_object_variant_remove_one_property_integer,w as Case_019_object_variant_add_two_properties_integer,T as Case_020_object_variant_remove_two_properties_integer,E as Case_021_object_variant_added_integer,D as Case_022_object_variant_removed_integer,O as Case_023_one_of_prop_added_integer,k as Case_024_one_of_prop_removed_integer,A as Case_025_object_variant_add_one_property_boolean,j as Case_026_object_variant_remove_one_property_boolean,M as Case_027_object_variant_add_two_properties_boolean,N as Case_028_object_variant_remove_two_properties_boolean,P as Case_029_object_variant_added_boolean,F as Case_030_object_variant_removed_boolean,I as Case_031_one_of_prop_added_boolean,L as Case_032_one_of_prop_removed_boolean,R as Case_033_object_variant_add_one_property_array,z as Case_034_object_variant_remove_one_property_array,B as Case_035_object_variant_add_two_properties_array,V as Case_036_object_variant_remove_two_properties_array,H as Case_037_object_variant_added_array,U as Case_038_object_variant_removed_array,W as Case_039_one_of_prop_added_array,G as Case_040_one_of_prop_removed_array,K as Case_041_object_variant_add_one_property_object,q as Case_042_object_variant_remove_one_property_object,J as Case_043_object_variant_add_two_properties_object,Y as Case_044_object_variant_remove_two_properties_object,X as Case_045_object_variant_added_object,Z as Case_046_object_variant_removed_object,Q as Case_047_one_of_prop_added_object,$ as Case_048_one_of_prop_removed_object,Rr as __namedExportsOrder,Lr as default};