import{c as p}from"./diffs-samples-cases-1df1f3ae.js";import{c as d,d as i,j as f,a as y}from"./json-schema-diffs-utils-cd3f3322.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-3ee36e9c.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-343f36de.js";import"./DdlTableDiffsViewer-daaefaef.js";/* empty css              */import"./DdlTableViewer-d7742d03.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";import"./preprocess-8acbbf55.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const _=`oneOf:
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
`,b=Object.assign({"../../../../samples/json-schema-diffs/extensions/oneof-array-two-items/01-second-item-added/before.yaml":_,"../../../../samples/json-schema-diffs/extensions/oneof-array-two-items/02-second-item-removed/before.yaml":l}),v=Object.assign({"../../../../samples/json-schema-diffs/extensions/oneof-array-two-items/01-second-item-added/after.yaml":S,"../../../../samples/json-schema-diffs/extensions/oneof-array-two-items/02-second-item-removed/after.yaml":g}),x=p(b,v),h=d(x),G={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/OneOf Array Two Items",component:i,argTypes:f},c=y(i,h),e=c("01-second-item-added"),o=c("02-second-item-removed");var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-item-added")',...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,r,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:'createCaseStory("02-second-item-removed")',...(m=(r=o.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const H=["Case_01_second_item_added","Case_02_second_item_removed"];export{e as Case_01_second_item_added,o as Case_02_second_item_removed,H as __namedExportsOrder,G as default};
