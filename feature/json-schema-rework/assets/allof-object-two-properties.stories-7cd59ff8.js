import{c as m}from"./diffs-samples-cases-1df1f3ae.js";import{c as d,J as c,j as l,a as f}from"./json-schema-diffs-utils-620fc5da.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-74d5c166.js";import"./DiffBadge-2c39fcfb.js";import"./IndexesNodeViewer-3a67fa29.js";import"./DdlTableDiffsViewer-cf6c077a.js";/* empty css              */import"./DdlTableViewer-c2dafaa7.js";import"./GraphQLOperationDiffViewer-89ad93c7.js";import"./GraphPropNodeViewer-3d0fd400.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f5bfa916.js";import"./preprocess-8cff05ac.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const _=`allOf:
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
`,S=Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/01-second-property-added/before.yaml":_,"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/02-second-property-removed/before.yaml":y}),j=Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/01-second-property-added/after.yaml":g,"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/02-second-property-removed/after.yaml":b}),h=m(S,j),u=d(h),k={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/AllOf Object Two Properties",component:c,argTypes:l},i=f(c,u),e=i("01-second-property-added"),o=i("02-second-property-removed");var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-property-added")',...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,a,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-property-removed")',...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const q=["Case_01_second_property_added","Case_02_second_property_removed"];export{e as Case_01_second_property_added,o as Case_02_second_property_removed,q as __namedExportsOrder,k as default};
