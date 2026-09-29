import{c as p}from"./diffs-samples-cases-91c2d1e6.js";import{d as i,j as d,c as y}from"./json-schema-diffs-utils-9309cc07.js";import{b as _}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-35ca18f4.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-bc39d3de.js";import"./DdlTableDiffsViewer-5f4cf09a.js";/* empty css              */import"./DdlTableViewer-30ab278b.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";import"./preprocess-84a953af.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const f=`anyOf:
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
`,b=Object.assign({"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/01-second-item-added/before.yaml":f,"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/02-second-item-removed/before.yaml":l}),v=Object.assign({"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/01-second-item-added/after.yaml":S,"../../../../samples/json-schema-diffs/extensions/anyof-array-two-items/02-second-item-removed/after.yaml":g}),x=p(b,v),u=_(x),H={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/AnyOf Array Two Items",component:i,argTypes:d},c=y(i,u),e=c("01-second-item-added"),t=c("02-second-item-removed");var s,o,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'createCaseStory("01-second-item-added")',...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var r,n,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("02-second-item-removed")',...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const K=["Case_01_second_item_added","Case_02_second_item_removed"];export{e as Case_01_second_item_added,t as Case_02_second_item_removed,K as __namedExportsOrder,H as default};
