import{c as s,a}from"./json-schema-samples-cases-65f7b341.js";import{j as r,c as m}from"./json-schema-samples-common-7112e004.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-ce9af5f1.js";import"./UxBadge-96977876.js";import"./IndexesNodeViewer-300692d8.js";import"./DdlTableDiffsViewer-f3142203.js";/* empty css              */import"./DdlTableViewer-43a2e40c.js";import"./GraphQLOperationDiffViewer-90d7fdae.js";import"./GraphPropNodeViewer-de716f5c.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-2c9808a5.js";const p=`oneOf:
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
