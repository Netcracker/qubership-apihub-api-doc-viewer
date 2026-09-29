import{c as d}from"./diffs-samples-cases-91c2d1e6.js";import{d as i,j as p,c as _}from"./json-schema-diffs-utils-9309cc07.js";import{b as y}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-35ca18f4.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-bc39d3de.js";import"./DdlTableDiffsViewer-5f4cf09a.js";/* empty css              */import"./DdlTableViewer-30ab278b.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";import"./preprocess-84a953af.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const l=`type: array
items:
  - type: string
`,f=`type: array
items:
  - type: string
  - type: integer
    x-internal: true
    x-version: '1.0.0'
`,S=`type: array
items:
  - type: string
  - type: integer
    x-internal: true
    x-version: '1.0.0'
`,g=`type: array
items:
  - type: string
`,v=Object.assign({"../../../../samples/json-schema-diffs/extensions/array-two-items/01-second-item-added/before.yaml":l,"../../../../samples/json-schema-diffs/extensions/array-two-items/02-second-item-removed/before.yaml":f}),x=Object.assign({"../../../../samples/json-schema-diffs/extensions/array-two-items/01-second-item-added/after.yaml":S,"../../../../samples/json-schema-diffs/extensions/array-two-items/02-second-item-removed/after.yaml":g}),b=d(v,x),u=y(b),H={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/Array Two Items",component:i,argTypes:p},c=_(i,u),e=c("01-second-item-added"),s=c("02-second-item-removed");var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-item-added")',...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var a,n,m;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:'createCaseStory("02-second-item-removed")',...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const K=["Case_01_second_item_added","Case_02_second_item_removed"];export{e as Case_01_second_item_added,s as Case_02_second_item_removed,K as __namedExportsOrder,H as default};
