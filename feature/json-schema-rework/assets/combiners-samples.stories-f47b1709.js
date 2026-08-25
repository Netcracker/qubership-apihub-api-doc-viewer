import{c as S}from"./diffs-samples-cases-1df1f3ae.js";import{c as C,J as j,j as O,a as w}from"./json-schema-diffs-utils-54ae4407.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-d611df73.js";import"./DiffBadge-7a1cf565.js";import"./IndexesNodeViewer-0a2e8329.js";import"./DdlTableDiffsViewer-4e1c09c6.js";/* empty css              */import"./DdlTableViewer-94113168.js";import"./GraphQLOperationDiffViewer-9273ef44.js";import"./GraphPropNodeViewer-5195dcd6.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e2e598a2.js";import"./preprocess-1affe354.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const N=`type: object
properties:
  status:
    oneOf:
      - type: string
        description: Строковый вариант
      - type: number
        description: Числовой вариант
  unchangedProp:
    type: string
    description: Без изменений
`,P=`type: object
properties:
  value:
    oneOf:
      - type: object
        description: Вариант object (до)
        properties:
          nestedChanged:
            type: string
            description: Было
          nestedUnchanged:
            type: string
            description: Без изменений
      - type: number
        description: Числовой вариант без изменений
  otherProp:
    type: string
    description: Без изменений
`,U=`type: object
properties:
  value:
    oneOf:
      - type: object
        description: Вариант object (до)
        properties:
          nestedChanged:
            type: string
            description: Было
          nestedUnchanged:
            type: string
            description: Без изменений
      - type: number
        description: Числовой вариант без изменений
  otherProp:
    type: string
    description: Без изменений
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
`,D=`type: object
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
`,J=`type: object
properties:
  status:
    oneOf:
      - type: string
        description: Строковый вариант
      - type: number
        description: Числовой вариант
      - type: boolean
        description: Добавленный вариант
  unchangedProp:
    type: string
    description: Без изменений
`,R=`type: object
properties:
  value:
    oneOf:
      - type: object
        description: Вариант object (после)
        properties:
          nestedChanged:
            type: string
            description: Стало
          nestedUnchanged:
            type: string
            description: Без изменений
      - type: number
        description: Числовой вариант без изменений
  otherProp:
    type: string
    description: Без изменений
`,x=`type: object
properties:
  value:
    oneOf:
      - type: object
        description: Вариант object (после)
        properties:
          nestedChanged:
            type: string
            description: Было
          nestedUnchanged:
            type: string
            description: Без изменений
      - type: number
        description: Числовой вариант без изменений
  otherProp:
    type: string
    description: Без изменений
`,B=`type: object
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
`,I=`type: object
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
`,T=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/3.1-oneof-variant-added/before.yaml":N,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.1-oneof-variant-content-changed/before.yaml":P,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.2-oneof-variant-description-only-changed/before.yaml":U,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.1-oneof-three-variants-unchanged/before.yaml":F,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.2-root-description-changed-oneof-unchanged/before.yaml":D}),A=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/3.1-oneof-variant-added/after.yaml":J,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.1-oneof-variant-content-changed/after.yaml":R,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.2-oneof-variant-description-only-changed/after.yaml":x,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.1-oneof-three-variants-unchanged/after.yaml":B,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.2-root-description-changed-oneof-unchanged/after.yaml":I}),E=S(T,A),H=C(E),oe={title:"JSON Schema Diffs Suite (Hiding Unchanged Nodes)/Combiners Samples",component:j,argTypes:O},e=w(j,H),n=e("3.1-oneof-variant-added"),t=e("4.1-oneof-variant-content-changed"),o=e("4.2-oneof-variant-description-only-changed"),r=e("5.1-oneof-three-variants-unchanged"),s=e("5.2-root-description-changed-oneof-unchanged");var i,a,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:'createCaseStory("3.1-oneof-variant-added")',...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var p,d,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:'createCaseStory("4.1-oneof-variant-content-changed")',...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var _,m,h;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("4.2-oneof-variant-description-only-changed")',...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var y,f,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("5.1-oneof-three-variants-unchanged")',...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var u,l,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("5.2-root-description-changed-oneof-unchanged")',...(v=(l=s.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};const re=["Case_3_1_oneof_variant_added","Case_4_1_oneof_variant_content_changed","Case_4_2_oneof_variant_description_only_changed","Case_5_1_oneof_three_variants_unchanged","Case_5_2_root_description_changed_oneof_unchanged"];export{n as Case_3_1_oneof_variant_added,t as Case_4_1_oneof_variant_content_changed,o as Case_4_2_oneof_variant_description_only_changed,r as Case_5_1_oneof_three_variants_unchanged,s as Case_5_2_root_description_changed_oneof_unchanged,re as __namedExportsOrder,oe as default};
