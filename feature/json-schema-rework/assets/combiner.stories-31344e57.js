import{c as r}from"./json-schema-samples-cases-a27879e0.js";import{b as s}from"./sample-cases-8c510854.js";import{j as a,c as m}from"./json-schema-samples-common-94a7f902.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-ac5ce6e0.js";import"./UxBadge-bbd2cd58.js";import"./IndexesNodeViewer-75d730b0.js";import"./DdlTableDiffsViewer-5153503a.js";/* empty css              */import"./DdlTableViewer-e322261b.js";import"./GraphQLOperationDiffViewer-2fcd01db.js";import"./GraphPropNodeViewer-8013ceba.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-8e03d2cf.js";const p=`oneOf:
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
`,i=Object.assign({"../../../../samples/json-schema/combiner/001-oneof-nested-anyof/sample.yaml":p}),c=r(i),y=s(c),l=m(y),E={...a,id:"json-schema-suite-combiner",title:"JSON Schema Suite/Combiners/Combiner"},e=l("001-oneof-nested-anyof");var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'createCaseStory("001-oneof-nested-anyof")',...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const L=["Case_001_oneof_nested_anyof"];export{e as Case_001_oneof_nested_anyof,L as __namedExportsOrder,E as default};
