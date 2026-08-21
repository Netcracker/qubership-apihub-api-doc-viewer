import{c as a,a as r}from"./json-schema-samples-cases-5c62eccb.js";import{j as s,c as m}from"./json-schema-next-samples-common-b2b0aa2d.js";import"./parse-yaml-source-c8480a27.js";import"./public-api-d6a34651.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-b9bc140d.js";import"./DiffBadge-7a1cf565.js";import"./IndexesNodeViewer-ccc41fa8.js";import"./DdlTableDiffsViewer-28175534.js";/* empty css              */import"./DdlTableViewer-f58f7011.js";import"./GraphQLOperationDiffViewer-9273ef44.js";import"./GraphPropNodeViewer-5195dcd6.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e2e598a2.js";const p=`oneOf:
  - type: string
    description: String variant
    minLength: 1
  - type: object
    description: Object variant
    properties:
      prop1:
        type: string
      prop2:
        type: number
  - anyOf:
      - type: number
      - type: boolean
        description: Boolean variant
`,i=Object.assign({"../../../../samples/json-schema/combiner/001-oneof-nested-anyof/sample.yaml":p}),c=a(i),y=r(c),l=m(y),F={...s,id:"json-schema-next-combiner",title:"JSON Schema Next/Combiner"},e=l("001-oneof-nested-anyof");var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'createCaseStory("001-oneof-nested-anyof")',...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const I=["Case_001_oneof_nested_anyof"];export{e as Case_001_oneof_nested_anyof,I as __namedExportsOrder,F as default};
