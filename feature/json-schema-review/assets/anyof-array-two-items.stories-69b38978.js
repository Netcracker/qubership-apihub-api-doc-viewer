import{c as p}from"./diffs-samples-cases-1df1f3ae.js";import{c as d,d as i,j as y,a as f}from"./json-schema-diffs-utils-33235f68.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-f409c7c9.js";import"./UxBadge-26cb9909.js";import"./IndexesNodeViewer-9562384b.js";import"./DdlTableDiffsViewer-dbb8d5b6.js";/* empty css              */import"./DdlTableViewer-65ac2970.js";import"./GraphQLOperationDiffViewer-1684ae4b.js";import"./GraphPropNodeViewer-8d4634e8.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-938dff1f.js";import"./preprocess-2e2ab2fd.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const _=`anyOf:
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
`,b=Object.assign({"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/01-second-item-added/before.yaml":_,"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/02-second-item-removed/before.yaml":l}),v=Object.assign({"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/01-second-item-added/after.yaml":S,"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/02-second-item-removed/after.yaml":g}),x=p(b,v),h=d(x),G={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/AnyOf Array Two Items",component:i,argTypes:y},c=f(i,h),e=c("01-second-item-added"),t=c("02-second-item-removed");var s,o,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'createCaseStory("01-second-item-added")',...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,r,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-item-removed")',...(m=(r=t.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const H=["Case_01_second_item_added","Case_02_second_item_removed"];export{e as Case_01_second_item_added,t as Case_02_second_item_removed,H as __namedExportsOrder,G as default};
