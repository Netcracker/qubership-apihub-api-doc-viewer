import{c as a,a as s}from"./json-schema-samples-cases-65f7b341.js";import{j as r,c as m}from"./json-schema-samples-common-02a7c2d3.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-423290f8.js";import"./DiffBadge-f5ba12be.js";import"./IndexesNodeViewer-b274764c.js";import"./DdlTableDiffsViewer-58a1b31e.js";/* empty css              */import"./DdlTableViewer-b21b12f0.js";import"./GraphQLOperationDiffViewer-ec42f7d3.js";import"./GraphPropNodeViewer-452b0f1f.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-c53f5f81.js";const p=`oneOf:
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
