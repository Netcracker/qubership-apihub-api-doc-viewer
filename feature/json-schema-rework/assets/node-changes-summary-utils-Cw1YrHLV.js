import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{a as n,i as r}from"./AsyncApiOperationViewer-DfoTMA5W.js";import{c as i,d as a,l as o,s}from"./json-schema-diffs-utils-Dqefin3y.js";var c;function l(){return(l=e((()=>{c=`type: object
description: Node changes summary sample (object with simple properties)
properties:
  propRemoved:
    type: string
    description: Property removed after the change
  propDescriptionChanged:
    type: string
    description: Original description
  propTypeChanged:
    type: string

`})))()}var u;function d(){return(d=e((()=>{u=`type: object
description: Node changes summary sample (object wrapping case 1)
properties:
  caseOne:
    type: object
    description: Node changes summary sample (object with simple properties)
    properties:
      propRemoved:
        type: string
        description: Property removed after the change
      propDescriptionChanged:
        type: string
        description: Original description
      propTypeChanged:
        type: string
  unchangedProp:
    type: string
    description: This property never changes

`})))()}var f;function p(){return(p=e((()=>{f=`type: array
description: Node changes summary sample (array wrapping case 1)
items:
  type: object
  description: Node changes summary sample (object with simple properties)
  properties:
    propRemoved:
      type: string
      description: Property removed after the change
    propDescriptionChanged:
      type: string
      description: Original description
    propTypeChanged:
      type: string

`})))()}var m;function h(){return(h=e((()=>{m=`type: array
description: Node changes summary sample (array wrapping case 2)
items:
  type: object
  description: Node changes summary sample (object wrapping case 1)
  properties:
    caseOne:
      type: object
      description: Node changes summary sample (object with simple properties)
      properties:
        propRemoved:
          type: string
          description: Property removed after the change
        propDescriptionChanged:
          type: string
          description: Original description
        propTypeChanged:
          type: string
    unchangedProp:
      type: string
      description: This property never changes

`})))()}var g;function _(){return(_=e((()=>{g=`type: object
description: Node changes summary sample (object with oneOf properties)
properties:
  oneOfRemoved:
    oneOf:
      - type: string
      - type: number
  oneOfNumberAdded:
    oneOf:
      - type: string
  oneOfNumberRemoved:
    oneOf:
      - type: string
      - type: number

`})))()}var v;function y(){return(y=e((()=>{v=`type: object
description: Node changes summary sample (oneOf variants wrapping objects)
properties:
  variantWithCaseOne:
    oneOf:
      - type: string
      - type: object
        description: Node changes summary sample (object with simple properties)
        properties:
          propRemoved:
            type: string
            description: Property removed after the change
          propDescriptionChanged:
            type: string
            description: Original description
          propTypeChanged:
            type: string
  variantWithCaseTwo:
    oneOf:
      - type: string
      - type: object
        description: Node changes summary sample (object wrapping case 1)
        properties:
          caseOne:
            type: object
            description: Node changes summary sample (object with simple properties)
            properties:
              propRemoved:
                type: string
                description: Property removed after the change
              propDescriptionChanged:
                type: string
                description: Original description
              propTypeChanged:
                type: string
          unchangedProp:
            type: string
            description: This property never changes

`})))()}var b;function x(){return(x=e((()=>{b=`type: object
description: Node changes summary sample (oneOf variants wrapping arrays)
properties:
  variantWithCaseThree:
    oneOf:
      - type: string
      - type: array
        description: Node changes summary sample (array wrapping case 1)
        items:
          type: object
          description: Node changes summary sample (object with simple properties)
          properties:
            propRemoved:
              type: string
              description: Property removed after the change
            propDescriptionChanged:
              type: string
              description: Original description
            propTypeChanged:
              type: string
  variantWithCaseFour:
    oneOf:
      - type: string
      - type: array
        description: Node changes summary sample (array wrapping case 2)
        items:
          type: object
          description: Node changes summary sample (object wrapping case 1)
          properties:
            caseOne:
              type: object
              description: Node changes summary sample (object with simple properties)
              properties:
                propRemoved:
                  type: string
                  description: Property removed after the change
                propDescriptionChanged:
                  type: string
                  description: Original description
                propTypeChanged:
                  type: string
            unchangedProp:
              type: string
              description: This property never changes

`})))()}var S;function C(){return(C=e((()=>{S=`type: object
description: Node changes summary sample (object with simple properties)
properties:
  propAdded:
    type: string
    description: Property added after the change
  propDescriptionChanged:
    type: string
    description: Updated description
  propTypeChanged:
    type: integer

`})))()}var w;function T(){return(T=e((()=>{w=`type: object
description: Node changes summary sample (object wrapping case 1)
properties:
  caseOne:
    type: object
    description: Node changes summary sample (object with simple properties)
    properties:
      propAdded:
        type: string
        description: Property added after the change
      propDescriptionChanged:
        type: string
        description: Updated description
      propTypeChanged:
        type: integer
  unchangedProp:
    type: string
    description: This property never changes

`})))()}var E;function D(){return(D=e((()=>{E=`type: array
description: Node changes summary sample (array wrapping case 1)
items:
  type: object
  description: Node changes summary sample (object with simple properties)
  properties:
    propAdded:
      type: string
      description: Property added after the change
    propDescriptionChanged:
      type: string
      description: Updated description
    propTypeChanged:
      type: integer

`})))()}var O;function k(){return(k=e((()=>{O=`type: array
description: Node changes summary sample (array wrapping case 2)
items:
  type: object
  description: Node changes summary sample (object wrapping case 1)
  properties:
    caseOne:
      type: object
      description: Node changes summary sample (object with simple properties)
      properties:
        propAdded:
          type: string
          description: Property added after the change
        propDescriptionChanged:
          type: string
          description: Updated description
        propTypeChanged:
          type: integer
    unchangedProp:
      type: string
      description: This property never changes

`})))()}var A;function j(){return(j=e((()=>{A=`type: object
description: Node changes summary sample (object with oneOf properties)
properties:
  oneOfAdded:
    oneOf:
      - type: string
      - type: number
  oneOfNumberAdded:
    oneOf:
      - type: string
      - type: number
  oneOfNumberRemoved:
    oneOf:
      - type: string

`})))()}var M;function N(){return(N=e((()=>{M=`type: object
description: Node changes summary sample (oneOf variants wrapping objects)
properties:
  variantWithCaseOne:
    oneOf:
      - type: string
      - type: object
        description: Node changes summary sample (object with simple properties)
        properties:
          propAdded:
            type: string
            description: Property added after the change
          propDescriptionChanged:
            type: string
            description: Updated description
          propTypeChanged:
            type: integer
  variantWithCaseTwo:
    oneOf:
      - type: string
      - type: object
        description: Node changes summary sample (object wrapping case 1)
        properties:
          caseOne:
            type: object
            description: Node changes summary sample (object with simple properties)
            properties:
              propAdded:
                type: string
                description: Property added after the change
              propDescriptionChanged:
                type: string
                description: Updated description
              propTypeChanged:
                type: integer
          unchangedProp:
            type: string
            description: This property never changes

`})))()}var P;function F(){return(F=e((()=>{P=`type: object
description: Node changes summary sample (oneOf variants wrapping arrays)
properties:
  variantWithCaseThree:
    oneOf:
      - type: string
      - type: array
        description: Node changes summary sample (array wrapping case 1)
        items:
          type: object
          description: Node changes summary sample (object with simple properties)
          properties:
            propAdded:
              type: string
              description: Property added after the change
            propDescriptionChanged:
              type: string
              description: Updated description
            propTypeChanged:
              type: integer
  variantWithCaseFour:
    oneOf:
      - type: string
      - type: array
        description: Node changes summary sample (array wrapping case 2)
        items:
          type: object
          description: Node changes summary sample (object wrapping case 1)
          properties:
            caseOne:
              type: object
              description: Node changes summary sample (object with simple properties)
              properties:
                propAdded:
                  type: string
                  description: Property added after the change
                propDescriptionChanged:
                  type: string
                  description: Updated description
                propTypeChanged:
                  type: integer
            unchangedProp:
              type: string
              description: This property never changes

`})))()}var I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),i(),n(),I=t(),L=Object.assign({"../../../../samples/json-schema-diffs/node-changes-summary/case-1-simple-properties/before.yaml":c,"../../../../samples/json-schema-diffs/node-changes-summary/case-2-object-wrapping-case-1/before.yaml":u,"../../../../samples/json-schema-diffs/node-changes-summary/case-3-array-items-case-1/before.yaml":f,"../../../../samples/json-schema-diffs/node-changes-summary/case-4-array-items-case-2/before.yaml":m,"../../../../samples/json-schema-diffs/node-changes-summary/case-5-oneof-properties/before.yaml":g,"../../../../samples/json-schema-diffs/node-changes-summary/case-6-oneof-wrapping-object-cases/before.yaml":v,"../../../../samples/json-schema-diffs/node-changes-summary/case-7-oneof-wrapping-array-cases/before.yaml":b}),R=Object.assign({"../../../../samples/json-schema-diffs/node-changes-summary/case-1-simple-properties/after.yaml":S,"../../../../samples/json-schema-diffs/node-changes-summary/case-2-object-wrapping-case-1/after.yaml":w,"../../../../samples/json-schema-diffs/node-changes-summary/case-3-array-items-case-1/after.yaml":E,"../../../../samples/json-schema-diffs/node-changes-summary/case-4-array-items-case-2/after.yaml":O,"../../../../samples/json-schema-diffs/node-changes-summary/case-5-oneof-properties/after.yaml":A,"../../../../samples/json-schema-diffs/node-changes-summary/case-6-oneof-wrapping-object-cases/after.yaml":M,"../../../../samples/json-schema-diffs/node-changes-summary/case-7-oneof-wrapping-array-cases/after.yaml":P}),z=/node-changes-summary\/case-([^/]+)\//,B=e=>{let t=e.match(z);if(!t)throw Error(`Cannot resolve node-changes-summary case slug from path: ${e}`);return t[1]},V=e=>Object.entries(e).reduce((e,[t,n])=>(e[B(t)]=n,e),{}),H=V(L),U=V(R),W=({beforeYaml:e,afterYaml:t})=>(0,I.jsx)(r,{...s(e,t),hideUnchangedNodes:!1}),G=(e,t,n)=>{let i=H[e],a=U[e];if(!i||!a)throw Error(`Sample case not found: ${e}`);return{name:t,args:{beforeYaml:i,afterYaml:a},argTypes:o,render:e=>{let t=s(e.beforeYaml,e.afterYaml);return(0,I.jsx)(r,{...t,expandedDepth:n,hideUnchangedNodes:!1})}}},K=(e,t,n)=>({...G(e,t,n),play:async({canvasElement:e})=>{await a(e)}}),W.__docgenInfo={description:"`meta.component` for the per-case files; every story overrides `render` with its own depth.",methods:[],displayName:`NodeChangesSummarySampleStory`,props:{beforeYaml:{required:!0,tsType:{name:`string`},description:``},afterYaml:{required:!0,tsType:{name:`string`},description:``}}}})))()}export{q as i,G as n,K as r,W as t};