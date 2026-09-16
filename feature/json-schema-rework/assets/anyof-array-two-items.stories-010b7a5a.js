import{c as p}from"./diffs-samples-cases-1df1f3ae.js";import{c as d,J as i,j as y,a as f}from"./json-schema-diffs-utils-620fc5da.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-74d5c166.js";import"./DiffBadge-2c39fcfb.js";import"./IndexesNodeViewer-3a67fa29.js";import"./DdlTableDiffsViewer-cf6c077a.js";/* empty css              */import"./DdlTableViewer-c2dafaa7.js";import"./GraphQLOperationDiffViewer-89ad93c7.js";import"./GraphPropNodeViewer-3d0fd400.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f5bfa916.js";import"./preprocess-8cff05ac.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const _=`anyOf:
  - type: array
    items:
      - type: string
  - type: boolean
`,l=`anyOf:
  - type: array
    items:
      - type: string
      - type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`,S=`anyOf:
  - type: array
    items:
      - type: string
      - type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`,g=`anyOf:
  - type: array
    items:
      - type: string
  - type: boolean
`,b=Object.assign({"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/01-second-item-added/before.yaml":_,"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/02-second-item-removed/before.yaml":l}),v=Object.assign({"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/01-second-item-added/after.yaml":S,"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/02-second-item-removed/after.yaml":g}),x=p(b,v),h=d(x),z={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/AnyOf Array Two Items",component:i,argTypes:y},c=f(i,h),e=c("01-second-item-added"),s=c("02-second-item-removed");var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-item-added")',...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,r,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-item-removed")',...(m=(r=s.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const G=["Case_01_second_item_added","Case_02_second_item_removed"];export{e as Case_01_second_item_added,s as Case_02_second_item_removed,G as __namedExportsOrder,z as default};
