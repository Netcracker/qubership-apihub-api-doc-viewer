import{c as d}from"./diffs-samples-cases-1df1f3ae.js";import{c as p,d as m,j as l,a as f}from"./json-schema-diffs-utils-c81df957.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-7e4d71d7.js";import"./DiffBadge-2b171eda.js";import"./IndexesNodeViewer-0c1fa703.js";import"./DdlTableDiffsViewer-62d1ded1.js";/* empty css              */import"./DdlTableViewer-975eea68.js";import"./GraphQLOperationDiffViewer-346f0994.js";import"./GraphPropNodeViewer-40e9d38d.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e7bff01f.js";import"./preprocess-04b84fe8.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const _=`allOf:
  - type: array
    items:
      - type: string
  - description: Unchanged constraint
`,y=`allOf:
  - type: array
    items:
      - type: string
      - type: integer
        x-internal: true
        x-version: '1.0.0'
  - description: Unchanged constraint
`,g=`allOf:
  - type: array
    items:
      - type: string
      - type: integer
        x-internal: true
        x-version: '1.0.0'
  - description: Unchanged constraint
`,S=`allOf:
  - type: array
    items:
      - type: string
  - description: Unchanged constraint
`,h=Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/01-second-item-added/before.yaml":_,"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/02-second-item-removed/before.yaml":y}),v=Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/01-second-item-added/after.yaml":g,"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/02-second-item-removed/after.yaml":S}),x=d(h,v),u=p(x),z={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/AllOf Array Two Items",component:m,argTypes:l},c=f(m,u),e=c("01-second-item-added"),t=c("02-second-item-removed");var s,o,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'createCaseStory("01-second-item-added")',...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-item-removed")',...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const G=["Case_01_second_item_added","Case_02_second_item_removed"];export{e as Case_01_second_item_added,t as Case_02_second_item_removed,G as __namedExportsOrder,z as default};
