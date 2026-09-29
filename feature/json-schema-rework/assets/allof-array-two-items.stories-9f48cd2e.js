import{c as d}from"./diffs-samples-cases-91c2d1e6.js";import{d as m,j as p,c as l}from"./json-schema-diffs-utils-9309cc07.js";import{b as _}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-35ca18f4.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-bc39d3de.js";import"./DdlTableDiffsViewer-5f4cf09a.js";/* empty css              */import"./DdlTableViewer-30ab278b.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";import"./preprocess-84a953af.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const f=`allOf:
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
`,h=Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/01-second-item-added/before.yaml":f,"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/02-second-item-removed/before.yaml":y}),v=Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/01-second-item-added/after.yaml":g,"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/02-second-item-removed/after.yaml":S}),x=d(h,v),b=_(x),G={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/AllOf Array Two Items",component:m,argTypes:p},c=l(m,b),e=c("01-second-item-added"),t=c("02-second-item-removed");var s,o,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'createCaseStory("01-second-item-added")',...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var r,n,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("02-second-item-removed")',...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const H=["Case_01_second_item_added","Case_02_second_item_removed"];export{e as Case_01_second_item_added,t as Case_02_second_item_removed,H as __namedExportsOrder,G as default};
