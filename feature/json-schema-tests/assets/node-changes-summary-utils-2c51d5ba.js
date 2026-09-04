import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{c as i}from"./AsyncApiOperationViewer-2d7bd233.js";import{b as a,j as m}from"./json-schema-diffs-utils-361af4d1.js";const y=`type: object
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

`,g=`type: object
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

`,h=`type: array
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

`,l=`type: array
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

`,f=`type: object
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

`,b=`type: object
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

`,u=`type: object
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

`,j=`type: object
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

`,_=`type: object
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

`,v=`type: array
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

`,w=`type: array
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

`,N=`type: object
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

`,C=`type: object
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

`,O=`type: object
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

`,T=Object.assign({"../../../../samples/json-schema-diffs/node-changes-summary/case-1-simple-properties/before.yaml":y,"../../../../samples/json-schema-diffs/node-changes-summary/case-2-object-wrapping-case-1/before.yaml":g,"../../../../samples/json-schema-diffs/node-changes-summary/case-3-array-items-case-1/before.yaml":h,"../../../../samples/json-schema-diffs/node-changes-summary/case-4-array-items-case-2/before.yaml":l,"../../../../samples/json-schema-diffs/node-changes-summary/case-5-oneof-properties/before.yaml":f,"../../../../samples/json-schema-diffs/node-changes-summary/case-6-oneof-wrapping-object-cases/before.yaml":b,"../../../../samples/json-schema-diffs/node-changes-summary/case-7-oneof-wrapping-array-cases/before.yaml":u}),P=Object.assign({"../../../../samples/json-schema-diffs/node-changes-summary/case-1-simple-properties/after.yaml":j,"../../../../samples/json-schema-diffs/node-changes-summary/case-2-object-wrapping-case-1/after.yaml":_,"../../../../samples/json-schema-diffs/node-changes-summary/case-3-array-items-case-1/after.yaml":v,"../../../../samples/json-schema-diffs/node-changes-summary/case-4-array-items-case-2/after.yaml":w,"../../../../samples/json-schema-diffs/node-changes-summary/case-5-oneof-properties/after.yaml":N,"../../../../samples/json-schema-diffs/node-changes-summary/case-6-oneof-wrapping-object-cases/after.yaml":C,"../../../../samples/json-schema-diffs/node-changes-summary/case-7-oneof-wrapping-array-cases/after.yaml":O}),D=/node-changes-summary\/case-([^/]+)\//,S=e=>{const n=e.match(D);if(!n)throw new Error(`Cannot resolve node-changes-summary case slug from path: ${e}`);return n[1]},c=e=>Object.entries(e).reduce((n,[p,r])=>(n[S(p)]=r,n),{}),A=c(T),R=c(P),U=({beforeYaml:e,afterYaml:n})=>o.jsx(i,{...a(e,n)}),E=(e,n,p)=>{const r=A[e],s=R[e];if(!r||!s)throw new Error(`Sample case not found: ${e}`);return{name:n,args:{beforeYaml:r,afterYaml:s},argTypes:m,render:t=>{const d=a(t.beforeYaml,t.afterYaml);return o.jsx(i,{...d,expandedDepth:p})}}};U.__docgenInfo={description:"`meta.component` for the per-case files; every story overrides `render` with its own depth.",methods:[],displayName:"NodeChangesSummarySampleStory",props:{beforeYaml:{required:!0,tsType:{name:"string"},description:""},afterYaml:{required:!0,tsType:{name:"string"},description:""}}};export{U as N,E as c};
