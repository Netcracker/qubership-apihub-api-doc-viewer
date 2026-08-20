import{c as a,a as r}from"./json-schema-samples-cases-5c62eccb.js";import{j as s,c as m}from"./json-schema-next-samples-common-41edc163.js";import"./parse-yaml-source-c8480a27.js";import"./public-api-d6a34651.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-988c4a65.js";import"./DiffBadge-ea2802e9.js";import"./IndexesNodeViewer-93dc441a.js";import"./DdlTableDiffsViewer-8919eca1.js";/* empty css              */import"./DdlTableViewer-25f1408e.js";import"./GraphQLOperationDiffViewer-be86ff5d.js";import"./GraphPropNodeViewer-34693b53.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-1f45739c.js";const p=`oneOf:
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
