import{c as u}from"./diffs-samples-cases-1df1f3ae.js";import{c as l,J as b,j as v,a as j}from"./json-schema-diffs-utils-9e36c572.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-3280508a.js";import"./DiffBadge-8e6bc6cf.js";import"./IndexesNodeViewer-dafabf2b.js";import"./DdlTableDiffsViewer-5a8d38da.js";/* empty css              */import"./DdlTableViewer-262e0d00.js";import"./GraphQLOperationDiffViewer-3f5a58fb.js";import"./GraphPropNodeViewer-be0a144d.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-216955ad.js";import"./preprocess-ccc7e82a.js";import"./parse-yaml-source-c8480a27.js";import"./public-api-d6a34651.js";const S=`type: object
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
`,C=`type: object
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
`,O=`type: object
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
`,w=`type: object
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
`,N=`type: object
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
`,P=`type: object
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
`,U=`type: object
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
`,D=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/3.1-oneof-variant-added/before.yaml":S,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.1-oneof-variant-content-changed/before.yaml":C,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.1-oneof-three-variants-unchanged/before.yaml":O,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.2-root-description-changed-oneof-unchanged/before.yaml":w}),J=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/3.1-oneof-variant-added/after.yaml":N,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.1-oneof-variant-content-changed/after.yaml":P,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.1-oneof-three-variants-unchanged/after.yaml":F,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/5.2-root-description-changed-oneof-unchanged/after.yaml":U}),R=u(D,J),x=l(R),Y={title:"JSON Schema Diffs Suite/Hiding Unchanged Rows Combiners Samples",component:b,argTypes:v},o=j(b,x),e=o("3.1-oneof-variant-added"),n=o("4.1-oneof-variant-content-changed"),t=o("5.1-oneof-three-variants-unchanged"),r=o("5.2-root-description-changed-oneof-unchanged");var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'createCaseStory("3.1-oneof-variant-added")',...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("4.1-oneof-variant-content-changed")',...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,m,_;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:'createCaseStory("5.1-oneof-three-variants-unchanged")',...(_=(m=t.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var h,y,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("5.2-root-description-changed-oneof-unchanged")',...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const Z=["Case_3_1_oneof_variant_added","Case_4_1_oneof_variant_content_changed","Case_5_1_oneof_three_variants_unchanged","Case_5_2_root_description_changed_oneof_unchanged"];export{e as Case_3_1_oneof_variant_added,n as Case_4_1_oneof_variant_content_changed,t as Case_5_1_oneof_three_variants_unchanged,r as Case_5_2_root_description_changed_oneof_unchanged,Z as __namedExportsOrder,Y as default};
