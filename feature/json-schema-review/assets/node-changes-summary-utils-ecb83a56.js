import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{e as i,j as m}from"./json-schema-diffs-utils-5399984b.js";import{c as a}from"./AsyncApiOperationViewer-f88ec3ca.js";import{s as y}from"./combiner-changed-variant-43f703e4.js";const g=`type: object
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

`,h=`type: object
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

`,l=`type: array
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

`,f=`type: array
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

`,b=`type: object
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

`,u=`type: object
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

`,j=`type: object
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

`,_=`type: object
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

`,v=`type: object
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

`,w=`type: array
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

`,N=`type: array
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

`,C=`type: object
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

`,O=`type: object
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

`,T=`type: object
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

`,P=Object.assign({"../../../../samples/json-schema-diffs/node-changes-summary/case-1-simple-properties/before.yaml":g,"../../../../samples/json-schema-diffs/node-changes-summary/case-2-object-wrapping-case-1/before.yaml":h,"../../../../samples/json-schema-diffs/node-changes-summary/case-3-array-items-case-1/before.yaml":l,"../../../../samples/json-schema-diffs/node-changes-summary/case-4-array-items-case-2/before.yaml":f,"../../../../samples/json-schema-diffs/node-changes-summary/case-5-oneof-properties/before.yaml":b,"../../../../samples/json-schema-diffs/node-changes-summary/case-6-oneof-wrapping-object-cases/before.yaml":u,"../../../../samples/json-schema-diffs/node-changes-summary/case-7-oneof-wrapping-array-cases/before.yaml":j}),D=Object.assign({"../../../../samples/json-schema-diffs/node-changes-summary/case-1-simple-properties/after.yaml":_,"../../../../samples/json-schema-diffs/node-changes-summary/case-2-object-wrapping-case-1/after.yaml":v,"../../../../samples/json-schema-diffs/node-changes-summary/case-3-array-items-case-1/after.yaml":w,"../../../../samples/json-schema-diffs/node-changes-summary/case-4-array-items-case-2/after.yaml":N,"../../../../samples/json-schema-diffs/node-changes-summary/case-5-oneof-properties/after.yaml":C,"../../../../samples/json-schema-diffs/node-changes-summary/case-6-oneof-wrapping-object-cases/after.yaml":O,"../../../../samples/json-schema-diffs/node-changes-summary/case-7-oneof-wrapping-array-cases/after.yaml":T}),S=/node-changes-summary\/case-([^/]+)\//,A=e=>{const n=e.match(S);if(!n)throw new Error(`Cannot resolve node-changes-summary case slug from path: ${e}`);return n[1]},c=e=>Object.entries(e).reduce((n,[s,r])=>(n[A(s)]=r,n),{}),R=c(P),U=c(D),W=({beforeYaml:e,afterYaml:n})=>o.jsx(a,{...i(e,n),hideUnchangedNodes:!1}),x=(e,n,s)=>{const r=R[e],p=U[e];if(!r||!p)throw new Error(`Sample case not found: ${e}`);return{name:n,args:{beforeYaml:r,afterYaml:p},argTypes:m,render:t=>{const d=i(t.beforeYaml,t.afterYaml);return o.jsx(a,{...d,expandedDepth:s,hideUnchangedNodes:!1})}}},B=(e,n,s)=>({...x(e,n,s),play:async({canvasElement:r})=>{await y(r)}});W.__docgenInfo={description:"`meta.component` for the per-case files; every story overrides `render` with its own depth.",methods:[],displayName:"NodeChangesSummarySampleStory",props:{beforeYaml:{required:!0,tsType:{name:"string"},description:""},afterYaml:{required:!0,tsType:{name:"string"},description:""}}};export{W as N,B as a,x as c};
