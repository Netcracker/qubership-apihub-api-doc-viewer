import{c as a,a as s}from"./json-schema-samples-cases-7fb19ce1.js";import{j as r,c as m}from"./json-schema-samples-common-c709759e.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-b3ee9740.js";import"./DiffBadge-3394d163.js";import"./IndexesNodeViewer-6c0f4422.js";import"./DdlTableDiffsViewer-b43d1e75.js";/* empty css              */import"./DdlTableViewer-64f3e8cb.js";import"./GraphQLOperationDiffViewer-da7f8f93.js";import"./GraphPropNodeViewer-6d57cd18.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-beb63fb6.js";const p=`oneOf:
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
`,i=Object.assign({"../../../../samples/json-schema/combiner/001-oneof-nested-anyof/sample.yaml":p}),c=a(i),y=s(c),l=m(y),I={...r,id:"json-schema-suite-combiner",title:"JSON Schema Suite/Combiner"},e=l("001-oneof-nested-anyof");var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'createCaseStory("001-oneof-nested-anyof")',...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const E=["Case_001_oneof_nested_anyof"];export{e as Case_001_oneof_nested_anyof,E as __namedExportsOrder,I as default};
