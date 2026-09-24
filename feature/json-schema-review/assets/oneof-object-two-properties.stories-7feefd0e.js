import{c as m}from"./diffs-samples-cases-1df1f3ae.js";import{c as d,d as c,j as y,a as f}from"./json-schema-diffs-utils-cd3f3322.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-3ee36e9c.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-343f36de.js";import"./DdlTableDiffsViewer-daaefaef.js";/* empty css              */import"./DdlTableViewer-d7742d03.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";import"./preprocess-8acbbf55.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const _=`oneOf:
  - type: object
    properties:
      name:
        type: string
  - type: boolean
`,l=`oneOf:
  - type: object
    properties:
      name:
        type: string
      count:
        type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`,b=`oneOf:
  - type: object
    properties:
      name:
        type: string
      count:
        type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`,S=`oneOf:
  - type: object
    properties:
      name:
        type: string
  - type: boolean
`,j=Object.assign({"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/01-second-property-added/before.yaml":_,"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/02-second-property-removed/before.yaml":l}),g=Object.assign({"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/01-second-property-added/after.yaml":b,"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/02-second-property-removed/after.yaml":S}),u=m(j,g),v=d(u),z={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/OneOf Object Two Properties",component:c,argTypes:y},i=f(c,v),e=i("01-second-property-added"),o=i("02-second-property-removed");var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-property-added")',...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,p,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-property-removed")',...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const G=["Case_01_second_property_added","Case_02_second_property_removed"];export{e as Case_01_second_property_added,o as Case_02_second_property_removed,G as __namedExportsOrder,z as default};
