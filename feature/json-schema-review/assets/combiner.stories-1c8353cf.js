import{c as s,a}from"./json-schema-samples-cases-65f7b341.js";import{j as r,c as m}from"./json-schema-samples-common-946c7b86.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-7e4d71d7.js";import"./DiffBadge-2b171eda.js";import"./IndexesNodeViewer-0c1fa703.js";import"./DdlTableDiffsViewer-62d1ded1.js";/* empty css              */import"./DdlTableViewer-975eea68.js";import"./GraphQLOperationDiffViewer-346f0994.js";import"./GraphPropNodeViewer-40e9d38d.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e7bff01f.js";const p=`oneOf:
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
`,i=Object.assign({"../../../../samples/json-schema/combiner/001-oneof-nested-anyof/sample.yaml":p}),c=s(i),y=a(c),l=m(y),I={...r,id:"json-schema-suite-combiner",title:"JSON Schema Suite/Combiners/Combiner"},e=l("001-oneof-nested-anyof");var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'createCaseStory("001-oneof-nested-anyof")',...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const E=["Case_001_oneof_nested_anyof"];export{e as Case_001_oneof_nested_anyof,E as __namedExportsOrder,I as default};
