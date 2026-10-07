import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as ee,r as te}from"./sample-cases-DDoAHGgD.js";import{n as ne,t as re}from"./diffs-samples-cases-Bp0vvMWA.js";import{c as ie,l as ae,n as oe,o as se}from"./json-schema-diffs-utils-aaxW2OKD.js";var ce;function le(){return(le=e((()=>{ce=`type: object
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
description: Object with 0 string property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var me;function he(){return(he=e((()=>{me=`type: object
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

`})))()}var ve;function ye(){return(ye=e((()=>{ve=`type: object
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

`})))()}var be;function xe(){return(xe=e((()=>{be=`type: object
description: Object with 0 number property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`type: object
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

`})))()}var we;function Te(){return(Te=e((()=>{we=`type: object
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

`})))()}var Ee;function De(){return(De=e((()=>{Ee=`type: object
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

`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`type: object
description: Object with 0 integer property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var Ae;function je(){return(je=e((()=>{Ae=`type: object
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

`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`type: object
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

`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`type: object
description: Object with 0 boolean property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var Re;function t(){return(t=e((()=>{Re=`type: object
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

`})))()}var n;function r(){return(r=e((()=>{n=`type: object
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

`})))()}var i;function a(){return(a=e((()=>{i=`type: object
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

`})))()}var o;function s(){return(s=e((()=>{o=`type: object
description: Object with 0 array property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var c;function l(){return(l=e((()=>{c=`type: object
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

`})))()}var u;function d(){return(d=e((()=>{u=`type: object
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

`})))()}var f;function p(){return(p=e((()=>{f=`type: object
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

`})))()}var m;function h(){return(h=e((()=>{m=`type: object
description: Object with 0 object property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var ze;function Be(){return(Be=e((()=>{ze=`type: object
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

`})))()}var Ve;function He(){return(He=e((()=>{Ve=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`})))()}var Ue;function We(){return(We=e((()=>{Ue=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`})))()}var qe;function Je(){return(Je=e((()=>{qe=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

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
        description: Object with 1 boolean property schema(s)
        properties:
          prop0:
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

`})))()}var dt;function ft(){return(ft=e((()=>{dt=`type: object
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

`})))()}var pt;function mt(){return(mt=e((()=>{pt=`type: object
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

`})))()}var ht;function gt(){return(gt=e((()=>{ht=`type: object
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

`})))()}var _t;function vt(){return(vt=e((()=>{_t=`type: object
description: Object with 0 string property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var yt;function bt(){return(bt=e((()=>{yt=`type: object
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

`})))()}var xt;function St(){return(St=e((()=>{xt=`type: object
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

`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`type: object
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

`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`type: object
description: Object with 0 number property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`type: object
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

`})))()}var kt;function At(){return(At=e((()=>{kt=`type: object
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

`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`type: object
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

`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`type: object
description: Object with 0 integer property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var Ft;function It(){return(It=e((()=>{Ft=`type: object
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

`})))()}var Lt;function g(){return(g=e((()=>{Lt=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`})))()}var Rt;function zt(){return(zt=e((()=>{Rt=`type: object
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

`})))()}var Bt;function Vt(){return(Vt=e((()=>{Bt=`type: object
description: Object with 0 boolean property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var Ht;function Ut(){return(Ut=e((()=>{Ht=`type: object
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

`})))()}var Wt;function Gt(){return(Gt=e((()=>{Wt=`type: object
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

`})))()}var Kt;function qt(){return(qt=e((()=>{Kt=`type: object
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

`})))()}var Jt;function Yt(){return(Yt=e((()=>{Jt=`type: object
description: Object with 0 array property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var Xt;function Zt(){return(Zt=e((()=>{Xt=`type: object
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

`})))()}var Qt;function $t(){return($t=e((()=>{Qt=`type: object
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

`})))()}var en;function tn(){return(tn=e((()=>{en=`type: object
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

`})))()}var nn;function rn(){return(rn=e((()=>{nn=`type: object
description: Object with 0 object property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`})))()}var an;function on(){return(on=e((()=>{an=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var sn;function cn(){return(cn=e((()=>{sn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`})))()}var ln;function un(){return(un=e((()=>{ln=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var dn;function fn(){return(fn=e((()=>{dn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`})))()}var pn;function mn(){return(mn=e((()=>{pn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var hn;function gn(){return(gn=e((()=>{hn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`})))()}var _n;function vn(){return(vn=e((()=>{_n=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var yn;function bn(){return(bn=e((()=>{yn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

`})))()}var xn;function Sn(){return(Sn=e((()=>{xn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
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

`})))()}var Cn;function wn(){return(wn=e((()=>{Cn=`type: object
description: Root schema with oneOf object variant property
properties:
  plainProp:
    type: string
    description: Arbitrary plain property
  oneOfProp:
    oneOf:
      - type: string
        description: String oneOf variant (unchanged)
      - type: number
        description: Number oneOf variant (unchanged)

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

`})))()}var kn,An,jn,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Mn;function Nn(){return(Nn=e((()=>{le(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),t(),r(),a(),s(),l(),d(),p(),h(),Be(),He(),We(),Ke(),Je(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),Pt(),It(),g(),zt(),Vt(),Ut(),Gt(),qt(),Yt(),Zt(),$t(),tn(),rn(),on(),cn(),un(),fn(),mn(),gn(),vn(),bn(),Sn(),wn(),En(),On(),ne(),ie(),ee(),kn=re(Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-properties/001-add-one-property-string/before.yaml":ce,"../../../../samples/json-schema-diffs/type-changes/object-properties/002-remove-one-property-string/before.yaml":ue,"../../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string/before.yaml":fe,"../../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string/before.yaml":me,"../../../../samples/json-schema-diffs/type-changes/object-properties/005-add-one-property-number/before.yaml":ge,"../../../../samples/json-schema-diffs/type-changes/object-properties/006-remove-one-property-number/before.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/object-properties/007-add-two-properties-number/before.yaml":be,"../../../../samples/json-schema-diffs/type-changes/object-properties/008-remove-two-properties-number/before.yaml":Se,"../../../../samples/json-schema-diffs/type-changes/object-properties/009-add-one-property-integer/before.yaml":we,"../../../../samples/json-schema-diffs/type-changes/object-properties/010-remove-one-property-integer/before.yaml":Ee,"../../../../samples/json-schema-diffs/type-changes/object-properties/011-add-two-properties-integer/before.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/object-properties/012-remove-two-properties-integer/before.yaml":Ae,"../../../../samples/json-schema-diffs/type-changes/object-properties/013-add-one-property-boolean/before.yaml":Me,"../../../../samples/json-schema-diffs/type-changes/object-properties/014-remove-one-property-boolean/before.yaml":Pe,"../../../../samples/json-schema-diffs/type-changes/object-properties/015-add-two-properties-boolean/before.yaml":Ie,"../../../../samples/json-schema-diffs/type-changes/object-properties/016-remove-two-properties-boolean/before.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/object-properties/017-add-one-property-array/before.yaml":n,"../../../../samples/json-schema-diffs/type-changes/object-properties/018-remove-one-property-array/before.yaml":i,"../../../../samples/json-schema-diffs/type-changes/object-properties/019-add-two-properties-array/before.yaml":o,"../../../../samples/json-schema-diffs/type-changes/object-properties/020-remove-two-properties-array/before.yaml":c,"../../../../samples/json-schema-diffs/type-changes/object-properties/021-add-one-property-object/before.yaml":u,"../../../../samples/json-schema-diffs/type-changes/object-properties/022-remove-one-property-object/before.yaml":f,"../../../../samples/json-schema-diffs/type-changes/object-properties/023-add-two-properties-object/before.yaml":m,"../../../../samples/json-schema-diffs/type-changes/object-properties/024-remove-two-properties-object/before.yaml":ze,"../../../../samples/json-schema-diffs/type-changes/object-properties/025-one-of-add-object-variant-with-prop-type-string/before.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/object-properties/026-one-of-remove-object-variant-with-prop-type-string/before.yaml":Ue,"../../../../samples/json-schema-diffs/type-changes/object-properties/027-one-of-add-object-variant-with-prop-type-number/before.yaml":Ge,"../../../../samples/json-schema-diffs/type-changes/object-properties/028-one-of-remove-object-variant-with-prop-type-number/before.yaml":qe,"../../../../samples/json-schema-diffs/type-changes/object-properties/029-one-of-add-object-variant-with-prop-type-integer/before.yaml":Ye,"../../../../samples/json-schema-diffs/type-changes/object-properties/030-one-of-remove-object-variant-with-prop-type-integer/before.yaml":Ze,"../../../../samples/json-schema-diffs/type-changes/object-properties/031-one-of-add-object-variant-with-prop-type-boolean/before.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/object-properties/032-one-of-remove-object-variant-with-prop-type-boolean/before.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/object-properties/033-one-of-add-object-variant-with-prop-type-array/before.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/object-properties/034-one-of-remove-object-variant-with-prop-type-array/before.yaml":at,"../../../../samples/json-schema-diffs/type-changes/object-properties/035-one-of-add-object-variant-with-prop-type-object/before.yaml":st,"../../../../samples/json-schema-diffs/type-changes/object-properties/036-one-of-remove-object-variant-with-prop-type-object/before.yaml":lt}),Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-properties/001-add-one-property-string/after.yaml":dt,"../../../../samples/json-schema-diffs/type-changes/object-properties/002-remove-one-property-string/after.yaml":pt,"../../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string/after.yaml":ht,"../../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string/after.yaml":_t,"../../../../samples/json-schema-diffs/type-changes/object-properties/005-add-one-property-number/after.yaml":yt,"../../../../samples/json-schema-diffs/type-changes/object-properties/006-remove-one-property-number/after.yaml":xt,"../../../../samples/json-schema-diffs/type-changes/object-properties/007-add-two-properties-number/after.yaml":Ct,"../../../../samples/json-schema-diffs/type-changes/object-properties/008-remove-two-properties-number/after.yaml":Tt,"../../../../samples/json-schema-diffs/type-changes/object-properties/009-add-one-property-integer/after.yaml":Dt,"../../../../samples/json-schema-diffs/type-changes/object-properties/010-remove-one-property-integer/after.yaml":kt,"../../../../samples/json-schema-diffs/type-changes/object-properties/011-add-two-properties-integer/after.yaml":jt,"../../../../samples/json-schema-diffs/type-changes/object-properties/012-remove-two-properties-integer/after.yaml":Nt,"../../../../samples/json-schema-diffs/type-changes/object-properties/013-add-one-property-boolean/after.yaml":Ft,"../../../../samples/json-schema-diffs/type-changes/object-properties/014-remove-one-property-boolean/after.yaml":Lt,"../../../../samples/json-schema-diffs/type-changes/object-properties/015-add-two-properties-boolean/after.yaml":Rt,"../../../../samples/json-schema-diffs/type-changes/object-properties/016-remove-two-properties-boolean/after.yaml":Bt,"../../../../samples/json-schema-diffs/type-changes/object-properties/017-add-one-property-array/after.yaml":Ht,"../../../../samples/json-schema-diffs/type-changes/object-properties/018-remove-one-property-array/after.yaml":Wt,"../../../../samples/json-schema-diffs/type-changes/object-properties/019-add-two-properties-array/after.yaml":Kt,"../../../../samples/json-schema-diffs/type-changes/object-properties/020-remove-two-properties-array/after.yaml":Jt,"../../../../samples/json-schema-diffs/type-changes/object-properties/021-add-one-property-object/after.yaml":Xt,"../../../../samples/json-schema-diffs/type-changes/object-properties/022-remove-one-property-object/after.yaml":Qt,"../../../../samples/json-schema-diffs/type-changes/object-properties/023-add-two-properties-object/after.yaml":en,"../../../../samples/json-schema-diffs/type-changes/object-properties/024-remove-two-properties-object/after.yaml":nn,"../../../../samples/json-schema-diffs/type-changes/object-properties/025-one-of-add-object-variant-with-prop-type-string/after.yaml":an,"../../../../samples/json-schema-diffs/type-changes/object-properties/026-one-of-remove-object-variant-with-prop-type-string/after.yaml":sn,"../../../../samples/json-schema-diffs/type-changes/object-properties/027-one-of-add-object-variant-with-prop-type-number/after.yaml":ln,"../../../../samples/json-schema-diffs/type-changes/object-properties/028-one-of-remove-object-variant-with-prop-type-number/after.yaml":dn,"../../../../samples/json-schema-diffs/type-changes/object-properties/029-one-of-add-object-variant-with-prop-type-integer/after.yaml":pn,"../../../../samples/json-schema-diffs/type-changes/object-properties/030-one-of-remove-object-variant-with-prop-type-integer/after.yaml":hn,"../../../../samples/json-schema-diffs/type-changes/object-properties/031-one-of-add-object-variant-with-prop-type-boolean/after.yaml":_n,"../../../../samples/json-schema-diffs/type-changes/object-properties/032-one-of-remove-object-variant-with-prop-type-boolean/after.yaml":yn,"../../../../samples/json-schema-diffs/type-changes/object-properties/033-one-of-add-object-variant-with-prop-type-array/after.yaml":xn,"../../../../samples/json-schema-diffs/type-changes/object-properties/034-one-of-remove-object-variant-with-prop-type-array/after.yaml":Cn,"../../../../samples/json-schema-diffs/type-changes/object-properties/035-one-of-add-object-variant-with-prop-type-object/after.yaml":Tn,"../../../../samples/json-schema-diffs/type-changes/object-properties/036-one-of-remove-object-variant-with-prop-type-object/after.yaml":Dn})),An=te(kn),jn={title:`JSON Schema Diffs Suite/Object Properties And Additional Properties/Object Properties`,component:oe,argTypes:ae},_=se(oe,An),v=_(`001-add-one-property-string`),y=_(`002-remove-one-property-string`),b=_(`003-add-two-properties-string`),x=_(`004-remove-two-properties-string`),S=_(`005-add-one-property-number`),C=_(`006-remove-one-property-number`),w=_(`007-add-two-properties-number`),T=_(`008-remove-two-properties-number`),E=_(`009-add-one-property-integer`),D=_(`010-remove-one-property-integer`),O=_(`011-add-two-properties-integer`),k=_(`012-remove-two-properties-integer`),A=_(`013-add-one-property-boolean`),j=_(`014-remove-one-property-boolean`),M=_(`015-add-two-properties-boolean`),N=_(`016-remove-two-properties-boolean`),P=_(`017-add-one-property-array`),F=_(`018-remove-one-property-array`),I=_(`019-add-two-properties-array`),L=_(`020-remove-two-properties-array`),R=_(`021-add-one-property-object`),z=_(`022-remove-one-property-object`),B=_(`023-add-two-properties-object`),V=_(`024-remove-two-properties-object`),H=_(`025-one-of-add-object-variant-with-prop-type-string`),U=_(`026-one-of-remove-object-variant-with-prop-type-string`),W=_(`027-one-of-add-object-variant-with-prop-type-number`),G=_(`028-one-of-remove-object-variant-with-prop-type-number`),K=_(`029-one-of-add-object-variant-with-prop-type-integer`),q=_(`030-one-of-remove-object-variant-with-prop-type-integer`),J=_(`031-one-of-add-object-variant-with-prop-type-boolean`),Y=_(`032-one-of-remove-object-variant-with-prop-type-boolean`),X=_(`033-one-of-add-object-variant-with-prop-type-array`),Z=_(`034-one-of-remove-object-variant-with-prop-type-array`),Q=_(`035-one-of-add-object-variant-with-prop-type-object`),$=_(`036-one-of-remove-object-variant-with-prop-type-object`),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createCaseStory("001-add-one-property-string")`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("002-remove-one-property-string")`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("003-add-two-properties-string")`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("004-remove-two-properties-string")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("005-add-one-property-number")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("006-remove-one-property-number")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("007-add-two-properties-number")`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("008-remove-two-properties-number")`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("009-add-one-property-integer")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("010-remove-one-property-integer")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("011-add-two-properties-integer")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("012-remove-two-properties-integer")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("013-add-one-property-boolean")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("014-remove-one-property-boolean")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("015-add-two-properties-boolean")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("016-remove-two-properties-boolean")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("017-add-one-property-array")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("018-remove-one-property-array")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("019-add-two-properties-array")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("020-remove-two-properties-array")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("021-add-one-property-object")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("022-remove-one-property-object")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("023-add-two-properties-object")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("024-remove-two-properties-object")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("025-one-of-add-object-variant-with-prop-type-string")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("026-one-of-remove-object-variant-with-prop-type-string")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("027-one-of-add-object-variant-with-prop-type-number")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("028-one-of-remove-object-variant-with-prop-type-number")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("029-one-of-add-object-variant-with-prop-type-integer")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("030-one-of-remove-object-variant-with-prop-type-integer")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("031-one-of-add-object-variant-with-prop-type-boolean")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("032-one-of-remove-object-variant-with-prop-type-boolean")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("033-one-of-add-object-variant-with-prop-type-array")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("034-one-of-remove-object-variant-with-prop-type-array")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("035-one-of-add-object-variant-with-prop-type-object")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("036-one-of-remove-object-variant-with-prop-type-object")`,...$.parameters?.docs?.source}}},Mn=`Case_001_add_one_property_string.Case_002_remove_one_property_string.Case_003_add_two_properties_string.Case_004_remove_two_properties_string.Case_005_add_one_property_number.Case_006_remove_one_property_number.Case_007_add_two_properties_number.Case_008_remove_two_properties_number.Case_009_add_one_property_integer.Case_010_remove_one_property_integer.Case_011_add_two_properties_integer.Case_012_remove_two_properties_integer.Case_013_add_one_property_boolean.Case_014_remove_one_property_boolean.Case_015_add_two_properties_boolean.Case_016_remove_two_properties_boolean.Case_017_add_one_property_array.Case_018_remove_one_property_array.Case_019_add_two_properties_array.Case_020_remove_two_properties_array.Case_021_add_one_property_object.Case_022_remove_one_property_object.Case_023_add_two_properties_object.Case_024_remove_two_properties_object.Case_025_one_of_add_object_variant_with_prop_type_string.Case_026_one_of_remove_object_variant_with_prop_type_string.Case_027_one_of_add_object_variant_with_prop_type_number.Case_028_one_of_remove_object_variant_with_prop_type_number.Case_029_one_of_add_object_variant_with_prop_type_integer.Case_030_one_of_remove_object_variant_with_prop_type_integer.Case_031_one_of_add_object_variant_with_prop_type_boolean.Case_032_one_of_remove_object_variant_with_prop_type_boolean.Case_033_one_of_add_object_variant_with_prop_type_array.Case_034_one_of_remove_object_variant_with_prop_type_array.Case_035_one_of_add_object_variant_with_prop_type_object.Case_036_one_of_remove_object_variant_with_prop_type_object`.split(`.`)})))()}Nn();export{v as Case_001_add_one_property_string,y as Case_002_remove_one_property_string,b as Case_003_add_two_properties_string,x as Case_004_remove_two_properties_string,S as Case_005_add_one_property_number,C as Case_006_remove_one_property_number,w as Case_007_add_two_properties_number,T as Case_008_remove_two_properties_number,E as Case_009_add_one_property_integer,D as Case_010_remove_one_property_integer,O as Case_011_add_two_properties_integer,k as Case_012_remove_two_properties_integer,A as Case_013_add_one_property_boolean,j as Case_014_remove_one_property_boolean,M as Case_015_add_two_properties_boolean,N as Case_016_remove_two_properties_boolean,P as Case_017_add_one_property_array,F as Case_018_remove_one_property_array,I as Case_019_add_two_properties_array,L as Case_020_remove_two_properties_array,R as Case_021_add_one_property_object,z as Case_022_remove_one_property_object,B as Case_023_add_two_properties_object,V as Case_024_remove_two_properties_object,H as Case_025_one_of_add_object_variant_with_prop_type_string,U as Case_026_one_of_remove_object_variant_with_prop_type_string,W as Case_027_one_of_add_object_variant_with_prop_type_number,G as Case_028_one_of_remove_object_variant_with_prop_type_number,K as Case_029_one_of_add_object_variant_with_prop_type_integer,q as Case_030_one_of_remove_object_variant_with_prop_type_integer,J as Case_031_one_of_add_object_variant_with_prop_type_boolean,Y as Case_032_one_of_remove_object_variant_with_prop_type_boolean,X as Case_033_one_of_add_object_variant_with_prop_type_array,Z as Case_034_one_of_remove_object_variant_with_prop_type_array,Q as Case_035_one_of_add_object_variant_with_prop_type_object,$ as Case_036_one_of_remove_object_variant_with_prop_type_object,Mn as __namedExportsOrder,jn as default};