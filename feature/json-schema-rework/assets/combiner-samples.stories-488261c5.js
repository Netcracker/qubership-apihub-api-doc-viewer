import{c as a,a as r}from"./json-schema-samples-cases-5c62eccb.js";import{j as s,c as m}from"./json-schema-next-samples-common-43f93418.js";import"./parse-yaml-source-c8480a27.js";import"./public-api-d6a34651.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-3280508a.js";import"./DiffBadge-8e6bc6cf.js";import"./IndexesNodeViewer-dafabf2b.js";import"./DdlTableDiffsViewer-5a8d38da.js";/* empty css              */import"./DdlTableViewer-262e0d00.js";import"./GraphQLOperationDiffViewer-3f5a58fb.js";import"./GraphPropNodeViewer-be0a144d.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-216955ad.js";const p=`oneOf:
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
