import{c as a,a as r}from"./json-schema-samples-cases-29efb614.js";import{j as s,c as m}from"./json-schema-next-samples-common-0b4723fe.js";import"./parse-yaml-source-d821fde9.js";import"./public-api-d6a34651.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-cc5d4182.js";import"./DiffBadge-2926193f.js";import"./IndexesNodeViewer-9f35c66e.js";import"./DdlTableDiffsViewer-4e7e9aea.js";/* empty css              */import"./DdlTableViewer-f85ef4e8.js";import"./GraphQLOperationDiffViewer-ff87689f.js";import"./GraphPropNodeViewer-748f6777.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-26efa0cc.js";const p=`oneOf:
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
