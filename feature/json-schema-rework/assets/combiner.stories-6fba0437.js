import{c as r}from"./json-schema-samples-cases-a27879e0.js";import{b as s}from"./sample-cases-8c510854.js";import{j as a,c as m}from"./json-schema-samples-common-ca8aab3e.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-7637814e.js";import"./UxBadge-7cc75759.js";import"./IndexesNodeViewer-6f9d01f2.js";import"./DdlTableDiffsViewer-7db18fb9.js";/* empty css              */import"./DdlTableViewer-d84f848c.js";import"./GraphQLOperationDiffViewer-e32d3161.js";import"./GraphPropNodeViewer-d304f569.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f79343a0.js";const p=`oneOf:
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
