import{c as m}from"./diffs-samples-cases-1df1f3ae.js";import{c as d,d as c,j as _,a as y}from"./json-schema-diffs-utils-f64e2f8a.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-f8813bcd.js";import"./DiffBadge-2c39fcfb.js";import"./IndexesNodeViewer-854c958a.js";import"./DdlTableDiffsViewer-1691fe3e.js";/* empty css              */import"./DdlTableViewer-10ae7ffc.js";import"./GraphQLOperationDiffViewer-89ad93c7.js";import"./GraphPropNodeViewer-3d0fd400.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f5bfa916.js";import"./preprocess-8cff05ac.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const f=`type: object
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
`,j=Object.assign({"../../../../samples/json-schema-diffs/extensions/object-two-properties/01-second-property-added/before.yaml":f,"../../../../samples/json-schema-diffs/extensions/object-two-properties/02-second-property-removed/before.yaml":l}),g=Object.assign({"../../../../samples/json-schema-diffs/extensions/object-two-properties/01-second-property-added/after.yaml":b,"../../../../samples/json-schema-diffs/extensions/object-two-properties/02-second-property-removed/after.yaml":S}),u=m(j,g),v=d(u),z={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/Object Two Properties",component:c,argTypes:_},i=y(c,v),e=i("01-second-property-added"),o=i("02-second-property-removed");var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-property-added")',...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,p,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-property-removed")',...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const G=["Case_01_second_property_added","Case_02_second_property_removed"];export{e as Case_01_second_property_added,o as Case_02_second_property_removed,G as __namedExportsOrder,z as default};
