import{c as a,a as r}from"./json-schema-samples-cases-65f7b341.js";import{j as s,c as m}from"./json-schema-next-samples-common-c131612d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-ee521c70.js";import"./DiffBadge-7a1cf565.js";import"./IndexesNodeViewer-87d60c03.js";import"./DdlTableDiffsViewer-a78946b7.js";/* empty css              */import"./DdlTableViewer-454c53df.js";import"./GraphQLOperationDiffViewer-9273ef44.js";import"./GraphPropNodeViewer-5195dcd6.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e2e598a2.js";const p=`oneOf:
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
