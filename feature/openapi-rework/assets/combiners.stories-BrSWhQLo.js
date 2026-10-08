import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./diffs-samples-cases-Bp0vvMWA.js";import{c as a,l as o,n as s,o as c}from"./json-schema-diffs-utils-f2qGJeOS.js";var l;function u(){return(u=e((()=>{l=`type: object
properties:
  status:
    oneOf:
      - type: string
        description: String variant
      - type: number
        description: Number variant
  unchangedProp:
    type: string
    description: Unchanged
`})))()}var d;function f(){return(f=e((()=>{d=`type: object
properties:
  value:
    oneOf:
      - type: object
        description: Object variant (before)
        properties:
          nestedChanged:
            type: string
            description: Before
          nestedUnchanged:
            type: string
            description: Unchanged
      - type: number
        description: Number variant unchanged
  otherProp:
    type: string
    description: Unchanged
`})))()}var p;function m(){return(m=e((()=>{p=`type: object
properties:
  value:
    oneOf:
      - type: object
        description: Object variant (before)
        properties:
          nestedChanged:
            type: string
            description: Before
          nestedUnchanged:
            type: string
            description: Unchanged
      - type: number
        description: Number variant unchanged
  otherProp:
    type: string
    description: Unchanged
`})))()}var h;function g(){return(g=e((()=>{h=`type: object
description: Combiner with three variants — no schema changes
properties:
  status:
    oneOf:
      - type: string
        description: String variant
      - type: number
        description: Number variant
      - type: object
        description: Object variant
        properties:
          nestedField:
            type: string
            description: Nested property inside object variant
  unchangedProp:
    type: string
    description: Unchanged sibling property
`})))()}var _;function v(){return(v=e((()=>{_=`type: object
description: Root description before change
properties:
  status:
    oneOf:
      - type: string
        description: String variant
      - type: number
        description: Number variant
      - type: object
        description: Object variant
        properties:
          nestedField:
            type: string
            description: Nested property inside object variant
  unchangedProp:
    type: string
    description: Unchanged sibling property
`})))()}var y;function b(){return(b=e((()=>{y=`type: object
properties:
  status:
    oneOf:
      - type: string
        description: String variant
      - type: number
        description: Number variant
      - type: boolean
        description: Added variant
  unchangedProp:
    type: string
    description: Unchanged
`})))()}var x;function S(){return(S=e((()=>{x=`type: object
properties:
  value:
    oneOf:
      - type: object
        description: Object variant (after)
        properties:
          nestedChanged:
            type: string
            description: After
          nestedUnchanged:
            type: string
            description: Unchanged
      - type: number
        description: Number variant unchanged
  otherProp:
    type: string
    description: Unchanged
`})))()}var C;function w(){return(w=e((()=>{C=`type: object
properties:
  value:
    oneOf:
      - type: object
        description: Object variant (after)
        properties:
          nestedChanged:
            type: string
            description: Before
          nestedUnchanged:
            type: string
            description: Unchanged
      - type: number
        description: Number variant unchanged
  otherProp:
    type: string
    description: Unchanged
`})))()}var T;function E(){return(E=e((()=>{T=`type: object
description: Combiner with three variants — no schema changes
properties:
  status:
    oneOf:
      - type: string
        description: String variant
      - type: number
        description: Number variant
      - type: object
        description: Object variant
        properties:
          nestedField:
            type: string
            description: Nested property inside object variant
  unchangedProp:
    type: string
    description: Unchanged sibling property
`})))()}var D;function O(){return(O=e((()=>{D=`type: object
description: Root description after change
properties:
  status:
    oneOf:
      - type: string
        description: String variant
      - type: number
        description: Number variant
      - type: object
        description: Object variant
        properties:
          nestedField:
            type: string
            description: Nested property inside object variant
  unchangedProp:
    type: string
    description: Unchanged sibling property
`})))()}var k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),r(),a(),t(),k=!0,A=i(Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/3.1-oneof-variant-added/before.yaml":l,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.1-oneof-variant-content-changed/before.yaml":d,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.2-oneof-variant-description-only-changed/before.yaml":p,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.1-oneof-three-variants-unchanged/before.yaml":h,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.2-root-description-changed-oneof-unchanged/before.yaml":_}),Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/3.1-oneof-variant-added/after.yaml":y,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.1-oneof-variant-content-changed/after.yaml":x,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.2-oneof-variant-description-only-changed/after.yaml":C,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.1-oneof-three-variants-unchanged/after.yaml":T,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.2-root-description-changed-oneof-unchanged/after.yaml":D})),j=n(A),M={title:`JSON Schema Diffs Suite (Hiding Unchanged Nodes)/Combiners`,component:s,argTypes:o},N=c(s,j,k),P=N(`3.1-oneof-variant-added`),F=N(`4.1-oneof-variant-content-changed`),I=N(`4.2-oneof-variant-description-only-changed`),L=N(`5.1-oneof-three-variants-unchanged`),R=N(`5.2-root-description-changed-oneof-unchanged`),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("3.1-oneof-variant-added")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("4.1-oneof-variant-content-changed")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("4.2-oneof-variant-description-only-changed")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("5.1-oneof-three-variants-unchanged")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("5.2-root-description-changed-oneof-unchanged")`,...R.parameters?.docs?.source}}},z=[`Case_3_1_oneof_variant_added`,`Case_4_1_oneof_variant_content_changed`,`Case_4_2_oneof_variant_description_only_changed`,`Case_5_1_oneof_three_variants_unchanged`,`Case_5_2_root_description_changed_oneof_unchanged`]})))()}B();export{P as Case_3_1_oneof_variant_added,F as Case_4_1_oneof_variant_content_changed,I as Case_4_2_oneof_variant_description_only_changed,L as Case_5_1_oneof_three_variants_unchanged,R as Case_5_2_root_description_changed_oneof_unchanged,z as __namedExportsOrder,M as default};