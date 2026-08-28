import{c as a,a as r}from"./json-schema-samples-cases-65f7b341.js";import{j as s,c as m}from"./json-schema-next-samples-common-5db60aa5.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-1c38bb10.js";import"./DiffBadge-04d5bd8d.js";import"./IndexesNodeViewer-d4b52b40.js";import"./DdlTableDiffsViewer-a7bf7281.js";/* empty css              */import"./DdlTableViewer-72898774.js";import"./GraphQLOperationDiffViewer-65ccf201.js";import"./GraphPropNodeViewer-114b5f87.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f7e37286.js";const p=`oneOf:
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
