import{c as p}from"./diffs-samples-cases-91c2d1e6.js";import{d as i,j as d,c as y}from"./json-schema-diffs-utils-7c0d91ed.js";import{b as _}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-bd86394b.js";import"./UxBadge-a3d5708d.js";import"./IndexesNodeViewer-04e95f65.js";import"./DdlTableDiffsViewer-b5691702.js";/* empty css              */import"./DdlTableViewer-34306a32.js";import"./GraphQLOperationDiffViewer-b8487c17.js";import"./GraphPropNodeViewer-c64786c2.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-7b86c0e8.js";import"./preprocess-fae22708.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const f=`oneOf:
  - type: array
    items:
      - type: string
  - type: boolean
`,l=`oneOf:
  - type: array
    items:
      - type: string
      - type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`,S=`oneOf:
  - type: array
    items:
      - type: string
      - type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`,g=`oneOf:
  - type: array
    items:
      - type: string
  - type: boolean
`,b=Object.assign({"../../../../samples/json-schema-diffs/extensions/oneof-array-two-items/01-second-item-added/before.yaml":f,"../../../../samples/json-schema-diffs/extensions/oneof-array-two-items/02-second-item-removed/before.yaml":l}),v=Object.assign({"../../../../samples/json-schema-diffs/extensions/oneof-array-two-items/01-second-item-added/after.yaml":S,"../../../../samples/json-schema-diffs/extensions/oneof-array-two-items/02-second-item-removed/after.yaml":g}),x=p(b,v),u=_(x),H={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/OneOf Array Two Items",component:i,argTypes:d},c=y(i,u),e=c("01-second-item-added"),o=c("02-second-item-removed");var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-item-added")',...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var n,a,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-item-removed")',...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const K=["Case_01_second_item_added","Case_02_second_item_removed"];export{e as Case_01_second_item_added,o as Case_02_second_item_removed,K as __namedExportsOrder,H as default};
