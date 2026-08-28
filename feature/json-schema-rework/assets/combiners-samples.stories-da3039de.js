import{c as S}from"./diffs-samples-cases-1df1f3ae.js";import{c as C,J as j,j as O,a as U}from"./json-schema-diffs-utils-87c1a73a.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-41da122b.js";import"./DiffBadge-636b527d.js";import"./IndexesNodeViewer-7234b4ff.js";import"./DdlTableDiffsViewer-956a7783.js";/* empty css              */import"./DdlTableViewer-82237eef.js";import"./GraphQLOperationDiffViewer-ad5e8f40.js";import"./GraphPropNodeViewer-47a3eb3c.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-5f3933cf.js";import"./preprocess-6c565c6a.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const N=`type: object
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
`,w=`type: object
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
`,P=`type: object
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
`,F=`type: object
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
`,B=`type: object
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
`,D=`type: object
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
`,J=`type: object
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
`,A=`type: object
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
`,R=`type: object
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
`,x=`type: object
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
`,I=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/3.1-oneof-variant-added/before.yaml":N,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.1-oneof-variant-content-changed/before.yaml":w,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.2-oneof-variant-description-only-changed/before.yaml":P,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.1-oneof-three-variants-unchanged/before.yaml":F,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.2-root-description-changed-oneof-unchanged/before.yaml":B}),T=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/3.1-oneof-variant-added/after.yaml":D,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.1-oneof-variant-content-changed/after.yaml":J,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.2-oneof-variant-description-only-changed/after.yaml":A,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.1-oneof-three-variants-unchanged/after.yaml":R,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.2-root-description-changed-oneof-unchanged/after.yaml":x}),E=S(I,T),H=C(E),rn={title:"JSON Schema Diffs Suite (Hiding Unchanged Nodes)/Combiners Samples",component:j,argTypes:O},n=U(j,H),e=n("3.1-oneof-variant-added"),t=n("4.1-oneof-variant-content-changed"),r=n("4.2-oneof-variant-description-only-changed"),o=n("5.1-oneof-three-variants-unchanged"),i=n("5.2-root-description-changed-oneof-unchanged");var a,s,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:'createCaseStory("3.1-oneof-variant-added")',...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,d,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:'createCaseStory("4.1-oneof-variant-content-changed")',...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,h,_;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:'createCaseStory("4.2-oneof-variant-description-only-changed")',...(_=(h=r.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("5.1-oneof-three-variants-unchanged")',...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var u,v,l;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("5.2-root-description-changed-oneof-unchanged")',...(l=(v=i.parameters)==null?void 0:v.docs)==null?void 0:l.source}}};const on=["Case_3_1_oneof_variant_added","Case_4_1_oneof_variant_content_changed","Case_4_2_oneof_variant_description_only_changed","Case_5_1_oneof_three_variants_unchanged","Case_5_2_root_description_changed_oneof_unchanged"];export{e as Case_3_1_oneof_variant_added,t as Case_4_1_oneof_variant_content_changed,r as Case_4_2_oneof_variant_description_only_changed,o as Case_5_1_oneof_three_variants_unchanged,i as Case_5_2_root_description_changed_oneof_unchanged,on as __namedExportsOrder,rn as default};
