import{c as m}from"./diffs-samples-cases-91c2d1e6.js";import{d as c,j as d,c as l}from"./json-schema-diffs-utils-f1bfafd5.js";import{b as _}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-908de172.js";import"./UxBadge-190a23d2.js";import"./IndexesNodeViewer-fee5cd8c.js";import"./DdlTableDiffsViewer-fd6285f4.js";/* empty css              */import"./DdlTableViewer-628f1b1b.js";import"./GraphQLOperationDiffViewer-8a73b026.js";import"./GraphPropNodeViewer-687f278e.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-d1208066.js";import"./preprocess-39b8762b.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const f=`allOf:
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
`,j=Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/01-second-property-added/before.yaml":f,"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/02-second-property-removed/before.yaml":y}),S=Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/01-second-property-added/after.yaml":g,"../../../../samples/json-schema-diffs/extensions/allof-object-two-properties/02-second-property-removed/after.yaml":b}),h=m(j,S),u=_(h),z={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/AllOf Object Two Properties",component:c,argTypes:d},i=l(c,u),e=i("01-second-property-added"),o=i("02-second-property-removed");var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-property-added")',...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,a,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-property-removed")',...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const G=["Case_01_second_property_added","Case_02_second_property_removed"];export{e as Case_01_second_property_added,o as Case_02_second_property_removed,G as __namedExportsOrder,z as default};
