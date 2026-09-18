import{c as d}from"./diffs-samples-cases-1df1f3ae.js";import{c as p,J as m,j as l,a as f}from"./json-schema-diffs-utils-1cc2f7b2.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-f8813bcd.js";import"./DiffBadge-2c39fcfb.js";import"./IndexesNodeViewer-854c958a.js";import"./DdlTableDiffsViewer-1691fe3e.js";/* empty css              */import"./DdlTableViewer-10ae7ffc.js";import"./GraphQLOperationDiffViewer-89ad93c7.js";import"./GraphPropNodeViewer-3d0fd400.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f5bfa916.js";import"./preprocess-8cff05ac.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const _=`allOf:
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
