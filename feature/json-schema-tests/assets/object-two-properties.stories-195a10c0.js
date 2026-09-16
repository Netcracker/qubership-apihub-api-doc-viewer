import{c as m}from"./diffs-samples-cases-1df1f3ae.js";import{c as d,J as c,j as _,a as y}from"./json-schema-diffs-utils-d36cbe43.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-12880bbf.js";import"./DiffBadge-4d4a1c37.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-449194d6.js";import"./GraphPropNodeViewer-9f9c17b4.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-b5e727b5.js";import"./preprocess-71f62f03.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";const f=`type: object
properties:
  name:
    type: string
`,l=`type: object
properties:
  name:
    type: string
  count:
    type: integer
    x-internal: true
    x-version: '1.0.0'
`,b=`type: object
properties:
  name:
    type: string
  count:
    type: integer
    x-internal: true
    x-version: '1.0.0'
`,S=`type: object
properties:
  name:
    type: string
`,j=Object.assign({"../../../../samples/json-schema-diffs/extensions/object-two-properties/01-second-property-added/before.yaml":f,"../../../../samples/json-schema-diffs/extensions/object-two-properties/02-second-property-removed/before.yaml":l}),g=Object.assign({"../../../../samples/json-schema-diffs/extensions/object-two-properties/01-second-property-added/after.yaml":b,"../../../../samples/json-schema-diffs/extensions/object-two-properties/02-second-property-removed/after.yaml":S}),u=m(j,g),v=d(u),q={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/Object Two Properties",component:c,argTypes:_},i=y(c,v),e=i("01-second-property-added"),o=i("02-second-property-removed");var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-property-added")',...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,p,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-property-removed")',...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const z=["Case_01_second_property_added","Case_02_second_property_removed"];export{e as Case_01_second_property_added,o as Case_02_second_property_removed,z as __namedExportsOrder,q as default};
