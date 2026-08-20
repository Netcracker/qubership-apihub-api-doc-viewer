import{c as d}from"./diffs-samples-cases-1df1f3ae.js";import{c as m,J as c,j as _,a as f}from"./json-schema-diffs-utils-e8e2e063.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-cc5d4182.js";import"./DiffBadge-2926193f.js";import"./IndexesNodeViewer-9f35c66e.js";import"./DdlTableDiffsViewer-4e7e9aea.js";/* empty css              */import"./DdlTableViewer-f85ef4e8.js";import"./GraphQLOperationDiffViewer-ff87689f.js";import"./GraphPropNodeViewer-748f6777.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-26efa0cc.js";import"./preprocess-741f5770.js";import"./parse-yaml-source-d821fde9.js";import"./public-api-d6a34651.js";const g=`type: object
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
`,y=`type: object
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
`,h=`type: object
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
`,l=`type: object
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
`,b=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/3.1-oneof-variant-added/before.yaml":g,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.1-oneof-variant-content-changed/before.yaml":y}),u=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/3.1-oneof-variant-added/after.yaml":h,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/combiners/4.1-oneof-variant-content-changed/after.yaml":l}),S=d(b,u),v=m(S),N={title:"JSON Schema Diffs Suite/Hiding Unchanged Rows Combiners Samples",component:c,argTypes:_},p=f(c,v),e=p("3.1-oneof-variant-added"),n=p("4.1-oneof-variant-content-changed");var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("3.1-oneof-variant-added")',...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var r,a,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("4.1-oneof-variant-content-changed")',...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const k=["Case_3_1_oneof_variant_added","Case_4_1_oneof_variant_content_changed"];export{e as Case_3_1_oneof_variant_added,n as Case_4_1_oneof_variant_content_changed,k as __namedExportsOrder,N as default};
