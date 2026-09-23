import{c as m}from"./diffs-samples-cases-1df1f3ae.js";import{c as d,d as c,j as l,a as f}from"./json-schema-diffs-utils-c410b856.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-6f01e639.js";import"./UxBadge-96977876.js";import"./IndexesNodeViewer-decab25f.js";import"./DdlTableDiffsViewer-1efcef13.js";/* empty css              */import"./DdlTableViewer-3f8f7ca3.js";import"./GraphQLOperationDiffViewer-90d7fdae.js";import"./GraphPropNodeViewer-de716f5c.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-2c9808a5.js";import"./preprocess-f40c604b.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const _=`allOf:
  - type: object
    properties:
      name:
        type: string
  - description: Unchanged constraint
`,y=`allOf:
  - type: object
    properties:
      name:
        type: string
      count:
        type: integer
        x-internal: true
        x-version: '1.0.0'
  - description: Unchanged constraint
`,g=`allOf:
  - type: object
    properties:
      name:
        type: string
      count:
        type: integer
        x-internal: true
        x-version: '1.0.0'
  - description: Unchanged constraint
`,b=`allOf:
  - type: object
    properties:
      name:
        type: string
  - description: Unchanged constraint
`,S=Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/01-second-property-added/before.yaml":_,"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/02-second-property-removed/before.yaml":y}),j=Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/01-second-property-added/after.yaml":g,"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/02-second-property-removed/after.yaml":b}),h=m(S,j),u=d(h),q={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/AllOf Object Two Properties",component:c,argTypes:l},i=f(c,u),e=i("01-second-property-added"),o=i("02-second-property-removed");var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-property-added")',...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,a,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-property-removed")',...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const z=["Case_01_second_property_added","Case_02_second_property_removed"];export{e as Case_01_second_property_added,o as Case_02_second_property_removed,z as __namedExportsOrder,q as default};
